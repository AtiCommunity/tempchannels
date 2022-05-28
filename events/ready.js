const {AVC_CATEGORY, AVC_NC, VERSION} = require("../config.json");

module.exports = (client) => {    
    var counter = 0;

    setInterval(() => {
        var memberCount = 0;
        
        client.guilds.cache.forEach((guild) => {if (guild.memberCount != NaN) memberCount += guild.memberCount;});

        const status = [
            `${client.guilds.cache.size} servers | tc/help`,
            `${client.channels.cache.filter((channel) => channel.type == "GUILD_CATEGORY").size} categories | tc/help`,
            `${client.channels.cache.filter((channel) => channel.type !== "GUILD_CATEGORY").size} channels | tc/help`,
            `${memberCount-client.guilds.cache.size} users | tc/help`,
            `tc/update`,
            `with channels`
        ];

        if(counter <= 3) client.user.setActivity(status[counter], {type: "WATCHING"});
        else if(counter >= 4 && counter < 5) client.user.setActivity(status[counter], {type: "COMPETING"});
        else client.user.setActivity(status[counter], {type: "PLAYING"});

        if(counter == 5) counter = 0;
        else counter++;
    }, 10000);
    
    const category = client.channels.cache.find(category => category.name === AVC_CATEGORY);
    category.children.map(channel => {
        if(channel.name != AVC_NC && channel.members.size == 0)
        {
            channel.delete();
            console.log(`INFO: Channel named ${channel.name} was deleted !`);
        }
    });
    
    console.log(`INFO: Logged in as ${client.user.tag} !`);
    console.log(`INFO: Version : ${VERSION}`);
    console.log(`INFO: Online on ${client.guilds.cache.size} server(s).`);
};
