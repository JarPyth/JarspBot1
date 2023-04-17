let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai ${ye} Bot Ini Menggunakan Script Recode:\n• https://github.com/BOTCAHX/RTXZY-MD\n\nOriginal Base :\n• https://github.com/HelgaIlham/ZukaBet\n\nMau Script Recodean Gw? Chat Owner
`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['sc', 'sourcecode']
handler.tags = ['info']
handler.command = /^(sc|sourcecode)$/i

module.exports = handler
