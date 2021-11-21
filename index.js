const djs = require('discord.js');
const keepAlive = require("./server")
const bot = new djs.Client({
  intents: [
    "GUILDS",
    "GUILD_MESSAGES"
  ]
});
const config = process.env;

bot.on('ready', () => {
  console.log(bot.user.username + 'is online.')
});
bot.on('messageCreate', (msg) => {
  if(msg.author.bot || msg.channel.type === "dm")
  return;
  const messageArray = msg.content.split(' ');
  const cmd = messageArray[0];
  const args = msg.content.substring(msg.content.indexOf(' ') + 1);
  const prefix = config.prefix;

if(cmd === prefix + 'ping' ) {
msg.channel.send({
  content: 'pong'
})
}
});

keepAlive()
bot.login(config.token);
