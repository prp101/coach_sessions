import * as mongoose from "mongoose";
import { Client, ClientDocument } from './client_schema';
import { Coach, CoachDocument } from './coach_schema';
import { Session, SessionDocument } from './session_schema';
import * as config from '../config';

let mongoDb: mongoose.Mongoose;
let connectionString: string = config.MONGO_DB;

async function connect () {
    console.log(connectionString);
    mongoDb = await mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });
}

async function disconnect () {
    mongoDb.disconnect;
}

// Client part
async function saveClient (clientObject): Promise<void>  {
    await Client.findOneAndUpdate({ _id: clientObject._id }, clientObject, {
        upsert: true,
        useFindAndModify: false,
    });
    return;
}

async function getClient (_id: string): Promise<ClientDocument> {
    const response = await Client.findOne({ _id }).select({ '__v': 0 });
    return response;
}

async function getClients (): Promise<ClientDocument[]> {
    const response = await Client.find().select({ '__v': 0 });
    return response;
}

// Coach part
async function saveCoach (coachObject): Promise<void> {
    await Coach.findOneAndUpdate({ _id: coachObject._id }, coachObject, {
        upsert: true,
        useFindAndModify: false,
    });
    return;
}

async function getCoach (_id: string): Promise<CoachDocument> {
    const response = await Coach.findOne({ _id }).select({ '__v': 0 });
    return response;
}

async function getCoaches (): Promise<CoachDocument[]> {
    const response = await Coach.find().select({ '__v': 0 });
    return response;
}

// Session part
async function saveSession (sessionObject): Promise<void> {
    await Session.findOneAndUpdate({ _id: sessionObject._id }, sessionObject, {
        upsert: true,
        useFindAndModify: false,
    });
    return;
}

async function deleteSession (_id: string): Promise<void> {
    await Session.deleteOne({ _id });
    return;
}

async function getSessionsForCoach (coachId: string): Promise<SessionDocument[]> {
    const response = await Session.find({ coachId, approved: true }).select({ '__v': 0 });
    return response;
}

async function getTakenSessionsForCoach (coachId: string): Promise<SessionDocument[]> {
    const response = await Session.find({ coachId, approved: true }).select({ '_id': 0, 'timeTo': 1, 'timeFrom': 1 });
    return response;
}

async function getUnapprovedSessions (coachId: string): Promise<SessionDocument[]> {
    const response = await Session.find({ coachId, approved: false }).select({ '__v': 0 });
    return response;
}

export {
    connect,
    disconnect,
    saveClient,
    getClient,
    getClients,
    saveCoach,
    getCoach,
    getCoaches,
    saveSession,
    deleteSession,
    getSessionsForCoach,
    getTakenSessionsForCoach,
    getUnapprovedSessions,
}