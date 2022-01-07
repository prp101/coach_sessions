import Fastify from 'fastify';
import * as handlers from './handlers';
import * as apiValidation from './api_schema';
import * as config from '../config';

export async function routes (Fastify, options, done) {
    Fastify.addHook('onRequest', (request, reply, done) => {
        if (!request.headers.authorization) return reply.code(400).send('Missing Authorization Header');
        if (request.headers.authorization.split(' ')[1] !== config.API_KEY) {
            return reply.code(400).send('Not Authorized');
        }
        done();
    })

    Fastify.post('/api/payment', { schema: apiValidation.paymentSchema }, handlers.paymentHandler);

    Fastify.get('/api/coach/:id/sessions', { schema: apiValidation.sessions }, handlers.getCoachSessionsHandler);

    Fastify.get('/api/coach/:id/sessions/taken', { schema: apiValidation.takenSessions }, handlers.getCoachTakenSessionsHandler);

    Fastify.get('/api/coach/:id/sessions/pending', { schema: apiValidation.pendingSessions }, handlers.getCoachUnapprovedSessionsHandler);

    Fastify.post('/api/session/book', { schema: apiValidation.bookingSchema }, handlers.bookCoachSessionHandler);

    Fastify.post('/api/session/reply', { schema: apiValidation.replySchema }, handlers.replyCoachSessionHandler);

    Fastify.post('/api/coach', { schema: apiValidation.createCoachSchema }, handlers.createCoachHandler);

    Fastify.get('/api/coach/all', { schema: apiValidation.getAllCoaches }, handlers.getAllCoachesHandler);

    Fastify.post('/api/client', { schema: apiValidation.createClientSchema }, handlers.createClientHandler);

    Fastify.get('/api/client/all', { schema: apiValidation.getAllClients }, handlers.getAllClientsHandler);

    done();
}