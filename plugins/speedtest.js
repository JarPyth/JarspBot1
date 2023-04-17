let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	await conn.reply(m.chat, `Please Wait`, m)
    let o
    try {
        o = await exec('python3 speed.py --share --secure')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) 
conn.sendMessage(m.chat, {
text: stdout,
contextInfo: {
externalAdReply: {
title: "",
body: "",
thumbnailUrl: "https://telegra.ph/file/c23b794f4da1bc23b6f00.jpg",
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: true
}}})
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['speedtest']
handler.tags = ['info']
handler.command = /^(speedtest|ookla)$/i
handler.premium = false
module.exports = handler
