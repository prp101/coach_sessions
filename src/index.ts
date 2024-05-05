import Fastify, { FastifyInstance } from 'fastify';
import { routes } from './api/routes';

import * as mongoDb from './db/mongo_db';
import * as config from './config';

const server: FastifyInstance = Fastify({});

server.get('/health', async (request, reply) => {
    return ('I am alive');
});

server.register(require('fastify-swagger'), {
    routePrefix: '/swagger',
    swagger: {
        info: {
            title: 'Swagger',
            description: 'Fastify swagger API',
            version: '0.1.0'
        },
        host: 'localhost:3000',
        schemes: ['http'],
        consumes: ['application/json'],
        produces: ['application/json'],
    },
    exposeRoute: true
});

server.register(routes);

async function main() {
    try {
        await mongoDb.connect();
        await server.listen(config.PORT);
        const address: any = server.server.address();
        const port = typeof address === 'string' ? address : address?.port;

        console.log(`Running on address ${address.address} on port ${port}`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

main();
