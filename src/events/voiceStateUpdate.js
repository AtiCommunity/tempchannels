const {AVC_CATEGORY, AVC_NC} = require("../config.json");

module.exports = (client, oldState, newState) => {
    var server = newState.guild.name;
    var joined_user = newState.member;
    var joining_user = newState.member.user.username;
    var new_vc_name = newState.channel && newState.channel.name;
    var old_vc_name = oldState.channel && oldState.channel.name;
 
    
    if(new_vc_name == AVC_NC)
    {
        newState.guild.channels.create(joining_user, {
            type: "GUILD_VOICE",
            parent: newState.guild.channels.cache.find(channel => channel.name === AVC_CATEGORY && channel.type == "GUILD_CATEGORY")
        });
        setTimeout(() => {
            var created_channel = newState.guild.channels.cache.find(channel => channel.name === joining_user && channel.type == "GUILD_VOICE");
            if(joined_user.voice.channel) joined_user.voice.setChannel(created_channel);
        }, 1000);
        
        console.log(`INFO: ${joining_user} created a channel on ${server}.`);
    }

    if(!new_vc_name && old_vc_name)
    {
        if(typeof(oldState.channel.members.size == "undefined"))
        {
            var channel_size = 0;
        }
        else
        {
            var channel_size = oldState.channel.members.size;
        }
        setTimeout(() => {
            if(channel_size > 0 && oldState.guild.channels.cache.find(channel => channel.name === oldState.member.user.username))
            {
                var user_finder = oldState.channel.members.first().user.username;
                var channel_finder = oldState.guild.channels.cache.find(channel => channel.name === oldState.member.user.username);
                channel_finder.setName(`${user_finder}`);
                console.log(`INFO: ${joining_user}'s channel has changed to ${user_finder} on ${server}.`);
            }
            else if(oldState.guild.channels.cache.find(channel => channel.name === oldState.member.user.username))
            {
                var channel_finder = oldState.guild.channels.cache.find(channel => channel.name === oldState.member.user.username);
                channel_finder.delete();
                console.log(`INFO: ${joining_user}'s channel has been deleted on ${server}.`);
            }
        }, 500);
    }

    if(new_vc_name && old_vc_name == oldState.member.user.username)
    {
        var channel_size = oldState.channel.members.size;
        setTimeout(() => {
            if(channel_size > 0 && new_vc_name != old_vc_name)
            {
                var user_finder = oldState.channel.members.first().user.username;
                var channel_finder = oldState.guild.channels.cache.find(channel => channel.name === oldState.member.user.username);
                channel_finder.setName(`${user_finder}`);
                console.log(`INFO: ${joining_user}'s channel has changed to ${user_finder} on ${server}.`);
            }
            else if(new_vc_name != old_vc_name)
            {
                var channel_finder = oldState.guild.channels.cache.find(channel => channel.name === oldState.member.user.username);
                channel_finder.delete();
                console.log(`INFO: ${joining_user}'s channel has been deleted on ${server}.`);
            }
        }, 500);
    }
};
