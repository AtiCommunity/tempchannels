const { Client, MessageEmbed } = require("discord.js");
const { AVC_NC, CREATOR, VERSION } = require("../config.json");

module.exports = {
    name: "help",
    execute(message, args) {
        var intro = new MessageEmbed()
            .setTitle("TempsChannels")
            .setThumbnail("https://i.imgur.com/2KkYW4c.png")
            .setDescription("Create your own temporary channels.")
        var help = new MessageEmbed()
            .setTitle("TempChannels | Help menu")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Logo_TVE-1.svg/1950px-Logo_TVE-1.svg.png")
            .addField("Discord invite", `You already not have invited this bot into your server ? :face_with_monocle: \n Click [here](https://discord.com/api/oauth2/authorize?client_id=731980097946517675&permissions=17001552&scope=bot)`, true)
            .addField("How to use", `To use it correcly, you just need to enter the command \"tc/init"\ and join the "${AVC_NC}" channel and it's done. :wink:`, true)
            .addField("Support", "If you have something to ask or feedback, go on the support server of the bot [here](https://discord.gg/F3GDHhM).")
        var usercmd = new MessageEmbed()
            .setTitle("TempChannels | User commands")
            .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Logo_TVE-2.svg/643px-Logo_TVE-2.svg.png")
            .addField("tc/help", "If you want to see again this menu.", true)
            .addField("tc/init", "To initialize the bot into your server.", true)
            .setFooter(`created by : ${CREATOR} | version : ${VERSION}`, "https://images.discordapp.net/avatars/224466162526715904/56b71a0c26bfcf0be1d658d7e554e8dc.png")
            .setTimestamp();
        message.channel.send(intro)
        message.channel.send(help);
        message.channel.send(usercmd);
    }
}