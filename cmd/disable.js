const { Client, MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'выключить',
    description: 'ззз',
    run: async(client, message, args) => {
        let disable = await db.get(`disable`);
        if(disable === 1) return
        client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        try{
        let perm = message.author.id
        if(perm != 552431396149395466);
        else if (perm != 702799050109354146) return;
        await db.set(`disable`, 1)
        client.user.setPresence({status: "invisible"}); //sets presence
        client.user.setActivity('Dead Inside | 1000-7', { type: 'WATCHING' });
        client.channels.cache.get('1043779589878579220').send(`Бот выключен`);
        }   catch (error) {
            const errorEmbed = new MessageEmbed()
            .setDescription(':x: Произошла ошибка')
            .setColor('#FF0000')
            return message.channel.send({ embeds: [errorEmbed] }).then(msg => setTimeout(() => msg.delete(), 5000)) //send an embed when it caught errorr
        }
    }
}