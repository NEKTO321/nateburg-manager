const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'мэрия-уволить',
    description: 'remove h',
    run: async(client, message, args) => {
      let disable = await db.get(`disable`);
      if(disable === 1) return
      client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        const reason = args.slice(1).join(' ');
        await message.guild.roles.fetch()
        if(message.member.permissions.has("ADMINISTRATOR"));
          else if(!message.member.roles.cache.has("1040654584584081448"));
          else if(!message.member.roles.cache.has("1040664632651681822"));
          else if(!message.member.roles.cache.has("1040654364311818370")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]);
        let role0 = message.guild.roles.cache.find(role => role.id === '1040654689387171973')
        let role1 = message.guild.roles.cache.find(role => role.id === '1040655462217031681')
        let role2 = message.guild.roles.cache.find(role => role.id === '1040655465178222693')
        let role3 = message.guild.roles.cache.find(role => role.id === '1040654584584081448')
        let role4 = message.guild.roles.cache.find(role => role.id === '1040664632651681822')
        let role5 = message.guild.roles.cache.find(role => role.id === '1040654364311818370')
        let admin = message.guild.roles.cache.find(role => role.id === '1040571340471681034')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000))
        try{
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`${user} уволен (Мэрия)\nПричина: ${reason}`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#FF0000')
        client.channels.cache.get('1040670027868811294').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы уволены (Мэрия)\nПричина: ${reason}`)
        .setColor('#FF0000')
        user.send({ embeds: [dm] })
        user.roles.remove(role0);
        user.roles.remove(role1);
        user.roles.remove(role2);
        user.roles.remove(role3);
        user.roles.remove(admin);
        await db.set(`mzvan_${user.id}`, 0)
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        } catch {
            let errorEmbed = new MessageEmbed()
            .setDescription(":x: Произошла ошибка")
            .setColor('#FF0000')
            return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }}


}