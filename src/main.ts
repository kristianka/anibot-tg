import { Bot, InlineKeyboard } from "grammy";

if (!process.env.TG_BOT) {
    console.error("Error: TG_BOT environment variable is not set.");
    process.exit(1);
}

const FRIEREN_COVER =
    "https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx154587-qQTzQnEJJ3oB.jpg";

const bot = new Bot(process.env.TG_BOT);

bot.on("message:text", async (ctx) => {
    console.log("Received message: " + ctx.message.text);

    setTimeout(async () => {
        const keyboard = new InlineKeyboard()
            .url("Reddit", "https://anilist.co/anime/154587")
            .url("Crunchyroll", "https://www.crunchyroll.com/series/GG5H5XQ0D");

        await ctx.replyWithPhoto(FRIEREN_COVER, {
            caption: `*Frieren: Beyond Journey's End*\nEpisode 12 is out!`,
            parse_mode: "Markdown",
            reply_markup: keyboard
        });
    }, 2000);
});

bot.start();
