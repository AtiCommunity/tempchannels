const Discord = require("discord.js");
const {creator, version} = require("../config.json");


module.exports = {
    name: "help",
    execute(message, args) {
        var embed = new Discord.MessageEmbed()
            .setThumbnail("https://i.imgur.com/mWhU0Lh.png")
            .setTitle("TempChannels")
            .setDescription("Create your own temporary channels.")
            .addField("Support", "If you have something to ask or feedback, go on the support server of the bot [here](https://discord.gg/F3GDHhM).")
            .setFooter(`created by : ${creator} | version : ${version}`)
            .setTimestamp();
        message.channel.send(embed)
    }
}
