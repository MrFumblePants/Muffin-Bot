const BaseCommand = require('../../utils/structures/BaseCommand');
const pagination = require('discord.js-pagination');
const Discord = require('discord.js');

module.exports = class HelpCommand extends BaseCommand {
  constructor() {
    super('help', 'Miscellaneous', []);
  }

  run(client, message, args) {
    
     //Sort commands into categories, and make seperate embeds for each category

     const moderation = new Discord.MessageEmbed()
     .setTitle('Moderation')
     .addField('`c!kick`', 'Kicks a member from your server via mention or ID')
     .addField('`c!ban`', 'Bans a member from your server via mention or ID')
     .addField('`c!slowmode`', 'Changes the channel slowmode')
  


     .setTimestamp()

     const fun = new Discord.MessageEmbed()
     .setTitle('Fun')
     .addField('`c!avatar`', 'Displays the Users Avatar')
     .setTimestamp()

     const utility = new Discord.MessageEmbed()
     .setTitle('Utlity')
     .addField('`c!ping`', 'Get the bot\'s API ping')
     .setTimestamp()

     const pages = [
             moderation,
             fun,
             utility,
     ]

     const emojiList = ["⏪", "⏩"];

     const timeout = '120000';

     pagination(message, pages, emojiList, timeout)

  }
}