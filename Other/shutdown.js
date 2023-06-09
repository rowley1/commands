const { SlashCommandBuilder, PermissionsBitField } = require('discord.js');
 
module.exports = {
    data: new SlashCommandBuilder()
    .setName('shutdown')
    .setDescription('Shuts down your bot. Only the owner of this bot can use this command. Use twice for shutdown.'),
    async execute(interaction, client) {
 
        if (interaction.user.id === '931870926797160538') {
            await interaction.reply({ content: `**Shutdown complete**`, ephemeral: true})
            await client.user.setStatus("invisible")
            await console.log("Bot has been shutdowned! Use **node .** to restart!")
            process.exit();
        } else {
            return interaction.reply({ content: `Only **the owner** of ${client.user} can use this command.`, ephemeral: true})
        }
    }
}