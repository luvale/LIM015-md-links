const help = `
                                        ▄▀▄     ▄▀▄
                                       ▄█░░▀▀▀▀▀░░█▄
                                   ▄▄  █░░░░░░░░░░░█  ▄▄
                                  █▄▄█ █░░▀░░┬░░▀░░█ █▄▄█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█                                  ♥ ɪɢʀᴇsᴀ ᴜɴᴀ ʀᴜᴛᴀ ♥                                 █
█ ██╗░░██╗███████╗██╗░░░░░██████╗░  ᴘᴜᴇᴅᴇs ᴜsᴀʀ ʟᴏs ᴄᴏᴍᴀɴᴅᴏs ᴠᴀ́ʟɪᴅᴏs                   █
█ ██║░░██║██╔════╝██║░░░░░██╔══██╗  --ᴠᴀʟɪᴅᴀᴛᴇ: ʀᴇᴛᴏʀɴᴀ ᴇʟ ʜʀᴇғ, ᴛᴇxᴛ, ғɪʟᴇ, sᴛᴀᴛᴜs    █   
█ ███████║█████╗░░██║░░░░░██████╔╝              ʏ ᴍᴇssᴀɢᴇ ᴅᴇ ᴄᴀᴅᴀ ʟɪɴᴋ                 █
█ ██╔══██║██╔══╝░░██║░░░░░██╔═══╝░  --sᴛᴀᴛs: ʀᴇᴛᴏʀɴᴀ ᴇʟ ᴛᴏᴛᴀʟ ᴅᴇ ʟɪɴᴋs ʏ ʟᴀ ᴄᴀɴᴛɪᴅᴀᴅ   █
█ ██║░░██║███████╗███████╗██║░░░░░           ᴅᴇ ʟɪɴᴋs ᴜ́ɴɪᴄᴏs (ᴜɴɪᴏ̨ᴜᴇ)                  █ 
█ ╚═╝░░╚═╝╚══════╝╚══════╝╚═╝░░░░░  --sᴛᴀᴛs ʏ --ᴠᴀʟɪᴅᴀᴛᴇ: ʀᴇᴛᴏʀɴᴀ ᴇʟ ᴛᴏᴛᴀʟ ʏ ʟᴏs       █ 
█                                                         ʟɪɴᴋs ʀᴏᴛᴏs (ʙʀᴏᴋᴇɴ)         █
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`;

const noLinks = `
                            ▄▀▄     ▄▀▄
                           ▄█░░▀▀▀▀▀░░█▄
                       ▄▄  █░░░░░░░░░░░█  ▄▄
                      █▄▄█ █░░▀░░┬░░▀░░█ █▄▄█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█ ███████╗██████╗░██████╗░░█████╗░██████╗░                    █
█ ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗                    █
█ █████╗░░██████╔╝██████╔╝██║░░██║██████╔╝       ɴᴏ sᴇ        █  
█ ██╔══╝░░██╔══██╗██╔══██╗██║░░██║██╔══██╗  ᴇɴᴄᴏɴᴛʀᴀʀᴏɴ ʟɪɴᴋs █
█ ███████╗██║░░██║██║░░██║╚█████╔╝██║░░██║                    █
█ ╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝                    █
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`;

const errorPath = `
                            ▄▀▄     ▄▀▄
                           ▄█░░▀▀▀▀▀░░█▄
                       ▄▄  █░░░░░░░░░░░█  ▄▄
                      █▄▄█ █░░▀░░┬░░▀░░█ █▄▄█
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
█ ███████╗██████╗░██████╗░░█████╗░██████╗░                    █
█ ██╔════╝██╔══██╗██╔══██╗██╔══██╗██╔══██╗                    █
█ █████╗░░██████╔╝██████╔╝██║░░██║██████╔╝       ʟᴀ ʀᴜᴛᴀ      █
█ ██╔══╝░░██╔══██╗██╔══██╗██║░░██║██╔══██╗      ɴᴏ ᴇxɪsᴛᴇ     █
█ ███████╗██║░░██║██║░░██║╚█████╔╝██║░░██║                    █
█ ╚══════╝╚═╝░░╚═╝╚═╝░░╚═╝░╚════╝░╚═╝░░╚═╝                    █
█▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄█
`;

module.exports = {
  help, noLinks, errorPath,
};
