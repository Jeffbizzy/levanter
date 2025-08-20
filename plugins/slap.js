const { bot } = require('../lib/')

bot(
  {
    pattern: 'slap ?(.*)',
    desc: 'Simple slap test',
    type: 'plugin',
  },
  async (message, match) => {
    await message.reply('👋 Slap command is working!')
  }
)
