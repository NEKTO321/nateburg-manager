const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'мэрия-принят',
    description: 'ззз',
    run: async(client, message, args) => {
      let disable = await db.get(`disable`);
      if(disable === 1) return
      client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        await message.guild.roles.fetch()
        if(message.member.permissions.has("ADMINISTRATOR"));
          else if(!message.member.roles.cache.has("1040654584584081448"));
          else if(!message.member.roles.cache.has("1040664632651681822"));
          else if(!message.member.roles.cache.has("1040654364311818370")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]);
        let role = message.guild.roles.cache.find(role => role.id === '1040571340471681034')
        let role2 = message.guild.roles.cache.find(role => role.id === '1040654689387171973')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000))
        await db.set(`mzvan_${user.id}`, 0)
        try{
        let embed = new MessageEmbed()
        .setDescription(`${user} принят на бояра (Мэрия)`)
        .setColor('#71368a')
        client.channels.cache.get('1040670027868811294').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы приняты на бояра (Мэрия)`)
        .setColor('#71368a')
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