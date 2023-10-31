"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http = require("http");
const server = http.createServer((req, res) => {
    if (req.method === 'GET' && req.url === '/') {
        const num1 = 2; // Hardcoded first number
        const num2 = 3; // Hardcoded second number
        const result = num1 + num2;
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(`Sum of ${num1} and ${num2} is ${result}`);
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});
const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
