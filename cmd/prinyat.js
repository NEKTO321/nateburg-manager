const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'набор-принят',
    description: 'ззз',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        await message.guild.roles.fetch()
        if(message.member.permissions.has("ADMINISTRATOR"));
          else if(!message.member.roles.cache.has("1040626336701616188")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]);
        let role = message.guild.roles.cache.find(role => role.id === '1040569919529558046')
        let role2 = message.guild.roles.cache.find(role => role.id === '1040567660905254983')
        await db.set(`bzvan_${user.id}`, 0)
        await db.set(`warns_${user.id}`, 0)
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000))
        try{
        let embed = new MessageEmbed()
        .setDescription(`${user} принят на стажировку (Администрация)`)
        .setColor('#11806a')
        client.channels.cache.get('1040620201596690442').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы приняты на стажировку! (Администрация)`)
        .setColor('#11806a')
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