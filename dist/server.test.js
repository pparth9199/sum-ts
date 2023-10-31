"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
describe('HTTP Server', () => {
    let server;
    beforeAll(() => {
        server = require('./server');
    });
    afterAll((done) => {
        server.close(done);
    });
    it('should respond to GET request with plain text', (done) => {
        http.get('http://localhost:3000', (res) => {
            expect(res.statusCode).toBe(200);
            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });
            res.on('end', () => {
                expect(data).toBe('Sum of 2 and 3 is 5');
                done();
            });
        });
    });
    it('should respond with 404 to unknown routes', (done) => {
        http.get('http://localhost:3000/unknown', (res) => {
            expect(res.statusCode).toBe(404);
            done();
        });
    });
});
