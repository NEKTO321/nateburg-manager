const { MessageEmbed } = require('discord.js');

const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'рп-пред-снять',
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        if(message.member.permissions.has("ADMINISTRATOR"));
        else if(!message.member.roles.cache.has("1040570760982441984"));
        else if(!message.member.roles.cache.has("1040656448327270431"));
        else if(!message.member.roles.cache.has("1040654584584081448"));
        else if(!message.member.roles.cache.has("1040664632651681822"));
        else if(!message.member.roles.cache.has("1040654364311818370"));
        else if(!message.member.roles.cache.has("1040655798742814761"));
        else if(!message.member.roles.cache.has("1040656337949954058")) return;

          let user = message.mentions.members.first() || client.users.cache.get(args[0]); // mention a member to warn or warn the member by their user ID
          let warn1 = message.guild.roles.cache.find(role => role.id === '1040895161623916594')
          let warn2 = message.guild.roles.cache.find(role => role.id === '1040895405631750164')
          let warn3 = message.guild.roles.cache.find(role => role.id === '1040895743315161098')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000)); // if user didnt specify the member ID or didnt mention that member to warn, then return a message
        try{
        await db.sub(`rpwarns_${user.id}`, 1)
        let rpwarns = await db.get(`rpwarns_${user.id}`);
        if(rpwarns < 0) {
            db.set(`rpwarns_${user.id}`, 0)
            message.channel.send('У него 0 предов').then(msg => setTimeout(() => msg.delete(), 5000))
        }
          else {
        if(rpwarns === 0) {
            user.roles.remove(warn1);
        }
        if(rpwarns === 1) {
            user.roles.remove(warn2);
        }
        if(rpwarns === 2) {
            user.roles.remove(warn3);
        }
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`У ${user} снят пред (РП)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#00FF00')
        client.channels.cache.get('1040958810426187796').send({ embeds: [embed] }).then(() => {
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nУ вас снят пред (РП)`)
            .setColor('#00FF00')
            user.send({ embeds: [dm] }) // send a dm to the user that get warned
        });
        message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000))
          }
        } catch {
            let errorEmbed = new MessageEmbed()
            .setDescription(":x: Произошла ошибка")
            .setColor('#FF0000')
            return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }}
};