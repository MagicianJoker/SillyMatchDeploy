import { Bot } from "./deps.deno.ts";

export const bot = new Bot("8096312892:AAGHPLucQh-X11xf0Vm532TH2B0uJvbyGHA");

bot.command("start", (ctx) => ctx.reply("Welcome! Up and running."));

bot.command("ping", (ctx) => ctx.reply(`Pong! ${new Date()} ${Date.now()}`));

bot.command("play", (ctx) => {ctx.replyWithGame("matchgame")});
bot.on("callback_query:game_short_name", (ctx) => {
    if (ctx.callbackQuery.game_short_name === "matchgame") {
        ctx.reply("game loading.");
        ctx.answerCallbackQuery({ url: "https://magicianjoker.icu/CocosSillyMatch/web-mobile/" });
    }
});

// 启动你的 bot
bot.start();
