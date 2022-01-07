import * as mongo from '../db/mongo_db';
import { v4 as uuidv4 } from 'uuid';

async function createCoach (firstName: string, lastName: string) {
    const coachObject = {
        _id: uuidv4(),
        firstName,
        lastName,
    }
    await mongo.saveCoach(coachObject);
    return;
}

async function getAllCoaches () {
    const response = await mongo.getCoaches();
    return response;
}

export {
    createCoach,
    getAllCoaches,
}