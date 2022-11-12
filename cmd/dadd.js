const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'мз-принят',
    description: 'ззз',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        await message.guild.roles.fetch()
        if(message.member.permissions.has("ADMINISTRATOR"));
          else if(!message.member.roles.cache.has("1040655798742814761")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]);
        let role = message.guild.roles.cache.find(role => role.id === '1040571488853573642')
        let role2 = message.guild.roles.cache.find(role => role.id === '1040655691746123866')
        await db.set(`dzvan_${user.id}`, 0)
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000))
        try{
        let embed = new MessageEmbed()
        .setDescription(`${user} принят на медсестру/медбрата (МЗ)`)
        .setColor('#f1c40f')
        client.channels.cache.get('1040975520822738994').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы приняты на медсестру/медбрата! (МЗ)`)
        .setColor('#f1c40f')
        user.send({ embeds: [dm] })
        user.roles.add(role);
        user.roles.add(role2);
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        } catch {
            let errorEmbed = new MessageEmbed()
            .setDescription(":x: Произошла ошибка")
            .setColor('#FF0000')
            return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }}


}