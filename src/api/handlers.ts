import * as payment from '../service/payment';
import * as coach from '../service/coach';
import * as session from '../service/session';
import * as client from '../service/client';

// Payment part
async function paymentHandler (request, reply) {
    const { clientId, creditCard, cvv, sessionId } = request.body;

    try {
        const response = await payment.pay(clientId, creditCard, cvv, sessionId);
        return reply.code(200).send(response);
    } catch (error) {
        return reply.code(500).send(error);
    }
}

// Session part
async function getCoachSessionsHandler (request, reply) {
    const { id } = request.params;

    try {
        const response = await session.getSessions(id);
        return reply.code(200).send(response);
    } catch (error) {
        return reply.code(500).send(error);
    }
}

async function getCoachTakenSessionsHandler (request, reply) {
    const { id } = request.params;

    try {
        const response = await session.getTakenSessions(id);
        return reply.code(200).send(response);
    } catch (error) {
        return reply.code(500).send(error);
    }
}

async function getCoachUnapprovedSessionsHandler (request, reply) {
    const { id } = request.params;

    try {
        const response = await session.getUnapprovedSessions(id);
        return reply.code(200).send(response);
    } catch (error) {
        return reply.code(500).send(error);
    }
}

async function bookCoachSessionHandler (request, reply) {
    const { clientId, time, length, coachId } = request.body;

    try {
        await session.bookSession(clientId, time, length, coachId);
        return reply.code(200).send();
    } catch (error) {
        return reply.code(500).send(error);
    }
}

async function replyCoachSessionHandler (request, reply) {
    const { sessionId, approved } = request.body;

    try {
        await session.replySession(sessionId, approved);
        return reply.code(200).send();
    } catch (error) {
        return reply.code(500).send(error);
    }
}

// Coach part
async function createCoachHandler (request, reply) {
    const { firstName, lastName } = request.body;

    try {
        await coach.createCoach(firstName, lastName);
        return reply.code(200).send();
    } catch (error) {
        return reply.code(500).send(error);
    }
}

async function getAllCoachesHandler (request, reply) {
    try {
        const response = await coach.getAllCoaches();
        return reply.code(200).send(response);
    } catch (error) {
        return reply.code(500).send(error);
    }
}

// Client part
async function createClientHandler (request, reply) {
    const { firstName, lastName } = request.body;

    try {
        await client.createClient(firstName, lastName);
        return reply.code(200).send();
    } catch (error) {
        return reply.code(500).send(error);
    }
}

async function getAllClientsHandler (request, reply) {
    try {
        const response = await client.getAllClients();
        return reply.code(200).send(response);
    } catch (error) {
        return reply.code(500).send(error);
    }
}

export {
    paymentHandler,
    getCoachSessionsHandler,
    getCoachTakenSessionsHandler,
    getCoachUnapprovedSessionsHandler,
    bookCoachSessionHandler,
    replyCoachSessionHandler,
    createCoachHandler,
    getAllCoachesHandler,
    createClientHandler,
    getAllClientsHandler,
}