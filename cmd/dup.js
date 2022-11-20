const { MessageEmbed } = require('discord.js');
const { QuickDB } = require('quick.db');
const db = new QuickDB({table: "DB"});

module.exports = {
    name: 'мз-повысить', // name of the command
    description: 'Warn a user for some reason.',
    run: async(client, message, args) => {
        let disable = await db.get(`disable`);
        if(disable === 1) return
        client.channels.cache.get('1043770641867882546').send(`${message.author} ввёл команду: ${message}`);
        message.channel.bulkDelete(1);
        if(message.member.permissions.has("ADMINISTRATOR"));
          else if(!message.member.roles.cache.has("1040655798742814761")) return;
        let user = message.mentions.members.first() || client.users.cache.get(args[0]); // mention a member to warn or warn the member by their user ID
        let role0 = message.guild.roles.cache.find(role => role.id === '1040655691746123866')
        let role1 = message.guild.roles.cache.find(role => role.id === '1040655798742814761')
        if(!user) return message.channel.send({ content: "Введи пользователя нормально!" }).then(msg => setTimeout(() => msg.delete(), 5000));
        try{ // if user didnt specify the member ID or didnt mention that member to warn, then return a message
        await db.add(`dzvan_${user.id}`, 1)
        let dzvan = await db.get(`dzvan_${user.id}`)
        if(dzvan > 1) {
            message.channel.send('Куда повышать...').then(msg => setTimeout(() => msg.delete(), 5000))
            await db.set(`dzvan_${user.id}`, 1)
        }
        if(dzvan === 1) {
            let embed = new MessageEmbed() // make a new embed
            .setDescription(`${user} повышен (МЗ)`)// if there is reason provided then show the reason, if not then show 'No reson provided'
            .setColor('#00FF00')
            client.channels.cache.get('1040975520822738994').send({embeds: [embed]})
            let dm = new MessageEmbed()
            .setDescription(`Поздравляю!\nВы повышены, ваша новая роль: Доктор (МЗ)`)
            .setColor('#f1c40f')
            user.send({ embeds: [dm] })
            user.roles.add(role1);
            user.roles.remove(role0);
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