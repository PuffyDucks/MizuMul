const config = require('../config.json');

exports.run = (client) => {
    console.log(`[MizuMul] MizuMul is ready in ${client.guilds.size} server(s).`);
    console.log(`[MizuMul] Playing with ${client.users.size} users.`);
    console.log(`[MizuMul] MizuMul Invite: https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=8&scope=bot&permissions=3533888`);

    client.user.setActivity(" with m. help", { type: "PLAYING" });
  }
