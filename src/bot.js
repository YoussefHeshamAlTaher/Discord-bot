require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

client.on("ready",() => {
  console.log(`${client.user.username} logged in`)
  client.user.setAvatar('./avatar.jpg')
  .then(user => console.log(`New avatar set!`))
  .catch(console.error);
});
client.once("emojiCreate",() => {
  console.log("emoji");
});


const welcomewords =['hello','hi','sup','you there?']
client.on("message",(msg) => {
  for (word in welcomewords) {
    if(msg.content.toLowerCase() === welcomewords[word]){
      msg.reply(`Hello ${msg.author.username}`)
    }
  }
});


client.login(process.env.DOSCORD_BOT_TOKEN);

