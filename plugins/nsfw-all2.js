let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=BrunoSobrino`
    conn.sendButtonImg(m.chat, nyenye, 'Nih', wm2, 'Next', `.${command}`, m) 
}
handler.help = ['hollolewd', 'sideoppai', 'animefeets', 'animebooty', 'animethighss', 'animearmpits', 'lewdanimegirls', 'biganimetiddies']
handler.tags = ['nsfw']
handler.command = /^(hollolewd|sideoppai|animefeets|animebooty|animethighss|animearmpits|lewdanimegirls|biganimetiddies)$/i

module.exports = handler
