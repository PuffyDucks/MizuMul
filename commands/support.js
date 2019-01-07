const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle('__Moe\'s Support__')
    .setDescription(`OwO: https://discord.gg/M6hRKwF`)
    .setColor('#A65EA5')
    return message.channel.send(embed);

}
