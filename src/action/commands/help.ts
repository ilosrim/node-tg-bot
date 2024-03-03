import { bot } from "../../core";

bot.command(
  "help",
  async (ctx) =>
    await ctx.reply(
      `Botimizdagi komandalar:\n
  /start - botni ishga tushurish\n
  /help - yordam sorash\n
  
  Aloqa uchun @mirjr ga murojaat qiling.`,
      {
        parse_mode: "HTML",
      }
    )
);
