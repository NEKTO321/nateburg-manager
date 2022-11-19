const { MessageEmbed } = require('discord.js');

const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'установить-бд',
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        try{
        let perm = message.author.id
        if(perm != 552431396149395466) return
        let chislo = args[0];
        let bd = args.slice(1).join(' ');
        if(!chislo) return message.channel.send(`Число не указано`).then(msg => setTimeout(() => msg.delete(), 5000))
        if(!bd) return message.channel.send(`БД не указана`).then(msg => setTimeout(() => msg.delete(), 5000))
        await db.set(`${bd}`, chislo);
        message.author.send(`Значение в бд ${bd} изменено на ${chislo}`)
    } catch {
    let errorEmbed = new MessageEmbed()
    .setDescription(":x: Произошла ошибка")
    .setColor('#FF0000')
    return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
}}
}