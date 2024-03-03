"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bot = void 0;
const express_1 = __importDefault(require("express"));
const grammy_1 = require("grammy");
require("dotenv/config");
exports.bot = new grammy_1.Bot(process.env.BOT_TOKEN || "");
if (process.env.NODE_ENV === "DEVELOPMENT") {
    exports.bot.start();
}
else {
    const port = process.env.PORT || 3000;
    const app = (0, express_1.default)();
    app.use(express_1.default.json());
    app.use(`/${exports.bot.token}`, (0, grammy_1.webhookCallback)(exports.bot, "express"));
    app.listen(port, () => console.log(`listening on port ${port}`));
}
