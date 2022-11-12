const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});

module.exports = {
    name: 'мэрия-понизить', // name of the command
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        if(message.member.permissions.has("ADMINISTRATOR"));
          else if(!message.member.roles.cache.has("1040654584584081448"));
          else if(!message.member.roles.cache.has("1040664632651681822"));
          else if(!message.member.roles.cache.has("1040654364311818370")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]); // mention a member to warn or warn the member by their user ID
        let role0 = message.guild.roles.cache.find(role => role.id === '1040654689387171973')
        let role1 = message.guild.roles.cache.find(role => role.id === '1040655462217031681')
        let role2 = message.guild.roles.cache.find(role => role.id === '1040655465178222693')
        let role3 = message.guild.roles.cache.find(role => role.id === '1040654584584081448')
        let role4 = message.guild.roles.cache.find(role => role.id === '1040664632651681822')
        let role5 = message.guild.roles.cache.find(role => role.id === '1040654364311818370')
        

        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000));
        try{ // if user didnt specify the member ID or didnt mention that member to warn, then return a message
        await db.sub(`mzvan_${user.id}`, 1)
        let mzvan = await db.get(`mzvan_${user.id}`)
        if(mzvan < 0) {
            message.channel.send('Куда понижать...').then(msg => setTimeout(() => msg.delete(), 5000))
            await db.set(`mzvan_${user.id}`, 0)
        }
        if(mzvan === 0) {
            let embed = new MessageEmbed() // make a new embed
            .setDescription(`${user} понижен (мэрия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
            .setColor('#FF0000')
            client.channels.cache.get('1040670027868811294').send({embeds: [embed]})
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВы понижены, ваша новая роль: Бояр (мэрия)`)
            .setColor('#71368a')
            user.send({ embeds: [dm] })
            user.roles.add(role0);
            user.roles.remove(role1);
            user.roles.remove(role5);
            user.roles.remove(role3);
            user.roles.remove(role4);
            user.roles.remove(role2);
            message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }
        if(mzvan === 1) {
            let embed = new MessageEmbed() // make a new embed
            .setDescription(`${user} понижен (мэрия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
            .setColor('#FF0000')
            client.channels.cache.get('1040670027868811294').send({embeds: [embed]})
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВы понижены, ваша новая роль: Глава Района (мэрия)`)
            .setColor('#71368a')
            user.send({ embeds: [dm] })
            user.roles.add(role1);
            user.roles.remove(role0);
            user.roles.remove(role2);
            user.roles.remove(role3);
            user.roles.remove(role4);
            user.roles.remove(role5);
            message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
    }
    if(mzvan === 2) {
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`${user} понижен (мэрия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#FF0000')
        client.channels.cache.get('1040670027868811294').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы понижены, ваша новая роль: Губернатор (мэрия)`)
        .setColor('#71368a')
        user.send({ embeds: [dm] })
        user.roles.add(role2);
        user.roles.remove(role0);
        user.roles.remove(role1);
        user.roles.remove(role3);
        user.roles.remove(role4);
        user.roles.remove(role5);
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
    }
    if(mzvan === 3) {
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`${user} понижен (мэрия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#FF0000')
        client.channels.cache.get('1040670027868811294').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы понижены, ваша новая роль: Регент (мэрия)`)
        .setColor('#71368a')
        user.send({ embeds: [dm] })
        user.roles.add(role3);
        user.roles.remove(role0);
        user.roles.remove(role1);
        user.roles.remove(role4);
        user.roles.remove(role2);
        user.roles.remove(role5);
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
}
if(mzvan === 4) {
    let embed = new MessageEmbed() // make a new embed
    .setDescription(`${user} понижен (мэрия)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
    .setColor('#FF0000')
    client.channels.cache.get('1040670027868811294').send({embeds: [embed]})
    let dm = new MessageEmbed()
    .setDescription(`Поздравляю!\nВы понижены, ваша новая роль: Правая Рука (мэрия)`)
    .setColor('#71368a')
    user.send({ embeds: [dm] })
    user.roles.add(role4);
    user.roles.remove(role0);
    user.roles.remove(role2);
    user.roles.remove(role1);
    user.roles.remove(role3);
    user.roles.remove(role5);
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