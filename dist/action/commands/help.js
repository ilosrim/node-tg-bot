"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("../../core");
core_1.bot.command("help", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    return yield ctx.reply(`Botimizdagi komandalar:\n
  /start - botni ishga tushurish\n
  /help - yordam sorash\n
  
  Aloqa uchun @mirjr ga murojaat qiling.`, {
        parse_mode: "HTML",
    });
}));
