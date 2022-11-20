const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});

module.exports = {
    name: 'рп-пред', // name of the command
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        let disable = await db.get(`disable`);
        if(disable === 1) return
        client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
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
        let reason = args.slice(1).join(' ');
        let warn1 = message.guild.roles.cache.find(role => role.id === '1040895161623916594')
        let warn2 = message.guild.roles.cache.find(role => role.id === '1040895405631750164')
        let warn3 = message.guild.roles.cache.find(role => role.id === '1040895743315161098')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000));
        try{ // if user didnt specify the member ID or didnt mention that member to warn, then return a message
        await db.add(`rpwarns_${user.id}`, 1)
        let rpwarns = await db.get(`rpwarns_${user.id}`)
        if(rpwarns === 1) {
            user.roles.add(warn1);
        }
        if(rpwarns === 2) {
            user.roles.add(warn2);
        }
        if(rpwarns === 3) {
            user.roles.add(warn3);
        }
        if(rpwarns === 4) {
            let embed = new MessageEmbed() // make a new embed
            .setDescription(`${user} получил 4 преда (РП)\nПричина: ${reason}`)// if there is reason provided then show the reason, if not then show 'No reson provided'
            .setColor('#FF0000')
            client.channels.cache.get('1040958810426187796').send({embeds: [embed]})
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВы получили 4 преда (РП)\nПричина: ${reason}`)
            .setColor('#FF0000')
            user.send({ embeds: [dm] })
            let dm1 = new MessageEmbed()
            .setDescription(`Внимание!\nУ ${user} 4 РП-преда\nВы должны принять меры!`)
            .setColor('#FF0000')
            message.author.send({ embeds: [dm1] })
            user.roles.remove(warn1);
            user.roles.remove(warn2);
            user.roles.remove(warn3);
            await db.set(`rpwarns_${user.id}`, 0)
            await db.set(`hzvan_${user.id}`, 0)
            message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        } else {
        let embed = new MessageEmbed() // make a new embe
        .setDescription(`${user} выдан пред (РП)\nПричина: ${reason}`)
        .setColor ('FF0000') // if there is reason provided then show the reason, if not then show 'No reson provided'
        client.channels.cache.get('1040958810426187796').send({ embeds: [embed] }).then(() => {
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВам выдан пред (РП)\nПричина: ${reason}`)
            .setColor ('FF0000')
            user.send({ embeds: [dm] })
            message.channel.send({ embeds: [embed] }).then(msg => setTimeout(() => msg.delete(), 5000))
        })};
    }  catch (error) {
        const errorEmbed = new MessageEmbed()
        .setDescription(':x: Произошла ошибка')
        .setColor('#FF0000')
        return message.channel.send({ embeds: [errorEmbed] }).then(msg => setTimeout(() => msg.delete(), 5000)) //send an embed when it caught error
    }
    }
};