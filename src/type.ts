import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction } from 'discord.js'
import { Client, Collection } from 'discord.js'

export type CommandExecute = (interaction: CommandInteraction) => Promise<void>

export type Command = {
  data: SlashCommandBuilder
  execute: CommandExecute
}

export class MyClient extends Client {
  commands = new Collection<string, Command>()
}
