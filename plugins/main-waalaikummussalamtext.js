let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hi ${ye} Ada Yang Bisa Jarsp Bantu?\n\nKetik *.menu atau /menu, #menu* Untuk Melihat Menu Bot Nya\n\n> *Contoh : .menu*
`
let footer= 'Saya Adalah Bot WhatsApp Multi Device Yang Diciptakan Oleh Jarspy.\n\nGunakanlah Bot Ini Sebijak Mungkin Demi kenyamanan Bersama\n\nHarap Untuk Tidak Menelpon, Meminta Save, Atau Spam Dalam Penggunaan Bot\n\nJika Ada Kendala Hubungi Owner / Creator'
conn.send2But(m.chat, esce, footer, 'Menu', '.menu', 'Thanks', 'iya', m,)
}
handler.customPrefix = /^(alive)$/i 
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
