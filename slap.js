const { cmd } = require("../lib");

cmd({
  pattern: "slap",
  desc: "Slap someone playfully",
  category: "fun",
}, async (conn, mek, m) => {
  let user = m.mentionedJid[0] ? m.mentionedJid[0] : conn.user.jid;
  let sender = m.sender;

  await conn.sendMessage(m.chat, { text: `👋 ${sender} slapped ${user} 😂` }, { quoted: mek });
});
