const config = require('../config.json');
const { RichEmbed } = require('discord.js');

exports.run = (client, message, args) => {
    const moment = require('moment');
    require('moment-duration-format');
    const embed = new Discord.RichEmbed()
    .setTitle('__Moe\'s Info__')
    .setThumbnail(client.user.displayAvatarURL)
    .setDescription(`Hiya, i'm Moe your personal anime stream radio ^^`)
    .addField('__Guilds__', client.guilds.size, true)
    .addField('__Users__', client.users.size, true)
    .addField('__Emojis__', client.emojis.size, true)
    .addField('__Channels__', client.channels.size, true)
    .addField('__Uptime__', moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]'), true)
    .addField('__Memory Usage__', `${Math.round(process.memoryUsage().heapUsed / 1024 / 1024)}MB`, true)
    .addField('__Prefix__', `\`${config.prefix}\``, true)
    .addField('__Developer__', '<@484765734803734540> <@145557815287611393>', true)
    .addField('__Moe\'s Links__', '[Website](https://etcroot.pw/moe/) | [Github](https://github.com/MoeRadio) | [Invite](https://discordapp.com/api/oauth2/authorize?client_id=523779990798598167&permissions=8&scope=bot) | [Support](https://discord.gg/M6hRKwF)', false)
    .setFooter('Moe | By: etcroot#7884 and ohlookitsderpy#1337')
    .setColor('#A65EA5')
    return message.channel.send(embed);

}
