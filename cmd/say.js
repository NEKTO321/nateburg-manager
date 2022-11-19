const { MessageEmbed } = require('discord.js');
module.exports = {
    name: 'говорить',
    description: 'Say a message with the bot.',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        let msg;
        try{        
        let perm = message.author.id
        if(perm != 552431396149395466) {
        } else if(!args[0]) { // if you did not type what you wanna say, then the bot will return a message to you
            message.channel.send('Напиши, что сказать').then(msg => setTimeout(() => msg.delete(), 5000))
        } else{
            msg = args.join(' '); //this code is for getting the message you want to send
            message.channel.send({ content: msg })//then send to your message channel
        }
        } catch {
            let errorEmbed = new MessageEmbed()
            .setDescription(":x: Произошла ошибка")
            .setColor('#FF0000')
            return message.channel.send({embeds: [errorEmbed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }}
}