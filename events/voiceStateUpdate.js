const {AVC_CATEGORY, AVC_NC} = require("../config.json");

module.exports = (client, oldState, newState) => {
    var serverName = newState.guild.name;
    var joiningUser = newState.member;
    var newVCName = newState.channel && newState.channel.name;
    var oldVCName = oldState.channel && oldState.channel.name;
 
    
    if(newVCName == AVC_NC)
    {
        newState.guild.channels.create(joiningUser.user.username, {
            type: "GUILD_VOICE",
            parent: newState.guild.channels.cache.find(channel => channel.name === AVC_CATEGORY && channel.type == "GUILD_CATEGORY")
        });
        setTimeout(() => {
            var createdChannel = newState.guild.channels.cache.find(channel => channel.name === joiningUser.user.username && channel.type == "GUILD_VOICE");
            if(newState.channel) joiningUser.voice.setChannel(createdChannel);
            else createdChannel.delete();
        }, 1000);
        
        console.log(`INFO: ${joiningUser.user.username} created a channel on ${serverName}.`);
    }

    if(oldVCName == oldState.member.user.username)
    {
        var channelSize = oldState.channel.members.size;
        if(channelSize > 0)
        {
            var channelFinder = oldState.guild.channels.cache.find(channel => channel.name === oldState.member.user.username);
            var userFinder = oldState.channel.members.first().user.username;
            channelFinder.setName(`${userFinder}`);
            console.log(`INFO: ${joiningUser.user.username}'s channel has changed to ${userFinder} on ${serverName}.`);
        }
        else
        {
            var channelFinder = oldState.guild.channels.cache.find(channel => channel.name === oldState.member.user.username);
            channelFinder.delete();
            console.log(`INFO: ${joiningUser.user.username}'s channel has been deleted on ${serverName}.`);
        }
    }
};
