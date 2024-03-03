import { bot } from "../../core";

bot.command(
  "start",
  async (ctx) =>
    await ctx.reply(
      `Salom <b>${ctx.from?.first_name}</b>, botimizga xush kelibsiz`,
      {
        parse_mode: "HTML",
      }
    )
);
