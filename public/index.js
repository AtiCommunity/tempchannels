const {Client, Collection, Intents} = require("discord.js");
const fs = require("fs");

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ]
});

client.commands = new Collection();
const commandFiles = fs.readdirSync("./src/commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles){
  const command = require(`../src/commands/${file}`);
  client.commands.set(command.name, command);
};

client.on("ready", () => require("../src/events/ready")(client));
client.on("messageCreate", message => require("../src/events/message")(client, message));
client.on("voiceStateUpdate", (oldState, newState) => require("../src/events/voiceStateUpdate")(client, oldState, newState));

client.login("NzQ4NjIxNTk0MDc0NTQ2MzY3.X0gGMA.8mQckIhTxT8vMqGHF41nD5BIscM");
