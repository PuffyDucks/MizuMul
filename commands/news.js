const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const config = require("../config.json");
const stations = require("./stations.json");

exports.run = (client, message, args) => {
  if (message.member.voiceChannel) {
    var genre = stations["news"];
    var station = genre[args[0]];
    if (station != undefined) {
      message.member.voiceChannel.join()
        .then(connection => {
          let embed = new Discord.RichEmbed()
          .setDescription(":white_check_mark: **Connected to voice channel!** Playing " + genre.genre + " from " + station.name + " :notes:\n**Remember:** Some stations will take requests on their website!")
          .setColor("#4DA6FF")
          connection.playArbitraryInput(station["link"]);
          message.channel.send(embed);
        })
        .catch(console.log);
    } else {
      message.reply(":x: **Invalid station number! Use** `m.radio` **for a list.**");
    }
  } else {
    message.reply("**You must be in a voice channel!** :x:");
  }
};
