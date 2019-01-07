const { Client, RichEmbed } = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");
const client = new Client();
const fs = require("fs");
const config = require("./config.json");
const dbl = require("dblposter");
const poster = new dbl("DBL TOKEN", client);

poster.bind();
fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    let eventFunction = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, (...args) => eventFunction.run(client, ...args));
  });
});

client.on("message", message => {
  if (message.author.bot) return;
  if (!message.guild) return;
    if(message.content.toLowerCase() === `<@${client.user.id}>`){
    const embed = new RichEmbed()
    .setTitle(`__Moe's Prefix & Help__`)
    .setDescription([`
    Use \`${config.prefix}help\` to get all my commands.
    `])
    .setColor('#A65EA5')
    return message.channel.send(embed);
  }
  if(message.content.indexOf(config.prefix) !== 0) return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  try {
    let commandFile = require(`./commands/${command}.js`);
    commandFile.run(client, message, args);
  } catch (err) {
  }
});

client.login(config.token);
