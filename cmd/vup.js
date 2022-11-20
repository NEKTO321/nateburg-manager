const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});

module.exports = {
    name: 'армия-повысить', // name of the command
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        let disable = await db.get(`disable`);
        if(disable === 1) return
        client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        if(message.member.permissions.has("ADMINISTRATOR"));
        else if(!message.member.roles.cache.has("1040656448327270431"));
        else if(!message.member.roles.cache.has("1040656337949954058")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]); // mention a member to warn or warn the member by their user ID
        let role0 = message.guild.roles.cache.find(role => role.id === '1040571201845735435')
        let role1 = message.guild.roles.cache.find(role => role.id === '1040656008806158417')
        let role2 = message.guild.roles.cache.find(role => role.id === '1040656176318271548')
        let role3 = message.guild.roles.cache.find(role => role.id === '1040656273219268658')
        let role4 = message.guild.roles.cache.find(role => role.id === '1040656337949954058')
        let role5 = message.guild.roles.cache.find(role => role.id === '1040656448327270431')
        

        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000));
        try{ // if user didnt specify the member ID or didnt mention that member to warn, then return a message
        await db.add(`azvan_${user.id}`, 1)
        let azvan = await db.get(`azvan_${user.id}`)
        if(azvan > 5) {
            message.channel.send('Куда повышать...').then(msg => setTimeout(() => msg.delete(), 5000))
            await db.set(`azvan_${user.id}`, 5)
        }
        if(azvan === 1) {
            let embed = new MessageEmbed() // make a new embed
            .setDescription(`${user} повышен (Армия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
            .setColor('#00FF00')
            client.channels.cache.get('1040670230818599043').send({embeds: [embed]})
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: Рядовой (Армия)`)
            .setColor('#2ecc71')
            user.send({ embeds: [dm] })
            user.roles.add(role1);
            user.roles.remove(role0);
            user.roles.remove(role5);
            user.roles.remove(role3);
            user.roles.remove(role4);
            user.roles.remove(role2);
            message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }
        if(azvan === 2) {
            let embed = new MessageEmbed() // make a new embed
            .setDescription(`${user} повышен (Армия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
            .setColor('#00FF00')
            client.channels.cache.get('1040670230818599043').send({embeds: [embed]})
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: Лейтенант (Армия)`)
            .setColor('#2ecc71')
            user.send({ embeds: [dm] })
            user.roles.add(role2);
            user.roles.remove(role0);
            user.roles.remove(role1);
            user.roles.remove(role3);
            user.roles.remove(role4);
            user.roles.remove(role5);
            message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
    }
    if(azvan === 3) {
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`${user} повышен (Армия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#00FF00')
        client.channels.cache.get('1040670230818599043').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: Сержант (Армия)`)
        .setColor('#2ecc71')
        user.send({ embeds: [dm] })
        user.roles.add(role3);
        user.roles.remove(role0);
        user.roles.remove(role1);
        user.roles.remove(role2);
        user.roles.remove(role4);
        user.roles.remove(role5);
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
    }
    if(azvan === 4) {
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`${user} повышен (Армия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#00FF00')
        client.channels.cache.get('1040670230818599043').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: Капитан (Армия)`)
        .setColor('#2ecc71')
        user.send({ embeds: [dm] })
        user.roles.add(role4);
        user.roles.remove(role0);
        user.roles.remove(role1);
        user.roles.remove(role3);
        user.roles.remove(role2);
        user.roles.remove(role5);
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
}
if(azvan === 5) {
    let embed = new MessageEmbed() // make a new embed
    .setDescription(`${user} повышен (Армия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
    .setColor('#00FF00')
    client.channels.cache.get('1040670230818599043').send({embeds: [embed]})
    let dm = new MessageEmbed()
    .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: Генерал (Армия)`)
    .setColor('#2ecc71')
    user.send({ embeds: [dm] })
    user.roles.add(role5);
    user.roles.remove(role0);
    user.roles.remove(role2);
    user.roles.remove(role1);
    user.roles.remove(role3);
    user.roles.remove(role4);
    message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
}
}  catch (error) {
        const errorEmbed = new MessageEmbed()
        .setDescription(':x: Произошла ошибка')
        .setColor('#FF0000')
        return message.channel.send({ embeds: [errorEmbed] }).then(msg => setTimeout(() => msg.delete(), 5000)) //send an embed when it caught error
    }
    }
};