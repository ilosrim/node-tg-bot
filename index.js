require("dotenv").config();
const { Bot, GrammyError, HttpError } = require("grammy");
const { PrayerTimes, Coordinates, CalculationMethod } = require("adhan");

const bot = new Bot(process.env.BOT_API_KEY || "");

bot.api.setMyCommands([
  {
    command: "start",
    description: "Botni ishga tushurish",
  },
  {
    command: "prayertimes",
    description: "Namoz vaqtlari",
  },
]);

bot.command("start", async (ctx) => {
  await ctx.reply(
    `Assalomu alaykum ${ctx.from.first_name}, dasturimizga xush kelibsiz.`
  );
});

bot.command("prayertimes", async (ctx) => {
  // User's location (latitude and longitude)
  const coordinates = new Coordinates(41.32106335286776, 69.24835442839965);

  // Date for which you want prayer times
  const date = new Date(); // Use the current date or any desired date

  // Calculation method (you can choose from various methods)
  const params = CalculationMethod.MoonsightingCommittee();

  // Calculate prayer times
  const prayerTimes = new PrayerTimes(coordinates, date, params);

  // Format and send the prayer times to the user
  const formattedTimes = `
    <b>Bomdod (Saharlik):</b>\n ${prayerTimes.fajr}
    <b>Quyosh:</b>\n ${prayerTimes.sunrise}
    <b>Peshin:</b>\n ${prayerTimes.dhuhr}
    <b>Asr:</b>\n ${prayerTimes.asr}
    <b>Shom (Iftor):</b>\n ${prayerTimes.maghrib}
    <b>Hufton:</b>\n ${prayerTimes.isha}
  `;

  await ctx.reply(formattedTimes, {
    parse_mode: "HTML",
  });
});

bot.on("message", (ctx) =>
  ctx.reply(
    `Bu bot namoz vaqtlarini bilish uchun yaratilgan, namoz vaqtlari haqida malumot olish uchun /prayertimes buyrug'ini bosing.`
  )
);

bot.catch((err) => {
  const ctx = err.ctx;
  console.error(`Error while handling update ${ctx.update.update_id}:`);
  const e = err.error;

  if (e instanceof GrammyError) {
    console.error("Error in request:", e.description);
  } else if (e instanceof HttpError) {
    console.error("Could not contact Telegram:", e);
  } else {
    console.error("Unknown error", e);
  }
});

bot.start();
