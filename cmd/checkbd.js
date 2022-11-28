const { MessageEmbed } = require('discord.js');

const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'бд',
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        let disable = await db.get(`disable`);
        if(disable === 1) return
        client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        try{
        let perm = message.author.id
        if(perm != 552431396149395466);
        else if (perm != 702799050109354146) return;
        let bd = args.join(' ');
        if(!bd) return message.channel.send(`БД не указана`).then(msg => setTimeout(() => msg.delete(), 5000))
        let chislo = await db.get(`${bd}`)
        message.author.send(`Значение в бд ${bd}: ${chislo}`)
    } catch {
        let errorEmbed = new MessageEmbed()
        .setDescription(":x: Произошла ошибка")
        .setColor('#FF0000')
        return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
    }
    }
}