import express from "express";
import { Bot, webhookCallback } from "grammy";
import "dotenv/config";

export const bot = new Bot(process.env.BOT_TOKEN || "");

if (process.env.NODE_ENV === "DEVELOPMENT") {
  bot.start();
} else {
  const port = process.env.PORT || 3000;
  const app = express();
  app.use(express.json());
  app.use(`/${bot.token}`, webhookCallback(bot, "express"));
  app.listen(port, () => console.log(`listening on port ${port}`));
}
