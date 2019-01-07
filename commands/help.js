const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let embed = new Discord.RichEmbed()
    .setAuthor(`${client.user.username}'s Help Menu`, client.user.displayAvatarURL)
    .setColor('#A65EA5')
    .setDescription([`
    All commands uses \`${config.prefix}\` as prefix.
    You can read more about commands & how to use them [here](https://etcroot.pw/moe/cmds/).
    `])
    .addField('__Command__', `**${config.prefix}help**\n**${config.prefix}info**\n**${config.prefix}ping**\n**${config.prefix}invite**\n**${config.prefix}support**\n―――――\n**${config.prefix}kpop**\n**${config.prefix}jpop**\n**${config.prefix}qt**\n**${config.prefix}leave**\n**${config.prefix}join**\n**${config.prefix}volume**\n―――――\n**${config.prefix}anime**\n**${config.prefix}manga**\n**${config.prefix}moe**\n**${config.prefix}meme**\n**${config.prefix}calc**`, true)
    .addField('__Description__', '`Moe\'s Help Menu.`\n`Moe\'s Information.`\n`Moe\'s Ping.`\n`Invite Moe.`\n`Moe\'s Official Server.`\n――――――――――\n`Play KPOP Stream.`\n`Play JPOP Stream.`\n`Play qtradio.moe (beta).`\n`Leave author VC.`\n`Join author VC.`\n`Set playback volume.`\n――――――――――\n`Search or get random anime.`\n`Search manga\'s.`\n`Random Moe\'s.`\n`Random anime memes.`\n`Calculate weebness.`', true)
    return message.channel.send(embed);
    };
