const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'набор-снять',
    description: '',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        await message.guild.roles.fetch()
        if(message.member.permissions.has("ADMINISTRATOR"));
        else if(!message.member.roles.cache.has("1040570760982441984"));
        else if(!message.member.roles.cache.has("1040570130314309656")) return; 
        let user = message.mentions.members.first() || client.users.cache.get(args[0]);
        let role = message.guild.roles.cache.find(role => role.id === '1040626336701616188')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000))
        try{
        let embed = new MessageEmbed()
        .setDescription(`${user} более не является Набор Администрации (Администрация)`)
        .setColor('#f1c40f')
        client.channels.cache.get('1040620201596690442').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Более вы не являетесь Набор Администрации (Администрация)`)
        .setColor('#f1c40f')
        user.send({ embeds: [dm] })
        user.roles.remove(role);
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        } catch {
            let errorEmbed = new MessageEmbed()
            .setDescription(":x: Произошла ошибка")
            .setColor('#FF0000')
            return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }}


}