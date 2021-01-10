const dbd = require("dbd.js")
 
const bot = Shadow Thieves wiki bot({
token: process.env.TOKEN, 
prefix: "Wiki" 
})
 
bot.onMessage()

bot.status({
      text: "Shadow Thieves community bot"
      type: "PLAYING"
      time: 12
})

