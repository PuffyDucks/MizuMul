const config = require('../config.json');
const Discord = require('discord.js');

exports.run = (client, message, args) => {

  return message.channel.send({
    embed: {
      color: 3447003,
      author: {
        name: client.user.username + "\'s Commands",
        icon_url: client.user.avatarURL
      },
      title: "Read more about the commands here",
      url: "https://thumbs.gfycat.com/PoshShowyCrustacean-max-1mb.gif",
      description: "All commands use `" + config.prefix + "` as a prefix.",
      fields: [{
        name: ":moneybag: Economy",
        value: "`lol wip`"
      },
      {
        name: ":game_die: Games",
        value: "`lol wip`"
      },
      {
        name: ":trophy: Collection",
        value: "`lol wip`"
      },
      {
        name: ":8ball: Fun",
        value: "`lol wip`"
      },
      {
        name: ":notes: Music",
        value: "`join` `kpop` `jpop` `qt` `volume` `leave`"
      },
      {
        name: ":slight_smile: Emotes",
        value: "`lol wip`"
      },
      {
        name: ":hugging: Actions",
        value: "`lol wip`"
      },
      {
        name: ":wrench: Utility",
        value: "`help` `invite` `ping`"
      },
      ],
    }
  });
};
