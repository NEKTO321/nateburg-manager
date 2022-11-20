const { MessageEmbed } = require('discord.js');

const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});
module.exports = {
    name: 'пред-снять',
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        let disable = await db.get(`disable`);
        if(disable === 1) return
        client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        if(message.member.permissions.has("ADMINISTRATOR"));
        else if(!message.member.roles.cache.has("1040570760982441984")) return;

          let user = message.mentions.members.first() || client.users.cache.get(args[0]); // mention a member to warn or warn the member by their user ID
          let warn1 = message.guild.roles.cache.find(role => role.id === '1040671040948404328')
          let warn2 = message.guild.roles.cache.find(role => role.id === '1040671050524012545')
          let warn3 = message.guild.roles.cache.find(role => role.id === '1040671054433103952')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000)); // if user didnt specify the member ID or didnt mention that member to warn, then return a message
        try{
        await db.sub(`warns_${user.id}`, 1)
        let warns = await db.get(`warns_${user.id}`);
        if(warns < 0) {
            db.set(`warns_${user.id}`, 0)
            message.channel.send('У него 0 предов').then(msg => setTimeout(() => msg.delete(), 5000))
        }
        else {
        if(warns === 0) {
            user.roles.remove(warn1);
        }
        if(warns === 1) {
            user.roles.remove(warn2);
        }
        if(warns === 2) {
            user.roles.remove(warn3);
        }
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`У ${user} снят пред (Администрация)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#00FF00')
        client.channels.cache.get('1040620201596690442').send({ embeds: [embed] }).then(() => {
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nУ вас снят пред (Администрация)`)
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