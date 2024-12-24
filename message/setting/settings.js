const fs = require('fs')

global.owner = "𝐆𝐀𝐍𝐓𝐈 𝐏𝐀𝐊𝐄 𝐍𝐎𝐌𝐎𝐑 𝐋𝐔"
global.footer = "TRICKSTER Whangcap"

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
