const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.leave()
        let embed = new Discord.RichEmbed()
        .setDescription('Disconnected :wave:')
        .setColor('#4DA6FF')
      message.channel.send(embed);
    };
  }
