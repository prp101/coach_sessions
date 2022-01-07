import * as mongo from '../db/mongo_db';
import { v4 as uuidv4 } from 'uuid';

async function createClient (firstName: string, lastName: string) {
    const clientObject = {
        _id: uuidv4(),
        firstName,
        lastName,
    }
    await mongo.saveClient(clientObject);
    return;
}

async function getAllClients () {
    const response = await mongo.getClients();
    return response;
}

export {
    createClient,
    getAllClients,
}