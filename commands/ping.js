const config = require("../config.json");
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setDescription(`**Pong!** - Ping: \`${Math.round(client.ping)}ms\``)
    .setColor("#4DA6FF")
    return message.channel.send(embed);

}
