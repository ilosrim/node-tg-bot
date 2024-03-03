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
core_1.bot.command("start", (ctx) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    return yield ctx.reply(`Salom <b>${(_a = ctx.from) === null || _a === void 0 ? void 0 : _a.first_name}</b>, botimizga xush kelibsiz`, {
        parse_mode: "HTML",
    });
}));
