//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Topudmh@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Toputech/Topu-ai";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRrcnADTOKzivM0S1r";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/13f1bb945857eb9b1eca6.jpg";
global.devs = "255673750170";
global.sudo = process.env.SUDO || "254740479599";
global.owner = process.env.OWNER_NUMBER || "254740479599";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia01RdlZjeEtpVUdNeDNmVUw4VFhXV09nVFNOOG9wOEg3VFZVcjl0NUdFTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0V0dWw4VUNsTHZPcVRwY0pyOFJ6bHRVN1RFREROdHRkRTkvUWV1SU8xMD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJHRmJoeUw4bDZMWTRsM2RBZXVNeWZqSDRzdGluMnBWT09qOG9QQ2Rza2tjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmT2pqeWxVczJQdytiMDBLQVVpcENJK1hORW1USkZsNHhCem1qRTlSSFZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBEMW9TL0owSjI2Y011SkRqckR2S01KSTlTR3pBZDdadDFTMUxMbG5LWDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1pcStEYkJFSGVaZ1UwZEJJUlY3d3BwR0d5ZkxzbGJtUUV3R29Md2liblk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUpiOTR1bk9IMDkrU0M2MDI1ZFNrOWFqUDdNS0psUXFDdWxMeWJieHRsZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRGYwZDZ2dm0zdUJQbzdVK28vYWYzYW1Ib3VETTlHMysrdmN6UHpPVkR6cz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBlNjJadVp0bEkyQXRIMk16Z25Vblp5ZGR0N0Z5K0dKSWVLVDdoYXRrK08vbkc5azl5ODZoQkpDWTUwR3QvVjF3cWh5MzcxRzBWaCt1SUVpUCtPVWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTY1LCJhZHZTZWNyZXRLZXkiOiJxdDgvV1Azam9sWGZ5VnIwTlEyc3NONzdZWEd2T2hubEcxYkkvc2JkSUhjPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjI3NzgzNDc2MTIyQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkY0MkE5QTMwMjk4NjA5QkEzOEQ5QzVBNEQ0MzMyMDRFIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjI1MjU0Njl9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImdBVzJWak1MUXdxNWt2OW9YYTNxZ2ciLCJwaG9uZUlkIjoiZmQwODMyZjQtNjI2MS00ZWEwLWE5MTEtOTE5NTM0ZjQ0ZmMxIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlRYQ0wvYWhDcGxBdTRmQUFIZjhMZWNzR0ZERT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ2ODJBK2dUKysweEdqQXpEV215MUQ5ZmlzWkE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQzNHOERNQTYiLCJtZSI6eyJpZCI6IjI3NzgzNDc2MTIyOjlAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoixYLDrsWCIMSldW5jaG8ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ043Qnpud1FqYzZ1dFFZWUF5QUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InZaeGpmRU5LWlhYdlpieGZvUFNXdUVsbjBOaVlVbExhRFlXVzF4U2tBa0k9IiwiYWNjb3VudFNpZ25hdHVyZSI6InZPYmZ6QnZtbDhGd2tFSnJGaWQwbmlydERJYjAvL0lzU0tpMmdaek1RK1RpK3lWaUVtdVJaNHRTeVNvLzJQL3VUVmZwQ3RVbnNrY1lHQ1NpOTlPZ0F3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ0dmQ4TGNXa0tkMi9MbytnUzRjY3dIU1BIb3JTbE5CTXJEbjJFUFZJUGlDM1REWDhhWTloelFwWXBqNStEclFnblBvYTF1aFcwdis2dmVmZncyckZqdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzgzNDc2MTIyOjlAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCYjJjWTN4RFNtVjE3Mlc4WDZEMGxyaEpaOURZbUZKUzJnMkZsdGNVcEFKQyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjUyNTQ2NiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFCWjgifQ=="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝖂𝖔𝖜 𝖙𝖔𝖕𝖚 𝖒𝖉 𝖍𝖆𝖘 𝖏𝖚𝖘𝖙 𝖌𝖊𝖓𝖊𝖗𝖆𝖙𝖊𝖉 𝖆 𝖓𝖊𝖜 𝖋𝖎𝖑𝖊",
  author: process.env.PACK_AUTHER || "TOPU",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝘽𝙤𝙣𝙣𝙞𝙚",
  ownername: process.env.OWNER_NAME || "𝘽𝙤𝙣𝙣𝙞𝙚",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "TOPU").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
