const BaseCommand = require('../../utils/structures/BaseCommand');
const Discord = require('discord.js')
const pagination = require('discord.js-pagination');

module.exports = class InfoCommand extends BaseCommand {
  constructor() {
    super('info', 'Miscellaneous', []);
  }

  run(client, message, args) {
    
    const servers = new Discord.MessageEmbed()
     .setTitle('Servers')
     .addField('`Heroku`', 'Using Npm and Github')
     .addField('`My PC`', 'VSCode, Only when testing commands')
     .setTimestamp()

     const bot = new Discord.MessageEmbed()
     .setTitle('Bot')
     .addField('`Owner`', '火炎#8066 or MrFumblyPants on Youtube')
     .addField('`Bot Version`', 'v3.7')
     .setTimestamp()

     const Codingspecs = new Discord.MessageEmbed()
     .setTitle('Coding Specifications')
     .addField('`Npm`', 'v6.14.15')
     .addField('`Node`', 'v14.15.3')
     .addField('`Discord`', 'v12.5.1')
     .addField('`Discord Paginations`', 'v1.0.3')
     .setTimestamp()

     const pages = [
             servers,
             bot,
             Codingspecs,
     ]

     const emojiList = ["⏪", "⏩"];

     const timeout = '120000';

     pagination(message, pages, emojiList, timeout)

  }
}