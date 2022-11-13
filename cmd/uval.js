const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'уволить',
    description: 'remove h',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        const reason = args.slice(1).join(' ');
        await message.guild.roles.fetch()
        if(!message.member.permissions.has("ADMINISTRATOR")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]);
        let role0 = message.guild.roles.cache.find(role => role.id === '1040569919529558046')
        let role1 = message.guild.roles.cache.find(role => role.id === '1040570081706520626')
        let role2 = message.guild.roles.cache.find(role => role.id === '1040570130314309656')
        let role3 = message.guild.roles.cache.find(role => role.id === '1040570760982441984')
        let admin = message.guild.roles.cache.find(role => role.id === '1040567660905254983')
        let nabor = message.guild.roles.cache.find(role => role.id === '1040626336701616188')
        let warn1 = message.guild.roles.cache.find(role => role.id === '1040671040948404328')
        let warn2 = message.guild.roles.cache.find(role => role.id === '1040671050524012545')
        let warn3 = message.guild.roles.cache.find(role => role.id === '1040671054433103952')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000))
        try{
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`${user} уволен (Администрация)\nПричина: ${reason}`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#FF0000')
        client.channels.cache.get('1040620201596690442').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы уволены (Администрация)\nПричина: ${reason}`)
        .setColor('#FF0000')
        user.send({ embeds: [dm] })
        user.roles.remove(role0);
        user.roles.remove(role1);
        user.roles.remove(role2);
        user.roles.remove(role3);
        user.roles.remove(admin);
        user.roles.remove(nabor);
        user.roles.remove(warn1);
        user.roles.remove(warn2);
        user.roles.remove(warn3);
        await db.set(`warns_${user.id}`, 0)
        await db.set(`bzvan_${user.id}`, 0)
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        } catch {
            let errorEmbed = new MessageEmbed()
            .setDescription(":x: Произошла ошибка")
            .setColor('#FF0000')
            return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }}


}