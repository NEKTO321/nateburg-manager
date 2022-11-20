const { Client, Message, MessageEmbed, Collection } = require ('discord.js');
const client = new Client({intents: 131071});
const token = process.env['token'];
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
module.exports = client;
const prefix = '*';
const fs = require('fs');
client.commands = new Collection();
const commandFiles = fs.readdirSync('./cmd').filter(file => file.endsWith('.js'));
const keepAlive = require("./server");
for(const file of commandFiles){
  const command = require(`./cmd/${file}`);
  client.commands.set(command.name, command);
}
client.once('ready', async(client, message, args) => {
  console.log(`Запущен ${client.user.tag}!`);
  let disable = await db.get(`disable`)
  if(disable === 0) {
  client.user.setPresence({status: "dnd"}); //sets presence
  client.user.setActivity('Dead Inside | 1000-7', { type: 'WATCHING' });
  client.channels.cache.get('1043779589878579220').send(`Бот запущен на хостинге и включён`);
  }
  if(disable === 1) { 
  client.user.setPresence({status: "invisible"}); //sets presence
  client.user.setActivity('Dead Inside | 1000-7', { type: 'WATCHING' });
  client.channels.cache.get('1043779589878579220').send(`Бот запущен на хостинге и выключен`);
  }
});

client.commands = new Collection();
client.aliases = new Collection();
client.events = new Collection();

client.categories = fs.readdirSync('./cmd');

//load the files
['cmd'].forEach((handler) => {
    require(`./handler/${handler}`)(client)
});
setInterval(async () => {
  await fetch('https://uncovered-cord-tablecloth.glitch.me')
}, 4000);
keepAlive();
client.login(token);