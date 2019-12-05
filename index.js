require('dotenv').config();
const Discord = require('discord.js');
const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;
const imReg = /\b[iIaA]\'*[mM]\b/;
const contentReg = /(?<=\b[iI]\'*[mM].*\s)(.+)/;
const thanksReg = /[tT][hH][Aa][Nn][Kk]/;

bot.login(TOKEN);

bot.on('ready', () => {
    console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
    if (imReg.test(msg.content) && msg.author.username != "ClaytonsBot") {
        if (msg.content.match(contentReg)) {
            msg.reply(`Hi ${msg.content.match(contentReg)[0]}, I'm Dad.`);
        }
    }
    if (thanksReg.test(msg.content)){
        msg.reply("You're Welcome!");
    }
});
