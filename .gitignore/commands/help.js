const Discord = require("discord.js");
const {version} = require("../config.json");

module.exports = {
    name: "help",
    execute(message, args) {
        const embed = new Discord.MessageEmbed()
            .setAuthor("Atineon#2652", "https://i.imgur.com/piiVdot.png")
            .setThumbnail("https://i.imgur.com/mWhU0Lh.png")
            .setTitle("TempChannels")
            .setDescription("Create your own temporary channels.")
            .addField("Support", "The support of this bot is only Atineon, so if you have something to ask or feedback, go on the support server of the bot [here](https://discord.gg/F3GDHhM).")
            .setFooter(`version : ${version}`)
            .setTimestamp()
        message.channel.send(embed)
    }
}