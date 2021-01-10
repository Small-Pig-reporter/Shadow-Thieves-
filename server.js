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

const fs = require('fs')

const folders = fs.readdirSync("./commands/")

for (const files of folders) {
const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

for (const commands of folder) {
const command = require(`./commands/${files}/${commands}`) 
bot.command({
name: command.name,
code: command.code
})
} 
}
