let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://database.tioclkp02.repl.co/f61a7c96f3f86b6c5214f.png', m, { packname: "Sticker by", author: "JarspBot" })
}

handler.customPrefix = /^(ok)$/i
handler.command = new RegExp

module.exports = handler
