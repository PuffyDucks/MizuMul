const config = require("../config.json");
const Discord = require("discord.js");

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setTitle("__Invite MizuMul__")
    .setDescription(`[Invite me to your server!](https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=3533888)`)
    .setColor("#4DA6FF")
    return message.channel.send(embed);

}
