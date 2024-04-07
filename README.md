# Coach, Clients and Session API's

API service that allows creation of Coaches, Clients and Sessions.

How to run:

1. npm run build
2. npm run start

In order to test all API's, you need to use Authorization Header, Bearer token, token can be found in config file.
You should follow these steps:

1. You need to create Coach: POST /api/coach
2. You need to create Client: POST /api/client
3. Provide taken sessions of the coach to client: GET /api/coach/:id/sessions/taken
4. You need to pay for session: POST /api/payment
5. You need to book session: POST /api/session/book
6. Coach can check all unnaproved sessions: GET /api/coach/:id/sessions/pending
7. Coach needs to either approve or refuse booked sessions: POST /api/session/reply
8. All sessions that are approved for given coach: GET /api/coach/:id/sessions
9. Get all coaches: GET /api/coach/all
10. Get all clients: GET /api/client/all

Swagger can be found on URL: localhost:3000/swagger
