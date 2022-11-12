const { readdirSync } = require('fs');
const ascii = require('ascii-table');
const client = require('..');
let table = new ascii("Команды");
table.setHeading('Команды', 'Load');

module.exports = (client) => {
    readdirSync('./cmd/').forEach(dir => {
        const commands = readdirSync(`./cmd/`).filter(file => file.endsWith('.js'));
        for(let file of commands) {
            let pull = require(`../cmd/${file}`);
            if(pull.name) {
                client.commands.set(pull.name, pull);
                table.addRow(file, 'OK')
            }else {
                table.addRow(file, 'Error - Missing a help.name or it is not a string...')
                continue;
            }if(pull.aliases && Array.isArray(pull.aliases)) pull.aliases.forEach(alias => client.aliases.set(alias, pull.name))
        }
    });
    console.log(table.toString());

    readdirSync('./events/').forEach((file) => {
        const events = readdirSync('./events/').filter((file) =>
        file.endsWith('.js')
        );
        for (let file of events) {
            let pull = require(`../events/${file}`);
            if(pull.name) {
                client.events.set(pull.name, pull);
            }
        }
        console.log(`${file} Events load`)
    })
}