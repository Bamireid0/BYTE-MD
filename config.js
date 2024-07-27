
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "bamireid0@gmail.com";
global.location = "Akwa Ibom,Nigeria.";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Hamza:3800380ww@cluster0.uwommwq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "2348152119668@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://bamireid0_user:iqn5HzAEzBx7G66ywhZuHewcdfd0xyIJ@dpg-cqbi3r8gph6c73c0pkvg-a.oregon-postgres.render.com/bamireid0";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/bamireid0/BYTE-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaNRcHSJP2199iMQ4W0l";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1037c2d26645dfcdfd14f.jpg";
global.devs = "2348152119668";
global.sudo = process.env.SUDO || "2348152119668";
global.owner = process.env.OWNER_NUMBER || "2348152119668";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/7d4468a1badba65da2628.jpg";
global.waPresence = process.env.WAPRESENCE || "composing";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "false";
global.save_status = process.env.AUTO_SAVE_STATUS || "true";
global.save_status_from = process.env.SAVE_STATUS_FROM || "all";
global.read_status_from = process.env.READ_STATUS_FROM || "all";

global.api_smd = "https://HyHamza.vercel.app";
global.scan = "https://byte-session.vercel.app/";




global.SESSION_ID =
  process.env.SESSION_ID ||





  


//___________________________________________________________________________________________________


  
  "Byte;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUZISGJoTDRka0xSR2R6eENpdG1kT1d1dlN1M0lDYzR4Wmd5M1BaQXRXcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZjBueG1xRHV1c3l6Q2g4TjNLSldncmpBbGl6U0hlcWxaU010VmEwUXRWWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4Q1VCOWpJYlM2TE4wOFhIc0RFRzBVNGl2MUZhcjNkbkJGdDdzTTJwZjFzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3aVRmdFJvQjVBOVQyZWR6Uk9TRU43SzRhckVtRmZPZE45RVVsbVloZmc4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImFQUWFwV1JlNEFmRHF3d2VIY1VrMGlSWFlvc1Y2NGszT21qczk1Sy9IMEk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik0xWTZFVHlHRmFhZjUwOHhNV0Q4Q25wWFBkTFE0bC9PMlF1RUlyTHJMU3c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ051OFdybHpTWGpoNnBsS1IwVnZJMlQ4ekF1bjBnQTJBLzRidkFlM3VWND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWW5qT0NqLzRVNkxSLzJzTStjVjRzWnFOWTkyRzRaN1IxMDhOVGhXQ0RDZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImVKQ29adkQrQytXUkdMN1F6dnNtTTJSaWVqWC9ySzlQWmtHeWYyWCtRMGE2djh6RXFaUW1yWHJaWFE2VGp2T21UWXI3ZjAra3RQVHFGVUg3S2drcGlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NTQsImFkdlNlY3JldEtleSI6Ilgwb01GWHVCbHIyV0lCVG1RUERINWY4Mm94MzFkbTRDelRpajYyWXFZL3M9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpBRHQ3d0ltVDRpY1hHQ2tvNlc1REEiLCJwaG9uZUlkIjoiYzUxYTM1N2YtYTMzMi00YWYwLTk2ZjItZWZhMmMzMWQwY2E1IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBxQ05TbTVwWktBYmlNN0VYRXJHS29mYURFYz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNLzhLZkU3eGMrcGNqcHNCb1R6VWdKSk82VTA9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiS0VGUVFZODEiLCJtZSI6eyJpZCI6IjIzNDgxNTIxMTk2Njg6M0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJCYW1pcmVpZC4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ04ycTNjZ0RFUDNJajdVR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6InVTZ0JPMlNnN000VlFmRkNaQzZmaVV6U3EyVXFRYmdGaUtPSVQ1K0xoMTg9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjNiQ2h6dUJUaXVRWTBXcStpRkd3R2h6N3VjcG5sQ0lwOU5jTXdXNDVkL0thT0k3VWlsSnNHdnBCNGxDYlVzT2p1WGtaL0JjckF6TldObEpOYk1jQUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3aThMakpsSmxqck1jaGRMOEU1TklWQzVNRDdYc2tKYmRkRGkvVEJROVIzSjl5L0NuZTl1OVhyUDRDY0JBQ0VLVGY1RHM5VWR3aHc5OFBzRmJ0WmRodz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxNTIxMTk2Njg6M0BzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJia29BVHRrb096T0ZVSHhRbVF1bjRsTTBxdGxLa0c0QllpamlFK2ZpNGRmIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzIyMDE2OTA2LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUwveiJ9" //Make sure session id starts with Byte;;;



//________________________________________________________________________









module.exports = {
  menu: process.env.MENU || "",

  //Prefix variable
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "*© Bamireid & Varry*",
  author: process.env.PACK_AUTHER || "Varry",
  packname: process.env.PACK_NAME || "Bamireid &",
  botname: process.env.BOT_NAME || "Bamireid-MD",
  ownername: process.env.OWNER_NAME || "Bamireid",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "cq0w9xms22769vyl1jfkg973wwsvb0bzk9pn5rk3kd2690j67qk22l4cin35pvxm",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "BYTE").toUpperCase(),
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
