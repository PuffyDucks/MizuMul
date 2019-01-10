const config = require("../config.json");
const Discord = require("discord.js");

exports.run = (client, message, args) => {

  return message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username + "\'s Commands",
        icon_url: client.user.avatarURL
      },
      description: "All commands use `" + config.prefix + "` as a prefix.",
      fields: [{
        name: ":moneybag: Economy",
        value: "`Nothing here yet!`"
      },
      {
        name: ":game_die: Games",
        value: "`Nothing here yet!`"
      },
      {
        name: ":trophy: Collection",
        value: "`Nothing here yet!`"
      },
      {
        name: ":8ball: Fun",
        value: "`Nothing here yet!`"
      },
      {
        name: ":notes: Music",
        value: "`join` `radio` `volume` `leave`"
      },
      {
        name: ":slight_smile: Emotes",
        value: "`Nothing here yet!`"
      },
      {
        name: ":hugging: Actions",
        value: "`Nothing here yet!`"
      },
      {
        name: ":wrench: Utility",
        value: "`help` `invite` `ping`"
      },
      ],
    }
  });
};
