const { Client, Collection, Intents } = require("discord.js");
const fs = require("fs");

const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_VOICE_STATES
  ]
});


client.commands = new Collection();
const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
};


client.on("ready", () => require("./events/ready")(client));
client.on("messageCreate", message => require("./events/message")(client, message));
client.on("voiceStateUpdate", (oldState, newState) => require("./events/voiceStateUpdate")(client, oldState, newState));

client.login(process.env.TOKEN);
