"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const client_1 = require("@repo/db/client");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post("/signup", async (req, res) => {
    const something = await client_1.client.user.create({
        data: {
            username: Math.random().toString(),
            password: Math.random().toString(),
        },
    });
    res.status(200).json({
        success: true,
        data: {
            something,
        },
    });
});
app.listen(5000, () => {
    console.log("Server is listening at 5000");
});
