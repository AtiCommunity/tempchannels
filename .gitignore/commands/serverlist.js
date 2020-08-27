const Discord = require("discord.js");
const client = new Discord.Client();
const {creators, version} = require("../config.json");


module.exports = {
    name: "serverlist",
    execute(message, args) {
        message.channel.send(client.guilds.cache.map(r => r.name + ` | **${r.memberCount}**`))
    }
}