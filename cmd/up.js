const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});

module.exports = {
    name: 'повысить', // name of the command
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        message.channel.bulkDelete(1);
        if(message.member.permissions.has("ADMINISTRATOR"));
        else if(!message.member.roles.cache.has("1040570760982441984")) return; 
        let user = message.mentions.members.first() || client.users.cache.get(args[0]); // mention a member to warn or warn the member by their user ID
        let role0 = message.guild.roles.cache.find(role => role.id === '1040569919529558046')
        let role1 = message.guild.roles.cache.find(role => role.id === '1040570081706520626')
        let role2 = message.guild.roles.cache.find(role => role.id === '1040570130314309656')
        let role3 = message.guild.roles.cache.find(role => role.id === '1040570760982441984')
        

        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000));
        try{ // if user didnt specify the member ID or didnt mention that member to warn, then return a message
        await db.add(`bzvan_${user.id}`, 1)
        let bzvan = await db.get(`bzvan_${user.id}`)
        if(bzvan > 3) {
            message.channel.send('Куда повышать...').then(msg => setTimeout(() => msg.delete(), 5000))
            await db.set(`bzvan_${user.id}`, 3)
        }
        if(bzvan === 1) {
            let embed = new MessageEmbed() // make a new embed
            .setDescription(`${user} повышен (Администрация)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
            .setColor('#00FF00')
            client.channels.cache.get('1040620201596690442').send({embeds: [embed]})
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: Хелпер (Администрация)`)
            .setColor('#3498db')
            user.send({ embeds: [dm] })
            user.roles.add(role1);
            user.roles.remove(role0);
            user.roles.remove(role2);
            user.roles.remove(role3);
            message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
        }
        if(bzvan === 2) {
            let embed = new MessageEmbed() // make a new embed
            .setDescription(`${user} повышен (Администрация)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
            .setColor('#00FF00')
            client.channels.cache.get('1040620201596690442').send({embeds: [embed]})
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: Админ (Администрация)`)
            .setColor('#95a5a6')
            user.send({ embeds: [dm] })
            user.roles.add(role2);
            user.roles.remove(role0);
            user.roles.remove(role1);
            user.roles.remove(role3);
            message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
    }
    if(bzvan === 3) {
        let embed = new MessageEmbed() // make a new embed
        .setDescription(`${user} повышен (Администрация)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
        .setColor('#00FF00')
        client.channels.cache.get('1040620201596690442').send({embeds: [embed]})
        let dm = new MessageEmbed()
        .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: ГА (Администрация)`)
        .setColor('#675596')
        user.send({ embeds: [dm] })
        user.roles.add(role3);
        user.roles.remove(role0);
        user.roles.remove(role1);
        user.roles.remove(role2);
        message.channel.send({embeds: [embed]}).then(msg => setTimeout(() => msg.delete(), 5000))
}}  catch (error) {
        const errorEmbed = new MessageEmbed()
        .setDescription(':x: Произошла ошибка')
        .setColor('#FF0000')
        return message.channel.send({ embeds: [errorEmbed] }).then(msg => setTimeout(() => msg.delete(), 5000)) //send an embed when it caught error
    }
    }
};