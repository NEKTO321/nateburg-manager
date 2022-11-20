const { Client, MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'перезапустить',
    description: 'ззз',
    run: async(client, message, args) => {
        let disable = await db.get(`disable`);
        if(disable === 1) return
        client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        let perm = message.author.id
        if(perm != 552431396149395466) return
        client.channels.cache.get('1043779589878579220').send(`Перезапуск бота`);
        с
    }
}