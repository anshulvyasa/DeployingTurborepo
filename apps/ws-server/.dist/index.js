"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@repo/db/client");
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 8080 });
ws.on("connection", async function (socket) {
    await client_1.client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
    socket.send("You Are connected Boss");
});
