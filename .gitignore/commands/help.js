const Discord = require("discord.js");
const {creators, version} = require("../config.json");


module.exports = {
    name: "help",
    execute(message, args) {
        var embed = new Discord.MessageEmbed()
            .setThumbnail("https://i.imgur.com/mWhU0Lh.png")
            .setTitle("TempChannels")
            .setDescription("Create your own temporary channels.")
            .addField("How to use", "To use it correcly, you just need to create a voice channel with this name \"[TC] New Voice Chennel\", then join it and it's done :wink:")
            .addField("Support", "If you have something to ask or feedback, go on the support server of the bot [here](https://discord.gg/F3GDHhM).")
            .setFooter(`created by : ${creators} | version : ${version}`)
            .setTimestamp();
        message.channel.send(embed)
    }
}
