const Discord = require("discord.js");
const ffmpeg = require("ffmpeg-binaries");
const opusscript = require("opusscript");

exports.run = (client, message, args) => {
  let vol = args.join(" ");
  // if (voiceConnection === null) return message.channel.send('No music being played.');
  const voiceConnection = client.voiceConnections.find(val => val.channel.guild.id == message.guild.id);
  const dispatcher = voiceConnection.player.dispatcher;
  const currentvol = dispatcher.volume * 100;
  if(!vol) {
  let embed = new Discord.RichEmbed()
  .setDescription(`**Volume is at** ${currentvol}%`)
  .setColor('#4DA6FF')
  return message.channel.send(embed);
}
	if (vol > 200 || vol < 0 || isNaN(vol)) return message.channel.send('Please enter a valid number between 0 and 200!');

  let embed = new Discord.RichEmbed()
  .setDescription("Volume set to " + vol)
  .setColor('#4DA6FF')
	dispatcher.setVolume((vol/100));
	message.channel.send(embed);
};
