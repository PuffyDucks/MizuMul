const config = require('../config.json');

exports.run = (client) => {
    console.log(`[Moe Radio] Moe is ready in ${client.guilds.size} server(s).`);
    console.log(`[Moe Radio] Playing with ${client.users.size} users.`);
    console.log(`[Moe Radio] Moe Invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot`);
    client.user.setActivity("moe help", {
      type: "STREAMING",
      url: "https://www.twitch.tv/devourzplays"
    });
  }
