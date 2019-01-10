const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const config = require("../config.json");
const stations = require("./stations.json");

exports.run = (client, message, args) => {
  if (args[1] == undefined) {
    // List radios
    let embed = new Discord.RichEmbed()
    .setColor("#4DA6FF")
    .setAuthor(`Radio Stations`, client.user.displayAvatarURL)
    .setDescription("To play music from the radio, use `" + config.prefix + "radio [genre] [station number]` or `" + config.prefix + "[genre] [station number]`.")

    for (var i in stations) {
      var stationList = "";
      var station = "";
      var genreName = i;
      var displayName = stations[i]["genre"];
      for (var j in stations[genreName]) {
        if (!isNaN(j)) {
          var stationNumber = Number(j);
          station = "`" + j + " - " + stations[genreName][stationNumber]["name"] + "`\n";
          stationList += station;
        }
      }
      embed.addField(displayName, stationList)
    }
    message.channel.send(embed);
  } else if (message.member.voiceChannel) {
    var genreArg = args[0].toLowerCase();
    if (stations[genreArg] != undefined) {
      var genre = stations[genreArg];
      if (genre[args[1]] != undefined) {
        var station = genre[args[1]];
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
      message.reply(":x: **Invalid genre name! Use** `m.radio` **for a list.**");
    }
  } else {
    message.reply("**You must be in a voice channel!** :x:");
  }
};
