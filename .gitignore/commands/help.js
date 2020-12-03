const Discord = require("discord.js");
const {autochannel_ncchannel, creators, version} = require("../config.json");


module.exports = {
    name: "help",
    execute(message, args) {
        var embed = new Discord.MessageEmbed()
            .setThumbnail("https://i.imgur.com/mWhU0Lh.png")
            .setTitle("TempChannels")
            .setDescription("Create your own temporary channels.")
            .addField("Discord invite", `[Discord invite](https://discord.com/api/oauth2/authorize?client_id=731980097946517675&permissions=17001552&scope=bot)`)
            .addField("How to use", `To use it correcly, you just need to enter the command \"tc/init"\ and join the ${autochannel_ncchannel} channel and it's done :wink:`)
            .addField("Support", "If you have something to ask or feedback, go on the support server of the bot [here](https://discord.gg/F3GDHhM).")
            .setFooter(`created by : ${creators} | version : ${version}`)
            .setTimestamp();
        message.channel.send(embed)
    }
}
