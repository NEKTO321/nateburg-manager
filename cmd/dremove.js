const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'мз-уволить',
    description: 'remove h',
    run: async(client, message, args) => {
      let disable = await db.get(`disable`);
      if(disable === 1) return
      client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        const reason = args.slice(1).join(' ');
        await message.guild.roles.fetch()
        if(message.member.permissions.has("ADMINISTRATOR"));
          else if(!message.member.roles.cache.has("1040655798742814761")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]);
        let role0 = message.guild.roles.cache.find(role => role.id === '1040655691746123866')
        let role1 = message.guild.roles.cache.find(role => role.id === '1040655798742814761')
        let admin = message.guild.roles.cache.find(role => role.id === '1040571488853573642')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000))
        try{
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`${user} уволен (МЗ)\nПричина: ${reason}`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#FF0000')
        client.channels.cache.get('1040975520822738994').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы уволены (МЗ)\nПричина: ${reason}`)
        .setColor('#FF0000')
        user.send({ embeds: [dm] })
        user.roles.remove(role0);
        user.roles.remove(role1);
        user.roles.remove(admin);
        await db.set(`dzvan_${user.id}`, 0)
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        } catch {
            let errorEmbed = new MessageEmbed()
            .setDescription(":x: Произошла ошибка")
            .setColor('#FF0000')
            return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }}


}