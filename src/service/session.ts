import * as mongo from '../db/mongo_db';
import { v4 as uuidv4 } from 'uuid';

async function getSessions (coachId: string) {
    const response = await mongo.getSessionsForCoach(coachId);
    return response;
}

async function getTakenSessions (coachId: string) {
    const response = await mongo.getTakenSessionsForCoach(coachId);
    return response;
}

async function getUnapprovedSessions (coachId: string) {
    const response = await mongo.getUnapprovedSessions(coachId);
    return response;
}

async function bookSession (clientId: string, time: string, length: number, coachId: string) {
    const timeFrom = new Date(time);
    const timeTo = new Date(timeFrom.getTime() + length*60000);

    const client = await mongo.getClient(clientId);
    if (!client) throw new Error('Client does not exist');
    const coach = await mongo.getCoach(coachId);
    if (!coach) throw new Error('Coach does not exist');

    const coachSessions = await mongo.getSessionsForCoach(coachId);
    if (coachSessions) {
        coachSessions.forEach(session => {
            if (session.approved) {
                if (timeFrom.getTime() <= session.timeTo.getTime() && timeFrom.getTime() >= session.timeFrom.getTime()) {
                    throw new Error('You can not book session, same time already exists');
                } else if (timeTo.getTime() <= session.timeTo.getTime() && timeTo.getTime() >= session.timeFrom.getTime()) {
                    throw new Error('You can not book session, same time already exists');
                }
            }
        });
    }

    const sessionObject = {
        _id: uuidv4(),
        clientId,
        timeFrom,
        timeTo,
        coachId,
        approved: false,
        length,
    }

    await mongo.saveSession(sessionObject);
    return;
}

async function replySession (_id: string, approved: boolean) {
    if (approved) {
        const sessionObject = {
            _id,
            approved: true,
        }
        await mongo.saveSession(sessionObject);
        return;
    } else {
        await mongo.deleteSession(_id);
        return;
    }
}

export {
    getSessions,
    bookSession,
    replySession,
    getUnapprovedSessions,
    getTakenSessions,
}