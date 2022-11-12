const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'набор-закончить',
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
      message.channel.bulkDelete(1);
      if(message.member.permissions.has("ADMINISTRATOR"));
      else if(!message.member.roles.cache.has("1040626336701616188")) return;
      let user = message.mentions.members.first() || client.users.cache.get(args[0]);
      if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000));
      const channel = await message.guild.channels.cache.find((channel => channel.name === `Обзвон ${user.id}`));
      
      channel.delete()
      let embed = new MessageEmbed() // make a new embed
      .setDescription(`Успешно`)// if there is reason provided then show the reason, if not then show 'No reson provided'
      .setColor('#00FF00')
      message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
    }}