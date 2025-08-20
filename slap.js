const { bot } = require('../lib/')

bot(
  {
    pattern: 'slap ?(.*)',
    desc: 'Slap someone with GIFs 😂',
    type: 'fun',
  },
  async (message, match) => {
    let sender = message.sender.split('@')[0]
    let target = message.mentionedJid && message.mentionedJid[0]
      ? message.mentionedJid[0].split('@')[0]
      : match || 'themselves 😂'

    // Funny slap lines
    const slapLines = [
      `👋 ${sender} gave ${target} a loud slap 🤯`,
      `😂 ${sender} slapped ${target} into next week!`,
      `💥 ${sender} just turned ${target} into a meme!`,
      `🤣 ${sender} slapped ${target} so hard they saw stars ✨`,
      `😅 ${sender} gently slapped ${target}... but feelings were hurt.`,
      `🔥 ${sender} smacked ${target} with full power!`,
      `🤡 ${target} just got roasted and slapped by ${sender}!`
    ]

    // Slap GIFs (direct links)
    const slapGifs = [
      "https://media.tenor.com/GfZ8n9nwXGgAAAAC/anime-slap.gif",
      "https://media.tenor.com/0iK6lLQ7rKIAAAAC/slap.gif",
      "https://media.tenor.com/SQvU1JzF3pQAAAAC/slap-anime.gif",
      "https://media.tenor.com/CV0vLJ1-MlAAAAAC/slap.gif",
      "https://media.tenor.com/Yn6oV3vJfxYAAAAd/anime-slap.gif"
    ]

    // Pick random message and gif
    let slapMsg = slapLines[Math.floor(Math.random() * slapLines.length)]
    let slapGif = slapGifs[Math.floor(Math.random() * slapGifs.length)]

    // Send text
    await message.send(slapMsg, { quoted: message })

    // Send gif
    await message.send(
      { video: { url: slapGif }, gifPlayback: true },
      { quoted: message }
    )
  }
)
