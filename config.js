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
  process.env.SESSION_ID "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibURoY3NwdTJLVnlnejNkNlgrVVo1VCtMMlI3UllkbkZLeGFZcTZhaGxXOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTmtiTDRjZCsvL0hON2ppTHo0dUx6dnZtcUl6a3Q1Z2RSa3NWZ2p2WUQzTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwTTBzV2Q3dmp2WVR0UVoxRFdsMzBDUHFTTUFFclNCWCtRcnVvREw0UUg4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI0K3U4M3dYc1pGUEV4MW5xYW5zTHppd3Y0WXpzWHlnMmxaU0dGdGRLMUVnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBIVFZtcENtczlrV09zM3J3aGZnZTR4bmxKeUVDWUtWMXl1NXlyOVBpWHM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhpellmTU0vK0RIcDN2ZGRkUmMybDMvNC94d2FQTTdaeDZXd0J6RTl3UVU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic016ZVgyMEdMUnU0dkpvenRmamo1S2lIbUN4d01rdkhoZEhpWm5vaGxtbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWWp2UUtNM3k1L09SUjRlYWwvS3AwN3NSVXJOWUdnZk5PdjA2SEpEWnFnZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImYrSjdiWW9wdTdkNXVnYzZEcmxQM0JrcElWK1d1K2hKU1l4dkZRczhqRndkOS9KVWorbmZoQlB4LzBsK3lSY2pLMWl1dC9wdkliY0wvbllLRnp6ZWd3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTEsImFkdlNlY3JldEtleSI6Ikp6Nk8yV2FTS3AxWC9yWnhTWHlnUFUzbThCNDdXRDRldDI5N3BKcFpPRlk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InIxZ1c1cktLUUtLZFV3M1VQemtZR1EiLCJwaG9uZUlkIjoiZGM4ZmUzOGQtNTNiMy00MjVjLWEwYTEtNDc3ZGEyYjVkYTc1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii81ZzN0cVhIVDNWbElJTUVHY1V0NUZybnlSND0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2Y3BhelQ0cnMvaHkvUGZZR2RQMlB0NlpSUWc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiNzJHOTNWUzYiLCJtZSI6eyJpZCI6IjI1NDcwNzIxMzU4MTozMEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZi98J2ZpPCdmaPwnZmj8J2ZnvCdmZoifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ09QRDJYd1E0TU9vdEFZWUFpQUFLQUE9IiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Ikc3RDBWSXJNVGdSVThtRFQwMzltWXVBMTdHRk1BdG5KNUZleCtjU2Fqbmc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlQvWlBpdW0yRldOSS9XRHZVUVFBSFJYazFZZHR1cDJZa3BvYWNxS3QvdnRRREpkaytMT3RISllqUzJVVUMyc2s0VllKc01XOEp4bE9MQi9BeHE2N0NBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI0U0pmUGtNanJRWC9WbDRKUk91bGtFWGp1aGNYTkdGdGpKVTMwTFhaQXE5YlpTeXBNQ2wwOTVxMWZZblllRXByQ0R2MzhzT1ZYbDQvZUZGTDJUYWlqZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI1NDcwNzIxMzU4MTozMEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSdXc5RlNLekU0RVZQSmcwOU4vWm1MZ05leGhUQUxaeWVSWHNmbkVtbzU0In19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIwMzI4Njg2fQ=="
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
