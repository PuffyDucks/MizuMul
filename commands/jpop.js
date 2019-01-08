const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const config = require("../config.json");

exports.run = (client, message, args) => {
      if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
          .then(connection => {
            let embed = new Discord.RichEmbed()
            .setDescription(':white_check_mark: **Connected to voice channel!** Playing J-pop :flag_jp: from listen.moe :notes: \n **Remember:** You can set the volume with ' + `\`${config.prefix}volume\`` + ':loud_sound:')
            .setColor('#4DA6FF')
            connection.playArbitraryInput(`https://listen.moe/opus`);
            message.channel.send(embed);
          })
          .catch(console.log);
      } else {
        message.reply('**You must be in a voice channel!** :x:');
      }
    };
