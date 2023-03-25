"use strict";
const urlParams = new URLSearchParams(location.search)
window.canvas = document.getElementById("overlay")
window.ctx = canvas.getContext("2d")
window.canvas2 = document.createElement("canvas")
window.ctx2 = canvas2.getContext("2d")
window.savebox = document.getElementById("savebox")
window.boxCenterTop = document.getElementById("boxcentertop")
window.uploadWorld = document.getElementById("uploadWorld")
window.saveDirections = document.getElementById("savedirections")
window.message = document.getElementById("message")
window.worlds = document.getElementById("worlds")
window.servers = document.getElementById("servers")
window.marketplace = document.getElementById("marketplace")
window.quota = document.getElementById("quota")
window.messages = document.getElementById("messages")
window.messageHolder = document.getElementById("messagesHolder")
window.messageInput = document.getElementById("messageInput")
window.url = document.querySelector("#editworld #url")
window.editworld = document.getElementById("editworld")
var hoverbox = document.getElementById("onhover")
window.help = document.getElementById("help")
window.onscreenControls={
w:document.getElementById("controlW"),
a:document.getElementById("controlA"),
s:document.getElementById("controlS"),
d:document.getElementById("controlD"),
" ":document.getElementById("controlSpace"),
"shift":document.getElementById("controlShift"),
}
window.onscreenControl_Element = document.getElementById("onscreenControls")
canvas.width  = window.innerWidth
canvas.height = window.innerHeight
canvas2.width  = window.innerWidth
canvas2.height = window.innerHeight
ctx.imageSmoothingEnabled = false
window.loadProg = document.getElementById("loadProgress")
window.loader = document.getElementById("loader")
window.loadBar = document.querySelector("#loadBar div")
window.themeColor = document.getElementById("themeColor")
let touchScreen = "ontouchstart" in document
if(!touchScreen) onscreenControl_Element.style.display = "none"
function MineCraft() {
// cache Math object
const { Math, performance, Date } = window;
const { cos, sin, round, floor, ceil, min, max, abs, sqrt, atan, atan2 } = Math;
const rand = function(a,b){
if(arguments.length === 2){
return (Math.random()*(b-a))+a
}else if(arguments.length === 1){
return Math.random()*a
}else return Math.random()
}
Math.PI2 = Math.PI / 2
Math.PId = Math.PI * 2
// Shh don't tell anyone I'm override native objects
String.prototype.hashCode = function() {
var hash = 0, i, chr;
if (this.length === 0) return hash;
for (i = 0; i < this.length; i++) {
chr   = this.charCodeAt(i);
hash  = ((hash << 5) - hash) + chr;
hash |= 0; // Convert to 32bit integer
}
return hash;
}
var fileReader = new FileReader();
uploadWorld.onchange = function(){
var file = uploadWorld.files.item(0)
if(!file) return
fileReader.onload = function(){
var res = fileReader.result
try{
JSON.parse(res)
}catch(e){
alert("Invalid JSON\n"+e)
}
boxCenterTop.value = "JSON"+res
}
fileReader.onerror = function(e){
alert("Error loading file\n"+e)
}
fileReader.readAsText(file)
}
let setPixel, getPixels;
let spawnEggOverlay, spawnEgg
function textureUpdated(){
spawnEggOverlay = getPixels("0g0gj000Ã­8WÃ©ÅžZÄŠÃ³WÄŽÄ‚HÄ¶;ZÃ·-ZÃ¥ÅŽYÄžÅ‚HÄ²$YÄ–Ä¢ZÃ°oHÅ†Ã©ZÄ¦Å¢ZÅŠÃ·WÄªcWÄ’Ä’YÃšÄžZÃ¢Ä¾H0000000000000000000000000000000004w04000000ÃµÃ¯0cÃ00001h90k000000lw00000000000Ä½000000BÃ«3Ã„00004(-00000004Ä˜0f0010000023Ã†mÄ Ã«00000Ã˜8nEÃ«00000001g000000iÃ¹00000000000000")
spawnEgg = getPixels("0g0gg000Ã©ÅžZÃšÄžZÅ†Ã©ZÄ²$YÅ’Ä–YÅšÄ¶WÅŠÃ·WÅ‚ÃšYÅ–Ä¦ZÅžÅ†HÅŽÄ†HÃ’Ã¾HÃ‹Ã¢ZÄ®sHÃŽÃ°W00000000000000000001w0000003T0000000U0000000Ã”20001Ã«6Ã¿Qw001Ã¥Ä‘Ä˜4w00jÄ˜5Ã«4R000Ä˜Ã»IQ{000Ã£Ã€IQd001Ã®0400001Å‹0400000yQQÅ—00000wf00000000000")
}
function lerp(t, a, b) {
return a + t * (b - a);
}
function mix(r,g,b,r2,g2,b2,amount){
r = lerp(r,r2,amount)
g = lerp(g,g2,amount)
b = lerp(b,b2,amount)
return [r,g,b]
}
var grassColor = {r:71/255,g:206/255,b:49/255}
var foliageColor = {r:26/255,g:191/255,b:0}
var leafColor = {r:72/255,g:181/255,b:24/255}
const semiTransTextures = []
window.semiTransTextures = semiTransTextures
const textures = {
grassTop: n => {
/*for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
const d = Math.random() * 0.25 + 0.65;
const r = 0x54 * d;
const g = 0xa0 * d;
const b = 0x48 * d;
setPixel(n, x, y, r, g, b);
}
}*/
const pix = getPixels("0g0glÃ¾Ã‡HÄªcWJPWÃ°oHÃ·-ZÃ©ÅžZÄ†Ã¥ZÃ³EYÄŽÄ‚HÃžÄ®WÄŠÃ³WÄ‚Ã–YÃ­8WÄ’Ä’YÄ–Ä¢ZÃ¢Ä¾HÄžÅ‚HÄ¢Å’YÃ¥ÅŽYÄšÄ²WÄ¦Å¢Z0QMÃ¹ÄŒ(eOÄ‰A1k5Ä™Ã™#Ã€wÃ¹Ã”ÃaOÄ„R1Ä‚ÅˆÄ¥Ã¹Ã¤Äµ1$ÄŠ#82t5ÃƒsÄ®-Å•Ã´Ä¿Ã°Ã¼Å‹ÃˆÅ‹Ã°0boeÄ°sÃ«FÃ¹x(ÅŒoÅ‡Åˆw4wÄ³Ãžl33Ã°Ä©EÄ•RÅ‡Ä¾MÄ­ÄƒÃ†xIÄ¬3wR%Ä”oXÄ¹{ÃµÃ‡Ã«Ã°SÃ­cÃ¹Ä©s4rÃ°Äˆc[0Ã²FÃ¼ÄIoÃ¢IÃŸ-Ã·ÃƒySÃÃŒyÄ•Ã¬Ã€Ä‚ÄtÄ–Ã‚Ã®FÄœ2E0+Ä€Å™oeÃ¡$2BaÄ¸IÅ");
const c = grassColor
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, (pix[i] / 255) * c.r * 255, (pix[i + 1] / 255) * c.g * 255, (pix[i + 2] / 255) * c.b * 255, pix[i + 3]);
}
},
grassSide: n => {
/*const pix = getPixels("0g0g7Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÃ°oHÃšÄžZÃ¢Ã‘H4ÄŒ9PÄŒg?ÄŒÃSÄˆÃ‰9(J9CÄ©)yÄ·BkaEÃ°Ã‚%UÃˆ{Ã¼Ã‰Ã–)Ã¹9EÃ¹84Ã]2Ã‚$Ã¼Ã²FkÃƒQÄŒÄ‚?ÄŒÅPwh?0Ã¬KNÃFihÄŒÄŽÃƒ{ÄŠRPAÃ«?$Ã²{)9FXÄº1kÃ²EiÄŠByÃƒ");
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
const { random } = Math;
for (let x = 0; x < 16; ++x) {
const m = random() * 4 + 1;
for (let y = 0; y < m; ++y) {
const d = random() * 0.25 + 0.65;
const r = 0x54 * d;
const g = 0xa0 * d;
const b = 0x48 * d;
setPixel(n, x, y, r, g, b);
}
}*/
let pix = getPixels("0g0g7Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÃ°oHÃšÄžZÃ¢Ã‘H4ÄŒ9PÄŒg?ÄŒÃSÄˆÃ‰9(J9CÄ©)yÄ·BkaEÃ°Ã‚%UÃˆ{Ã¼Ã‰Ã–)Ã¹9EÃ¹84Ã]2Ã‚$Ã¼Ã²FkÃƒQÄŒÄ‚?ÄŒÅPwh?0Ã¬KNÃFihÄŒÄŽÃƒ{ÄŠRPAÃ«?$Ã²{)9FXÄº1kÃ²EiÄŠByÃƒ");
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
pix = getPixels("0g0gdÄ’Ä’YJPWÃ¾Ã‡HÃ·-ZÄ†Ã¥ZÄšÄ²WÃ­8W000Ã³EYÃ°oHÄ–Ä¢ZÃ¢Ä¾HÃ©ÅžZ1z12A4Ã„R31Ã…6Ã‚138DÃ‡7n4!Ã§DGGnGÄ®,GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG");
const c = grassColor
for (let i = 0; i < pix.length; i += 4) {
if (pix[i+3]>0) {
setPixel(n, i >> 2 & 15, i >> 6, (pix[i] / 255) * c.r * 255, (pix[i + 1] / 255) * c.g * 255, (pix[i + 2] / 255) * c.b * 255, pix[i + 3]);
}
}
},
leaves: n => {
const { floor, random } = Math;
for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
const r = 0;
const g = floor(random() * 30 + 100);
const b = floor(random() * 30);
const a = random() < 0.35
? 0x0
: 0xff;
setPixel(n, x, y, r, g, b, a);
}
}
},
/*oakPlanks: n => {
for (let y = 0; y < 16; ++y) {
const a = 3 === (y & 3)
? 0.7
: 1.0;
for (let x = 0; x < 16; ++x) {
// these conditions are weird; can some comments be added here?
const mid = x === 8 && (y & 7) > 3 && a === 1
? 0.85
: 1;
const rit = x === 15 && (y & 7) < 3 && a === 1
? 0.85
: 1;
const r = (Math.random() * 0.1 + 0.9) * a * mid * rit;
setPixel(n, x, y, 190 * r, 154 * r, 96 * r);
}
}
},*/
oakPlanks: "0g0g7Ä¢VZÄ–*HÄ©Ã£WÃ½Ä»WÄ†kZÃ©Ã®HÃ’RZ4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
hitbox: "0g0g100W",
/*n => {
for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
setPixel(n, x, y, 0, 0, 0, 0xff)
}
}
},*/
crack10: "0g0g3000?kHÄ²$Ã¹444S9Ã†4SiÄŒÃ†Ã¹B9ÄˆgÃˆ@kkÄˆQoÃ–0UBÃ­ÃÄ‘p0ÄŽiÃŽ04KSQ]gÃ€Ä€Ã¹lÄggÃ—^BBÃ«Ã½a6Ã€Ã—Ã€4ÄˆSÄŒ",
crack9: "0g0g3000?kHÄ²$Ã¹04001Ã†4SiÄŒÃ†Ã¹B9Äˆgq@kkwQgÃ–0UBÃ­1Ä‘p06iÃŽ04SRQ]gÃ€Ä€Ã¹lÄggÃ—^wBÃ«Ã½06Ã€Ã—Ã€8ÄˆSÄŒ",
crack8: "0g0g3000?kHÄ²$Ã¹00000Ã€000ÄŒÃ€059Äˆga@kk0QoÃ–0UBÃ­1Ä‘p06iÃŽ04KRS8Ã¹Ã€Ã«0lÄ0gÃ—^0BÃ«l0aSÃ—S0Ã«Ã«Ã«",
crack7: "0g0g3000?kHÄ²$Ã¹00000g000AÃ€009Äˆ00@gk0QgÃ•0UBÃ«1Ä‘p062Ã04SS08Ã¹S00lÃ«00Ã—S00Ã«Ã¼000E00000",
crack6: "0g0g3000?kHÄ²$Ã¹0000000004Ã€009Äˆ006gk0QgÃ•0UBÃ«1Ä‘q062K080S00gS00lÃ«00Ã—S00Ã«Ã¹000w00000",
crack5: "0g0g3000?kHÄ²$Ã¹0000000000S001Ã«006gg04gK0UBÃ«1Ä‘q022K000S000S00lÃ«00!S000Ã«000000000",
crack4: "0g0g3000?kHÄ²$Ã¹0000000000000100060004gS0kBÃ«0Fo002K000S000S005Ã«00a00000000000000",
crack3: "0g0g3000?kHÄ²$Ã¹000000000000000004000400045009q002K000S000S001Ã«00200000000000000",
crack2: "0g0g3000?kHÄ²$Ã¹000000000000000000000400040009g002K000S000Ã«000000000000000000000",
crack1: "0g0g3000?kHÄ²$Ã¹0000000000000000000000000000010002S000Ã«0000000000000000000000000",
none: "0g0g1000",
/*n => {
for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
setPixel(n, x, y, 0, 0, 0, 0)
}
}
},*/
dirt: "0g0g7Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÃ°oHÃšÄžZÃ¢Ã‘H4ÄŒ9PÄŒg?ÄŒÃSÄˆÃ‰9(J9CÄ©)yÄ·BkaEÃ°Ã‚%UÃˆ{Ã¼Ã‰Ã–)Ã¹9EÃ¹84Ã]2Ã‚$Ã¼Ã²FkÃƒQÄŒÄ‚?ÄŒÅPwh?0Ã¬KNÃFihÄŒÄŽÃƒ{ÄŠRPAÃ«?$Ã²{)9FXÄº1kÃ²EiÄŠByÃƒ",
stone: "0g0g4Ã·-ZÃ©ÅžZÃ¢Ä¾HÃ–ÄŽY0Ã–Ä¢VÃ‡Ã½Ã…ÅÃœÄ“Ä‘VÃ€?5Ã—Ã¾ÄŽSB?VÃ˜Ä Ã¼8!VÄ—Ä¢ÃˆÃ½1k5Ã„ÃÃ€k1Å€Ä—ÄÃ—VTV4Ã—@Ã¿Å•6Ã¾ÄÄÃ–VV0VÃˆTÃ’",
logSide: "0g0g6Ã¢ÃH{Å™HÃºÄ«W-Ä‰YÃ‹yYÄÅ‹Y50Ä·cyX6Ä§Å“cy4eSÅ“4i4{SQgNkQSÄ«Ä˜SÃ€SXTÄ™gÃ€Ã«Ã¯wT0Ã€Ã¬Xy1Tg5Ä·yh?g0Ä·whko0x3gko4x3Äˆ/8ÄŒ5jÄ˜(wÄˆX1Ã€g0SÄˆj4iÃ«SÄŠh42X",
logTop: "0g0g9Ã‹yY{Å™HÃ¢ÃHÄ¢VZÄ–*HÄ©Ã£WÃ©Ã®HÃ½Ä»WÄ†kZ1210x0g0jO))U>OM3Ã“GÃ±IIGÃ€3Ã’ÃƒO)O,(4Ã QQQQ-SjÃ®[Ã¤Ã±Ã¡,T4Ã¡@QQÃ¡[(4Ã®[]XX-S4Ã®[]Ã¡Ã¡,SkÃ®[QQX[T4Ã [Ã£Ã¤X-S4Ã®QQQQ,SjÃ®)OO*,T3Ã±Ã±GGGG(3OQ)?QO(1010x0i0",
bedrock: "0g0g5ÃŽÃ°W(ÄªWVVHÃ¾Ã‡HwÃ­W4JÄ€|iÃ³w(Äª%IÃ(Ä€PÃ’AÄ·{5j]J^Ã¯J^A+1FyÃºMyÃŽÃ™wÄ¿TÄ˜Ä³PkÃº(Ã¼RdÄŠÃ‚dÃ°Å‚QÄ©Ã³xiÃ†1Ã¹Å€Ã¯Äž9Ã²yÃ€Ãš0ÅƒQÃ¹Ã²cJ^c*hCkr1iÃ²TÄœ^(Ä€Ä¿ERÃ€",
glass: "0g0g5ÄºÄ–YÄ“|YÃ­80Ã¦Ä£HÃ´cZ0000019AJPAÃº9wJPAÃ»94JPAÃ»8ÄŒJPAÃ»9AJPAÃ¼9AJPAÃ»9AJPAÃ¼9AJPAÃ¼9AJPAÃ¼9AJPAÃ¼9AJPAÃ¼FAJPAk9AJPwÃ¼FAJPAÃºCpAJP9",
cobblestone: "0g0g6ÃšÄžZÃŽÃ°WÄŽÄ‚HÃ?WÄžÅ‚HÃ³oY5C^Ã³Äƒl!ÃˆÅ‹Ã„Ä›?!ÄˆVÄmÃ•CÃ­Ã•ÄˆÄ¼_KÄ¿Ã¶CAÄ‘Ã¬_TÃ£Ä¬?UÄ¼Ã•A!cÄœbTÄ™h|6wdÃ¾Ä¹Ã†MÃSÄœÃ®ÃÄŠÃ³_wmÃ¼Äˆi$QÄ£BmwÃÄr?MÃˆVmÃ­Ã•^Ã³8ÄœlP)ÃºT4Ä¿Ä",
mossyCobble: "0g0gbÃŽÅ‹WÃÃ YÄŽÄ‚HÃ‡ÄœWÃ¦*HÃŸlWÃŽÃ°WÃ³oYÄžÅ‚HÃšÄžZÃ?W1yMj?6Ã¤BiÃ±Ãž)Ã€ÃžÃ”Ã¿ÃÃŸÃºÃ€3ÃºhÃ¥Ã“Ã¥MÃ Ã¥gÃ€hÄ‘ÃŽnÃÃ“Ã¢V3Ã¬?ÃŸÃ¾ÄwÃ,DgDÃ¥MnÃ¥iGhnÃºV1Ã¿Ã”ÃºkÃ€gÃÃ€+Ä‘jÃƒ0ÄG(j1Ã¥0MhpÃ»gÃ‚Ãžjj4ÃÃŽÃŸDj?Ãº?5Ã¾GÃ¿47ÃžÃ€Ã¿Ã¥hÃ¥Ã¢Ã¥Ã¥pGÃ¾n1nÃ“Ã»hmÃ”Ã­Ã",
stoneBricks: "0g0g7Ã³EYÄ†Ã–ZÃ‡Ã’YÃ©ÅžZÃ¥Ä¾YÃ–ÄžYÃŽÃ°W4JPAÃ¹2$(0dÄžÄ©xÃ°Å‚Ã™8Å&(sÃŽÄ®yNÄ¯ÄªÃŸ.ÃˆiÄŸAÃµ^Å‰ÄžÅ‚ÃšÄžÅ‚Ã—Å€%JÃ‰ÃšÄžAJR4JPÃ«0ÅxÃ«3dÃ°Å‰&8rK,!MÄ­Ä¿ÃšÄ Å‰i(Å‹JÄ²ÃdÄ¯ÅƒÄžÅ‚Ã—ÄžÅ‚ÃšÅ‚ÃšJ_ÃšÄž",
mossyStoneBricks: "0g0gcÃ³EYÄ†Ã–ZÃŽÅ‹WÃŸlWÃ¦*HÃÃ YÃ©ÅžZÃ‡ÄœWÃ‡Ã’YÃ¥Ä¾YÃ–ÄžYÃŽÃ°W1z)>xQ3?m7>R6Ã“ÃDgÃ”NNÃ“(Ã£EmÃ¾Ã.KÃ–Ã–Ã¤pFÃ¾CÃ+Ä‚Ã•9ÃŸÃ–ÄzDÃ£Ã½Ä‚GÄ‘ÄyGÄÃ”Ä£Ã¯Ä£IÃ¯VÃ‰Ä£QMh81hjQw06Ã•gK036KÃ“Ä€mÃ¹Ã¹CK6ÃÄpÃ–Ã“ÃÃ“Ã“JÄ€3@6ÄÄÄ‘yÄ€4Ã–Ã¾Ã–Ä’GFÃ•Ã¿Ã¥Ä‘Ä‚ÄVÃ‰IÃ¯VÄ£V",
bricks: "0g0g9Ä™XZÄUWÃ²ÄžHÄ¬ÄWÄŠnZÃ¶>ZÃ©jHÃÅšWÄ’Ã†Z0iO(0k(0hUÃ’hhUÃŽhÃ”Ã¤GVÃ”Ã¡Ã¢Ã“y]RyA]RyO0gk(0giÃŽhlÃ‘Ã’VVÃ‘Ã’mÃ“Ã¤GÃ’Ã„Ã¡RyA]Qyy]0kO(gkO0hUÃhhÃ‘ÃhÃ“Ã¡Ã“VÃ“Ã¤Ã’VA]Ryy]Ryg0gi(0gkÃŽhhUÃhhÃ‘Ã£Ã“Ã“Ã¤Ã£Ã“Ã“Ã¤Ryy]QyAI",
lapisOre: "0g0geÃ·-ZÃ©ÅžZÃ¢Ä¾HÃ–ÄŽYÃ‹Ã¢ZpÃ‰ZxÃ•YloZgÅ‚ZÄŠÃ³WhqZ?Ä¥ZÃ—ÃHgÅ€Z1gixzyg0h)>w1jQiiÃ„Ã…)RwÃ±h19aDÄ˜hÃ¹yxiAR1Q2hgj?Ä‰jÃ•zwx]Ä¤ÄŸ1Ä¤0h!Ä¡Ä4Opw1bÄ°1/?GkRpÃºM/Ã‰ÄŸ/OMOÄŠzÃ´Ä§#ÃŽhÃ©Ä¸gÄ1cÄ™iÄdOÃ§Ä›Ä€Ä˜0iÄ¤ÃÄ¤Ã²FÃºixÃ‰Ã¥pÃºyxhh9Ãºhhh0",
redstoneOre: "0g0geJ-ZÃ©ÅžZÃ¢Ä¾HÃ–ÄŽYÃ–Ã¢ZÃ¼gHÄ¯gHÅ£0WÅ¤Ã¢ZÄ«gHÃ¼0WÅ¥EYÄ¦PWÅ›ÃžZ00ixzyhhhxxhhjNiiOzQyxhhhi*VOyiyxCÃ„Ã¤Ä‚iRhgwÃ¿ÄŸÄ§hÃšwxhcÄ³2ighA>zyhAQh%Ã¯1g5Ã’Ã•Ä¹lÄ¸h01Ä¯Ä¥Ä¨MxyOx$Ä³yhj)Qhh0giBÄ½Ä¼TmÄ·N0gÃ´Ä§yg2wixc1hh00hhhyg1ih",
emeraldOre: "0g0gcÃ·-ZÃ©ÅžZÃ¢Ä¾HÃ–ÄŽYÃÄWÅ‚Å¥YnÃ£W1ÅˆY*ÃZ>Ä¯HuÃYnkH00ixzyhhhQg01QNikÃ„yhAÃ„hhhÃ”hT0Ã”2yxh4Ã¬g02hgg9Ä‚Rzzwx-Ã½Ã¦Ã¬xkTA]Ã¿Ä“Xy?ÃŽ?ÃŽÄ¢0yhmÃŸmÃ0h1Q(1(xgjpÄ€Nyhhh1Ã¥Ã…Ä‰giyQiÃ§Ã¦ÄšN0kÃ„iEÄˆ2wixÃ”1(1g0hh0yg0ih",
diamondOre: "0g0gaÃ·-ZÃ©ÅžZÃ¢Ä¾HÃ’Ã¾Hv|HGÄ…WyÃ‡YÃ·Ä£WÄ¾ZHÄŠÃ³W1gixzyg0hx(01iOxiOSjNzÃ„h01Ã*Ã”1Ãyxhz(Ãžx2hgi-ÃƒiÃ¯zwy8U@Ãž@hh3(Ã¥GO7gÄ*[1zÃ¯xh2nÃžMB@Ã”9ÃºMxR(G3Nyhhg02*K1i3M2Ã†U@20Ã¢ÃxÃ¾[ÃhiD01gÃžyxhhhwhhh0",
goldOre: "0g0gaÃ·-ZÃ¢Ä¾HÃ©ÅžZÃ–ÄŽYÄ…Ä©WÃ‹Ã¢ZÅ‘ÃZZÄœYÄŠÃ³WZÅ¢H00hijhyyyiRzyz*xxO3UMlURw2*@TB@TizUÃ”>0Ã“Ã­wzÃ”Ã¥ÃŽjIgiwÃ°Ã£]hyyhOoÃ•Ã­hmR3@8]0yNxxÃ”Ã­Ã«2VÃƒ2(I1OlQÃMyO(2)Ã“Ã¿>xQÃŽAoÃ”Ã¤Ã¬4Ã”Ã¿8i@Ã¬gxÃ°ÃyyI0KywÃ­hw2xy",
ironOre: "0g0g9Ã·-ZÃ©ÅžZÃ¢Ä¾HÃ–ÄŽYÃ¢Ã¼ZÃ²Ä¼HÄ–,HÅÄ¡WÅŠaY1hixzyy0hzMg1?UiiÃ„Ã‚jylÃŽhlÃ”1zOxiyw0z*Ã„Ã’OxghÃ„GÃ±ÃŽBKxg0Ã”Ãig1yjN01zMh0*ÃNkÃ„Rig@Ã”ÃgÃ”01M0Ã¤3x0iyhh0ghkÃ€giNÃ„2?Ã”Ã£Ã‚5Ãgi6Ã¤K1gUxhg01hh0hyh0ih",
coalOre: "0g0gaÃ·-ZÃ©ÅžZÃ¢Ä¾HÃ–ÄŽYÃ‹Ã¢ZAJH-ÅšH)ÄºH$ÄšZPzZ00ixzyhhhxxQTj)iiOAÃ„Ã¡xÃ±hkyoÃ”Ä€ÃiyBÃŸy]VRyhg1x02A>wwiRyiÃ•Ã‘hAAÃ„Xh@Ãº02lÃ–Ã¤iiyigAÃ±Rw1kTM2Qiiy?ÃhQAhxQyykÃ‡Ã¢Ã€4Ã¾Ã‚O2@UyAÃ¢RxiyhÃ¤hTh0hyx2g1ih",
coalBlock: "0g0g5sÃžZkÃHc(Z4gHEÄŠY0Ã¼_Ã‘ÄŽÄ¸AÄŠÄƒÃ’)SFÄžÃ²ÃšÄšP|Ä‹1AÄšÃƒÃšg9FÄšÄƒ$J^ÃšÄžÃ²Ã•iÃ»Ã–iPÃ‘Ã¼Ä¸y2ÃƒÃ’CI4Ã¼Å‚ÃškTF(Ã‰EÄŠ^ÃšJÃº5NÃºFÄœ]ÃšÃ¼X5g9ÃšÄŠxÃ™Ã­ÃƒÃšgÃƒÃ•JÄƒQJÃ²QÃ¼Å‚",
ironBlock: "0g0gbÄº;ZÄªcWÅšÄ¶WÅ–Ä¦ZÅ’Ä–YÅŽÄ†HÄ¢Å’YÄšÄ²WÅ†Ã©ZÅŠÃ·WÄ¾Ã‹H1g0001hgiyyO)VVÃlVVVVVVÃ„Ã¤IIIÄÄ‚Ä’ÄiyyzOVVÃ„lVVVVVVÃ„Ã¤IIÄÄÄ’Ä’ÄizOOVVVÃ„lVVVVVVÃ„Ã¤IIIÃ²ÄÄ’ÄiyyzO*VÃ„lVVVVVVÃ„Ã¤IIÃ²ÄÄ‚Ä’ÄiyzO*VVÃ„lVVVVVVÃ„hhhmÃŽÃ“Ã“Ã“",
goldBlock: "0g0g9ÅžNHÅ¡Å™WÄ¹ÃƒWZÅ WZÅ¢ZZÄœZZÃZZXYÄµNH00h01hg23QVO*Ã„ÃN4Ã“Ã VKh7N4Ã”*Ã…K0GÃ‚lÃ¢VÃ£0Ã”Ã£Ã‚lVÃ…K6VKo3VGÃ£Ã’Ã„1o3Ã…GÃ“GK18lGÃ£Ã”Ã£K0ÃlGÃ“GÃ“Ã“7ÃmÃ£Ã’Ã„Ã“Ã“Ã…8gÃ“VK65Ã„8gÃ’Ã„1gGKÃhGKh6Ã“0ÃŸgg1gÃ“0Ã”Ã†yÃ­EIyIyI",
diamondBlock: "0g0g9_Ä¦HWÃ·HncHÄ¾ZHZZZÄ‡Å¥YÃ”Å…WÃ Å–WeÅ’Z00h01hg23QVO*Ã„ÃN4Ã“Ã VKh7N4Ã”*Ã…K0GÃ‚lÃ¢VÃ£0Ã”Ã£Ã‚lVÃ…K6VKo3VGÃ£Ã’Ã„1o3Ã…GÃ“GK18lGÃ£Ã”Ã£K0ÃlGÃ“GÃ“Ã“7ÃmÃ£Ã’Ã„Ã“Ã“Ã…8gÃ“VK65Ã„8gÃ’Ã„1gGKÃhGKh6Ã“0ÃŸgg1gÃ“0Ã”Ã†yÃ­EIyIyI",
redstoneBlock: "0g0g5Å‹Ã«YÄ¤Ã«YÄŒKYÃ(WÃ¼Ã€W0000004Ã­Ã‚QÃ­]4XÄ‚PyI4Ä‹zÃŸCI0Ä‘s}Q05@Å‚ÃšÄ˜I5ÄÅ‚ÃšÄ°8a@Å‚ÃšÄ Ã¹9oÅ‚ÃšÄ°859qÃ·]I5]Å‚dÄ«Ã«4Ä‘sÃ›]Ä¯5BAJAÃ¹0Ä«kÃ¶yI4Ã¹9]J]000000",
lapisBlock: "0g0gdBÃ—YxPZ*ÄWMIYtFHxEYsÅWt8HoÄ¿HoÄ¿Yt7ZFÃ†ZkÄ®W100gzkkkljÃÃ„Ã¢Ã“Ã¢Ã†5MnVÃ¢Ã¥Ã’Ã¦7ÃVÃ’ÃÃ£Ã”Ã¦5ÃžÃ…GÃ’rÃ£ÃˆbVVGÃ”ÄÃ„Ã¤5ÄÃ¢Ã¢Ã¥Ã”Ã…Ã—7Ã…Ã”GÄŸÃ¾Ã”Ä‚DÃ”Ã£Ã£Ã…Ã£Ã½ÃˆDÃ“ÃžÃ„Ã£Ã“Ã¾Ã†7Ã–Ã’lÃ”Ã…Ã–Ã†nÃ¢ÄÃ”Ã“lÃ£Ã¤5Ã£Ã‡Ã¾Ã–Ã¢Ã…Ã™lÃ…Ã“Ã“Ã¾Ã”GÃ†@Ã…GÃ“Ã£Ã“Ã¢ÃŠoIIÃ±ÃµÄÄ³Ä³",
emeraldBlock: "0g0g6nkHqÄ›HÃ®ÅZ>Ä¯HnÃ£WuÃY0000019AÄ‚Ã–]Å„800w0Ã‹c)Ã»J@Ã‹8w00mV8wJÃšoÃ’cwÄƒÃºÄ€?c(Ä‚ÃºÄ€?8(Å‹4gÃ’c(Å‹CgÃ’cÄ§Ä„im?gÄ©PAÃ¾?cB01Ä Ã’gJPAJÃ‹g]4Ã¹8Ä¼+Å‚ÃšÄžÅ‚Ã–",
tntTop: "0g0g7Ä¿Ä™YÅ1YÃ·-ZÄ˜Ã‚HVVHÃ¹Ä™WgTZ4Ã«]4Ã«]FNÃ»FNÃ»!Ã‚ÄŽÄ¸Ã‹Ã½Ã›Ä®Ä•ÃœÃ“Å”4Å“]4Å‡]FNÄ›Ã³;Ã»!]ÄžÅ€Ã‡Ã½Ã›Ä¾+Ä¹[Ä•4Ã²ÄžÅ‚c]!{ÄžÄ¹;Ã»!ÃƒÃ¾Ä¸Ã–lÃ›Å€Ä”Ã¸Ã„Å”4Ä§ÃÄ¿Ä¯]!NÄ‹MOjFÃ‚Ã½FÃ‚Ã½Ã›Ä½Å”Ã›Ä½Å”",
tntSides: "0g0gaÅ1YÄ¿Ä™YÄ˜Ã‚HÃ¹Ä™WZZZÄ¶;ZÅ†ÃšY)Ä¼HoÃZÄ¦Ä²W0i0i0i0ihzhzhzhzhzhzhzhzhzhzhzhzhzhzhzhz?Ã“VÃ“Ã’Ã„Ã“Ã‘@GÃ°Ã¢Ã†Ã”Ã¤UÃ–Ã†VGÃ…Ã„Ã£Ã“?Ã”Ã“Ã£GVÃ¯Ã¾@Ã†Ã„Ã¢Ã†VÃ°UÄÄÄÄÄÄÄÄyOyOyOyOhzhzhzhzhzhzhzhzhzhzhzhzyzyzyzyz",
tntBottom: "0g0g4Ä˜Ã‚HÄ¿Ä™YÃ·-ZÃ¹Ä™WkkkkÃ˜Ã˜Ã˜Ã˜Ã˜Ã˜Ã˜Ã˜ZZZZkkkkÃ˜Ã˜Ã˜Ã˜Ã˜Ã˜Ã˜Ã˜ZZZZkkkkÃ˜Ã˜Ã˜Ã˜Ã˜Ã˜Ã˜Ã˜ZZZZkkkkÃ˜Ã˜Ã˜Ã˜Ã˜Ã˜Ã˜Ã˜ZZZZ",
acaciaLogSide: "0g0g6Ã–Ã¯YÃ‡QYÃ¥Ä­YÃAWÃ‡UZÃ·nH50Ä·cyX6Ä§Å“cy4eSÅ“4i4{SQgNkQSÄ«Ä˜SÃ€SXTÄ™gÃ€Ã«Ã¯wT0Ã€Ã¬Xy1Tg5Ä·yh?g0Ä·whko0x3gko4x3Äˆ/8ÄŒ5jÄ˜(wÄˆX1Ã€g0SÄˆj4iÃ«SÄŠh42X",
acaciaLogTop: "0g0gbÃ–Ã¯YVQYÃ)HPjZÄ¡Ã®HÄ•Ã WÄ¨Ä›ZÃ¶NYÄRYÄ‰ÃƒW?3Y1xizNj1g4Q??Ã’UQTAGIÄ€ÄÄIÃkÃ£Ã‘Q?Q]>ÄXVVVVPÃ‚)Ã¼Ã†Ã²Ä€Ã¯]Ã*Ã¯Ã…VVÃ¯Ã†TBÃ¼Ã†Ã‡Ã½Ã½PÃ€5Ã¼Ã†Ã‡Ã¯Ã¯]Ã€5Ã¼Ã†VVÃ½Ã†ÃlXÃ†Ã±Ã²Ã½PÃ‚BÃ¼VVVV]Ã‚)Ã¼?QQ@]Ãƒ)Ä€Ä€IIII>ÄŒQV?Ã„VQTgNxg0iz(",
acaciaPlanks: "0g0g7Ä¡Ã®HÄ•Ã WÄ¨Ä›ZÄRYÄ‰ÃƒWÃ¶NYÃ²iY4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚TAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžSA4PkiA9cÃ«0PNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
birchLogSide: "0g0g8ÅšÄ¦YÅ†|HÅ‚Ã™ZZZZÄ¦Å¡ZÃŽÃ¢H)Ä¹YÅ–ÄµY0ÄŒ0Q4Ã«Q0rÃŽiÃ€ÃšJÃ®04rÃš_ÄTÄžÄºSFÃ›Ä‘Ä˜Ä”ÄwÃ²TBÃ£Ä˜4]ÃšÃ¬Ä»?+Å‚Ã–vÄ©ÃŽwÅ†Å”ÄŸÅ‚Ã™jZÃšÃ«Ã¹]+Ä¿1iÄ¿TÄžÄªÃšÅÄ©B0Ã¹fÅœ&Ä·6Ä¿QÄ“ÄžÅÄŒÄƒÃÄ¼%9Ã€Å‚5wÃ¹",
birchLogTop: "0g0gaZZZÅ’Ä–HÄ‚Ã†WÃ)HÄ¾8HÄ±Ä¾YÄ¾EZÄŽÃ„HÄ–GHÄ¢ÄH1xizNj1g4Q??Ã’UQTAGIÄ€ÄÄIÃkÃ£Ã‘Q?Q]>BXVVVVPÃ‚)Ã¼Ã†Ã²Ä€Ã¯]Ã*Ã¯Ã…VVÃ¯Ã†TBÃ¼Ã†Ã‡Ã½Ã½PÃ€5Ã¼Ã†Ã‡Ã¯Ã¯]Ã€5Ã¼Ã†VVÃ½Ã†ÃlXÃ†Ã±Ã²Ã½PÃ‚BÃ¼VVVV]Ã‚)Ã¼?QQ@]Ãƒ)Ä€Ä€IIII>AQV?Ã„VQTgNxg0iz(",
birchPlanks: "0g0g7Ä¾8HÄ±Ä¾YÄ¾EZÄ–GHÄ¢ÄHÄŽÃ„HÄ†CW4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
darkOakLogSide: "0g0g6;Ä¨Z(ÃºW]ÅˆZEÃ¬W(ÃºHÃ‡iY50Ä·cyX6Ä§Å“cy4eSÅ“4i4{SQgNkQSÄ«Ä˜SÃ€SXTÄ™gÃ€Ã«Ã¯wT0Ã€Ã¬Xy1Tg5Ä·yh?g0Ä·whko0x3gko4x3Äˆ/8ÄŒ5jÄ˜(wÄˆX1Ã€g0SÄˆj4iÃ«SÄŠh42X",
darkOakLogTop: "0g0gb;Ä¨Z)Ä‰YAÃžWsKZ{Ä¨Y]Ä™HÃ€ÅˆY(ÃZ-ÃºW;Ä‰W(ÃºH1xizNj1g4Q??Ã’UQTAGIÄ€ÄÄIÃkÃ£Ã‘Q?Q]>ÄXVVVVPÃ‚)Ã¼Ã†Ã²Ä€Ã¯]Ã*Ã¯Ã…VVÃ¯Ã†TBÃ¼Ã†Ã‡Ã½Ã½PÃ€5Ã¼Ã†Ã‡Ã¯Ã¯]Ã€5Ã¼Ã†VVÃ½Ã†ÃlXÃ†Ã±Ã²Ã½PÃ‚BÃ¼VVVV]Ã‚)Ã¼?QQ@]Ãƒ)Ä€Ä€IIII>ÄŒQV?Ã„VQTgNxg0iz(",
darkOakPlanks: "0g0g7{Ä¨Y]Ä™HÃ€ÅˆY-ÃºW;Ä‰W(ÃZEKZ4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
jungleLogSide: "0g0g9Ã‡hYÃ–NWÃ©ÃŸHÃ€Å˜HSÄ¸W;Ä¨WVMYÃ¢JHÃŽÃW1y3OOhg004S404VQQ@Ã¤?US4xh0hy33O(Sh04Q6Ã±K03OÃ•Ã‘??Vh10OO02x??V1g>O(0iwQÃy00QOÃ±Ã°QO)VÃ¤Ã«0hhgÃ•Ã±4?U>(>UhQ0xh6KQQjÃ•Ã“3)Q010Q?Ã€hTg01g>O00OO",
jungleLogTop: "0g0g9Ã©ÃŸHÃŽÃWSÄ¸W;Ä¨WÄ¢mHÄ‘ÅŒHÄ¦+YÃ½ÄŒHÄ…Ä«Y1xiOyi1g4Q??Ã’UQTAGGÃ±IIGÃkÃ£Ã‘Q?Q[>BÃ¡VVVV]Ã‚)XÃ…Ã¤Ã±Ã¢[Ã*Ã¢Ã…VVÃ¢Ã…TBXÃ…Ã†Ã¯Ã¯]Ã€5XÃ…Ã†Ã¢Ã¢[Ã€5XÃ…VVÃ¯Ã…ÃlÃ¡Ã…GÃ¤Ã¯]Ã‚*XVVVV[Ãƒ)X?QQ@[ÃƒAÃ±Ã±GGGGRAQV?Ã„VQTgzxg0izw",
junglePlanks: "0g0g7Ä¢mHÄ‘ÅŒHÄ¦+YÃ½ÄŒHÄ…Ä«YÃ¥ÃƒHÃ–iZ4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
spruceLogSide: "0g0g6-ÃºW(ÃY{Ä¨H$Ã€Y$ÃYUÅˆZ50Ä·cyX6Ä§Å“cy4eSÅ“4i4{SQgNkQSÄ«Ä˜SÃ€SXTÄ™gÃ€Ã«Ã¯wT0Ã€Ã¬Xy1Tg5Ä·yh?g0Ä·whko0x3gko4x3Äˆ/8ÄŒ5jÄ˜(wÄˆX1Ã€g0SÄˆj4iÃ«SÄŠh42X",
spruceLogTop: "0g0g8UÅˆZQÄ©WÃ‡iHÃ¬Ã®YÃ¥ÃHÃ²Ã»YÃŽyZÃžRZ4wSQ20%ÄŸsÄš+Å€d%Ä¦ZÅ¤ÄdÃˆÅ‚ÃžÄŸÄ€j.AJ[Å‡LÄ¡ÄŸÅ¢[Ä‰j]ÄŒÃ»PÄ€jÄ¡ÄŽÄºÄ®Å‡jÄ¡ÄŽÄº[ÄˆOÄ¡ÄŒÃ»Ä°Ä‰j.ÄšÅ†Ä®Å‡jÄ¡AJ[ÄˆLÄŸrÃšÄ¾Ä‰fÅ–ÄžÅ‚ÃšÄ€dÄ¡sÃ¾@Ä¿40SQ2Ã«",
sprucePlanks: "0g0g7Ã¬Ã®YÃ¥ÃHÃ²Ã»YÃŽyZÃžRZÃ‡iHUÅˆZ4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
sand: "0g0g6ÅŽÄƒYÅ‚/WÅŠÃ˜WÄ¾pHÄ¹ÅYÅ–Ä”Y4ÄŠÄ¸?ÄŠÄ‚Ã‘ÄšÅÃµr8@+9AÄšÅ€FNÄºPÄŠÄ°Ã“Ã¾Ã³EÃ¾^$Ã¼ÃºÃ’NÃ‡KÄŸÃ‡Ã›iÄ²$Ã¾_%ÄšbÃ’iÄ„Ã–Ã¼Ã‡5JÃ‰(ÄšÃƒ(ÄŠÄ±BoÄ±Ã™Ã¼Ã‡PÄžÃ‡Ã’ÄŽÃ´lmÄ±?laEÄŠÃ‡EÄ’Ãº?oÃ²?kÃ³$Ã¼Ã",
gravel: "0g0g8Ã’Ã’YÃ³7ZÃ¾-ZÃžÄŽYÃ¾Ã‡HÃ¬ÅžZÄšÃ³WÄšÄ¢Z5,$Ã¢Å‚#Ã¾Ä£_Ä”Ã‚{ÄÃ­Ä°Ã¾Ä€Ä³ÄœÄºÃŠÄž/ÃšÃ“Å‹Å„ÄÃ´dlÄˆÄ°Ã¿Ä°Ã˜$#Ã¨ÃŸgÅ”Ã¹Ä¿Ã’ÄÄ£ÃŽÃ°Ã…Ã–$Ã‡Å„ÄY#Ã¼ÅÄ´Ã¡Ä¯Ã†ÄšÄ›KÄžj<Ã™Å‚#Ä”Å‚Ã™..$BÃ´FÄ’ÅÅŒ(Ä¹Ã‰ÄÃ¾cGDÃš)Ä¾Ã‹",
blackConcrete: "0g0g48wZ8MW4wZ8xWmeÅŸÅžÃ‘Ã˜ÄªÄ³9Å Ã³ÅŸÄ¶Ã¸Åž;Ã®ÅƒÃ“yÃ€ÄˆÄ¶ÃƒÄžX^Ã¦Ä†ÅŸÅ’Ä”<~Å”<Ä¢L4Ä²Å£Å˜Å‡Ä›Ã¸ÃŒÄ©Ä¶Ãµ;ÅžkÅ‡Ä›ÄšÄ‹Å‡Å–ÄÄœÅ™,Å‰Ä©",
blackWool: "0g0gfcMWcTH8MWgÃYoÃŽZcMHkÃŽZ8wZkÃY8xWAJYgTH4wZsÃŸWwÃ­H1w)5Ã‘ÃŸIFIÄ’QÄ£9Ã‰Ä©r|Ä£Å”Ã´|QÅ‘]Ã¬|Ä™<bÅ„Ã¬Ä•Ã´8QGÃ†Ã‚QDDd717rÃ½bÄ’QOÄ ^Ã˜Ä’]hÄ’@Å„5|Ã•Å„QBÄ½1Ã‰Ã‡:yÃ‰ÄœGÄ 8Ä’ÄœÄ’Å„QÄ•@Ä»Ä Ã®EwIhQ0Ã†GÄ hGÅ…D)XÄ’Ã²@Å‘Ä»Ã´Ã§|Ä£ÅÅ”Ã´Ä¿XÄŒVXgÃ¹Ä¿1Å…Ä™Ãš0|",
blueConcrete: "0g0g3$Ä¡W$Ä Z$Ä°WlÃ€?Ã‘T?QA]0@VUUh?ÄŒkkw55kUÃ’oTlV0UhhgÃ‘0VUR0gÃ?QghX54UVS4Ã0UÃ½ÃlÃ€UÃ¼kÃ„",
blueWool: "0g0gj$Ä°H(Å€H$Ä°W)Å€Y-Å¡W(Ä°H)Å‘W$Ä¡W)ÅZ)Å€Z<:W-Å¡H(Å€Y$Ä Z.aH<aY-Å‘W<qY.aY0Q1Ã¹ÄMeAwR^kÄÃºÃµ0Ã³Ä­I$Ã‰Ä€,Ä¡czÄ‰8ÄI]]Å4Ã›#sÅ‹Ã¯}>aJgÅŽ!ayg[hÄ±Å‰Ä„1FÄ©Ä¨kcÃ‚Ã¾TÃ¶IÃˆÃµÄ¬EI8UÄŠpÄµ1]ÅŠxÄµA4Ã…oÄ‰#axÄ˜R#oÄ›Ä…I!kÄ‰Ä¨^Ã I?-Ã°ÃŸÄ¿XcPhÃ€Ã«XÃ¹1^Ã®Ä…I8}G;[ph5F2Ã¬ÄŠÄhc-Å‡ÅdÄ±Ã¨JÄ®x4Ã‚Ä±USwhÃŠÃ«5Ä¸K{Å‡lÃ›",
brownConcrete: "0g0g3ÃŠÅˆZKÅ™WKÅˆZqÃ–lÃ„Ã„Ã„Ä‚Ã¾ÃÄ‰VÃ„ÃˆTÃˆÃÄ‚ÄŽÄ’Ã„Ã’Ã’Ã½Ã‘ÄÄÃˆÃ’VÃ’lÃ„VJÄÃºÃ’Ã¾Ã¯Ä‚Ã½Ã“Ã³Ã‡ÄIÄ€Ä’ÄÃ½Ã–Ã¾VÄÃ–ÄŽÃ¾IÃ„Ä‘Ä‚ÃVÄ",
brownWool: "0g0giÃ’2WÃ–2HÃ‘Å™WÃžiHÃ¥NZÃ–2WÃ¢yYKÅ™WÃžyYÃžiYÃ¬ÃƒWÃ©NZÃšiHKÅˆZÃ©RZÃ¬>WÃ¥yYÃš2H0QxÃ¹Ä‰MeAw[PÃ¼ÄÃºÃµhÄ©Ä­I$Ã‰Ä€Ä®Ä¡czÄ‰7ÄÃ°]]Å4Ã›#sÅ‹Ã¯}OaJgÅŽa2yg[hÄ±Å‰Ä„1FÄ©ÄªXÃÃ‚Ã¾TÃ¶IÃˆÃµÄ¬EI8UÄŠpÄµg]ÅŠpÄµA4noÄ‰b2ÃžÄ˜RbyÄ›Ä…Ã°FÃ¼ÄŽT^Ã I?-Ã°ÃŸÄ¿Ã®cPh{KXÃ¹hRÃÄ†C8}G;[ph5EÄ®Ã¬Ä†Ähc:wÅMÄ±Ã§Ä¹Ä®wÄ«Ã‚Ä©kSy.ÃŠÃ¬5Ä¶K{ÅˆlÃ›",
cyanConcrete: "0g0g3lÄ¿YlÅYlÄ¿H1IÃ€pE?SmkÃ€w6PÃB?S4k299ÃºkÃ„RPÃ’ÃŽwÄŠ?A2Ã‘IÄ€8pÃ¼UiSÃ’gÃ½95EÃ²ak?Ã½?1RÃ€FÃ€KSÃ’Ã¹",
cyanWool: "0g0gelÅŸYm8ZmFWmPHlÅŸZm.WlÅYmÃ–ZmÃ‡HmoZlÄ¿YmÃ‡YmÃ–Ym.H10zTÃƒKy6BGÃ®Ä6pÄŽpÃ´ÄÄ²F:Å„Ä®*x:Ãº#PÄ£xÃ§Ã‡ROÃ“imO6Ã“_@1@pÃŽ1GÃ®yJÃ±Ã‡GNhG*Ä£1:VÄ£<ÃŽÄTpmF6poÃ“Ã½?GÄ…GÄ£OÃ§*Ä JÃ‚24Vh<4lÃ“lhÃ“Ä¤Ã“z%GÃ„Ä¼Ä®Ä›FÃ–Å‚ÄÄŸÄ³FÄšÃƒÃ¤h%gÃ‘Äš1Ä¤ÃºÃ‰4Ã´",
grayConcrete: "0g0g2)ÅŠZ-ÅŠZ00000000090000000000000000S100gg",
grayWool: "0g0gd-Å›W<4HTAZTkYTAY)ÅŠZ<kY-ÅŠZ?*W?AZ?)Z.4W-ÅšZ00i0)Ã€Ã“7jIÃ¼h71Ã…1Ä‚hÃ³ÃŽ^QI>g!rq1Ä’gÃ²M1yV6cy5Ã¢a5051Ã€1IyhmÄ€MI@0I>Ä‘0!OÄ‘QÃÃ»b15hc1pVj3IkIÄ‚QÃ³>Ä‘mM10ObA03VjÄ˜VÄ€Ä¬iÃ‘I*>IÃ¼ÃŽÃ^hÄIhÄŽNÃ²0Ã‘Ä˜ÃÃ¾bÄg.0Ä‚",
greenConcrete: "0g0g2PÃHPÃŸHh;Ä’Ã‰Ã™ÅÃŸÃ†Ã°M!Ä¾ÄˆÃ‡ylÄ–|aÅ—ÃˆÃ«Ã€Ä¼Ä¸ÅšÄ‘Ã¸cKÃ¦Ã™",
greenWool: "0g0gh|Ã­WÃÃºZÃÄ‰YÃ‡Ä¸H|ÃºZVÄ¨YÃ‡Ä¨YPÃŸWVÄ™YÃ“hYÃÄ‰ZPÃHÃ‹ÅˆHÃ‹Å˜HÃ‡ÅˆHPÃŸH|ÃŸW0S1c4FÃ·4w7TÃ‚ÃºÄ^1Ä¯ÄÄ„!rkÄŽMaOcÃ“ÄŒÄ¬S@Ä¬4{2Ä€Ä«5&!Ã«Ã¬ÃµÅ–y91Ãµ7.Ä§Ä§;13Ä©Ä‹Ã¹1^@M9]q^ÄŒÄŒÄ¯8Ã‚Ã»lÃ·16Ä©Ã½Ã·MÃ·[k1yIÃžEgyÃ­,Ä…]1Ã‚Ã½pFÃ cÃ‘Ä˜Ä¬KÄ»Ã­I80gÃ«XÃ“08ÃƒÄ„B8ÃŒGNfgÄ·Ã‘ÄŒÄMÃˆÃ¿paÃ¦ÃµÄ¬FÃ²ÃgÄŽwÄ‹]Ä¯Qow-sÃ«5Ã¶Ã€^Å‡0Ã™",
lightBlueConcrete: "0g0g3C$Yy$HysHiVUS1kklk?Ã€gVKk4Ã‚lVTVlÃhS5UhhlxTTÃkVÃ9ÃhVgFSÃ€1Ã¬5Ã’5VÃŽkh??TlV4VlSl",
lightBlueWool: "0g0gq&Ã™ZNÄ…W!ÃŠZ/Ä´Y@Å¥W&Ã©W&Ã¶W=Å”ZRÅ¤ZC;Y!Ã™ZC{Y~uH[eW+Ä•Hy$H!{Y+Ä¥H_eH/Å„YRÅ”ZRÅ¥WNÄ…HC$YNÃ¶W=Å„Z0Q1Ã¹ÄŽ/iÄ‰Ã¶_pÄ¿Ä­Ä‰Äµ2Ä³ÅŽÄ§MÃ™Ä…m^Ã›QÄ‘@M7oÃ˜DÃ†ÃŸ#ÄxÃ¯J;^NV,Ä§Ä³yhPÃ­_yÅƒ1%Ä©ÅŒÄ€mÃ9ÃÃ·zÃ˜eÅMj8Ã†Ä«uÃ‚1Ä“zÄ†Ã‚?xÃ²sÄžÄªÃµÄ™Ä RÄªÄ”Ä»ÄÅ€FÄ¿Ä¯Ä¸ÃµÃ¼Ã¹Ã°P7Ã»ÃŠOÃ¶>ÃÃ Ã¹Ä¿Ã¼1ÃÃ¡ÄŽÄ®Ä˜Ã‚Ä(Ã…p7@(Å’Ä‰Ä¿Ä°wÃ›{Ã–EÄ­{Ã‘Ã°ÅcÅœÃ|Ã²Ä¹Ä§Ã‡Ã’(Ãˆ{I~wlÄš",
lightGrayConcrete: "0g0g2Ã©ÅžHÃ©ÅžWÃ ÄGÅŸÄ…ÅÃŠÄ¼Å†ZÃÅ•YÅœGHÅ†<ÅŽÅ‰:|ÄžÄ‡Å ÄžÄ¾Å¢Å¤Ã”Å¤Å",
lightGrayWool: "0g0giÃ°nYÃ°nZÃ­7YÃ·-HÃ¾Ã‡WJ]YÃ¾Ã†ZÃ©ÅžHÃ­7HÄ†Ã¥HÄ‚Ã–WÃ³EWÃ©ÅžWÃ³-HÃ·-YJÃ†ZÃ³DZÄ‚Ã–H0QxÃ¹xFÃ·xÃµ]pÃ‚Ã½pÃ˜i2Äžw#Ã‚Ã¾Ä»Ä‘Ä²NÄ†Å›ÄŒÄ¬o{ÄÄ§Ã—aÄ»Ä‰Ã¯!!Ä©NoÅŽ8Ä©yg[TÄ©ÄˆÄ„19Ä©Äœ4_^]ÃŽÃ¶ÃÃ‚^ÄœÄŒÄµ8Ã‚Ã»l^g{ÄŠÃ¾!OÄ·lk(aÄ©Ã¬Ä”RaÄ½Ä‹Ä…Ã’9Ã‚Ã¾Ä¥FU{Ã‘ÄÄ¬Ã³Ã¾NÃµ>g^Ã€Ä§Ã¸gRÃƒÄ…Ã’Ã«}Ã¢A[p6Å›ÄŒÄÃ¥Ã‚Ã½oÃ˜:ÃŒÄÄP{@ÄcÄŽ^Ã­n=2SUÅˆTPÃ†^Ä‰5^",
limeConcrete: "0g0g3ÃŒÄ‰YÃÄ‰YÃŒÃºY402Ã«00Ã«88Ã¹Ewg1204000Ã«Ã«Ã«AwÃ«w2A0Ã³2ÄˆÃ¬4A14gh00020wEÃ«01g00oÄˆÃ¬S081Äˆ820",
limeWool: "0g0ggÃ“Ä™YÃ—Ä¨YÃÄ™YÃ›Ä¸YÃ§1YÃ“Ä¨YÃ£Å˜YÃÄ‰YÃŸÅˆYÃ›ÅˆYÃŸÅ˜YÃ±NHÃ—Ä¸YÃŒÄ‰YH1YHhZ1w)VÃ“ÃŸIyÄ‚Ä£@Ä³2ÃŠÄ¹j}ÄªÅ¥ÃµÃ›Ã“Å¢Ã—ÃºÃ›Ä¨=ÃŠÅ•ÃºÄœÄ‹Ã‡@Ã©Ã†Ã‚QDDÃŒÃ‹1Ã‹sB1Ä£@O-_Ã™Ä£Ã•hÄ£Ã“Å‹5Ã›Ã—Å›Ã“B@ÃÃŠÃ‚;yÃŠkÄ¾Ä¯ÃˆÄ£+Ä£~Ã“Ä¦Ã“Å›Ä¯Ä‹FBIh@5ÃˆÃ©qhÄ¾~%)Ã°Ä£ÄŠÃ“Å¢@ÃµÄºÃ›OÅ’ZÄ„ÅÄŽÄœVÃ°gB]1Å–MÃ‘5}",
magentaConcrete: "0g0g4ÄÄ°ZÄÄ±WÄÄ¡ZÄŒÄ¡Z5Ã’SÃ¼VÃPTÃ€UÃ†VÃ‡@Ä¿Ã¬2ÃŽ^Ã¡Ã‡Ä®SKÃŠ@Å†3Ã„Ä¸45Ã„@9ÃŽVoRtÃžÃ¤4VVx}Ä•Ã£ÃxQÃ¢11Ã€hÃ¯xl50ÃŽÄ¸",
magentaWool: "0g0gsÄ˜Å‘HÄœÅ¡YÄ”ÅHÄ˜ÅHÄ¡bWÄ¬:YÄ˜Å‘YÄ¨#HÄ¨#YÄÄ±WÄ¥rWÄ”ÅWÄ¥bWÄ¨rHÄ¼Ã¶WÄ¬:ZÄ Å¡ZÄœÅ¡ZÄÄ°ZÄ¡aZÄ°{WÄ¸Ã™YÄ¥rHÄ¬#YÄ°_ZÄœÅ‘YÄ”Ä±WÄ´ÃŠH0QNkÄ­/iBE_ÃÃŠÅŽÄŠhqÄ´p$OÃ©z/Ä¹Ä¸?gÃ³Ä¡dKÃœ]XÃ¼)F@5Ä¿Ã™Ä³Ä©Å„FÄ±ÃµyÃ¼PÃˆ|>A1N>toÃžÃ Ä‡ÃŸiÃ—Ã§Ã¸7.m8ÃŠÅ‹uÄ€pÄ—>ÄžÄ€RnÄ„sÄ¨Ä³|ÄŠSRÄ³yÅ›ÄŽdOÃŠÅÄ‰ÄµÄ¬gÃ±Ã7Ä‹Å‰ÄŽÃ¹{hÄ‚Ä·XÄpÄšÄ»ÄŽ%8Ã‚Ä„UPxUÃ±.Ä¢TÅ‘Å“xÃ{Ä¸PÄµÃ·Ä–Å€aFÄŸÃ Ä´ÄƒwzÃ‡Ä™ÃŽÃ°Ã½Ä€~Ã¬ÄÅ›",
orangeConcrete: "0g0g2ÅˆÃ«WÅ„Ã«WRgguhKoCÄ¯Ã¹124Sw0x8QÃ¹Äœ2ÃÄ™1Ã„SSSo40",
orangeWool: "0g0gmÅÄˆHÅ”Ä˜YÅŒÃ¹HÅŒÄˆHÅ˜Ä¨WÅ Å˜YÅÄˆYÅœÅˆHÅœÅˆYÅˆÃ«WÅ˜Ä¸WÅŒÃ¹WÅ¡RYÅ¡1ZÅ”Ä§ZÅ”Ä˜ZÅ¡iWÅ¡NHÅ˜Ä¸HÅ Å˜ZÅœÄ¸HÅ¡yH0QNkÄ­/iBE_xÄ¿Ä­Ä‰Ä¶qÄ³Å›I&Ã™u]Ä©~QgÃ°M7w_7Ä¤Ã¹OÄ‰25Ã¶:ÃµRÃ½FNÃµyÃ¼Pi|3A1NRÅœÄ€ÃœÃCÃ‚hÄ±Ã˜eÅMi8Ã†Ä«udpÃ´3Ä†dR4Ã“Ä„Ä¶OÄ³Äš-ROÄ†Ä»ÄÄ»MÄ¿Ä©xÃµÃ™gÃ°T7Ã®ÃŒÄ‹Ã¹QhÄ‘SÄ¤ÄpÃµÃ¡ÄÅŽÃ¤Ã‚Ã¾Ä«PxUÃ°(Å’TÄ¿Ä­Ä‰~Ph7icÃ¶]ÅEÅŒÃ{Ã–xÅŠÃ‡ÄƒxÄ¦cÃ}Ä¸ÄÄ˜",
pinkConcrete: "0g0g3Ä¼Ä€ZÄ¼ÄWÄ¸Ä€Z5QSÃ€14gkgk01gQ1Ã€0gQ4000ghÃ€S0?0]9kgk41Q42T4g01hÃ105k4S4hS00gggQÃS",
pinkWool: "0g0gvÅŒÅ€YÅ”Å¡WÅˆÄ°HÅ™!YÅÃ§YÅŒÅZÅÅZÅÃ‰WÅÃ˜HÅ€Ä‘WÅˆÄ°YÅ/ZÅ„Ä¡HÅ™/YÅÄ³YÅÃ´ZÅ™qHÅ•aHÄ¼ÄWÅÄ„WÅÄ¤HÅ^ZÅÄ³HÅÃ§HÅ•aWÅÄƒZÅ€ÄWÅÅ ZÅÃ´YÅÄ”WÅ_W0Q1Ã¹ÄŽ/iÄÄ•{Ã–ÅƒÅŽÄŠh3dp((Ã¨Å‰/}Ä™QÄ·Ã´.7Ã•Ãœ-Å‡Ã $D+Ã¯Å€;aÄ¹Ã‹/ÅÄ³Ä©hPÃ_NÅ1&Ã®mooÃ Ä¡ÃžÃ·bÃ§Ã¸7.l8ÃŠÅ‹uÃ¥1Ä—OÄ‡Ä¡RpÄ¤Ä„Ä Åƒ{Ä¨Ä§{Åƒ(Å¤CuFÅƒÅˆÄ‰ÄµÄ¶Ã€Ã±|7Å’Å‰Ä›Ã¶|ÃÃ©Å‡Å‡I1Ã£Ã¡Ä7Ä§Ã¡Ä„Ä¸Ä‚pmÃ±-Å“TÅ“Å“Ä‰ÃžÄ·Ä¸-eÃ›Är9Ä”ÅžÃ Ä´Ä¢Ä‹0ÃŽÃ Ã€ÃÃ£Ã«~Ã¹lÅš",
purpleConcrete: "0g0g4Ã‘Ã²ZÃ‘Ã¥ZKÃ¥YÃ‘Ã¥Ylm100Ä¸Ã¾TNVQgp5820ÃÄ•0S2RV1Ã€lhgÃ¬g4pÄ½jÅk0Ã†T)S?lÃ¼UÃ¬lÄ»RS1Ã½0TTp0T]Q4T1",
purpleWool: "0g0gmÃ™Ã³WÃÄ‚HÃ•Ã³WÃ¡Ä‚YÃ«Ä£WÃ™Ä‚WÃ¨Ä’ZÃ‘Ã²ZÃ¤Ä’YÃ•Ã²ZÃ½cZXÄ£WÃ¡Ä‚HÃ‘Ã¥ZXÄ²HIÄ²YÃ¤Ä’ZÃ¨Ä¢ZÃµÅ‚ZXÄ£HÃ™Ä‚HIÄ²H0Q1Ã¹5MeAwPTÃ¼ÄÃºÃ¬2^mÄŒzÃ‰Ã­,Ä¢1zÄ‹pEÃ°S]Å‡XÃ›3sÅ‹5Ãƒ(Ä§Ã­gÅŽÄŠaJg[PÄ§Å‡s11Ä©jÃ¼1Ã‚Ã¾TÃµÃ•ÃˆÃµÄ¬EÃ¹8UÄŠpÄº1]ÅŠpÄºAÃƒPÄ€1Äˆ^ÃžÄ˜PÄ‹2Ä›Ä…Ã°1Ã¼Ä‰Ä¬^ÄƒI?-Ã°ÃŸÄ©Ã®c]gcKXÃº0EÃÄ„C8}Ã¥Ä¥DphlEÄ®Ã²ÄŒÄ‘Ãº1-Å‰ÅˆÃ¶Ä±Ã©Ã€Ä®wÄ«Ã‚Ä²]Qw]D05Ä¹o|(1Ã›",
redConcrete: "0g0g1ÃµÃ­W",
redWool: "0g0gdÃ¼Ã­WÄ€JWÃ¹Ã­WÄ„JWÄÄŠWÄŒÄŠWÄˆJWÄ Ä¹ZÄÄŠHÃµÃ­WÄ”ÄšHÄ”ÄŠHÄ€Ã­W1w)0VwÃ“2*GÃ¯M21JjÃ³jÄ’ÃŽÃˆVÄVM^h/3Ä’MÃ§Ãƒ3QFÄ­2Q2ya919hw1GQO+Ã±ÃƒGÃ„hGVÄ“0^VÄ“V$Ä1Ä¨2OyÄªoJ+5G*GÄ¢VÃ¦VÄmÃƒ30Ã“h?0Ä¬ylhJÄ¢F)Ã’GÃ‚VÄÄÃŽÃ»ÃˆOÄÄ’OÄŽUÃ¤cÃ’gwÄž1Ä’MÃ‰0Ã³",
whiteConcrete: "0g0g3Ä¶Ã‹HÄºÃ‹HÄ¶|H4?541S4k40ggh50g?Ã€0Ã€k1wA0l4g04U0kQ?Ã€4l00U01hÃ0044Ã€l0hÃ1QÃ€kTg4Ã5h",
whiteWool: "0g0gnÅ‚ÃªWÅŠÄ†HÄ¾Ã©ZÅ‚Ã©ZÅ’Ä–YÅžÅ†HÅ‚Ã·WÅ†Ã·WÅšÄ¶WÅšÅ†HÄºÃšYÅ’Ä¦ZÄ¾ÃšYÅ–Ä¶WZZZÅ¢Å–YÅŽÄ†YÄºÃ‹HÄ¾ÃšZÅŽÄ–YÅ–Ä¦ZÄºÃ‹YÅžÅ–Y0QNkÄ®RU*Ä”Ã™Ã‰ÃŠÅŽÄŽ1reoÄ¯OÃ§Äª,=Ã¬_Ä¹Ã¿.%Ã†^Å—XÃ¸)uÅœÃ¯Ä¶Ã™Ä³ÄšÃ½V/Ä¶yÃ¼Ã—JÃ·ÅšU1*RmsÃŽÃ Ä”Ã‚iÃ˜Ã§Ãº7.)8ÃŠÅ‹Ä‰Å–pÄ±Å›*Å–^Ã‘GÄˆÄ¨-}Ä©SÃ‚;2Å¡Ä’dOÃŠÅÄÄµÃ§Ä¹Ã¿<EÃ§Ä©ÄžÃ¹Ã˜pÄ‚Ä·XÄ‘pÃ·Ä¼E%8Ã—ÄÄ¢VxÃ„Ã¿.Ä”^sÅŽÄÃŽÄ”Ä¹Å Ä´Å•Ã Ã¿7Ä•ÄÃ ÄµÃ¦AzÃŽÄ‡TÃ¯Å•Ä€Ã€Å˜ÄÅ–",
yellowConcrete: "0g0g4Å™Ä¨HÅ™Ä™HÅ™Ä¨YÅ•Ä™HlV01zs@S1Ã ÃÃ¡?Ä§Å„4S9551Ã¿OÃ„ÃºKV14ÃVÃN[lÃƒÃ†Å›ÃllÄ§Ä§Ä¬Ä¨RÄ¼Å—h(0oUVUV{Ã{0SÄ¾Qh",
yellowWool: "0g0gjÅÅˆZÅÅ˜ZÅÄ¸YÅÅˆYÅ¢iHZ>WÅ¢yYÅ¢NZÅ™Ä¨HÅ™Ä¸YZÃZÅž2WÅ¢2WZÃƒHZÃƒYÅ¢yHZNZZ>HÅÅ™W0QNk0MÄ·ygPxÃ¼ÄŠÄ…Ã˜qSÄœA$#Ã„Ä®*Å’:}GEÅwKÄ¼XÃ¶2ÅÄ¹5ÃO0RÄ¨890yÃ¼]^0Ä·w122ÄœÃ«ÃŸÃ‚Ã´2hX!ÃµÄEÅ–8UÄ‹ÄÄ™owÄºpÄ™.Ä¹oÄ€1aÄ§J$RaÅ‹UxÃ“1Ã¼ÄŽt^Ã´}Ã¢)ÅÃ–Ã„>gQgcKXÄo2Ã‘y@8Ã€IÄ ]x]Ã¢EÄ°.Ä„ÄÄ„Ã´>eÄ½MÄ’Ã IÄžÃ¹Ä·ÃSnÄ„z]yÅ˜Ã¯Ä–K|hÃ«Ä•",
bookshelf: "0g0gtÄš*WÄ†kZÄÄ»WÃ©Ã®Z$Ã¬W)Ä‰HAÃžWMÃ•ZF,YSÄ¨YÃ¹TWÄ’KYÃ²Å—YMÃ³WÃ¡Ä§HÄ¤ÃHÃ£MWÄžÅ‚HÃ³EYi+YÄµÃ¾ZKÄˆHÃ‹Ä§ZdÄWÄ¦Ã“WVÄˆYPAY;ÅšZÃ–ÃƒW0RxcRgRgIw18RÃ¼Xx^ÃÄˆÃ«1Ã‚Ã½FF^Ä¿Ã¾ÄˆÄˆiÄ„ÅŽÄ‘FXÃ‘ÄŽÄŠÃÄ‹ÅƒÅŽÄ‘ÄŒÃ­Ä¿ÄŽÄŠÃ¡3Å„Ã…Ä¡Ä˜ÄšÅ‡ÅÄ†K2Ä’Ã½.m#wÅ‹uÅˆgMÃ³Ã‚Ä€0MÃµ020XgÃµygRh8K1^ÃmÅ€FcÃ‚Ä€Ã«3Ä»Ã„ÄŠmÃ‚ÃƒÃ™ÄŒÄˆkÃ’Ã£ÄŠmÃƒÄ°b}ÅŠÄ‹Ä¼Ã£Ä‹Ã‰Ã Ä¼b@U3Å„Ã£Ä‡Ã‰!Ä‡b}Å‡aÄ…Ä«uÄ½ÅŠÃ½Ã™Å„06M^Ãƒ06MÃµ00",
netherBricks: "0g0g7oMW;ÃŸHQJYwTH(ÃŽZEÃY-ÃŽZ000000BmÃ‚QÃ¾Ã²Ã¾ÃŽÄŒJKÃ‘Ä‚Ã…BÄšÃ…A0+Ä§0+Ä§Ã’AÃ£Ã‘Ä„}7PAbPAÃ¦P%Ã¦_ÄÃ™03Ã™03Å€ÄÄ‚Å€Ä•Ä†Ã¹Ã–2Ã¹Ã–6Ä™ÅuÃ½Ä°udÄ˜Å‚dÄ˜Å‚Ä²Ã”J_Ã“Ã¾JTÄŒÄƒTAJÄ¸AJTA",
redNetherBricks: "0g0g7$0WÃ•THÃÃY)0WQgH-gHUMW000000BmÃ‚QÃ¾Ã²Ã¾ÃŽÄŒJKÃ‘Ä‚Ã…BÄšÃ…A0+Ä§0+Ä§Ã’AÃ£Ã‘Ä„}7PAbPAÃ¦P%Ã¦_ÄÃ™03Ã™03Å€ÄÄ‚Å€Ä•Ä†Ã¹Ã–2Ã¹Ã–6Ä™ÅuÃ½Ä°udÄ˜Å‚dÄ˜Å‚Ä²Ã”J_Ã“Ã¾JTÄŒÄƒTAJÄ¸AJTA",
netherQuartzOre: "0g0gcÃ€ÃHUÃ­WÃ€ÃŽYÃ‘ÄŠYÃÄªWSÃHÄ•Ä­YÄ¾#YÄžÄ€ZÃ¯4WÅ’Ä…ZÃšÃ‘W12NQOÃƒ)MjMBzQ5Ow>>l@Ã¤wN)Ã¼)^GÃ‘T3zPQÄÃ‘Ã»QAM4@Ã´PÃ”Ã˜O>3QÄœÄ¢Ã¤Ä˜)Ã‘T5CÃ°Äœ>!Ã²N)Ã³KOQÃ¦Ã‘zPÄR))ÄÄšk,Ã´Ã‚@QÄœÃ‚N@Äš5Ã—SRi3>A-Ã¤4-(k)P@Ã­mÃ²SzQÃ»xÃ’))Oy)R)lzQO",
netherrack: "0g0g7Ã€ÃHUÃ­WÃ€ÃŽYÃ‘ÄŠYÃÄªWSÃHÃ¯4W4CÄŒÃ›ÄŸp%Ã½ÃƒIÃ„Ä·Ã·ORÃ’6Ä„Ä¸Ä­ÃµÃŸgÄºÄ‚)ÅÄµ?phÃº+ÃºÄŽÅŠe#sÃ¶7)XUÅŠ2)ÅÃ–Ä­Ã¹Ã›@s}Ã•Å‘ÃžÄ¯2MÄ¯Å‘Ä‚?Ã—Ã–@Ã¯ÃÃ³Ã³e*o][oMÄ°Äˆ]Ä¡Äˆ}{Ä¸VÄ®rPÄ¯Ä„*.r",
netherWartBlock: "0g0g6Ã†0WÃ•gWÃ¤0WÄ¤ÄªWÃ¼ÃŽYÄ”Ã­W5waPÄ«8PEÄ·QÃ«ÃºEJJTwÄŠ5A8h4Ä’lA2EJÃºh#0PwÃ€xAÃ¬P)2QyhFRiS0ÃºPwiTAÃ²Ã²gÃ­5w]ÄŒ4Ãº92aQX?^2Ã¹]ki?2Ã­SAÃ­P4Ã­]FR])X]B2",
quartzBlockBottom: "0g0g3Å–Ä–HÅ–Ä…ZÅ’Ã¶Y05ÃˆÃ«?ÃˆÄ1Ã„Ä’Ã¹5Ä’Ä0Ã„ÄÃˆÃ¾Ä’Ã„Ä’ÃˆÄ‘V0Ä’V01VU1Ã—Ã€0Ã¾Ã¹05006Ä’05Ä’Äˆ0Ã‡Ã’0VÄ05ÄŽÃ€1Ã„S01Ä’",
quartzBlockSide: "0g0g6ÅšÄ¦ZÅ–Ä–HÅ–Ä…ZÅ’Ã¶YÅŠÃ©WÅ†Ã™Y0000005AÄƒÃšJ{9+Å‚Ã•JV%ÄžÄ¹AÄŒÃ½%AÄƒÃ–+Åƒ9+Å‚PÄžÅƒ9yPÃšÄœÃ½4J^PAÃ½4ÄŒÅ‚]J|9+Ã²AJV4JPB+Åƒ4JÃ‚ÃšÄžÄ´4Ã¼Ä‚|y|9CÄ¹AJV%)Ã²AÄŒÃ¼JÅ‚AJ_Ãš",
quartzBlockTop: "0g0g6ÅšÄ¦ZÅ–Ä–HÅ–Ä…ZÅ’Ã¶YÅŠÃ©WÅ†Ã™Y0000005AÄƒÃšJ{9+Å‚Ã•JV%ÄžÄ¹AÄŒÃ½%AÄƒÃ–+Åƒ9+Å‚PÄžÅƒ9yPÃšÄœÃ½4J^PAÃ½4ÄŒÅ‚]J|9+Ã²AJV4JPB+Åƒ4JÃ‚ÃšÄžÄ´4Ã¼Ä‚|y|9CÄ¹AJV%)Ã²AÄŒÃ¼JÅ‚AJ_Ãš",
quartzPillar: "0g0g4ÅŠÃ©WÅ–Ä–HÅšÄ¦ZÅ’Ã¶Yh&Å…tiu&%uÅ•Ä¹Åˆ&ÅˆÅ‰Å•Å•%xÅ…Åˆ%%&ÅˆÅ•ÅˆyÄ¹Å‰Å‰Å‰Å…yÅ•%uÅ•uÅ„Å•Å…hÄ¹ÅˆÅ…Ä¹iÅˆÄ¹Å‰Å‰ÅˆuyÅ•%&%Å”tÅ•tÄ¸",
quartzPillarTop: "0g0g5ÅŠÃ©WÅ†Ã™YÅ’Ã¶YÅ–Ä–HÅšÄ¦Z54Ä‚Ã³6ÃP4Ã¹90ÃºFDsÃ·)JÃŽ.rJ@Ã«1Ä§JP8Ä©Ã³QÅ‹ÃºÄ‘i^*i^FjÃ²ÄkÃ­F2^?kÃ—D4Ã—?i2CÄ¹^QÅ‚ÃºÄ‘kTÄ§JP8Ä§1.AJ@Ã®PDAJ)ÃºF0J90J8Ä™k|yÃ²",
chiseledQuartzBlock: "0g0g6Å†Ã™YÅ–Ä–HÅ–Ä…ZÅ’Ã¶YÅŠÃ©WÅšÄ¦Z4Ja]+]5BrÃ™i]9,A0iÃ€dÄžÄ·4Ã¼Ã¼d9wJ0Åƒ9_PFÄ˜Ä¿i2Ã‘1Ä˜0ÄœJÃŽxA|AÄŒÄ¨Ã€JPi@Ã«Ã¹Ä4kÃ­PB.{4Ã¬wJ0]XÃ»]mJ]Ã²Dw0iÃ€d*%AAÃ¹4Ã»9CCÄ¿",
chiseledQuartzBlockTop: "0g0g5Å†Ã™YÅ–Ä–HÅšÄ¦ZÅŠÃ©WÅ–Ä…Z4ÄŠÄ»MJÄˆhÄ˜4Ã«6Å‡gB1Ã¬EÅ‡gD2Ã¬-zg+TÃ­0biiRÃ·RK002Ã¶Ä˜0(ÄŠÃ‚JiJJPAJPA00pÃµ039kÃˆÃ¶pz8,2Ã¶+wÃ‘@RÃ«ÄšwÃRÃ¬Ã­k8hÄž1Ã¬Ä˜giRÄ»ÃºJÄˆ",
chiseledStoneBricks: "0g0g7Ä†Ã–ZÃ³EYÃ–ÄžYÃ©ÅžZÃ‡Ã’YÃŽÃ°WÃ¥Ä¾Y00]0Ã«RdÄœÅ‚Ã–+Åƒ&Å€AÄžÄ¼Ã¼!090Ã³Ã¡e2Å…ÃšÄ’ÃŠe7JÅ€Å‘ÃŠ!nÄŒÃ¯Ä’)&cÄŒÃ¬Åk!nÄŒÃ±E)aÃ¿IBÄ)eÃ°Ä²LEÃ¡eÃµÄšÄ°!ÃŠdÃ‰Ã‘JÃˆÃ¡A2S0JÅ›:;Ä›Ã§$Ã¼Ã‚PAJPA",
smoothStone: "0g0g7Ã©ÅžZÃ¢Ä¾HÃ·-ZÄ’Ä’YÄŠÃ³WÄšÄ²WÄ†Ã¥Z42Ã‚Byg&,ÃšÄ•ÅqOÃ–sJ+Å€mÄ¿Å‚ÄžÄŸy|Ä°sÃ£Å‚p*ÄžÅ‚Ã›Ã–Äˆ|Å‚Ã’Ä•Ä­Å€ÃƒÃ–ÄŒÄºPÃ•mÄ¢ÅŠÃšÄ­Å‘%ÄžÅŠÄžÄ£Ã•&.+ÃºÄ¯Å‰dÄŸÃšÄÄ£Ã—Ã‚[Ã™ÃŸÃšqlÄ¯Å‚Ä•Ä Ä¿N:Ã˜Ã£Ä¡x5wiSJg",
soulSand: "0g0g6Ã‡jYSÄ©H)ÄŠW]Ä¹ZÃ–QHÃ¥Ã¯W4A3{Ä4Ã«hÃ•BCyÃÄªFcÄŠÅˆMItÃ¶Ã¾Ä©TÄ¯Ä´ÃµÄž]dIUdÄ§pÃ–(KÃ™q3ÃšC3ÃÃˆRc+Ä°KPRÃ¬(qyÄ¬oÃ–IÄ§}No{RÄˆÃ‘wÄºRÄ¬wÃ’Ã°Ä‚Ã«Ä°ÃAÄžÄ€Ä^T$4Ä¬Ã¶-pTÃ¿d",
glowstone: "0g0g8Å¢Ã”HÄµlHÃ¯RYÃšiWZZZZÄ´YÃ²Ä‹YÃžNH5+T%^Ã„ÄˆYÄ¸Ã¤Åb?Å‹Ä‡Å¢Ä˜ÃŒÄ¶gÃƒÅ—Ã£ÅÃ¨Ä²_mÄ‡ÄÃ•Ãˆ2wÄ•KÅ”Ã¹b~Å‹>rÄœÃÃ¤$ÄÄ‰Ã“Ä¦Ã‚Ã±Ä«ÄŒÄ’e+Ã¿Ä˜FÃ¹Ã‚Ã‘DÅšÃœDÃ¯Ä³Ä¦ÄŸÅŸnÅ“5Å‘jÄ©ÃˆÅ—#Ã²_Ä­Ã­Ä‡ÃœyÄ‡ÅƒlÅÃÄžÅ¥",
andesite: "0g0g6Ã©ÅžZÃ¢Ä¾HÄ†Ã¥ZÃ³EZÃ–ÄŽYÄ’Ä‘Y4ÄŽÄ¨Ã²61aÄ˜Ä¹Ä•Ä©2BÄœÃµwAÄ§]Ä©ÅV+peÄŒ0ÃšÄ˜^ÃšÃ°j6RÄºc!Ã¬Ã³ÄŽÅ‚TÄ›d|Ã°ÅÃ™Ã¼ÃƒÃ–Ã«Ä“Ã’+Ã«4Ä»Å‚Ã™({*CÄ§Ã¯Äš!S+rÃ–)Ä€Ã™gÅ€Ä‘ÄžÅ‚VÄšSÃšÄ©iÃŽÃ«Å‘$m3c)Ä€",
diorite: "0g0g6Ã³EYÄŽÃ³WÄ¦Å£WÅ’Ä–YÄ¶;ZÃ¥ÅŽY4Ã¼Ä°PÄ€Äƒ)yRÃ—,gÃŽ+E?Ä Ã³Ã’ÄœbÃ•X_{oÃ®|iÅ€Ã¶+Å‡]ÄŒÄ±Ã–oÅ€hÄ FM2Ã³Ã¶ÄžTQÄ»Ã‰ÃºpbÄ‰ÄšjKÄÅ‡NxRÃ²+lÃšÃ³AA(Ãƒ&njÃÃ¼^wÄÃ¬ÃžÄ«Ä¸X6Ä¯Ã¶ÄŠcÃ’+Å‡NgÃ‰",
granite: "0g0gaÄžÃ–WÄ…ÄYÃºÃ¯WÃ©UH{Ä¹ZÄžDHÄ‘Ä½HÃ‹3HÄ±Ã†WÅŠaZ1xMihTÃmiÃ£oMjMjNnhiCMÃ»nlnihÃ…mÃNhNjzGwÃŽyjh+ÃjÃžygMMmÃhjÃ“ÃOjh1A,Ã“MylxjÃ“ÃNhMÃ“CM+ÃljmÃ“2ÃžMEh,+Ã“nÃŽj>h+RRNMhMzhFiÃ“MDNÃ“xhoÃ“zÃ£iÃ“gMÃ“h2yMMh+",
polishedAndesite: "0g0g9ÄŽÄZÄžÄ±ZÃ³.ZÃ°EHÃ©ÅŸWÃžÄ¾WÃ–ÄŸWÃ‡Ã¢YÃ³PW11hhh1gijQ>OÃƒ)Ã‘,jOO)SIO[3Ã•8Q)OÃ®,jO*NÃ®QQ,k>)Q*OQ@jOX-Iy)Ã…k>QQÃ„UO+jEÃƒO-Ã«8Ã±j>)>)>N,j-Ã«XQIO,mOOOIOIÃ…jIÃ­)QÃ‘(Ã±jOQQOÃ­Q,kQ]Ã®O)>,Ã°GGGGÃ“GG",
polishedDiorite: "0g0g8ÅŽÃ·HÅ‚ÃšYÄ¢Å“WÄ²$YÄ’Ä¢YÃ¥ÅŸWÃŽÃ¾WÃ³-Y0i00J25+_5@VAkÃ²KEÄ†$Ä¡z%)Ã½xÄ¯Ä€!)Ä¬5ÄŒÄ¯iC}cÃ¹TÃ›yÄ†92Äª$ÄmMÄšÃ‰Q-Ä…$Ã¾Ã»%ÄŒdB]Ã´Ã•Äš}cIÅ‚1Ã¼Ä…dÃ­Ä»djm9Ã¾Ä€!(Ã¾tCÄ°Ã–Ã¾Ä…ÅžÃ‰Ã£Ä½Å”Ã›",
polishedGranite: "0g0g9Ä±Ã†WÄžÃ–WÄžDHÄ‘Ä½HÄ…ÄYÃºÃ¯WÃ©UHÃ‹3H{Ä¹Z00gwy2zz4VQU)QV?kk>)QÃ‘R[4QÃ‘VUOV@4QQ>VQQÃ„CUVQQÃU@5>)Ã‚QQQÃ…4QQ@U>)@B@Ã’QOQVBAQ?U?UQ@lQQQQAV@4TVQÃ‘Q@Ã…4OQQ>)V[BU?ÃQU>+AQUQVQT[Ã”GIGÃ¤GGI",
portal: "0g0guS7YU8YQ7Z-6Z-6Y(6W)6H(4Z(5Y;7H(5H(4H(4Y)4W)6YS7H(5Z{8H-7WÃ€8Y(5W]8WÃ†8Z(4WÃŠ9W;7WKpHÃ€8H)3ZKpW0QNkÄªxÄ·4Ä‘Ã™g0B)Ä–Ã¨wÃ½taT0Ã¢Ã¾Na[.tÄŽÃ‡ÄÄšÃ°ÄœRo:eÅ’ÄmÃ†IÅ’Ã‡Ã†ÄšQÃ˜PÃŠgÃÄÃ«Å‹Ä›Ä£pÄ‘Ä‡ÃƒÄPkÄŽ*Ä™yNÄ³Ã’ygÄ·jÃµÄšÃ¯twÃ’Ã€Å›FÄ‹Ã†NÃ¸Ã²Ãƒq$Å“ÃŽI4Ã¼Ã»*gtÄ¸Ä!sgÃ‚Ã°NmIÄµ8M$zÄœÄ¹|ÄˆÄ¬6&Ã¢ÄŠÄÄ‚Ä§Ã¡Å—Ã°ÄŠÄ‘Ä´Ã•GÃ—ÄŽÃžÄ•q$Ä˜Ã­-Ã›Ã¬5?TJlFp_kÄ¸I",
obsidian: "0g0g540Y00WgMZ-Ã½HAÃ Z4Jg&1s4yÃ¬Ã•8Ä·BÄ QÃ²l8&B28Ã¹Ã¬MAPAÃ«8PiÃ«1Ä§9]EÅƒ6g]5)Ã³AJÅˆBÄ«Ã¼Ã«Ä€JIÃ¼ASÄˆÃ«Sg20Ã¼cE4RdÄ«JdÄŠJÃ¶4Ä·Ãº0a]0K(4w9g]SÄŠkQ00",
redstoneDust: "0g0g4Ã¹0=00=Ä²$Ä¦I0=1UlS5UlÃ€lÃ€1UÃ„Äˆ2ÄÃ„Äˆ2ÄÃ„00ÄU00B1Ã?01h40ÃÃ?5U1)BÃ„00BÃ„Ã«0ÄmÃ«!ÄŒ5Ã€lÃ€1UlS",
redstoneDustOn: "0g0g500=ÅŸ0=Ä²$Ä¦Ä¿0=Ä 0=001w00001w00009AÃ«00AÃ´Ã‘ÄŒÃ«0AÃ²AÄŒÃ«0yPXÄŒÃ«0iÅ‚ÃµJÃ«AÃ»zÃºJPAÃ¾ÅˆÃ¹Ä©P0Ã¾Ã‘Ã°iS0mÄ²Ã’JÃ«0yÃ‡XJÃ«0APAÃ¼Ã«0APFAÃ«009w00001w00",
bufferMiddle:"0g0g5Å¢Å–Ä¦8wÄ¦ÃwÄ¦IwÄ¦Ä˜wÄ¦001w00001w00001w00001w00001w00001w000JPAJS0kÄ„Ã¶i00iÃ»Ã•Ã¹002Ã‚Ã•Ã«000ÃƒQÃ«000_Ã‘00009A00001w00001w00001w00",
bufferTop:"0g0g8Å¢Å–Ä¦8wÄ¦Ã«wÄ¦Ã¹wÄ¦ÄˆwÄ¦Ä¿wÄ¦Ä˜wÄ¦Ä§wÄ¦001w00001w00001w00009A0000^QÃ«002Ã‚Ã•Ã¹00iÃ¼ÃšiSAÃ½BÃºÄŒP0Ã¼ÄÄ™AP0iÄÃ²iS02ÄŒ]Ã¹002Ã‚QÃ«000^A00009w00001w00001w00",
soup:"0g0gaÅ—wÄ¦Ä°[=Ä°{Ä¦Å’ÄŽÄ¦Å¢Å–Ä¦ÅšÄ§Ä¦Ã˜ÄŽÄ¦Ä±Ä=ÃƒBÄ¦Å¢Ä§Ä¦0000gw003(00000000000w2000020000300S00w00(00000033050000060000wÃ300000w006800Ã€000000000000Ã€5200036Ã€Ã¹Ã‚00030804000000000w000000000",
soup2:"0g0gyÅŸ0=ÃƒyÄ¤ÃÃ³;Ä°{Ä¦Ä›!Ä¤Ãƒ!;KÄ´Ä¤wÄ‹;Ã­Ã°Ä¤Ãz;Ä™Ã³Ä¤Ã%Ä¤Ã!Ä¤Ä±Ä=y3;Ã|;Ä±|;Ä°[=!QÄ¤Ä‘Ã­Ä¤Ä“yÄ¤Ã@;ÃžÃ¶;Ä™Ã®Ä¤Å‘8Ä¤ÅŸ52ÃŸ|;Äš@;Å¢Ä¬Ä¤EAÄ¤ÅŸweÄ¢Ã«Ä¤Å¡Å–Ä¦ÃŸ1Ä¤00RcSÃ®kKÃ¯sÃ¬Äª0wÃ«ARPAÃŽÄ©wÃ¬ÄªEÄ™@(Ä§4AÃRw3[gÃŽÃ·(>4;2RS(7AÃ_$wQQÃ‘9TAJgÃbAÃ»4p(Ã¼PÃƒ[AÃºb$Ä˜Ã°oÄ˜Ã»|Ãƒ[gÄ©PoÄÃ´oKÃ«|Ãƒ[oÃŽÃ°ÃŠÄ¬XAÃ’cÃŽ+7Ã†ÄŠÃ°ÃŠÃQkÄ©{ÃÃƒ>EÄˆÃ¿(ÃÄ²(Ã{0+[$ÄžÃ­oK_oT2g0oVÃ„Ä²-ÃŽÃ°gT4kMÅƒVÄ½XhÃJPÃ…Ã­0+oUTÃ¹kÃ¯v<wÄˆ1Ã¬ÅƒX(IlÄ¼7ÃDÃ‹ÃŽÃ¬Åƒ",
soup3:"0g0gsÄ·>Ã³000Ã†}Ä˜FAcÃ†}Ã³FÄ§;Ä¢w)Ä¢B)ÃˆÅ•Ä˜Fw;Ã€Ä´Ã¾Ä¢!ÄœFA(E>Ã³Ã†}Ã·ÃƒÃ›Ã¾ÄšB6Ä KEÄ¢%Ã°FÃ®Ã³Ä¢$)ÃƒÃšÃ¾FÄŒAÄ¢wEE36Ä¸Ä§;Ä¢B6Å‡Å•Ã°0QMXQg^zox8QxÄ„x!ixF^o@hÃ²KTÃ¹Ä­Ä˜!hÄ½hÃ¬Ä¯Ã XC0Ã¬0XxÃ¹!Ã§Å‡Ã­Ã­!]Ä«ÅcPÃÃ­ÄšÄ³j^Ã„zÃµ?ÄŒÅŠ,Ä”1Ã¦Ã‚ÃŸ8Ã ÄÄ¿Ä˜Ä”x_Ãµ*8Ã’Ã’RpÄ‚Ä½ÃˆSA8{ÃŸÅ†Ã‘J62ÃˆÅ€Ã¬>tÄ”*4+Ã¤uÃ²ÄšÄŸpÃ“Ã‡Äœ%Ä§ÃŸÄ­*npÃŒÃ¼Ä€ÃÄ©Ã†ÄÄ½%oÅÃ­Ä‰br6Ä­Ã’Ã£p@ÄƒTqagÃ¯(Ã£ÄƒÃŒÃ˜Å“w",
soup4:"0g0gaÃŸÃ«;ÃŸÄ§;Ä°L;ML;00;Å‚Ã«;I0;Å—0;Ä±Ã“;Å™Äˆ;000000000g0yh0hg0gwhw00(0g0000(004T21gO005Ã06hj30VÃ063h00VÃ€0Ã£Ã300VÃ€gGÃ000VVgGÃ100lVÃ€10h0801g9Ã¹g00000ÄÄg0hÃ¬Ã«0ÄÄ0g80h09Ã¹0h0Ã«100000",
randomSoup:function(n) {
let r = 0, g = 0, b = 0
for (let x = 0; x < 16; x++) {
for (let y = 0; y < 16; y++) {
r = Math.random()*255
g = Math.random()*255
b = Math.random()*255
setPixel(n, x, y, r, g, b)
}
}
},
redStain:"0g0ggÅŸ0;ÅŸ0)ÅŸ0$ÅŸ0CÅŸ0uÅŸ0mÅŸ0cÅŸ08ÅŸ02ÅŸ0aÅŸ0kÅŸ0qÅŸ0wÅŸ0AÅŸ0EÅŸ0g1z?Ã”Ã²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰1z?ÅžÃ²Ä“Ä´Å‰",
invis:"0g0g20003Å–Ã«0000(0=0>Ã«Ã«Ã«Ã¬Ä¤Ä‡;YÅ†Å¤KÅŸÃ«ÅžÅ‡ZÃ«Å¥Ã¿Ä¶Åˆ60",
"poision potion":"0g0g4000Ä‰Ä§;00;Å—f;0000000001S009K008w00bÅ‡00bÅ‡00L-00YÄµ00YÄµ00YÅ¥00LÅŸ00aÄˆ0000000000000",
darkLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 0;
g = Math.floor(Math.random() * 10 + 100);
b = Math.floor(Math.random() * 10);
if (Math.random() < 0.35) {
a = 0;
} else {
a = 255;
}
setPixel(n, x, y, r, g, b, a);
}
}
},
redBerryLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 0;
g = Math.floor(Math.random() * 30 + 100);
b = Math.floor(Math.random() * 30);
if (Math.random() < 0.35) {
a = 0;
} else {
a = 255;
}
if (Math.random() < 0.10) {
r = 255;
g = 50;
b = 0;
} else {
r = 0;
}
setPixel(n, x, y, r, g, b, a);
}
}
},
blueBerryLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 0;
g = Math.floor(Math.random() * 30 + 100);
b = Math.floor(Math.random() * 30);
if (Math.random() < 0.35) {
a = 0;
} else {
a = 255;
}
if (Math.random() < 0.10) {
r = 0;
g = 0;
b = 255;
} else {
b = Math.floor(Math.random() * 30);
}
setPixel(n, x, y, r, g, b, a);
}
}
},
autumnLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 250;
g = Math.floor(Math.random() * 80 + 100);
b = Math.floor(Math.random() * 30);
if (Math.random() < 0.30) {
a = 0;
} else {
a = 255;
}
setPixel(n, x, y, r, g, b, a);
}
}
},
pinkLeaves: function(n) {
var r = 0, g = 0, b = 0, a = 0;
for (var x = 0; x < 16; x++) {
for (var y = 0; y < 16; y++) {
r = 255;
g = 205;
b = 226;
if (Math.random() < 0.30) {
a = 0;
} else {
a = 255;
}
if (Math.random() < 0.30) {
r = 255;
g = 185;
b = 196;
} else {
r = 255;
g = 225;
b = 236;
}
setPixel(n, x, y, r, g, b, a);
}
}
},
flowerOftheValley: "0g0g8000H5YÃÄ©ZZZZÅ’Ä–YÃ‚RYÅ‚ÃšY+0Y0000000000000000000000000iÃ«0001Ä§E0001Åˆ?0000750Ã€02Ã”Ã¸2Äˆ02K5Åˆw0007Å›Äˆ0007ÅŒÃ0007Ä’Ã«0007Ã…Ã«0007Å£00007000",
poppy: "0g0gd000Ä gYK0HÃµ0WÄ·gY-0WQ0WÃ¹0HÅ›gZhÄ§WhÃ«WmgWhÄ˜W00000000000000000000000000000000000000000000h000000iMS00004?Ã”Ã00008XG000000PÄˆ0000000Ä˜0000000Ä˜0000000Ä˜000009Ä˜Ä˜Ä£00000Ã¹Ä°0000009Ä‘000",
dandelion: "0g0g7000Ä¶Ã€WÅšÅ‡WÄžÅ—WJSWewW5Ã«W00000000000000000000000000000000000000000000000000Ã€|00009Ã€0000Ã»Ã¹Ã«0005Äˆ00005Ä¾0001Ä•Ä¿0000*Ä§00005Ä§00",
blueOrchid: "0g0gj000q|HtÄ·ZOWY!ZZ!YY=(Hu|Hq|W=wY=(Y!YZpÄ·YmgWCYYtÄ·YmwWiwWqgW0000000000000000000w000000008K002k5w03sÄˆ000Äˆ5E0JÃ«0000FR0ihÄ”000iÄ˜0gq2Ã«000[003Ä¯Ã€000000042Ã«00000002Ã«000000004Q000000000A000000000i000000000q000000000X0000000000000",
pinkTulip: "0g0gc000ÅšÃWÅ‘Å¥YÅ…Ä•Z@NWÃ„JZMÄ·ZÃ„Ã­ZRhZ*Å—Z}ÃWÃ‚RZ0000000000000000000gg000000xw000000N(0000003000004Ã€6400000Ã¤55S0000Ã±55Ã¹0000Ä‚bÄƒÃ¹0000Ã¼Ã¼Ã‡00000bUÄ¡000009Ã¯Ã¹000000ÄƒÃ¹0000009000000000000",
orangeTulip: "0g0gg000ÅŒÄ§ZÅˆÅˆZÄ¼Ä‰WÅ„Ä¸YÄ´ÃYÅˆÄ¨ZÄ¸KZÃ„ÄŠZ%Ä·Y@NW}RY+0YÃ‚Ã­Y}ÃWRxY0000000000000000000gw000000)(000000Ã„Ã€0000007000000Ã«9a00000ÄbbÄˆ0000Ä´c8Ä§0000ÄµÄ”Ä²Ä§0000Ä¶Ä±Ã³Ä§0000bÅ¡Ä¤000008ÅŸÄ§000008Å¢Ä§000000c000000000000",
redTulip: "0g0gd000Ä»ÄˆWÄ»Ä·ZÄ«ÄˆWÄ·Ä§YÄ§Ã¹WÃ‚ÃZÃˆÃ®HÃÄºH=MHÃŒÄ›HÃˆÄŠZ^Ã‚H0000000000000000000gw000000)(000000Ã‚Ã€000000300000067800000Ã”98K0000Ä€Ã¿aÃ¹0000Ä€Ã¿ÄƒÃ¹00006Ã°Ä„000009Ã£Ä®000000Ä€Ä¯000000Ã¿Ä¯0000009000000000000",
whiteTulip: "0g0gd000ÅšÄ¶WÅ’Ä–YÅ†Ã©ZÄº|WRxYFÄ§HÃ‚Ã­H^NH}ÃŸH%Å‡H/1H^ÃY0000000000000000000gg000000xw000000N(000000400000056070000Ã…80Ã½0000Äa9Ä¢0000ÄÄcÄˆ0000ÄÃ¢Ä“Äˆ0000aÃ¯Ä 000000ÄÄŸ000000ÄÄ˜000000a000000000000",
azureBluet: "0g0g7000Å‚ÃªHÅšÄ°ZÅŽÄ—WÃ„Ã‚Z@iH<Ä¸Y00000000000000000000000000000000000000100000Ä‚w0000Ã’d000CbÃÃ«00-MU000dEÃ¬Äˆ000Ä¼Ã­g000Ä³Ã¹00004Äˆ00004000",
cornFlower: "0g0gb000ÃŸWW?Ä–YÃeYF;HSÄ¡Y%ÄŠHÃ¶Ä¤WÃ„)ZÃˆÃ¢W<ÅŠH000000000000000000000000000000000011z00000xiNw00003QÃ‚S000006Ã0000008Ã«0000000K00000Ã«0Ã«0000080Ã¹00000aÃ«Ã¹000000ÄÃ¹0000006Ã¹0000000K000",
purpleFlower: "0g0g8000Ä„fZ{nYÄ½~ZÄLY6wW1Ã«WÃ‡3W000000000000000000000000000000001w0000aÃžÃ«000Å‚E0000cPÃ«000tÄ§0000700000<000006Äˆ00000Ä¤00007Ä§00000Ä§00",
oxeyeDaisy: "0g0gb000ÅžÅ†HÅ†Ã©ZÅ–Ä¦ZÅ’Ä‚ZÄºxYÃ‚RZÃ„JZMÄ·Z@NW*Å—Z000000000000000000010000001xx000003?R00000hVÃg00002?>000001xx0000001K0000007Ã«00000060000008Ã–0000000Ã²80000007Ã«0000006Ã«000000a0000",
allium: "0g0gg000Ä¥Å†YÄ¡Ä‡YÄ±WYÄ¥YYÅ…Å–YÄÃœYÄ­vYÄ½Ä—YÅŠfYÃ“ÄœHÃ´CWÃ›Ä»ZH5YÃ—ÄªZÃŒÃ»Z0000000000000000000ig000003AÃ‚00000llCÃ0000Ã“Ã¯DK00009iÃ000000Ã—l000000b0000000c0000000a0000000c0000000d0000000b0000000e0000000f0000",
lilacTop: "0g0gj000Ä½dHÅ…ÃWÄÄ“WÄ…Ã²ZÄ¡Ä“HÄ…Ã³WÃ‚ÃYÃ„ÄšYÄ‰Ã³W@RW^NWdÅ—WÄ¹dW^RW9Å—WÅ‰ÃWÃ‚ÄšHÃ‚ÄšY0000000000000000000002w0000(Ã«006hÃ«004hÃ«000xÃ¹00Ä©(00002k01Ã°000000t0^Ã«0000001Ã™Ã€00000000Å0cM)03Qg083Ä‡1Ã«002O07Ki00000Ã”ÄŒ1Ã€06X0004Ä’(o0hc000003wiÅš00006Ã«0(oÃ¹0000Ä¸00ÃºÄ§000",
lilacBottom: "0g0gl000ÄÄ“WÄ½dHdÅ—WÃ‚ÃYÄ¡Ä“H9Å—WÄ‰Ã³WÃ„ÄšY^NWÄ…Ã³WÅ…ÃWÃ‚ÄšY^RWÅ‰ÃH@RWÄ…Ã²ZÄ¹dWÅ‰ÃW@NWhÅ—W00h43w0h8000Ãƒs8]kBÃ«0003Ã¶Xr{Äˆ000000}Ã¤e0000000(E00000000gÃ€0h&w001]0Ã¤6ÄˆI0002Ä€ÄˆSÄ¶0000XgtÅšw0000kÃ„Ä‰Ã«8Ä€000002jÃ¶E00000008s402EÃ«000004Ã¥Å‡lÄ«00000doÄµ00000000Äˆ000000000Äˆ0000",
peonyTop: "0g0gq000ÅÄ¶WÅ–vZÅ‰Ã¸HÅ’vZtÃŽZÅ‰ÃHÅžÄ‡ZÅ‰~Wp1ZxÃ¬Zl1ZÅÄ¶HxÃWcÄ¨HÅ‰ÃWÅ…~WgÄ¸YpiWtÃ¬Zp2WxÃ­WgÄ¨YgÄ¨HÅ–LZÅ‘Ä¶H0000000000000000000000000000000000000000000000200000x800Qg0002(Ã¹SFXÃžI004hÄ…9Ã‚Ä³wX002x(Ä°ÃƒÃŠÅžÃ«0013.!Ã™Ã‘9Äœ0002Äž%ÄŒÃ‰Ãˆ003VÃ‰^ÅÃ´Ãg000EÅ€Ä£cÃ¡Ã–Ã‡Ã¼0006(ÃÄ±UÃ(0000I[*ÅŒÃž800006fÃ¡Ä‹w00",
peonyBottom: "0g0gv000tÃŽZxÃ­WgÄ¸YxÃWp2WgÄ¸HÅ‰ÃWÅ–vZl1ZxÃ¬ZpiWÅÄ¶HÅ‘Ä¶Yp1ZgÄ¨HÅ‘Ä¶HÅÄ¶WÅ‰ÃHtÃŽYÅ‰Ã¸HÅžÄ‡ZtÃ¬ZxÃŽZcÄ¨HÅ‰~WxJWtÃ¬YÅ¢Ä‡ZÅ–LZÅ…~W000IÃ‘EÄ³Ã00084AÃ’Ã‚Ä³Ã0004m*ÄªzÄ§00002Ã€X>{hg000BMÃ¼Ã¸Ã­Fg000fDcÃ›Ã½Ã€Ã´g00ÄªÃ˜Ä”Ã‘Ä«ÄšÄ®0006<dÃÃ‰ÄªK0000ÄŸÄ¤Ã®Ã†Ä«p0015ÄœÃ 5wÄ±wÃ«00sÄ±yTrÄ”MÄ”000IÄ²Ã’Ä®gÅ‡00000;Ã¸Å”;000000$Ã‘{o0000000Ã˜rÃ«0000000Ão0000",
roseBushTop: "0g0go000Ä¤ÃŸWÄ§Ã­HÄ§ÃŸHÅ“ÄšYÄ€ÃŽWÃ¡ÃWÅ¤3ZpiWBÄ©H@RWp2WxÃŽZÃÃWÄ„ÃŽWÄ§ÃŸW^RWÅ“ÄŠYxÄ©HÄ¤ÃŸHMxZBÄšHxÃW$Å˜Y000000000000001g00000000Ã‘F00000000Ä®wS00004g16(0h001aSÃ¬w0cRÃ¹00]Ã1_K0ÃŸ400qÅ‡1ÅŠ0mÅÃ«000Ã¹4Ã¯oiÄ˜000p00Å˜Ã¹1000004Ä˜6Ã†0Ã½Ã«0000$0Ã®04Ä”00001Ã™]00%w09(Ã«bÃ†04Ã«01aÃ‚qÃ¹0#0000C>Ã­Ä·Ä i000",
roseBushBottom: "0g0gx000Ã¡ÃWpiWBÄ©HxÃŽZp2WtÃŽZMxYliWÄ§ÃŸHÄ¤ÃŸHÅ“ÄšY^RWÄ€ÃŽWÃ¡KWÅ¤3Z@RWÃÃWÄ¤ÃŸWÃ„ÄšYÄ§ÃŸWÅ“ÄŠHÅ“ÄŠYÃ‚ÄšYBÄšHÅ“ÄšHÄ„ÃŽWÃKWl2WÄ§Ã­HxÃWxÃZ@NW001803g1@0000000Ã€3sN9EÄ˜0000k(5(Ã‚_)ÄŠÄ§035c15cÃƒÃ¸$Ä›S00ck35cUeQÄ·01wggUÄªlO5000EÄšÄ´{UkÃ1>TQÃ«)Ä¼Ã„Ã‹Ã­Ã‡<ÄŠgÃ€Å™Ä´AÄ›Å‚TÃ _]ÄžÃ¿Ã€ÄœÃˆQÃ½]ÃŽOÃ¶%ÄŒcÃžÄS0g0kÄ«e4x3lÅ‡0004lXÄ³cÃƒ3k00000kOvkÄ§Ä¬c0000ccÃ€Ä³kT>N00000(MQkÄ¨QK00003KM{kÄ¨>c(0",
witherRose: "0g0ga000{ÅŠW00Ww0W8Ä§Wh0W4ÄˆW4Ä·W4Ä˜W8Ä·W00000000000000000000000000000000000000000001i000000ii(00000yNw000002y0000000w0000000?K00000Ã’@V00005Ã„Ã5000050S0000000Ã«0000007Ã²000",
TallGrass: function(n){
var pix = getPixels("0g0g7000ÄŠÃ³WÄ¢Å‚YÃ­8WÃ¢Ä¾HJPWÃšÄžZ00000000000002110S00R1200gÃ­cX042Ã¬4wg18TÃ•gÃ«10Ã•Ä(Ã«1T{Ã¢SSwÄ·XwÄ«wyÃ¹K&Ã­x$jKÄ”Ã³?Ä‰Å€Ã’ÃµÄ¾Ã˜ÄÄ¡Ã‹ÃÄ­ÅesÅˆÃ¦Ä©Å‚Ä—sÅ˜Ã¥ÅŠÄ„")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
warpedDoorTop: "0g0gcyÅ€ZCÄ‚Z/8WtVWFÄ­HCÃ–H/-Z%Ã¢WÃ‹Ã“Y]ÅœWt4WgÅŠH0gg11102iyNy4>Ã‚Ag4)TQ>?gÃ”ÃžVnRzÃ ,Ã­[Ã…[R>yzJAk>y>Ã“ÃÃwNzÃ“>Ã“Ã‘w4+Ã”Ã“zÃwÃ‘[+Ã‘ÃzÃž7nQ+Ã‘y>nÃ¡4y+ÃS3Ã¡?2yNAlSQU2Ã“+K[Ã 1>ÃÃ“+KGO,Ã ÃŸÃ“NxÃ¡ÄˆÃ“Ä‹Ã­ÃN?QÄžAÄŸ",
warpedDoorBottom: "0g0gb]ÅœW/8WyÅ€ZCÄ‚ZtVWFÄ­HCÃ–H%Ã¢WgÅŠH/-ZÃ‹Ã“Y1z?Ã”V]IÃ¡JVÃ“GhU?kBV[nÄUÃ‡Ã¼BhTnÄUÃ‡Ã¿xÄ?Ã…ÄUÃnMÄTnhUylMlPÃ¿hÃŸVMÃ½OPÃ¿VAÃ¡[NlBnÃ…)VllGBVGÃ‘ÃlÄVRBÃ£QÃŸ,5VQ>Ã‘Ã¡BÃ Ãºh[Ã¡Ã¢U,V.hTllÃÃ¢k.ÄTlmUÃkU??Q?Ã¡Ã¡Q",
spruceDoorTop: "0g0gcÄÄ«WÃ¬Ã HÃ‡iHUÅˆZÃ¥ÃHÃ–>W{Ä¨HÃ’NY)ÄºH;ÅšZÃ–ÄŽYÃšÄžZ120w20w2hjTM>TAÃ„1RhMÃ‚TAÃ„1Rl,Ã‚UB@Ã²ÄŠÄ‚FÄŠÄ‚FÄŽÄŸÃ‚Ã¢,Ã‚Ã¢,Ã„5jÃxjÃAÃ£5jUBjÃMÃ£5jQDÃƒ?MÃ„4>?DÃ‚[)Ã„kÃƒQBÃ n)@1ÃŸk*Ã lB@1Ã‚lxÃŸkDm1RlMÃ‚kD@TiÃ…Mih,Ã„Ã²Ä‹Ä‚.ÄŠÄ‚.ÄŽ",
spruceDoorBottom: "0g0ghÃšÄžZÃ’NYÃ–>WÃ‡iHÄŠÃ³WÃ·-Z{Ä¨HÃ¬Ã HUÅˆZÄÄ«WÃ¥ÃHÄ†Ã¥ZÃ¥ÅŽYÃ°oH)ÄºH;ÅšZÃ–ÄŽY0Q(IÃŽgÄ©RX@-Ã·Ã®Ã²1/8kkÅ]Ã¼*91-Ä½Ã¡(Å]Ã·MF2-Ä©Ä½4Å]Ã·OÄÃ—Ã€Ä«ks@]Ã·OÄ‘7gÄ»As@/XÃ¯sÃ”ikÃžI@/XÃ¬sÃ”aeÄŒ8CPÄ«Ã«Ä„Ã—a4kECÃÄ«Ã«IÃ8Ä©kECÃ Å‡Ã±Ä§ÃœÃ­v4=60Q(Ã²1i2xX@^Ã·OÄ„ÃŽgÄ»ÃžÄ„Å^Ã·OÄ…1-Ä»ÃžÄ…@/Ã¼OÄ…2-Ä»ÄŒs@(RÃ«Ã¯18Ä©k4C",
oakDoorTop: "0g0gbÄ¢VZÄŽ4ZÃ½Ä»WÃ’RZÃ€Å™H000Ã­FHÄž*WÃ©Ã®HÃšÄžZÃ–ÄŸY1g0100g2iyyyyyyz2>ON>ONz2*VÃ*VÃAÃ*VÃ…*VÃ…EJ*VÃ*VÃziÃ¬GhÃ¬Ghz2>ON>ONA2*VÃ*VÃEi*VÃ…*VÃ…z2*VÃ*VÃz2Ã¬GhÃ¬GhA2hiIhiIE2>ON>ONziNyxNCÃ—zÃ•-IÃ¬-Ã³]X",
oakDoorBottom: "0g0g9Ã–ÄŸYÃ½Ä»WÃ’RZÃ©Ã®HÄž*WÃ€Å™HÄŽ4ZÄ¢VZÃ­FH1xj)xlUjÃŽ+Q@+Q@iÃŽÃ“hOhjMiÃžÃ‚yxÃ‚yClÃžxhmxhmjÃžxh)xh)iÃžxj)xj)iÃž+Q@+Q@*ÃŽÃ“ÃŽOmÃŽOOÃžÃ‚yxNyCiÃ¬xhmxhmi1xh)xh)lÃŽxj)xj)jÃŽ+Q@+Q@NÃ MÃ“jMÃ“jNBVVVVVVV",
jungleDoorTop: "0g0geÄ©@YÄ¹Ã¿YÃ–iZÃ½ÄŒHÄ•ÅœYÄ¢mWÄ‰Ä«YÃ¥ÃƒH000)ÄºHÃšÄžZÃ–ÄŽYPAY(ÄªW0hh0hhg23?ÃƒVV*UÃmVÃ”,Ã Ã£V[lU,Ã¤Ã­z?Ã…Ã½ÃƒÃ¤-Ã®Ã±*Ã…Ä,IoÃ¬IÃ¢Ã…kÃ…IoÃ¬IÃ¢Ã…j[IÃ†Ã«IÃ¡N7G1Ã€l1ÃŸyg0Ã“GGÃ“036V>II)UR6V,Ã†Ã«)Ã„Ã‚4VÃ”S5)UÃ…lÃ’Ã”QQ)V[lÃ¢[)?Ã§Ä´[Ã½*>VVÃ©)R",
jungleDoorBottom: "0g0gaÃšÄžZÄ¢mWÄ•ÅœYÃ½ÄŒHÃ–iZÄ¹Ã¿YÄ‰Ä«YÄ©@YÃ¥ÃƒH)ÄºH1hzhh>h)Ã‚izhh>hÃ‘ÃŸyÃyy@hAÃŸyEOOÃ­hEÃ£xEGGMhoÃ hAxCNCoÃ hÃ‘xmÃ­zEÃƒhÃ‘hiÃ°CEÃƒh)miÃ®hAÃ»x-zi>hÃ‘6Ã“ÃEh@Ã“Ã‘Ã†QÃ®Ã“iOXXÃ h-MiNh-ÃžÃŽAMm@moÃ„+Ã‘Ã“ÃÃ°ÃÃ•Ã†IQ]IXQI",
ironDoorTop: "0g0gcÅ‚ÃšYÄº|WÄ¶$YÄŠÃ³WÄšÄ²W000|)ZÅŽÄ†HÃ­8WÄ¦Å¢ZT4WÄŽÄ‚H1g0100g2iyyyyyyz2)QR)QRz2?VÃ?VÃzÃ?VÃ…?VÃ…zÃ­?VÃ?VÃziÃºGhÃºGhz2)QR)QRz2?VÃ?VÃzi?VÃ…?VÃ…z2?VÃ?VÃz2ÃºGhÃºGhz2hiÄhiÄz2)QR)QRziRyxR!IzÃ–PÄÃºPÄ‚.Äƒ",
ironDoorBottom: "0g0ga$ÄšZÄ¶$YÄšÄ²WÄ¦Å¢ZÅŽÄ†HÄŠÃ³WÄº|WÅ‚ÃšYÄŽÄ‚HT4W1xj)xiAlÃŽ+Q@+Q@lÃŽÃ“hOhjMlÃžÃ‚yxÃ‚yClÃžxhmxhmlÃžxh)xh)lÃžxj)xj)lÃž+Q@+Q@*ÃŽÃ“ÃŽOmÃŽO-ÃžÃ‚yxNyClÃºxhmxhmo1xh)xh)lÃŽxj)xj)lÃŽ+Q@+Q@-Ã MÃ“jMÃ“jÃ†BIIIIIII",
darkOakDoorTop: "0g0gfÃ‡2Z)Ã¬WÃ€Ä¸Y]Ä¨H;Ä‰WSÄ‰WEKZÃŽ2H)ÄºHÃšÄžZÃžyH(Ã«ZZÃ¹WÄµÃ€WÄÄ·W000000012zOyyyO)2Ã„Ã“ÃBÃ“Ã“)3Ã‘QÃ CQ[)Ã®Ã‘UÃ C?[)JÃ‘VÃ C?Ã…A2Ã’VÃ CVÃ…)2Ã’*Ä‹+ÃƒÃˆA2ÃOÄ+O/A2ÃOÄ+O/)3ÃNÄŠ+O!)3ÃyÄŠ+N!)3ÄšyÄŠ:y!)3ÄšyÄ‹:y!A3ÄŸÃ¦Ã #GÄAÃ®NOyy;Å…A",
darkOakDoorBottom: "0g0gcÃšÄžZ]Ä¨HÃ€Ä¸YÄµÃ€W;Ä‰WÃ‡2ZSÄ‰WEKZÃŽ2HÃžyH)ÄºH(Ã«Z1yyyyjhAÃÃ”GÃžCGGAÃÃ¡QÃ¬DQ]AÃÃ¡Ã‘Ã¬D@]AÃÃ¡Ã“Ã¬D@Ã•kÃ‚Ã£Ã“Ã¬nÃ“Ã•kÃ‚Ã£mÃºnÃŽÃ–kÃÃžhÃºnhpkÃÃžhJnhpAÃÃžiJnhFAÄ‰ÃžyJDiFk1ÄšyJ#yFkÃÄšyÃº#yFkÃ‚Ä Ã²Ã¬rIÄ€kÃhhhyihk#Ä£Ä£Ä£Ä£Ä£Ä£Äœ",
crimsonDoorTop: "0g0gaÃ¨ÅŒHÄ•DWÃº6WÃ•Ä»YÃŠÄ«WXÅœYÃ–Ã“W]Ã»HÃ€Å›HQÃ®W1ixhyihzzO>OO)O)g*S(()3UgÃ€SVÃ€UV3Ã‘QQQQQQ[Ã­yÃ‚yyyyzwV0VV5VUgV0VV*VUg0>5Ã€(3OjOQOQQQQ7GGGGGGGAQÃ¡QQ[Q[j)Ã O>[O[gOÃ 3O)O,Ã€0S0(ÃŸwÃ¡Ã’0S00J3Ã¼",
crimsonDoorBottom: "0g0gaÃ€Å›HXÅœYÃŠÄ«WÃ¨ÅŒHÃ•Ä»YQÃ®WÃº6W]Ã»HÄ•DWÃ–Ã“W1hzjM?VyÃŽÃŽxÃh,ONÃŽÃ“CÃŽÃŽ,OÃÃ“Ã“CÃ“Ã“nÃ“Ã”Ã‚yyyyyyDÃ°Ã“mÃ“Ã“Ã“Ã“ÃÃ¬hOhhMhkÃŽhOhhThkhOAMj>)QAQyQyyyyÃ¿GGGGGGG4QÃ¡AQDARÃ®QzQORQNÃ¬Ox+hNMihÃŽxÃ“miÃŽÃNRÃŸQRDDD",
birchDoorTop: "0g0geÄ¾EZÅ‚^WÄ¾8HÄŽÃ„HÄ¢ÄHÄ†CWÅžÄ´ZÅ–Ä•ZÅŠÃ—ZQÄ™HÃ†Å˜ZÅ–Ä…HZÅ…HZÅ•H1hhhhhhgiw02y02zi?VVOO)ziÃ„Ã“Ã£Ã”Ã“Ã•zJÃ„Ã“Ã£Ã”Ã“Ã•zÄŠÃ‰Ä£ÄŸÃ§Ä£Ä 3gÃ„Ä²Ä³Ä³Ä¤ÃŽ3gÃŠÄ²Ä­Ã™Ä¤Ä¨3g:Ä£Ã”Ã£Ä£Ä 3g;Ä®Ã”Ã£Ã¨Ä¯3g;Ä¾Ä®Ã¨Ã©Ä¯3g:ÄŸÄ£Ä£Ã§Ä 3i+Ã˜Ä­Ã™ÄžÃ•3i+Ã˜Ä­Ã™ÄžÃŽBg,Ã˜Ä­Ã™ÄžÃžÃ½Ã¹,Ã˜Ä­Ã™ÄžÃžÄ",
birchDoorBottom: "0g0geÃ†Å˜ZÄ¾EZÄŽÃ„HÅ–Ä•ZÅ–Ä…HZÅ…HÅ‚^WÄ±Ä¾YÄ†CWÅŠÃ—ZÅžÄ´ZÄ¢ÄHÄ¾8HQÄ™H1z)VV>+Ã¤ÃŽAQQQQPoÃŽBÄ’U?Ä’Ã‡oÃŽBOÄŒ^OÃ‡oÃŽÄ¡ÄÄÃ“ÄÄÃ¤Ã™Ã¨nÃžÃžnnÄ¯Ã”ÃžGÃžÃ¨nÃ¨iÃ”Ä¨Ã¨ÃžÄ³nÄ³iÃ”hÃžÄ¨nÄ®siÃ™hÄ¨hnÄ³hiÄ¸sÄ¨Ä¨nÃžhi1sÃžÃžÄ¨ÃžsoÃŽnÃžÃ¨ÃžÃ¨sÄ¯Ã™nÄ³GÃžGnÄ¯Ã”Ä³sÃ¨Ã¨GÄ®Ã¤Ã¤IIIIIIÃ­",
acaciaDoorTop: "0g0geÄ°Ä»ZÄ¬Ä«YÃ¬yYÄ™ÃYÄ•Ã HÄ¡Ã YÄ…Ã ZÃ™ÅˆZÃ½ÃH000)ÄºHÃšÄžZÃ?WÃžÄ®W1h000hhijQ?U?UQ@3GEGEGE@3Ã¥ÃºÃ¥ÃºÃ¥ÃºRÄ‹FÃºFÃºÃ¥ÃºRÄ›FÃºÃ²ÃºFÃºÃ‚ÃƒÃ²ÃºÃ²ÃºÃ²ÃºÃ‚ÃƒÃ²Ã¹FÃ¹Ã²Ã¹Ã‚3FÃ¹FÃ¹FÃ¹Ã‚3Ã²Ã¹FÃ¹FÃ¹[5Ã²Ã¹Ã²Ã¹Ã²Ã¹[lÃ²Ã¹Ã²Ã¹Ã²Ã¹Ã…5FÃ¹Ã²Ã¹Ã²Ã¹Ã‚5FÃ¹Ã²Ã¹FÃ¹Ã…kÃ²Ã¹Ã²Ã¹Ã²Ã¹Ã‚ÄŒM0M0MÄ”Ä¹",
acaciaDoorBottom: "0g0gcÃšÄžZÄ•Ã HÃ™ÅˆZÃ¬yYÃ½ÃHVVHÄ¡Ã Y000Ä¬Ä«YÄ°Ä»Z)ÄºHÄ™ÃY1y)y)y)ÃƒÃ“DÃ¤DÃ¤DÃž>Ã“DÃ¤DÃ¤DÃ£jÃ°,Ã¤,Ã¤,Ã¤jÃ¾[Ã¤[Ã¤[Ã¤ÃÃº,Ã¥,Ã¥[Ã¥ÃÃº[Ã¥,Ã¥[Ã¥ÃÃ¾[Ã¥,Ã¥[Ã¥ÃÃ¾[Ã¥[Ã¥[Ã¥ÃÃ°[Ã¥[Ã¥,Ã¥ÃÄ‰[Ã¥[Ã¥,Ã¥k1,Ã¥,Ã¥,Ã¥kÃŽ[Ã¥[Ã¥[Ã¥jÃ“Ä ÄÄ ÄÄ ÄjÃ°Ã“hmÃ“hhj)yyOOOQ>",
crimsonDoor: "0g0g7000QÃ®WXÅœYÃŠÄ«WÃ–Ã“WÄ•DWÃ€Å›H0000000000000kÄ‚PÄŒ00kÄ‚PÄŒ00_ÃšÄžÅ00Ã‘JPA00mÅ‚ÃšÄž00kÄ‚PÄŒ00QÄ‚^Ä»00Ã‘Ä‚]Ã¼00kÄ‚PÄŒ00kÄ‚PÄŒ00_ÃšÄžÅ00Ã‘JPA00mÅ‚ÃšÄž00iPAJ0",
warpedDoor: "0g0g9000%Ã¢W/-ZFÄ­HCÄ‚ZyÅ€ZÃ‹Ã“Y]ÅœWgÅŠH000000000000000001y)zy(001BÃ‚zy(006Ã‚Ã‚zAS007yÃ‚ByS001BNÃƒU(004RN>y(006yN>Q(007y)zI(001V)zy(004yÃ‚zU(006yNByS007QNÃƒy(004y?zAS001hhhhg0",
acaciaDoor: "0g0g5000Ã¬zWÄ™Ã¼W$ÃŽWÄ’Ä’Y0000000000000kJPA00kÃ­8A00)Ã­8A00kÃ­8A00kÃ­8A00kÃ­8A00kJ^Q00kÃ­8A00kÃ­8A00kÃ­8A00)Ã­8A00kÃ­8A00kÃ­8A00iPAJ0",
jungleDoor: "0g0g4000Ä‰Ä¼HÄš5ZÃŽjH000000001Ä’Ä’Ã«1Ä‘qÃ«3Ä‰iÃ«1Ä‰iÃ«1Ä’Ä’Ã«1ÄaÃ«1Ä’Ä’Ã«1Ä’Ä—Ã«1Ä’Ä’Ã«1Ä’Ä’Ã«3Ä’Ä’Ã«1Ä’Ä’Ã«1Ä’Ä’Ã«1VVS",
birchDoor: "0g0g8000Ä‚@HÄ¾EZÄ¾FYÅ¢Å…WÅ‚ÃšYÃ²ÅŠHÄ–BW0000000000000kÄ¹PA00lBÄšA00Ã’ÃšÄžÄŒ00l$Ã¾A00l$Ã¾A00lÃšÄžÄŒ00l$Ã¾Ã¡00l$Ã¾Ã¡00lÃšÄžÄŒ00lBÄšA00Ã‘JPA00kJPA00kJPA00iPAJ0",
darkOakDoor: "0g0g5000AKYÃ€Ä¸YQÄ™HZÃ’Y0000000000000kJPA00kÅ‚|Äœ00QÅ‚|Äœ00kÅ‚|Äœ00kÅ‚|Äœ00kÅ‚|Äœ00kJ^Q00kÅ‚|Äœ00kÅ‚|Äœ00kÅ‚|Äœ00QÅ‚|Äœ00kÅ‚|Äœ00kJPA00iPAJ0",
ironDoor: "0g0g5000Ã¾Ã‡HÄ¶;Z|)ZÄªcW0000000000000kJPA00k0S400)0S400kJPA00k0S400k0S400kJPA00lAÃ‚Q00lAÃ‚Q00kJPA00*AÃ‚Q00lAÃ‚Q00kJPA00iPAJ0",
spruceDoor: "0g0g6000ÃŽiYÃ¥ÃH(ÄªWÃ?WÃ·-Z0000000000000kJPA00kJPA00.AJ]00kJPA00kJPA00kJPA00pAJÃ†00kJPU00kJPA00kJPA00.AJ]00kJPA00kJPA00iPAJ0",
oakDoor: "0g0g5000Ã–ÃƒWÄ†kZwKYÄšVH0000000000000kJPA00k0S400)0S400kJPA00k0S400k0S400kJPÄœ00lAÃ‚Q00lAÃ‚Q00kJPA00*AÃ‚Q00lAÃ‚Q00kJPA00iPAJ0",
torch: "0g0gd000ZKWÅ¥(WZÅ HZZZÄ…ÅœWÃšÃƒHÃ½Ä»HViZSÄ¹W;Ä¨Z-Ä™Y)Ä‰H0000000000000000000000000000000000000000000000000001w0000003S0000005K0000007Ã«0000005Ã¹0000005Ã«0000007Ã«0000006Äˆ0000005Ä˜0000006Ä§000",
soulTorch: "0g0gd000OÄ–Z2Ä‚ZÃ§Å–ZZZZÄ…ÅœWÃšÃƒHÃ½Ä»HViZSÄ¹W;Ä¨Z-Ä™Y)Ä‰H0000000000000000000000000000000000000000000000000001w0000003S0000005K0000007Ã«0000005Ã¹0000005Ã«0000007Ã«0000006Äˆ0000005Ä˜0000006Ä§000",
lantern: "0g0gc000<5W?+HÃ¶RZÃ«Å˜ZwÄ‹YÄ¬Ã¬ZÅ™QHÅ¢CHZÅ¤HZÅŸZTBZ1yg000003Q(002h0iyx00150@GÃ‘00150,IÃ 005l0-Ä‚Ã®00000-Ä‘Ã®00150[IÃ¡005l0iyx00000hÄ£h00000ryÄ™002h0Äšy#00150Äšy#00000ryÄ™00000hÄ£h0000000000000",
soulLantern: "0g0gb000<5W?+HwÄ‹Y2Ã‡YD%WvcHÃœYWÅžÅ–ZÄ®ZZTBZ1yg000002hw002h0iyx00130kVT00130CGÃ003j0DÃ²ÃŸ00000DÄ€ÃŸ00130mGÃŽ003j0iyx00000hÄ’h00000qyÄ‰002h0ÄŠy!00130ÄŠy!00000qyÄ‰00000hÄ’h0000000000000",
beaconGlass: "0g0g5ÄºÄ–YÄ“|YÃ­80Ã¦Ä£HÃ´cZ0000019AJPAÃº9wJPAÃ»94JPAÃ»8ÄŒJPAÃ»9AJPAÃ¼9AJPAÃ»9AJPAÃ¼9AJPAÃ¼9AJPAÃ¼9AJPAÃ¼9AJPAÃ¼FAJPAk9AJPwÃ¼FAJPAÃºCpAJP9",
beaconObsidian: "0g0g540Y00WgMZ-Ã½HAÃ Z4Jg&1s4yÃ¬Ã•8Ä·BÄ QÃ²l8&B28Ã¹Ã¬MAPAÃ«8PiÃ«1Ä§9]EÅƒ6g]5)Ã³AJÅˆBÄ«Ã¼Ã«Ä€JIÃ¼ASÄˆÃ«Sg20Ã¼cE4RdÄ«JdÄŠJÃ¶4Ä·Ãº0a]0K(4w9g]SÄŠkQ00",
beacon: "0g0gaZZZ!Å’W#$WÄ¶YW_ÃŠZÃœÃ¶ZÄ‡ÄµZÄ®ZZÄ¾ZZÅ–ZZ000000001hhyyyhj1iyARyxj1yQ?QQyj2AQVVQRz2A?Ã”Ã£URz1AÃ„Ã¤Ã±Ã’Rz1QÃ…Ã²Ä€Ã¢Uz2?Ã…Ã²Ä€Ã¢Qj2AÃ„Ã¤Ã±Ã’Rz2A?Ã”Ã£URz2AQVVQRj1yQQUQyj1yyARyyj1hhyyhhjOOOOOOOO",
cactusTop: "0g0g9000.ÃŽYTJWÄ†Ã¾ZÃÅ™HÃˆNYÃ“ÃWÄ¢Å HTÃºZ000000001yxyNixg2QRQQQQg2?NVÃ’BUw2?Ã‘Ã…Ã’@Uw1AÃ„Ã’Ã’Ã¡Qg2*Ã’Ã„Ã“VUw2@Ã‘@Ã“Ã“Ã‘w2@Ã”@Ã’Ã“Uw2?Ã“Ã“Ã”U)w1QÃ„Ã’Ã“UQg2?Ã‘VÃ“?Uw2?U*VB)w1QRkQXQg1ixyyixg00000000",
cactusSide: "0g0g9000.ÃŽYÃˆNYÃ“ÃWPÄ©WÃÅ™HTJWÄ¢Å HÄ†Ã¾Z1zAÃƒNi*g6Ã‚Ã…Ã‚NjNÃÃ¤Ã‚ÃVN>Ng1yxÃ‚NÃ­*K1z+Ãƒ*lBg1OxÃƒ*lyÃÃžOÃÃ…*lNg1OxÃƒBiNg1zÃ„Ã‚Vj*K1ÃƒCÃƒVj*K6ÃƒEzBjBÃ±6Ã‚xzBjVgÃ¤Ã‚xzNÃBg1ÃƒÃz*ÃBg1ÃƒxÃ‚NÃŸBg1zMVyl*g",
cactusBottom: "0g0g700091WdÃ¬YÄ²,WÄº[YÃ·Ä«YÄŠÅH0000005AÃ²FA]9ÄžÅ‹ÃšÄ¡8a:Ã£ÅÄ½Ä·aÃ“Å‹ÃºÄ¢Ä·5Ä½Å‹ÃºÄ£g9Ä½Å…Ä•Ä¥89ÅŽ)Ã¾<86Ã–)Ä‚{Ä¯6Ã–tÄµ{Ä·aÃ”AÃ¶Ä¤Ä·9Ä½ÅŠÃšÄ¤Ä·9Ä¥Ã£ÅÄ¿Ä·5ÄžÅ‹JP84ÄŒÃ³PA]000000",
glassPaneSide: "0g0g4000ZZZÄªÅ†ZÄ›Ã‹Y01Ã«001Ä§001Ã«002Ã«002S001Ä§002Ä§002Ä§001Ä§002Ä§001Ã«001Ä§001Ã«001Ã«001Ä§001Ä§0",
glassPaneTop: "0g0g4000ZZZÄªÅ†ZÄ›Ã‹Y0000000000000000000000000000VÃ‡ÄŽÃ½Å¡Å–Å¤Ä–0000000000000000000000000000",
ladder: "0g0g7000Ã½Ä»WÃ€Å™HÃ©Ã®HÄž*WÃ’RZ-Ä™Z0Äˆ002Ã«eOcJoÅ‡lÄ¼ÃšÄžÄÃ•1K005Ã«0Äˆ002Ã«iOA(Ä€Å‡lÄ¼ÃšÄžÄÃ•1K005Ã«0Äˆ002Ã«iOAJoÄ¿lÄ¼ÃšÄžÄÃ•1K005Ã«0Äˆ002Ã«iOcJoÅ‡lÄ¼ÃšÄžÄÃ•1K005Ã«",
vine: function(n){
var pix = getPixels("0g0g5000ÃOZÃˆjHÃ­ÄZÃ›Ã‘Y0kÅ‰Ã€oÄ¿il04loÃ›y01Ä«Ã«ÃÄˆ0dÄ©Ã«0Äˆ09oSgÃ¼1E8Ã‚Ã‚phÃ«RÃ«woÄ¿Ã­mÄ§05o0oÄ§02Ã«2lw08Ã«0Äˆ01RÄˆdÄˆ0Ã‚lwekaeAwgkÃ¼gÄŒ01i10Ä‹8EF0")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
Water: function(n){
var pix = getPixels("0g0g8Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄº|%Ä¶;Å”Ä¾Ã‹ÃšZZÅ”Å¢Å–Ä•4Ã¼ÃºAÃ¹ÅŒPyPBAJBAJA0Ã‚Fy1A2P]JJ?AP]ÄŠTAiJ4JPAÃ¾Å—ÃžJTAJSÅ€Ã±Ä€wÃ«_PAJPAÃ‚FAÃ‚QÃ­PPAJPAÃºPAJPkJFAPA2Ã³PAÃºzÃ•awÃ¿ÅŸAiP")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]/255
setPixel(n, i >> 2 & 15, i >> 6, bright*10, bright*30, bright*255, pix[i + 3]);
}
},
Lava: "0g0gpÅ€Ä‰YÄ¸SZÄ¸SYÅ„Å‰WÅ‘Ã®ZÅˆÅ‰WÄ¯Å‡HÅˆÅ™HÅ€Ä‰HÅ…2HÅ‘Ã®YÄ¼SZÅ‰NZZÄHÅ•Ä«YÄ¯Å—HÅš*ZÄ³Å‡HÅ„Ä‰HÄ³Å—YÄ¯Å‡YÅ‰NYÅšBZÅNZÅ„Ä‰Y0QNgÄ‰(Rg03-0jÄˆÃŽ8Ä¹gtP^SgÄ€x8elÄ™Ä–]2Ä˜Ä¤30Rg.Äµ0RgÃ¯$o0gEÅ“2Ä©gÃ¶Ãµ8iÃÃ«30S0gÃ«88Ã¹Ã«Å‡0SkÄ¢7(SEXx3AgÄ…Ã«9ÃµgÄ³TÃ85X6*mÅŽ4zÃ’ÃŠ0Ä€Ä­MÃ¬Ã”8w826UM(RÃ«Ä¤x8Ri.Ã“8@joEÃ¢Ä©00Ä¨8igÄ€4Ã®JÄ§XÄº8S6K$FÄ­@0C8Ã­Ã£Aw",
craftingTableTop: "0g0g9oÃ€ZcwHSÃ«ZÃÅ‰WÄ¦Ã“WÄ…ÃWÄ•Ä‹ZUÅ‰H]Ä‰Y1gzOON10kRÃ„Ã“Ã“Ã’ATkCÃ“Ã“Ã“Ã“ÃT2Ã”Ã±GIIÃ£wBÃ”Ã„Ã£Ã•Ã“Ã£Ã‚+Ã”Ã“Ã¯Ã”Ã„Ã£Ã+Ã”Ã¤GÃ±Ã¤Ã£Ã+Ã”Ã“Ã£Ã”Ã“Ã£Ã+Ã”Ã“Ã£Ã”Ã“Ã£Ã+Ã•IÃ¤Ã±Ã¤Ã£Ã+Ã•Ã„Ã°Ã†Ã“Ã£ÃBÃ”Ã„Ã°Ã•Ã„Ã£Ã‚2Ã”Ã¤GGGÃ£wkCÃ“Ã“Ã“Ã“ÃT4RÃ„Ã“Ã“Ã’AS0gzOON1g",
craftingTableSide: "0g0ghoÃ€ZÄ–*HÄ¢VZÄ©Ã£W-Ã¬HÃÅ‰W]Ä‰YÃ½Ä»WÄ†kZAÃ¬WÃ©Ã®HÃ’RZSÃ«ZEÃYÅ‚ÃšYÄžÅ‚Hg(Y0QMÃ¹ÄŽM]MÃµS0Ã­jÄˆÃ°M2h900XwIF^ggIS2Ã¼Ã Ä‘K2Ã¾ÄÄ•S0Ä·MÃµÃ“(Ä­wÃ¯00XÄ«M4wRx8S22Ä·ÄœAwXgÄ‰02Ä»ÄFK2Ä»ÄtS0Ä­Å‡Ä Ã“(Ä­MÃµS0QÅ˜;Ay2Ã«Ä‰00Ã­kx4wRkwS2Ä»Ã Ä‘ÃÃ­Ã·Ä%K24MI@(Ä­Ã¬IK0QAwAwXh4w2gh54wÃ­Xx02Ã¼ÄÄÅ‡2Ã¾ÄÄ•K",
craftingTableFront: "0g0ghoÃ€ZÄ–*HÄ¢VZÄ©Ã£W-Ã¬HÃÅ‰W]Ä‰YÃ½Ä»WÄ†kZÃ©Ã®HÃ’RZSÃ«ZEÃYÄžÅ‚HZZZÅ‚ÃšYg(Y0QMÃ¹ÄŽM]MÃµS0Ã­jÄˆÃ°M2h900XwIAyggIS2Ã‚Ã ÄS2UÄÄ•w0Ä·MÃµÃ“(Ä­Ä§Ä™00XÄœ54wRÄ­(S22Ä§XAwXÄ½Ä02JÄªÄS2JÅŽÄ¥w0Ä­Ä§XÃ“(Ä­ÅŽÄ¤S0ÃŒÅžIAy2Ã±Ä¥00Ä‚Åžx4wRn;S2JÃ ÄÃ€Ã­}Ã¼Ä¥S24MI@(Ä­Ã¬Ä K0QAwAwXh4w2gh54wÃ­Xx02Ã‚ÄAÅ‡2UÃ½FS",
crimsonNyliumTop: "0g0gbÃ¯4WÃ¨0WÃ‘Ã­WÃÄšZÃ¼TWÄ”ÃŽYÃ‘JHÃ¤0WÃÄªWÄ§ÄšZÄ¤ÄšZ0iO?ÃŽBÃ…>Tj0Qk)QVEgÃ»Ã¬?M?[NÃŽÃ¬h>3[Q8mUÃŽÃ«Ã¹M/Ã¬kzTBÃ¡30koSÃ¢U(oxÃ¬Ã®4UÄ.NkSÃ¬[[Ã…Ã®3ÃŽhko(@okÃ†TÃ²38mi]hÃ­S-hÃ‘kÃ…XkVQÃ¡(Ã¬?NhTÃ«>08QToC]kÃ¹)Ã¤ÃŽ(MÃ­h(?Rk",
crimsonNyliumSide: "0g0glÃ¼TWÄ”ÃŽYÃ¤0WÄ¤ÄšZÃ¨0WÃ•0WÄ§ÄšZÃ†0WÃ€(ZUÃŽYUÃžZÃ‘JH;(ZÃ¡ÄªWÃ‘Ã­WÃÄšZÃ¡ÄšZ{ÃHÃÄªWÃ¯4W{(Z0Sg8z00g4ÃŽw2M0zoSMX5F4202FQÃŽgÄxÄ¯Ã‚kX.S>Ã¼ÅŽTÄ±Ã Ä„Ä/a>Ä…8RgÃ¡AÅŽÃ‚eÃ Ä‰FRÃ„@*&^Ã·Ã¯BÄ¶Ã­^Ã¤Ä¢iFÃ‘ÅŠJ}Ã¡ÃŠÅž@BxÅ…ÅžlÄ¹:Ä‡,Ä¡Ã±Ã ÅƒÅŸÃ€Ä{sÅžÄ¡Ã±Ã¼Å†8Ä™ÃºÃ¡~D?cÃ´Å„@?M>ÄŒÃƒÄ°Ä¯ÃµÃ€Ä¾<Ä¯{sÅžÄ´ÅÃµÃ‚ÅŽÄ´ÅÃ´Ä†Å Ä¢FÃ´sÅž<ÄµÃµÃŠÅžÄ¬Ä·_yÅŽÄ¥Äµ",
warpedNyliumTop: "0g0gfÃ„lWdÃ¯Y<*HTÄWdÅŸHaÃ¤HdÅŸY?ÄWe8Y?ÄWaÄ¿Y6Ã¤HaÄ¿HTÄWeÄ¿H0iO?xBÃÃ”Ã¬j0Ã“mÃ£QVFgÄÃžÃ˜Ãž?TNxÃžhÃ±3Ã¬Ã‘7iÄ xÃÄˆMÃ¨ÃžoDÃ¬#m30onKlUÃtxÃžÃ 6UÅ’Ã¦ÃŸoKÃžÃ¬ÃŽÃÃ 3xhmn(ÃnmÄŸÃ¬Ã¨33iiÃ±hÃŸK,hEoÃÃ¤oÃ‰Ã“o(M_ÃŸhÃ¬ÃÃ±07Ã‘Ã¬nyÃ±mÄ§+nx(MÃŸhÃÃ’Ãm",
warpedNyliumSide: "0g0gndÅŸHaÃ¤He8Y<*HeÄ¿HdÅŸYdÃ¯YaÄ¿H$ÅŠW<*YdÃ¯ZÃ€(ZEÅŠWUÃŽYÃ‘Ã­W;(ZÃ¡ÄªWÃÄšZÃ¡ÄšZ{ÃH{TWÃ¯4W{(Z0ShcA00g4Ã¬pRTIAwSR4ÄŽ(Ä­xI>MÃ°ÃžÃµÄ¯^6ÃŽÄ€Ã–RX)F8ÃˆkXx]ÃÄ»Ã¼xÃ˜ÃˆÄ½Ä¬ÄcÃ—Ä·Ã°%Ä•Ã‰ÃŠÃ¿Ä¨Ä–Ã˜Ã†ÄžÄÄ¸Ã»UÄ°Ä¢Ã‚Ã‚ÄŒÅC}Ã¡Å„D}Ã³_BnFÄ¹ÃÄ‹Ã†Ä¡ÅÃ¡Ä…p%{Ã™Ä…oÄ¡Å“Ã½ÃFÄ¥ÅšÃ¢pD|ÃœÄ„Ã‹Ã”Ä´Ä›Ã‰ÄŒÄŽPÄ²Ä„Ä¾7?Ä²Ã™Ä…EÄ½#Ä„ÅÅÄ½#ÄƒÄ‹qÄ¢ÃšÄƒÅ„n?ÄµÄ„Å„oÄ´Ä¹Ã˜ÅÅÄ¬Äµ",
warpedStemTop: "0g0gkSÃZSÄZdÃ¯Y]Ã®We8YQÃ½Y6Ã¤HQÄZ+]Z+oH+oWNÃ¥W+-ZpVWFÃ¡ZxÄ­H]Ã®HSÃ½ZNÃ²WQÃ½Z02xÃµÃ¯MÄ§(gwagXBaÃˆJXM1yqÄ¾.Å•Ã§Å…Åž.Ã‘2qÄÄ™ÃµÃÄ€Ä«.0Ã­ÃŠÄ¬F^Ã‚Ã¼ÄŽ<(2uÄ¬.Ä¶Ã§Ä„ÄŒ.w/ÃŠÄ*!Ã‚ÃŠÄ.hNÄ†Ä¬.LÃ¦Ä†ÄŽ<@!ÃŒÄ¬.LÃŸÃŠÄŒ.ByÄ†Ä¬.F^Ä†Ä.QqÃŠÄ¬.Ä´Ã Å…ÄŽ<zqÃŒÄ¬F^Ã‚Ã¼ÄŽ.ziuÃ°FcÃoÄœ.yauÅŽÄ¡ÄµÃ Ä„ÅŽ.12gXÄ9UJÃ¼M002xÃµÃ¯)Ä¨0gw",
warpedStemSide: "0g0gpSÃZSÄZeÃ…W]Ã®HdÃ¯Ya6H9ÄžYUÄ‹Z]Ã®W66HQÃ½YaÃ”WSÃYQÃ½Z9ÄŽYSÄYaÃ…WdÃ¯ZdÅH;ÄZSÃ W;Ä¬Zi+ZdÅWSÄH02xÃµÃ¬ES(ow02Ã€cÃ¬E@(Ã¹w9IgÃµC(e0XÄ¨g6SÃ«1(}N4Ä8Äµi4ÃŽw@ÃÄ€Ä‰1Äµi4ÅŠ92(4Ä¨9eÃÃ¹Ã”-]gÄ€z(ÄµÃ«Ã¹8.Ä©R58(0g4Ã¬0Ä­i0ÅŽaSÃŽÄˆAwSR4ÅŠÃ‚Ä¹msÅ‡9q?cÃ™]@0ÃµÅŽ18n01(Ä·SÄ˜Ã”Ã24Ä‘Ã³auKÃ¹3OÄ§(Ä¨Å0ÃŠg?ÄˆaUÃ¬Ä‘x0BMÃ«Ã¼Ä•Ä—Ã«ow",
crimsonStemTop: "0g0ghSÃZÃ€SHÃ¨0WÃ¼TW{SHÄ”ÃŽYIÅœYÃ«Ä¼HXÅœYÃ¨Ä¼HÃ¹ÅWÃ†ÄœWÃ•Ä«YÃ¼ÅWÃ½6WÃŠÄœWÃ†Ä›Z02w0Ã‘ES0cw9ÃµÃt9Ã‚}ÃwÄ¨q05Ä•Ã´ÃoÄ¬Ä•Ä‹1Ã«ÅÄ‰8RÃ€Ã®$Ä§1Ä½XÄF^Ã‚Ã¼(Å‡1Ä€XÄ¥Ã™ÃÄ½Ã¼$Å‡9Ä½Ã¼Ã«ÅPÄ½Ã¼Ä”Ä¨!Ã†XÄ¥$ÃÃ†Ã¼MBxÄ¿XÄ•$Ã‡Ä½Ã¼$Å‹qÃ†XÄ”ÅŽ/Ã†Ã¼Ä•z1Ä½XÄ•Å‡Ã§oÃ¼(Å‡1Ä¿XÄF^Ã‚Ã¼$Å‡ioÃ‘B8RgÄº%y9Ä6%Ã˜ÃˆÄ½ÄÄ”Ä¨1ÃµÃ®Ä…7_Ã·Ã wÄ§02w0Ã‘ES0cw",
crimsonStemSide: "0g0gjSÃZÃ€SHÄ˜Ã­W]Ã®HÃ¨0WÃ¼(ZIgHUÄ‹Z]Ã®W{SHÄœÃ­WÄ€(ZÃ¤0WÃ¹(ZUSHSÃYÄÃ­WÃ¹MWÃ€SY02xÃµÃ¬ES(ow02Ã€cÃ¬E@(Ã¹w9IgÃµC(e0XÄ¨g6SÃ«1(}N4Ä8Äµi4ÃŽw@ÃÄ€Ä‰1Äµi4ÅŠ92(4Ä¨9eÃÃ¹Ã”-]gÄ€z(Äµ(Ã¹3.Ä©R58(0g4Ã¬0Ä­i0ÅŽ9SÃŽÄˆAwSR4ÅŠ^Ã¾gsÅ‡9iQÃµKE@0ÃµÅŽ18j01(Ä­Ä§Ã«Ã”P25ÄŒ98Ä©KÃ¹3(S(IC0{ghw9Ã‚MÄÃŽ0qÅˆÃ«Ã¸Ã¡zwow",
warpedWartBlock: "0g0g7dÅŸHhÄžYhÃ°HaÃ¤HeÄ¿He8YdÅŸY02I0w10Ã¿24ÄŒ1A208UoQ0Ã³{!wÃ€0Ã½wJ1{8Ä¹04Ã—E0h0{Ã¹5Ã‚Ä‘wNÃ«9A104Ã«809KlÃ€Q4^Ã±yFSyÃ¶AÄ„U1ÄŠ!pgÄ4yg50g0wg17g1SÃƒ10Ä·",
shroomlight: "0g0ghÅ€SWÄœÄˆWÅŒÄ·WÄ¼(WÅ¥zHÅŒÄ§WÅ¥ÄžZZÃ¦WÅ¥jHÅ€(WZEWZoWÅ¥jWZÅ‚HÅ¥ÄŸWZÃ³WÅ¥Ä®W0SxÃ¹Ã¯0RÃÄ…38Ã³Ã‚ÃµÄ­wJÄ‹ÄQ18ÃFÃ“(Ä¯Ã®FÃ“P]ÃÄ„Å‘M{Ã“oÄ«gÄ³Ã£ÄQpÃ¾Ä›MÄ¬P{Åšp3NÅÄºÄ€Ã¯p6*FÄªNÅÄºoÃ¯xÃŒÅ˜Ã¼ÄŒqÃ·ÃlÄ«zÃ·ÄœsÅ‘xUÄŠcÄ­xUÃ“tÄŽÃ]MÄ§Ä«FaÃ¯EÄ­ÃsÃkÄxaÄŠÃ½^M^Ã Ä¥ÄªxÃŒÄ›-ÄŒq{Ã£Ä€ÄŠqÃ¾Ã”l^Ã«ÅƒÃ‘gÄˆFcRÃ½@waÃ‚Ã¼1F@Ã‚ÄŒÄ‘8SAÃ«x",
polishedBlackstoneBricks: "0g0g6(Ä›H|BH;Å‹HkMWAÃ¬ZsTY4ÄŠÃEÃ¼Ã®8wÃ‚i0j8ÄŒÄˆÃºEÃ»T42T9Ã]0g0_ÃÃ¬#0Ã¾_3Ãº8AÃ¾I3ÄÄ£Ã‰Ã›Å‚ÃšEÃ¼Ã»Ä™iÃ14j8AÃ‚Ã¬kÃ»Ã«Ã¼Ã¹SwÄ‹]A2T8z?8wgPÃ˜]_$Ã¾Ä²#2_ÃšÃ›ÅÅ‚Ã›Ä£Ã‰",
gildedBlackstone: "0g0gaAÃ¬Z(Ä›HkMW;Å‹HQKWÅSZÃ©gZsTYZÄœY|BH1g0whjkTiÃ„RwhjMTBÃ7xlÃ®gÃŸKhh1jÃ•G7ÃžjO3.Ã¹Ã…4OÃ»gÃž00Ã”4jM04h0SGÃ04ÃŽ7h7ÃžG1ijnÃ„S1hnDgÃ¡Ãžg401Ã’G1Ã»MmÃžj,Ã«G.Ã»lhOMÃ€GGjKOÄ06004SOÃºG4DGxng7G201T0",
chiseledPolishedBlackstone: "0g0g6|BH;Å‹HAÃ¬Z(Ä›HkMWsTY0g002RcÄšÃ‰ÃšÃ¾Ä³eÅÄ’P!teÃ«00Xd6Ã­PBÃ¼|B6Ã‰ÃšÃ¼t6Ä˜00Ä¢d5hSk)d5MT)Ä¢tdNPAÄœÃ‹56Ä¹PÄ‚d5i_BÄ¢t&ÄŒÃ½Ã„ÅtÃ™0S0Ã­t|ÄšÄ°ÃšÄžÅ^Ä“AJÄ¬V",
blackstone: "0g0g6AÃ¬Z(Ä›HkMW;Å‹HsTY|BH4Ã«gAÄ›xF]Ã¹AÄžÃŽÃ‚1h%ÄšySJT%Å€4XÄžÄªÃ£Ã²4Ã›Äšx094%Ã¹4A8AÃ«0ÃºgÃºxÃ¹iÃ´M]1AÄ¬8Ã³i20gÄŒ6Äž^XÄŸgÃºÅÄ³BÄžKJRÅ‡Ã›Ä·401gÃ›Ä2Ã‚Q{wP20gS",
blackstoneTop: "0g0g5AÃ¬Z(Ä›H;Å‹HsTYkMW5yÃ†EÃ«Ã‘Ã²irKÃ±aIÄˆa%ÄšÃ¬KI^TÄŒÃ€2]iik_0xpJR>ÃŽyÃµÃŽÄ¯rÃ’k_]8Ä°0Ä‰2AÄ€a2+2QÃ²rÃ‚2I]-Ä¨QiJiNÃ­Ã€Ä1e4Ã¹ÃŽyoÃ›2IÃ‘ÄˆTQSSxÄšTP]Ãµ",
netheriteBlock: "0g0ga;ÄªW(ÄŠYAÃžZPkYÃ‡VY|AZ-ÅŠYT4W|4W$ÄŠY1000010ijQQQQ?QÃ‚4Ã*VÃ IOÃ‚4Ã IV*Ã†Ã£Ã‚4,Ã¯Ã¯VÃƒÃN4Ã Ã¤*?VÃM4GÃ VUO+N4,Ã’VV,+Ã‚4*VÃƒ*Ã Ã£M4V?GÃ G+MlVÃ¯GGÃ“0Ã‚4Ã†Ã†+Ã”Ã“9Ã‚lÃOÃ£Ã”KÄÃ‚lKÃ“KÄÄÃ¹ÃlO*V*VVNiyxiyhyy",
basaltSide: "0g0g5|AZoÃ»W-Å‹YÃ‹Ã¢Z(ÄªZ50ÄªÃ™(wÃ°SÄªÃ™(iN0Å‚Ã™(Ã«A6Å‚c-Ã«Q(Ä©1waÃ‚+icxaJ)Ä·Ã™xgÃ¹QÃ«ÃŽÄ¨2Ã«(Ä€ÃšÄ©Ã«Ã«6rÃšÄ ÄƒÃ¹6rdÃ­rÃ¹+rTÄšs0+2Ã¬XkÃ«QgÃ«wÄ¹Ã¬6ÄƒgAÄ§46rÃŽXo",
basaltTop: "0g0g7Ã‹Ã¢ZÃ¢Ä¾H|AZ)Ä»WÃ³EY;Å›ZoÃ»W0Ã¼Ã‰A636mÄ¹KÃˆÅÄ+Ã«eÄªÃ€{qÃ¬{Ä€qÄ­hSÃ™J&Ä§Ã¬Ã˜5Ã¬SÄ¿dÄ€0Ä¢Ã½%Å‹Ä4Ä¤Ä‘1ÄŒ5DÃ™Ä¯ÄžÄˆ?Ä¡JÄ§SKocÃ«Ãˆ0Ä„Ä¨wÃ«O4ÄƒTPÃ«ÅÄ«(Ã—~Ã“6Ä´Ã«eÃ‘Ä˜]Kwe(wS",
polishedBasaltSide: "0g0g6(ÄªZ-Å‹Y|AZÃ¢Ä¾HÃ‹Ã¢ZoÃ»W5.jÃºF8Ä-ÄºÃ·B9Ä-ÅŠÃ·*99+Å‚Ã¶Ä¡95@ÅŠÃ¶Ä ÃºB]ÅŠÃ¶Ä Ãº5QÅ‚Ã²Ä¯I1AÅ‚Ã–Ä¯IÄ‰)ÅŠÃžÄŽIÄ‰)ÅŠÃšÄ­Ã¶ÄŠ-ÅŠÃšÄ¯Ã¯6]ÅŠÃšÄ Ã¯a-ÄºÃ›)I!-ÄºÃ›-Ã¹!-ÄºÃ·-Ã¹!.jÃ·Ph",
polishedBasaltTop: "0g0g7(ÄªZ;Å›ZÃ¢Ä¾H|AZ)Ä»WÃ‹Ã¢ZÃ³EY5CÅ‹^Ä Ä¯aÅ„Ã˜Ä½ÄÃ‡#$Ã½Ä°Ã’ÃšÃ¢/Å”ÃšÄžÃ»+Ä¥ÄžPCÅ€.Ã‹Ã‹Ä–ÄŽÄ•*Ä¤Å™Ä°Ä“ÄÃ‰;ÅšÄ’ÄŽÄ•ÄžÄœÅœÃ–ÅŽÃ»#*Ã‚PÅ’ÄšÃ¢*Ã‹Ã›ÅÄ•Ä)JÃ‰Ã“ÃºÃ–Ã„Å„Ã¢ÄŸÃ»,Ã‘ÅœÃˆÄ»ÃºFÃ’Ã‚ÃˆÄ’Ä‘6Ä“Ãˆ^Ä¢I",
chain: "0g0g4000AÄ›ZP@H<lW1g00Ä¥Ã00Ä«000ÃŒÅ—003g001g00Ä¥Ã00Ä«000Q000ÃÅ—003g001g00Ä¥Ã00Ä«000ÃŒÅ—003g00",
warpedTrapdoor: "0g0g7%Ã¢WtVW/-Z/8W+Ã¥WFÄ­H0004J9wÃ¹PFÄ­ÄŠJQÄ·$60hÃ¬Ã‡8Ã”+aÅ“pFÃ˜mÄ²Ãšo&Å”Ã“Ä¸Å’gNÅ„Ã¾Ä½Ã“ÃºiÃ‹Ã¾ÅKÄ!ÃšuÅKp!ÅÄ–ÅÃ—Å‡eÅŒÃ£Ä´Å”x$Ã“ÅÄµÅ”ÃŽEÃ—Å•Ä¶;gEaÅŒÄšÃ€waQÅ‹JPo4J14Ã¹1",
warpedPlanks: "0g0g7/8WFÄ­H/-ZtVW%Ã¢Wt4WgÅŠH4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
warpedFungus: "0g0gc000iÃ•HÅ¤Ã¹WmÄ¿HÅ¥Ã¾YlÅŸHlÃ¯YÅÅ—Z<*YQÃ®W]Ã»HUÄ›Z0000000000000000000000000000000000000000000000000000000001zON>g005jONxÃ€006VDlVK006Ã“GIÃ“K00009Ã¹000000aÃ¹000000bÄˆ000000aÄ˜000000bÄˆ000",
magma: "0g0gaSÃHÄ°(HÃ‘ÄŠYÃ€ÃŽYÅiWÅŒÃºWÃÄªWÅ¡ÄYÅ¡Ã¡HÅœÅ˜H1z3Aw2ÃzÃ“(0Bz6TNGÃ„yÃNÃ•NUÃ„)liUÃ¬zxÃƒxÃzyÃ’wNg2@(3N@zw+Ã­Ã06Ã¬UiÃXVzAihTlmxÃ‚ÃzBzÃ‚wNki(ANR(3Bw2Ã­6Xz0Bz2RjÃÃ‚(ANÃÃ‚TNÃƒyÃ†UÃ¬xxV]XÃ“zÃ„N*iC@(Nkw5z3Bw2kÃÃ“(0Ã’z2VNÃ…Ã£CQNBNVÃ„)oÃ°lUÃxjxkÃyÃ•K+g2Ã„(3+RÃwN>z02VTÃ‚z?UÃxÃ„XQ?iÃ•Ã°lzÃ’zÃ„w+?Ã‚(ANi(3Ã’w2R2Ãz0xz2Ã„>yÃ‚(ÃŽNÃiÃ†N>CÃ¯l?xÃ•Tl]ÃzÃ°NMÃ‚ym(+oK5z3Aw2TzC(0Ez2Ã¬NÃ…Ã£yTNENVÃ„-lRUTzB>FhzyBwNÃ«2Ã„(3NÃ‚zw+RÃ06TlÃ‚zÃlzÃ•Ã°UÃViBi]ÃAzÃ‚wNlÃ„(BNÃ°(3xw2Ã‚6Ã¯Ã0Bz6@Ãƒy@(Ã‘NÃÃ°?NÃƒCÃ†XÃ†Ã’xÃhÃ†Ã“Ã@N*RyÃ‚(Nlw",
crimsonFungus: "0g0gg000Ä«ÄºYÄŒJYÅ¥Ã¾YÅ¤Ã¹WÃ¼ÃŽYÃgYÃ€ÃŽWÄ§ÄˆH]0WÃ€ÃŽY]Ä¹ZÃ‡jYÃÄªWÃ¯4WÃ¥Ã¯W00000000000000000000000000000000000hz000003TyÃ€00004T>Ã€00006VQK0007xiÃ”Ã¤K009Ã£Ã“GÃ“Ã¹000Ã¿Ã¥Ã¿Ã¥00000aÄ˜000000cÄ·000000eÅ—000000fÅ‡000000eÄ·000",
warpedRoots: "0g0g5000mÄ¿HiÃ•HlÅŸHlÃ¯Y000000001E00001E00002ÃiÃ«0Ã¼0Ã«iÄ§0Ã¾8K,01Ä hT800SÄ‚14S0ÄˆÄªÃŽÃ«Ã«0M0ÃŽÃ«Ã¹0(Ä§TÃ­Ã«0Ä˜Ä·@4010o8601Ã«Å‡Ã™601Ä¨0ÃŸ800T4Ã­80",
twistingVines: "0g0g5000lÅŸHiÃ•HmÄ¿HlÃ¯Y000000000A00001Q00002Ã’(0003Ã›y0003Ã—0000jÃ—0000j^0006Ã´Q000kÃ‰(0001i(0001hw0000Ã‡Ã«0006Å€Ã«0006Ä»Ã«0008Ä»Ã«00",
twistingVinesPlant: "0g0g5000lÃ¯YiÃ•HlÅŸHmÄ¿H02Ã»w0000Ã‚xS000ÃˆÃ²ÄŽ000aÃºÃ«000aÃ0000bP(0001Ã–(0001PÃ¹0004{Ã¹000sÃµÃ«00QAÃ™Ã«01ÄAÃ‘0000Ä‹A0006Ã»w0004Äw0002Å€w00",
netherSprouts: "0g0g4000mÄ¿HiÃ•HlÅŸH0000000000000000000000000000000000000000000001008TwS8ÃŽyS-ÄšO];Ä›OÃµ",
crimsonRoots: "0g0g5000Ã‘iHÄ”TZÃ€iYÃ¹jH00000000000000000000000000Sw00048wÃ«00)Äˆwg00Ã¯gÃ«Ã­00IÃƒÃ­100RÃ¼wÄ©Ã«XCIÃ¯(IwxoT0gÃ«SwR0Å‡g@9Ã«Ä®o28Ä²5Ä«Ä§1IÄªc-0",
weepingVines: "0g0g4000Ã•gWÃ¤0WÃ†0W0Ã•n00Ån00Åƒ600;a00(r000)000c0000000000000000000000000000000000000",
weepingVinesPlant: "0g0g8000Ã•gWÃ¤0WÃ†0WÄ«ÄºYÅ¤Ã¹WÄŒJYÃ¼ÃŽY02I1g004Ä€1pSj)Ã«1Å¤ÄˆÃ¿)Ä§1Äž01Äœ00J00ÄŒ00Ã¼00ÄÄŒ0BÄˆ0DÄ–Ã«iÄ§06Ä¿04S00Ã¹0NÃ«00ÃºmyS00P1J009O8Ã¹00PY9Ã•000Ä¿9Ã§002Ã€5(0",
spruceTrapdoor: "0g0g9Ã’NYÃ¬Ã HÃ¥ÃHÃ‡iHUÅˆZÃ–>W)ÄºH;ÅšZÃ–ÄŽY1zhTÃƒxNÃ€1zlSÃƒÃ‚*w5ky(UBTÃ€Ã”Ã®Ã¤,Ã®Ã¤,Ã°0Ãƒ5SÃƒ5SÃ€5kÃ‚*kÃT05ky(UBTÃ€2AB(ÃƒwRÃ€2Uy*4gRw13i?4l*w1ÃƒlM3i(g1jÃ€TjhSÃ€Ã”XÃ¤[Ã®Ã¤[Ã°1ÃƒlM3i(g1zhTÃƒxNÃ€1zlSÃƒÃ‚*w",
oakTrapdoor: "0g0g7]Å™WÃŽRYÃ²Ä«WÄ…Å‹YÃžÃ W000Äš*W000000FÄŒÅ‚|CÄgiÃKÃ»g$Å‚Ã @Å‚ÃºEÅ‚Ã @Å‚ÃºEÅ‚Ã @Å‚Ä6Ã”ÄƒÃƒÃ™I%+Äº|ÄžÅ€%ÄœÃ»Ã–ÄŽÃºEiÃSÃ»p$Å‚Ã Ã“Å‚Ä8Ã‰Ã‰@ÅÄ·EÅ‚Ã @Å‚Ä&<ÄƒÃÅ”ÃºFÄžÄº|ÄžÄ¸000000",
jungleTrapdoor: "0g0gbÃž>HÃ–iZÄ…Ä«YÄ¢mHÄš5ZÃ½ÄŒH000Ä©@Y(ÄªWPAYÃ–ÄŽY0h0100g02O>)>O>xjQRUBRUMi>@CÃÃ‘)x2)Ã“@Ã”Ã“>w2+Ã“Ã£Ã‘Ã“Ãw2@Ã“CÃÃ“Ã‘w3,,,Ã Ã Ã (5RÃ‚UB?Ã¡Ã€2RÃ“CÃÃ“)w2QÃ“Ã£Ã‘Ã“Qw2QC@Ã‘ÃQwi)QARQ>xi)G)QGOw2AEÄÄ‘Ã­Rw0g0gh01g",
ironTrapdoor: "0g0g8ÄšÄ²WÄ¢Å’YÄªcWÄº;ZÄ¾Ã‹H00WÅ†Ã©ZÅŽÄ†H4Ã¼JPi]%ÄžÅƒÃ¶ÄžÅ€$ÄŒÄ‹Ã’Bp%Ã‰ÃÃ—Å‚p|Ã‰ÃÃ—Å‚q|Ã‰Ã Ã—Å‚Ä‚|Ä°Ä¤Ã·ÃœÅÃÄžÅ‹ÃºÄžÅ‰ÃÄžÅ‹ÃºÄžÅ‰{ÄŒÄŒÃ¯Bq|Ã‰ÃÃ—Å‚q%Ã‰ÃÃ—Å‚q%Ã‰Ã Ã—Å‚Ä%Ä´Å¢Ã›|Å€%ÄžÅƒÃ¶ÄžÅ€4JJPi]",
darkOakTrapdoor: "0g0g8]Ä¨HÃ€Ä¸YSÄ‰WEKZ(Ã«Z;Ä‰WÃžyHÃŽ2H0JTw009ÄžÅˆFÄžÅ‡eÅ‚ÃžeÅ‚ÃeÃ«(eÃ«Mg0Ãžg0ÃžgiÃž(iÃžjÅ¤Ä¡OÅ¤Ä 4Ã­PwJ80JT0iS9ÄžÅˆ9ÄžÅˆeÅ‚Ã&Å‚ÃžeÃ«M&Ã«Mg0Ãž(0ÃžgiÃž(iÃjÅ¤Ä OÅ¤Ä 0iSAÃ¹0",
crimsonTrapdoor: "0g0g7ÃŠÄ«W]Ã»HXÅœYÃ¨ÅŒHÃº6WÃ•Ä»Y0004J9wÃ¹PFÄ­ÄŠJQÄ·$a0mÃ¬Ã‡8ÃšÄžÅ‚Ã™pEÃ¬TAÃ«Ã†%FA^QÄ·(Ã«PyÃ«ÃgÃšÄžÅ‚Ã™pEÃšÄžÅ‚Ã™pEJ8Äœ2KdÄ‘AÃžÄŒÅˆ$Ã«EAiÃŽEÃšÄžÅ‚Ã™gEa5ÄœÃ€waQÅ‹JPo4J14Ã¹1",
birchTrapdoor: "0g0geÄ†CWÄŽÃ„HÄ¾8HÄ¾EZÅ‚^WÅ–Ä•ZÅžÄ´ZÅ–Ä…HZÅ…HÅŠÃ—ZÄ¢ÄHQÄ™HÃ†Å˜ZÃ–yW1h01h1hg2OOyOOyxj000000Mj?Ã“Ã„Ã”Ã“Ã€Mj@Ã•Ã¤Ã¯Ã°KMiÃ¿VGÃ¢GÃM2Ã¾Ã°Ã£Ã±Ã•KM3@IÃ†Ã±IKx3Ã¾Ã°Ã†Ã”Ã•KwjÃ½Ã…GVGÃ€MjÃ¾Ã°Ã†Ã¯Ã•K(jÃ¾Ã•Ã¤Ã±Ã°K(3Ã½ÃQÄÃ¾Ã€w3PÃ¼yyÄŒSx2OyÄ¤Å‚yO(0hg01hg1",
acaciaTrapdoor: "0g0gaÃ²iYÄRYÄ•Ã WÄ¡Ä‹YÃ¶NY000Ä°Ä«WÃ?WÃžÄ®W)ÄºH000000001izOOONw4QN4>wQ(1VÃ5Ã„wV(1VÃ5Ã„wV(1VÃ5Ã„wV(1VÃ5Ã„wV(1VÃ5Ã„wV(1VÃ?Ã„AV(1VÃ?Ã„AV(1VÃ?Ã„AV(1VÃ?Ã„AV(1VÃ?Ã„AV(2zÃy+NzK1+,IIÃ Ãg009GGÃ¹00",
bedplanks: "0g0g7Ä¢VZÄ–*HÄ©Ã£WÃ½Ä»WÄ†kZÃ©Ã®HÃ’RZ4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
bedbottom: "0g0g4Ä”ÄŠWÄœÄ©YÄˆJWÄ¤ÅŠWhVÄ‰Å¥gEnÅ¥llZÅ¤7ZÅœÃ¡Ã¯VVUÃ¯VÃ€kÄ‰VV7xVÃ„7]VUÃ±Ä§lVfÄ¸1VvÅŸVU<Ã£lSÃ¼WZÃ‚Ã«Ã¯SgÃ‚ÄV5!",
bedtop: "0g0gdÅ‚Ã©ZÅ–Ä¦ZÄ®|WÄªcWZZZÄ’Ä²WÃ•TWÃ¹Ã­WXÃŽYÄˆJWÄ¤ÅŠWÄœÄ©YÄ”ÄŠW0h0yy0h01zOOOONghN1hhgzhh(kQQT3hgMQQQQj10MQQQQj02N1hhgzwVVVVVVVVÃ“Ã“Ã“Ã“Ã“Ã“Ã“Ã“GGGÃ¤IIÃ¥Ã¿ÄÄGGGÃ¥Ä’ÄÄ¢Ä’Ä“ÄÄÄÃ¿GÄ¢Ä’Ä’Ä’Ä¡GGGIGGIIIIIÄ³ÄÄÄ³Ä°ÄÄ„Ä³Ä³Ä³Ä£Ä¤Ä³ÄÄ²Ä“",
bedlegs: "0g0g7ZZZÃ–ÃƒWÄ†kZÄÄ»WÄš*WÃ©Ã®ZÄ¦Ã“W0iÃƒK000iÃŽK000iÃƒK00&@Ã‰PÄ˜0Ä—Ã“Ã˜PÄ·0&@PAÃ¹0000000000000000000000000000000000000000000000000000000000000",
bedbottomsides: "0g0gbÃ¹Ã­WXÃŽYÄˆJWÃ•TWÄÄ»WÄš*WÄ¦Ã“WÃ–ÃƒWÃ©Ã®ZÄ†kZZZZ100yyyw1hhhg000hg0hhhhhhOOOOOOOOQUÃ„U?Ã„Ã“UGGGGGGÃ¤Pg2yyyw1hhg1hhhhghhg00000OOOOOOOO?Ã“Ã’U?Ã’?QÃ¼Ã±GGGGGGÄ’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’",
bedtopsides: "0g0ghÅ‚Ã©ZÅ–Ä¦ZÄ’Ä²WÃ•TWÃ¹Ã­WÄˆJWÄœÄ©YÃ¡ÃYÄ®|WXÃŽYÄÄ»WÄš*WÄ¦Ã“WÄ†kZÃ©Ã®ZÃ–ÃƒWZZZ02gX2paÃƒsÄS2gÃ¬2paÃ‚Ä„ÄŒRgXx2q]RÄ…FgXx8RoÄ­MÃµÃÃ‚Ä¿Ä­%Ã—Ã‚Ä¿Ä%^Ã—Ä„ÅžÄ¥Å–Ã§Å…ÅžÄ¥Å–F}RÃºzg2gX0FeRÄzi0gX8xeRgÃ®igXx8oÄ­MÃµÃgXx8RÃ‚Ã¾ÄÄ™Ã—Ã‚Ä½Ä­MÃ—Ã§Å…ÅžÄ¥Å–Ã§Å…ÅžÄ¡|Xx8RgXx8RgXx8RgXx8RgXx8RgXx8RgXx8RgXx8Rg",
bedfrontback: "0g0gfXÃŽYÃ¹Ã­WÄˆJWÃ•TWÃ™TWÄš*WÄÄ»WÄ¦Ã“WÃ©Ã®ZÃ–ÃƒWÅ‚Ã©ZÅ–Ä¦ZÄ®|WÄ’Ä²WZZZ01hiyyx000hhhh0000000000O)OOOOOOÃ„Ã’VÃ“Ã„VÃ„Ã’Ã£IÄÄÄÄIÃ”Ä’Ä£Ä£Ä£Ä£Ä£Ä£Ä’Ä±Ä’Ä£Ä£Ä£Ä£Ä’Ä”Ä³Ä±Ä’Ä’Ä’Ä’Ä”Ä³Å„Å„Å„Å„Å„Å„Å„Å„Ã„Ã’VÃ“Ã„VÃ„Ã’Ã£IÄÄÄÄIÃ”Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•Å•",
bedIcon: "0g0gb000ÃžÄ®WÃ0WÄ¦Å¢ZÅ–Ä¦ZÄ„Ã­WÃµ(ZÃ«0W;Ä¨YÃ–>WÄŠkZ0000000000001h000002zQg0002BÃ‚)T002CÃ“VzQg0CÃ’Ã“Ã’Ã‚)g2Ã’Ã„Ã“Ã“Ã”xÃ«2Ã’Ã“Ã“Ã”yFÃ«2CÃ“Ã”yyÃ²Ã«8yÃ”yyI8Ã«9Ã­yyI00008yI000000Ä0000000Ä€0000000I0000000000000",
respawnAnchorTop1: "0g0glUÅžZ$ÄŒWE7YwÃWÃ«&HsÃ‚WKqY00WA4HA4YA4W(5Z)6W$5Y{7H(6WE5WA3ZA4Z;6YA3Y0Q00S0010w8Ä­(XzoÄ©icÃŽ0Ä±Ã‚Ã¼ÄF^Ã‚Ã¼ÃhÃ³Ã Ä„ÅŽ.ÄµÃ Ã¼w0Ä±Ã Ä„ÅŽ.ÄµÃ Ã¼w0Ä±Ã Ä„ÅPÄµÃ Ã¼w0^Ã Ä…_Ã}Ã Ã¼Ã­0^Ã Ä‰FÃ Å‡Ã Ã¼K0Ä±Ã Ä’!Ã¼CÃ Ã¼Kg^Ã Ä†)ÄŒeÃ Ã¼K0Ä±Ã Ä„ÅÃºÄµÃ Ã¼w0^Ã Ä„ÅŽ.ÄµÃ Ã¼w0^Ã Ä„ÅŽ.ÄµÃ Ã¼Ä©gÄ±Ã‚Ã¼ÄF^Ã‚Ã¼K8Ä­TXzo@gÃµÃŽ0SK000Ã«08w",
respawnAnchorTop2: "0g0grUÅžZ$ÄŒWE7YwÃWÃ«&HsÃ‚WKqY00WA3ZA3HA4ZA4WE3WA4HA4Y$5H$5Y(5Z)6W(6W{7HE5W]7W;6Y-6HA3Y$5W0Q00S0010w8Ä­(XzoÄ©icÃŽ0Ä±Ã‚Ã¼ÄF^Ã‚Ã¼ÃhÃ³Ã Ä„ÅŽ.ÄµÃ Ã¼w0Ä±Ã Ä…9^Ã·Ã Ã¼w0Ä±Ã Ä•Ã¶Ã Å‡Ã Ã¼w0^Ã¡MÃžÃ¼CÅšÃ¼Ã­0^Ã¢ÄÄµÄŒÅ’ÃÃ¼K0Ä±Ã¢Ä•bVÃœÃ®Ã¼Kg^Ã¢ÄpÄ´Ã¢OÃ¼K0Ä±Ã Ä•Ã¶ÃƒÃ—Ã Ã¼w0^Ã Ä…Ä´Ä–Ã·Ã Ã¼w0^Ã Ä„ÅŽ.ÄµÃ Ã¼Ä©gÄ±Ã‚Ã¼ÄF^Ã‚Ã¼K8Ä­TXzo@gÃµÃŽ0SK000Ã«08w",
respawnAnchorTop3: "0g0gvUÅžZ$ÄŒWE7YwÃWÃ«&HsÃ‚WKqY00W-6HA4WA4H;6Y)6WA3ZA3HA4Z$5H(6WE3WA4Y$5YS6ZE5W(5Z{7H]7W(5YA3Y$5WS6YQ7W0Q00S0010w8Ä­(XzoÄ©icÃŽ0Ä±Ã‚Ã¼ÄF^Ã‚Ã¼ÃhÃ³Ã Ä…9Ã‚Ã·Ã Ã¼w0Ä±Ã¢Ä™Ä–Ã Å‡ÅŠÃ¼w0Ä±Ã¤ÄŽ^Ä„FÃƒÃ¼w0_Ã“Ä°,Ã’z7kÃ­0_Ã‘Ä’Ã Ä«ÃšÄ…kK0Ä±ÄœÄÄ‘Ã©Ã¾Ã²Ã¼Kg_UÄ¡Ä£Å„Ä¡rÃ¼K0Ä±ÃªÄŽ^Ã¦Ä•ÃƒÃ¼w0^Ã¢Ä½Ã—ÄŸ;ÄªÃ¼w0^Ã Ä…Ã£ÄŸÃ·Ã Ã¼Ä©gÄ±Ã‚Ã¼ÄF^Ã‚Ã¼K8Ä­TXzo@gÃµÃŽ0SK000Ã«08w",
respawnAnchorTop: "0g0gvUÅžZ$ÄŒWE7YwÃWÃ«&HsÃ‚WKqYA3HA4ZS6Z-6HA4WA4HA3Y$5HQ7W;6Y)6WA3Z$5W(6WE3WA4Y$5YE5W(5Z{7H]7W(5YS6Y$6Y0Q00S0010w8Ä­(XzoÄ©icÃŽ0Ä±Ã‚Ã¼ÄF^Ã‚Ã¼ÃhÃ³Ã¡B_ÃqÅŽÃ¼w0Ä±I@[/sÃ¥Ã¼w0Ä±Ä‚&Ä”Ä›Ä–Äkw0_Ã²VÃ¥Ã¶ÅÅŠÃ¼Ã­0_Ã¯ÄšÄ½Ä¼MÄ¦kK0Ä²5Ä–_@wÄ“kKg^Ã½Ä†|Ã›D{Ã¼K0Ä±ÄµÄ–Ä”>(Ä‚kw0^Ä¿CÄ³Ä«Å†pkw0^Ä¬ÄŽoÄªÅ£Ä›Ã¼Ä©gÄ±Ã‚Ã¼ÄF^Ã‚Ã¼K8Ä­TXzo@gÃµÃŽ0SK000Ã«08w",
respawnAnchorTopOff: "0g0g8UÅžZ$ÄŒWE7YwÃWÃ«&HsÃ‚WKqY40Y50g048%Äš_Ã™Ä€Å€eÅ‚ÃšÄžÅ‚ÃˆÃˆZZZZ]eZZZZ]eZZZZ]6ZZZZÃ6ZZZZÃ†eZZZZÃ†@ZZZZÃ†eZZZZ]6ZZZZ]6ZZZZÃŸ}Å‚ÃšÄžÅ‚Ã†%Ä­_Ã’JÅ€4K080I",
respawnAnchorSide3: "0g0ghUÅžZ]ÅWE7YKqY$ÄŒWwÃWsÃ‚WÅ¢Ã”HÄµlHZZZZÄ´Y40Y00WgMZAÃ Z-Ã½HÃ«&H0Sw018Ä©0ÃµwxQggÄ­MI14ÄŒFRgÄ€Ä­MÃµgXÄ9RikÄ®TÃ³SXÄ‰8^RÃ¼ÅÃ‚aÃ‚kx9mÃ‚ÄÃ˜/cÃ‚Ä”Ã¬ÃˆÄ½Ä›o#S{Ã’Ä•Ã˜92lÄ€Ã¬9cÄ˜XÃ¬ÃaSÄ€w0]i*Ä•jQRoXxcR)RÃ•XÃ)Ä­MÄ‚Ä­Ã²Ã·ÃÃ„CÃ²ÃšÃ‰Å…ÅÄœÃÃ‰Å…Ä½SÃÃ Å‡ÄžÃ¶Ä“Ã Ä‚Ä %Ã¶j[8MÄ²ÃÃ¾+Ä•Ä²Ã†ÅÄ¨Ä™Ã´Ã—Ä¿+%Ä–Ã•Ã¾ÄÃ²Ã˜",
respawnAnchorSide1: "0g0gfUÅžZ]ÅWE7YKqY$ÄŒWwÃWsÃ‚WÅ¢Ã”H40YZZZ00WgMZAÃ Z-Ã½HÃ«&H1201jgjg?x4Ã“Ã“SxUVhmÃ“Ã“ÃŽhVlh?Ã”Ã°UhÃhUVÃ¥IV?hkÃ¯Ã„IIÃ’Ã†TIIÃ“oÃ¬Ã“IIkhÃ°TkÃ•hTÄ’Umg1T_Ä£#A@QQÃ‘_yÄšB#Ã“Ã“Ä¢ÄšÄ”Ä“Ã­ÄšÃ´Ã¶ÅƒÄ£NÃ¶Å‚Ä–NÄ´ÅÄ›Ä Ä³Ä ÅÄ“#=Å‘Ä¯Ä”Ã®Ä Ä¯Ã®Ä¢/ÄÄ Ä‹ÄÄ¤ÄšIÃ­I",
respawnAnchorBottom: "0g0g840Y00WE7YgMZ-Ã½HAÃ ZKqYÃ«&H4Ã¼oNÃ¬Ã’4NÃºÃµÃ˜oC^?Ä•Åž]Ã‚ÄŸÃ fÃºÃº*)ÄžÅ£Ã«(ÃœÅ‰Ä§qÃ€hÅƒ:y6Ä„^5Ä­Å¥QÅŠFCVÅ„Ä“qÅ‚~nÅœÃ(Å™Ã–Ã›20Ã¿Ã¶$DÃ®iÃ„Ä¹iNÄƒÄ›6Ä€ÄÃµbÃœAÃ•)Ã“EpÃ¼]KÅ‰tÃ•0Ã«",
respawnAnchorSide4: "0g0ghUÅžZ]ÅWE7YKqY$ÄŒWwÃWsÃ‚WÅ¢Ã”HÄµlHZZZZÄ´Y40Y00WgMZAÃ Z-Ã½HÃ«&H0Sw018Ä©0ÃµwxQggÄ­MI14ÄŒFRgÄ€Ä­MÃµgXÄ9RikÄ®TÃ³SXÄ‰8^RÃ¼ÅÃ‚aÃ‚kx9mÃ‚Äa/cÃ‚Ä”Ã¬ÃˆÄ½Ä›oES{Ã’Ä•Ã˜92lÄ€Ã¬9cÄ˜XÃ¬ÃaSÄ€w0]i*Ä•jQRoXxcR)RÃ•XÃ)Ä­MÄ‚Ä­Ã²Ã·ÃÃ„CÃ²ÃšÃ‰Å…ÅÄœÃÃ‰Å…Ä½SÃÃ Å‡ÄžÃ¶Ä“Ã Ä‚Ä %Ã¶j[8MÄ²ÃÃ¾+Ä•Ä²Ã†ÅÄ¨Ä™Ã´Ã—Ä¿+%Ä–Ã•Ã¾ÄÃ²Ã˜",
respawnAnchorSide2: "0g0ghUÅžZ]ÅWE7YKqY$ÄŒWwÃWsÃ‚WÅ¢Ã”HÄµlHZZZZÄ´Y40Y00WgMZAÃ Z-Ã½HÃ«&H0Sw018Ä©0ÃµwxQggÄ­MI14ÄŒFRgÄ€Ä­MÃµgXÄ9RikÄ®TÃ³SXÄ‰8^RÃ¼ÅÃ‚aÃ‚kx9mÃ‚ÄÃ˜ÃˆÄ³Ã‚Ä”Ã¬ÃˆÄ½Ä›o#Ã†{Ã’Ä•Ã˜92lÄ€Ã¬9cÄ˜XÃ¬ÃaSÄ€w0]i*Ä•jQRoXxcR)RÃ•XÃ)Ä­MÄ‚Ä­Ã²Ã·ÃÃ„CÃ²ÃšÃ‰Å…ÅÄœÃÃ‰Å…Ä½SÃÃ Å‡ÄžÃ¶Ä“Ã Ä‚Ä %Ã¶j[8MÄ²ÃÃ¾+Ä•Ä²Ã†ÅÄ¨Ä™Ã´Ã—Ä¿+%Ä–Ã•Ã¾ÄÃ²Ã˜",
respawnAnchorSide0: "0g0gdUÅžZ]ÅWE7YKqY$ÄŒWwÃWsÃ‚W40Y00WgMZAÃ Z-Ã½HÃ«&H1201jgjg?x4Ã“Ã“SxUVhmÃ“Ã“ÃŽhVlh?Ã”Ã£UhÃhUVGGV?hkÃ¢Ã„GGÃ’Ã…TGGÃ“nÃžÃ“GGkhÃ£TkÃ”hTIUmg1TPÄFA@QQÃ‘PyJBFÃ“Ã“Ä€JÃ³Ã²ÃŸJÃ¥Ã§Ä¢ÄNÃ§Ä¡ÃµNÄ“Ä®Ã»Ã¿Ä’Ã¿Ä®Ã²F;Ä¯ÄÃ³Ã Ã¿ÄÃ Ä€-Ã±Ã¿Ã®Ã±Ä‚JGÃŸG",
flintAndSteel: "0g0gc000?kHÄ¢Å’YÄ†Ã¥Z(ÄªWÃžÄ®WkÃHVVHEÄŠY4gHÃ©ÅžZÄ’Ä’Y0000000000h0000001yg00000i)U00000iSQ00000jg000000jg000000lgk06000?M)0Ã”K004ÃƒS6XÃ¹000Q0Ã‘Ã¦Ã²00006XÄ Ã–00006Ã¦Ã°Ã•Ã¹0006Ã¡Ã•[Ã¹0000Ä€Ã–Ä000009Ã¹00",
oakSapling: "0g0g9000RNZÃ„Ä›ZtÃºYhTWÃ©Ã®YÃžRZÃ†Å˜Z{Ä¨H000000000000010000020O0000Si0?Ã‘000Ã“MQÃ„G00xzK@Ã”N002mÃ…6Kxw000Ã“Ã°02w003@x4(007Ã”Ni+Ã¤00j+Ã£Ã†Ã”Ã®g1h7CÃ•Ã¤1g002jÃŽw0g001EÃg000007Ã•w000007Ã¤000",
cryingObsidian: "0g0g840Y00WE7YgMZ-Ã½HAÃ ZKqYÃ«&H4Ã¼oNÃ¬Ã’4NÃºÃµÃ˜oC^?Ä•Åž]Ã‚ÄŸÃ fÃºÃº*)ÄžÅ£Ã«(ÃœÅ‰Ä§qÃ€hÅƒ:y6Ä„^5Ä­Å¥QÅŠFCVÅ„Ä“qÅ‚~nÅœÃ(Å™Ã–Ã›20Ã¿Ã¶$DÃ®iÃ„Ä¹iNÄƒÄ›6Ä€ÄÃµbÃœAÃ•)Ã“EpÃ¼]KÅ‰tÃ•0Ã«",
netherGoldOre: "0g0gcÃ€ÃHUÃ­WÃ€ÃŽYÃ‘ÄŠYÃÄªWSÃHÄ™1HÅ¡ÄšYÃ¯4WZÄœYZÅ¢HÄ¬ÃºZ12NQOÃƒ)MjMBzR5Ow>>Ã“2MÃN)X.Äk)Äƒ3z][Ã»]Ã®QAM4MÄœIQ:O>3RU)>!Ã¼XT5z>Ã§_Ã IN)NCOQ()zPÄ‹Ã‚))S2k)Ã Ã‚]QCÃ‚+ANbA(Ã”i3>A/J4)(k)]PÃ§j]SzQÃ®xC))Oy)R)lzQO",
potDirt: "0g0g7Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÃ°oHÃšÄžZÃ¢Ã‘H4ÄŒ9PÄŒg?ÄŒÃSÄˆÃ‰9(J9CÄ©)yÄ·BkaEÃ°Ã‚%UÃˆ{Ã¼Ã‰Ã–)Ã¹9EÃ¹84Ã]2Ã‚$Ã¼Ã²FkÃƒQÄŒÄ‚?ÄŒÅPwh?0Ã¬KNÃFihÄŒÄŽÃƒ{ÄŠRPAÃ«?$Ã²{)9FXÄº1kÃ²EiÄŠByÃƒ",
flowerPot: "0g0g6000Ã¬zYÃ²OYÃ¥3HÃ¡ÅšWÃ‘Å‰Z00000000000000000000000000000000Ã‚ÃŸÃ«000Ã«20000Ã«20000Ã«20000Ã«1Ã«000Ã²Ã’Ã«000ÄMÃ«000Ã´Ã·Ã«000Ã²ÃŸÃ«000Ã´NÃ«000Ä„JÃ«0",
acaciaSapling: "0g0g7000Ã£MZÃ’Å˜HÃªÃWÃ©ÃžWÃ¶Ä™ZÃ–(Y000w00041Ã‘000CÄ¨Ã¬Äˆ01NÅƒÃ²Ä»00#|Ã·Ã„Ã«05ÃŽÃ¦Ä·007bÃ‚k00iÅÄ¸ÄœÃ«02Ä•JÄˆ001Ã‘Ä¡0001bÄ€Ã¹00iÄ™Ã‡0002ÄŠÅ0000BÄƒ0000BÄ€0000)Ä¿00",
birchSapling: "0g0g7000Ã‡ÅšWÃ›Ã YÄ–ÅWÄ²ÃˆHÃÄ¹ZÅŠÃ§Y000w00002S00001Ã‘Ã«000IÃ½w000ÃºÃ¶y004Ä…Ä¹Ã¹004cÄ´Ä¹000aÄ”ÄŠ000Ã‚Ã¶CÃ«02Ã½Ã¡Ä¢Ã«03ÃƒÅÃ€S0AÅÅ€w004iÄ·w000a@Ã«0003)00003Ã•00",
blueOrchidPot: "0g0g8000LWZ!ZZCÄ—Hu|H^NYÃ„ÄŠZlÅ—H00000000000000000000000000a00000ÄºÃ«0Ä§00ÅŒK6Ã¹00C0b0000ÄˆK00-0Ã®001ÄQÃ–Ã«00S(Q0000&Ã«00007Äˆ00000Ä¤00000Å‡00",
crimsonRootsPot: "0g0g7000Ã¨iÄ§Ã¹jSÃ‘iHÃ¹jHÄ”TZÃ€iY0000000000000Ã«00000g000004Ä§Ã(00aoÃÃ«00bKKÃ€001EÃ¬Ã«008Å•Ã­0007Ã™ÃŽÄ§00dÃ†Ã·Å‡001(ÄŠÃ«000wÄŠ0000rÃ¬Ã«009Ä†fS009Ã°oK0",
darkOakSapling: "0g0g9000RNZtÃºYhTWÃ„Ä›Z{Ä¨HÃ†Å˜ZÃžRZÃ©Ã®Y0000000000000000000001w003xg0M3000kzkzi00MBÃ‚R+>003ÃƒxzÃ(0002ONCÃ’000j+y*Ã‚003(Ã“ÃV)g003iÃ“Ãƒ0000kDÃ”Ã€0000*Ã¤GK00000Ã¤Ã£Ã€00000Ã•Ã”Ã…00006Ã”Ã’Ã“00",
jungleSapling: "0g0g9000+2W%Ä™YFwZ$Ä§Y(Ä·Y-Å—ZwÃ¹HoÃH00000000001w(000002jR(00004*Ti0000xQ>T00003m)300000Ã„z00002)Ãk(0000hMMw0000wCÃƒQ000005Ã‘x00000NÃ300000>ÃŽ000002mR(00000CÃƒ000003[X(00",
spruceSapling: "0g0g7000wÄ¹WgwW%yZ.ÃY$ÃYÃ€Ä¸Y00000000100000aw0000qÃ«0001t$0002ÄµQÃ«001Ä‘ÃŸÃ«001Ã‰Ng008Å€&0006ÃŠAÃ«001Ã‘Ä­(00buÄ™Ä§00m}Äš8000Å€BÄ˜000dwÃ«0002S00",
warpedRootsPot: "0g0g5000mÄ¿HiÃ•HlÅŸHlÃ¯Y000000001E00001E00002ÃiÃ«0Ã¼0Ã«iÄ§0Ã¾8K,01Ä hS800Sq1)00EÄªÃŽÃ«0010ÃŽÃ«000Ä§TÃ«000Ä·@0000o80000Å‡Ã™00010ÃŸ00014Ã­00",
smoothBasalt: "0g0g6|AZ-Å‹YÃ‹Ã¢Z(ÄªZÃ–ÄŽYoÃ»W5yS02Ã‚x0]]ÄžS5Ã­Ä©Tm2SÄši^Ã‚i0Ã­Ã‚ÃºÄ¹Ã¹$mR}Äš0Ã™N0&Ã¼9ÄŒXI%XÃ»wA14AÃ¯1AÃ»Ã™ÄŒ9E4Ã¬Ã’Ã¹Ã¬4BgÃ™XÃ¹%]Ã‰wÄŒÃ¹wnÃ˜E4Ã«SÄ£Ã‡]AÃ­]Ã­Ä¿SwÃ‚",
crackedNetherBricks: "0g0g8oMW;ÃŸHQJYwTHEÃY(ÃŽZ-ÃŽZ8gH000000BmÃ‚XÃ¾Ä‘ÄšÅˆÄÄ½Å‡?Ä [Ã•ÄžÄ®Ã•0+Ä§0+Ä§Ã’zÅ›Ã”s}7ÃÃšaÅ‚AÃ¦Å†Ã‘Ã¦Ä°AÃ™00c03Å€ÅœÃ®Å˜Ä–uÄœb[Ä¿ÃŽ@Ã½Å–ÃŒÄÅ¢ÃŒdÄ˜Å‚dÄ˜Å‚Ä´Ã”JÄ½Ã„Å¥Ä–Ä¸Ä•Ã¾Ä¨Ä¼ÄÄ¨Ã™JÃÄ•",
polishedBlackstone: "0g0g6|BH;Å‹H(Ä›HkMWAÃ¬ZsTY0Ã«840^5ih]ÄŠÃ»EiJIÃ­V1iÃºFkÃ’0ÄÄŠEÄÄŠ82^IÃ­Ã‚BiÃºFkÃx2U4Ä¬B0XÃ‘B?bBk9Ã‚AÃ¶4iÃÃ¼Ä€{8ÄŠÃºÃ€Ä‘U5AÃ³M^Ã½8ÄƒiFq|EÄÄŒÃ¾ÄŒUÃ‚P$JP$",
chiseledNetherBricks: "0g0g7QJY(ÃŽZ;ÃŸH-ÃŽZEÃYoMWwTH0229238EpAÄÃ½gÄ Ã²AÄd{Å‚ÃšÄžÅd,UÄ‚?Ä•Ä•QÄ·jPcÄ…QÄ¹Ã³BsdcÄ»Ã‚ScÄ´:VÄšÃ‰#ÃšcÄ·h]ÃµdQÄ¹ÅÅ€Ä‚dQÄ·Ã²SaÄ´:Ã˜ÄžÄžÅ‚ÄTÄ¤Ä§0ctQÄ‚Ä°%Ä‚Ã‹Ã§Ã˜ÄžÅ‚Ã˜Ä",
oakLogSW: "0g0g6Ã‹yYÃ¢ÃHÃºÄ«W-Ä‰Y{Å™HÄÅ‹Y02PAJ]AÄŒJ|Ä§PQÄw4JÃ‚JRPPÃ‚Ã‘^M8i,xAJJ]JPÃ›090gAAÄƒÃAÅÃ²w1a?ÄŸsÃ„JS0Ã¼Ã‚ÃšÄ®1A0PAJJAÃ¼Ãµw0PÄyÃ‚UjzÃÃ»AÃºÄ PXÄ¯PAÄŒÃ«AÄƒÃ‚",
acaciaLogSW: "0g0g6Ã‡UZÃ–Ã¯YÃ¥Ä­YÃAWÃ‡QYÃ·nH02PAJ]AÄŒJ|Ä§PQÄw4JÃ‚JRPPÃ‚Ã‘^M8i,xAJJ]JPÃ›090gAAÄƒÃAÅÃ²w1a?ÄŸsÃ„JS0Ã¼Ã‚ÃšÄ®1A0PAJJAÃ¼Ãµw0PÄyÃ‚UjzÃÃ»AÃºÄ PXÄ¯PAÄŒÃ«AÄƒÃ‚",
birchLogSW: "0g0g8ÅšÄ¦YZZZÄ¦Å¡Z)Ä¹YÅ‚Ã™ZÃŽÃ¢HÅ†|HÅ–ÄµY0Ã¼Ä»w@ÅgÄ±Å‡(Ã³Å“Ä€pHÅ—Ã¼Ä»Ä‚h7zpKoj6zH$gjcCvÄ”Ä§8cAjÃ°X_9Å‹h84Ä¾Ã¬Å£g94:Ä™;IP2:M;Ä€ÃŽÃ®UxoÃ¹KÃ®F1Ä€Ã¹BÄ§Ä¨4Ã«o$oÃºÃ„6cÄ„gÄÃ™C{Ä¿",
darkOakLogSW: "0g0g6(ÃºH;Ä¨Z]ÅˆZEÃ¬W(ÃºWÃ‡iY02PAJ]AÄŒJ|Ä§PQÄw4JÃ‚JRPPÃ‚Ã‘^M8i,xAJJ]JPÃ›090gAAÄƒÃAÅÃ²w1a?ÄŸsÃ„JS0Ã¼Ã‚ÃšÄ®1A0PAJJAÃ¼Ãµw0PÄyÃ‚UjzÃÃ»AÃºÄ PXÄ¯PAÄŒÃ«AÄƒÃ‚",
jungleLogSW: "0g0g9Ã‡hYSÄ¸WÃ–NW;Ä¨WÃ¢JHÃ€Å˜HÃ©ÃŸHVMYÃŽÃW1w3w3Ri51Ã’Ã Ã’3Ã­g53l>Ã’1Ã¬g5z5Ã¬55Ã gBx5Ã 5Ã’51wwg11Ã’xÃžgÃ€lhÃ€xwÃžwÃ€(nÃ‚MB5wÃ+oÃ‚nBB5Ã€m7Ã€oxw*Ã€Ã­5341D*1R53Ã•3Ã”hÃŽÃBzÃ’38gKgw1BÃ¬7iwi0z1Ã¬l20igx1Si0",
spruceLogSW: "0g0g6$ÃY-ÃºW{Ä¨H$Ã€Y(ÃYUÅˆZ02PAJ]AÄŒJ|Ä§PQÄw4JÃ‚JRPPÃ‚Ã‘^M8i,xAJJ]JPÃ›090gAAÄƒÃAÅÃ²w1a?ÄŸsÃ„JS0Ã¼Ã‚ÃšÄ®1A0PAJJAÃ¼Ãµw0PÄyÃ‚UjzÃÃ»AÃºÄ PXÄ¯PAÄŒÃ«AÄƒÃ‚",
crimsonStemSW: "0g0g8QÃ®WÃ€ÃŽWÃ¼ÃH]Ã»HUÄ›ZI(ZÃ¤0WÄ˜JH0ÄŠÃ‰Ãµj]CÄ_ÃºÃ«ÃÄ Ä‚Ã–5Ã®Ä´4Å‰eÄ¿Ä»Ã†Ã™-Äµ:gÅ€e@ÃžKÅ‰aAjÃµÃ”Ã™Ã…^ÅƒÃ‘oÃ®PCJÅŠ-]Ä§Ä¿Ã±oÄ­@eÃšÃ­Ã£&MÄ˜KÄ…Ã²ci>ÅÅ‰Ã)Ã¶PD.A1+Ã—2Ã±ObÃ¾Ä¯0Å™dÄŒÄ’S",
warpedStemSW: "0g0g8QÃ®WQÄZi6H]Ã»HUÄ›ZhÄžYlÃ¯YmÃ„Z0ÄŠÃ‰Ãµj]CÄ_ÃºÃ«ÃÄ Ä‚Ã–5Ã®Ä´4Å‰eÄ¿Ä»Ã†Ã™-Äµ:gÅ€e@ÃžKÅ‰aAjÃµÃ”Ã™Ã…^ÅƒÃ‘oÃ®PCJÅŠ-]Ä§Ä¿Ã±oÄ­@eÃšÃ­Ã£&MÄ˜KÄ…Ã²ci>ÅÅ‰Ã)Ã¶PD.A1+Ã—2Ã±ObÃ¾Ä¯0Å™dÄŒÄ’S",
basaltSideSW: "0g0g5|AZ-Å‹YÃ‹Ã¢Z(ÄªZoÃ»W42T9+SÃ‘989yR0Ã¹Å‚A0Ã¹0(0Ã·R9Py_Ã•w]022PA2PwÃ¹P0oP0i]mÄ©PyS9yi1w]PwÃ‚PAhw080wÃ²9AÃ‚c4Ã»SAÄ§%Ã«Ä¿008ÃºÄ¯Å‚1Ä˜4eRÃ‰ÃšÄ˜Ä¿",
polishedBasaltSideSW: "0g0g6(ÄªZ-Å‹YoÃ»W|AZÃ‹Ã¢ZÃ¢Ä¾H4JS9w1AÃ¾Ä°A2Å‚J@Å‚ÃšÄžÅƒÃ¶Ä°AÄž[AÃ›Å‚Ã‘ÃŸÃ‰Ã™ÃŸÃ‰ÃšÄžÅ€AÃ¾Å‚Ã‰Ã¾Å‚ÃšJPBÄžÅ‚Ã‘ÄžÅ‚ÃšÄžÅ‚ÃšÃ›Ã‡%J@Å‚Ã¾Å‚ÃšÄžÅ‚Ã™JÃ‰rÃ›PAÄžÅ€zÄžÄ²ÃšÃšÄžÅ‚Ã›PAAÄš]0mÅ‚90SP0P",
crimsonPlanks: "0g0g7Ã¨ÅŒHÃ•Ä»YXÅœY]Ã»HÃŠÄ«WQÃ®W;ÃŸZ4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
deadBush: "0g0g5000Ã€Å™HÃ½JYÃ’RZÄ™ÅŠH0000g00401Ã¹0040ÃŽÃ«006Ã«QÃ«000Ä·Ã‘g000Å‰w000JqÃ•0]0mÄ©Ãµ)S00ÃˆÃ¯(000b]Ã«0001]0002Ä§{Ã«000Ã‰Ã™0000pÃ™+0001Ã’Ã¹0001A00",
chainIcon: "0g0g4000AÄ›ZP@H<lW000004S006S0030009Ä§00cS004S006S0030001000dÄ§00cS004S006Ä§003000000",
lanternIcon: "0g0ga000<lWP@HÃ²>WÃ¬2WÄ¨Ã­WÅ™QYÅ¢CHZÅ¤HZÅŸY000000000000g0000001w0000002g00000010000000ix000000)>000001yyg00004Ã„Ã’S00003Ã”Ã£(00003Ã¤Ã¿(00003Ã¥Ã±(00004Ã”Ã£S00001yyg000000000000000000",
soulLanternIcon: "0g0g8000<lWP@H2Ã‡Y#$ZGÄ¶HZZZÄ¶ZZ000000000w00001S00002w0000100000aQ0000hE0000Ã‚]Ã«000ÃŠÃµÃ«000ÄÄ™0000Ä–Åœ0000Ä—Ä¼0000Ã’Ä˜Ã«000Ã‚]Ã«0000000000000",
coal: "0g0ga000sÃžZ$ÄšZ(ÄªWAJH)ÄºH-Å›HAÃŸHgTHsÃ‚W0000000000000000001hg00000iOx00001?ÃQg0001UNNT0001G?Ã’)g00kAÃ¡VA-00iÃRy[]00kyAQDGÃ«0kQÃ¡DPPÃ«0pÃ¡GGÃ¥Ã¥Ã«08ÄÃ¡Ã¿Ã¥Ä€000Ã²ÄÄ€IÃ«0008IÃ«00000000000",
stick: "0g0g8000?kS]Ä¸HEÃYÃ²JHÃ–MZÃ¾Ã‡S)ÄºS00000000000]00002Ä€0000lo0000ÄÄ§0005Ã„0000!(0001VÃ«000aÃµ0000VK0000Ä‹00005ÃŒÅ‡000EÅÅ‡001@W0001Ä˜0000000000",
emerald: "0g0gb0001SWÅ‚Å¥Y>Ä¯HnÃ£WÄ—Å£Z2ÄŠZ0Ä˜W2Ã‚YÃ®ÅZ1ÅˆY0000000000000000000hh000001z)g0000iÃƒ+[0001BÃƒ+Ã‘Ã001U?Ã„Ã°Ã001U?Ã¾ÄŽÃ001U?Ã¾ÄŽÃ001UPÃ¾ÄŒÃ001UP/XÃ000mÃ³ÄÃ¿00001Ã•ÄŒÃ00000GG0000000000000000000",
lapisLazuli: "0g0g8000oÅŸZ4Ã¾Wt^YÃˆeW*Ã¨WÃ£ÃŒYh8Y000000000000001AÄˆ000bJÄœ000Ã™Ä¼ÅÃ«03Ã’Ã¸Ä¢Ã«03Ä‹Ä—Ä¿Ã«03CÃªÄ¿Ã«0qÅŒÅÄ«00Å„vÄ™Äœ00Å Ã§ÄÄˆ01ÃÅ“Ä•001:q]000AÃ¹000000000000000",
diamond: "0g0gb000hÄ®YZZZÄ¾ZH_Ä¥YÄ‹Å•YzrHlÃ¢WqÄ’HuPYLÃ¶Y0000000000000000000hh000001yzg0000iQÃƒÃ”0001AV*@Ã001AzzQÃ00iRQVÃ°Ã±00i>?VÃ¾Ã±00iCVUÄ€Ã±00jQIIÃ“Ã¿007]Ã“Ã“Ã°Ã007ÄÃ“Ã“Ã¯Ã000Ã¥QVÃ”00007GGÃ0000000000",
goldIngot: "0g0g9000Ä™ÃºWÅ¢UYZÄ¼ZÃ¡ÄˆWZÅ¥WÅ…ÃWÅ‘Ä¨HZZZ000000000000000000000h000001hyg000hjOOM01hzOOONSlOOOOOV)iÃƒOO*V+Ai*OVÃƒÃ£Ã“AiNÃ¯,Ã“Ã“ÃŸAnN,Ã“Ã“ÃŸAS1ÃŸ,Ã“GQS00nDÃ¡Q00001kS00000000000000000000",
ironIngot: "0g0g9000Ã‹Ã¢ZÄ’Ä’YÃžÄ®WÅ‚ÃšYZZZ)ÄºHÃ­8WÃ‡Ã’Y000000000000000000000h000001hy(000hiQQz01hAQQQR(lQQQQQV>iUQQ?V>CiBQVUÃ ,CiyV[OOyCny[OOyÃ£K1ÃŸ[OGÃ“K00nDÃ°Ã“00001mK00000000000000000000",
copperIngot: "0g0g9000Ä…iYÄ¨ÃHÃ²2YÅŒÅœHÄ…OWÅ¥Ã•WÃ™Ä¹WÅ¢bH000000000000000000000h000001hy(000hkBÃ‚>01hARVAR(mAQBÃ‚QÃ“>kÃ‘Ry@Ã“BÃ…kCQÃ“Ã‘yÃƒÃ…kÃ‚Ã°BÃ‚BODkVÃVyÃƒÃ…Ã1BÃ’Ã‚BGÃ00l?DG00001nÃ00000000000000000000",
rawIron: "0g0g9000VOYÅÄ¡WZÃ¨YÅ’#WZÅ…Z-Ä¹YÄ–,HÃ²Ä¼H000000000hhg00001z)xh0001**)Nhg0kVÃƒÃƒÃƒ)x0kAVO>RRgÃ‘GRGIÃŸÃŸgÃÃ±DGÃ¬oGgÃIDÃ¤hhoKÃ”IÃ¬hjUGKÃ”Ã¤Ã¬hQ>DÃ°6Ã¤IÃ“Ã¡RÃ¬m0Ã“Ã“0Ã”GÃ¬m00006GhK00000Ã“Ã“000000000",
rawGold: "0g0g8000Ä™ÃºWÅ‰SHÅžjWZÅ€ZÅ¢ÄŠZZZZÃšhY000000000000009AJ002ÃƒÃŸÄŒS0kÅ’ÄÄœI0Ä´Ã‹Ä•Ä½ÅŸ7Ãš+JÄœÄ 7Ã–AÄ•)Ã¤6Ä±Å’Ã–yÃ¤tÃ…Ã‰P:vt!Å&Ä³Ä¾3ÄœÃº%ÄŒÃ¸3ÄŽÃ²ÅÄœ~0Ã¡Ã¸tiÃ¤0fÅŸ3ZÄ§000000",
rawCopper: "0g0gh000FUHIÅ™H},Y.Ä½WÃ½Ä›ZÅÅŒWÅ¥Ã•WÄ°Ã H}ÅYZbHÃ™Ä¹WÃ±ÃµHÄ²Å•ZÄyHÃŽÃ‘WAÅŠH0000000000000000000000gX00Qx8002Ngx9{Ã ÄˆS0Ã‚ÃºÄŒÃ®FÃ·Ä‹ÄK0Ã†Ä½BB!gÃ‘9KhaÃºÃ¹Ã¯ÃXÅ‹$0hÄ³NÃ¹Ä–gÄ„ÅŽ$0hÄµÃ‘legÄ„BÄ•KÃ‡Ã·Ã®xÄ©jÃ·Ã®.Ä²2Ä³X-}hÄ»Ã‘.Å—4uÅˆ-RÃ‡Ã·G;Ã¹46[Ã²Ã˜ÃˆgÅˆgÃ¹0x8$02Ä·xR0000000x8000000000000",
copperOre: "0g0geÃ·-ZÃ©ÅžZÃ¢Ä¾HÃ–ÄŽY.Ä½WÃ‹Ã¢ZÅˆÄ«ZÄ¨Ã¼HÄŠÃ³WÃ­5YÅ™6Y.ÄYÃˆÃ†W}ÅY00g1zyhxhxyhhjNhiQ*ÃƒOCÃyh2U?(gÃ¬xyBPÃ”Ã¹hyhg.Ã£Ä2BÃƒwxh8Ã«zÃ‡Ã½xzBÃƒxrÄ´Ä®M0)Ã½M0Ä¤Ã¾ÃŸsÅ„Ä°gi4I1w{Ã«lMgÃ¬ih8j,Ãƒh1yiy)Ã¾ÄzzM0PÃ«P]1)Ä¹gI18Ã«h0ghiighhg1",
netherWart: "0g0g7000Ã€ÃŽW]0WÃ«ÃŸWÄ«ÄºYÄŒJYÃgY0000000000000Ã¼Ã«0005Ä±Ä·000+Å‚q0Ã™S+ÃˆÅ3.]}ÅÅ™pÅ‚pbÃ…I6Ã‰Ãˆ1Ã„S5Å€ÃŸ1+@Ä¯ÅÄ·5+Ä›Ä•+Ã€-Ä¤Ã¶Ã¥+Ã«-Ä¤Ã»Ä¬;Ã«5Ã™Ã­Ä¯$Ã«9ÃÃ­Ä¯yÃ«9iÃ­EyÃ«",
wheat: "0g0g7000Å…ÅHÄµÄ¬YÄŽVWÃ¢Ä¹ZÃ³jHÃ‡ÄˆZ0080008Ã«h0005Ã«a0g0d0zÃ«Äˆ0e(q|g81ÄŽ3Ã•+Ã€1Ãˆ20Ã†ÃµÄ‰Ä½ak(Ä¿?Ä¼ÃƒkÃ€Ä·Ã–7Ã8Ä˜gÄÃ±3dÄˆgÄÃ³2mÄˆoÄ‰8!k-qÃ«Ãµ#S@#Ä¨)CÃ•EEÄ¨Ä³Co;(",
lodestoneSide: "0g0g8Ä’Ä²YÄŠÄ‚ZÃ·-ZÃ©ÅžZ-ÅŠZPBWÃ–ÄŽYÃ¢Ä¾H42Ã³Pk]5Ä°ÃšÄ¾Ã—Ä°%Å•Å¢Z;Å€+ÅŽÅ‹ÃºÅ¤ÃŽ,Å¥ÄÃžÄÅ‰Ã¢*rÅ•+Ä’Ã¥PÄ»Ã¸Ä¯Ä’GÄµÅ‹Ãº-Å’Ã¥Ä½Ä”Ä#Å‘Ã¥Å‚Ä´ÄÅÄ›Ã¥Ã»Ã!JÄ“Ã§CÃ—Ã†ÅÄšÃ¥ÄœÄ–Å€%ÄšKÃ‘Ã²B;^PÃ™ÅÅ‚;ÃƒÃ–iÃPiÃ‚",
lodestoneTop: "0g0g5Ä’Ä²YÄŠÄ‚ZÃ©ÅžZÃ–ÄŽYÃ·-Z40]0i09CÄºPÄžÃ¹8080Ã«h8jc(Ä©p$oÄ‰Ã³iÃ€8Ä¯JÃ]pc?iPEÃ€c]JPyÃ€EQJP]oEÄ€JÃyocÄ°k^]pEoÃÃ€Ä©Ã€cjAÃ°io8090Ã«g9+ÅÃš)Ã¹0iPwg0",
anvilTop: "0g0g6000T4WPAY;ÅšZ-ÅŠYÃ?W000000000000000000BmÅ€BÄžÅ‹!ÄŠÄ•FA_^Ã¼Ä’^Ä’Ã´Ä’Ä‚Ä‘Ã„Ä’Ã²ÄžÄ“Ã—ÄÃ‰_Ã„ÅÄ•ÄœÅ‚ÃVÃˆÄ•ÄÄ¼ÃVÃˆVÄÄ‹ÃFkÄ±ÄiÃ²BÄ¯Å‚Ã¶Äž{000000000000000000",
anvil: "0g0g6;ÅšZT4WPAYÃ‡Ã’YÃ?W-ÅŠY0Ã¼ÄƒÃ›QS5]Å‚J]I1BAÃºÄg4Ä‘AÃšÄ¯Ã²9kÄŒJ?wÄˆÄŒUÃ²y55y1PiÃš4ÄŒÃ²PEÃ¯0Ã¼Ã²!PgÄˆÄŒÃº6QSÄˆiSFy0ÄˆÃ¹9]Ã«5ÄžÃ¬Tw1ÃšÄˆJ%0iSÄœiS0ÃºÃšÄžÃ«P0Ã‰Ãš",
slime: "0g0g5Ã 6%ÃÄ»Ä•Ã§C%Ã§+Ä•ÃˆÄŒ%0ÄŒ90kÄ€dÄžÄ§S0z|21AwR$oÃ€00TcÄ¯0ySS8iS}g08g0]0S8Ã®000Ã€8Ã²001g0Ã«g2igwg04Ã¹Ã¬x000Ä¯Ã¬S)44Ä©Ä€Ã‚i9w4Ä€ÃXJÃšÄžÄ¿d0900S",
soulSoil: "0g0g5Ã‡jY]Ä¹Z;ÄšH)ÄŠWÃ–QH4ÄŒ^Ã–gABNj|24FÄ˜jÃ•Ã»8PwÃ‰QÃ¹1|Ã¹Ä°A2aÃ–0]0Ã«^]20Ã¹iÃƒwÃ¹8Ã«Ã¼ÃºF1wAÄŒP]91Fwag]9]Ã­JJ2Ã³SmÄ·giJ0ÄŽÃµÃ«Ã¼Å€1+QÃ¬mÄ¸5)KXÄŽÃ²FÄŠ4",
blueIce: "0g0g5Ã—HYÃ›Ã¸ZÃ£Ä—ZÃ·Å–ZÄ“LZ4ÄŒI9Ä­Ã²0Ã¼]2)P0J^x)TwÃ­ÄƒSÄš1A5qSÄŠaQmÅŠSgJSCÅK6Ä¹wÄžÄ¹A5qx+JBgÅŠBCÃ‚BwÃ5kÃ‚xgh0kÃ0i94Ã­T0ÄŒIAÃ¼I5AÃ¹AÄŽÄ·9AÄ‚B+Ã¹|CÄ¸",
packedIce: "0g0g6ÃªÄ‡HÃ°YYJÅ–ZÄ‹fZYÃZÄ²HZ0ÄŒÅQCÄ¿5EÄ°]ÄžSF@aÃ‘Ã¹0PÃ¹rwÃ¹9Pgh1yJ?A]9AÅBy^PCÄ°0JÅF+I4ÄŽÃ¹BÄ­SFAIaÄš0Ã–)SÃ0T|ÄŠ2Ã•Ã«^Ãšg9Q2JÃ™Ã¹PFiJÃ‘J^|kÄ„AÃ¼JÃ™ÄŒÅ’",
ice: "0g0g6Ã°YÅ–JÅ–Å–YÃÅ–Ä‹fÅ–Ã·Ä¶Å–Ä²HÅ–0iÄC@Å€0Ã¾Ä°NmKgJPÃ¹Ä›0CiÃ‘Ã°p4Njc0P9Ã¹Ã»w2iÃ‰gÄ8Ã¹Ã¾Ä°2]PXÄœÄ³ii]ÃºÄŽ]XJSeÄšSAÄš0$J4%Ä€1Ã‘Ã»1Ã™Ã¹4AÄ9Ä”Ä§xAÄ¯PÃ“09Ã‘Ä¯Ã‹w2ÃƒC]Äº",
calcite: "0g0g6ÅšÅ†HÅ–Ä¦HÅ‚ÃšHÄ²$HZZZÄšÄ²W5mÃ³Ã™SÃ²FDÃ‚ÃŸiÃºF:Ãˆ(iÃFÅÅw0Ã‚|Ä½Ã²0gÄ‚Ã—ÄœÃ‚SJÅ”Ã¹ÄŒÄ‚BlÃˆwÃ¼ÅFCÄ¸F]bRAS]ÃºbÃ•F1Ã•JjQÃ¹Ã‚QÃ¼Ã4Ã¹Ã»AÄŒAÃ¯yÄƒÃ•ÄŽKF:ÃˆÃ‚6SPÅÄ¹Ã«Ã¼T|+Ä·",
loomTop: "0g0gdÄ±Ã¿WÃ¬Ã®HÄžÄZÄ’Ã†ZÄš*W(ÃºYÃ2HÄºbHÃ–ÃƒWÄŽ4YÃ¯ÄžHÄ¦?YÃ½ÅžW1xxxMxxw?*BBB**)@++CCCC)@C+C+++A@CCCCCCA?BÃ¢BBÃ£BÃ¡]EEÃ¤Ã¤Ã¤Ã¤APÃ¥Ã¥Ã¥Ã¥Ã¥Ã¥Ã¡@Ã£Ã£++Ã£Ã£Ã¡@CÃ£Ã£CCCA@++++++)?ÄÄÄÄÄÄÄŒÄ˜bÄ˜b000b@ÄŽ+Ä­+Ä­+ÄŒ?Ã’Ã’Ã’Ã’Ã’Ã’Ã‘0SÄœÄ£Ä˜0SÄ˜",
loomSide: "0g0g9Ä±Ã¿WÄ¦?YÃš3HUÄ©YÃ¯)WÃ¶UHÄŽ4YÃ¬Ã®HÄ­Ã°H0010hhg0iyyyyyywi)QQQQ>xkUQQVQ?xkQQQRyzMjyRQQQQxkQQQQQQxmÃ“Ã“Ã“Ã“Ã“Ã“Ãžo01101Ã«1iyyyyyyxkQVVUQ?xiyyRQQyxi)QQQQ>xiVVVQVUxg0Ã¬0101Ã¬GGGGGGGG",
loomFront: "0g0gfÄ±Ã¿WÄžÄZÄ’Ã†ZÄŽ4YÄš*WÄ‚7HÃ2HÃ¯ÄžHÃ–ÃƒWÄ­Ã°HUÄ©YÃš3HÄ¦?Y(ÃºYÃ¬Ã®H11112210NNNNNMNOMNNNNNNONRRRRRR>*??????>*??????>*Ã’Ã’Ã’Ã’Ã’Ã’Ã,Ã±Ã±Ã±Ã±Ã±Ã±Ã®(9Ã¹099Ä3.Ä“Ä£Ä£Ä£Ä£Ä¢Äª){{Ä³Ä³Ä«Ä«><Å„Å„Å„Å„Å„Å„Äº<Ã“Ã“Ã“Ã“Ã“Ã“Äº<Ã·Å•Å•Å•Å•ÅÄº)0Ä0Ã¹0Ä°>Å•Å•Å•Å•Å•Å•Å•Å•",
loomBottom: "0g0g4Ã2H(ÃºYÃ–ÃƒWÃ¬Ã®H0000lVVÃ†g008g008lVVÃ€g008g008lVVÃ€g008g008lVVÃ€g008g008lVVÃ€WZZÅ£0000",
jukeboxTop: "0g0g7EÄŠW)ÄšYÃ†Ä¹WÃ†Å™YÃ¥>YÃ½Ã¡WoÃH0Ã¹9AÃ­09Ä¯Å‚Ã›@Ä·eÃ‰ÃÃŸÅ‚p&Ä°oePÃ‡&Ä°oÄµPÃŽeÄ°uÄµPÃŽeÄ°uÄµPÃŽNÄ°uÄµPÃ‡NÄ°uÄµPÃ‡NÄ°uÄµPÃ‡&Ä°uÄµPK&Ä°uePK&Ä°oePÃŽ&Ã‰ÃÃŸÅ‚p9Ä¯Å‚J+Ä·0iPAÃ­0",
jukeboxSide: "0g0g6EÄŠWÃ†Å™YÃ¥>YÃ½Ã¡WSÄ‰YÃ†Ä¹W0000005+Ã»ÃšÄŽI9Ä®sÃžÄ¬ge:#ÄšÄ£odÄ®ÃŠÃ¢Ä¬Ã†aÄ±Å“Ä–Ä±Ä€dÄ¾tÃÄ¼ga:#ÄšÄ£85[UÃ¢?Ã†aÄ±Å“Ä–Ä±Ã¹dVtÃÄ¼ga#!ÄšÄ“88Ä¬UV?g6]ÄŒÃ³]I4JPAJ]000000",
noteBlock: "0g0g6EÄŠWÃ†Å™YÃ¥>YÃ½Ã¡WSÄ‰YÃ†Ä¹W0000005+Ã»ÃšÄŽI9Ä®sÃžÄ¬ge:#ÄšÄ£odÄ®ÃŠÃ¢Ä¬Ã†aÄ±Å“Ä–Ä±Ä€dÄ¾tÃÄ¼ga:#ÄšÄ£85[UÃ¢?Ã†aÄ±Å“Ä–Ä±Ã¹dVtÃÄ¼ga#!ÄšÄ“88Ä¬UV?g6]ÄŒÃ³]I4JPAJ]000000",
furnaceFront: "0g0gdÃ)Z;ÅŠYÃ–ÄŽYÃ¢Ä¾HÃ‹Ã’YJPWÃ°oHwÃ­WgTWÄ’Ä’YÄšÄ²WÄ®sHÄ†Ã¥Z00g0hgh02zNNOzzSk*+zÃ’Ã’N(2Ã“nGGÃžÃw3ÃŽIIIIjTjEIGGIÃ¯T3EÃ¬hhoÃ¯SjÃ‡Ä‚Ä’Ä’Ä‘Ã½MjÃANRNNwbÄ“Ä£Ä£Ä£Ä£Ä£Ã¹9ÄÄ‘Ã“Ã“Ä‚Ä‚Ä¨cÃ½[IIÃ¡Ã‡Ä§5Ã€IIII3Ä§3Ã†IGGIÃµÃ€l-GGGGÃ®Ä¨ihg001hx",
furnaceSide: "0g0gcÃ)Z;ÅŠYÃ‹Ã’YÃ–ÄŽYÃ¢Ä¾HÃ°oHJPWÄ®sHÄšÄ²WÄ’Ä’YÄ†Ã¥ZÃ©ÅžZ00g0hgh02O>UO)Ow2@ÃNV>VS3VÃ„z@V*Ã€2?UA*Ã’AMizNÃ„Ãƒ?(13Ã“>VÃ’OQwkVÃVRÃ’VTjQNACVU(7Ã±GGGGGÃ¹aÄÃ²IIIÄÄ‰qÄ‘ÄÄÄÄÄKmÄ’Ä’Ä‚ÄÄÄ‚KbÃ—Ã—Ä’Ä‘ÄŽÄŽÄ˜3)>QQQO(00g0hh00",
furnaceTop: "0g0g7Ã)Z;ÅŠYÃ‹Ã’YÃ–ÄŽYÃ°oHÃ¢Ä¾HJPW020AÃ­S9DB|Ä¿Ä·aÅ”Ã—Ä‚.Ef|Ã½Å‚[Ã•mÃ–ÃƒÄ£Ã’Ã‡%+ÄÃ›Ä«Ã¬aÃ”+Ä¸Fo,Ã•ÅÄµÃšÄ‘:ÃšÃ™Ã ÃšKrÃšrÃ·Ä°0nÃšÃ“Å)Ä!Ä±ÅÅ‚[ÄMCÄ”Å‚Ã‡wnBÃƒÄžÄ¡EaÄ£E|ÄÃ†020AÃ¹0",
blastFurnaceFront: "0g0ggÄ®sHÄ’Ä¢YÃ·-ZÃ–ÄŽYÃ¢Ä¾H;Å›WPAY|)ZÃ‡Ã’YÃžÅZÃ³oYÃ’Ã°WÄ†Ã¥ZgTWÄžÅ‚HÃ©ÅžZ1y)))>1ylÃÃ£VÃ“Ã’lÃCÃ²Ã“GÃ¤Ã±CÃ²PÄ‚Ã„Ã“VGPÄ‚*Ã…Ã´IÃ±Ã“VÃƒ?Ã“Ã•Ã±Ã„Ã”GÃ¡@Ã¦Ä’Ä’QQ,Ã¡,Ã¦001h+Ã*UÄ¨Ä¸Ä¸Åƒ*Ãƒ&cMÄ¸Ä¸ÅƒÃ·Å‰N;MÅƒÅƒÅƒÃµÄªN]Ä„cc9Ã³ÄªNÄŽÄÄÄÄÃÄ‹Ã³ÄŽÃ“Ã•IIÃ³ÅŸÃ¸Ä—QQQQZÅŸIIIIIIII",
blastFurnaceSide: "0g0gfÄ®sHÄ’Ä¢YÃ·-ZÃ–ÄŽYÃ¢Ä¾H;Å›WPAY|)ZÃ‡Ã’YÃžÅZÃ³oYÃ’Ã°WÄžÅ‚HÄ†Ã¥ZÃ©ÅžZ1y)>Q>1ylÃÃ£VÃ“Ã’lÃCÃ²Ã“GÃ¤Ã±CÃ²PÄ‚Ã„Ã“VGPÄ‚*Ã…Ã´IÃ±Ã“VÃƒ*Ã“Ã•Ã±Ã“Ã”Ã¤Ã®@Ã¤Ã±Ã”Ã”IIÃ¡[IÃ£GÃ„Ã”GÃ‘*Ã“VVVÃ“Ã’Ãƒ$Ä³Ä³Ä³Ä³Ä³Ä³Ä©/Ä¹Å„%yÄ’ÄŠz/!Ä¹ÄŠ!!&z/Å‘!!Å‘Ä’Å‘ÅŠÃ·Ä–Å‘Å‘Ä–Ä–}]XÅ•}QÅ•}Q]IIIIIIII",
blastFurnaceTop: "0g0g6Ã–ÄŽYÃ¢Ä¾HÃ‡Ã’YPAY|)Z;Å›W4Ã«JP0PxÄ­Å”Ä•Ä¯Ä§dÄ«Ä‹ÄžÄ Å€+,ÃšÃ›PxeAÅ’Ã²EÅÃÅ‚ÃšÄÄ£Ã•Ã[ÃŠPB!|Ä½Å‰Ã‚+ÅÃ„Ä½Å’ÄžÄ¾Ãˆ}_zÃºBy|Ä«ÄŒÃ¶Ä°qi@Å”Ä–ÄŸÃ—+ÄžÅ‚Ä•EÅ%Ä¬s^/Å€xÄ¯Å’ÃžÅÄ¨4giPyÃ³",
smokerBottom: "0g0g8Ã’RZÃ)Z;ÅŠY-Ä™ZÃ‹Ã’YÃ–ÄŽYÃ°oHÃ¢Ä¾H0Ã¼PPkÃ«cÄ²ÄŸÃ¾Å£Ã†DÅ”Å£Å‚Ã‹Ã²,ÃšÄÅ‚Ã˜Å WÃšÅŒÅ¢Ã–Å‘Ã„Ã‰,ÄŸÅaOÃ˜ÄžÅ|Ä‘ÃÃšÃ£Ä¾ÃšÄ¢Ã‰ÃšÅ¥Ä£ÃšÅ˜:ÃšÄ•Ä¾Å”Ã²WÃšÅÅ‚Ã‡!ÃƒÅ–Ã£Å‚Ã˜Ä¡Ãˆ_=Å‚Ã©Ä™DPÅŒZÅ„Ã²0Å†Ä¡Ã¾Ä±Ã†KÃ¼PPyS",
smokerFront: "0g0gjÃ½Ä»WÃ’RZ;ÅŠYÃ©Ã®HÃ€Å™H-Ä™ZÃ‡Ã’YÃ–ÄŽYÃ¢Ä¾HPAYÄ®sHAJHoÃŽYÃ³oYÄ’Ä¢YÃ©ÅžZwÃŽH)ÄŠHÃ)Z0Qx8RgXx80pagÃµÃŽwÄ­SÃ¼Ã¬0^SXÃ¯x2ikA0cÃ Ä„ÅŽ.ÄµÃ¡oÃŽ8Ä¹Ä%ÃµÃoÄ›Ä„0w{ÄMÃµÃoÄ­Äˆzo{ÄMÃµÃoÄžÄˆÃ¬oiÄÄ•Ã˜ÃˆÄ½Äœ)AxqÄ»*Ä´Ã Ä„ÅÄœX9x8J(XP8S3ow(Ä«ÃžIÄªgÄ§ÃŽ8Ä±Ã‚gÄŒF]RÃ¼Ã¬0^(Ã¼ÃŽEÄ©Ã€Ã¼Ã0Å‰iQAIPigz8ÅˆoÄ©MXÃ8Ä§AxÃ’F^Ã‚Ã¼ÄF]Ã¯",
smokerSide: "0g0gcÃ½Ä»WÃ’RZ;ÅŠYÃ©Ã®HÃ€Å™H-Ä™ZÃ‹Ã’YÃ–ÄŽYÃ°oHÃ¢Ä¾HÃ)ZJPW1yyyyyy0)ÃjM>)lT1Uh?Qh?k0Ã”GÃ”GGÃ£MjÃ¤Ã°Ä€IÃ±Ã¿0TÄ€Ã¾Ã¥IÃ°ÄjMGÃ•Ã¿Ã¥Ã°Ã–T(Ã¿IIÃ°Ã•Ã°kQÄÃ¥ÄÃ¥ÄÄQkVQUVQV3(ÃƒlMÃƒllMjÃ?kÃ?QT1Ä“ÄžÄžÄ£ÄŸÄ¢O3ÄÃ´Ã”ÄƒIÃ¦jjÄÃ²Ã–Ã¤Ä Ã—k?Ä’Ä’Ä’Ä’Ä’Ä’?",
smokerTop: "0g0gaÃ’RZÃ)Z;ÅŠY-Ä™ZÃ‹Ã’YÃ–ÄŽYÃ°oHÃ¢Ä¾HAJHoÃŽY0hxhyxy03kÃ„Ã”?Ã…ÃŽ(hÃ¢Ã…Ã¢VVÃ“hlVÃ“[Ã“Ã“Ã…ÃžnÃ„iIIx[Ã‚B?EIIÃ­QikÃ„IÄÄIÃ’ÃDÃ„IÄÄIÃ’ÃŸCÃ„IÄÄIÃ’ÃŽmÃ„IÄÄIÃ’hnÃ„EIIÃ­QÃ‚AÃ£iIIxVÃžCQUÃ£Ã“Ã”Ã’ÃŽhÃ‘[?GÃ¢Vh0lÃ£Ãž?UÃ((hxhyyh0",
chiseledSandstone: "0g0g7Å–Ä”YÅŽÄƒYÅŠÃ˜WÅ‚^WÄ¾pHÄ¹ÅYÄ­ÄŸW00SAÃ­P|ÄŸzÃšÄžÅƒÃ¾Ã‰ÃšÄžÅ’Äž009AJ}d,Ä›Ã§,u%ÄŸÃ G,C|CÃ¾Ä°+Å%+ÅÅ€ÄŸCPÄœÄšÃ‡ÄCÃ¾Å‚ÃšÄžÅ”ÄžAJPAÃ¼Ã„%ÅÅÃšÅ”Ã¾~_Ã’ÄšÄÄŽVUÄ¼}ÄŸÃŒ|CÅ‚ÃºÄ ÅÄžÅ‚ÃšÄ¢Å”Äž",
cutSandstone: "0g0g7Å–Ä”YÅŽÄƒYÅŠÃ˜WÅ‚^WÄ¾pHÄ¹ÅYÄ­ÄŸW00TAJ^|Ä°AÃ›+Å‹JÅ‚ÃšÄ£ÃšÄž00ÃŽAJÃ„9)Å‚Ã²[t9Ä­Å‚ÃšÄŸm%ÄœÅ‚ÃºÄžÄ½|Ä¯Ã»Ãž)ÅMÄžÄºÃšÄžÅ…N+Å‚Ã›@Å&*r},CÃ²ÄœÄƒÃ¶+Ä½FÄŒÅ‚ÃšÄžÅ…|ÄžÅ‚Ã›]Ä¼^UÄ¹Ã›Ã„Ã½Ä¾ÃšÄ•Å‚ÃšÄž",
sandstoneTop: "0g0g5Ä¾pHÅŠÃ˜WÅ†ÃˆHÅŽÄƒYÅ‚/W5yÄ¹^yU?AP(Ä«{CiÃ´PSÃºÃ•Ã¼Ãº?iÄŠAÃ½1AÃ»i]JxÃ¯ÄiÃ€ÄŠUEÃ¼ÄŠÃ¬yÃ²Ã€Ä«UÃ€AÃ‡ÃºyÄŒEyPÃ€JUCRÄ³EJÃ²EÄŠK?iÃ³Mj4B@Ã‘CiÃ‚AÄŒ^PÄ€Ã²QÃ¼Ã²To^]Äš^",
sandstone: "0g0g7Å–Ä”YÅŽÄƒYÅŠÃ˜WÅ‚^WÄ¾pHÄ­ÄŸWÄ¹ÅY00TAJ^|Ä°AÃ›+Å‹ÄžÅ„Ä•Ä£Ã‰Ãš,yPÄ«Ä…ÃžÃ¥Ä®ePÄŸÄƒÃ”Ã‘Ä|*_ÃšÅ”ÃšÄ´Ä´Ã˜ÃšÄ‚Ã²ÄºyÃ¢ÄµÅ‹Å‚Ã‡)Ä´Ä½Ä­Ä²ÄÄ­ÅÃ–RÅ…DAÅ…ÃšÅ„ÃžÃÅ‘Ä–Ä¶iÅ’Ã¶ÄŸÃÃ†ÄÃ´Ã›$Ä³Ã¥FÃžÃˆÅ‚ÄƒÃœÃ™Ã·Ä¯Å+",
sandstoneBottom: "0g0g6Ä­ÄŸWÄ¾pHÅŠÃ˜WÄ¹ÅYÅ‚^WÅŽÄƒY5DqJÃ…i!@0J(ÃºÃŸ)Ã»c8bÃ¬Ä‘cÃ£Ä½Ä¬Ã·oÃ˜^]Å‹Ã½ÄœÄ€ÃQ$J+0ÃŸm4JÃ€Ä•Ã’Ä“Ã†Ã*A|?EKp$2pyÃ²rzÄÄzJ6tÃ°Ä˜Ã®ÃžÅ‚4N]a}ÄŒÅ“Ã¹ÄFÃ¶yt{0Å‹ÃºÄžÄ“Ã—ÄšÃ†",
tallGrassTop: function(n){
var pix = getPixels("0g0g6000Ã­8WÄ–Ä’ZÃ¾PHÃžÄ¾WÃ’ÄŽH4000000Ã­01000Ã°010S1Ã­Ä§1Ã­00wÄ§cÃ°00wÄ§c600(Ã«8400(X8400wX8)w0wÃ«I#S0wÄ€Ã•C0cCÄ€{E02CÃ€{E00Cg{(00QgÃ(844gÃwS")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
tallGrassBottom: function(n){
var pix = getPixels("0g0g6000Ã­8WÃ¾PHÄ–Ä’ZÃžÄ¾WÃ’ÄŽH0XgÃ)S12gK(Ã«14oSwÄ§86oxSÄ·4mgx0Å‡QklT0Äˆ]odKÃ«ÄˆÃµSdÃ¡Ã¹ÄˆeÄ¨|Ã£gÅaÄ‰BÃ„wÅ”ÄŽÄ˜Ã’Ã‚Ä¢ÅŒNÄ¢ÄCÄ¢ÄÃ„Ä’Ã—Ã°Ä’VÃ„r!ÄŽÃ»V)Ä²FÄšÄª|Ã¾Ã‰$ÄšÄ²B")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
apple: "0g0gb000Ã¡ÄˆWÃ¨Ä·ZUÃ¹YÄ„THÄœTZÅ¥Ã‡ZÅƒÃ‚HÅ£ÃŸYÅ¤Ã£YUwZ00000000000010000000z0000000g000004TMg0004Ã„Ãƒ[Ãg00?Ã²Ã“Ã–Ã¯h00?IIIÃ¤Ã00?Ã¤Ã¤GÃ¤Ã¦00lÃ…Ã¢Ã…Ã†Ã¦00lVVÃ¢Ã†Ãˆ001VÃ¢VÃ¢Äˆ001?VGUÄˆ000ÄŒU?^0000ahqÄˆ0000000000",
diamondPickaxe: "0g0ga00WcÅšHOÄ”Y#qZCÄ°Y]Ä¸HÃ–MZ8JWÃ²JHEÃY0000000000000000000hhg00001zQMÃ„0000nGQÃ²000000Ãƒ[000005Ã–>Ã0000Ã†Ã¹Ã¡Ã0005Ã–0Ã¡Ã000Ã†Ã¹0Ã Ã005Ã–00ÃŸÃ00Ã†Ã¹007005Ã–000000Ã†Ã¹000000Ä00000000000000",
goldenPickaxe: "0g0ga00WÃ¬ÃžHZÅžHÅ’ÄHÅ‘Ä¨H]Ä¸HÃ–MZ;Ä˜ZÃ²JHEÃY0000000000000000000hhg00001zQMÃ„0000nGQÃ²000000Ãƒ[000005Ã–>Ã0000Ã†Ã¹Ã¡Ã0005Ã–0Ã¡Ã000Ã†Ã¹0Ã Ã005Ã–00ÃŸÃ00Ã†Ã¹007005Ã–000000Ã†Ã¹000000Ä00000000000000",
ironPickaxe: "0g0ga000?kHZZZÅ‚ÃšYÄªcW]Ä¸HÃ–MZoÃŽYÃ²JHEÃY0000000000000000000hhg00001zQMÃ„0000nGQÃ²000000Ãƒ[000005Ã–>Ã0000Ã†Ã¹Ã¡Ã0005Ã–0Ã¡Ã000Ã†Ã¹0Ã Ã005Ã–00ÃŸÃ00Ã†Ã¹007005Ã–000000Ã†Ã¹000000Ä00000000000000",
stonePickaxe: "0g0ga000PAYÄ‚Ã–YÃ³EYÃ©ÅžZ]Ä¸HÃ–MZoÃŽYÃ²JHEÃY0000000000000000000hhg00001zQMÃ„0000nGQÃ²000000Ãƒ[000005Ã–>Ã0000Ã†Ã¹Ã¡Ã0005Ã–0Ã¡Ã000Ã†Ã¹0Ã Ã005Ã–00ÃŸÃ00Ã†Ã¹007005Ã–000000Ã†Ã¹000000Ä00000000000000",
woodenPickaxe: "0g0g800W)Ä‰WÃ²JHÃ¢ÃWÃ–TZ]Ä¸HwKYEÃY000000000000009AÃ«000ÃƒÃºÄƒ000eÅ?Ä§0002Ä¡Ã«000mÃ¤Å—000Ä“Ã¶(005Ä„d(00!Å‡cÅ—01Ã”0cÄ˜0aÄ 01Ã«0Ã‡Ä§0002Ä–00003Å—0000000000",
flint: "0g0g8000wÃ­W;ÅšZ$ÄšZc(ZVVHÃ©ÅžZÄ’Ä’Y000000000000000AÃ«0001{Ä§000a^Ä§000ÃˆÄŸÃ†002Ä¼Ä¦Ä00kÃ½Ån00ÄŽÅ•PÃ¿00ÄžÅ™{Ã»K0ÄžÄ‚Ã‘Ã½Äˆ2kÅ‚BÄ•00@Å‚Ã–Ã†008_PS001AJ00000000",
mossBlock: "0g0g6PÃŸHÃ›3WTÃ‚ZÃÄŠZÃ’ÄªWÃŸRZ50Ã†hÃ«Å„!nE}2ASÄ«4ÃŽÃ¾l|Ä’Ã‘Ã™NK9Ä¸EÃ«rzÃžÄ‘w6x4$72Ã¹Ã†Ä€Q)ciÄ?c(ÅˆJ9$0Ä¾4kÄ˜Ä«Ã“Ä§cÃ­Q$Ã™FwÄŠ1oÃ¶Ä€FgO4Ã’Ä¸c0Ä¨{hÄ‹rÃ·Ä€Ã‘Ã«bzÃ£@x",
caveVinesPlantLit: "0g0ge000ÃÄªWPÃ­H{Ä¨HÃŸRZÃ‡1WTÃZÃžTZTÃ‚ZÄJWÃ›3WÅžÃ°YÅ‘zW-ÄªW00ih)SÃ‚Ã00hjiQÃ€y0507hAS02Ã²Ã¹Ã…aÄ‰S0CÄƒÄ«?0Ä’Äˆ0yÄ„QxÃ€0(004Rh(2Ã®004qgdCFÃ¹0aÄ’1lyÄƒÄ°00(iDÃ¢Ä„Ä°00MxlQÃ‡Ã¹001h1A?00039ÃºiQ002Ã¯ÄƒÄ°qk00CwhÄ°aÄ’00yÃyÃ¹0Ã†w",
caveVinesPlant: "0g0gb000ÃÄªWPÃ­H{Ä¨HÃŸRZÃ‡1WTÃZÃžTZTÃ‚ZÃ›3W-ÄªW00ih)SÃ‚Ã00hjiQÃ€y0507hAS02Ã±0Ã…9ÃºS0CB4?0ÄÃ¹0y3QxÃ€0(004Rh(2Ã®004pgaCD009Ä1ly7000(iDÃ¢7000MxlQÃ…0001h1A?00030MiQ002Ã¯0Ãpk00CwhÃ9Ä00yÃyÃ€0Ã†w",
caveVinesLit: "0g0gd000ÃÄªWPÃ­H{Ä¨HÃŸRZTÃ‚ZÃ‡1WTÃZÄJWÅžÃ°YÅ‘zWÃ›3WÃžTZ00ih)SÃ‚006hjiQDw0]Ä‚Ã°hARw4oÄ’Ã°bÄ™S04Ä˜I$0Ä£Äš004{cÃ‚3y00Q#cDz004RÄ£68Ã¬S04kÄ›lÃ²Ä“k04_KlÃ³ÄÄœ000KÄ™]Ã±w00bÃ4Ã€ÃÃŸ004Ã‰5ÃÃ‰y004Äœ2Ã‰U0000S0AÄœ0000000S00",
caveVines: "0g0ga000ÃÄªWPÃ­H{Ä¨HÃŸRZTÃ‚ZÃ‡1WTÃZÃ›3WÃžTZ00ih)SÃ‚006hjiQDw0?*ChARw4oÃÃ„8Ã¬S04Ã«Ã¹F0IÃ­004P9Ã‚3y00QE9Dz004RI62xS04kÃ®lÃ«8k04]KlS6X000KÃ¬SÃ¿w008Ã4Ã€ÃÃŸ004Ã†5ÃÃ†y004X2Ã†U0000S0AX0000000S00",
sporeBlossomBase: "0g0g5000Ã›3WÃŸRZÃ°Ä‹ZÃÄŠZ0000000Äˆh02Ã¹0ÄžbÃ’6Ä·0NÄ‹]ÄœÄ¯dÄŒÅ€@mÃ«dkÄ±ME]5Ä›hJyÄ¿1ÄŒÃ‘Ã¯Ã¼Ä€0ÄŠÄ°Ã²)Ã«0Ä Å€?ÄšS0+Ã³Ã€Ã¼Ã€1Ä‹hÃºÄŽÃ¹5Ã¼iÃ+0dNbK2Ã«dÃ¹904Ã«000000",
sporeBlossom: "0g0ga000Å„Ã—YÅœÄ“ZÅ¥sZÄ¥P0Ä.WÃ½nHÃ¨Ä½WÄ½AWÅ•ÅY0000000000000000000000000001g000000ix000001zNg0000jOOM0004ÃƒNz*S00RjyyMA06OxyyiOK7NNxizzÃ7jylÃyMÃ7Ã’xVViÃ„Ã0GVÃ”Ã£VG007Ã£Ã¤Ã±Ã”Ã000Ã”Ã²Ä€Ã£00",
hangingRoots: "0g0g7Ã¥ÃƒY000Ä¢lZÃ½ÄœYÃºUWÄ•ÅHÄ¢Ã†Y4gÃƒ4mIyyÃŠAO{AÅŠzwÄ‹ÃŽNÅ”eÃÅ‘Ãž(Ä„}Ä­ÃÃžAÄ±{Ä»Ä¹Ã–CÄºÃ™-Ä±|CÃ»PÄ¿Äƒ9AÃ»eÄŒÄº9AJ|AÄ©PAJPÄŒJPAJPAJPAJPAJPAJPAJPAJPAJPAJPAJP",
rootedDirt: "0g0g9Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÄ•ÅHÄ¢Ã†YÃºUWÃšÄžZÃ°oH1i(TBNwwAÃ‚x>wUÃ“>2Q4Ã2BzÃ‘n5>Ã’hBwiikÃCjDTNzhÃ+NzywÃ‚yRwR0x?C0ÃykhRkiÃ‘BzxkyNxÃCNimSxxÃ€2ÃŽRzkRiAgÃ’@iMzzihUAyR0AyylzÃBhl(zA0xAÃiTiÃ­TyhÃƒ",
floweringAzaleaPlant: "0g0gbPÃŸHÃ›3WÃÄŠZÃŸRZÃ’ÄªWTÃ‚Z000QÄ§Z{ÅˆHÃ‡hZÃ–RH1iMw)w2zi)kgS0gQwMNNk2(jyzx)jA)(zAAz>T323z>xxMwA2(z>TyigÃ2?M>Bi)2NiÃƒjÃ€))ÃM,2NÃŸ34ÃŽzDÃ‘[Ã¡Ã„Ã“Ã“5Ã”Ã¤GÃ“Ã“Ã“Ã“Ã“Ã“Ã²Ã°IÃ“Ã“Ã“Ã“Ã“Ã—Ä€Ã°Ã“Ã“Ã“Ã“Ã“Ã—ÄŽÃ“Ã“Ã“Ã“Ã“Ã“Ã–ÄŽÃ“Ã“Ã“",
floweringAzaleaTop: "0g0g9ÃÄŠZÃŸRZÃ’ÄªWÃ›3WÄ¡ÃµZÄ¸Å•WÄ…]YVTHPÃŸH1gziiii01zNMM(jOzAÃ„ilgNzh*Ã¡zkNO(w6@1(MiNjzjO2yMzwMNwwx?ÃŽhjji2OÃ…RBji0zhÃ‘ÃŽkMh22zj2NjMzzxNMxy?ÃŽxM(z3iÃ…>zjÃƒhNzÃ‘ÃŽONR3OM31MzNE0xxxxN0Ã­",
floweringAzaleaSide: "0g0gbPÃŸHÃ›3WÃÄŠZÃŸRZÃ’ÄªWÄ¡ÃµZÄ¸Å•WÄ…]YVTHTÃ‚Z0001iMw)BÃ”ziÃ„Ã¡gK6Ã¯QwÃ•Ã‚NU7Ã…jyÃ¢Ãž)jA)(zAAz>T323C>BÃ”MwA2*z@Ã¯ymgÃº2P,Ã…Fl)ÄŠNiÃ»jÄ‚))ÄŠM/ÄŠNÄ’Ä‹aÄ’z!Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’Ä’",
azaleaPlant: "0g0gbPÃŸHÃ›3WÃÄŠZÃŸRZÃ’ÄªWTÃ‚Z000QÄ§Z{ÅˆHÃ‡hZÃ–RH1iMw)w2zi)kgS0gQwMNNk2(jyzx)jA)(zAAz>T323z>xxMwA2(z>TyigÃ2?M>Bi)2NiÃƒjÃ€))ÃM,2NÃŸ34ÃŽzDÃ‘[Ã¡Ã„Ã“Ã“5Ã”Ã¤GÃ“Ã“Ã“Ã“Ã“Ã“Ã²Ã°IÃ“Ã“Ã“Ã“Ã“Ã—Ä€Ã°Ã“Ã“Ã“Ã“Ã“Ã—ÄŽÃ“Ã“Ã“Ã“Ã“Ã“Ã–ÄŽÃ“Ã“Ã“",
azaleaTop: "0g0g5ÃÄŠZÃŸRZÃ’ÄªWÃ›3WPÃŸH4XÄ±EÄŠÃ«5+ÄÃ’Ã­Å‚|wb$Ã°Ã»B2ÃˆFÄŽÄ¿SmÄ€ÃŽJÄ‚%2Ã€9CÃƒTÃ¾Ã¹SÃ¼Ä°AÄšÄ±1NÄ‚{ÄšÃ«{Ã¼PBÃ¼Ä©9yÄ©Ã•ÄœÃƒ|mÄ?wÃ‡?Ã¾jcÄŽaÃ•Ã­Ä°Ã–(Ã¬Ã•CÃ®ÃšÃ¹Ä¨Ã’+Ã¼1kÃ?Äˆy",
azaleaSide: "0g0g7PÃŸHÃ›3WÃÄŠZÃŸRZÃ’ÄªWTÃ‚Z0004ÄŽÃ€Ãž0Ã»FÄª8Ã«2ATÃ¾Ä‚(CbP)ÃŠ%[o|?jÃ·gÄ©d-Ä¸?Ã¼k9XÅŠÃ¯yIÄŒFÃ‡Ã¶Ã‚Ä„Ä°ÄŠÄ“&ÅŽsÄ°Ã¿ÄšÃ˜Ã™Ä­Å€*ÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄž",
pottedFloweringAzaleaBushPlant: "0g0ge000Ã’ÄªWÃÄŠZÃŸRZÃ›3WPÃŸHÄ¡ÃµZÄ¸Å•WÄ…]YTÃ‚ZVTH{ÅˆHÃ–RHÃ‡hZ000000000000000000000000000000000000000001xzjkÃ€003jAA)w005zmÃ¤yS002p,ÄŽFS002RÄ€Ã•Ã½(004(Ã‚NÄšÃ€003w1rÄ™Ã¹000bÄ¤Ä§000000Ä¥Ä§000000bÄ·000000bÄ˜000",
pottedFloweringAzaleaBushSide: "0g0gb000ÃÄŠZÃ›3WÃŸRZÃ’ÄªWÄ¡ÃµZÄ¸Å•WÄ…]YVTHTÃ‚ZPÃŸH000000000000000000000000000000000000000000i)zk0000lÃ”>R0000@Ã¯iN0000nÃ…RÃ0000PN>Ã¥0000xÃ»zÄ‚0000(Ä‰M10000g4S400000000000000000000000000",
pottedFloweringAzaleaBushTop: "0g0g9000ÃŸRZÃ›3WÃ’ÄªWÃÄŠZÄ¡ÃµZÄ¸Å•WÄ…]YVTH0000000000000000000000000000000000hzjz0000zAÃ„Ãž0000h)Ã•Ãƒ0000z)Ã¢Ãž0000ijQN0000jÃ‘Nh0000NÃƒ>O0000MNNM0000000000000000000000000000000000",
pottedAzaleaBushPlant: "0g0ga000Ã’ÄªWÃÄŠZÃŸRZÃ›3WPÃŸHTÃ‚Z{ÅˆHÃ–RHÃ‡hZ000000000000000000000000000000000000000001xzjkÃ€003jAA)w005zjkyS002m)jCS002RÃ>Ã’(004(Ã‚NÃŸÃ€003w1nÃžK0007Ã¤Ã«000000Ã¥Ã«0000007Ã¹0000007Ã000",
pottedAzaleaBushSide: "0g0g7000ÃÄŠZÃ›3WÃŸRZÃ’ÄªWTÃ‚ZPÃŸH00000000000000000000000000000002Ä„{Ä§003bÃ·w008Ä±FÄˆ002ÅŠIÃ¹009ÃˆÃµÄ·004Ã˜}Å‡006MÃ‘g0024Ã«S0000000000000000000",
pottedAzaleaBushTop: "0g0g5000ÃŸRZÃ›3WÃ’ÄªWÃÄŠZ00000000000000000000000002Ãƒ%(004Ä»Ãg002ÃŠÃ¶Ä˜004ÅƒÃÃ¹002Ã´ÃºÄˆ002Å‹Ã•Ã¹006Ä‹Ã¶Ä˜006ÃˆÃ–Ã¹0000000000000000000000000",
//spacer0: "0g0g7Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÃ°oHÃšÄžZÃ¢Ã‘H4ÄŒ9PÄŒg?ÄŒÃSÄˆÃ‰9(J9CÄ©)yÄ·BkaEÃ°Ã‚%UÃˆ{Ã¼Ã‰Ã–)Ã¹9EÃ¹84Ã]2Ã‚$Ã¼Ã²FkÃƒQÄŒÄ‚?ÄŒÅPwh?0Ã¬KNÃFihÄŒÄŽÃƒ{ÄŠRPAÃ«?$Ã²{)9FXÄº1kÃ²EiÄŠByÃƒ",
sunflowerFront: "0g0g7000ÅÅ‰HZÄœZZÃƒYÅ™ÃŸHÄ¸ÅšWÄ¥ÄŠW00000000000000000000000000aQ0000Ä‚Ãš0002Ä³Ã¯Ã¹004ÄÄ¸w004ÅÄ™Äˆ002Ä³Ã¯Ã¹000Ä‚ÃšÃ«000bÃ‘00000000000000000000000000",
sunflowerBack: "0g0g6000BÃ­HlÅ—HÃ‚ÃZ^NYÃ„ÄŠZ000000000000000000000000009A0000ÃƒIÃ«002ÄÄ™g002Å”Ã›g003#Ã·g002Ä‹Ä™g000UIÃ«0009A00000000000000000000000000",
sunflowerBottom: "0g0g6000Ã„ÄŠZÃ‚ÃZ^NYlÅ—HBÃ­H001{0000qS00002K00002ÃŽÄ˜0002Ã‚Ä˜0003Ã„S0001Ã0000qw00002{0006ÄªÃ«0007Ã‘K0009#K0001zÃ¼00004Ã¹00004Äˆ00005Äˆ00",
sunflowerTop: "0g0g6000BÃ­HlÅ—H^NYÃ‚ÃZÃ„ÄŠZ000000000000000000000000000000000000001w00002w00003S00004K00004Ã’0006Äª]0006Ã‚K0000Ã´K0000jS00002Äˆ00",
waterBucket: "0g0ge000)ÄºHÃ¥ÅŽYÄ‚Ã–Yx;Z%ÃšW?Ä¦Y*Ã©YÃˆfWÅ‚ÃšYÄ’Ä’YÃžÄ®WÃ¾Ã‡HZZZ00000000001hhg0001izOMg00i?Ã”Ã¢Ux00kÃ•Ã°Ã¤Ã£T00hkÃ£Ã”Th00pÄ‰hhrÄ¨00pÄÄ‚Ä”Ä£Ä¨00pÄ…Ä‚Ä”Ä£Ä‰00qÄ…Ä‚Ä”Ä£Ä‰00rÄ…Ä‚Ä”Ä£Ä¨001ÄÄ‚Ä”Ä¤g001Ä‘Ä‚Ä³Ä¤g000qÄ‚Ä²Ä¨00001hhg0000000000",
lavaBucket: "0g0gd000)ÄºHÅ‰OZÄ…ÅžYÄž,YÄ´iYÅŽ?ZÄ’Ä’YÃ¨Å™ZÃ¾Ã‡HÅ‚ÃšYÃžÄ®WZZZ00000000001hhg0001i)?Ãg00jÃ„ÃCBT00lCCÃÃÃ00nÃ¯CÃ„Ã’Ãº00qÃ¤IÃ¯#Ãº00qÄ’ÄÃ¥Ã‰Ãž00qÄ”ÄÃ¥Ä£Ãž00nÄ”ÄÃ¥Ã‰Ãž00rÄ”ÄÃ¥Ä£Ãº001Ä’ÄÃ¥Ä¡g001Ã¦ÄÄÄ¡g000nÄÄƒÃº00001hhg0000000000",
bucket: "0g0g9000)ÄºHÃžÄ®WÃ¾Ã‡HÄ’Ä’YÃ‹Ã¢ZVVHÅ‚ÃšYZZZ00000000001hhg0001iO)Tg00iBVyzx00lÃ“Ã’yyÃ00hmÃ’Ã‚xh00nThhiM00nGÃ¡>yM00nÃ¤Ã¡>yT00kÃ¤Ã¡>yT00iÃ¤Ã¡>yM001GÃ¡>zg001[Ã¡Ozg000kÃ¡NM00001hhg0000000000",
cowSpawnEgg: function(n){
var pix = spawnEgg
var pix2 = spawnEggOverlay
for (let i = 0; i < pix.length; i += 4) {
var r = 58, g = 47, b = 34
pix[i] *= r / 255
pix[i+1] *= g / 255
pix[i+2] *= b / 255
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
for (i = 0; i < pix2.length; i += 4) {
if(pix2[i+3]){
var r = 200, g = 200, b = 200
pix2[i] *= r / 255
pix2[i+1] *= g / 255
pix2[i+2] *= b / 255
setPixel(n, i >> 2 & 15, i >> 6, pix2[i], pix2[i + 1], pix2[i + 2], 255);
}
}
},
sugarCaneIcon: "0g0g7000Ã¿Ä»HHOHF(ZÃÃ­Y@1Z.Ã¬Y0000000000000005(000j?Ã«000Ä*4S01!MÄŠÄ€00hÄoÄ§01cÄ¹Äž009CPÅÃ«2Å€Ã¡Ã‚Ä­Ä§1ÅÅ‰Ã¶Ä˜00Ã…Ã’K000,Ã˜00001Ã†00000Ä§000000000",
sugarCane: "0g0g8000ÅŽÄ¥YÃ¿6HÄ“Ã”HÃ­ÄYÃ—kHÃ»Ä›WG2Y50Å‡e0Å‡iÃ«Å‡e0Ã€eKÅ‡eÃžEeÃÅe0Å‡e0Ã…e0Å‡e1E50Å‡e0Å‡iÃ«Åe0Å‡e0ÅŽÄ¬0Å‡e0Å‡Å™Ã«Å‡e0Ã€eeÃ€Äµ1Ee1EÅ•0Å‡e0Å‡e0Å‡e0Å‡5eÅ‡e0Å‡iÃ«Å‡e0Å‡e0Å‡",
diamondSword: "0g0gc00WcÅšHÄZW8JW#qZOÄ”YlÃ¯HuDH]Ä¸HÃ–MZÃ²JHEÃY0000001h000000iz000001Az00000iR(00001AÃƒ00000i?(00h01UÃƒ000mgl?(0001Ã Ã…Ãƒ00001GÃ’(00000mj000008Ã»h(0000Ã³Ä˜Oj000hÄƒ00O000m(000000O(000000",
goldenSword: "0g0gc000Ã¬ÃžHZZZ;Ä˜ZÅ’ÄHZÅžHÅ…ÃWÅ‘Ä¨H]Ä¸HÃ–MZÃ²JHEÃY0000001h000000iz000001Az00000iR(00001AÃƒ00000i?(00h01UÃƒ000mgl?(0001Ã Ã…Ãƒ00001GÃ’(00000mj000008Ã»h(0000Ã³Ä˜Oj000hÄƒ00O000m(000000O(000000",
ironSword: "0g0gc000?kHZZZoÃŽYÄ¦Å¢ZÅ‚ÃšYÃ–ÄŽYÃ¾Ã‡H]Ä¸HÃ–MZÃ²JHEÃY0000001h000000iz000001Az00000iR(00001AÃƒ00000i?(00h01UÃƒ000mgl?(0001Ã Ã…Ãƒ00001GÃ’(00000mj000008Ã»h(0000Ã³Ä˜Oj000hÄƒ00O000m(000000O(000000",
stoneSword: "0g0gb000PAYÃ¾]ZÄšÄ±ZwÃ­WÃ¥Ä¾HÃ‡Ã’Y]Ä¸HÃ–MZÃ²JHEÃY0000001h000000i)000001zA00000iNS00001zA00000iNS00h01ÃƒA000mgl*S0001UÃ‚U00001VÃ’S00000mk000007XhS0000Ã¥ÄˆQk000hÃ³00Q000mS000000QS000000",
woodenSword: "0g0gb000)Ä‰WÃ¢ÃWÃ¯JHwKYÃ‡1YQÄ¸H]Ä¸HÃ–MZÃ²JHEÃY0000001h000000i)000001zA00000iNS00001zA00000iNS00h01ÃƒA000mgl*S0001UÃ‚U00001VÃ’S00000mk000007XhS0000Ã¥ÄˆQk000hÃ³00Q000mS000000QS000000",
floweringAzaleaLeaves: "0g0g8ÃÄŠZ000.NHÃ›3WÃŸRZÄ¡ÃµZÄ¸Å•WÄ…]Y50Å‡5A>Ã‘Äw5Ä _Q09Ã¶Å„^Ãµ@hÃ¹Ã’Ã³Ã¹Ä¯ÃºSÃ‹Ä°AÃ«Ã³]ÄrÃ¬iÃŠÃ¹yrÃ¿ÃŸQÃºÄŒ4Ã‡Ã„oi4Ã«uÅŸzhÄ Ã‰KSÃ‘Ã‘Ä¯Ã‰Ã‘ÄŒo=Å—bE41lÃ„i%Ä­Ä¸uÅie-Ä¹A4Å€0]^AÄŒÄ¿",
azaleaLeaves: "0g0g5ÃÄŠZ000.NHÃ›3WÃŸRZ50Å‡5y>Ã‘Äw5Ä _Q0iÃ¶Ä¯Ã³Ãµ@hÃ¹0Ã³Ã¹Ä¯Pwn9AÃ«P]ÄrÃ¬kÄ„Ã¹yrÃ«iXÃºÄŒ4QÄ­oi4Ã«1]zhÄ Ã‰KSÃ‘Ã‘Ä¯Ã‰Ã‘ÄŒoAÄ˜bE41e@h%Ä­Ä¸i@ie-Ä¹A4Å€0]^AÄŒÄ¿",
pigSpawnEgg: function(n){
var pix = spawnEgg
var pix2 = spawnEggOverlay
for (let i = 0; i < pix.length; i += 4) {
var r = 255, g = 170, b = 170
pix[i] *= r / 255
pix[i+1] *= g / 255
pix[i+2] *= b / 255
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
for (i = 0; i < pix2.length; i += 4) {
if(pix2[i+3]){
var r = 255, g = 100, b = 100
pix2[i] *= r / 255
pix2[i+1] *= g / 255
pix2[i+2] *= b / 255
setPixel(n, i >> 2 & 15, i >> 6, pix2[i], pix2[i + 1], pix2[i + 2], 255);
}
}
},
crackedDeepslateBricks: "0g0g8Ã‡Ã’YÃšÄžZP)ZT4W-ÄºH$ÄšZAJHoÃŽY4ÄŠPAÃ±&wS0S0Å•w8Ã¹J8Å…%5A9@Ä†(;ÄºPÄ¥uaÃ”uÄ¶Ã”Ä–JÃ–$Ä‚Ä°ÄŽÄŸÃ§YÅ¥Å„ÅœA>nÃ€JÃ¬1(ÅX0ÄƒÃ—IÄ†w40lxCRÄœÄ§VÄœ&Ã½Ã³Ã«Ä‚+Åe5ÃƒÄ‚Ä°CJPAÄ£Ã‰Ã£ÅÅ‚Ãš",
crackedDeepslateTiles: "0g0g6$ÄšZAJHT4W-ÄºHÃ‡Ã’YP)Z4Ã¹9wJ19Ä$ÃºnÃ€KpÃš]AÄ¿Ã‘rÃ—Ä‰AÄ€0Ã¹Ä¹Ã’ÄžÅ€AJ1AgPJÄ±Ä€%Ã­Ä¿ÄUÅ€c2oÃ„ÄŽÄ¨dÄ˜Twg0w2PdÃ®Ã‘Ä™^Ã»$jÃ‚]AÄ¿w2J|Ã¾Ä§AÃ¹10Ã¹9Ã•AÄ€Ã‘NÃ»T+Ä§xÄ˜Äƒ",
deepslateRedstoneOre: "0g0ggÃ¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›H{ÄºH-ÄšZÃ¼gHÄ¯gHÅ£0WÅ¤Ã¢ZÄ«gHÃ¼0WÅ¥EYÃ¯Ã’YÅ›ÃžZ1yyOhizyzQOOxyOzh1lÃ„Q>)ONlÃ…GÃŽ0hi>EÃ¤Ä‚Ä¤ghz0xÄ¡Å€ÅˆxÃ¸Åˆ1i&Å•yOÅ•NlÃ„OghV>yÃÄÃwnÃ±Ã³Å™,Å¥yxy/Å†ÅŠuÅ‰Nz)>Å•0hCVKzzN1iÃ”ÅŸÅži-Å™hO=Ä•hz>QO0hÅ•)(ixg0iiAwhyh",
deepslateEmeraldOre: "0g0gcÃ¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›HÅ‚Å¥YnÃ£W1ÅˆY*ÃZ>Ä¯HuÃYnkH1yyOhizyzQOOxQOzkÃ„iAQÃ„)ONÃ”3OxÃ”1i>0kÃ­h0hz0zPÄ‚hxyx1oÃ½Ã¦Ã­OQNj]Ã¿Ä“Ã¬z?Ã*ÃÄ¢0ii+Ã+Ã0xA>(1g2NzPÄ€M0hzg0Ã¥Ã…ÄŠ1iOQhÃ§Ã¦ÄšhO)Ã„hEÄˆ4O0hÃ”4(2xg0i0Awhyh",
deepslateDiamondOre: "0g0gcÃ¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›HM4Wv|HGÄ…Wm.WÃ“EZÄ¾ZHÃŽÅŽH1yyOhizyzQÃƒOxyOzh1ÃBU>Ã¤Ã»NiÃ»,Ã²0Äi>yO.Ãºghz0x!ÃŸhÄÄšx1Ä‚Ã£Ã•ÄšÃ•Ã¼NiÃ‡ÄƒÄƒVÄƒ>yDÃ˜OVÄiON:ÄœyDÃ•Ã´)>iiÃzÄ¡Ã½Ã‚0hzg0BÃ…Ã­1i*Ã€hÃ¦Ã£Ã•Ä™OÄŸÃ²hEÃ–ÄƒO0pÃ»):Jxg0iiAwhyh",
deepslateCopperOre: "0g0gdÃ¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›H.Ä½WÅˆÄ«ZÄ¨Ã¼HÃ­5YÅ™6Y.ÄYÃˆÃ†W}ÅY1yyOhizyzQOOxA>zkV3QO@ÃONgBÃƒx01i>yÃ†Ã”Ã¬ghz0EÃ£Ã¹h)>x1i03z]XNi)>gqÄ¤ÄŸyz?Ã®wiÄ“Ã°Ã:Ä³Ä 1y*03iÃ‰0z)Sygh0g7zzN1iOBÃ°Ã¿ONhOÃ†RÃ†Ã€>?Äª0hz(1iw00iiAwhyh",
deepslateLapisOre: "0g0gdÃ¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›HpÃ‰ZxÃ•YloZgÅ‚ZhqZ?Ä¥ZÃ—ÃHgÅ€Z1yyOhizyz>QOxy>zhÃ„Ã…A)>Ã±3N1p7Äˆg0i>y((1hhz0z*ÃºhÃ•yx1-Ä“ÄyÄ“1NpÄ‰00h0jy!ÄšOFlGkN(0ypÃˆÄp>giJwÃ³Ä˜!KhÃ¨Ä§1w1rÄ‰i(chÃ¦ÄŠoÄˆO)Ä“ÃÄ“Ã«w30hÃˆÃw2xg0ig2(hyh",
deepslateIronOre: "0g0gaÃ¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›HÃ¢Ã¼ZÃ²Ä¼HÄ–,HÅÄ¡WÅŠaY1yyOhizyzQOOxÃ„Ã’zhÃ”ÃQ>6ÃO+Ã¤2zxg1i>0O+Ã”Ã£hz0xÃ”IÄ€ÃCÃž1i0Ã¤Ã«3QNiOO01z>yzCÃ wlÃ”ÃƒNOÃ…Ã¤Ã¬yÃ¤4>igÃ²3)0y0hz00zBÃ1iOÃ”1Ã„Ã¤Ã±ÃŽ+Ã¡0hDÃ²Ã30Ã’z)M01gh0iAxhyh",
deepslateGoldOre: "0g0g9Ã¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›HÄ…JWÅ‘ÃZZÄœYZÅ¢H1yyNhizyzQÃ€zxy)>h12?Q>?ÃƒNiAÃ„Ã0Ã„Ã‚>y*Ã”ÃgÃ“30xÃ”Ã¤ÃŽx0x1i6Ã£Ã‚OQNiO(K1zCÃ€zÃ„zÃ€ii(1OÃ”21yQM>i0hz)VÃ0hQ(3BÃ“Ã±ÃkVKlgÃ”Ã1*Ã”Ã±gzÃ„1O0mÃ)(0yK0g2Awhy1",
deepslateCoalOre: "0g0g9Ã¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›H8wYEÄŠYsÃžZPzZ1yyOhizyzQOQTyOzh1iÃ„Ã‘>Ã£ONiDÃ“Ã±Ã€hi?ÃMnV0hz0hyT0ARx1iQ>yÃ”Ã‘NiOÃ„Ã¡hCÃ«yzBÃ•Ã”ig2NOTÃ£0yN)>ii0z)>?Kh)QhzQM1iÃ†Ã’ÃiÃ°Ã‚hOmÃ€1zÃ’4O0g3Ã”M0xg0iiAwhyh",
deepslateBricks: "0g0g7Ã‡Ã’YÃšÄžZT4WAJHP)Z-ÄºH$ÄšZ4JPAÃ¹jw00Ã«0Ä“w1w08Ã»!8Ã¹i5j)!ÄŠÃºFÃƒiÄ¼Ã‚Ã³ÄÃ ÄžÅ‚ÃšÄŸÃ‰Ä“Å€Ä¥ÄƒÃ§Ã“Å…A2>4JP20Ä“w10i1jw40iS#y8Ã«Ã½E#h10ÄžÄŒÄ“aIÄŠÄžÅ‚Ã˜ÄžÅ‚ÃšÅ‚ÃšÄƒÃœÃšÄž",
deepslateTiles: "0g0g6$ÄšZAJHT4W-ÄºHÃ‡Ã’YP)Z0Ã¹90J1PÄ$JVÃ€Ã™pÃšPAÄ¿KpÃ—Ä‘AÄ€0qJÃšÄžÅ€AÃ¹1wgPJÄ²Ã—%Ã°Ä¿ÄUÄƒc0oÄ’ÄŒÄƒdÄ˜1wg0w2PdÃ®Ã‘Äš^Ã»$3Ã‚PAÄ¿w2J|ÄžÄ§AÃ¹10Ã¹9Ã–AÃ¹ÃšÃ­Ã»P+Ä¿Ã™2Äƒ",
deepslateTop: "0g0g5Ã’Ã¾HÃ‡Ã’YPBWÃ¢Ä¾H;Å›W5yS1ÄgiAÃ´dÄ§ÅˆQÃ±i^6Å‹Ãºhxw0ÅˆÃEÃ³ÃºgÃ«Ã0P]ÄŠ3Ã‚RÃº!QÃ²dIJ0,1xÄ aA78dÃ¼Ã‚QÄÃº1ÄŒ>Igr@S3Ãº2ÄªIÃ½A]JÃ¼Ã€Ã°sxÃ±hQ0ÅƒA,0AÄ‘yBiÃ‚",
polishedDeepslate: "0g0g7ÃšÄžZÃ‡Ã’Y$ÄšZP)ZT4W-ÄºHAJH00S42a4Ã¿#AÃ¾Å4Ä¡jÃ‘JÃˆhÄŸAÄUÄ–cÃ¾Ä°AÄšÃlFzCBmNÃ†ÅƒÃ¶ÄžÅ‰BÄ­PCiÃe@Å€&JÅl#AÄ‘Ã‡mhJPÃ½JÅ…ii_ÃºJÅaÄ±Ä’Äž]JAJÅ‹Ã‘JÃˆcJÄ¹Ã™J}FÃ‘ÄžÄ²Ã’Äž",
chiseledDeepslate: "0g0g6AJH-ÄºHT4WP)Z$ÄšZÃ‡Ã’Y000000FÄžÅÃšÄžÃ¹B+JÃšÄŒIJ]Ã‚]Ä°AÃ«0Ã‚]Ã«4Ã«19C04Ã£Ä½S0Ä£Ã˜XÃ»02i{5+S2+IÃ²ÄAÃ¹ÄžUhÄžÃ‘Ã¹Äg1ÄœÄ…Ä•ÄœÄˆ4ÄŽÄ¹ÃšÄŠÄ¿BCÅFoÄ·ipx(Ä€K000000",
cobbledDeepslate: "0g0g6PAZ)ÄºYÃ–ÄŽY;Å›HÃ¥ÅŽYÃ‡Ã’Y0ÄŽqÃ¹Ã€Ä•cÄ·Ä³TÃ°ÄAÄž^cÄ›Ã‰Ã#?5JÄ²ÃºÃ€bÃ‘ÄƒwV0Ä¯Ä™9#U+^Ã­Äœ3cÃ¾ÃˆÄˆq1ÃºM?cmÅ€Ã„Ä˜%ÃŽJÃšSmoeÄ«5Ä‰J_Ã›0SÄ”+UÃ·Ã«>Ã’Ã³ÅŒSiÅ€Ã‘]Ä¼knSÄÄ±]Ã™Å‚y",
deepslate: "0g0g5Ã¥ÅŽYÃ’Ã¾HÃ?W;Å›W$Ä›H5AÄƒAÄŒÄ¹}@Å‚?CÄºAiÃ¼J,rÃ•ÄŒÅ‚Q2^Ã¶CÅAÃ­Ãƒ1kÄŠBkÃº4ÄrPÄ¡qFÄžÄ¯B-Ä¹|+Ä·EÄŽÅÃ›QÃºPÄzEÄŽÃ»ÃŸ)Ã«BN0|+Ã¬FÄœ9FÄžÃ²ÃšÄ¯Ã²}.r0Ã¼ÅƒKÄŒ]0ÄŠÃ¼SÃ¼Ã²",
tuff: "0g0g5Ã‹Ã¢WÃ–ÄžZ|QHÃ°7YÄŠÃ²H4Jjw2Ä§Ã‘Ã¹rFib%JÃ†]0Ã‰ÃžÄš0QÃ¹S%Äš0%Ã¼aBÄˆbÃ™XÄ°xmÄ²Ã‘CÄ©Ã‘+Ä°0Ã­3wy]ÃšÄšb16SÃŸ(S$mÄ²Ã¹ÄŒgÃµÃ¾rFwbÃšÃ¹Ã¹AÃ¹Ã‰cXÃ‰ÃµÃ­Å€82Å‹ÃŽ2SSmÄ©PgÅ€",
amethystCluster: "0g0g8000ÄµÃ¸WZ&HÄšWWÃ¶Ä”ZZÅ¤HÃ¥Ã˜HÃ’pZ00000000100000aK0000^X0002^Ã¹Ã«002Ä•ÃÃ«00cÅ€Äº000dpÄºÃ«0]Ã¬Ä‰Å‚Ã«Ã‚FhÄ›Å‚Ã­ÃºNÃ»Å›Ã¤jÃŽN%ÅÃª>x6ÃÄ¦Ä‡t80Å”ÄŸÄ†Ãš00|ÅžOÅ00ÃœÅ£WÅ£0",
largeAmethystBud: "0g0g8000Z&HÄµÃ¸WZÅ¤HÄšWWÃ¶Ä”ZÃ¥Ã˜HÃ’pZ000000000000000000000000000000000000000w00001E00009Ãž0000lÃ‰Ã«01Äˆ%Ã‰XÄ§1)*Ä†ÄŽÃ«1ÃÃªÄ¦Ä„Ã«2Å”LÄ¦ÃšS0Ã‹Å–Ã…Å‘00ÃœÅ¤ÃÅ£0",
mediumAmethystBud: "0g0g6000ÄµÃ¸WZ&HÃ’pZÃ¥Ã˜HÃ¶Ä”Z000000000000000000000000000000000000000000000000000000000w00001Q000y1Qk00kÃŠ(ÄŠ00pÃÄšÄ©00Ã„Å’J/00@ÅƒÄ•Ä 0",
smallAmethystBud: "0g0g5000Ã¶Ä”ZÄšWWÃ¥Ã˜HÃ’pZ000000000000000000000000000000000000000000000000000000000000000000000w00001{0004Ä„%w00kÅ‹ÃžÄŽ00>zNo0",
buddingAmethyst: "0g0g9Ã’pZÃ¥Ã˜HÃ¶Ä”ZÄ±~WZ&HÄÅ–WÃŠÅYÃ†ÅHQÄZ1igjQÃ‚1CiB1xBÃ“iÃ273Ã5ÃÃg1wÃ¡(1BÃ«hiMÃ¤0NÃ¤Ã±ÃŽBR7Ã¯[Ã±>0)?ÃÃ¤Ã¤Ãž(2iÃ€5-w>gw1Ã€hÃ…8M2Ã€hj7IÃ•ÃŸÃ‚Nh)Ã¤X*Ã±*wiÃ€Ã±zi2Ãžg5MÃ¡M5)7Ã1iO0ÃŽjÃžNgiÃ€gjlglK1xh)xÃŽ+",
amethystShard: "0g0g8000Ãš/YZ&HUÅYÄšWWZÅ¤HÄµÃ¸WÃ¶Ä”Z0000000000000004JS000FAÄ§001Ã²ÃŠÄ§00aJÅ•Ä§00ÃŸÄ€Å¥Ä§03NÅƒÅ00p*;Ä˜00ZÄ»<Ã«01Ä‡;$001ÄžÃ¨K001ÄšÅ¢0000,Ä¯00002S000000000",
amethystBlock: "0g0g7Ã’pZÃ¥Ã˜HÃ¶Ä”ZÄ±~WZ&HÄÅ–WÃŠÅY5ibJÄˆÃ„!ÄˆÃÃ…ÃÃ¹8Ã«Ä‘na]5dI4Ã„Ã²FÄ„0EkMÃ„y9Ä•jÃ«ÃŸÃˆ]Eg2!Ã«Ã–QÄŠg6Ã¯ÃˆwgÄAÄ’Ã€Ä¿Ä‹ÃˆBÃ„Ã·5UÃ€!Ä¾Ã€!Ä¢IlÄ°Ã–0ÅƒF5DÃ«Ä«Ã¹ÃˆwÄ’8$Ã­ÅŒÄ§kPÃžsÃŒ",
snow: "0g0g3ÅžZZZZZÅšZZlTlSVÃ‚Ã½hV!Ã¾VÃ‚Ä‘ÃˆlÃˆÃ¬Ã•Vah]ÃkBhÃ†ÃÄ‰?Ã—UÃ¼Ã¯F^iÄ‰Ä‰qÃ„Ã°S?Ã‚Ã³kVa0VUE4ÃˆmÄˆlÃ•10VÄˆ",
powderSnow: "0g0g3ÅžZZZZZÅ–Å–YlTlSVÃ‚VhVCÃ¾VÃ‚Ã–ÃˆlÃ‡Ã¬Ã‘V6h]ÃkBhÃ†ÃÄ‰?Ã—UÃ¼Ã¯pPiÄ‰Ä‰qÃ„@S?Ã‚Ã²kVagVUo4ÃˆmÄˆlÃ‘14VÄˆ",
snowGrass: n => {
const pix = getPixels("0g0g7Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÃ°oHÃšÄžZÃ¢Ã‘H4ÄŒ9PÄŒg?ÄŒÃSÄˆÃ‰9(J9CÄ©)yÄ·BkaEÃ°Ã‚%UÃˆ{Ã¼Ã‰Ã–)Ã¹9EÃ¹84Ã]2Ã‚$Ã¼Ã²FkÃƒQÄŒÄ‚?ÄŒÅPwh?0Ã¬KNÃFihÄŒÄŽÃƒ{ÄŠRPAÃ«?$Ã²{)9FXÄº1kÃ²EiÄŠByÃƒ");
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
const { random } = Math;
for (let x = 0; x < 16; ++x) {
const m = random() * 4 + 1;
for (let y = 0; y < m; ++y) {
const d = random() * 0.1 + 0.9;
const r = 0xff * d;
const g = 0xff * d;
const b = 0xff * d;
setPixel(n, x, y, r, g, b);
}
}
},
snowball: "0g0g7000Ä—$YÄºÄ¶WÅ’Å–YÃ¦Ä‚HZZZÄªÃšY000000000000009A0002ÃƒÃ•Ä§00kÅ‘Ä•o00nÃ‹Ä–Ä00ÄÃšÃ¢O00Ä“ÃšÄÄ•00ÄÃ‹Ã–ÅŒ00Å“Å’Ä—z00lÄ›Ã‰Ã•00>ÄžÅ€o009aÄ­S000AÃ¹00000000000000",
powderSnowBucket: "0g0gb000Ã dWZZZÅ†Å†HYÄ¶W)ÄºHÅšZZÅ‚ÃšYÄ’Ä’YÃžÄ®WÃ¾Ã‡H000hh000001y)g0005iC>TÃ€00Ã@)NM?00UiÃ)kl00VÃO>?V00Ã…Ã¯VUÃ‡Ä00Ã…GÃ¤XÃ»Ä00Ã…ÃŸÃ¤Ã³ÄÃ¯00Ã†ÃŸÃ¤XÄÃ¯00Ã‡ÃŸÃ¤Ã³ÄÄ005GÃ¤Ã³Ä‚Ã€005Ã±Ã¤Ä’Ä‚Ã€000Ã†Ã¤Ä‘Ä00005VVÃ€0000000000",
bread: "0g0g8000Ã’xHÃ¶ÃºZÄ‰Å‰HÄ¦yH;Ä˜Z{ÅˆWV1H0000000004J0001FÄœS00aJ@Ä00Ã^]Ä03AÃ¶@Ä0pAÃºÄ«Ã•0ÄŽÃ¼JBÄ0Ä°qÃºzS5PzÃ²q05Ä°A]Ä·05Ä¡y@Ã«0t+J)00sÄŒÃºÄˆ003iÃ¢0000Ã˜Ã•000",
dirtPathSide: n => {
const pix = getPixels("0g0g7Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÃ°oHÃšÄžZÃ¢Ã‘H4ÄŒ9PÄŒg?ÄŒÃSÄˆÃ‰9(J9CÄ©)yÄ·BkaEÃ°Ã‚%UÃˆ{Ã¼Ã‰Ã–)Ã¹9EÃ¹84Ã]2Ã‚$Ã¼Ã²FkÃƒQÄŒÄ‚?ÄŒÅPwh?0Ã¬KNÃFihÄŒÄŽÃƒ{ÄŠRPAÃ«?$Ã²{)9FXÄº1kÃ²EiÄŠByÃƒ");
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
const { random } = Math;
for (let x = 0; x < 16; ++x) {
const m = random() * 3 + 2;
for (let y = 0; y < m; ++y) {
const d = random() * 0.25 + 0.65;
const r = 223 * d;
const g = 195 * d;
const b = 117 * d;
setPixel(n, x, y, r, g, b);
}
}
},//"0g0gA000Ã†Å™YÄ¢?WÄš)ZÄŽ4YÄŽ)YÄžQZÄ–AZÄ¦VWÄ¢VWÄŠ4HÃšÄžZÄ–)ZÄ¦Ã¢WÄ¢Ã¢WÄ­Ã½HÄž?WÄ–VHÃ¥ÃƒYÄ¢VYÄšÃ‘ZÄž)ZÄ’AYÄŽkHÄ©Ã½ZÄ¢Ã¯YÃ½Å›WÄ¢Ã¢YÃ¢Ã‘HÄ­ÄŽWÄ©Ã’YÃ½ÄœYÄ¢lZÄ–kWÄ¢Ã’YÃ°oH0000000000004gÃ¬0M5oÃX8Ã­^4Ä™ÄªcÄ‹d4ÅˆÃ­<4TP*l;ÄÃ¿KmTÃ’ÄŽÄ¨ÃžDÃŒPÅ›Ä‡Ã­nÄ¹^wÃ‰%DÄ¨PwÃÃ©DÄ¨4kJ5AJÃ­4J^)JÃ­4ÄˆÃ¬DÄ¹Ã©AÄˆÃ¬ÅžÄ¹PÅ—ÃÃ©AÄ‡Ã©Å›JÃ©DÄ¹5DÅ†PAÃ¬PDÄ¨PwTPAJ^8iÃ©DÄ¹Ã­4ÄˆÃ¨ow5ÅžÅŠPÅ›JÃ©ÅŸiÃ¨ÄŸÅ†]nÄ¹5wÃPÅžÅ‡PAJPAÄˆÃ¬DÄ¹PÄ«Ä‡Ã©wK5EvÃ©Å›Ã¬Ã¬wÃ‚68iÃ©AÄ‡Ã©Å›ÄˆÃ©Å›Ä‹PÅžÄ¹PÅžÄ¹4",
dirtPathTop: "0g0g4Ä‚4WÃºÄ»WÃ¯Ä‹YÄ’)Y55Ã‡Ä°lÄ»9ÃªÃlÃ±Ã„Ã–ÃŠÃ”Ã?bÃŽB>Ä®Ã„9V?ÄšÃ‰kÃ–Ã¢Ä„oQÄ¨|_5ÄˆV3lUÃ©QTÄ¬?ÃžÃ€Ã¨UÃ¢Ã¦Ã‚Ã¬?Ä¨PQUÄ»Vl",
farmlandMoist: "0g0g6UÄ˜Z;Ã«Y)KHÃ™Å˜HVVHÃšÄžZ0ÄŠS0ÄŠrKw>0k3cy0Ã™koÃ™ÄŠ>KiÃ‰KÄ«]Ã™k>1kScÄŠÃ‰Ã™X8ÄˆÄˆ>Kk34ypÃ™y0Ã‘ÄŠrcy>KÄŠrKÃ¼Ã†KÃ¼32gÃ‰Ã™k>KÄŠrKl0Ã™y3cySckoÃ™yocÃ¼SKÄŠÄ¿",
farmland: "0g0g6Ã½ÄœYÃ¥ÃƒYÃ†Å™YÄ¢lZVVHÃšÄžZ0ÄŠS0ÄŠrKw>0k3cy0Ã™koÃ™ÄŠ>KiÃ‰KÄ«]Ã™k>1kScÄŠÃ‰Kk8ÄˆÄˆ>Kk34ypÃ™y0Ã‘ÄŠrcy>KÄŠrKÃ¼Ã†KÃ¼32gÃ‰Ã™k>KÄŠrKl0Ã™y3cySckoÃ™yocÃ¼SKÄŠÄ¿",
boneBlockSide: "0g0g4Å†Ã™HÅŽÃ¶WÅ’Ä…HÅŠÃ¨Y6Ã—ÄŽÃ¨6Ã—Ä’Ã+Ä’Ä’Ã+Ä’Ä’Ã*Ä’Ä’Ã¨*Ä’Ä’Ã¨*Ä’Ä‘Ã¨ÅÄ’Ä‘Ã¨ÅÃ—Ä‘Ã¨+Ã—ÄŽÃ¨+Ã—ÄŽÃŠ*Ã—Ä’Ã€*Ä’Ä‘Ã€*Ä’Ä‘Ã€6Ã—ÄÃŠ6Ã—ÄÃ¨",
boneBlockTop: "0g0g6Ä²qHÄ¶!ZÅ†Ã™WÅŠÃµYÅ’Ä…WÄ©Å¡W5,AJ+Ã¯FÄžÃ²F+Ä·|Ä‹SÄœÃ¼ÅÃšhÃ•2JÄƒÃ™Å‚ÃšÄˆaÃ‰Ã³Ã´Ã•Äœ0UI1ÃšÄžÄ¸UXb?ÄžÅcX1ÃšÄžÃ³cÃ³Ã´Ã•ÄžÅ‚{IÃ«%ÄžÅ‚UÃ™Ã¹0ÄœÃ€Ã‰Ãšj?ÄžÃ­Äƒ|ÄŠ|2Ã¼Å9ÄžÃ²F+Ä¸Ä‰,AJ+I",
boneBlockSW: "0g0g4Å†Ã™HÅŠÃ¨YÅŽÃ¶WÅ’Ä…H01S05VVÃ€Ä’Ä’Ä’Ä’Å¡YÅ‘ZÄ—Ä’ZÅ¡ZZZZZZZZZZZZZZZZZZZZÄ—Å’ZÅ¥Ä’Å¥Ä—ZÄ’Ä’Ä’Ä’Ã—ÄVVÃ€lV10000",
glowBerries: "0g0gg000Ã“RZÃÅ‰W{Ä¨HFÃZ%JYÄªiZÃ‡1WÃžTZÄ¥ÃºHÅ™UHÅž5ZÅžÃ°YÄ¼Ä¨YÃºhY.ÄªW000000000000iw000001)Ã„000003Ã¡RK0000Ã¤Ã¡QK0007Ã«Ã«Qm009ÄÃ¹Ã«4Ã„00Ä‚Ä£Ä‘85Ã„09Ä”Ä´ÅÅ5Å˜09Ä”Ä•ÄƒÅŽ0Å˜09Ä’ÄÄƒÅÃ¹Å—09Ä•ÄÄ”Å’Ä–000Å‘Ä•ÄµÄ‚Ä–000eÅ•ÅÄ’Å…000000Å•Å‡0000000000",
hayBlockSide: "0g0g9Ã²Ä©WÄ¦Ä‹WÃ¾1ZÄ±ÄºWÄ’RHÄyZÄRYÃº2WXÄ¸Z1x3xxTx>xxzxAxT42T1A244QÃ„Ã£Ã“GÃ¤Ã£Ã“Ã£AA4AAA42xTx34AA4T>xzT>AxT>>x>T>>>>>>>>>>>z>>T>>x3xAARx1TGÃ“Ã…Ã„Ã…Ã£Ã“Ã£2w022A2240A44y24A4x1xA434x3x3>zz",
hayBlockTop: "0g0g5Ä¦ÃºWÃ½Å˜WÄ–(YÃ²Ä¨WÄµÄ§Y5yÄ¸BA^ÃŽ2JÃ•ÄŠRPQiÃ€wÄºÃ•Ã±8FÄÄ$Ã¹Ãƒ{ÄŠhÃŽÄŠÄ„9Ä‹qP8T@4ÃSÄœÃ²Ã€ÄŒÄ±M11?o2?iÄ¿Ã€yiFÄŽÃ³(ÄŒÃ»ÃŽÄaÃŽ5aÃ€)Ãƒ{Ã¹Ä¨Ã–ÄŒÄ‰EX9BkRRAÃ¬8Ã¾Ã³Ã•ÄŠÃ†",
hayBlockSW: "0g0g9Ã²Ä©WÃ¾1ZÃº2WÄ’RHÄyZÄ±ÄºWÄ¦Ä‹WÄRYXÄ¸Z10wOOhSgOMBVÃ“ÃÃžÃ“g1ÃžjOMzhÃ0Ã£VVÃÃ£Ã“1gTOMgÃgÃ„(zVÃ„ÃÃ£Vg0TOh1xhÃ“MÃ VÃ’ÃƒzÃ“10>OO1whÃ„MxÃ’Ã„OÃ¬+MhxOOhwjÃƒjÃ£VÃ’OÃ Ã“g0ÃOMgÃMÃƒhÃ£VÃƒOÃ Ã“g0zjM0z3VMÃ£Ã’Ã„MÃ *",
wheatIcon: "0g0g7000Ã¶ÄºZV>YÃ©Ä‹WÄŽVWÄµÄ¬YÅ…ÅH0000Ã«0000}2000gÃÄ˜100j)Ä®800pÄŽoS00xÄ­Ä‚^00BÄ·Ä¹Ã€00ÅÃ¼Å€q01&Ä¹Ã¾Ã¹06ÄžÃ¯ÄŒ00)Ä»Ã–m09Ä¿JSAÃ«eÄ±Ã¹0006+Ã«0005CÃ«000840000",
diamondShovel: "0g0ga00WcÅšH8JWOÄ”YCÄ°Y#qZ]Ä¸HÃ²JHEÃYÃ–MZ0000000000000000000001i000000j)w00001*>w0000jUÃƒw00006?N00000Ã”Ã®w00006Ã¤200000Ã–Ã«000006Ã¤000000Ã–Ã«00000Ã“Ã¤000000Ã”Ã«0000008Ã«0000000000000",
goldenShovel: "0g0ga000Ã¬ÃžH;Ä˜ZZÅžHÅ‘Ä¨HÅ’ÄH]Ä¸HÃ²JHEÃYÃ–MZ0000000000000000000001i000000j)w00001*>w0000jUÃƒw00006?N00000Ã”Ã®w00006Ã¤200000Ã–Ã«000006Ã¤000000Ã–Ã«00000Ã“Ã¤000000Ã”Ã«0000008Ã«0000000000000",
woodenShovel: "0g0ga000)Ä‰WwKYÃ¯JHÃ–TZÃ¢ÃW]Ä¸HÃ²JHEÃYÃ–MZ0000000000000000000001i000000j)w00001*>w0000jUÃƒw00006?N00000Ã”Ã®w00006Ã¤200000Ã–Ã«000006Ã¤000000Ã–Ã«00000Ã“Ã¤000000Ã”Ã«0000008Ã«0000000000000",
ironShovel: "0g0ga000?kHoÃŽYZZZÄªcWÅ‚ÃšY]Ä¸HÃ²JHEÃYÃ–MZ0000000000000000000001i000000j)w00001*>w0000jUÃƒw00006?N00000Ã”Ã®w00006Ã¤200000Ã–Ã«000006Ã¤000000Ã–Ã«00000Ã“Ã¤000000Ã”Ã«0000008Ã«0000000000000",
stoneShovel: "0g0ga000PAYoÃŽYÄ‚Ã–YÃ©ÅžZÃ³EY]Ä¸HÃ²JHEÃYÃ–MZ0000000000000000000001i000000j)w00001*>w0000jUÃƒw00006?N00000Ã”Ã®w00006Ã¤200000Ã–Ã«000006Ã¤000000Ã–Ã«00000Ã“Ã¤000000Ã”Ã«0000008Ã«0000000000000",
diamondAxe: "0g0gb00WcÅšHOÄ”YCÄ°Y#qZ]Ä¸HÃ–MZ8JWuDHEÃYÃ²JH0000000000001g000000ix000001zT00000iO*K0000ÃŸ>Ã®Ã¹00007Ã¢-,00000Ã„Ã»,00005Ä‘7Ã0000Ã„Ã¹000005Ã–000000ÃˆÃ¹000005Ã–000000ÃˆÃ¹000000Ä00000000000000",
goldenAxe: "0g0gb000Ã¬ÃžHZÅžHÅ‘Ä¨HÅ’ÄH]Ä¸HÃ–MZ;Ä˜ZÅ…ÃWEÃYÃ²JH0000000000001g000000ix000001zT00000iO*K0000ÃŸ>Ã®Ã¹00007Ã¢-,00000Ã„Ã»,00005Ä‘7Ã0000Ã„Ã¹000005Ã–000000ÃˆÃ¹000005Ã–000000ÃˆÃ¹000000Ä00000000000000",
ironAxe: "0g0gb000?kHZZZÄªcWÅ‚ÃšY]Ä¸HÃ–MZoÃŽYÃ¾Ã‡HEÃYÃ²JH0000000000001g000000ix000001zT00000iO*K0000ÃŸ>Ã®Ã¹00007Ã¢-,00000Ã„Ã»,00005Ä‘7Ã0000Ã„Ã¹000005Ã–000000ÃˆÃ¹000005Ã–000000ÃˆÃ¹000000Ä00000000000000",
stoneAxe: "0g0gb000PAYÄ‚Ã–YÃ©ÅžZÃ³EY]Ä¸HÃ–MZoÃŽYÃšÄžZEÃYÃ²JH0000000000001g000000ix000001zT00000iO*K0000ÃŸ>Ã®Ã¹00007Ã¢-,00000Ã„Ã»,00005Ä‘7Ã0000Ã„Ã¹000005Ã–000000ÃˆÃ¹000005Ã–000000ÃˆÃ¹000000Ä00000000000000",
woodenAxe: "0g0gb000)Ä‰WÃ¯JHÃ–TZÃ¢ÃW]Ä¸HÃ–MZwKYÃ‡1YEÃYÃ²JH0000000000001g000000ix000001zT00000iO*K0000ÃŸ>Ã®Ã¹00007Ã¢-,00000Ã„Ã»,00005Ä‘7Ã0000Ã„Ã¹000005Ã–000000ÃˆÃ¹000005Ã–000000ÃˆÃ¹000000Ä00000000000000",
strippedDarkOakLogSW: "0g0g7|2ZÃ‡zWÃŽOWÃ’>WÃšÃƒHÃŽzWÃ–>H000000BAPAÄŒRQJÃ´ÃŸEÃ²Ã›]Ä‚By{]Ã¿xBÄŸAÃ›iÃ‰}ÅƒÃºÃžAÅ›JÃ™{Ã‚QJÄ¹QÃ¼BPlÄ’ÄŽJÃ‚CÃ»Ã›Å‚AQÄ‘xAÄŒÃ»DAJ^@JJÃÃ‚ÃšÄ°sQÃ»zÃJJBy^QÄŒJ009w00",
strippedSpruceLogSW: "0g0g9Ã’ÃƒWÃŽRZÃžÃHÃ¥ÃHÃ¬Ã®YÃ©Ã HÃ¯Ã®YÃ©Ã YÃšÃW101hh01hwyyyw3Q(N2NyO0OyV(0)@Ã’+?Ã0OQVO>Ã‘+QÃyw2yOÃ‘>ON0NVV0)Q>)@Ã‘)O>,Ã“Ã‘GNy03Q00O0N3OhnÃ *(3(00OÃ‘QVÃƒÃ‘VÃVÃƒ03Ã“+>03-3Q(2yxIyI001h1g0ghg",
strippedJungleLogSW: "0g0g7Ä–5HÃ½Å›HÄ†kZÄžlYÄ¢+WÄ¦@HÄ‚4Y4ÄŽÅŒDRTÃ™Ä¬%FÄ³TÃ¡Ä°4VÄ³3Ã¡Ä Ä«VÄœri-3Ã‚Ã‘ÅŠ+8Ä‹Ã»wze6Ã˜Ã¶Ä‰8$8ÃÃ¢?8E?yÄ˜*a!*bÄ-Ã³]ÄžyÃ²)Ä@-qÃºQÄ¸!oÅ€Ã–Ä§Å™FhhÅ€Ä®Ã®1Ä˜Ãµ?ÅŽÃ®dhdDgT",
strippedAcaciaLogSW: "0g0gqÄ…ÃYÄ‰ÃYÄ…ÃHÃ½ÃHÄÃYÄÃHÄ‘ÃYÄ‘Ã YÄ™Ã ZÄ™Ã YÄÃ ZÄ•Ã ZÄ•Ã YÄ¡Ã®ZÄ™ÃYÄ¬XWÄ¥Ã®ZÄÃ®ZÄ‘ÃZÄ•Ã®ZÄ¡Ã ZÄ¨XWÄ‰Ã YÄÃ ZÄ‰ÃHÄÃH0Q1ÃµÃ«p{18>-Ä©ÃŸgXygÃ­gÅÃ‚Ä¿ÄªÄ…898ÄÄÃ•Ã Ä„ÅžÄžhÃŠÃÄ¾Ä¥eÃ Ä†ÅÄ©MÃµÃ’.ÄµÃ›ÄEXÃÄµÃ¢Ã˜8oÄ­ÃµÅŽoÄ­&Ã§Å‡Ä¿Ä­MMÃ­IÄ­MÃ Ä„ÃhÄµ(Ã–[.ÄµÄsÅÄ­CÃ§Å†8.ÄµÃ ÄÅŠÃ‚Ã¼Ã§ÅÄºÄ¥Å—Ã®Ä‹oÄ¹Ã¼ÃµÃÃ±.Ä·Ã Ä„ÅŠÄ¢MRÄ³X*ÄRnÃ˜Ã†cÃ–cÃ“Ä8TÃ¿Ã˜xdp4:ÅƒÄ€x9Ã oÄ­oÄ«x8Ãr6;I>",
strippedBirchLogSW: "0g0gnÄšÃ“WÄ¢ÄHÄžÃ£HÄžÃ°YÄ¢Ã°YÄ¦Ã¾ZÄ±Ä¾YÄ­Ä®HÄ©ÄWÄ­ÄŸWÄµÅŸWÄºoHÄ­Ä¾ZÄ­ÄŸHÄµÅŽZÄº8HÄ¹ÅŸWÄ±Ä®HÄ±Ä®YÄµÄ¾ZÄº8WÄ­Ä®YÄ©ÄŸW0Q0cx8X(Ãµ08RRkÄ®/6(ÄFaJigwyÃ¼JgÃ°Ã‚RlÄ™Ã²^Ã‚gÃº^:ÃŠÄŸÄ¦gX2Ã¼Ä«Ä­Ã»ÃˆÄÄ¥Å‘ÃŸÃ¼ÅŠÄFÃ¡Å‚EÄ«Ä­MJÄŸÄ‘@Ã¢EÅŠp^_Ã„ÄŸÄ‘Ä±Ã‚ÃµÃ¼Ä…ÄµÃ JÄÄ¥^ÃžJÃ¿.ÄµÃ‚Ä„ÅŽ.COÄ„ÅŽoÄ°:Ä…oÄ«Ä­MÄ„JhÃ—Ã‚{Ã’F@PÄ„qÄ•Å–ÃÄ„ÃoÄ­iÃ‚Ã¹ÃºÃ—(RÄˆÃ¯FgXg4+x$_BwoX(8>gQy4A",
strippedOakLogSW: "0g0gmÃºÄ»HÃºÄ»WÄÅ›HÄŠ4YÄÅ‹HÄ–*WÄž?YÄ©Ã£WÄš*HÄš?YÄ–BWÄ¢VYÄŽAZÄš?HÄ¦Ã¢ZÄ¦Ã£WÄ©Ã°HÄ¦Ã’ZÄž?HÄ–*HÄ†4HÄÅ›W0Rx4200M80p6ÃƒcÄ‹x6RcÃ/6)Ä!!Ä½Ã‚Ã¼Ä“.JÃ¼Ä™IT^MÃ¶Ã˜ÃˆÄ½ÄžÄÄ¶.ÅƒÃ‚Ä ÅŽÃˆÄ½ÄÄ•Ã›;wÃ¡wÄ/ÅƒÃ¢Ä•F^Ã‚Ã¿Ä„ÅŽ.Ä½ÅŠÄ†gÃ¡Ã„ÄÄ•Ä®ÃˆÄ½ÄšÃ½Ã˜.Å„lÄ•Ã”.Å‡Ã‚Ä•(;wÃ Ä…Ä²._DÄ¤ÅŽÃŸÄ½Ã¼ÄŒÅŽÃˆÄ½Ã‚Ä¡Ä¬!Å‡Ã¤R7Ã†Ä®*ÄF^}G%Ã˜;Ä­.Ä”ÅŽÃCÃžÃ¶8Ä„Ä¯PÃµÃ™Ä„ÅŽ.Ä´bx6/Ã„Ä‹ÄÄ©kcÃ•",
strippedDarkOakLogTop: "0g0g9)Ä‰Z(Ä‰Y{Ä¨Y]Ä™HÃ€ÅˆY(ÃZ-ÃºW;Ä‰W-Ä™Z0g0hg1002yzz>NyxiVÃ“Ã£GGÃ“S2URyzyCx3ÃOOOOD(iÃŸ+Ã”Ã£ÃC(3Ã*OOÃ+x3ÃŸ+,Ã Ã D-3ÃŸ+,ÃÃC-3ÃŸ+OOÃ +(3Ã+Ã’Ã”Ã D(Ã®ÃŸOOOOC(Ã­ÃŸzyyACMiÃ£Ã£Ã“Ã“Ã“Ã“xiyOz)OywÃ«g0g00hg",
strippedSpruceLogTop: "0g0g9QÅ‰WSÄ¸ZQÅˆZÃ¬Ã®YÃ¥ÃHÃ²Ã»YÃ‡iHÃŽyZÃžRZ0g0hg10yzO))U>O(jÃ“GÃ±IIGÃ€3Ã’ÃƒO)O,M4Ã QQQQ-SjÃ®[Ã¤Ã±Ã¡,SkÃ¡@QQÃ¡[MkÃ®[[Ã¡X-S4Ã®[[Ã¡Ã¡,S4Ã®[QQX[S4Ã [Ã£Ã¤X-SkÃ®QQQQ,SjÃ®)OO*,TjÃ±Ã±GGGGM3OQ)?QO(0g0g00hi",
strippedJungleLogTop: "0g0g9Ã½Å›HÄ†4ZÄŠlWÄ†kZÄ¢mHÄ‘ÅŒHÄ¦+YÃ½ÄŒHÄ…Ä«Y0iN0002x4Q??Ã’UQTkGGÃ±IIGK4Ã£Ã‘Q?Q[RlÃ¡VVVV]ÃƒkXÃ…Ã¤Ã±Ã¢[ÃBÃ¢Ã…VVÃ¢Ã…RlXÃ…Ã†Ã¯Ã¯]Ã5XÃ…Ã†Ã¢Ã¢[Ã€lXÃ…VVÃ¯Ã…ÃlÃ¡Ã…GÃ¤Ã¯]Ã5XVVVV[Ã€AX?QQ@[ÃkÃ±Ã±GGGGTkQV?Ã„VQRhx0ihhg0",
strippedAcaciaLogTop: "0g0g8ÄÃ YÃºÃƒHÄ¡Ã®HÄ•Ã WÄ¨Ä›ZÃ¶NYÄRYÄ‰ÃƒW0Ã«9wg09AÄºÃ¶ÄŒÃ¹!Å„Ä¦ZÅ¤ÄˆaÄ¯J|BÃºfCÅ‚ÃšÄÄ¿#ÄÄŸÅ¢*Ä€L,Ã‰Ãœ,ÃºLÄÄ‡Å–ÄÄ¿fÄÄ‡Ä¶*Ä€fÄÄƒÃœÄŸÄ€fDÄÅ†ÄÄ¿LÄŽÅ‚ÃšÄÄ€#ÄŒÄ¹P?Ä#Å–ÄžÅ‚ÃšÃº9CÄºÃžÄœÃ¹0Ã«802]",
strippedBirchLogTop: "0g0g8ÄŽ*HÄšÃ“WÄ¾8HÄ±Ä¾YÄ¾EZÄŽÃ„HÄ–GHÄ¢ÄH4J84J]FAÄºÃ¶ÄŒÃºaÅ„Ä¦ZÅ¤Äˆ!Ä¯J|BÃºLCÅ‚ÃšÄÅ€#ÄÄŸÅ¢*Äf,Ã‰Ãœ,ÃºfÄÄ‡Å–ÄÅ€fÄÄ‡Ä¶*ÄLÄÄƒÃœÄŸÄfDÄÅ†ÄÄ¿LÄŽÅ‚ÃšÄÄbÄŒÄ¹P?ÄbÅ–ÄžÅ‚ÃšÃº9CÄºÃžÄœÃ¹AÃ­PAÃ«P",
strippedOakLogTop: "0g0g9Ã©Ã»YÃ²Ä«WÃ¯ÄœWÄ¢VZÄ–*HÄ©Ã£WÃ©Ã®HÃ½Ä»WÄ†kZ1gw0yxh23O))U>O(3Ã“GÃ±IIGÃ3Ã’ÃƒO)O,(4Ã QQQQ-SzÃ®[Ã¤Ã±Ã¡,T4Ã¡@QQÃ¡[M4Ã®[]XX-T4Ã®[]Ã¡Ã¡,S4Ã®[QQX[RkÃ [Ã£Ã¤X-R4Ã®QQQQ,R3Ã®)OO*,S3Ã±Ã±GGGG(3OQ)?QOM0g000000",
strippedDarkOakLog: "0g0g7|2ZÃŽOWÃ‡zWÃšÃƒHÃ’>WÃ–>HÃŽzW5+Äƒ&m]1CÃ$Ä€]8ÄŽÃ$Ã¾]5Ä‘Ã–Ä€Ä­I4ÄÄ“-ÄžI9ÄÄƒÅ€-Ã¹9ÄrMoÄ·aAÃ‹Ä¸paalpÄ¸ja9[FBJÄ¹8Ã¾Ä‰Ã’Ã¼Ä·5-Ã²ÃžÃ¼Ã¹5)Ã´Ã‘Ä‚I5)Ä²%Ã„I9>r|CÃ¹8ÄªxQÄŽÃ€",
strippedSpruceLog: "0g0g9ÃŽRZÃ’ÃƒWÃžÃHÃ©Ã HÃ¬Ã®YÃ¥ÃHÃ¯Ã®YÃ©Ã YÃšÃW1z?)yVÃŽh5AÃ’*BjÃ’g4Ã„Ã‚)xjUgkVR+ÃÃƒkgljÃ‚CÃ¢)lÃ¬hmÃUÃ¢UhÃ«1Ã„MkTUÃ†x2UNlÃŽÃ£*x2ARBÃŽÃ¢*Ã¬2BRUÃŽ5MÃ«2xVUÃ¡1Ã0iÃÃ„UU1ÃŽxixkUVÃ*wilk?TÃ)w1zÃ„TÃÃ@wiÃƒÃ’ÃŽÃlÃ’h",
strippedJungleLog: "0g0g7Ã½Å›HÄžlYÄ–5HÄ†kZÄ¢+WÄ‚4YÄ¦@H0JÃ‚Ã™6]Pp00Ä¢J1yÄŒÃ¶Ã»Ã•mÄžÃ»ÃžÄœ^JqÅƒAÄ°EÄŒÄ_PÄš|fÃ–eÃ¶Ä®S1ÄŸxÅ>Ã†ÅRPÃ’Ä˜CÄB)Ã­iÄ§NkÄ§Ãºzs&PcÃ™Ä¯JÃŸiJXÃ¹809yÃ€]Ä²7Ã–Ã²ÃšÃ°Ä¸QÃ¼g1Ä˜i",
strippedAcaciaLog: "0g0gqÃ½ÃHÄ™Ã YÄ™Ã ZÄ™ÃYÄ‘ÃYÄÃ®ZÄ¡Ã ZÄ•Ã YÄ¡Ã®ZÄ…ÃHÄ‘Ã YÄ•Ã ZÄ•Ã®ZÄ…ÃYÄÃYÄ¬XWÄ‰Ã YÄ¥Ã®ZÄÃHÄÃ ZÄ‘ÃZÄ¨XWÄÃHÄ‰ÃYÄ‰ÃHÄÃ Z0QMÃ¹Ä‹xÃµÃƒÄˆÃ«^Ã¾CgÄ‹FÃµÃ„IÃ²_Ã¹ÅgÄ–FÃµ-8Ã²_Ã¾ÅQÄ–FaÄSJÃ•Ã¾Ã°?4oÄ±-RKwÄ„ÃˆÃ„zpÃ³*Ä•Ä§Ä˜Ä„Ã‚Ä¼ÅŠ(Ä­MhÄ®3Ä–ÄšÃ¶ÅŠ(Å‰M9Ä§Ã˜XÃ‚ÃµÃ’oÅŠhb0Ã Ã¯iÃµÄoÅ…)9Ä§3Ã¼IÄ€ÄoÅ…)yÃ–3Ã¼Å›8ÄsUMyÃ–Ã—Ã·ÅžIÄŠ)Ã€xg9|Äµ,ÄÃ¿OÄ·Ã‚hFÄ mMÄXÄ£Å…VÄ¡Ä§Ã—ÄšMÄ€ÄŒzÅ…Ãw0",
strippedBirchLog: "0g0gnÄšÃ“WÄ­ÄŸWÄ±Ä¾YÄµÅŸWÄ¢Ã°YÄµÅŽZÄ¢ÄHÄžÃ°YÄ±Ä®HÄº8HÄ­Ä®HÄºoHÄ©ÄŸWÄžÃ£HÄ©ÄWÄ¹ÅŸWÄ­ÄŸHÄ­Ä¾ZÄ¦Ã¾ZÄ­Ä®YÄ±Ä®YÄº8WÄµÄ¾Z0QM4>oXx440]M4Ã’oQM4C-]Q4ÃPÃ€MoCMIKÄ‘FÃ‡Ã€MpX.Ä©KÃ½Ã˜Ã‡Ã€xcÃ¶Ã–Ä­jc#9^yÄÃ¶Ã˜Ã°nÃµÃ€EÄ±iÄ€Ã°NInÃ¼TEÄ»-IÃ¶NÃ«nÃµ>FR)Ã¶Ã±(Ã¶nÄŒ>FQÄœÄ”Ä´;Ã²kÄ2ÃQ?Ã¹Ä´18ÄœÄ29^PÄ€01cÃ’Ã·Ã¯8^j4Ä®Ã–Ã­ÃÄ©lg^Ã‚Ã¯Ä•MÃ°oRÄ¼oÃ³x5Ä•1Ãµ*Ã€ÄpQwÄÄ",
strippedOakLog: "0g0gmÃºÄ»HÄŠ4YÄ¢VYÄ©Ã£WÄ–*WÄš*HÄ¦Ã¢ZÄ©Ã°HÄÅ›HÄš?YÄ–*HÄÅ‹HÄ¦Ã£WÄ¦Ã’ZÃºÄ»WÄŽAZÄÅ›WÄ–BWÄš?HÄž?YÄ†4HÄž?H0QxÃ¹ÃoÃ°Mk?0]xÃ¹Ã“hÃ°ÃžkÄ‰S]jkÃgÄ¹Ãž5TRÄ¯ilÃ­gÄ¹Ã 5?aÄ¯idyÃ•Ä¹MÃ¶}0Q>tyMÄ«ÃžÄ‘}2Ä«TÄ…%pÄ«AÄ¥T2Ä¯ÃÃ¶CoÄ³QÄ¥Ã€SÃÃ„pDhÄ­QÃ¶Åˆ1iÅš9Di@Ã‘Ãµ(ÃÃ‚Å 8>wÄ€Ã–I(QÄ¹Ä8>xoTFUT2Ãº8Ã“h!?5ÃŽÃRÃº8Ä©hÄ¯wÃ¯ÃŽÃŸÄ²M8>gÄ¯wÄ‘_0@M8ÃgÄ­xd_",
mushroomStem: "0g0g4Äº;HÄ®bHÄ¶rZÄ©Å¡Z0K00Ã²Ã«0Ã­BÄˆ08Ä‘Ã„EFÄÄ¼ÄŽÄHZÃ‹HÅ—Ä¥HÃ–Ã«FÃ£Ã­00Äˆ0ÄÄˆE2Ã—ÄÄ’Å‡ÅÃ¾Ä‡ÅÅ¤ÅœZÅ¤Ä¼ZVÃÄÃ”Ä¼VS9Ä½2",
mushroomBlockInside: "0g0g5Ä­ÄHÄ¦Ã£ZÄµÄŸYÄ’@HÄ½Ä¿W0ÄŒÃ«F0g1C480Ä‚I0J9yÃ¼Ãž4Ã‚T42SkÄŠÃ•8h9)AT)i0wiTwÃ³Ã‚0I80Ã­Ã•Byd4Ã«]CÃ«Ã‚wÄ·90ÄŒ0AÃ¹^]J]Äœh0Äˆh9Ã¼yT0kÃ²w2Ã¶CÃ«cA0Ã«4iJAU",
brownMushroomBlock: "0g0g4Ã½ÄWÃ½Ä¬WÃ¶ÄWÄ…ÅŒYoÃhlwTÃ‡Ã‹lÃŽR?5?Ã€VlÄ¼UmxVÃƒk5VlÃ’?Ã¡ÃºP?Ã„hÃV@Ã€?lAQÃ½jS8?Ã½5qÃX5Ã„ÃRlÄ¹TÃ‚ÃŠVÃ€",
redMushroomBlock: "0g0g6Ä§ÄŠHÄ¤Ã­WÄ¯ÄŠYÄ³ÄšYÅ¥Å¢ZÅ¥Ã–Y4Ã¹Ã¹4XÃ¹A2iSkÃ«w+JPA11Ä±Ä©PAÃ¬1Ä¿Ä§Bwi]+18iR]Ã«JSÃ°Ä§5AJ4.Ã‡9AÃ«w:oF0JP6Ä§]Ã«iPAi1A3K4JP0sÄ”iiSitÃµA90Ã¹>ÃŽAÃ«A0900Ã¹",
brownMushroom: "0g0g8000ÄµÃ”YÃºÄHÃžUWÃ–OYÃ’UY{ÅšWÄžÃ…Z000000000000000000000000000000000000000000000000009E0000PFÃ«004^P(008Ä„Ã¶Ä§0005Ä§00007Äˆ00001Å‡00001Å‡00",
redMushroom: "0g0gb000Äƒ<WÅ£ÄŠYÅ‡TWÃ¾Ä¢ZÄ«ÃŸHÄTYÄ¶nZÄ’Ã°HÅ–Ä”YÄ¾^Z000000000000000000000000000000000000000000000000000000000000000000000000000iy000003yz(0000OyO>0000?OVÃ“000007Ã«0000009Ã0000009Äˆ000",
myceliumSide: "0g0ggÃ¥ÄŸWÃ–Ã£WÃ‡Ã’WÃ–Ã¾YÃžÃ°WÃ¬ÄŽYEÃžWÃ²Ä®W-Ä‰ZÃ‡2Z]Ä¹WÃ¥ÃƒYÃ½ÄœYÃ†Å™YÄ¢lZÃ¢Ã‘H0iO?xBÃ>Tj0Qk)QÃ“zgÃ M?-?ÃºNxMh^Ã®TQ3Ä‘ÃˆÃ¬+ÃMÃ•Ã¬q!ÃŽBmIÃ²Ã¾jSpÄ€.Ä¢ÃµÄ€Ã»aÃ†Ä•/Ä Ä”Ä¯Ä¤{Ã¶Ã¬Ä“Ä£Ã˜Ä³Å‚tÅ‚Ã´Ä£Å•ÃµÄ³Ä¦ÄƒÅ“Å…Å’Ä³rÄ²Ä¤ÄµÄ¤$Ä²ÅƒÄ¥Ä¥Ä²Ä³Å’Ä£Ä£Ä£Å•Ä¤Ä£Å¢Ä³Ä¥Å”Ä¦Ä³Ä²Å…Ä¥Ä¥Ä£Ä¥Ä£Ä³Ä²Å“Ä²sÄ³Ä£Ä³Ä¥",
myceliumTop: "0g0g7Ã¥ÄŸWÃ–Ã£WÃ‡Ã’WÃ–Ã¾YÃžÃ°WÃ¬ÄŽYÃ²Ä®W0ÄŽÅŒ?ÃˆÃXÄ˜AMÄ°%{ÃµÅ€Ã½ÄÃŽÃ–mPÃµ-Ã‘cÄ“hÃ6ÃŒÃ‘Ä«ÅˆUÄ§Ä§(Ä dÄ™Ã­Ä¸Ã’Ä™$Ä¼ÅÃµÃ¬Ä€ÃŽÄÄ˜Ä¸AÄ©Ä¿IÄ›#Ã¯Å‡ÄªEÄÄ°Ã—6Ä°Ã€Ä±ÃŠNÅ€cÃŽÄÃˆCmz0.x%EÄ³Ä¨Ä©Ä¸ÃŽÃ¾Ã²ÃÃ†Ãµ",
//the wheat texture is up there
wheatSeeds: "0g0g70003Ã¬WÃ—ÄªY%0Z?Ä©HÄ–ÄªYÃšÄ©H00000000000000000000000000S0g000Ã«02000Ä§04Ã«020Ã€6Ä§02EÃ™000Eo0000+0wÃŠ0002Ã«+0003K00000000000000000000",
wheatStage6: "0g0g700WÅ…ÅHÄ†KYÄµÄ¬YÃ©Ä‹WÃ‡ÄˆZÃ¶ÄºZ00000000a00010j00090BÃ¹00902Ã€S02A3ÄŠ(02Ä§20mÃ«1aÄ±0)gÄŠÃ³ÄƒkMÃ¹ÃšÃ†!dÄÄœÃ¶Ã†2hTgÄ9>iÃÄ˜Ã½9Tgw(Ã­Äz{!+Ã¬ÅyÄœE&Ä‰a%kÃˆE",
wheatStage5: "0g0ga00WPÄ¸WawH2Ä™YÃ¶ÄºZnNZÄ†KY5ÄˆHÃ‡ÄˆZhÄ¸Z0000000000010000000h0000000h00000g01y0001(04g0000Ãƒw600000N0403000(6Ã“05O0OwÃžÃ“83w0JgÃ«@3N1gÃ¬SI68y1nIKI48Ä7wÃ±KÃ«Ã°Ã”1ÃÃÃÃŽÃÃ°[4ÃÃÃSÃÃ¡74ÃG",
wheatStage4: "0g0ga00WPÄ¸W2Ä™YnNZawH5ÄˆHhÄ¸ZÃ¶ÄºZÄ†KYÃ‡ÄˆZ0000000000000000000000000000000000010000000i00000003A0000w02S0000Nw200000A2A00S0ySÃ„T03w04SÃ€n4AwÃ€Ã„KÃ€85A5Ã€Ã€gV85@5Ã€ÄÃÄ8pÃ„Ã€Ã¹Ã¹ÃÃ¹Ã¿96Ã¹Ã¹",
wheatStage3: "0g0g800W2Ä™YnNZawH5ÄˆHhÄ¸ZPÄ¸WÃ‡ÄˆZ000000000000000000000000000000000000000000001000002A000(1K001g_000Ã’Ä€r0(05I%0mweI6hÄ˜wÃ­Ã²7hÄ¨wJÃ²DgPw",
wheatStage2: "0g0g600WawHnNZ2Ä™YhÄ¸Z5ÄˆH000000000000000000000000000000000000000000000000000000000w00002K000Ã«Ã‡K001Ã¹p0004Ã«c0Ã«06Ã³40NEÄŠÃ´QkÃÃ•",
wheatStage1: "0g0g400WawH2Ä™Y5ÄˆH00000000000000000000000000000000000000000000010002S0g5009730cÄª3c",
wheatStage0: "0g0g500WawH2Ä™Y5ÄˆHhÄ¸Z000000000000000000000000000000000000000000000000000000000000000000000000000000008000002w(02030S0",
lightGrayGlazedTerracotta: "0g0gjÄ‚Ã–YÄ¶|WVÄŽZÃŽÄ®HmÃ¥ZmÃ³WÃVYÄªsYmÄ’Y?*WÃ£oHÄ¾ÃšY|VHJPWÃ‡ÄŸWÃ‡ÄWÃ‹Ä®HmPWmÃ–Y0Qh4Ã‘x@30A8@hÄ„xSÄ§4Ã«xoÄ»ÄE7Ã†S6008Ã„Ä˜XÅ‡1Ä©6pFoÄ»Ä½Ä„#-2g008RÄ˜1ÄÃ†@gÃ«38Rl4Å‘8RÄˆXÃ’Ã Ä­Ä4xoRÃ¢54ÃŸaRÄÅ’:RgsEp]RgÃŽÃ†ÃˆjÃ«zgÄ®8J>9Ä§ÃÃ«Åˆ8R8QÃºÃ‚Ä‚0Ã«a00gSXÃÄ©5Ä”x8S0Ä XoÃ„ÄÄÃ0R0IÄoÃ„(Ãµx020IÃoRwIw",
lightBlueGlazedTerracotta: "0g0geyrZ)ÅY/Ä´Y}Å”ZÃ„Å¤Z$Ä ZÅ¢ZZy$HxÅ¢HEÄ HÅ‚Å–YNÄ¥YÄ²Ä¶YÅŽZY1iO>lRÃ”,Ã¤hzNÃ½zÃ•zG5kNÃ‡OÄGGÃÃ»ÄÃNÄŽÃ“7GÄƒÃÄ­Ã™Ã¤2wGÃ½ÃˆÃ“Ä®DGN7ÃÄ­Ã™GNG)EtÃ“Ä¯GRDiNÄ­Ã—7ÃŸONVyÃ“ÄGzOOÃ‡iÃ™7ÃŸ)OyÃ¢ÃºÄ§GANOyÃ“Ä”rNÄ­Ã“Ä«yÃ¤Ã¦VÄ›$Ã“Ã™RyÃ£Ã‡iNÄ­Ã“Ä«ÃŸÃ£Ã¢Ã½y$Ã“Ã™",
magentaGlazedTerracotta: "0g0gaÄ¬:ZÅ„Ä•YÄ°Ã™WÄ°{WÅÅƒYÅ™ÄƒZÄ˜Ä±YÄÄ°ZÄ„Ä¡HÄ¼ÃµZ1xM?Uy1111AÃ„Ã’R111xUÃ”Ã£?111BÃ…Ã«DÃ‘R12?G22Ã”?9BÃ…K3O6Ã¡Ã‚VÃ°0zO0Ã¤?Ã…IÃ£Ã+Ã¤GXVQVÃ6UQQ1xBÃ DR11114Ã,P11114Ã 8Px1114Ã6R1x114GÃ“Ã‡1x115QQÃ‚1111MMM.11",
yellowGlazedTerracotta: "0g0geZÃZÅ™Ä¨HZÄ¡ZZÄ²HÅ•ÄˆZÄ•ÅœWÄÄ»ZÅ™Ä¹HÄÄœHÅ™Ä˜ZZÄ³HZÃ¢ZZÄ¢YÄš5H1yOxw2?Ã“ix[yiyQÃ°yiyixh1Ä€Dy2x!OgÄMwbÄ‰Ä«iMÄ˜xyÄ¢ÄÄ‰hyryiÄ’Ã¦Ä©ÃžÃŸÃixGÄ”iD>hxzyxÃy^Ã„2inzliÄ’Ã•2jÃžiMÃ•Ã•Ã“yiDkzIÃ…ÃžP1yÃž>ÃšhÄ½Å€gi$Ä’Ã‘?ÃÃ•h1nÃ„XÅ„TÃ“Ã¬Ä˜1Ã“ÃŽÃ‘t",
purpleGlazedTerracotta: "0g0gaIÄ²YÃµÅ‚ZÄ‰ÃŒW$Ä›WÃ‘Ã¥ZÃ¼ÅƒY(ÄºYKÃ¥YÃ†Ã¤ZÃŠÃ¥W1zOy(4O(0iN2(S>0x0wzSO04NÃxz6+5[Oy2)6KÃ†GNgwCSVÃ±GxyN2Ã.Ã¡gyO>xy,TTOS4N2,Ã¯Ã¹06KNy-Ã¬S4OKÃO(Ã«SS+0Ã¿Ã¼U4S)09[ISQ4O5[Ã«h4Ã¥Ã…(UÃ¡8Q[hU5PÃ¡0lh[Ã¡",
orangeGlazedTerracotta: "0g0ggÅ¡1ZmÃ¥ZÅ¡Ã»HÅ¡ÄœHÅ¢ZZvsHqÅ’YmÃ³WÅ¡Ä‹ZmÄ’YÅ€ÃWÅ˜Ã¹WÅˆÃ«WZÄƒZlÄ¿YmÄ¢Z0gzyk?VK0Ã8Ã­Ä‚Ä£Ä¤Ã“nÃŸzDÃ¨Ä¤Ä±Ä­0xnÃ¥Ä²0bÄ¬wxÄ³bÄ§1cVy,Ä“cÄ˜0cÃÃ­D0{Ä³0Ä­hIÃ¥Ä²Ä»cÄ³5hhÃ¨Ä”Ä´Sy6Ã_Ä²0Ä³QÃ«Å•Ã’{Ä§0cÃ¶wÅ•ÅŒÃŠÄ§gcw5uÅŒÃ‰Äˆ0Ä§1lÃÅÃ‰Ä²Ä³mÃhVyVÄ¤Å˜Å•Ã’Å˜ix5ÃuÅ•ÅVÃ‚h",
whiteGlazedTerracotta: "0g0gdZÃZÅ¢ZZy$H/Ä´YÅžÅ†WZÃ¢HZÃ¢Z?Å„WÄºÃ‹H^Å”ZÃ‚Å”ZÅ¢ÄµHÅšÄµH01g01zAg5ÃŽhhhÃŸTÃŽ6hKUhEmÃŽhhmVoAÃ‘1hÃ‘hh[Ã¬1ÃŽÃŽÃ„hoyT1k1KhyJhÃŽR1?o!,hoz1hRODhy.hoDDÃ¡iDÃ yyÃ¬hhDTÃ NÃ¬hhiÃ¡hÃ­Ãžm0ÃŽyTkÃ­hÃ‘hoDhR/g0ÃŽR,Ã¤Ã³Äƒ1hkz.ÄŠFÄ§",
greenGlazedTerracotta: "0g0ghÃ’ÅšWÄºÃ‹HPÃHÃ·Ã½YÃŸÃHÃ£Ã­HÄ²<W|Ã­HVÄŠY?Ã‚WÃ‹Å˜HÃ¦ÄŠHÃ“xHÃ1HÄ¶|WÃ›Ã‚WPÃW02h8xgÄ­RÄ€z0Ä©ÃÄˆxiU?Ä˜ÃŽ8{OÃµCÃ€Ä‚VÄ‘Ã°9Ã°Ä-AÃUÃ…Ä>gÃ¹Ä4Ã”Ã‚I@Ä>^6Å‡ÃµÅ‰/Ä¯Ä‰9E8RhÃ²^PkzÄ¤ÄŒ8{>Ã²R_QÃŸkXiUÄ­Ä„RiJÄš<2oÃ·Ä¼gÃ³Ã€XRwÅŠqÃ¼ÄŠ%[]Ã¹RÃ²>xmÃ‚ÄÅ‰Ã¥]Ã…ÄÄ‹xaÅœs?x8ÅšÄ¨>OkÄ½Ã²Å‹y518Å8Ä¿ÄŽ8XTÄ»Ä¼sÃŽo{MIXgÄ­MÄ€z",
brownGlazedTerracotta: "0g0gfÃ¬ÃƒWÄµ[ZÄÄ»ZÃ¯ÃƒWlÄ¿YlÅŸZÃ½ÄŒHÄ‘ÅŒWÄ–5HmpHÃ¶ÃH?*WKÅˆZÃ–2WÄ¹Ã•H100zg?lQg6Ã¤ziQhU00Gwx4Ãºl60wwÄ‰bPh7ycÃ£1%ÄœV7ÃÄ³ÃŸ2gÅ‚QyGDÃ­aqÄ’c3(ÃDKiÅ„ch!06KxÅ„Ä§2hiÄˆ0Ä‰$Ä³Q0xh!ÄŠrÃ½U_Ä§ÄŠhyÅVhÃ¼Ä¤Ä”Ä¹uÅ‹Ä¤Ãp_Ä”Ä´Ä¡ÃŠÄ«?hQ0Ä³?Ä¤?QTUÄ´cQÄ«Ã‰",
blackGlazedTerracotta: "0g0gj$Ä›W$Ä›HÄ€Ã­WÃµÃ­WEÄ‹W00WAJYAJZIÃžZQTW4gHgTWoÃŽYsÃŸWU(Z(ÄºY-Å›W<4H)ÅŠZ0Q(gÃEcÃ‚Ã¼Ä0Ä«A4Ã•EaÃºx!gXÃ«gÃ°Ã†aClboÃ°ÃŸoÃPÄ±)Ä˜Ã˜(Ã·SÃ¬Ã®q^ÃºÃ¶$18ggÅ“oÄ­Ä%Ã­oICtÃ”#mÄ¸Äˆ|SÄµM$Ã®oXÄ».Ä•FÃ„ÃºÃ¶Ã3XÄ¸ÄÄ•x0Ã‘Ã²Ã®ÃÄ·Ä½ÄÄ•NÄ±Ã‚Ã¶Ã®iqÄ¾Ä¦hÃˆ@AÄ‘Ä‘_Ã‰F*Ä•Ã†Ä±Ä¨EÃ>Ã’CÄ¥Å˜EÄ¿ÃE}Ã˜KÄ¾Ä±Ã‚Ã@,$ÃšÃ˜KÅ€RÃ‚M^Äd%Ã˜Ã‘Ä¿^i",
pinkGlazedTerracotta: "0g0g7Ä¢ÅZÄžÄ±YÅÅƒYÅ™!YÅ€Ä°YÄ¼Ä€ZÅÃ‰W4AÄ»ÄžÄ!xFÃƒPAÄF_iÃ‡Ä”Ä»^Ã†Ã¾|ÄJÃ‚Ä«Ä›~AÃ»Ã£AÄƒÃ‡Ã“Ä¼PÄ”Äƒ_,Ã½Ã²CÄ†PAÃ½Ä™Ã“ÄšÄ´Ä¤Ä…Ä™+Ã¾ÃšÅ‹JP;JPB#ÃšBÄƒÃ¥FÃÃšÄŒÅ…P_iPÄœJ}Ã†Ã¹Ã²+ÄŒ^Ä«Ã«Ä™+Ä•Ã²ÄŒS",
limeGlazedTerracotta: "0g0gcÃ®hZZÄ¡ZÄ“ÄŽHÃŒÄ‰YÃˆÃ¬HÅ™Ä¨HZÄ³HÅ•ÄˆZÃ±NWÃ´ÃWHMYÅ™Ä¹H1zOOO)?KlSyyyy[hA>8IEwDÃ’(O-Ä€IwDÃ’N3OIÃ²0?nN8O[Ã4ÃUN8XÃnQÃÃ€NÃ«Ã½Ã—Ä‰Ã‰lSNwÃ´qÄ’hU2N0IÃ„Ä’VS2NyI?lQ02RÃ«X?lQÃ²0Qy?ÃU0y4Ã…Ã§ÃÃ’SÃ²y_mÃ“lU0I4Ä™1Ã…Äœ0yw?K",
grayGlazedTerracotta: "0g0gd?*W)ÅŠZÄ‚Ã–YÄ†Ã¥ZÃ‡ÄŸW(ÄºYÃÃ’ZÃ’Ä¾YÃ¾Ã‡HÃŽÄ®HP?H<4HTAZ1iMQÃ„[0hhÃ­P?Ã„Ã¿0hjC1hgÄÄˆ0yK1Ä˜04Ä‚0xcÄÃŠ5Ã€QPh6ÃŽÃlVÄ«Ã¡kPÃ»(Ä™lcÄ­QÃ¼>yÃ¬mÄ¨hTg[xwqÄ‰Ä hh4EzVÃÃ­gTk[yÃrM4Ãl4Ã¼KÄ³Ã°QQ5Ã€PÄ”6(S4QVRzÃ®Mc7SÃyÄÄ§h0Q1j#s1g",
cyanGlazedTerracotta: "0g0gjlÄ¿YmÃ¥Z?*WÄºÃ‹HÄ¶|WqÅ’YhÄYmÄ’YmÄ¢Z-Å›W)ÅŠZqÄ’YÄ²<WlÅ WmÃ³WlÅZlÄ¯W(ÄºY<4H02xcÃ®EXÃt6^Ã­Äž(Ã’gÃµ6Ä…Ä¯Ã‚Ã­lÄ˜ÄŠhÃ«6Ä xÃ Ã«gÄ”R(u0;g8UÄŒX@^J0068UÄXxUU7Ã«Ä©.Ä»ÄŒÄÄ¨JÃ¼Ä·oRKÄ§Ä¾ÄÃ‚bÃ«38?ÃqÄ½Ä¬^ÃRÃŽ8Ä‹KÃ«Ã½?^{Ã­hlÃ®gÄƒlF^Ã‚ÃŠlÄ˜Ã™hÃ«ÄCPÃ‚Ã«gÄ•Ã­(0ÄpÅ‡Ã‚Ãµ0Ã¯Ã00Ã¼Ã¬ÄˆÃ‚Ä†K4x0038{ÃÃ­n!%Ã•0ÃŽ9XÃŽÄ©gÄS",
blueGlazedTerracotta: "0g0g6$Ä Z?Å„WwÃ¡WwÃYy$H<qY5wÄ¹P(Ã«xwÄ¹P(Ã¹Ã«CrÃšÄ˜iÃ/Ã‘Ã¹Ä½0Ã‘pS2Ä©iÃ¡Ä·Ã–ÄŒb2Ã“Ã®|+ÃºK)ÃƒÃ’)ÅFÄŽÃ®Ã’+Ã]SÄ¨|Ã¼Ã­Ã‚PÄ¿dÃ¼qiÃš!?wÄœÃ«0*K46Ä¹]6Ä´+Ã«r96Ä‘ÄŽ>T16ÄÃ–Ä¢]",
redGlazedTerracotta: "0g0gaÃµÃ­WIÃžZÄ€Ã­WÄ˜ÄšHÄ´AHÄÄŠHÄ¸VWÄ ÄšHÄ°3YÄµ[Z10g0z)?O0ggg0+[Ãƒ(5O*wCÃ‘Ã (3Ã Ã (6Ã“Q(6QQÃ«kÃ‘@0CQQS0iQ2XO,R1g4->VOÃ£Ã®Ã‚2)>Ã†Ã®)Ã”*wÃ¤Q)?)>OÃ­OX@?)[OQ*-Q*Ã¡>,@Ã»ÃƒOÃƒÃ°>ÃƒÃ–ÄOÃ -Ã•>@ÄPÃ¾QQ])PÃ»)ÄÃ‘QÃ±)ÄO",
lightGrayTerracotta: "0g0gdÃ¯ÄŽWÃ²ÄžHÃ²ÄžWÃ¯ÄZÃ¯ÄŽHÃ¯ÄžWÃ¬ÄŽWÃ²ÄŽWÃ¬ÄZÃ²ÄŽHÃ¶ÄžHÃ¶ÄžWÃ¯Ã½Z000i2wO(0hk05i006000wÃ€2Ãy03700001iEO0h00gw0002w1yÃ€0907ywg0y2w00yiÃƒ005yxgw00000Vh001Ä‹2h000000xyyw0000r0005Ã‚Ã00Ã«0x5c(00y0205Ã‚l50O0",
lightBlueTerracotta: "0g0gaÃžÄ YÃšÄYÃžÄYÃ¢Ä ZÃšÄ YÃ¢Ä YÃžÄ ZÃžÄHÃšÄHÃ¢Ä¯Y1hw(?0hg0O+00(g140hg000002hl00003(1ixO00(0w000030013x052K10gÃ€000K1100VÃƒ(01h1000O01j,0O01g0g0Ãƒ050w02g*1w000612Ã¬wÃ»07gx004w000(02x0",
magentaTerracotta: "0g0giÃ½Ã„ZÃºÃ„YÃ½Ã“ZÄGWÄÃ“ZÄÃ£ZÃ½Ã„YÄÃ”WÃ½Ã”WÃ½Ã“YÃºÃ„ZÃ½Ã£ZÃº@YÄ…GWÄ…Ã“ZÃ½GWÃ¶Ã„YÃ½@Y0Rg8Ã‘9^KXC06OÄˆ@]Ã³wÃ«1iXKXCwXx$PhQKXAg0x8Ä­h]T(C0@M0@EXz8RgXx85wXz44(SyÃ¹@gcigAwÃ«x8Rh4g400IÃ‚cÃgÃ«gX1iS18Ã(XgÃ¶ÄŽgÃ³M81840ISxQxkÃ­004Ä€wrÃµj8RgXÃ;Ä¨MÄˆj8ÄgÃ¯gÃ«Ä¨0Xw4Ä«gXx8ÄŠgXÃ42",
yellowTerracotta: "0g0gfÄ¢iWÄ¢2WÄ¢iHÄ¦yHÄž2WÄ¦iHÄ¢iYÄ¢yHÄ©yHÄ¢2HÄ¦yYÄ¢1ZÄ©yYÄ©iHÄš1Z1hiO3MQT0OÃ„10OS1A1khÃ‚yD0zxQlw0y1z*AThI0xNÃ‚g2yyy3ÃƒyhÃ½h2OÃÃ€hVjN2yVÃƒÃ¡hh2OOÄŠÃ‚hhhwhyÃ®0xoÃ´yO01g1gyOÃ‚zNh01hÄ´kgyyzz1hÅˆgOy#Sh2B1lyyBNyxk2",
purpleTerracotta: "0g0gmÃ¢lHÃžlHÃ¢lYÃ¥BYÃž5WÃ¢lZÃ¢BHÃšlHÃžlWÃ¥BHÃ¢lWÃ¥lHÃ¢5WÃ©BYÃ¢BYÃ¥lYÃ¥BZÃž5HÃ©BZÃ©BHÃšlWÃ¥*Y0Rg8Ã8Ä­2gÃ«06MÃ¼01Ã°(Ã«11Ä§4h0]c0oa(Ä§2g#0000a0Ä­Ã»gÃµ0ÃˆÄ·00o600000Ã03]Åƒ04f0S1Ã¶wo0kÄŒFo000ÃoÅƒSw03Ã°MÃ·0o0X41003pÄ‹00IÄÄ’1Ã°(01I00Ã«0oÄ­ÃcK0000wÃ¼Ä§g001ÃµOc80Eg2Ä‹1Ã«Ä©010cÃ¹w900ÃcÃ›3Ã«6g0",
orangeTerracotta: "0g0gjÄ‰RHÄ…RHÄ‰Ã‚HÄÃYÄÃ‚YÄ…RWÄ‰Ã‚YÄRHÄÃ‚HÄ‰ÃHÄRHÄRYÄ‘ÃYÄÃZÄ‘Ã‚HÄ‰ÃYÄRWÄÃHÄ‰NW0Rg8Ã‘8Ä¯2Ã¼Äˆ08Now0Ã°wÃ«11Ä©0XwSXwARh40Ã¼!00w00h8Ã¬kÄ8@(0SwX0Ã«004x84SX04b0SywT(0kwEw008RM4Ã€Xx0IÃ­gKg2gXx02h8Ã‘00gÃ¶Ã¯gÃ°S8180gÃ«SwÄ«xwÃ«8S00xÃ˜Ã«gI2gXT;10wg2A0Ã¬yÃ«104w480Xx8Ã­gX2Ã¼2",
whiteTerracotta: "0g0gfÄ¹Ä±WÄµÄ¢WÄ¹Ä¢WÄ½ÅHÄ¹ÅWÄµÄ±WÄ½ÅWÄµÄ¡ZÄ¹Ä±HÄ¹Ä°ZÄ½Ä±WÄ¹Ä¡ZÄ¹ÅHÄ½Å‘WÄµÄ°Z1hw)Ã„SGÃ0O-04Ã‘g150GÃSS49Q2Gq00096Ã‘[Ã§xO00KSw004S6QS1ax0@RS1QkK00QQ[704Ã“Ã(S7Ãž100QO07j:4Ã01g0g0Ã“Q@Sw02g+1w04Q{72ÃžwÄ½4bÃx0QeA04QÃ‘42ÄŸ0",
greenTerracotta: "0g0g9PRY|Ã‚Z|RY|Ã‚YPÃ‚Y|RZPRHÃÃ‚Y|RH001h1g002hh03h2w0000OO3OMN02w4ywMj(00hw(jg2yyOO1Mg0Bw3h(i0O3i2zhhg001hhii000w0Ohy01mOhzw2w2(hjMi0220n03zOMTw2KyhA80w0Owz3)ThTN0z",
brownTerracotta: "0g0g7{Ä©H{Ä©W{Ä¹H]Ä©WÃ€Ä¹H{Ä¹WÃ€Ä©H4Ã¹JFmÅ€5]Ã²FCPcJÄ°PwÄ•PmÄ¯0w9ÃAÅ€CShÃ²201AXP2@AAÃºQÃ¼Ã³S0JPNP9AÄˆSJP4Ã¼ÄŠwjx^xPAigÃAÃ¹AiPÃ¹Ä›RPAÃ²BJk8m91y^9AÄŠPiÄ±",
blackTerracotta: "0g0g6AÃWAÃŽWAÃ€ZwÃWwÃ€ZEÃŽW0094XÃ¹0Ã¹00Ã¼0c4Ã¹wÃ«R4AÃ«00i4Ãºi0Ã¹0wX0001A00S2Rw2Tw09AÄˆÃ«0J]wA002PSw^0Ã¹0000AÃ«]00Ã«)A04Ã¹Ã‚a490Ag00Ãº00]0AÃ«",
pinkTerracotta: "0g0ghÄ‰)ZÄ…)ZÄ‰*WÄ?WÄ…AYÄ‰QZÄ…AZÄ)ZÄ‰?WÄ)ZÄ‰AYÄ‰AZÄ‘?WÄ*WÄQZÄ‘?HÄ)Y0Rg8Ã8Ä­2gÃ«06MI01@O011Ä§3oÄ§oÃ¹ww0SÄ§3gF000000Ä­)gÃ³Ã†Ã†Ä§00o600000X03oÄ·04d0S1Ã¶Ä§o0hÃµzo000ÃoÄ·So026MÃµKo0Ã41004xÃ®00ÃMÃ³i6(01(00Ã«SoÄ­XcKÃ†000wÃ§0K00h^NÃµ60wg0Ã1SÄŠ010gÅ‡430XÃ‚ÃµÃ•205g2",
limeTerracotta: "0g0ghÃ’ÄºHÃ’ÄºWÃ–ÄºHÃšÅŠYÃšÅŠHÃ–ÅŠHÃŽÄªWÃ’ÄªWÃšÄºYÃ–ÄºYÃŽÄºHÃ–ÄºWÃšÄºHÃ’ÄªHÃ–ÅŠYÃŽÄºWÃ–ÄªW0Rg8Ã9ajoÅˆ06)A18Ã³ÃƒÃ«12Ã«jÄ€Åˆg00k_hQjo$0000xhaxoÅŽÃ•@M0TwX0IS04x84hQ0Xc8SyITg2h8Bw008RgXKs00IÃ‚cKg0Ã X10S00Ã›8Ã«Ã ÃµÃ”0IM01-40I0x4xkSÃ•00Xwr2ÃÃ«20XÃ€-D8ÃŒgIÄŒ0130x04w4y0008Ã­0XjÄ„0",
grayTerracotta: "0g0g6-ÄŠH-ÄŠW-ÄšH;ÄšH;ÄŠH)ÄŠW4Ã¹iFiP5-9xyPkJP00Ã²8i]009d1PBÄ˜1K2000382QA4Ã¬4Ã¹aS009iP1AÄ€0JP4Ã¹qwiÅ€1ÄˆPAi0{0Ã¹AiPÃJS0wÃ²CJj0i902]00o0i]",
cyanTerracotta: "0g0gjVÃ’YVÃ¢ZÃ‡Ã¢ZÃVHVÃ£WVÃ¢YVÃ’ZÃÃ’YÃ‡Ã¢YÃVYÃ‡Ã’YÃ‡Ã’ZÃ‡Ã£WÃ‡Ã¯ZÃ‹Ã¢ZVÃ’HÃ‡Ã°WÃÃ’HVVH0004R0X1Ãµ004xg01Qw00MÄ§0s0gRj95gÃ­3ÄŒa00Ã€008Xxc004w0wgQK0002x42gÃ­K0b00Ã¬8Sg0182g004RgÃ­Ã¹000Qx9Ã«g0000000Ã¯ÄŠ0c09Ä¶8Xwk00000CgXx8S00000Ã®Ã«0k18RwÄœ00y01ÄŠ0|xÃ«01Xw02(RgIT8R001",
blueTerracotta: "0g0g9]ÅŒY]ÅœZ{ÅœZ]ÅœY]ÅŒZ{ÅŒY{ÅŒZQÅŒY|5Z001y2w000yx03x00S000xhTOig050300iyg00y0gxk000hh2xk0603ygg0y2w01hig001yywg00000hy0S2why30000kyhiw0000y031hih00Ã0Ã­1S004h02Thhxhg01",
redTerracotta: "0g0geÃµÅ™ZÃµÅ‰ZÃ¹ÅšWÃº3WIÅ‰YÃ½3WÃ¼ÅšWÃ¹ÅšHÃ¹Å™ZIÅ‰ZÃµÅšWÃ½3HÃµÅ‰YÃ¹Å‰Y1hiO3MQh0*Ã”18Og191ph!Ä’3IzÃ¬Äo0001Ã¯NAhhVÃ«Ã¬Ã†woÃ«0Ã­E5zwhmh8OÃ¬whyj(08yz.hh2OOÄ˜whhh0hÄ’Ãƒ81lÃŠÄŠÃƒÃ«1gÃ¬oÄˆ*yz(h01hÄžhg8ÄÃ®31hTo*0dSh0E1iaÄˆ2Ã‚2Ã¬ha",
terracotta: "0g0g5ÄÃ¡HÃ½Ã¡WÃ½Ã‘WÄ…Ã¡WÄXH4J0{i]ePpNQ18Ã¼P47o0+XÃµJ]JiPBÄ°zA0P82P0]QJ@aAiPPi0ÃŸEÅ‚ÃŸTA42]wiK2Px@]0|Ã­Ä§ÃºÄ™y4ÄŒÃ²0J_i]Å€BgÅ‹1JPe@]AÃ½z0iS",
ancientDebrisTop: "0g0g7SÃžHÃ©Ã¯YÃ¾nZÃ’kW]ÄšW(ÃŽWÃŠÄ¹Z0ÄŒÃ´Ã­ÃµÄ™ÄbÃ•Ã’AÃ EÄšÄŒ2Ä·Ã»Ä±Ä¸i&.2Ä›S5ÄˆÄ¢Ã—Ä¢nÃˆ(qÄ’Ä¡Ã¶Ã€6Ä‚Ã¬gÄ¼|aÄXÃ¬VsCÄ’Kx2%0Ã—ÄˆUÄ§Ã‚Ã”]ÄVÅ40ÃˆÃ’Ã…Ã™Ä±?<Ã·EÃ¬ÃšÄˆ]Ä¼oÃ¼ÃºÃ™Ã€Ã°dÃ“Ã‰Ã¯kT",
ancientDebrisSide: "0g0g7ÃŠÄ¹ZÃ’kW]ÄšWSÃžH(ÃŽWÃ©Ã¯YÃ¾nZ4ÄŽÃ¼QÃ­Ä¨ArÄ“SÃ¹I0Ã—|w0Ã«SÃ¹0ctÄ‘S4Ã®Ã·Ä¹0Ã#ÄžÃ0g}Ã‚|Ä¼wÃ­}iPCAJ|Ã¹TzÃšÄ•Ä™Ã«9kJPÃÅƒ0SJ]ÃžrÄ™]Ã¹PÃšÃ«dÃ•iSÅÄˆ0I2&,U2Ã²09AXXÃ…Ã™Ã²",
yellowStainedGlassPaneSide: "0g0g5000ÅŽÃ».Å‚Ã.Ä¾Ã‚Å Å†Ã .001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
yellowStainedGlass: "0g0g3ÅŽÃ»EÅŽÃ»pÅŽÃ»C0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
whiteStainedGlassPaneSide: "0g0g5000ZZÅ ÅžÅ†Ã¥Å–Ä¦Å Å¢Å–Ä¡001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
whiteStainedGlass: "0g0g3ZZÅZZÅ€ZZÅ0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
redStainedGlassPaneSide: "0g0g5000Ä€Äª.Ã¹Äª.ÃµÄšÅ Ã¼Äª.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
redStainedGlass: "0g0g3Ä€Äª,Ä€ÄªwÄ€Äª#0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
purpleStainedGlassPaneSide: "0g0g5000Ã¨Å¢.Ã¤Å¡Ä¡Ã¡Å‘Ã¥Ã¨Å¡Å 001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
purpleStainedGlass: "0g0g3Ã¨Å¢EÃ¨Å¢pÃ¨Å¢C0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
pinkStainedGlassPaneSide: "0g0g5000Å˜Å¡Ã¥ÅŒÅÅ ÅˆÅ€Ä¡ÅÅ¡.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
pinkStainedGlass: "0g0g3Å˜Å¡Ã•Å˜Å¡Ã‡Å˜Å¡Ã“0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
orangeStainedGlassPaneSide: "0g0g5000Ä¼Åš.Ä´ÅŠ.Ä°Ä¹Å Ä¸Åš.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
orangeStainedGlass: "0g0g3Å€ÅšEÅ€ÅšpÅ€ÅšC0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
magentaStainedGlassPaneSide: "0g0g5000Ä™<Ã¥Ä‘$Å ÄsÄ¡Ä•%.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
magentaStainedGlass: "0g0g3Ä™<ÄÄ™<ÄÄ™<ÄŽ0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
limeStainedGlassPaneSide: "0g0g5000HxÄ¡Ã§1Ä¡Ã£Å˜Ã¥HhÄ¡001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
limeStainedGlass: "0g0g3HMÄHMÄHMÄŽ0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
lightGrayStainedGlassPaneSide: "0g0g5000Ä‚Ã–Ä¡JP.Ã·-Å Ã¾Ã‡Ã¥001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
lightGrayStainedGlass: "0g0g3Ä‚Ã–ÄÄ‚Ã–ÄÄ‚Ã–ÄŽ0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
lightBlueStainedGlassPaneSide: "0g0g5000Ã“ÃšÃ¥Ã{Å ÃŒ;Ä¡ÃÃ‹.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
lightBlueStainedGlass: "0g0g3Ã“ÃšÄÃ“ÃšÄÃ“ÃšÄŽ0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
greenStainedGlassPaneSide: "0g0g5000Ã’Åš.ÃŽÅŠ.Ã‹Ä¹Å ÃŽÅš.001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
greenStainedGlass: "0g0g3Ã’ÅšEÃ’ÅšpÃ’ÅšC0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
grayStainedGlassPaneSide: "0g0g4000|)Å PAÄ¡?kÃ¥01Ã«001Ä§001Ã«002Ã«002S001Ä§002Ä§002Ä§001Ä§002Ä§001Ã«001Ä§001Ã«001Ã«001Ä§001Ã«0",
grayStainedGlass: "0g0g3|)Å|)Å€|)Å0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
cyanStainedGlassPaneSide: "0g0g5000|Å Ä¡PÅ.?Ä¿Å PÅ Ã¥001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
cyanStainedGlass: "0g0g3|Å Ä|Å Ä|Å ÄŽ0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
brownStainedGlassPaneSide: "0g0g4000Ã’O.ÃŽz.Ã‹iÅ 01Ã«001Ä§001Ã«002Ã«002S001Ä§002Ä§002Ä§001Ä§002Ä§001Ã«001Ä§001Ã«001Ã«001Ä§001Ã«0",
brownStainedGlass: "0g0g3Ã’OEÃ’OpÃ’OC0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
blueStainedGlassPaneSide: "0g0g5000M:.M!Ä¡%qÃ¥M!Å 001S00001K00001S00002S00002w00001K00002K00002K00001K00002K00001S00001K00001S00001S00001K00001Ã«00",
blueStainedGlass: "0g0g3M:%M:pM:z0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
blackStainedGlassPaneSide: "0g0g3000oÃŽÄ¡kÃÃ¥01S001Ã«001S001S001S001Ã«001Ã«001Ã«001Ã«001Ã«001S001Ã«001S001S001Ã«001S0",
blackStainedGlass: "0g0g3oÃŽÄoÃŽÄoÃŽÄŽ0000lVVUlÃ½VUmVVUpVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVUlVVÃ‘lVVÃ¼lVVU0000",
lightGrayStainedGlassPaneTop: "0g0g5000Ä‚Ã–Ä¡JP.Ã¾Ã‡Ã¥Ã·-Å 000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
lightBlueStainedGlassPaneTop: "0g0g5000Ã“ÃšÃ¥Ã{Å ÃÃ‹.ÃŒ;Ä¡000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
magentaStainedGlassPaneTop: "0g0g5000Ä™<Ã¥Ä‘$Å Ä•%.ÄsÄ¡000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
yellowStainedGlassPaneTop: "0g0g5000ÅŽÃ».Å‚Ã.Å†Ã .Ä¾Ã‚Å 000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
purpleStainedGlassPaneTop: "0g0g5000Ã¨Å¢.Ã¤Å¡Ä¡Ã¨Å¡Å Ã¡Å‘Ã¥000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
orangeStainedGlassPaneTop: "0g0g5000Ä¼Åš.Ä´ÅŠ.Ä¸Åš.Ä°Ä¹Å 000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
whiteStainedGlassPaneTop: "0g0g5000ZZÅ ÅžÅ†Ã¥Å¢Å–Ä¡Å–Ä¦Å 000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
greenStainedGlassPaneTop: "0g0g5000Ã’Åš.ÃŽÅŠ.ÃŽÅš.Ã‹Ä¹Å 000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
brownStainedGlassPaneTop: "0g0g4000Ã’O.ÃŽz.Ã‹iÅ 0000000000000000000000000000VÃ‡ÄŽÃ½Ä¢Å–Å¤Ä–0000000000000000000000000000",
blackStainedGlassPaneTop: "0g0g3000oÃŽÄ¡kÃÃ¥0000000000000000000000000000VVVVÃ’Ä‚Ä‘Ã‡0000000000000000000000000000",
pinkStainedGlassPaneTop: "0g0g5000Å˜Å¡Ã¥ÅŒÅÅ ÅÅ¡.ÅˆÅ€Ä¡000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
limeStainedGlassPaneTop: "0g0g5000HxÄ¡Ã§1Ä¡HhÄ¡Ã£Å˜Ã¥000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
grayStainedGlassPaneTop: "0g0g4000|)Å PAÄ¡?kÃ¥0000000000000000000000000000VÃ‡ÄŽÃ½Ä¢Å–Å¤Ä–0000000000000000000000000000",
cyanStainedGlassPaneTop: "0g0g5000|Å Ä¡PÅ.PÅ Ã¥?Ä¿Å 000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
blueStainedGlassPaneTop: "0g0g5000M:.M!Ä¡M!Å %qÃ¥000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
redStainedGlassPaneTop: "0g0g5000Ä€Äª.Ã¹Äª.Ã¼Äª.ÃµÄšÅ 000000000000000000000000000000000000000000AJÃ]ÄŒPÃžEÄŒJkÄŠ000000000000000000000000000000000000000000",
cobweb: "0g0g4Ä®<W000ZZZÅŽÄ–YlVÃ½UÃ’ÃƒÄ™Ã‡ÃŠÃ¯Ã¾Ã’Ã…Ã„lÄ¼UÄ€GÃ’ÃÃ£Ã‹Ã‹Ã‹rÃ”Ã=Å‘Ä¼Ã¼?Ã¿Ä—-Ã}?Ã¿Ã‡Ã£Ã‡Ä…Ã…Ã”^ÃUÄºlÄ¬Ã‡ÃšÃƒÄÃ’ÃƒÄ¬Ã‡lÃ‡VU",
strippedCrimsonStemSW: "0g0g7IÅŒYÃ¤ÄœYÃ¨Ä¼WÃ«ÅŒWÃ«ÅŒYÃ¼ÅWÄ‰mY0i10yÄ€?(Ä‚B+4Ä•w3K-Å‡ÄˆÃ‰zJS02Å‡%ÄžÄ­%i]5Ä£Ã„Å‚ÄŠÄ·00bÃšÄœÃ‰Ã£Äœ0%06Ä§ÄžÄ·5ÄŸ+6Ä£Ã‰Ã•Ä•Ã´ÃšÄˆ0%0,Ã˜ÃÃ‹Ä9(02Å0Ä•C%ÃºÄ»ÄƒÃ™Ã¾Ã¼ÃšÄžÄ¿BA^E6Ã´",
strippedWarpedStemSW: "0g0g7/Ã–H&nYNEHN-Z+Ã†Z@Ã²Z=Ä’H0i10yÄ€?(Ä‚B+4Ä•w3K-Å‡ÄˆÃ‰zJS02Å‡%ÄžÄ­%i]5Ä£Ã„Å‚ÄŠÄ·00bÃšÄœÃ‰Ã£Äœ0%06Ä§ÄžÄ·5ÄŸ+6Ä£Ã‰Ã•Ä•Ã´ÃšÄˆ0%0,Ã˜ÃÃ‹Ä9(02Å0Ä•C%ÃºÄ»ÄƒÃ™Ã¾Ã¼ÃšÄžÄ¿BA^E6Ã´",
strippedWarpedStem: "0g0g7/Ã–H+Ã†Z@Ã²ZN-Z=Ä’H&nYNEH44Ä¹TwÄªKXÄ¹9SÅ„Ä¨Ã«Ä·8TÄ†Ä”Ã°Ä·8?ÄƒÄ´JÃ«]AÄ€ol0Ã€QÄ¿kl2Ã€0ÃŒlÃ¼Ã­P(Ã‹Ä¡ÄœXh(Ã·ck41wÄog2ÃŽw*ÄˆwRÃš(Å…Ä—EÃ‚c,Ä–r4Ã€hÃ¶Ä–lÃ«R9ÃµÅ„pwi90Ä…",
strippedWarpedStemTop: "0g0g9N-Z/Ã–H+Ã†Z/-Z/8W+Ã¥WtVW%Ã¢WFÄ­H1gw0yxh23O))U>O(3Ã“GÃ±IIGÃ3Ã’ÃƒO)O,(4Ã QQQQ-SzÃ®[Ã¤Ã±Ã¡,T4Ã¡@QQÃ¡[M4Ã®[]XX-T4Ã®[]Ã¡Ã¡,S4Ã®[QQX[RkÃ [Ã£Ã¤X-R4Ã®QQQQ,R3Ã®)OO*,S3Ã±Ã±GGGG(3OQ)?QOM0g000000",
strippedCrimsonStem: "0g0g7IÅŒYÃ«ÅŒYÃ¼ÅWÃ«ÅŒWÄ‰mYÃ¤ÄœYÃ¨Ä¼W44Ä¹TwÄªKXÄ¹9SÅ„Ä¨Ã«Ä·8TÄ†Ä”Ã°Ä·8?ÄƒÄ´JÃ«]AÄ€ol0Ã€QÄ¿kl2Ã€0ÃŒlÃ¼Ã­P(Ã‹Ä¡ÄœXh(Ã·ck41wÄog2ÃŽw*ÄˆwRÃš(Å…Ä—EÃ‚c,Ä–r4Ã€hÃ¶Ä–lÃ«R9ÃµÅ„pwi90Ä…",
strippedCrimsonStemTop: "0g0g8Ã«ÅŒWIÅŒYÃ¼ÅWXÅœYÃ¨ÅŒH]Ã»HÃŠÄ«WÃ•Ä»Y4X0PiRdÄŸsÃ‚+Ä¿eÅ„Ä¦ZÅ¤ÃºeÄŒÅ‚ÃžÄŸÄ€j.AJ[Å‡~Ä¡ÄŸÅ¢[Ä‰jPÃ‘Ã»PÄjÄ¡ÄÅšÄ®ÅˆjÄ¡ÄÄº[ÄˆjÄ¡ÄŒÃ»Ä°ÄŠO.ÄÅ†Ä®Å‰jÄ¡AJ[ÄŠfÄŸrÃšÄÄˆfÅ–ÄžÅ‚ÃšÄ€dÄ¡sÃ³@Å€0Ã«0000",
copperBlock: "0g0g8Å‰6ZÄ¼ÅŒYÄ°Ä¼HÄ¨ÄŒZÄÃ‘WÄ™XHÄ>YÃºzW0g]02Ä„9+Ãº4Ã¾Å•8UIAÄ™Ã›eÅ‹T?Ä£Ä—dy^|Ä°Ã9iÃ‚Ã›Ã•Å–8Ã­Ã»Ã [Ãœ4kÄƒÄ‚,Ã…0ÄŒÅ“Ä¸Ä¢Ã¿5DÃ™Ã¶ÄœÃ·9:Ã’ÃšÄŒ@9Å‚Ã˜Ã¢yecÃ‡Ã‰Ä‘hÃ…mÅ‘Å”]ÄƒÄ‡jÃ…Ã—QÃ¼Å…/ÃšÅžJÃšÅ",
crackedPolishedBlackstoneBricks: "0g0g6(Ä›H|BHkMW;Å‹HwÃZAÃ¬Z4ÄŠÃ‡$Ã¾Ä©cSÃ‰m0qcÄEÄœ[qÃžÃ­rKB2Ã„Ã«tÃ¢+2ÄœbÃ•iÃ´!ÄšVEÄšÃ‡yÃºFi^EÃ¼gw!Ã¬Ä¹Ã‡lÄ¨Ã—Ä–ÄžÃ†Ä‰Ä€!|Ã¾Ä§Ã™-2A,raÃ±iÃ’IÃˆÄ’Å!Ã™4wÄ™PyÄš?AP]J^Fi",
crackedStoneBricks: "0g0g7ÃŽÃ°WÃ©ÅžZÄ†Ã–ZÃ¥Ä¾YÃ³EYÃ‡Ã’YÃ–ÄžY5CJFFBÄ«Ã¹Ã‘ÃÄªdQ6{-Ã¹|Ã!PA0Å„?Ä€pÃ’Ã­ÅœÃ¶ÄžÄµÃ¯Ä¨Ã‹Ã§Ã™ÅÄ¶<?2Ä·%Äˆ00P8Ä¬NÄ«JCÃÃ¢ÃµOcÃ¹Ä§Ã‹ÃŽÄ¯TAÄ‚E@i9AÅŒBQÄ€pÃœRÃ‹ÃµÄ¡Ã‰Å€ÅÄ´Ã§<Ã›00%Äœ00",
diamondHoe: "0g0ga00WcÅšHOÄ”Y#qZ8JWCÄ°Y]Ä¸HÃ–MZÃ²JHEÃY000000000001h000000iOg000004?MÃ”000004VÃ²000000ÃU000006Ã¥S00000Ã•Ã¹000006Ã¥000000Ã•Ã¹000006Ã¥000000Ã•Ã¹000006Ã¥000000Ã•Ã¹000000Ä00000000000000",
goldenHoe: "0g0ga00WÃ¬ÃžHZÅžHÅ’ÄH;Ä˜ZÅ‘Ä¨H]Ä¸HÃ–MZÃ²JHEÃY000000000001h000000iOg000004?MÃ”000004VÃ²000000ÃU000006Ã¡S00000Ã•Ã¹000006Ã¥000000Ã•Ã¹000006Ã¥000000Ã•Ã¹000006Ã¥000000Ã•Ã¹000000Ä00000000000000",
ironHoe: "0g0g9000?kHZZZÅ‚ÃšYoÃŽYÄªcW]Ä¸HÃ–MZÃ²JH000000000001h000000iOg000004?MÃ”000004VX000000ÃU000006Ã¡S00000Ã•S000006Ã¡000000Ã•S000006Ã¡000000Ã•S000006Ã¡000000Ã•S000000Q00000000000000",
stoneHoe: "0g0g900WPAYÄ‚Ã–YÃ³EYoÃŽYÃ©ÅžZ]Ä¸HÃ–MZÃ²JH000000000001h000000iOg000004?MÃ”000004VX000000ÃU000006Ã¡S00000Ã•S000006Ã¡000000Ã•S000006Ã¡000000Ã•S000006Ã¡000000Ã•S000000Q00000000000000",
woodenHoe: "0g0g800W)Ä‰WÃ²JHÃ¢ÃWwKYÃ–TZ]Ä¸HÃ–MZ000000001A0000aÃ™Ã«0004Ã½Ä…Ä§000iÄ¼00003:0000rÄ¯0000Ä±00006Å—0000NÃ«0001Ä¤0000cÄˆ0000Ãœ00003E00002S0000000000",
podzolSide: function(n){
var overlay = getPixels("0g0gA{Ä¸ZQÄ¨ZÃ’1ZQÄ™YÃ–hZÃ’hZ]Ä™ZÃ¢xZSÄ¸ZÃŽxZVÃŽW{ÅˆZ000UÅ˜ZÃ©ÃZÃŽ1ZUÄ¸ZÃ€Å˜Z|ÃW{Å˜Z]ÅˆYÃ–xZÃ‡1ZÃ†ÅˆZQÄ™ZÃ²Ã‚WÃšxZÃÃWUÅˆZÃ€ÅˆZQÄ¨YÃžhZQÅ˜YÃ‹xZÃŠÅ˜ZÃ†Å™Y0gÃ®gÃ€Ä­cÃžÄ¯wJI$Ã®d-Å›0SK0sÄœÃ‚|>VVKSÃ‹Ã°Ãˆ$JjÃ™,tMÃ”Ã­(zl$Ã¼Ä»MÅšcN8{Ã¢Ã°cwÄªcÃªzc(ÄªcNOc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äªc(Äª0")
var pix = getPixels("0g0g7Ä¢lZÃ½ÄœYÃ¥ÃƒYÃ†Å™YÃ°oHÃšÄžZÃ¢Ã‘H4ÄŒ9PÄŒg?ÄŒÃSÄˆÃ‰9(J9CÄ©)yÄ·BkaEÃ°Ã‚%UÃˆ{Ã¼Ã‰Ã–)Ã¹9EÃ¹84Ã]2Ã‚$Ã¼Ã²FkÃƒQÄŒÄ‚?ÄŒÅPwh?0Ã¬KNÃFihÄŒÄŽÃƒ{ÄŠRPAÃ«?$Ã²{)9FXÄº1kÃ²EiÄŠByÃƒ")
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i + 1], pix[i + 2], pix[i + 3]);
}
for (let i = 0; i < overlay.length; i += 4) {
if(overlay[i+3]){
setPixel(n, i >> 2 & 15, i >> 6, overlay[i], overlay[i + 1], overlay[i + 2], overlay[i + 3]);
}
}
},//"0g0gA{Ä¸ZQÄ¨ZÃ’1ZQÄ™YÃ–hZÃ’hZ]Ä™ZÃ¢xZQÅ˜YÃŽxZVÃŽWSÄ¸Z{ÅˆZQÄ¨YUÅ˜ZÃŽ1ZUÄ¸ZÃ€Å˜Z|ÃW{Å˜Z]ÅˆYÃ–xZÃ‡1ZÃ†ÅˆZQÄ™ZÃšxZÃÃWUÅˆZÃ€ÅˆZÃ¥ÃƒYÃžhZÃ‹xZÃ†Å™YÃšÄžZÃŠÅ˜ZÃ¢Ã‘H0gÃ®gÃ€Ä­cÃžÄªwJÃ´(O}cÄ›Ä·11Ã«0Ã hP*eVVÃ¬1Ã£3ÃŽÃ»9%+Ã®ÃšÄ§Ä­Ã†Ä·Ä…8(V(Ã¼Ä»cnÃ®5Ä·Ä¨xÅ—Ä¨ÃžÃ°wcÄ¿Ã‹Ã¦DÃ‹Ã«(>5Ä·Ä¨Ã­8tÃ£7Ã‹Ã¡MÃ®pÄ¾Ã‹c,Ã‹cKÄ­Ã¡MÃ®pÄ·Ä¨Ã¡(Ã‹Ã¡MÃ®o(>5Ä¾>60Ä¨cnÃ‹cgÄ¨cnÃ‹cn>5Ä¿tcgÄ¨Ã¢Ä¾KÃ¢Ä·Ä¨Ã¬Ä¾KÃ¬Ä¾Ã‹Ã¢Ä·Ä­cÃ”>5Ä·Ä¨Ã¡MÃ®pÄ·Ä­co3oMÄˆcgÄ¨c,>5Ä¾>4(>pÄ·Ä¨X(>5Ä¿35Ä¿tÃ«(Ã‹cgÄ¨cÃ”Ã‹Ã¢Ä¾Ã‹Ã¡MÃ®pÄ·Ä¨Ã¢Ä¿Å„cgÄ¨Ã£0Ä­Ã¬Ä·Ä­cgÄ¨cnKcÃ”KÃ£0Ä­cÃ”>5Ä¾>4(>5Ä·Ä­cgÄ¨Ã¡(Å„cgÄ¨Ã¢Ä·Ä¨cnK",
podzolTop: "0g0g6Ã–hYÃ€Å˜YÃMW]Ä¨YÃ²ÃWÄ•JW4ÄŠ_KmpAÄ©ÄƒwÄ˜Ä¯wÃ«Ã´4ÄŒÃ–A48hÄ˜ÃÃiÄ¯ÄˆÃ­Ä¿ÃÄžTÃ«6Ä¯cÃ«i1Ã¹PA2Ã²5ÄšPxÃ¹]Ã™Ã¾0c(Ä¨xÄ«IÃ¹4Ä¯4iÃ²ymÅ€0ÄŽÃ€BÄžÄ¬Ã«ÄŠÃ‡%ÄšÃ&o9++Ã¬Ã‘aÃ‰Ã¯ÄšÃwÄž]",
rawIronBlock: "0g0g7Ã¶Ä¼HÃ©Ã®ZÅÄ¡WÄ–,HÅ’#WÃ’>HZÃ¨Y4ÄŽÄªÃ+dÃµ08Ã–Ã«ÄœPÃ¹Ã•0Ã±zyJÄ»Ã¡Ã¾Ä·6Ä¡ÄŠRÃ¼Äƒ)*j4EÃ»ÄŒXÄ¿lÄŒÄ¿Ã–Ã°Ä¨*Äž8ÃC1ÄŒbÃ–Ã—+]Ã³)F1Ä˜cÄ¸+Ä°+Ã¹sPÃ°1RÄ¹q|Ã«Ã‚Ã•q_Ã™<y$)Ä€wEÄ€0Ä¯ÃºBÄŽÅ€",
rawGoldBlock: "0g0g6Å¢ÄŠZÄ±MZÄ•ÄšHÅ•ÃºYÅžjWZÅ€Z0ÄŒÃ†Ã‘Ä¡rÄ‰Ã¼ÅÃšnoÄŠOÃšÃµÄŒ?Ã¶ÄÃ•hÃ¼Ã¼ÃµÄwXÄ“Ã‡ByÃ‘B^rÃ‘Ã†ÃµF1zyÅ€hPÃ¾Åˆ(RÃ‚NÄšÄ±]Ä©ÃÃ¾Ä­Ã‚?iÃ²K]Ä±ÃŸkÃŠ$@ÃÃ¹RÃ‘Ã’ÄšxyÄžÄ‹EÄ£Ã‘Ã°NÃ‚QÅ4FiÃºFÄ§3",
rawCopperBlock: "0g0ghÄ…ÃƒZÄ¡ÄŒZÄ‘Ä½WÃ¦Ã“YÄ‚+YÃžÃ¼HÃ¯OYÄ¼ÅŒYÅ‘nWÅ¡Ä‘HÄ™XH|ÃZÃ©Ä¬HÃˆÃ†WÄ…Ä‹Z}ÅY.Ä½W020Ã«ypaÃÄˆÄŽ(00p9h{kÄaÃÃ„ÃƒoÅSÃµÄ‹Ã¯T1^Ä¨Ã¼Ä¨-SKEwEÃ‚Ã°Ãµ62Ã­3001Ä·Ã£k69Ä·ÃoÄ­8S30Ä­/iDcÄˆ(0Ãox0QÅˆÃµÃ¯MÃ„Ã58-a+kÄˆÃÃ¾Ã€xES0Ã’FÃ’8aÄ˜578c2Ä¥Ä‹Ã€cÃƒoÄ–1Ã«Ã†+c00jÃ«Ã!Ä©ÃŸÄ§Ä’Ã‡RXÄˆÄ“ÃˆÄ§ÃX6Ã†}XsÄ²Ã–{jÃ½ÃFÄ©Ã®XÄ·Ã¤Ä±Ã&g",
barrier: "0g0g4000Ä¤0WÅ‡0WÄ˜0W00001Ä’Ä’SaÄ’Ä’Ä˜qS2Ä”F0aÃ™E0F$E0ÄŒ$E2Ã¹$EaS$EF0$EÄŒ0$!Ã¹0Ä”qS2Ä”eÄ’Ä’Ä˜3ZZÄ§0000",
netheriteSword: "0g0ge000]ÄŒWÃ¯ÅHwTWÃžÃ¿WÃkZÃ‹VZ(JH{ÅšZ$Ã­WKÄºWÃžkW-ÅŠYkxH0000001h000000iz000001Az00000iÃ‚(00001?>00000mÃ„(00h01Ã…Ã®000mglÃ¤(0001TÃ±Ã®00001QÃ¤(00000mÃƒ000009Ä‹Ã±(0000Äƒ(OÃ 000hÄª00O000n(000000Äº(000000",
netheriteShovel: "0g0gc000]ÄŒWÃ¯ÅHwTWÃ‹VZÃžÃ¿W{ÅšZ$Ã­WÃžkWKÄºW-ÅŠYT4W0000000000000000000001h000000iy(00001A?(0000l@?(00007Ã‘Ãƒ00000Ã¤*(00007Ã®300000Ã¥(000007Ä‹000000Ã¦(00000GÄ›000000Ã¤(0000003(0000000000000",
netheritePickaxe: "0g0gc000]ÄŒWÃ¯ÅHÃžÃ¿WÃ‹VZ$Ã­WwTW{ÅšZÃžkWKÄºW-ÅŠYT4W0000000000000000000hhg00001yzTl0000mÃ“Ã¡Ã°000000Ã…@000005Ã¾Ã¡K0000Ã†KÃK0005Ã¾0ÃK000Ã†K0ÃK005ÄŽ00ÃK00Ã‰K006005ÄŽ000000Ã†K000000Ã“00000000000000",
netheriteHoe: "0g0gd000]Ä‹ZÃ¯ÅHoÃHÃžÃ¿W(JH$Ã­WKÄºWÃ‹VZÃžkW{ÅšZT4W-ÅŠY000000000001h000000iyg000003)BÃ”000003XÃ»000000Ã•Ä‹000006Ã (00000Ã–(000006Ã 000000Ã–(000006Ä›000000Ã™(000006Ä›000000Ã–(000000O00000000000000",
netheriteAxe: "0g0gd000]ÄŒWÃ¯ÅH{ÅšZÃžÃ¿WÃ‹VZKÄºWwTW(JH$Ã­WÃžkWT4W-ÅŠY0000000000001g000000ix000001zM00000kO*K0000Ã¡OÃƒÃ00007Ã¢-,00000Ã¾Ã ,00009Ä7Ã0000Ã¾Ã000009ÄŸ000000Ä„Ã000009ÄŸ000000Ä‚Ã000000G00000000000000",
netheriteScrap: "0g0g8000SÃžHÃ¾nZÃ’kWÃŠÄ¹ZÃ©Ã¯Y]Ä‰ZASY0000000004Ã«0001Fg000^}Ã‚00jÃ˜ÃŸ/S0Ä¢Å‚ÃšÄŸÄ u@Å‹ÃšÅ–Ä§3Ä€Å‹Ã§Å—00HuZÃ›00Ä´ZÄ¸Ä´Ä§6PAÃšÅ•00ÄŸzÃœÃ00oÅ‚Å†Ã«00f,Å‡0001ÅŸ000000000",
netheriteIngot: "0g0gb000AÃžZ|4W(ÄŠYPkY|AZÃ‡VYÃžÄ®W-ÅŠYgTW;ÄªW000000000000000000000h000001hy(000hk?Ã‚z01hQÃ„Ã“Ã’U(myÃ‚VÃ“Ã“G>iÃ£Ã’VDG>Ã²qÄÃ“GÃ¡Ä‹/Ã²oIG^OOIÃ²qI]OOÄÄ‘Ã¹3Ä^OÄ’ÄÃ¹00/Ã³.Ä00003.Ã¹00000000000000000000",
itemFrameWood: "0g0g7Ä¾8HÄ±Ä¾YÄ¾EZÄ–GHÄ¢ÄHÄŽÃ„HÄ†CW4AJ9AÃ®0Ã¿80Ã¹Aw2cJi3Ã£ÄŸÃ£ÄŸÃ‹Ä–aAÃ¼P2KwoÃXÃ«1Ã¹Ã­_0jAÅÄ¾Ã£ÅÅÅ•92Ã‚PAX40cÃ¹ÄªzSÄAAÄ4ÅÄŸÃ£Ä¼Å‚ÄžÃ€A4PQiA9cÃ«gPNgÃ0Ä°AÄ½Å”Ã‰GÃ‹Äž",
itemFrame: "0g0gbEJW(ÄšY)Ä©ZAÃ­WÃž2YÃ¥iYÃ¬yYÃ½NYÄÃƒWÄ•Ã W)ÄšY1iyyxhhjkQQQ?U?TmVVÃ‘[Ã£Ã”ÃŽBÃ”Ã£Ã“Ã“Ã’Ã„ÃAUÃ„Ã¤Ã±Ã„Ã„ÃŽBÃ“Ã•IÄÃ¾Ã’TCÃ£Ã¥Ä€IÃ±Ã“ÃCÃ“IIIIÃ“Ã‚CÃ„Ä€Ã²ÄÃ²Ã”ÃkVÃ¤IIIÃ’RlÃ“Ã•ÄÄÃ¾Ã“Ã‚lÃ’Ã“Ã¤IÃ£Ã„Ã‚lÃ¢V?VUGÃlÃ”Ã¢U[Ã’VTkQ@Ã‘Ã“?Ã“Ã1qhhyyyg",
stonecutterTop: "0g0gaÃ½ÄªHÃ¥ÃYÃ¢Ä¾HÃ·-ZÃ¬Ã»YÃ–xHÃ–ÄŽYÃ©ÅžZÃ‹Ã¢ZÃ?W0iOOOOx04Ã„DGGÃ£Ã’SlÃ„yCyDBÃCyÃ GOGCÃ,ÃŸyÃŸÃ ONÃ OGGGÃŸCCz,Ã OzNyGÃ NÃ•IIIIÃ°Ã OÃ–ÄÄÄÄÃ¾Ã ,,GO,Ã OO,DyÃ“DDÃŸz,GÃ ,GGOÃ CÃÃ ÃŸDÃ£ÃÃlÃ„DÃŸyGBÃ4Ã‚GGGGÃ’S0iOOOOx0",
stonecutterSide: "0g0g8000Ã’2HÃ†Å‰H{Ä¨ZÃ–ÄŽYÃ¢Ä¾HÃ©ÅžZÃ·-Z000000000000000000000000000000000000000000FÄ²%ÅÅÃƒ?ÃœÄŸZÃ™Ã³Ã‘ÄœÃ²EÄŽ^Ã•ÄšÅPÄŽÃ{Ä°AJ]ÄEÄ´ÅœÄ£Ã†Ã‡FÅ‚ÄŸZÅ‘Ä¹Ã’HÅÅ‚Ã›Ä±?Å”Ä•Å†Å“Ã´",
stonecutterSaw: "0g0g700WÅ‚ÃšYZZZÄ’Ä’YÅ’Ä–YÃ­8WÃžÄ®W00000000000000000000000000000000000000000000000000000000ÃƒPÃ«00mÃ²?y00ÄŠ^MAÄ§1JÃÃ²yÃ«5oÃµPiI8Ã¼_EÃ¼Ã†cÄŠÃ›Ä»ÄŠÃ€",
stonecutterBottom: "0g0g5Ã?WÃ¢Ä¾HÃ­8WÃ³oYÃšÄžZ0000005AÅPiK9iÃƒPÄžÃ¹dÄœÄƒÃšÄžÄ¿ikJÃšÄŒ]9AÄƒÃšÄœÄ€dÄŽÅPoÃ€dÄœÃ²FCÄ¿4ÄŽÅ‚ÃšAÄ€9+Å‚ÃšÄžÄ¿9ÄžÃº(ÄŒÃ¹gÃ¼ÄƒÃšÄžÄ·dAÄƒPÄœ]dÄžÅ‚Ã–)Ã¹diJQÄ€K000000",
brewingStandBase: "0g0g6Ã–Ã¢ZÃžÃ¾HÃ¢ÄžZÃ¬ÅžZÃ·8WÄ†-Z0000iS0ÄŽI4J05Ä«Ãˆ]ÄŒÃ«604]ÄŒI6Ã¹k?AÃ¬5Ä·Ä“FÄ¯Ä°5:Ãˆ&Ãºh0Ã¼Ã²U0Ä€xyÃV0Ã€x:Ã‡}ÄŠÄ¯xÄ»ÃFÄ¿Ã¬yÄˆ4QÄŒPy0cPiÃ²1(Ä‹PkÃ¬0kÄ¸4J00J0000",
brewingStand: "0g0gp000;ÅšZ|)Z(ÄªWÃŽÃ°WÅ‚OZÄ½Ä«ZsÃžZÃŠÄšWÃ«Å™ZÃ‡Ã’YÃºzZÄ¥ÃƒWÄ‘iHÄµÄ¢HÃ¼Ä¸HÄ½ÄºYZZZÄ˜ÃŽYÄ¾Å†YÄ¹3WÅƒÄºHÄ“Ã·HÃµwYÄ°Ã­Y00g00000Ã«000h0000wÃ«000Mg?(IxÃ«002ÃžÃµAw@OX006Ã«8ÃŽ8Ä«4c000Ã¹EÃ’EÄ»4Ã«0080gÃ’EÄ¯5Ã«03kÄ·gÃ’(Ä¯5Ã«03Ä†Å‡gÃEÄ¯5004Ã’(gÃ¡Ã«Ä¯200Ä…ÃšEÃ¹ÃÄˆÄ¯000ÄÃ˜Ã•ÄÃ¡Ã«Ä»000ÄÅŒÃ¥IÃ¤ÄˆÄ«0005Ä•K0kÄ§00000000oÄˆ00000000oÄ§0000",
cakeTop: "0g0g8000ÅžÄ”YZÅ„YZZZÄ·Ã­ZÅ˜Ä¬YÅÄºHÄ˜Ã®W0000004ÄŒÅ‚ÃšÄŒ]5+Å‚ÃšÄ­I9Ä£Ã²PÄžÄ·9Ä¥jÃš+Ä·dÃ¼Å‚ÃšÅÄ¿dÃ¾Ä»Ã²ÄœÄ¿eCÅŒÄ¸ÄœÄ¿dÄŽÅÄ…NÄ¿dÄœÄ»ÅÄ‹Ä¿dÄžÃ²|ÄŠÄ¿9Ä¿Å‚ÃšÃ¼Ä¿9Å•ÃƒÃ—ÄžÄ·5+Ä°|ÄžI4ÄŒÅ‚ÃšÄœI000000",
cakeSide: "0g0ga000ÅžÄ”YZÅ„YZZZÅŠ_YÃ¶2HÄyHÃ¨ÅˆZÄ¡ÃŽZÄ¬Ã­H00000000000000000000000000000000000000000000000000000000000000001zOOOONg1zOOOONg1iONzOxg4lÃmÃlÃŽS7Ã•Ã°Ã²Ä€Ã±Ã“Ã7Ã†ÄÄÃ¾ÄÃ¯Ã7Ã•Ã‡Ä€ÄÄ€Ã°Ã7Ã¢VVVVÃ…Ã",
cakeBottom: "0g0g5000Ã¨ÅˆZÃ¶2HÄyHÃ•Ä¹W0000004ÄŒÄ¹FA]5AJPCI9yÃŽPkÃ€9Ã¼P(JÃ¹9j9AÄ€Ã¹8J^BiÄ€9oPAÄ©Ã¹9J{AÃ¼Ã¹9yPBkI5B9AÄ©Ã¹9i^(JÄ€9yPFkÃ¹5kÄ‚PAI4ÄŒJFÄŒ]000000",
cartographyTableTop: "0g0grQÄ™H{Ä¨YÃ†Ä¸Y-ÃºW;Ä‰WÄ®sHÄ’Ä¢YÄ†Ã¥ZÄ¦Ã°WÃ¯Ä›HEKZ]Ä‰YÄ¤Ã»WÃžÅZÅ¢Ä“ZZZW-Ã¬HÃ–ÄŽY(ÃZ)Å„Y1ÄˆW1Ã€W;ZY$Ä£WÃ—Ã‚ZVÅ‰HÃªÄ›H02gIR8XgXz8SMÃ¹18S0XX8aÃƒsw04XxzqÃ³Äž*^igÅŽÄ¡a8Ä³Ä¯s>>Ä†Å<w8yÃ£Ä«Ã®>Ã¹ÅžÄ¡x8SgXz>Å…ÅžÄ¥xÃ‚ÄŒÄ‘^Ã‚>Ä·Åž<N1800R>ÅƒÅ›Ä¡z8RgX4>Ä„ÅŽ.zÃ¼ÄŒÄ‘]T>Ä„Å‹AQÄ…#Ã˜Ä°Ã‚iÃ‚ÃºP^Ä¥MÄƒEzgÃ«(4xÄ…Ä›Ä”Ä3wRgÃ¹Ã«ÄÄ•^Ä¯AgÃ­gXxÄ•ÃšÃ—]ÃsÄBP^",
cartographyTableSide3: "0g0g8Ã†Ä¸YÃšiWEKZ{Ä¨YQÄ™H;Ä‰W-ÃºW(ÃZ4Ã¹P4Ã¹P}UÅ„|ÃµÅƒ|ÄœtÅ˜Å…ÅŠ|Äœs}cÅŠÅ•ÄœsÅ•ÃµÅšÅ•Ä¦sÅ•eÅÄµ)wÅ•XÅ‡Ä¾Ã›ÅÅ¢Ã’oÄ©Ã·Å’ÄµYrÅˆÃµÅŠÄµWoÅ”Ä³ÅŠÄµ)wÅ”Å“Å’Å˜Ä¦z|ÄµÅŠÅ˜Ä«rÅ•Ä¦Å’Ä¼Ä«r}ÄœÅ’Ä´Ä»#ÃÅœZÃÅœZ",
cartographyTableSide2: "0g0gnÃšiWÃ†Ä¸Y-ÃºW)Å„Y;ZYÄ’Ã±W1Ã€W1ÄˆWQÄ™H{Ä¨YEKZ;Ä‰W(ÃZ$Ä£W1Å‡WÃ¡ÄˆWZÄ¼ZÅ…ÃWÃ¯Ä›HÄ¹Ä­YÅ¢Ä“ZÃŽ1ZÄ¦Ã°W00g0104NkÄ®RÃ‚wÄ!ÃˆÃ†Ä¹ÄÄ­^iÄ¬ÄcÃˆQ+Ä€Ä«^iwÄ‰!RÃ†Ä¸ÄœÃ®]JwÄ•$RÃ†+Ã¶ÄŒaÄ¹Ä§Ä‰$RÃ†ÄÄ©!aiÄˆÄ•$a0g01aÃ€Ä‰8^gXÄ‰9Ã^Ã€C^Ã Ä…!wÄ”yaÃ€Ä±ÅÄ½Ä‚AÄ§ÄŒ$a2Ä‰Ã„ÄÃ½Ä’ÄŒB$^2Ä²Ã‚Ã—ÄCÄ¨B$^RÄ°ÄŠÃ³Ä‚EÄ«B!^RÄ°ÃˆÃ—Ã½ÄŽÄ«Ä•$^Ä©wXx8Ã‚AÄ•!ÃoÄŽMÃµÃoÄŽMÃ³",
cartographyTableSide1: "0g0gk1Ã€W;ZY)Å„Y$Ä£W-ÃºWÃšiWÃ†Ä¸Y1Å‡WÄºoYÄ’Ã±W(ÃZ{Ä¨YEKZ;Ä‰WQÄ™H1ÄˆWÅšÄ‚WÃ¡ÄˆWZÄ¼ZÅ…ÃW0RxÃ¹ÄŽF^ÃÃ¼ÄŽ/ihFÃ™Ã—Ä½Ä­Ä¡Ã™Ã¥Å‡Ã«ÃºÄ±Ã—Ä³Ä¬Ä•Ã™8gÃ¹ÃºÃ™ÃŸÄ³Ä¬Ä•Ã™gRhÄ‘Ã—ÃŸÄ³Ä¬ÄÃ—Ã‘Ã’+FÃ—ÃŸÄ³ÄÄÃ—F^ÃÃ½Ã—OÃµÄ¬Ä¡Ã‘NÅƒÄ©gÃµx8Ä©hÄŒÃˆÅƒ@ÄÄ•Ã˜Ãˆ>)Ä«NÅƒÄÄ”Ä­MIÄ‹$Ä±OÃµÄ©Ã½Ã“MÄ‚Ä®%Ã—Ã‰ÃµÄ‹lÃ“NÄ¯ÄŠ%Ã—ÃˆÄ³Ä%Ã˜Ã‰Ä‚Ä%Ã™ÃˆÄ³ÄŠgXxqÄÄÃ—Ã‰{>oÄ­MÃ¾?ÄÃ™Ã‚Ã¼Ä¬F^Ã‚Ã¼Ä¬F{",
smithingTableTop: "0g0g7PBZT5WÃÃ„Z-Å‹H)ÄºZAJZ$ÄªH0J2S0i4Ã¾Å‚AÄž^dÄ°rÃ£Ä¯Ä°6PAÃ½]Ä¿Ã“Ã–)Ä¬Ä°a6Ã”ÄžÃ»Ã–oerÄžÅ‚Poe>ÄžÄºR]&ÃšÄžÅ‚Ã—_NÃšÄžÅ€Å”bNPÃ£Å‚Ã–8ÄšRÄžÅ‚|8NÃšÄœÄƒP8dÄ£ÄœÄ¹]Ä¿?Ä›Ã‰ÃºÄžÄ¿]41wÄ¹S",
smithingTableSide: "0g0gh-Å‹H)ÄºZAJZ$ÄªHT5WoÃŽZgTWSÃžH]ÃžYÃ½Ã¡WÃŠJWÃ’Ã¿YPBZÃ€Ã¬Z$ÃWwÃ»WÃ¥zH02xXÃoÄ§TÃµKoÄ«yÃµ?oÄ­McÃgXÃI>gXx8RMÃµÃÃ¼ÄŽMÃ³ÃoÄ­FÃ·Ã Ä„ÅŽ.ÄµÃ Ä„Ä¬hÃ¹XB7.ÄµÃ¡wÄ©hÃ¼ÄžMXÃ—Ã¼Ã¯EÄŠpÃŠÄ©(ÃµÃ Ä„ÅŽ-ÄŠpÃ€,Ä¤ÃRgÃ Ä„ÄªhÃ€ÅŽTÄµ/gXwÄ§hÃˆÄB^Ã‚kÄEÄ§pÄ„ÅŽBÄµÃ Ä„ÅŽ-Äˆp}Ã Ä8RgÃ ÄˆÄŠ1Ã€X.7.ÄµXwÄ‹1UÄŽÄ‘^Ã‚Ä‚Ä¼EÄˆFÃŠÅŽ.ÄµÃ Ä„ÅŽ-Ä",
smithingTableFront: "0g0gf-Å‹H)ÄºZAJZ$ÄªHT5WoÃŽZgTWSÃžH]ÃžYÃŠJWPBZÃ€Ã¬Z$ÃWÃ¥zHÃ½Ã¡W0iMOO4O(OyÃƒBOOzNyBNzyyyyÃ“Ã“VÃ“Ã“Ã“VÃ“Ã„GÃ¤IIÃ±GÃ’CIXÃ±GIIÃ‚BÄ‚Ä¢Ä^Ä‚PÃ‚+Ä±Ä±Ä³Ä”Ä³Ä”Ã‚*Ã¡Ã©G]I[ÃƒBÃ¶ÃªIÃ³Ã¦IÃ€BÄ†Ä…ÄÃ¼Ã¼ÄÃ€*ÄµÄ±Ä³Ä³Ä”Ä³Ã€*IIIG[Ã¤Ã‚5Ã±Ã¤IIGÃ¤Ãƒ5ÄÄÄÄƒÄ¡ÄÃ€VÄ³Ä³Ä³Ä³Ä³Ä³V",
smithingTableBottom: "0g0g5oÃŽZ]ÃžYSÃžH$ÃWÃ€Ã¬Z0JÃºFyÃ«1ÄŽÅÃšÄœÄ§$Ä°xNRÃ‡$ÄŒJPBq!AJPBp}AJPAÃ}AJPBq{ÄŒJPBq$ÄŒJPAÃ!AJPAÃ!AJPBq&AJPBp}AJPBh{ÄxCRÃ1ÄŒÅ‚Ã–ÄŒÄ§1iÃ‚BiÃ«",
enderPearl: "0g0gb000cÄºW+Ã•YCnHhÃ¢W0JWÃ¸Å…WL:W9)W4ÅŠWpÅY00000000000000000001h000001izh0000izQOÃ€001zÃ”IQ*001CÃ¥ÄI?00i,Ã½VÄ€XÃ€0Ã‚]Ã½VÄ€)Ã€0Ãƒ]Ã½VÄ€AÃ€05-Ã²ÄÃ±B005)IIÃ£?000Ãˆ]NAÃ€0005UQV000005V00000000000",
netherWartIcon: "0g0g8000Ä¤Å›YÄŒÃ»WÄŒÃ»0ÃŠÃYÃŠÃÃ«{TH{TS00000000000000000000000000ÃƒÃ‚Ã«000Ã»ÄƒÃ«001NÃ½C002ÄŒÅƒÄ±00dxÃ‚Ã›000ÄœJÃ«001,Ã‚Ã«000iÅ‚Ã«000CÅ‡00000000000000000000",
flowerPotIcon: "0g0gg000(ÃW)ÃW-ÃŽW-ÃŽHÃÅ‰YÃ¥3WÃ¥jHÃ•Ä©WUÃ¬H{ÃºZÃ€Ã¬HÄÃ½HÃ²QWÄÄZÃ€ÃžH0000000000000000000iz00000>Ã„Ã¢>0004Ã„IIÃ¢S009ÄIIÃ³Ä˜009Ä±Ä’Ä’Ä•Ä˜009Ã™Å“Ä´Ä½Ä˜000ÄžÃ“Ã“Ã˜0000Ä¥Ä³Å„Ã˜00009ÄµÄ´Ä˜0000bÅƒÄ½Ä˜00000Å¢Ä£000000000000000000000000000",
cake: "0g0gh000Ä¾!ZÅžÄ„HZÅ•WZZZÄ˜Ã®WÄ·Ã­ZÅ˜Ä¬YÅÄºHÃ™Ä¨YÃ½xY;ÃYÃ¶2HÄRWÄ¡ÃŸHÄ¬Ã­HÄ•ÃW0000000000000Xx8Rg0002hcÃoÄ­wX00QRkÃ°M8R8w8IÃ‚cÄ®TIÃ‚gT8Ä¯TÃ¹E(]NwÃŽ8IQcT8Ä­RcT8Ã°NgXxgTIT]Ã°MÃµÃgÄ«x8F^XMÃµÃgXx5#_qxÃµÃgÃ°CÄ™#^Ä„ÅÃ²Ä–Ã˜4Ä­Ä#2UÅž<Ä¶Ã¡wÄ½Ä™K0iÃ¿<Å–Ã ÅÄ¬Ä”0005Ä•Ã˜ÃˆÄ½Ä˜000000000000",
furnaceFrontOn: "0g0giÃ)Z;ÅŠYÃ–ÄŽYÃ¢Ä¾HÃ‹Ã’YJPWÃ°oHwÃ­WgTWÄ’Ä’YÄšÄ²WÄ®sHÄ†Ã¥ZÅ¥(WÄ¨ÃžYZKWZÅ HZZZ000Ã«08R0X00XMIÃoÄ«McÃ«96ÃÄ€>M{ÃIK0ÃµKÄ„ÅŽ.ÄµjcS0Ä³kx8RgÃ«ÃµÃ¬8Ä«XwÅŽ.Ä·XkÃ¬0Ä«X4x8RXkÃ«8Ä±Ã¼Ä‘^Ã‚Ã¼Ã¼Ã¼ÃŽ8Ä³MgÃwÃ°xIS2Ä»ÄÄ•Ã˜ÃˆÄ½ÄÄ•w2Ã‚Ã½AÄ­MJÄŒÄ‘Ã¬3iÃ‚t8ReÄ¹ÄÃ«1^6Ä‰Ä´Ã˜Ä†Å—dÃ«0Ä±Ã±Ä¥Ä˜Ã§Å‡Ä»(Äˆ9@ÅŽÄ¨Å˜Ã¨KÅždÃ¬8Ã­Ä½Ä­hÃ™uÄ¾XT",
goldNugget: "0g0g8000Ã©SZÅ¢@YÅ¢ÅYÃšgYZZZÅ‘Ä¨HÅ…ÃW000000000000000000000000009w0000ÃƒÃ€0000Ã‰Ã£0000Ã‰Ä¢0000ÃšÅ…0000aÅ¥0000aÅ—00001Ã«00000000000000000000000000",
ironNugget: "0g0gc000-Å›0Ã‡Ã£YÃŸ-Ä§Ä£%YÅ‚ÃªHÅšÄ¶WÄŠÄ²Z-Å›WÃ‡Ã£Ã«ÃŸ-ZY%Y000000000000000000000000000000000001g000000yMh00002?yzg000BÃ“Ã…Ã¤Ã¹000CVÃ¦Ä0000#QIÃ«00008I00000000000000000000000000000000000000000000",
redstone: "0g0g8000ÃŠgWÃ0WÄ(WÅ£0WSgW$0W)gH000000000000000000001w0000aÃ‘0000ÃŠG0002ÅŠÃ‚Å‡00mÅƒÃ¡Åƒ00ÄÄ¼Ã³YÃ«0ÄœÅŠÃ„ÄƒÃ«3Ã…qÄ–Å†Ã«0Ã—Ä¼+Å£00dÄ¥YK000+Ä¿00000000000000",
pumpkinTop: "0g0g8Ä¬Ä™HÄ‘Ã¬WÅ‰xZÅ‰Ã¼YÄ‰Ã€YÅ‰ÄˆWÄžgWKÄ·H0gÃ«w211yJFyI9AjdÄˆg0)Ã‚EmÃ²9l0Ã«Xg9Ä‘GÃ¹yÄ€PÄ‰Ä–Å‰gÄ€8Ä°ÅœÄ˜4Ã¬xx=Å…]Ã€do7Å—4J{ÄŒwÃ­yÃ€8ASxQ85ÄŠJF2IxwÄ¿PyÃº9mÄ¸9Äšhwgh101",
pumpkinSide: "0g0g6Ä¬Ä™HÄ‰Ã€YÄ‘Ã¬WÅ‰xZÅ‰Ã¼YÃ¨Å—Z0g1S4TÃšÃ¹Ä¿%Ã­Å€ÃŸlzNRx&zA&SK%Ã­Å‚%ÄžÃ†%Ã­Å‚%ÄžÃ‰%ÄšÅ‚%ÄžÃ‰%ÄšÅ‚%Ä˜Ã‰%ÄšÅ‚%Ä˜Ã‰%ÄšÅ‚Ä•Äšr%Ã­Ä¿Ä•ÄšÅ‚%Ã³Ä¿Ä•ÄšÅ‚xÃ³Ä§Ä•Ã³Ä§xÄ·0Äˆa1ÄŒÃ‚9Äˆq?ÄŒÄ¹PÄŒÅ|",
carvedPumpkin: "0g0g8Ä¬Ä¸HÄ‰KYÄÃ¬WÅ‰TZÅ‰Ã¼Y$0WQSWÃ¨Å—Z0g1S4TÃšÃ¹Ä¿%Ã­Å€irQyÄšx&#Ä”+Ä·K%Å„Ä›,Ã—Ã†%Å„Ä›,Ã™Ã‰%Å„Ä˜,ÃšÄƒ%Ä´Ä€OÃšÄ‹%Ä Ä«e[r%Äº>ÄˆÃƒÃ‰&Å‚Ã¢Ä¢Å„Ã‰&Å”ÄžÅ‚ÃšÄ›xÅ„+rÃŽÄ˜xÄ½Åš%Å•Å€Å‹Ã9wÄ†[Å‹Å™9Å‹Å¥~",
jackOLantern: "0g0gaÄ¬Ä¸HÄÃ¬WÄ‰KYÅ‰TZÅ‰Ã¼YZ6HZÃ¯HZÅ¡WÄ½Ä‹HÃ¨Å—Z0102g0i2O(3(j(jN4SV43Ãƒ3RzSÃ„U5V(Sz*Ã“Ã5Ã“Ã€(z*Ã”Ã 5GKOz*Ã”ÃlGÃ•Oz)G(kÃ”Ã£>zO>43Q)Oz**3Ã€5*OzVVÃ¢Ã…VÃ’OzÃ„Ã”GGGÃ“Ãw*ÃÃ”7Ã“6Ã«w)OÃ®z-Ã»NJ90ywyJ9JFwyJFJF",
pumpkinSeeds: "0g0g4000Ä²ÃˆYÄ²oZÄ±Ä­Z00000000000000000g000o0S0$0K0SoÄ˜0ÄˆÃ™010001Ã«TK2Ä¨Ã­Ä§02Ä§0000000000000",
melonSeeds: "0g0g4000ÃŽÃƒHEÃ«YsÃ€H0000000000K000Ä˜00Ä·000Å‡KS00Ä˜K00Ã€Ä˜0QÄˆ01Ä¯002Ä§TÃ«02ÄªÄ§0000000000000000",
shears: "0g0g9000Ã™Ä¹YÄ’Ä’YÄ¾Ã‹HÃžÄ®WÃ²3HÄOZÃŠÄ™ZT4W00000000000000000000iOw00001>N20000lzwz0001ÃN2O000mÃ¡wzN000mÃ2N[001Ã”04xÃ001Ã…0hn0002xhVÃ000w4VG0000S8G000008Ã«000000000000000000000",
melonSide: "0g0g5Ã›RWÄŽÄ™Z*ÅˆZÃ‚1ZMÄ‰Z5NaQmI5yaÃ‘kS5ÄŠ8Ã‘kS5Äš1KÃ¾8xÄ˜TÃ™Ã¾Ä¯%ÄžTÃ™Ã°Ä¯%ÄžTÃ™Ã°Ä¯xÄ˜TKÃ°Ä¯5ÄŠ1Ã‘kÄ¯5y1QkI5RbQ385Ä©Ä±XObÃ’RÄ±Ã¯Ä›bÃ“RÄ³Ã¯Ä›bÃ“RÄ³Ã¯Ã®86ycQ38",
melonTop: "0g0g5Ã›RWÄŽÄ™ZÃ‚1ZMÄ¨Z%ÃžY5N1Ã‘mI0ÄŒTQATwkT?2aÃ‘0Ã¬ÃŽÃ¹j{Ã«8{XÄ‚ACaSA90Ã¼ÄºÃ²ÄˆS]2ph0JÃ–wxÃ€ijwisI0P4Ã°Ä§{XÃ«x(a8mÃºÃ–gÃ´5Ã­^QX>?A1wÄˆRwÄŒÃ«5y2wkI",
melonSlice: "0g0gd000Ã°yWÃ‡ÃºYÄ¤Ä©WÄ­[YÄŠÃWÄ”Ã€YÃ¤KZÄ½Å€YÄ§Å™ZÃ†KZ?(ZÄ°Ä¬Z000000000000000000000i0000003?w00000O)Ã‚00003Ã”-Ã‚0000.+Ã•i0003OÄ‹Ã•r000+Ã“O-r003ÃÄ‹Ã“Ä¯r00OÃ£OÃÃ¯Ä˜01>OOÄ¯Ã‚Ä˜0bUIIÃ¬#000ÄVh#Ä˜000bÄ£Ä£Ä˜00000000000",
glowstoneDust: "0g0g8000Ã©yWÅ‘ÄŒZÅ¥ÅœZÅ¢Ã‡ZÄÄ«WÃ†ÅˆZÃ¶Ã‚Z000000000000000000001w0000aÃ‘0000ÃŠG0002ÅŠÃ‚Å‡00mÅƒÃ¡Åƒ00ÄÄ¼Ã³Ä¶Ã«0ÄœÅŠÃ„ÄƒÃ«3Ã…!Ä’Å†Ã«0Ã—Ä¼+Ä”00dÄ¥YK000+Ä¿00000000000000",
redstoneLamp: "0g0g8(ÃŽWQÄ™YÃŠÄ¨HÃ¯NYÄ‰Ã®HÄ•Ä‹YÃºÃWÃºÃ‚Z0000004CÄ·aU81<ÄdÄ¦Ã«5Ä¶gbÄžÄ¯aÃˆÃ­Åˆ@Ä·rÄ»=Ä„DÃ•9Ä‰ÅŠÄ´Ã¯g0Ã¯rÃœÄˆS07ÄƒÄ½Å—0hhÅŠÃ¿Ã­Ä·pÄ©mÃ•mÄ¿dÅRSÄŸÄ€bÄ­Ä¯5Ä£Ä·1ÃˆÄ¸pÅ¡Ã«4lÄ€9ÄŠ8000000",
redstoneLampOn: "0g0g6-Ã¬HQÄ¸HÃ½Ä‹WÅÃ‘YÅžÃ˜HÅ™ÅžH0000004CÄ·9Äœ81.Ã‡eÄ­Ã«5Ä¯Ä·9Ä¯Ä¯a@Ã­ÃŽ.geÄœtÄ”DÃ†9ÄˆÅ‹Ã½XÄ·0Ã¯Ã‘Ã¾Ä˜S06Å“ÄÄ·0dgÄ…Ä–Ã­Ä·eÄšjÃ¡nÃ†e@RKÄ¡o9Ä¯Ä¯5Ä¯Ä·1.ÃeÄ­Ã«4kÄ¿9ÄŠ8000000",
quartz: "0g0ga000ÄšÃ²WÅ’Ä…ZÅžÅ†WÃ²ÅŽWÅ†ÃŠHÅŽÃ©HÄ¾#YÄžÄ€ZÃšÃ¢Y00001h000000ix001h01y)001ySizU001y)j+Ã¡001OÃ”mÃ’Xh00@Ã•lÃ”@M004ÃžVÃ•[Ã‘01kÃ¬VÃ†Ã¿Ã¹01xTÃ¢Ã¤Ä€hg4N]Ã¢Ã²Ã¬Ã“g4Ã AGÃ²[,S9GÃ¥Ã¤Ã²Ã±Ã²00Ã¿Ã²Ä€Ã²IÃ¹009Ã¹9Ã¹Ä0000000000",
endStone: "0g0g6Å†Ä‚HÄ¾Ã–HÅ–Å‚HÄ­ÅŸYÄ¶oYÅžÅ’Z4XI}iÄ‰AEÃ‚Ã¹Ã­g9n8?wRÃÄŠÅˆa^Ã¼XÄ»TÃÃ»Ã‰(!IÃ€Ä§Ä‰xoV]XIPÄ°aÄ‰nhÄŒÄ TÃNR]RjÃ¯o]&wÃA2RÃ‘Ã¼Ä9Ä§hB4Ã}gSS#zwÃ­Ã½Ã²Ã‚Å€wAb(yT5Ä§Ä„",
endPortalFrameTop: "0g0gaTÄ­HÄƒpWB3YÄžÄŸY%Ã‘ZÄª8HÅŽÄ‚ZÅ–Ä²Y0SZ4ÃŽH000000001yxN?iyg25(?K3Ã€S2,Ã0Q+Ã S2+4RRAÃS2Ã…EIIÃ«Ã¢S1Ã…]ÄÄÃ¼Ã¢g4Ã…]ÄÄÃ¹Ã¢S2Ã…EÄÄÃ¹Ã¢S1Ã…]ÄÄÃ¹Ã¢g4Ã…EÄÄÃ¹Ã¢S2+SS04ÃS2,Ã4Q+Ã S25(@Ã€3Ã€S1QTU>kQg00000000",
endPortalFrameSide: "0g0ge000TÄ­H%Ã‘ZÄƒpWoÄºZgÄ›HÄ’lZÄ¢ÄHÄ­ÅŸYÄ¶oYÄ¾Ã–HÅ–Å‚HÅ†Ä‚HÅžÅ’Z000000000000000000000000hhhhhhhhz?VVVVUNAÃ„GGGGÃ’RBÃ¤IÄÄIÃ±R?PÄ“Ä´Ä±ÄÄ‰UÃ¢UyyyhiÃ…Ã±VVVVVVÃ¤Ä’ÄÃ±GGÃ¤Ã³Ä’Ä²Ä£Ä³Ä’Ä’Ä´Ä±Ä’Ä¢ÄÄ“Ä±Ä”Å‚Ä¤Ä´Å€ÄÃµÄ¤Ä²Ä€Ä“Ä¤Ä¢IÄ’Ä¥Å„Ä‘Ã²Ä’Ä£Ä’Ä±Ä°Ã³ÅÄ”Ä”",
eyeOfEnder: "0g0gc0000ÃŸWoÄºYFVWÃ‚6Y.Ã¼YÄŸ_H.ÃZÃ—Ã¿WÄƒpWoÄ‰WÃ­ÅŽW00izNx0000hyyh0000hhhh0000hhhh0000izNx0000y?Uy0000zÃ‘Ã¤N0000*Ä‚Ä“Ãƒ0000*Ä¢Ä“Ãƒ0000zÃ±Ã¤N0000y?Uy0000izNx0000000000000000000000000000000000",
enderEye: "0g0gd000MÃ°HtzH}8HÃ“Ã”ZÄ²Å¤ZÄŸÃ½YÃ´5YÃŸÄœYÃ¿@YÃ„QWgÄ›WoÄ‰W00000000000000000001y000001jOy0000jQQTw002)Ã„Ã¤Qi002?Ã–!X_00x@JÄ©ÄTÄ˜0xIÃŸÄ©ÄTÄ˜0x]ÄŠÄ©Ã¤Ã¬Ä˜02)Ã±FÃ®_002j]Ä-r000Ä™OOTÄ˜000bÄ™hÄ£00000bÄ£00000000000",
chiseledRedSandstone: "0g0g7Å€ÅŠWÄ¸Ä¹YÄ°ÄšHÄ¨ÄŠWÄ™Ã¬ZÄ•ÃWÄ…(Y00TAJ^|Ä°AÃ›+Å‹JÅ‚ÃšÄ£ÃšÄž00ÃŽAJÃ„9*Ã£Ä¼[tmÄ¾ÄƒÃ¥Å‚Ã„.ÅŒÄ›Å€ÅŽÃ¾Ã‰Ã‹Ã»GÃšÃ“MÄŸÄžÄÄžÅ…Ã¿Ã˜Ã›JÅ’Ã£AJÃ£ÄŒÃ¼Ã„&]Ä†Ã¶]Ä½|ÄÅÄ•Ä±Å|Ä¢Å„ÃšÄ­Å…Ã‚Ã…sJ]ÅÄ¾ÃšÄ•ÄŸÃšÃ£",
cutRedSandstone: "0g0g7Å€ÅŠWÄ¸Ä¹YÄ°ÄšHÄ¨ÄŠWÄ™Ã¬ZÄ•ÃWÄ…(Y00TAJ^|Ä°AÃ›+Å‹JÅ‚ÃšÄ£ÃšÄž00ÃŽAJÃ„9)Å‚Ã²[t9Ä­Å‚ÃšÄŸm%ÄœÅ‚ÃºÄžÄ½|Ä¯Ã»Ãž)ÅMÄžÄºÃšÄžÅ…N+Å‚Ã›@Å&*r},CÃ²ÄœÄƒÃ¶+Ä½FÄŒÅ‚ÃšÄžÅ…|ÄžÅ‚Ã›]Ä¼^UÄ¹Ã›Ã„Ã½Ä¾ÃšÄ•Å‚ÃšÄž",
redSandstoneTop: "0g0g5ÄTWÄ¡JWÄ™Ã¬ZÄ°ÄšHÄ•ÃŽZ5yÄ¹^yU?AP(Ä«{CiÃ´PSÃºÃ•Ã¼Ãº?iÄŠAÃ½1AÃ»i]JxÃ¯ÄiÃ€ÄŠUEÃ¼ÄŠÃ¬yÃ²Ã€Ä«UÃ€AÃ‡ÃºyÄŒEyPÃ€JUCRÄ³EJÃ²EÄŠK?iÃ³Mj4B@Ã‘CiÃ‚AÄŒ^PÄ€Ã²QÃ¼Ã²To^]Äš^",
redSandstoneBottom: "0g0g6Ä…(YÄ™Ã¬ZÄ°ÄšHÄ•ÃWÄ¨ÄŠWÄ¸Ä¹Y5DqJÃ…i!@0J(ÃºÃŸ)Ã»c8bÃ¬Ä‘cÃ£Ä½Ä¬Ã·oÃ˜^]Å‹Ã½ÄœÄ€ÃQ$J+0ÃŸm4JÃ€Ä•Ã’Ä“Ã†Ã*A|?EKp$2pyÃ²rzÄÄzJ6tÃ°Ä˜Ã®ÃžÅ‚4N]a}ÄŒÅ“Ã¹ÄFÃ¶yt{0Å‹ÃºÄžÄ“Ã—ÄšÃ†",
redSandstone: "0g0g7Å€ÅŠWÄ¸Ä¹YÄ°ÄšHÄ¨ÄŠWÄ™Ã¬ZÄ…(YÄ•ÃW00TAJ^|Ä°AÃ›+Å‹ÄžÅ„Ä•Ä£Ã‰Ãš,yPÄ«Ä…ÃžÃ¥Ä®ePÄŸÄƒÃ”Ã‘Ä|*_ÃšÅ”ÃšÄ´Ä´Ã˜ÃšÄ‚Ã²ÄºyÃ¢ÄµÅ‹Å‚Ã‡)Ä´Ä½Ä­Ä²ÄÄ­ÅÃ–RÅ…DAÅ…ÃšÅ„ÃžÃÅ‘Ä–Ä¶iÅ’Ã¶ÄŸÃÃ†ÄÃ´Ã›$Ä³Ã¥FÃžÃˆÅ‚ÄƒÃœÃ™Ã·Ä¯Å+",
redSand: "0g0g6Ä¸Ä¹YÄ¥JWÄ°ÄšHÄ™Ã¬ZÄ•ÃWÅ€ÅŠW4ÄŠÄ¸?ÄŠÄ‚Ã‘ÄšÅÃµr8@+9AÄšÅ€FNÄºPÄŠÄ°Ã“Ã¾Ã³EÃ¾^$Ã¼ÃºÃ’NÃ‡KÄŸÃ‡Ã›iÄ²$Ã¾_%ÄšbÃ’iÄ„Ã–Ã¼Ã‡5JÃ‰(ÄšÃƒ(ÄŠÄ±BoÄ±Ã™Ã¼Ã‡PÄžÃ‡Ã’ÄŽÃ´lmÄ±?laEÄŠÃ‡EÄ’Ãº?oÃ²?kÃ³$Ã¼Ã",
purpurPillarTop: "0g0g7Ä­Ä”HÄ¢Ã‰YÄ•Å‘ZÄšrWÄ…Ä¡ZÄÄ±WÃºÄW4Ã¹^4Ä˜PNiÃ½+Ä¨Ä‰MnÃšÃ–>h%Ä¡AJÃPdRPÃ’Ä§Ã¼FRJPKÃ¼F@J^Å‰Ä”Ã„ÃJÄ’ÅŒA9RJÃ„Å‡Ã¼+Å‰Ä’Ã„Å‡Ã¼FÃ”VÄžÅ‰Ä”!ÃšÄžÅ‚Ã’A0(b0Ã¹PNnÃ›FÃÄ‰MiÄ”Ã£ÄºFAÄƒAÄšRP",
purpurPillar: "0g0g7Ä­Ä”HÄ•Å‘ZÄšrWÃºÄWÄ¢Ã‰YÄÄ±WÄ…Ä¡Z5MBiÃ_9(Ã½Ã²KÃƒ9-Ã´IÅ‡Ã»Ã²<Ä›Å‚-Ã»8Ä™BiKÃ´aÄ Ã½Ã²KÃ´6Ä Ã´IÅ‡_XÄ¥Ä›Å‚-Ãƒ5MB2KÃ»9-Ã½Ã²KÃ»9-Ã´IÅ‡ÃƒÃ²<Ä›Å‚.Ãƒ9MBiÃŽÃƒ8Ä Ã½Ã²KÃƒ8Ä Ã´IÅ‡_XÄ¥Ä›Å‚-_",
purpurBlock: "0g0g7Ä­Ä”HÄ¢Ã‰YÃºÄWÄšrWÄ…Ä¡ZÄ•Å‘ZÄÄ±W42a4Ã¹2%ÄžÅƒ%ÄžÅ*ÄŸÃŠ&ÄžÅ‘lÄ¾Ã™mÄ¢Å‘lÅ‚ÃŸmÄ£ÃŸ+Å”Äš,Ã‰Äš:ÃšÄœ:ÃšÄšÃ‚?iÃPi0Ã­R4Ã«^%ÄžÅ‘%ÄžÅeÄžÅ%ÄŸÃˆnÃ…Ã™*Ä¾Ä’:Ã‰Ä”*Å‚Äš:Ã˜ÄœmÅ’Äš:ÃšÄš+Å”ÄšPAJPAJ",
purpurPillarSW: "0g0g7Ä¢Ã‰YÄ­Ä”HÄ•Å‘ZÄšrWÄÄ±WÃºÄWÄ…Ä¡Z4Ã¹P4Ã¹P|ÄžÅPÄžÅP+Å‚Ã‚CÅ‚ÄžÅ‚ÃšÄžÅ‚ÃšÄ§s1Ä§s9Ä´ÃµÄ¿Ä´ÃµÄ¿Ä°ÃµÄ€Ä°ÃµÄ€Äž_Ã‘Äž_Ã‘Ä§s1Ä§s1Ä´ÃµÅ€Ä´ÃµÄ¿Ä°ÃµÄ€Ä°ÃµÄ€Ä£Ã˜ÄžÄ£Ã˜Äœ4Ã¹P4Ã¹PP]ÄƒPÄžÄ»PÄžÅ‚Ã–CÅÄžÅ‚ÃšÄžÅ‚Ãš",
seaLantern: "0g0g[Ã‚DZÃ‚nY}nYÃˆ-W}nHÃ„-WÃ„DZÃŒ-WÃ„DYÃ£Ä¢WJÅ¢WÃ³Å‘ZÄ›ÃŠZÄ“$WÄ²Ã¶YÄªÃšHÄ—{YÄ›{YÄŸÃŠZÃ¿bHÃ£Ä¡ZÃ‚DYÃ‚nHÄ®Ã¶HÄ¾Ã¶ZÄºÄ…ZÅ‚Ä†WÄ¾Ä†WÄ¾Ä…ZÄ¶Ã¶ZÄ¶Ã¶Y}7HJÅ¢HÄ®Ã©HÅ†Ä–WÅ†Ä–HÅŠÄ–HÄºÃ¶Y^7WÄ—$WÅ†Ä•ZÅŠÄ•ZÄºÃ¶Z^nYÅŽÄ¦HÅŠÄ¦WÅŠÄ¦HÄ—;HÅ‚Ä•ZÄ—;Y^7HÃ„EWÅŠÄ–WÄ®Ã©YÃ‚EWÄ²Ã¶ZÄªÃ‹WÄ£Ã™ZÅ‚Ä–HÃ»bHÄ²Ã©YÃ·Å¢WÄ®Ã¶YÄºÄ†WPÅžHÃ°ÅYÄ›ÃŠYÃ¦Ä±WPÅžW@7H?ÅžW04g(Ã«02a08KwÃ®Ã®gg]Ä‰Ã6Ã·uSÃ²yÃ’aX$AÃÃ 6|r+ÃÅˆÄºÄ©Ã³4=Ã¬9ÄºÃ•ÃºÄŒ]ÃºpÄŒÄ‹Ã¯CcÄ„Ä°ÄœÃ—kÄÃ€ÄRz^Ã²#6SÅ‰B!Ã„$ÃˆÄ™^Ã½Ä®nÃ­8Ä¥Ã­?#m$]Ä™ÃÃ¼Ã°Ä¿ÄšÃ“-Å‰*bm)Ã•ÃºÃÃ¯Ä­ÅÄžaÅ„Ã­?#Ã…)Ã•Ä™ÃÄ¼Ä­Åƒ02Å‹Å‰*bmA]Ä™ÃXÃ“Ä¾Ã«eÄ„Å‘BaÃ„$Ã†Ä™RÃ¼Ã°PCaÄ¤ÃžÄŒ^UEÃ‚Ä>[[nÄš4Å”ÄªÄª]JA]Ãºq*]ÃŒÄš=ÃÅ‘nÄ®es+ÃžÅ Ä¨Å4Ä§44Ä‹Ä (ÃŽxsÅ‹Ã²AgÄ§11iyKÃµÄŠÄšÃ‘a(09Ã«2",
prismarine: "0g0g5ÃŒÄH@DHÄ‡;WÃ¦Å‘Z=6Y5({Ã•IÄƒgiÃº|Ä€oÃ­)Ä¨c?8^m0wÄŽAÃ™RSÃ¯Ä˜^KmAwkÄÃ«Ä™bÃ“)Ä³iiÃˆ}6R5Cj0Ãºj9Ã­Ä¿5F0$8SFÃ­Åˆ(QÄ¯$2Ã»Ã“CÄ³Ã‘Ä«Ä§2(zPÃ¾00Ã¾4{NcÃºÄ1X1i",
darkPrismarine: "0g0g6<ÄZ/6YMQW*UYAÅšH.Ã¯W4Äˆa4Äˆ^xÄ©sxÄ©sd^ÅƒdwÄ»Ã‚AJÃ‚ByKÄŠÄ©0ÄŠÃ—CÄ§Ã™ÄÄ±cdÄ¨ÃŠdSÅ‘Ã‚BiÃ‚By4Äˆ^ÄˆÄˆ^yÄ©sCÄ©sdÄ§Ä»ÄˆxÃŠÃByÃByÄˆÄˆ^4ÄˆRxÄ©$xÄ©sdSÅƒeÄ§Ä»Ã‚ByÃ‚By",
prismarineBricks: "0g0g8Ã›Å‘ZÃ¿;HÃ®rZ@DHÃˆÄ¢HR6YÃ‚Ã•WÃÄY4J]QJÃ®(0BwSz(86wÃ¥5g~ÅST<2x<S9:y1BÄ©8jÃ‚1Å‘ÄŠPÄªuTÃ¹Ã¿Ä¶Å¢ÃŠ{SiZ3;ÃA2Ã‘3ÃŒÃ4jÅ‰<ÃÅ‹DÃ»ÃÅŒjÅŠWÅ¥ÃƒÅŠiÃ’ZJÃ’BÄƒÅ€WÅ‚Å†ÅšÃ›Ä½Å”Ã¢Ä£Ã‰",
prismarineCrystals: "0g0g6000ÃŸÄYÄŸÃ™YÅ†Ä•ZPÃ½ZÃ»rH000000000000000000009w0000ÃƒQÃ¹008ÄƒÃšÄ001j^Ä¿000PNS002Ä‚XJ00kÅ‚Ã°ÄŽS0ÄŽÅ„Ã½+Å‡0Ä»Å“Ä‘#02Ã‰Ã‘J]02P0000000000000000",
prismarineShard: "0g0ga000Ã‚Ã•WÃ»aZR6ZÄ{WÃ„Ã•Y%Ã¯WÃªÄ±HMÄYMÃ½H000000000000000001g0000001xg00000MQ?Ã€00006QATg0006ÃŸQÃžÃ¢Ã€000ÃykR?Ã«00Ã”DAQÃ¥0006ÃŸyQp0006iDDÃ«0000Ã”yÃžÃ«0000ÃŽÃžp000008hÃ¹000000Ä00000000000",
darkOakLeaves: function(n){
var pix = getPixels("0g0g5ÃžÄŸW000ÄžÅ’HÄ‚Ã–YÃ©ÅŽZ0ÄŠÅ€Ã—yUÃ‘Ã¹zFÄŠÄ‚BÄšÅƒ?iJ!0ÃƒSJÃ|NÃˆAmÄ°PiÄˆ0Ã¬pÃ™XÄº%Ã¾Å‰Ã«kÃº2yÄ‹{Ã«Äƒ%)sQÃ¹4Ã’Aj%Ã¹Ã‰IÄˆ2Ã2^Ã•Äž9Ã¶Ã¾Ä°Q8Ã´Ã•Ä1wÄq?)Ä°Ã™Ã¼Ä¸Ã’A]hJÃ´")
for (let i = 0; i < pix.length; i += 4) {
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}
},
spruceLeaves: function(n){
var pix = getPixels("0g0g6Ã³EY000|)ZÄ‚Ã–YVVHT4W4wÃ‰wÄš>ÃµÃ­Å€ÄŠÃ¾ÅŠÃ“Ã³Ã‡c4bA(_Ã·(Ã‡&-Ä©cÄ¸_AÄšÄ¯$Ã°9)Ã¾Ã•ÄÄ®p8i>4Ã¾PwÄšÅŠÃµÄ¹_ÄŠÃ¾_AwÃ‡ciÃ–$Ã­Ä°Ã·NgÃ“Ã³Ã‰$Ã¾TÃ‘(|4Ä›?&-Ä©$Jo)ÄšÄ¯ÄÄ¾s8mÃ•")
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i]*(97/255), pix[i+1]*(153/255), pix[i+2]*(97/255), pix[i + 3]);
}
},
jungleLeaves: function(n){
var pix = getPixels("0g0gb000ÃžÄŸWÃ³oHÄ‚Ã–YÄžÅ’HÄ’yWÅ†5ZÄ©ÃŸHÄ¦ÃHÅ–Ã¦HÅŠDW0i2j4)TiOi2NOQ2xRO0Ow00AAO0y02*4>(yi0BÃ“z(3Mw05Ã“S0Qz0yw)A0RÃ…3MwA)2]Ä‚Qz04Qx?ÄŽ>>0wSyBÃ“NS2jOR40Oj2hAQ033N02>)0N000wQ)0M(0Qz4Swxz3>>w")
for (let i = 0; i < pix.length; i += 4) {
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}
},
floweringJungleLeaves: function(n){
var pix = getPixels("0g0gb000ÃžÄŸWÃ³oHÄ‚Ã–YÄžÅ’HÄ’yWÅ†5ZÄ©ÃŸHÄ¦ÃHÅ–Ã¦HÅŠDW0i2j4)TiOi2NOQ2xRO0Ow00AAO0y02*4>(yi0BÃ“z(3Mw05Ã“S0Qz0yw)A0RÃ…3MwA)2]Ä‚Qz04Qx?ÄŽ>>0wSyBÃ“NS2jOR40Oj2hAQ033N02>)0N000wQ)0M(0Qz4Swxz3>>w")
for (let i = 0; i < pix.length; i += 4) {
if(abs(pix[i+2] - pix[i+1]) < 10){
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}else{
setPixel(n, i >> 2 & 15, i >> 6, pix[i], pix[i+1], pix[i+2], pix[i + 3])
}
}
},
acaciaLeaves: function(n){
var pix = getPixels("0g0g6Ã³oH000ÄžÅ‚HÃšÄŽYÄ†Ã¥ZÃ°oH5yPÃ‘ÄŠÅ‹Ã‘Q>CEK$Ã»wAÄ·Ã‡5Äª1]Ã¾Ä±XA^Ã«ÄšyAIQBÃ»UNiÃÃµXP(k^SÄ«Ã€Ã«Ä¬c4ÄŠUÃµÃ³PwA]BÄšÃ‚ÃŽSÃ‡(mQ|JÄ°Ã³JÄ°$Ä­RNwÃŠBwÃAER@6ÃXÃ¼]XJs")
for (let i = 0; i < pix.length; i += 4) {
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}
},
birchLeaves: function(n){
var pix = getPixels("0g0g5Ã³oH000ÃžÄŸWÄ‚Ã–YÄžÅ’H4ÄˆP]kÃ‚FXÃ³xJRAARAÄŒ^cÃ¹Ã†B@Ã²8@Ã²QNÃEX^{iÃ»Bjp0ÄŠSF2Ä§BXPA2Ã@N^8Ã¼]]Ä˜RÃ‘ÄŒb4XÃ¹Bh9%Ã¼Ãxy^xyÃ»$kÃ‚Ã’iÃŠEÄ­IXÄžPÃ‘Ä˜9EXI")
for (let i = 0; i < pix.length; i += 4) {
setPixel(n, i >> 2 & 15, i >> 6, pix[i]*(128/255), pix[i+1]*(167/255), pix[i+2]*(85/255), pix[i + 3]);
}
},
oakLeaves: function(n){
var pix = getPixels("0g0g5Ã–Ã¾Y000Ä¢Å¢YÄ‚Ã–YÃ¢Ä¾H0ÄŠÅ€Ã¹NUÃ‘Ã¹z&NÄ‚CRÅƒ?JJ&0ÃƒSJÃÃžÄ©ÃˆAÃ°Ä°Ã›iÄˆ0ÃºpÃ¹XÄºNmÅ‰Ã«kÃº2NÄ‹{Ã«ÄƒMÄ­ÃŠQÃ¹4Ã’ÄžÃƒ%Ã¹Ã‰IÄš^Ã€2^Ã•Ä­PÃ¶Ã¾Ä°Q8Ã³Ã•Ä1wÄq?)Ä°Ã¹Ã¼Ä¸Ã’A]2iÃ´")
for (let i = 0; i < pix.length; i += 4) {
var c = leafColor
setPixel(n, i >> 2 & 15, i >> 6, (pix[i]/255)*c.r*255, (pix[i+1]/255)*c.g*255, (pix[i+2]/255)*c.b*255, pix[i + 3]);
}
},
spyglass: "0g0ge000Å…>YÄ¥ÄŠYtÃ¾HNPWÃ—Å¢ZÄ‰ÃWÅžÃ°WZZZÃ¨ÅšYÄ‘Ã¢YÃ€ÄˆYUÄŠH(ÃW0000000000000iw000001)Ã‚00000Ã”?Ã¯w0006n)Vg000ÃŽÃžÃ >g000Ã¿Ã±nÃž0009ÄÃžyÄ˜000Ä‚Ä‘i#0000Ä±Ä„Ä´Ä˜000bÃšÄ³Ä·0000ÄšCÅ„0000bJÃ˜00000dÄÄ·000000Å„00000000000000",
noodles: "0g0g5000Ä†zYÅŠ-HZÄ‘HÄ½ÅY0000004y1xÄš0Bn9ÃºÄiMpb]oÃ¼Eob{mÄˆEoaÃµkÄˆEoaÃµk8EpaÃ¶Ã¼8!OaÃ¬Ã¼9!3qÃ¬Ä«Ä‰FRÅ‰MÄ©Ä‰5SÃMIÄ‰5@Ã‘R4Ã²1@Ã‘@4c1gÃ?ÄŒ{002S2S",
egg: "0g0g7000Ã¢ÄWÄšÃ¿ZÅ†.YÅšÄ„HÃ·5YVOY000000000000000000009A0000ÃƒÃ•Ã«002Ä‹Ã›Ã¹003zÃšK00lrÃšÃŠ00mÅ‚Ãš$00mÅ‚Ãš$00mÅ‚Ã–$00kÅ‚PÃŠ00dÃ‚^Å‡001ÄžÅ‚00000000000000",
orange: "0g0gk00WÃ¥Ä·HT0WÄ¼Å—ZÄ™ÄˆY$Ä˜WÅ™TWÃSWÄÄˆYÃ©wHÅ¥ÃŽHZÃ—ZZPHÅ¥Ä¼ZZÃˆWÅ…hWÅ¥Ä¬WÃ€Ä˜WÄ¬Ä·ZÄ…ÃY0000000000000008Ã«00000000800000000Ã‘EÃ«000001ÃµÄ®/iÃ¹0000OF^RÃ¹XÃ«000*%Ã¶Ã‚Ã¼XÃ«006Ã”MÄ’Ã‚Ã¼Å›A006ÄM^Ã‚ÃµÅ›Q006ÄF^Ã‚ÃµÅ›Q008ÄF^ÃÄ‡AQ001,Ä‘@OÅ‹IÃ«001)xÅ–Ã¨Ã¹IÃ«0008Ä‰8Rhg00000@MÃµÃ0000000000000",
ramen: "0g0gi00W*hYAÄ™W$ÅˆHÅ‚4YÅ–ÄƒWÅŽÄ†HÄ¨(WÄ®sHZÄ§WÄŸÃºZyÄ«Z;ÄˆYsÃ€W-Ã¹HÃž(ZÃ€Å‡Y(Ã«Y000000000000000000000000xg0000000c>g00000004ÃŽ8000000RIzMÃ«00008Ã‚kÅ^{ÄÃ«00oRÃ¹ÄRkÄ)00oÅŽkÃ¯.Ä½ÅŽ)00oÅŸ.ÄµÃ Ä…8)001nÄ¥Å–Ã§Å†6Ã«0006ÄžfÃ¨qÄ·000001Ä•Ã˜S000000000000000000000000000000000",
bowl: "0g0g8000;ÄˆYÃ€Å‡YÃž(ZSÄ§YsÃ€W-Ã¹H(Ã«Y00000000000000000000000000000000PAÃ«00iÄƒÃ–i00Ä‘y^?S0Å”AJÃšS0ÄÄžÅ‚BS0Ã£Å‚ÃšÄ’00bÃƒÃ—Ä·000%Äœ00000000000000000000",
mushroomStew: "0g0gb000;ÄˆYÄ¥ÅŒZÄµ+ZÄµÃ”YsÃ€WQÄ§ZÃž(ZÃ€Å‡Y-Ã¹H(Ã«Y0000000000000000000000000000000000000000001hhg0001iOyxg00jQQ>OB00mÃOOCÃ’00nÃ°Ã“Ã“Ã•Ã½00aGGGÃ²Ã€000VÃ±Ã¤V00000VV000000000000000000000000000",
largeFernTop: function(n){
var pix = getPixels("0g0g5000ÃžÄ¾WÃ‡Ã¢YÃ¾PHÄ–Ä’Z0000000000000000000000000k00000ÄžS0y00yÄ·0ÄžS04Ã‡aA00yÄ‰Mw00Ä _(Äˆ09Ä‹c!N010ÃÃÄˆ002ÃµEÃ¹00nbÃ°N00ÄšÄŒÃÄŽS0ÄŠ>Ã‘JS")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
largeFernBottom: function(n){
var pix = getPixels("0g0g6ZZÄ§Ã©ÅžZÃ·EZÄŽÃ³HÃ–ÄžYÃVW0ÄŒÄ¸Ã•ÄœS5oÃ‰ÃÄ©ÄˆgÃ­]Ãšp82UÄ±^mÄ»lEÄƒÃžÄ›y!S^}Ã‚ÄˆgÄº1Ã£2S0ÄŒÄ¯QkÄ·0>p]ÄžS00Ã»%i02Ä²b]oK9AÅˆÃ–+J0Ã‡Ã‡PÄK00ÃˆÃ™Äˆ000jQÃ«0002(00")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
fern: function(n){
var pix = getPixels("0g0g8ZZÄ§Ã–ÄžY000Ã‡Ã’YÄŽÃ³HÃ·EZÃ©ÅžZÃ¾PH00100200sK0200tK0200kS020dÄ‡Ã‘0200{L02dgÄŸÄ¯02Ã“Ä«UQ)Ä©Ã¡ÅÃœÄœÄ±Ä±Ã–Ã®Å›Ä®Ã»Ãˆ0dLÄ˜Å‹Å04Ã‘Ä¸0201ÄŸÄ€0200)Ä§0200nS0200cw02")
for (let i = 0; i < pix.length; i += 4) {
let bright = pix[i]
var c = foliageColor
setPixel(n, i >> 2 & 15, i >> 6, (bright/255)*c.r*255, (bright/255)*c.g*255, (bright/255)*c.b*255, pix[i + 3]);
}
},
"water0": "0g0g8Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄº|%Ä¶;Å”Ä¾Ã‹ÃšZZÅ”Å¢Å–Ä•4Ã¼ÃºAÃ¹ÅŒPyPBAJBAJA0Ã‚Fy1A2P]JJ?AP]ÄŠTAiJ4JPAÃ¾Å—ÃžJTAJSÅ€Ã±Ä€wÃ«_PAJPAÃ‚FAÃ‚QÃ­PPAJPAÃºPAJPkJFAPA2Ã³PAÃºzÃ•awÃ¿ÅŸAiP",
"water1": "0g0g8Ä¢Å’Ä•Ä–Ä¢Å”ÄŽÄ‚ÃšÄªc%Äº|%Ä¶;Å”Ä¾Ã‹ÃšZZÅ”4Ã¼ÃºAÃ¿&PyPBAJBAJBÄžPFyÅ€BÄšP]JJ?AÃ‡PAÃ‡BÃ¼JAJPAÄ:Ã¾iÃ‡AÄŠÃ‰Å¥WÃAÄž{PAJPAÃ‚FAÃ‚QJPPAJPAÃºPAJPAJFAPBÄšÃ³PAJLÅ¡Ä±$ÄÅ¢BJÃ‡",
"water2": "0g0g8Äº|%Ä–Ä¢Å”ÄŽÄ‚ÃšZZÅ”Ä¾Ã‹ÃšÄªc%Ä¢Å’Ä•Ä¶;Å”4Ã¼ÃºAJsPyP?AJBAJCÅPFzÃ–AÄ¹P]JÃ‚?AÃ–PAÃ–CÃ¼JAJÃ²AÄ‚tfiÃžAÄŠÃšKÃ…Ä¬AÄ·]PAJPAÃPAÃ‚]JPPAJPAJPAJPAJFAPCÄ¹Ã²PAJ)W^)Ã¹Å„+JÃ–",
"water3": "0g0g8Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšZZÅ”Ä¾Ã‹ÃšÄ¢Å’Ä•Ä¶;Å”5CÅFAÃ’Ã–ÄœÃ»ÃšÄžÅ‚Ã–CÄƒ]ÄŠJ|ÄœÃ³PkJÃšAÄƒÃ–ÄžÃ³ÃšÄžÃ³PCÅ‚PCÄ¹F$x(ÄŒÃ­P)Ã²4Ã–Ä¨]Ã¹Ã¹ÃšÄžÅ‚Ã–ÄŽÄ‚ÃšÄžÅ‚ÃšAJÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚|ÄžÄ¹]Ã¼JÃšÄžÅ‚QÃ·ÃƒPxxQÄŒÃ³",
"water4": "0g0g7Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄ¶;Å”Ä¾Ã‹ÃšZZÅ”5CÅFAÃ’Ã–ÄœÃƒÃšÄžÅ‚Ã–CÄƒ]ÄŠJ|ÄœJPkJÃšAÄƒÃšÄžÃ³ÃšÄžÃ³PCÅ‚PCÄ¹ByM-ÄŒÃ­P)Ã²4d2]Ã«Ã€ÃšÄžÅ‚Ã–ÄŽJÃšÄžÅÃšAJÃšÄžÅ‚ÃšÄžÅ‚Ã–ÄžÅÃšÄžÅ‚|ÄžÄ¹]Ã¼JÃšÄžÅ‚]IÃƒPw1QÄŒÃ³",
"water5": "0g0g8Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄ¶;Å”Ä¾Ã‹ÃšZZÅ”Ä¢Å’Ä•5CÅBAÃ’Ã–ÄœÃƒÃšÄžÅ‚PCÄƒÃ•JJ|ÄœJPAJÃšAÅ‚ÃšÄžÃ³ÃšÄžÃ³PAÅ‚PCÄ¹ByMwÄŒÃ­PÄžÃ¬AÃ¶2]Ãµ~ÃšÄžÅ‚Ã–ÄŒJÃšÄžÅÃšÄŒÃ»ÃšÄžÅ‚ÃšÄžÅ‚PÄŽÄ‚|ÄžÅ‚FÄžÄ¹]Ã¼Ä‚ÃšÄžÅ‚]IÃƒPy1AA^",
"water6": "0g0g8Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄ¶;Å”Ä¾Ã‹ÃšÄ¢Å’Ä•ZZÅ”5+Ä¸BAÃ’Ã–ÄŠÃƒÃšÄžÅ‚PCÄƒÃ•Ã¹J|ÄžJPAJÃšAÅ‚ÃšÄœÃŸÃšÄžÃ³P)Å‚PCÄ¹B$.wÄŒÃ­PÄžÃ¬AÄ‡Ä±]Ã·Ã|ÄžÅ‚Ã–AÃ‚ÃšÄžÅÃšÄœÃ»ÃšÄžÅ‚ÃšÄžÅ‚PÄŽÄ‚|ÄžÅ‚FÄžÅ]Ã¼Ä‚ÃšÄžÅ‚]ÅÃƒPyPwA^",
"water7": "0g0g8Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄ¶;Å”Ä¾Ã‹ÃšÄ¢Å’Ä•ZZÅ”5+Ä¸BAÃ’Ã–ÄŠÃƒÃšÄžÅ‚P)ÄƒÃ•Ã¹J|ÄžÄ¹Ã–AJÃšÄŒÅ‚ÃšÄœRÃ–ÄžÃ³|ÄœÅ‚PCÄ¹B$.BAR|ÄžÃ¬AÄ‡Ä±]Ã·P|ÄžÅ‚Ã–AÃÃšÄžÅ‚ÃšÄžÃ»ÃšÄžÅ‚ÃšÄžÅ‚PÄŽJ|ÄžÅ‚FÄžÅ]Ã¼JÃšÄžÅ‚?Ã•ÃƒPyPwA^",
"water8": "0g0g6Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄ¶;Å”ZZÅ”5+Ä¸BAÃ‘Ã–ÄŠÃƒÃšÄžÅ‚?AÄƒÃ•Ã¹JFÄžÅ‚ÃšAJ|ÄŒÅ‚ÃšÄœRÃ–ÄžÃ³|ÄœÅ‚PAÄ¹BwFFAT|ÄžÃ¬EÄ‚a]ÅPPÄžÅ‚Ã–AÃÃšÄžÅ‚ÃšÄžÃ»ÃšÄžÅ‚ÃšÄžÅ‚PCJ|ÄžÅ‚FÄžÅ]ÄŒJÃšÄžÅ‚?oÃƒPAP+JÃ‚",
"water9": "0g0g7Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄ¢Å’Ä•Ä¶;Å”ZZÅ”5)Ä¸gÄŒÃšÃ–yjÃšÄžÅ‚AÄŒÄƒÃ•Ä„ÃºFÄžÅ‚ÃšÄŒJ|ÄŒÅ‚ÃšÄŒÃ²Ã–ÄžÃ³|ÄžÅ‚PAÄ¹BwMPAT|ÄžÃ¬Fg^]Å“PPÄžÅ‚Ã–AÃÃšÄžÅ‚ÃšÄœÃ»ÃšÄžÅ‚ÃšÄžÅ‚PCJ|ÄžÅ‚FÄžÄ¹QÄŒJÃšÄžÅ‚?qÃƒPAPriÃ‚",
"water10": "0g0g6Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšZZÅ”Ä¶;Å”5)Ä·0ÄŠÃ’Ã–wjÃšÄžÅ‚AÄŒÄƒÃ•Ä€ÃFÄžÅ‚ÃšÄŒJ|ÄŽÅ‚ÃšÄŒÃ²ÃšÄžÃ³|ÄžÅ‚PAÄ¹?xxPAP|ÄžÃ¬FiÃ‚]IPPÄžÅ‚Ã–A]ÃšÄžÅ‚ÃšÄœJÃšÄžÅ‚Ã–ÄžÅ‚BCJ|ÄžÅ‚FÄžÄ¹PAJÃšÄžÅ‚?qÃƒPAPiiÃ‚",
"water11": "0g0g7Äº|%Ä–Ä¢Å”ÄŽÄ‚ÃšÄªc%Ä¢Å’Ä•ZZÅ”Ä¶;Å”4ÄŠIÃžÃ¾Å•]Ã¹aPAJÃŽJÃ‚Q/Ä²Ã’AJPiPFkJ]JÃ‡PAÃŽFAJAÄšP$ÃºÃ˜AJÅ‚BA>Ã‘Ã¾PBÃ³Ä¿Ã’AJQJÄ¿PAJPyÃ‡PAJ?AJÃ™ÄŒPBAJÃ’AÃ²AJPPAJ%Ä¢Ä±AJÅ‚n+Ä°",
"water12": "0g0g7Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšZZÅ”Ä¢Å’Ä•Ä¶;Å”5)Ã¹AÄŠÃ‘ÃšwbÃšÄžÅ‚(AÄƒÃ•Ã†ÃF+Å‚ÃšÄŒJ|ÄŽÄºÃšAÃ³ÃšÄœÃ³|ÄžÅ‚PkJ?wxPAPPÄžÃ¬FyJPgSFÄžÅ‚Ã–A]|ÄžÅ‚ÃšÄœÃ³ÃšÄžÅ‚Ã–ÄžÅ‚B+JPÄžÅPÄžÄ¹PAJÃšÄžÅ‚QÄ€ÃƒPAÃÃ»iÃ‚",
"water13": "0g0g7Äº|%Äªc%Ä–Ä¢Å”ZZÅ”ÄŽÄ‚ÃšÄ¢Å’Ä•Ä¶;Å”5AÃ¹AÄŠÃ‰ÃºCaÃ²PAckÄŒI689PAJAÃºÃ‚PkÃºAJJQÃ³Ã‚PAPkJ?wp^AJ^]Ä‘FyJPgS!PAÃºA]Ã‚PAJQÃ³JPAÃ³PAB]Ã²PPy^PiPAJÃºPAAÃ¾UPAÃÃ§2Ã‚",
"water14": "0g0g6Äº|%Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšZZÅ”Ä¶;Å”5AÃ¹wÄŠSÃšEaÃ–+Å‚NkÅ‚Ã•a89+Å‚ÃšÄŒÃº|ÄžÄ¹ÃšAJ|ÄœÃ³|ÄžÅ‚PAJ?y1PÄœJPÄžÃ²FyJPiSFÄžÅ‚ÃšA]|ÄžÅ‚ÃšÄœJÃšÄžÅ‚Ã–ÄžÅ‚B+Ã²P+ÅPÄžÄ¹PAJÃš+ÅAÄ€ÃƒPAÃºÃ¾Ã­Ã‚",
"water15": "0g0g8Äº|%Äªc%Ä–Ä¢Å”Ä¢Å’Ä•ÄŽÄ‚ÃšZZÅ”Ä¶;Å”Ä¾Ã‹Ãš5AÃ¹wÄŠ_ÃºqaÃ²PAmÃ½AId]ÄPAJAPJPiÃºAJÃ‚QÃ³Ã‚PAPAJ?y1^QJP]Ã²FyJPySCPAÃºAIÃ‚PAJQJJPAÃ³PAB]Ã²PFy^PiPAJÃºPyAÃ¹Ã¼PAÃºÄŸÃ­Ã‚",
"water16": "0g0g8Äªc%Ä–Ä¢Å”Äº|%ÄŽÄ‚ÃšZZÅ”Ä¶;Å”Ä¢Å’Ä•Ä¾Ã‹Ãš0J^900Ã‘I1Ã™ÄžÅ‚Ã‚2Å‚Ã’#2Ã«ÄžÅ‚ÃšJ0ÃšÄžÄ°Ã™J_%ÄšT%ÄžÅ‚AJPwÃ¹Ã«BÄžPAÄžSQJPAJy0ÄžÅ‚Ã™JR%ÄžÅ‚ÃšÄšPÃšÄžÅ‚Ã’ÄžÅ‚0ÄžÃŸAÃ¾Å€%ÄžÄ°AJPÃ™ÄžÅ€04_AJ]Ã»ÄˆP",
"water17": "0g0g8Äªc%Ä–Ä¢Å”ZZÅ”Äº|%ÄŽÄ‚ÃšÄ¶;Å”Ä¢Å’Ä•Ä¾Ã‹Ãš0i^dÃ«SXX1JPAÃ–3AÃ¯/Ä›Ã†Ä°AJi0JP9Ã¹J{NRPCPxAJP0Ã¹1C]PAÄ¯]Ã‘JPAJr0Ä°AÃ¹Ã¹]NPAJRPJPAJPAwÄ¯Ã‰4ÄxJPxAJPÃ¹Ä°x0Ã«{AJ]_Ä˜P",
"water18": "0g0g7Äªc%Ä–Ä¢Å”ZZÅ”Äº|%ÄŽÄ‚ÃšÄ¶;Å”Ä¾Ã‹Ãš0i^Ã–Ã«]X61JPAÃ–2Ã‘Ã¯/ÄƒÄ”PAÃ¹Ã«3JP9Ã¹J{CRPCPxAJP0Ã¹1C]PAÄ¯]Ã‘JPAJr0Ä°AÃ¹Ã¹]JPAJ]PJPAJPAwÄ¯Ãˆ0Ä9JPxAJ{Ã¹Ä°x0Ã¹{AJ]_(P",
"water19": "0g0g7Äªc%Ä–Ä¢Å”ZZÅ”Äº|%ÄŽÄ‚ÃšÄ¶;Å”Ä¾Ã‹Ãš0i^Ã–Ã«]X61JPAÃ–Ã­Ã‘Ã¯!Ä€Ä”PAÃ¹Ã«3J]PXJ{CRPCPxAJT0Ã¹1C]PXÄ¯]Ã‘JÃ‘Ã¹Jr0Ä°AÃ¹Ã¹]JPAJPAJPAJPAAÄ¯Ãˆ0p9JPxAJ{Ã¹Ä°94J{AJ]_NP",
"water20": "0g0g8Äªc%Ä–Ä¢Å”ZZÅ”Äº|%ÄŽÄ‚ÃšÄ¶;Å”Ä¢Å’Ä•Ä¾Ã‹Ãš0iRÃ–Ã«]X01JPA9Ã­Ã‘Ã¯!Ä€Ä”pAÃ¹Ãµ3J]PXÃ¹{CRPCPxAJT0Ã¹Ä§6]PÃ¹Ä°8Ã‘JÃ‘Ã¹JÃ†0Ä°AÃ¹JPJPAJPAJPAJPAAÄ©ÃˆKp9JPxXJ{Ã¹Ä°94J{Ã¹J]_Äš{",
"water21": "0g0g8Ä–Ä¢Å”Äªc%ZZÅ”Äº|%ÄŽÄ‚ÃšÄ¶;Å”Ä¢Å’Ä•Ä¾Ã‹Ãš40aÃ–J1Ã«J]JPA$Ã«AÃ­Ä’Ã²Ä”PAÃ¹s_JP0Ã«242P02PA009Ã‘2Å€2]4JP0w0AÃ¹094PAÃ¹00JPAJPAJPAJPA0]qÃ‘Ã²4JPAÃ«04Ã¹P0w04Ã¹01_Ä˜4",
"water22": "0g0g7Äªc%Ä–Ä¢Å”ZZÅ”Äº|%ÄŽÄ‚ÃšÄ¶;Å”Ä¾Ã‹Ãš4JRÃšÃ«SXg1JPA0iÃ‘Ã°Ä’Ã«SÄ°AÃ¹Ã«0J>cXÃ¹{Ã°]PCPxAJSKÃ¹Ä¿AÄ¯PJP94JÃ‘Ã¹JSwÄ°AÃ¹JPJPAJPAJPAJPAC]Ãˆ4ÄcJPAXJ{Ã¹Ä°94J{Ã¹J]_N{",
"water23": "0g0g6Äªc%Ä–Ä¢Å”ZZÅ”Äº|%ÄŽÄ‚ÃšÄ¶;Å”4JRÃ™0>Xg1JPA0JÃ‘CÄ’Ä§SÄ°AÃ¹Ã«0JjcÃ¹Ã¹PÃ°P9CPxAÃ¹SKÃ¹Ä¿wÄ¯PJ]P42P(Ã¹]wÄ°AÃ¹JPJPAJPAJPAJPcJ]R4ÄcNPAXJ{Ã¹Ä°94Ã¹{Ã¹J]^Äš{",
"water24": "0g0g6Äªc%Ä–Ä¢Å”Äº|%ÄŽÄ‚ÃšZZÅ”Ä¶;Å”4JRSgRÃ‘g1ÃšÄžÅ‚wJÃ‰C^Ã¬SÄžÅ‚Ã™Ã«]Ã™JÅ‚Ã™JPÃ’ÄžÄ°%ÄžÄ°AÃ¹Ã€SÃ¹Ã¹0ÄžPÃšÄžP409AÃ«PwÄžÅ‚ÃšJPÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÅ‚ÃšÄžÄ°%ÄžQ4Ã¾Ä²%ÄžÅ‚Ã‘Ã­PÃ™ÄžÅ€4Ã¹_Ã™J]JÃ­_",
"water25": "0g0g7Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄº|%Ä¢Å’Ä•ZZÅ”Ä¶;Å”4ÄŒ>0JÃQg2PAJwÃ¼Ã‚@Åƒ9XÄŒJ]Ã¹PPiJPi^PAÃ²FAÃºEJÃ†KÃ¹Å€0ÄŒPPAPA09EÃ«PAÄŒJPiÃPAJPAJPAJPAÃ²PA|4Ã¼Ã³FAJQÃ­^]ÄŒÃºAÃ¹Ã‚Pi]G2^",
"water26": "0g0g6Äªc%Ä–Ä¢Å”Ä¢Å’Ä•Äº|%ZZÅ”ÄŽÄ‚Ãš4JR0JsÄŒg9ÄžÅ‚ÃšwJÃ–y-94Å‚ÃšÄŒÃ¹PÄœÃ»ÃšÄžJPÄžÅ‚PCÅ‚PAÃ¹oKÃ¹Å‡cJTÄžÅP06Ä¨AÃ«]AÅ‚ÃšÄžJPÄžÅ‚ÃšÄžÅ‚|ÄžÅ‚ÃšÄžÅ‚PÄžÅ_4Äƒ|+Å‚ÃšÄŒ0PÄœÅ‚Ã–AÃ¾|ÄŒJ0ÃŸ2P",
"water27": "0g0g5Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄº|%ZZÅ”4Ã¼]0JsQg9PAJAÃ¼ÃC-94ÄŒPQÃ«P]JÃ‚Pi^PAÃ²AÃ¼Ã²AJoKÃ¹Å‡cJTBAT06Ä¨AÃ«]AÄŒJPkPPAJPkÃ³PAJPAÃ²PA_AÃ¼JFAÃºQ2P]ÄŒÃºAÃ°^AÃ¹0Ã›2P",
"water28": "0g0g5Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄº|%ZZÅ”4Ã¼P4JsQJP?AJAÃ¼ÃC-9AÄŠPAÃ«P]JÃ‚Pi^PAPAÃ¼Ã²AJ0KÃ¹Å‡giTBAT071AÃ«]EÄŒJPkÃPAJPiÃ³PkJPAÃ²PA]AÃ¼JFAÃºA2P]ÄŒÃºA8^AÃ¹Ä¿ÃšÃ­P",
"water29": "0g0g7Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšZZÅ”Ä¶;Å”Äº|%Ä¢Å’Ä•4Ã¼Ã²4JsQJP?AJAÄŒÃ‚CÃ³PAÄŠPAÃ«P]JÃ‚?y^]ÄŒPAÃ¼Ã²AJS0ÃºÃ†Ä”iTBASÄˆaÄ¨AÃ¹]PAJPAÃPAJ]J^PAJPAÃ²PAIAÃ¼JFAÃ²A2P]ÄŒÃºDÃ„aAÃºÃ•2Ã­P",
"water30": "0g0g6Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšZZÅ”Ä¶;Å”Äº|%4Ã¼ÃºAJsQÄŠPBAJAÄŒJCÃ«PFy9AÃ­P]JJ?y^]ÄŒTAkÃºAJT0ÄƒÃ†Ä”iTBASÄœaÅAÃ¹]PAJPAÃ‚PAJ]JPPAJPAÃºPAÃ²EÃ¼JFAÃ²A2^PAJyÄ½awÃ¹Ä¿0iP",
"water31": "0g0g6Äªc%Ä–Ä¢Å”ÄŽÄ‚ÃšÄº|%Ä¶;Å”ZZÅ”4Ã¼ÃºAÃ¹Å‹PyPBAJBAJA0Ã‚Fy1A2P]JJ?y^]ÄŒTAiJAJP0Ã¾ÅÃžJTBySÄœ7Ã†AÃ¹]PAJPAJFAJ]JPPAJPAÃºPAÃº]Ã¼JFAPA2^PAÃºyÄ¿awÃºÃ•AiP",
"netherPortal0": "0g0gO]bÄ–Ã•{ÅšÃÃ‹)Ã‘;ÄšK$ÄšQbÃšÃ€rÅ–;aÅ’Ã«Ã¶Äž-aF;aÄ’Us(Ä…e-XÄ•ÄžIÄ¥ÄžÃ¡Ãš)-aÃ–-aÄ’Sb${bÅ–Ã¤Ã©Ã¢SaÅ“Ã¤ÃšÃ¢Ã™{Åš)aEÃ†s(Ã‘;ÅšÄ…u-ÃŠ$Ãž-aEXÄ…ÄžÃ¨Ã©Ã¢Ã¼Å•-K;Äš)9ÅŽÃ€s(IÄ•ÄžÃ†$ÃžÃ™ÃŠÅšÄ€Å¥-Ã«Ä…Äž{bÄ–Ã†sÃž-aÅ’Ã¹Å„ÅžÃ¨Ã¶Ã¢Ã¹Ä´Åž;aÅ“Ä=Ã¥;b$Ã€bÅ–0gÃ®gÃ€3oÃž8oJÃ´(Ä·Äµ<4@]ÃºÃ«]4Ä²Ã€j1V2Ä¶Ã†Ä˜Ä¾PXÄ©{*Ä®TÃ»Ä‚86Ã‰cÃŸÃŠ?,Ã‹dÅ‡Ä·PApÃ¨MÄ·UÃÄ«Ã­k9S4yoÄ·Ã¹Ã¨MÃ·9kS2,lSÄ¡BÃUÄ„{Ãž[ÃŠPÃ¬?gp9MÃ’{1Ã‹8ÅÄ²tgQÃ¼ÃÄÃ©Ã‚Ã«ÃµÅœÄ©ÃÃ‚Ä­lÃ†Ã»Ã¦QÅÃŠPÄ´P1Ã‚ÄAÄ“Ä’bbeÄ²?B.b$Å‘5s3Ã­9Å‡t{Å‚Ä‹03Ä^AÄºÃ’yÃƒÃ‚TÃœkÃ…(ÃƒhÄº|1ÃŒ9DÃ‚IÄ™1ÃŠÄ¤Ã¼5(Ã­Ä¬4Ä™",
"netherPortal1": "0g0g.SaÅ“Ã†sÃžÃ•{ÅšÃ™{ÅšÃ•;ÅšÃ€s(]bÄ–Ã€bÅ–-aÄ’ÃÃ‹)QbÃš;aÅ’Ã†$ÃžÄ‰u-Ã¨Ã©Ã¢ÃµÄ´ÅžÃ‘;Äš;aÄ’Ã€rÅ–{bÅ–{bÄ–K$ÄšUs(Ã¹Ä´ÅžÃ¤ÃšÃ¢Ä‰&Ã¥-aFÃ¡Ãš)Ã™ÃŠÅšÃ†s(Ã¤Ã©Ã¢Sb$;aÅ“XÄ…ÄžÃŠ$ÃžÃ‘;ÅšIÄ•Äž-aÃ–-aE)aEÃ«Ã¶Ã¢SbÃšÃ¡Ã‹))9ÅŽK;Äš;b$Ä€Å¥-IÄ¥Äž-aÅ’Ã«Ã¶Äž-9ÄÃ¨Ã¶Ã¢Ã¼Å•-XÄ•ÄžÃ¼Å„ÅžQbÄ–Ã«Ä…Ã¢0gÃ®gÃÃ­sÃ«Ã²EÄšÄ³)Å‡Ä¶Ti6oXÃ»x?Ã„Ã‹Ã°P%ÄÄƒÃ™Ã”r%ÄÃŒtÄ˜Ä‡Ã¬Ã†ÃÃ¶ÅœÃ‘Ã·9?%FÃ´Ã²ÄÃ’%pÃƒAÄ©DFÅ {ÄˆÄ­ÃºxÃh|ÅÄ‚AÄ¬Ã¿AÃ²Ã°qEÄ§woRCÃºÅ‰EÄšÃ³dÃ…Ä’&ÄŸÃBAÄ”}Ä¾ÅRÅ’Ã½!Ä¿Äƒ5Å™Ä—ÄˆÄ¤6{#M(Ã’Ã¾EÄ¤JÃ¯ÄŸÄ±Ã‡Ã˜Ä›&ÄšÃ³8Ã¿ÅŒ~]ÃÃ´o^wÃšRÃ†ÅšÃ³Ä<ÄƒÃœÃ‚Ã´pÃ¶UEÃšÃžÄŽÃÃ½Ã¢Å @ÃšÄ™Ã´Åƒ5ÄœÅˆiiÃ©ÄŠÃ¸cÄ‘^Ä€ÃžQÃ›BÄƒÃµÃ“Ä°%ÄŠÃ´",
"netherPortal2": "0g0g;;aÅ“Us(K;ÄšÃÃ‹)Ã€s(]bÄ–Ã‘;Äš-aÃ–ÃŠ$ÃžQbÃš-aÄ’;aÅ’Ã™{ÅšÃ¹Å„ÅžÄ…e-Ã¤Ã©Ã¢{bÅ–Ã«Ã¶ÄžÃ¨Ã©Ã¢Ä‰u-Ã¤ÃšÃ¢SbÃšÃµÄ¥ÅžÃ«Ä…Ã¢)9ÅŽÃ†$ÃžÃ¹Ä´ÅžSb$K$ÄšÃ¨Ã¶Ã¢Ã†s(-9Å-aFÃ†sÃžÃ•{Åš-aÅ’-aESaÅ“XÄ•ÄžÃ¡Ãš)Ã€bÅ–{bÄ–;aÄ’Ã¼Å„ÅžÃ•;ÅšXÄ…ÄžÃµÄ´ÅžÃ€rÅ–Ã¼Å•-Ã«Ä…ÄžIÄ•ÄžIÄ¥Äž;b$Ã¡Ã‹)Ã«Ã¶Ã¢Ã¼Å”Åž)aEQbÄ–)9ÄŽÃ‘;Åš0gRcT@kÃŸ3AÄŠÄ³)MÃ·;Ä™Ä·kÄˆ?t36?AÄ»UÄ‰mclÄ»%Ã°Ãˆ4ÅšrÃšÄ®RÃ¥Ã€Ã‹wÄšÄ­BÅ‰Ã³g,vAÄ xÃ²ÅÅ‹CÃÄ©Ä€Ã¬Å‹$Ã¬Ä±6Ã£[cÃ‚d(ÄšÄÄŒÅ—ÅŒÄ‘aÅƒM4$Ã¼ÄŠ?Ä?Ä&4$;Ã¹@Ã™ÄŠÄ±Ã“Å‚ÄÃ™Ä ÃhÄ£Ä´Ã€Ä‰Ä°RwÄ½dÄœ4TÄ¡4Ã‚Ã£Ä°ks%CQ4dRPÃ§sÄ—Ã§$Ä¬sÃ„Ã®Ã¥KÄ¬Ä¹jÄŽÄ¾xÃ‰T%X&ÅÄAÄ‰sÃ‘Ä‚Ã¹NÃ©!Ã™Äœ,]Ä¦gÃ›}Ã“(Ä¦Ã´EÃºÃ‡PÄ«3Å“Ã‹Ä…Ã½Å™P",
"netherPortal3": "0g0gM;aÅ’Ã€rÅ–Us(Ã†$ÃžÃ¨Ã©Ã¢Sb$SaÅ“Ã‘;ÄšÃŠ$Ãž]bÄ–Ã¡Ãš)Ã¹Ä´ÅžK$ÄšÄ€Å¥-Ã•;Åš-aÄ’-aEQbÃšÃ¤ÃšÃ¢ÃÃ‹)Ä•ÃªÄ¢Ã¤Ã©Ã¢;aÄ’Ã†sÃžXÄ•ÄžÃ†s(-aÃ–IÄ•ÄžXÄ…Äž;aÅ“Ã€s(Ã¨Ã¶Ã¢{bÅ–Ã‘;Åš-aÅ’Ã«Ã¶Ã¢Ã™{Åš;b$SbÃš)aEIÄ¥Äž)9ÅŽÃ«Ä…Ã¢Ã•{ÅšIÄ¥ÅžÃ«Ã¶ÄžÃ€bÅ–)9ÄŽÃ¼Å”Åž0gÃ®gw3kÃŽÄ¯AÃ^$Ä¨Ä´-Å›2Q26SÃ¼Ã³h*l?Ã’Ä¿VÃ½V1ÄˆÄƒ(Ä»Ä¸QXÄ¾Ã‘Å™sÃ‘0cQ(tÃ¤Ä®Ã¸lÄŽÃ­MÃºÃˆBÄ‹ÄªÃ¨*Ä‚kÃ0Ã­lÄ½(Ã¹Ä´Ã°CÃ®Ã¦)Ä¬0B{EJApÄŒÃŒÃªj^pÄÄŒÃ¯m[?ÄŒ?dÄžÄ®Ã¥lÄ«AÅ™Ã‰uU5ANduFÄ†ÃŠÃ‡Å‡V.S@a4@JÃ‡ÃªN?Ã¤ÄŠÃ¬6Ä’uÃ¾6Å’COÄˆA+$^Ä·Ãº9,u0Ã¾jÄ ÅŸasÃ€&x.~pÄŠÃŠÃ¨U9mÅ¢Ã³Ä”a?0Ã{Ä§Ã¡}Ã’oÅ‹ÃˆJK",
"netherPortal4": "0g0g+-aÃ–Ã€rÅ–]bÄ–Us(ÃµÄ´ÅžÃŠ$Ãž;aÄ’{bÅ–;aÅ’K;ÄšÃ€bÅ–QbÃšÃ€s(Ã‘;ÄšIÄ•ÄžÃ†sÃžK$ÄšÄ…e-Ã•{Åš-aÄ’{bÄ–Sb$)9ÅŽÃ¤Ã©Ã¢Ã¨Ã¶Ã¢Ä=Ã¥Ã¡Ãš)IÄ¥ÄžÃÃ‹)Ã†$ÃžÄ€Å¥-Ã•;ÅšÃ¹Ä´Åž-aESbÃšÃ†s()aEÃ¼Å•-Ã«Ã¶Ã¢Ã¡Ã‹)QbÄ–Ã¼Å”ÅžÃ¨Ã©Ã¢-aFÃ™{ÅšXÄ…ÄžSaÅ“Ã¤ÃšÃ¢Ã¼Å„ÅžIÄ¥ÅžÃ«Ä…Ã¢-9Å-9ÄÃ™ÃŠÅš0gÃ®gÃÃ±oÃ­^$Ã d-Å›hP)Ä»VÃ€Ä¯Ã†ÄÄ¾ÃŽÃ£Ãˆ%ÃÃ‰ÃžÄ¾Ä‡wÃ”KkÅ‹Ã±sÄ­Ã¸sKÃ…SÄštÃÄ¸Ã´M0Äº&i3cÃŸÄº8Ã‘Ä³*Ä»Ä¯$Ä¿Ã´5Ä¿Ä¯RA4)95NÃ„Ã´UÃ¥Ã¹Ä„ÃžPUa5ÃšÄ’Ã—&Ä›nÃ¨zÃ™xNÄ²Ã¶Ã´?Ã¡Ä Ä¿Ã€Ã4Ãž*Ã´Ä zQÃ–ÃÃ­dÃ€7Ä¦Ä©#IÄ³o$1Ä´ÄÃŸÄ¨lÄ“Ä¨tÄ£Å„IÄ£Ã—9Ã´aE:ÃžÄ±Å—Ä©Ã¶7b0!Ã¹sÃ®qÃ•B{T5S&?%Ã•ÃµÄ©zRÄcI_wÄ™Ã®Ã¤ÄƒÃ¹Ã>Ä„ql1",
"netherPortal5": "0g0g,-aÃ–]bÄ–Sb$K$ÄšÃ¼Å„ÅžÃ™{Åš;aÄ’Ã€rÅ–;aÅ’Ã†s(Ã€s(Us(ÃÃ‹)XÄ…ÄžÃ€bÅ–Ã†sÃžÃµÄ´Åž-aEÃ•{Åš-9ÄÃ¨Ã¶Ã¢Ã¡Ãš)Ã¡Ã‹)Ã¼Å”ÅžQbÃšÃ‘;Äš{bÅ–-aÅ’-aÄ’Ä=Ã¥Ã†$ÃžÃŠ$Ãž-aFSaÅ“;aÅ“Ã‘;ÅšIÄ¥ÄžÃ«Ã¶ÄžÃ¤Ã©Ã¢-9ÅÃ•;ÅšÃ«Ä…ÄžIÄ•ÄžÃ«Ã¶Ã¢;b$Ä…e-SbÃš{bÄ–Ã¤ÃšÃ¢QbÄ–)9ÅŽÃ«Ä…Ã¢K;ÄšÃµÄ¥Åž)aE0gÃ®gÃÃ±wÃ­^8iÄ³)ÅŠÄ·kX^4kÃ­{ÄlÃ†VÄ¼FÃ­Ã¶Ã’Ä‰5ÃšÄ©Ã‹d5ÃŒ.ÄÄ‡Ã•1Ä¬sm3FÅq;ÃŸÃ‰Ã0b5ÄŽx46Ä¶cÅ‰sÃ¥Å—Ä€5ÄŠÄ¯Ã¦gÄ¾Ã“CÅŠÃªP^ÃŽÄ‘JkÃž{yÃŸÄÄŒÄ¨!Ã6ÃµdXÃµxÄ­qEÄ«Ã¯;hÄ¬6Ã£Ä“cÃ«xÃÄ§Å”lÄšeÃ‘D7cÄƒÃ«pÃ³ÄÄ¦Ã£Ä‡ÃÃÄ®Ã©EÄ¨5Ã[Ã•Ã¥Ã˜4Ã„_Ã¤Ä|JÄŸÄ‡Ã©Å“L1Ã«Å€BÃ´Å‹Ä”s_$Å—ÃÄ£wÃ Ä€Ã«LK0Ã¡FÃ«x8Ã­3Ä»Ã€Ã±Ã—Å lbÃÄ†",
"netherPortal6": "0g0g*-aÄ’QbÃš-aÃ–Us(XÄ…ÄžÃÃ‹)]bÄ–-aEÃ€rÅ–ÃŠ$ÃžÃ¨Ã¶Ã¢Ã¤Ã©Ã¢IÄ¥ÄžÃ•{ÅšSb$Ã€s(Ã‘;ÄšSaÅ“)9ÅŽ{bÅ–Ä€Å¥-XÄ•ÄžK$ÄšÃ†sÃžÃ€bÅ–IÄ•Äž;b$;aÅ’Ä•Ã›Ã¥Ã¹Ä´ÅžÃ†$ÃžÃ†s(-aF;aÄ’K;ÄšÃ«Ä…Ã¢SbÃšÄ‰u-Ã¡Ãš)Ã‘;Åš{bÄ–Ã«Ä…ÄžÃ™{ÅšÃµÄ´ÅžÃ•;Åš-9ÅÃ¡Ã‹)QbÄ–Ã¤ÃšÃ¢Ã«Ã¶Äž;aÅ“-aÅ’Ã¼Å”Åž0gÃ®gÃ€Ã°s0Ä¨oÃ­^$i{)Å‡Ã¸4XhP*bSÄ¼Ã„ÃŠÃ“lÃ†ÅPÃ–Ä›ÃŠTÄºÃŒSN3oDÅ…KÃ¬Ã¹Ã‡ÃžÃ»cÃŽÃ«63Ã®-KÃoÃ8cjÄ‰CxÃ°cÃ”Å‚ÃªlÅŠ=@Ä¬ÃˆÃ‡Ã»cÃ’Ã¶IÅ ÄX!F!Ä’Ä±4wÅÄ˜j|2Ä¸IyÄŒg)hÄ–Ã—Ä»Ä¬Ã‡Ä L4ÅŠÅŒÄÄ™Ä­Ä™jÃ»BÅJ8ÃŽ5ow?Ä‚ÄˆÅ…Ã¤Xe75Ä†Ã¥Å Ã´55Ã¿Ä‘ÃÃžÄ‚ÃÃ—w*Ã¬ÄœnÄŠÃŠÃŽÃ½ÄOÅ…{OJÃ›0Ã—Ä“AÃ·-xÄ‡ÄˆÃ™Ä¨K88Ä¹ÄªÃ°Ã™ÃÄ°QzÄ·",
"netherPortal7": "0g0g,-aÃ–;aÅ’-aÄ’Ã€s(XÄ…ÄžÃÃ‹)QbÃš;b$Us(K$ÄšÃ™{ÅšÃ¤Ã©Ã¢Ã€rÅ–Ã«Ã¶Ã¢Ã‘;ÄšSb$Ã†s({bÅ–Ã†sÃž;aÄ’Ä=Ã¥XÄ•ÄžÃ•;ÅšÃ«Ã¶ÄžÃ†$ÃžÃ¼Å„ÅžÃŠ$ÃžÄ‘ÃŒÃ¥Ã¼Å•-Ã•{Åš]bÄ–-aEÃ€bÅ–Ã¤ÃšÃ¢{bÄ–SbÃš-aÅ’SaÅ“Ä…e-IÄ•ÄžÃ‘;ÅšÄ€Å¥-Ã¨Ã©Ã¢QbÄ–Ã¡Ãš);aÅ“-9Å-aFÃ¨Ã¶Ã¢Ã™ÃŠÅš-9ÄK;Äš)9ÅŽ)aEÃ¡Ã‹)0gÃ®gÃ€60ÃŸ1oÃº^$jd-Å—Ã¹?yÃƒ0Ä¬lBÃ’ÄµP25MÃ°Ãˆ;ÃÄƒÃ‡Ä®Ãˆ-Ä®I5ÅŸw?Ä‹5XÄ€Ä€QÅ˜Ä‹N]Ä³Ã·AÄ†Q3Äªq4@-ÅÃ²Ã³Ã€Ä­c0Ä²wÃ•Ä½Ã£Ã•Ã€xiPÃ¡.Ä°44ÄiÃ³?QDÄ’/ÄšÄ¬02gÃ¥ÃmÄ‘nÄ”ÄÅ›^KnÄ­4mlkÅ¢Ã°-Ã”ÃµÃ¬ÅŠÅ–Ã¨ÃŽÃ„Ik^Ä¨ÃeTkÃ°rmÄ€Ä‰D_;ÅŠaEÃ­Ä˜XÃ‚}xÅ‹uÄ¯Ã“JÄ´i4gÄ«ÃµpÅŠÅ–Ã¿Q}.Å‡hÃ¼3w?Å‡Ã˜(tÃ†Ã„Ä§~;Ã•Ãˆ;Å›Ã£",
"netherPortal8": "0g0gO-aÄ’-aFÃ€rÅ–IÄ¥ÅžÃÃ‹);aÅ’-9ÅQbÃšUs(SaÅ“]bÄ–K$ÄšÃ•{Åš{bÅ–Ã¡Ãš)Ã‘;Äš;aÄ’Ã†$ÃžÄ…e-Ã¤Ã©Ã¢Ã†sÃžQbÄ–Ã™{ÅšÃµÄ¥ÅžÃ¨Ã©Ã¢K;Äš)aEÃ†s(Sb$Ã«Ä…ÄžÃ€bÅ–Ã€s(SbÃšÃ‘;ÅšÄ•Ã›Ä¢Ã¹Ä´ÅžIÄ¥ÄžÃ¤ÃšÃ¢Ã•;ÅšÄ€Å¥-ÃŠ$Ãž-aÃ–Ã¨Ã¶Ã¢-aEXÄ…Äž)9ÅŽÃ«Ä…Ã¢Ã«Ã¶Ã¢IÄ•ÄžXÄ•Äž{bÄ–00RcS5oÃŸ9EÄ™4(Ãƒ};Ã¡2tj50AÃ»$Åšf$Ã­4FQÄ¯UÃ¯Ã¿ÃŽAÃ‡gyÃ³1ÄŽÄ©ÃžjÄ²Ã¡ÅžÃµEÃ‚Ã²)ÃÄ¯kGÄ´s1Ä©sÄŠÄˆKÄ®Ä‰82Ã¯)lmÃª1Ä½izÃ¸Ã€AÃ(ÄÄ¶16Å‹Ã¾Ã–Ä«*ÄªÃƒÃ€ÄŒÅÄŒnÄ¶tÅžÄÄÃ¬Ä½mÄšh!6Ä„Ã«0Ä”-ÃÃ¶gÃ ÃUÄ%ÄŒÃ ÅÃ™ÃƒÃ›-ÄoQÄÄ„kÄ±xhjBuÃ±Ä³hÄšÅ–gÅ›Ã%Ä«^ÄŒÃŸÃ­<[Ä—Ä«Ã²ÄÃÃ ÃšCÄ¤Ä;Ã¦Ä®k27ExÃŠÃ€ÃˆÅ‚ÃµÅˆÃŠkÃ Ä¯sGÄº",
"netherPortal9": "0g0gM-aÃ–;aÄ’)9ÅŽ{bÅ–IÄ•ÄžK$Äš-aÄ’)aESbÃš-aEÃ™{ÅšÃÃ‹)Us(Ã‘;ÄšÃ‘;ÅšÃ€rÅ–SaÅ“Ã†sÃžÃŠ$ÃžÃ•{Åš;aÅ’ÃµÄ´ÅžÃ¤ÃšÃ¢Ã€s(Ã¡Ãš)QbÃšÃ«Ã¶Ã¢Ã†$ÃžÄ€Å¥-Ã¹Ä´ÅžÃ€bÅ–Sb$Ã•;ÅšÃµÄ¥ÅžÃ†s(Ã¤Ã©Ã¢]bÄ–Ã¨Ã©Ã¢Ä=Ã¥XÄ…Äž{bÄ–K;ÄšÃ«Ã¶Äž;b$-9ÅÃ¨Ã¶Ã¢Ã«Ä…Äž-aFIÄ¥Äž0gÃ®gÃÃ«sÃ«Ä°wÄŠÃ´k3d-Å›hdAÄ»oÄ¬Ã„ÃŠÄ¹Ä¾KÄºÄ²Ã’Ã£Ã¸Ã‹ÄšÄ„%Äº^g*uÃ€Ã»Å†Ã‘Ä‹KÃ¯EÄ‹Ã‘Ã”ÄªÃ‹ÅžÃ®oÃ¬{Ã¹9AÃÃ½Å‰Ã¼Ä‹zÃŠ7Å€Ã¨ÃÅ‰ÃºÃ¹ÅŠ!Ã^&Pn+FÅ‡omÅƒKÅˆblÃ»ÅMÃ¾doÃ¼Ä€Ã¨Ä°5Ã¢DÅ‚Ã€Ä‚FdÅœpÃ‘3!Ä‘RÃ‘!>Å‰Ã“Äž[Ä™Ã¼?^SÄ¿$Ã„Å”Ã‹Ã¹Å€Ã©!dÄ ÄªÃ†Ãª@^Ã½CÄ±Ã«ÃV?Ã»vB9A{UÃ”ÃŽÄžyÃ€mÃœÃ¹Ã“~]*AxQÃ‡yP3P0Ã¸Ä§Äœ1BJÃ¸ÄŠ>B",
"netherPortal10": "0g0g*;aÅ’SaÅ“-9Å{bÄ–Ã¡Ãš)K$Äš-aÄ’)9ÅŽSb$QbÃšÃ¨Ã¶Ã¢ÃµÄ´ÅžUs(-aÃ–]bÄ–Ã†$Ãž{bÅ–Ã€rÅ–Ã‘;ÄšÃ¼Å•-ÃÃ‹)ÃŠ$ÃžÃ†s(Ã¤Ã©Ã¢Ã•;ÅšÃ™{ÅšÃµÄ¥ÅžÃ«Ä…ÄžÃ«Ã¶Äž-aF;aÄ’Ã•{ÅšSbÃšÃ†sÃžÃ«Ã¶Ã¢-aE)aEÃ¤ÃšÃ¢Ã¼Å”ÅžK;ÄšÃ€s(QbÄ–IÄ•ÄžÄ…e-Ã«Ä…Ã¢Ã™ÃŠÅš-9Ä;b$XÄ•ÄžÃ€bÅ–Ã‘;ÅšÄ€Å¥-Ã¨Ã©Ã¢0gÃ®gÃ€6sÃ­@cÄŠÄ«(ÄºÃµ;Å™Ã€QQIpAÄ»SÅœÃ„Ã‹Ã®Ã¯AÄ­c?Ã„ÃˆÃ‹Ä™ÃŠÃ–1Ã·Ã¢ÄºÄ†BÅœlÃšÃºÃ…-Ee(1ÃÃ¡Ã½iQÃ‘cÃ¤1ÃŽÃ²xÃ…/Ne2>hBÃnÃ¾Ã–Ä«Ã‚Ã³ÃŽ(Ä±Ä03Å’gÃ…ikÄ©Ã™-ÅŒÄ¹)Ã’ÄƒÃ¤JfÄyÃŽ0Ã¦cAÅ‡gwAÃšÃ¨ÄƒÃ²Ã¨MÃ„Ä¤Ã®Ä‹ÃµÃ»hÃ©3Ã¼Ã6ÃÄˆÃÃ«1jÃ¼$ÃŠU0ÅNÄ”Ä©?Ã“mOÄ†ÅšÃ¬oÃ¹8ÃŽÃ¼Ã¡iÃ­JÃ¡Ã—0BÅ‰}MKwAjÄ¯4Å¡eÃ€0Ã·hÃ¹6ÃµÅŒP.8Ã—",
"netherPortal11": "0g0g*;aÅ’-9ÅQbÃšÃ¡Ãš)K$Äš-aÄ’-aF)9ÅŽ]bÄ–-aÃ–XÄ…ÄžÃ«Ä…Äž{bÅ–Ã€rÅ–Ã‘;ÄšÃ™{ÅšÃŠ$ÃžÃµÄ´ÅžÃ†s(Us(Ã¡Ã‹)ÃÃ‹)Ã†$ÃžÃ•;Åš{bÄ–Ã¤ÃšÃ¢Ã¨Ã¶Ã¢Ã¤Ã©Ã¢Ã†sÃžIÄ¥Äž;aÄ’SbÃšÃ«Ã¶Ã¢-aESb$Ã€s(Ã‘;ÅšXÄ•ÄžÃ«Ã¶ÄžÃ€bÅ–-aÅ’Ä•ÃŒÃ¥;b$;aÅ“Ã•{Åš)9ÄŽ)aESaÅ“IÄ•ÄžK;ÄšÃ¹Å„ÅžÃ¨Ã©Ã¢QbÄ–00RcT@sy98ÄŠÄª8Ã»c)Å‡Ãµ)Å˜094~xAÄ³ÃÃƒÃ„0Ä¬Ä¿Ã‡Ã½ÃˆÃšÃ¿tÃ¡Ä®IAÃƒSÃ©Ä mF3Ä±aoÄ‹ÃÄ¬Ä³49fÃ‡Å‹dlÅšÅƒÃ¼ÅŒÃ“(Ã¤ÄklÃ¶Ã²Ä«3Ä‚ÃfcÃ«jPCÃ¾ÄˆzÄ‘h*}<Nl8Ã²Ã¹2ÄŒa0!Ä«Ã£Ä§dÃ¤Ã†Ä³wEÄ€yÄºlU#Ã­;Ã¬ilÅ‰xX0IhÃ>ÄšMBÃ†Ã‚Lky$Ä§R3Ä¦Ä“Å“Q]Ä„Ã†ÃµÃŸSÃ¿Ä¯mxRÄ´Ã¼Ä‚=;Ä¹kÃ»Ã—w2LÄ¹-Ãµaz0lÄ«Ä´!Å˜RhÃ€xÄ zR)T(",
"netherPortal12": "0g0g+]bÄ–;aÄ’)9ÅŽSb$Ã‘;ÄšÃ™{Åš;aÅ’-aÃ–{bÅ–QbÃš-aEÃ¹Å„ÅžÃ«Ã¶Ã¢SaÅ“-aFSbÃšUs(Ã€rÅ–Ã€bÅ–Ã¡Ãš)Ã™ÃŠÅšÃŠ$ÃžÃ¹Ä´ÅžÃ•;ÅšÃ†sÃžÃ«Ã¶ÄžXÄ•ÄžÃ†$ÃžÃ¨Ã©Ã¢Ã•{ÅšÃÃ‹)K;ÄšIÄ•ÄžÃµÄ´ÅžÃ¨Ã¶Ã¢ÃµÄ¥ÅžK$ÄšÃ¼Å„ÅžÃ†s(Ã¤ÃšÃ¢XÄ…ÄžQbÄ–Ä€Å¥-{bÄ–-aÅ’;b$Ä…u-Ä=Ã¥;aÅ“Ã¼Å•-Ã¤Ã©Ã¢Ã€s(-aÄ’)9ÄŽ0gÃ®gÃÃ±8Ã­^wÄ›5)Å‰~SShP*61VÃ¿pÃ«8Ã’ÄŒSpm0ÃšÄ®ÃŒlÅwX1Ä°sN1eEÄ¾Ã·[ÄˆQÄˆÄ¼UXÄ§EÃŽÃŒÃ™*]8Ã‘Ä¾XÃ…Ã’QyÃ‘sÃ¡Ã¸dÅ˜ÃŒÃ¥ÄÄÄŠÃºJ0IroÃº!VÄŸÃ‘Ã£^Å…o9Ä¸4Å˜ÃŽÄ˜Å˜Ä·%ÅˆÃ«eÄ±Ä´ÄœÃ«oÄ”Å‰Ã†UÃ­Ã²Ã¤Ã±Ã†sÃ‘7-(9JScÃ¹7Ä–KÄ‰Ã®4O?Ã¾RÃ‘AjÃƒÄ¥cgÃÄŸÃžÃ¹hÃ«ÄžÄ˜@Ä‡$Å„h5ÄŽ#@60J62S91$Å›pÃžhÃ«Ãš8hÅ—Ä©Ä»06TVÃŽ",
"netherPortal13": "0g0g-]bÄ–;aÄ’-aÃ–SaÅ“Ã€rÅ–Ã‘;Äš-aESbÃš)9ÅŽ{bÄ–Ä€Å¥-XÄ•ÄžÃ•{Åš-aÄ’-9ÅQbÃšÃ€bÅ–Us(Ã¤Ã©Ã¢Sb$Ã†s(ÃŠ$ÃžK;ÄšÃ¨Ã¶Ã¢IÄ¥ÄžK$ÄšÃ†sÃž{bÅ–Ã«Ä…ÄžÄ…e-)aEÃ¨Ã©Ã¢Ã¼Å•-Ã¹Å„ÅžÃ†$ÃžÃ«Ã¶Ã¢Ã«Ã¶Äž;aÅ’-aFÃ¤ÃšÃ¢ÃµÄ´ÅžÃÃ‹)Ã¹Ä´Åž-9ÄÃ•;ÅšÃ€s(Ã™{ÅšÃ¡Ãš)Ã¡Ã‹)Ã¼Å„Åž;b$;aÅ“QbÄ–XÄ…Äž-aÅ’Ã¼Å”Åž0gÃ®gÃ€Ä­8TÄ¯AÄŠÄ³)ÅŠÄ¶;Ä«hhxÃƒÃUÃ¾<kÄ°PÃ Äº41jVÃ°?lÄŽÅƒÃ¡Å™7Ã¤Å™R|ÅŸlÃ°EÅ‹Ã™Å{MkÃ«Ä.Ä¹gÅœÃ‰Ã¤Å Ä³ÄŠÄ€Å‘2ÄœÅ“)Å‚Ã’=Å‹Ã¯Ä¦Ã¾Ä€Ã¢0Ã«|rÄ«13tg5UÄ0q)aÃšÃ¼bÄ™Ä±Ã€V&Å—[7MB5kÃ;whÃ—Ä¸Ã»ÄŽÅ€Å”Ä€i~40Ä¶Ä¢ÃŸÃ›QÅštÃ€Ã–[eÃ‡Ã–Ã£zÅ‰0Ä·Ã‚ÄÃ‡Ã‰1:Ã³IÅ€Ã¡c3Ã’ÄŒÄ£ÃÃ’Ä…U:Ã˜SÃÄšR2Åˆ0<l|aÅ‹Ã¾Åƒ9~?ÃºÄ¯xÄ˜7Ã†Ä±Ã‹",
"netherPortal14": "0g0g,Ã€rÅ–SaÅ“;aÅ’Sb$Us(Ã†s(QbÃš-9Å-aE)9ÅŽÄ€Å¥-Ã«Ã¶ÄžÃŠ$Ãž;aÄ’-aÄ’]bÄ–ÃÃ‹)K$Äš{bÅ–Ã«Ã¶Ã¢Ã™{ÅšÃ•{ÅšÃ¨Ã¶Ã¢Ã¼Å”Åž;b$-aÃ–Ã€s(Ã†$ÃžXÄ…Äž;aÅ“-aFXÄ•ÄžÄ‰&-Ã¹Å„ÅžIÄ•ÄžÃµÄ¥Åž-9ÄÃ‘;ÄšÃ¤Ã©Ã¢Ä=Ã¥)aESbÃšÃ¤ÃšÃ¢IÄ¥ÄžK;ÄšÄ‘ÃŒÃ¥Ã¡Ãš)-aÅ’Ã†sÃž{bÄ–Ä…u-ÃµÄ´ÅžÄ‰u-Ã•;ÅšÃ¼Å•-0gÃ®gÃÃ±wSÄ°gÄŠÄ³)ÅŠÄ´p4SP)~lll)Ã>Ã‡ÃžÄ€Ã’Ä‹Ä¿SÄœÃ‚?Ä›ÄºÃžyÃ‹Ã¤ÃŽÃ±dÅŸcÃ¨[xpÅ‡U?Ä Ä‚AÃ•Ä‹kÅœ@Ã¹ÅœÄ‡ÃŒÃ‡Ä=Ã³UsCÃ­eÄ’Ã¹T4Ã´Ä”Å™Ã–c?i1Ä£x1wfT1Äƒ-Å ~ÄFÃš8y5ÃˆÅŽRcÃ“Ä—9s(hÃ»Ä§jj@Ã½lÄ‚sÅ‹@-Å¢Ä¨RÃŽÃ€]rÄŠÃ›Ã«Ã°8wÃ¹Ã‹ÄžM<ÅŠÃ½Ä¯ÄªÃ¸;FÃ Ã™Ã Ã‚cÅ™eÃ€Ä”4Ä©Ã‹rxÃ¼ÃˆÃ–Ä™Ä9ÃÃ‚;Ä«P.QÅ‚XÅ—Ã°<jÅ…wÃŽÃ®Ä½Å‹+",
"netherPortal15": "0g0gOÃ€s(;aÅ’-aÄ’SaÅ“QbÃšÃ€rÅ–-aE-aÃ–{bÅ–Ã«Ã¶Ã¢Ã¹Å„ÅžÃ†$Ãž-9Å]bÄ–;aÄ’Ã™{ÅšUs(Ã¡Ãš){bÄ–Ã•{ÅšÃ‘;ÄšK$ÄšK;ÄšÃ¼Å•-Sb$ÃÃ‹)ÃµÄ´ÅžÃ†sÃžIÄ•ÄžÃ¨Ã©Ã¢)9ÅŽÃµÄ¥ÅžXÄ•Äž)aEÃŠ$ÃžÃ€bÅ–Ã¨Ã¶Ã¢XÄ…ÄžÃ†s(Ã¡Ã‹)Ã¼Å”ÅžÄ€Å¥-IÄ¥ÄžÃ¤Ã©Ã¢Ã«Ã¶ÄžÄ‰&Ã¥SbÃš-aFÃ‘;ÅšÃ«Ä…Ã¢Ã•;Åš0gÃ®gÃ6c0[wJÃ´(j}gÅšÄ´TiÄ¹|?Ã„8TÄ«?ÃŸ2sÃ°1Ã’ÄŽÄ¬U>ÃŠÃ¡Ã±Ã¬8Äº@hÄ¾Ä¬Ã«7Ã…2jÃ‹&CÄ‹9Ã²BÃ›Ã–Ä«Ã¥Ã³wÄ^Ä„SÃ£j8SxiÄ£j<Ä›Ã™Ãž7X43Ä«Ã›zÄ°KÄ¸oÃ“3?sUdk4ÃšcÃžJÃ¢Ã¹Ã®4S25>Ä¼kÃ Ã‚Ä0|T]bsBdÄ Ã¬Ä¨?Ä¯Å‰)kÃ…RÅ—]KxÄ»Ã‹ÃƒÃ¶gxÄ»Ä’xÄ¿gÃ¢^Ã™xÃ«1Ä RQÄ]xÃˆVÄ¤lCÄ¨R75)Ä§lÃÅˆt;Ã„ÃªÃ˜XKÃ„x(STÃ‚ÃŠÄŒ",
"netherPortal16": "0g0g+Ã†$Ãž{bÄ–QbÃšSb$Us(QbÄ–-aÃ–;aÅ“ÃŠ$Ãž;aÅ’-aÄ’XÄ•ÄžÃ¡Ãš))9ÅŽ)aEÃ¤ÃšÃ¢Ã•{Åš]bÄ–ÃÃ‹){bÅ–Ã‘;ÄšK$ÄšÃ†sÃž-aFSbÃšÃ¹Å„ÅžÃ€rÅ–Ä=Ã¥SaÅ“IÄ•ÄžÃ¨Ã¶Ã¢-aEÃµÄ´ÅžÃ¼Å„ÅžÃ€bÅ–XÄ…ÄžÄ€Å¥-;aÄ’Ã«Ä…ÄžÃ«Ã¶Ã¢Ã«Ã¶ÄžÃ¨Ã©Ã¢Ã€s(Ã•;ÅšÃ™{ÅšÃ¡Ã‹)K;ÄšÃ¼Å•-Ã†s(Ã‘;ÅšÃ¹Ä´ÅžÄ‰&Ã¥Ã¤Ã©Ã¢Ä…e-0gÃ®cT@sÃ­^0Ä›1)(Ã·8Å›h?AÄºÃVXE*Ä¿%Ã¼Ä­pÄŠ[PÄ˜shkÅ„Ã¥jPEQÅ†KÄ¯j<-xÃ²Å›ÃT9yÃ¼zÅŠwÃ±Ãº.pÄÄˆ6Ã‘Ã—Ã„uEU@ÃŸÄ€]ÃÄŒÃ&ÄÄªBÃh0Ä«Ä†BgÄ¿(ÄœÅ‰*ÄŽÃ±}ÄxÃÃÃ»^Ä©Ã³d)Ä±CÄºiÃ—Ã€Ä€@Å‡Ãºx_Ä§Ã¨Ã½Ã@ÄÄ°Ä®y4eUÄ‘Ã–ÃžÃºQÄŠJÄ´RÃ­Ã–Å Ã™Ä¸ÃÄ€BÃ§zwÄ‹ÃºÄ§Ã¯ÅŒÃ‚5Ãº?]Ä¯AÃ¢Ã˜10|Ã½bq5!Ã¿AÄ­Ã˜Ä»Ã«RdgÃ¿!ÄŠP^Åœb",
"netherPortal17": "0g0g/Ã™{Åš{bÄ–]bÄ–Sb$-aÅ’-aÄ’QbÃšÃŠ$Ãž-aÃ–Ã€rÅ–ÃÃ‹)Ã€s(-9Ä-aE;aÅ’Ã¤ÃšÃ¢Ã¨Ã¶Ã¢Ã¤Ã©Ã¢{bÅ–Ã†s(Ã¨Ã©Ã¢K$ÄšÃ€bÅ–IÄ¥ÄžÃ¡Ãš)Ä&Ã¥Ã†sÃžSbÃšÃ«Ä…Äž)9ÅŽ)aEÃµÄ´ÅžÃ•{ÅšÃ«Ã¶ÄžÃ«Ã¶Ã¢Ã¹Å„ÅžIÄ•ÄžÃ¼Å„ÅžÃ¹Ä´ÅžXÄ…Äž;aÄ’Ã†$ÃžÃµÄ¥Åž-9ÅUs(Ã™ÃŠÅšÄ‰u-Ã‘;ÅšÃ¼Å•-Ã•;ÅšÃ‘;ÄšK;ÄšIÄ¥Åž-aFÃ¡Ã‹);b$QbÄ–Ä€Å¥-0gÃ®gw?oÃŸ5AÄŠÃ´(MÃ¶-Å›2BkÃ»ÃVÃ­kÃe?ÃÃ¶kx}ÃŽJ?Ã•+Ä±ÃžÃ”>.)Ä†dÃ±Ä©Ã¬EÃ]ÃÄ‹0Å j-Ã“Bu9Ã°kADÃŽÄÅˆCÃ¬Ã¹wwÃ‹d5Ä¼ÄŒKÄ‰Ä‘!Äª.yÄ©uiÄˆ-zÃ·!KÃ°Ã¡K@ÄšÄ½&cÃ³Ä­Ã«Ä‹Ã¶pÄŠÄ¯.kLs(Ã¯8ÃÃ­4c9Ã¤ÅM9z]!@Ä‚cÃŠÄÄŒÃ‚9AÃÃ Ä¹Ä®Ã°_ÃƒÄˆÅ€Ä}ÄˆÃµÃ¸Ä˜ÅˆÃ™2Ä¨?!/GÅŠoÄ¼-Å“U0ÄŠÅ„-ÄŒÃ™Ä™mI.}KÄƒl>-lIyÄ±8?Ã¨Äˆ",
"netherPortal18": "0g0g/ÃÃ‹){bÅ–]bÄ–QbÃš-aÃ–Ã†$Ãž;aÄ’Ã•{Åš;aÅ’Ã€s(Ã¡Ãš)SbÃš-9Å)9ÅŽÃ¤Ã©Ã¢ÃŠ$ÃžK$ÄšSb$-aF-aE-aÄ’Ä‰u-Ã†sÃžÃ™{ÅšÃ•;Åš{bÄ–Ã«Ä…ÄžÃ‘;ÅšÃ€rÅ–Ã¹Å„ÅžÃ¨Ã¶Ã¢XÄ…ÄžSaÅ“Ã«Ã¶ÄžIÄ•ÄžÃ¨Ã©Ã¢ÃµÄ´ÅžÄ€Å¥-Ã€bÅ–Ã«Ã¶Ã¢Us(IÄ¥Åž;b$XÄ•Äž)aEÃ‘;Äš-aÅ’QbÄ–Ã¼Å”ÅžK;ÄšÃ†s(Ã™ÃŠÅšIÄ¥ÄžÃµÄ¥ÅžÃ¹Ä´ÅžÄ=Ã¥Ã¼Å„Åž;aÅ“0gÃ®gh@cÃžIAÄŠÃ´(wÃ¶wÅŠÃ´8Äˆ~.0Ã­hkÃºEÄˆÃ¶{lkFÃ‚@Ã†Ã­Ä¾KAÄªd6U?Ã£Ã¬ÃšÄªÃ³5gÅ„TÅŽÄ½Ã«-ÃÃ†8Ä©hÄ°BÃŒÃ–Ä±Ä‰gÃ·gwÄ³dÅPÄˆÃ³Ã«Ej!|Ã¹Äˆ=A5gM8Ã‹ÄˆÅ‡)wÃºkÃ¢Å’Ã’#3ÄÄ£X99Ä”Ã«a[=Å—Ã¼xa3Ä¥GÄ½Ã‚1Ä®ÄˆÃ»432RÃ€ÃµÃ‰Ã‡TsBMfÄ‡AÄ­Ã?E0Ã½kÄ Q0ÄˆÃ¬EÃ‹4IÄ´ÄbeÅ„mÃ«:Ã3ÃŠXwÄÃ¬Ã‰ÃUwÄ•Ä±Å‰Ä»pgDkÅŒÃ½83Ã’Ä®",
"netherPortal19": "0g0g,Ã¡Ãš)Ã†sÃžÃ†s(]bÄ–-aÄ’QbÄ–Us(;aÅ’K$ÄšSaÅ“Sb$ÃÃ‹)Ã•{Åš-aEÃ€s(Ã™{ÅšÃ¡Ã‹){bÄ–Ã‘;ÅšÃ†$ÃžÃ¨Ã¶Ã¢Ã‘;ÄšSbÃš)aEÃŠ$Ãž{bÅ–Ã¤Ã©Ã¢Ã¼Å”ÅžK;ÄšÃ€bÅ–-aÃ–IÄ•ÄžXÄ…ÄžÃ¤ÃšÃ¢Ã«Ã¶Ã¢Ã€rÅ–Ã«Ã¶ÄžÃ¨Ã©Ã¢-9ÄQbÃšÃµÄ´ÅžÄ€Å¥-;aÄ’Ã¼Å„Åž)9ÅŽÃ«Ä…Äž-aFXÄ•ÄžÃ•;ÅšÃ™ÃŠÅš;b$-9ÅÃµÄ¥ÅžÄ‰&Ã¥Ä‰u-0gÃ®gÃÃ±cÃ­^oÄ›a)Å‡Ä´sÅ›3?yÃ»ÃVÃ²AÃ¢Ä±KÄž|)M7Ã–Ä›X-Ä¹Ã½ÃÃŽaE7ÃŒdÄÄª{-fcOÄˆÃ„oÃ°@(qÃŸP>tÃ¿ÅŒ=-_{ÄŠÄˆgÃ“Ã“Ä†Ã³@-PÄ¼$nÄ’Ã¦.Ä®Ã„ÄšpÄÄX&FÄ®Ä˜NÃ³<Å™%Ã·Ä‰DpÃ‚Ã“Ä„ÄžÃ›uÅ¡SUk|D0>EÄ­Ä‹iÃ¨ÃšUÃŽ4yÄ™Ã®hÅŒVÃ‘Ä‰Ä¯Ã‘Ä¾IÃ•j[{RÃ­|M&Ã¥ÅŠÄ€/Ã¦Ä€Ã•iÃŸy24siÄ­@ÃENJOgÄ´6qÅ™7EÅ¤_Ã¨ÅÃºÃŒÃžXu*Ä®3ÃÄ¼",
"netherPortal20": "0g0g*IÄ•ÄžÃ†s(Ã‘;Åš{bÅ–-aESb$Ã•{ÅšQbÃšÃŠ$Ãž;aÄ’Ã†$ÃžÃ†sÃžK$Äš-aFÃ€rÅ–)9ÅŽÃ¨Ã©Ã¢]bÄ–Ã‘;Äš;b$Ã•;ÅšÃ¼Å„Åž;aÅ’-9Ä-9Å{bÄ–Ã¤ÃšÃ¢Ã¨Ã¶Ã¢-aÃ–Ã¡Ãš)Ã€s(ÃÃ‹)Ã€bÅ–Ã¤Ã©Ã¢Ã«Ã¶Ã¢Us(K;ÄšÃ«Ä…ÄžÃ«Ã¶ÄžXÄ…ÄžÃµÄ¥ÅžÃ¹Ä´ÅžSbÃšQbÄ–Ã™{Åš-aÄ’SaÅ“Ã¼Å•-)aEÄ€Å¥-ÃµÄ´ÅžÃ¹Å„ÅžXÄ•Äž0gÃ®gÃÃ±wÃ[EÄ›7)jÃ¸kÃ‘h5AÄ»UÄ™Ã„kVÄ®(Ä«Ã†Ã‡Ã»?Ã–Ä›Ä„QÄ»Ã‚PlÃ¯?Ä¾Ã¾.TÃºc,Ä³Ã¥Åxw8IÃµÄ‘g6Ã„ÃºtÅÃ«4GÅ†$MÅŽÃ‡AQ@Ã³}dÃŽ^Ãª,9hÅ‘Ã¯pÃƒ#)Ã Ä°ÄšÃÄ„<lÄ•^Ã–vÃ¶ÃÃ›Ã¤X~dÅ›ÃŠÄ‘bÅ†Ã¹ÄŒÃlB3Ã†Ã±ÄµsGÅ–Ã©$saÃ¹[+Ä¹z/ÅŒÃµ5Ã’Ã³oÃ¬m4ÄƒÃ®-hsÄÄ¯Ä¯EÃ¡Ä¯Ä†Ä«Ä¸NÄª%ÄœÄ«Ä‹QGÅ˜HzsÃ‡CÄ±!KÃ„?Å£Å†Ã©Å„ehÃ•Ä½Q;%RJÃ¬",
"netherPortal21": "0g0gOIÄ•ÄžÃ™{ÅšÃ•;Åš{bÄ–-aF;aÅ’K$ÄšÃ€s(ÃŠ$ÃžÃ†s({bÅ–Ã•{ÅšÃ†sÃžQbÃš;aÄ’K;Äš]bÄ–-aÄ’-aÅ’Ã¨Ã¶Ã¢Sb$-aÃ–-9ÅSbÃšÃ†$Ãž)9ÅŽÃ¡Ãš)-9ÄUs(XÄ…ÄžÃ¤Ã©Ã¢Ã¨Ã©Ã¢Ã¤ÃšÃ¢Ã€rÅ–Ã‘;ÅšÃ€bÅ–XÄ•ÄžÃ«Ã¶ÄžÃ¹Å„Åž-aEÃ¼Å•-ÃÃ‹)Ã¹Ä´ÅžÄ‰&Ã¥Ã‘;ÄšÄ…e-Ã¡Ã‹)Ä=Ã¥Ã¼Å„ÅžIÄ¥ÄžÃµÄ´Åž0gÃ®gÃÃ±wÃº^$Ã d-Å›h]kÄ»cÃºT0Ã¯?Ã€VÃ¿BÃ­Äl1dÃ•0Å‚Ã‹Ã’sMÃ®^tÄ‰Ä´EÃÄ»EÄŽÃ²KÃ®jpÄ½IAÄ§Ä†BÅŸxTÃ±Å„EÄ·Ã†ÃŸiÄˆmBmÃ·[^TÃ@wÃžUÃ‡1}Ã¾ÃŽÃ¶?PÄ¸9Ä‹Q?4ÃÃªÃ°oÃ¯Ã Ã…TÄ§Ä«RJX*Å‘Ã´Ã•EVlÄˆÃkÄ¢ÃŠ)Ä½Ä“Ã¤Äœ?Ä˜1Ä¬UÃ†ÃŽÃž51xÃƒÃ€ÃÃ½VwÅŒsÃ°hÃ.iÃ±XÄ$ÄœÄœdÃŸÅ‰Ã½Ä†iÅƒÃžÄ±Ãœ6Å˜Ã¯Ã€Ã™sOmkSpÄ‘Ä™Ä”Ã¹Ä„Å‡Ã¶SÄ?Ä›yg",
"netherPortal22": "0g0g*Ã¨Ã©Ã¢Ã•;Åš]bÄ–)aESb$Ã‘;ÄšK$Äš;aÅ’ÃŠ$Ãž{bÅ–QbÃšÃ•{ÅšÃ€s(;aÄ’Ã¤Ã©Ã¢SbÃšÄ€Å¥-Ã†s(-aE-aÄ’Us(Ã†$Ãž{bÄ–-aFÃ¡Ãš);aÅ“-9ÄÃ€rÅ–XÄ…ÄžQbÄ–;b$Ã†sÃžÃ¤ÃšÃ¢ÃµÄ´ÅžXÄ•ÄžÃ¨Ã¶Ã¢Ã€bÅ–-aÃ–Ã™{Åš)9ÅŽSaÅ“ÃÃ‹)ÃµÄ¥ÅžIÄ•ÄžÄ…e-Ä‘ÃŒÃ¥-aÅ’Ã¼Å„ÅžÄ…u-Ã‘;ÅšÃ«Ã¶Ã¢Ã¹Ä´ÅžÃ«Ä…Äž0g2cTRoÃŽÄ¯wJXsÄ›dEÃƒXAÄ‹ÄµTkÃ»8ÄŒÄ©ÃVÃ®EBÄ±KÄ˜Ã®Ã’ÄŠÄƒEÃ­Ã‰pÄ¬tÃ€Ã¯RÃ¤SÃ‰Ã¨ÃwÃ‚mhwÃ¬Ã¯ÃªEÄ³Ã€ÃŽKERk?Ã‡oFÃ­Ã’NKaÃ£ÃžÄ³Ã™ÃºÅ…|Ã[ÃŽ2E)ÄˆÄºyÃ½nÃ¼wÄ«ÄŽÄhwRÃ¸tRÃ‚CÄžÅŒFÄ²oÄŒÅ‰Ã’uÃ¹9sÃŽÃ­Ã†Ã¹%2ÃºÄ®ÃÃ®jÃ¼Ã£Ä©9R_kÃŸÃ­BÅ˜Ä¾qÃ­Ã‰hTÄ¹}Å‰^?SÃ¯Ä¤Ä˜Ã­Ã™Ã’ncÃ»clÃ‚Å—&Ä¨X#sÃµyl^Ã™ÃŠÄ¿Ä€Å‘Ã¼Ä„ÃŸÄ³ÃÄœÃ³L?R",
"netherPortal23": "0g0gLXÄ…ÄžÃ¤Ã©Ã¢ÃµÄ´ÅžÃ€s(-aE;aÅ’Ã•{ÅšÃ†$ÃžÃ™{ÅšÃ‘;Äš]bÄ–K$Äš;aÄ’Ã¤ÃšÃ¢Ã€rÅ–QbÃšÃŠ$ÃžSbÃšSb$ÃÃ‹)Ã¹Ä´ÅžÃ†s()aE-aÃ–{bÄ–-aFQbÄ–)9ÅŽ{bÅ–Ã¨Ã¶Ã¢Ã†sÃžUs(Ã¡Ãš)Ã«Ä…ÄžK;ÄšÃ¡Ã‹)-9Å-aÄ’Ã¼Å•-Ä…e-Ã¼Å”ÅžIÄ¥ÄžÄ€Å¥-XÄ•ÄžÃ•;ÅšÃ¹Å„ÅžSaÅ“0gÃ®gÃÃ±wJÃ²$ÄŠÃµkÄºÃ¯<2h-Å›Ã»ÃVÃ¿EÅœÄ¶;+p?ÄÄ¶SÃ»Å‚kRÄ„]Ä^BÄ¾Ã·%Å˜Ä¹lDÄ„R2Ä°s1Ã½oÄŸÄ®Ã¦j>t1Å‰<kaÃ¨Ã¿Ä­ÃOÄ¬.OÃ‚@TÃŠÃ©Å™JÃ¼ÄŽÄ¹+Ã”Ä³Ã‹BÅŒu2Ã¿Ã‹Ä¨i}ÃžÅ†AÄiÃ½Ä®nÃª65eaj|Ä¸Å‹l/ÃÃ‹ÅŒÃŠcÄœÅ‘Ä–zÄ¬Ã¨Ã±ÃµÃ’yÃ¸Ã¨Ã IpiÄ‚EÃžÃ’$ÅžalÄªÄ³Ã¼ÄªÄ¹FÃ…6ÄÃ±Å†FÅŽBÃ‹Ã°a&Ä©ÃšyÄ‰Ã³EÃ¹Ã·SÄºÃ·uwwÃ¨a}Ã†Ã‚Åƒ%Å~{hÅ•",
"netherPortal24": "0g0gOÃ¨Ã¶Ã¢Ã¤Ã©Ã¢ÃµÄ´ÅžÃ†$Ãž-aÃ–;aÅ’Ã™ÃŠÅšÃ‘;ÄšÃ¡Ã‹)Us(QbÃšK;ÄšSb$Ã«Ã¶Ã¢Ã€s(SbÃšÃ€rÅ–Ã™{Åš;aÄ’XÄ•Äž)9ÅŽSaÅ“]bÄ–-aFÃ•;ÅšK$Äš{bÅ–-aEÃ†s(ÃŠ$ÃžÃ†sÃžXÄ…ÄžÃ¨Ã©Ã¢Ã‘;ÅšÃ«Ã¶ÄžÃ¡Ãš)ÃÃ‹)-9ÄÃ¼Å•-;b$Ä€Å¥-IÄ•ÄžÃ€bÅ–Ä‰u-Ä=Ã¥Ã•{ÅšÃ¤ÃšÃ¢{bÄ–-aÄ’Ã¼Å”ÅžÃ«Ä…Äž0gÃ®gÃÃ±wJÃ´$Ä¨{EÄºÃ¸F4{-UÃº|5lÃ†Ä‹Ä±EÅ›n-ÄÄ±ÃŽÃ¾Ã¿VÄšÃ¾lÄ®ÃŒ%ÅœÄ†cÃ½ÃµgÄ®mÃ“8[ÃˆxÅƒÃ¶Ã¼sÃm3?Ä¹[lÃ„Ä‚dnÃC5ÃµRPcÃ„Ã‚Ã³EÅŠÃµhÃ’56Ã“XUÄ‰5TlXÄ…ÄÄ¼Ã¶Å™Ã„Ãº2^ÃŠÄŽÃ¿eOÃ¯/7Å€ÃÃ«Ä«lqP]Ã¿!dÅ€#ÄšNÃ³Ã—Ä»4gÄ­Ã¯S+Ä–Ã¶Ã“Ã¾Ä…2ÄƒÃ“ÅžaPÄÄ˜]Ä­ÄTkbÄ­@PÃ‡7kÃ™JÄ‚ÃºmÃž$FgÃ–ÅƒÄ†Ã¦Ä½Ã®Ã¡.bÄ¤r3gÃ‡uÃ¡ÃºÃ€Ã£+Ä˜",
"netherPortal25": "0g0gNÃ¨Ã©Ã¢Ã«Ã¶ÄžÄ‰&Ã¥Ã†sÃž;aÄ’SaÅ“ÃÃ‹)Ã™{ÅšÃ†s({bÄ–Ã¤Ã©Ã¢Ã•;Åš;aÅ’Sb$]bÄ–Ã¹Ä´ÅžÃ†$ÃžQbÃšÃ•{Åš-aÄ’-aFUs(Ã€rÅ–-aÃ–K$ÄšÃµÄ´ÅžÃ€s(K;Äš)aEÃ¨Ã¶Ã¢ÃŠ$ÃžÃ¤ÃšÃ¢{bÅ–XÄ…Äž)9ÅŽ-aEIÄ•Äž-9ÅÃ¡Ãš)SbÃšÃ«Ä…ÄžÃ‘;ÅšÄ=Ã¥Ã¼Å”Åž-aÅ’XÄ•ÄžÃ¹Å„ÅžÃ«Ä…Ã¢Ã‘;Äš;aÅ“0gÃ®gÃÃ±sÃ­^$Äªd-Å›hAXÃ·.OiEÅŒ5UÅ‹Ã„Ml{wÅŒÄµKÅ‹Ã…h>Ãµ|1Ã½FÃ¾ÄƒoÅŠ?ÃÄ¹ÃÃŽÄ¾Ä€Ã‡ÅÃ½4Ã¡VÃ«Ã’>tCÄ‚ModVÅ—Ä¼Ã—jÃ·ÃŽÃ±Ã¯NzÃ(*}kÅÄ´6>ÄMkÄ¸Ã•*Ã….Ã•Ã¯ÄÃ»ÄÄ€)hÃ¼Ä¾ÃµÃ„?ÄˆwÃ¦oÄŽÄŽÄ«{Ä¡3Ã¶UKÄŒÃžÄ“ÄÄw-*Ã¿ÃµÄÅ“AÃ£atÃ‘h*ÃƒÃƒÃ¥7ÃºÃŠÄ€cMkÃƒÃ•Ã“oÄAJ.lÄ‹ÃµÅ‹ÃÃ¡ÃÅ‹^Å‹Ä†Ã–Ã‰ÅÃ‰5[pÅˆÄ¿Ã­Ã—Ä€ÃkÄ€Ä¨Ä‹Ãˆ>5Ãƒ",
"netherPortal26": "0g0g)Ã«Ã¶ÄžXÄ•ÄžÄ…e-K$Äš;aÄ’-aÄ’K;ÄšÃ¡Ãš)Ã¨Ã©Ã¢Us(Ã€rÅ–XÄ…ÄžÃŠ$ÃžQbÃšÃ¹Å„ÅžÃ‘;Åš{bÅ–]bÄ–Ã‘;ÄšSb$Ã™{ÅšÃ¨Ã¶Ã¢-aE;aÅ’Ã€s(Ã€bÅ–;b$Ã†sÃžQbÄ–Ã†s(Ã¤Ã©Ã¢Ã†$ÃžÃ«Ä…Äž-aÃ–SaÅ“Ã•;ÅšÃµÄ´ÅžÃÃ‹)ÃµÄ¥ÅžÃ«Ã¶Ã¢Ã¤ÃšÃ¢{bÄ–-aF)9ÅŽ-9ÅIÄ•Äž-aÅ’Ã¡Ã‹)Ã•{ÅšÃ¼Å”ÅžSbÃšÃ™ÃŠÅš0gÃ®gÃÃ±wJÃ´(Td(ÅŠÄ·FkÃ»EÃUUÄ¼Ã¿d4Ã†ÃŠ@ÃˆÃšhgFÄ«Ä¬kQÃƒlÄ¾Ä‡u2ÃŒÃ€Äº|Ã¯kÅ‰Ã·SÅ†S)Ã‰4Å›Ä¸@Ã„3Ä€Ã‘Ã€Ã¯)Ã…NÃ aÃªXPÃ©ÅÄºÃ‹Ã‘ÃƒÃ‹ÅžÄ·Ã³Ä‚ÃºÃ¼Ã¡Ã˜*4Ä´+JÃ™?rjÃ¾Ä»Ã›Ã€ÅœjÃ¯,ÃƒMÅŠÃ†Ã£Ã‡>Ã¼z4|Ä˜^XÄŒÃ†Ä¦ÃŠMb7Ä±Ä°ÅÄ½loÃ¯@Ã±Ä¶ÃÃ°Ä´Ä‘2ÃŽM$dÄ•n|{Ã¼ÃŽQÄ›ÄªÄƒ5i|+4Ä‘1Ã€VÃƒ%Ä§c3AÃºÄ¿!)ÃÃ½ÄžÅ†Ä±Ã¥vhÃ¡Ä›ÃIÃ²BÄ›ÃŽ",
"netherPortal27": "0g0gMÃ•;ÅšÃ«Ä…Ã¢Ä‰&-K$ÄšSb$SaÅ“Ã™{ÅšÃ¤Ã©Ã¢]bÄ–Ã†s(IÄ•ÄžÃŠ$Ãž-aÄ’Ã¼Å”ÅžÃ†$ÃžUs(Ã€rÅ–{bÄ–-aFÃ‘;ÄšÃÃ‹)QbÃš-aÃ–Ã€s(;aÅ“SbÃš;aÅ’IÄ¥ÄžÃ†sÃžÃ•{Åš)9ÅŽK;ÄšÄ‰u-Ä…e-;b${bÅ–Ã¤ÃšÃ¢Ã€bÅ–)aEÃ¡Ãš);aÄ’-9ÄÃ‘;ÅšÄ‘ÃŒÃ¥XÄ…ÄžXÄ•Äž-aEÃ«Ä…ÄžÃ¼Å„Åž0gÃ®gÃÃ±sÃ­^$Äª4cÄ¹Äµ;X4?xjÃVXdÃŸÄªÃŽÃÄ¼-Ã¬e<Ã¼QÃ•QcM+ÅƒtQaÃ¢ÄŽIÃ¥VÃ„Ãª7]V*_XÃ•Xx]Ä¶+?Ã’ÄÄ‰c-ÄˆBÃ£Ã¤ÄµÃ¡Å›ÃÃ–Ã‘EÄ‰1Ã¹UÃ²Ã½Ä„6Ã‚ÃµÃ¬zhÃƒÄ³Ã¶UÃ½Ã€ÃcÄ…MÄ¼ÄÄ’Id?ÃŠÄ‘Ä¬feÄŸQUÄ£eÄˆÅÃ¹4K%Ã«Ã¡ÄµhVÄ½Ä‰Ä¨mÃµÄÃƒÄ„ÄŸÅÃ‡Ã‚Åd*yÄGÄ¼V2u@Ã¡ÄªEMÅ„UÄªÄ½MrIÄ˜ÄkeÃžÃ¼;Ã«Äµ<5Ã”Ä¦OÅƒÃ—Ã¨jÃ‘UÄ®Ã€ÅŸÄ².5Ã›",
"netherPortal28": "0g0g+Ã‘;ÄšÃ¤ÃšÃ¢Ã¹Ä´ÅžK$Äš;aÅ’Sb$Ã†$ÃžÃÃ‹)Ã•;Åš]bÄ–XÄ•ÄžÃ€s(-aÃ–;aÄ’Ä…u-Ã™{ÅšUs({bÅ–QbÃš-aEÃ•{Åš-aÄ’Ã€bÅ–QbÄ–Ã¼Å•-Ã«Ä…Ã¢Ã€rÅ–XÄ…Äž-aÅ’Ã¹Å„ÅžÃŠ$ÃžÃ†sÃžÄ‰u-Ã¤Ã©Ã¢-aF)aEÄ=Ã¥Ã¡Ãš){bÄ–Ã†s(Ã¨Ã¶Ã¢Ã‘;ÅšK;ÄšSaÅ“IÄ•ÄžÃµÄ´ÅžÃ«Ã¶ÄžÃµÄ¥ÅžÄ€Å¥-Ã¡Ã‹))9ÅŽÃ«Ã¶Ã¢IÄ¥ÄžÃ«Ä…Äž0gÃ®gÃÃ±wÃºÃ³$Äª?sÅŠÄ§SUÃ‚?Mk0Ã»9<20hUmtÃ¡S]QJgÃ‚Ä³{60Ã‘ÅÄƒÃ€Ä¼Ã‚{Ã…cpÄ¼ilÅ‹Ä‡Ã­hsANS8ÃžiIÃƒÃÃªTÄ¹Ã¼i]1AJ)RQ(Ä˜ÃAÄ€Ã²s4Ä‹ÄÄŠÃ”hCÃµÃ—Ã’Ã‚Ã€NÃXÃ¦qI^ÃˆSÃ­Å‘=Ã¢qcÅ‡9Ä–Ã§gMx9ÄžÅ‹LÄ§l0hCÃµkÄ™zRÅ‡[Ã¼.Ã‚IÃ¹Ä¹;Ã¨ÃŠÄ¯Ã½gAMÃŸ?Ä™Ä­=Ä„Ä®gÄ½Ä“*AÄ°Ä¹Å‰Å˜Ã•(ÅœÃ¨Ã¹ÅŽSÄœÄÄ·Ã¼ÄgrÃ¼ÄDÄ‰Ã½iÄªÃ•ÃºÃƒ",
"netherPortal29": "0g0g*K;ÄšÃÃ‹)ÃµÄ¥ÅžÃ†$ÃžQbÄ–Sb$Ã•{Åš]bÄ–Ã‘;ÅšXÄ…ÄžÃ€s(-9Å-aÄ’QbÃšÃ¤Ã©Ã¢Ä‰u-Ã†sÃž;aÄ’)aEK$Äš;aÅ’-aÅ’-aE{bÅ–Ã™{ÅšÃ€bÅ–Ã€rÅ–Us(-aFÃ‘;ÄšÃ†s(IÄ¥ÄžÃ¨Ã¶Ã¢Ã¹Ä´ÅžÃ¼Å”ÅžÃŠ$ÃžÃ¼Å•-;b$Ä€Å¥-Ã¡Ãš)SaÅ“)9ÅŽÃ«Ã¶ÄžÃ¤ÃšÃ¢XÄ•ÄžSbÃšÃ¹Å„Åž-aÃ–)9ÄŽÃ•;ÅšÄ…e-Ã¨Ã©Ã¢Ã«Ã¶Ã¢0gÃ®gÃ€Ä¨oÃŸ9EÄ›d-Å—@Tj[*xÃƒEVd50>VÃ‘goÃ¢Ä¿tm^ÃÄŽÄ¸ÃžÄºÅ…40Å†Ã«Äª7$ÃƒcÃ£m5*ÃºÃ‰Ã²Ã¯ctOÃÃºÄ¼d&VseÃdonÄÃ¡Ãƒ?l?ÅÄŒ.ÄªÃ™Ã¢Ä‚RMÃ–R,Ã¹ÃlÄ¸ÃµÃ¡Ã…dÅŒFÄ’Ä£nÄmaÃ·+Ã°4ÄŒnem7ÄÃ¾3Ã€Äº7JÃŸÄˆÄ¢Ã£6lRÃºtÄºÃœÃ‹Å ÄºKÃ•dÃ‡Ã¡Ä«}Ã¤kÄÄˆ>sÃ³(Ã“Ä±ÄºÄ¬Ä¤Ã²Ã„Å˜Ä»Ã€Ã‰Ä®Ä±6Å„Ã˜sÃÄ«VÅ…ÃŠÃ Ã Ä·Ã¦r(g@Ã›Ä»ÅšÄ‘ÅÃ°t>{",
"netherPortal30": "0g0g,ÃŠ$ÃžÃ™{ÅšXÄ•ÄžÃ‘;Äš]bÄ–Sb$Ã†s(Ã¤ÃšÃ¢SaÅ“Ã«Ã¶Ã¢{bÅ–-aE-aÄ’Ä€Å¥-Ã•{Åš;aÅ’QbÃš-aÃ–SbÃšK;Äš;b$Ã¨Ã©Ã¢Ã«Ã¶ÄžÃÃ‹)Us(Ã¨Ã¶Ã¢{bÄ–K$ÄšÃ€rÅ–Ã¹Å„ÅžÃ¼Å”ÅžÃ¡Ãš);aÅ“Ã€s()9ÅŽ;aÄ’)aEÄ‰u-Ã•;ÅšÃµÄ´ÅžÃ¡Ã‹)Ã†sÃžÄ…e--9ÅÃ¤Ã©Ã¢Ã€bÅ–QbÄ–ÃµÄ¥ÅžÃ†$ÃžÃ«Ä…Ã¢Ã«Ä…ÄžIÄ•ÄžIÄ¥Äž-aFXÄ…Äž0gÃ®gÃÃ±cÃ«Ä°EÄ›48ÄºÃ­oÅ›alkÃ»F54U5Ã¿MmeÃ’ÄŽÄµ<nokÄˆÄ³(7Ã‰ÃŠÃ“uÃª4ÃŽÃ²8Å‹2Ã‡Ã¼hÄ¯Ä­Ä†X{hÃ¬Ã–Äk{Ä•4_ÄŽGÄ·5Gm4Åœ4;Sz@ÄƒF0>%oT{ÄŽÃ¾Ä§;Åž4Ã›ÅÄ¿pX#ÃŒÅšÃˆ$ÅÄ§1Ã­Ä”UÄ‰oÃÃÅ—hÃ¯Ä§lAÃŠ)D1Ä«NÃ…<iÃµKÅˆÃ‘iÃÄƒÃœFÄ¯Ã³ÅŠÄ€Ä‚Ä³Ã€${Å‚ÄŒib!Ä“6dÄ¥mnÃ‚Ã¹gÃ‹QÄ‡TFhÃµ)/1sEÅ›+UÃQ[7ÄºÄŒTÄ”Ä™ÄŽÅ“gÅ›b",
"netherPortal31": "0g0g*{bÅ–Ã¤Ã©Ã¢Ã¨Ã©Ã¢Ã•{ÅšUs(]bÄ–Ã¤ÃšÃ¢Ã†$Ãž;aÅ’-aE-aÃ–Ä€Å¥-Ã«Ã¶Ã¢Ã•;ÅšÃ¨Ã¶Ã¢ÃŠ$Ãž-aÄ’Sb$)aEÃ†sÃžÃ€rÅ–Ã«Ä…Ã¢Ã™{ÅšIÄ•Äž-aFÃÃ‹)Ã«Ã¶ÄžÃ‘;ÄšSbÃšÃ€s(K;ÄšÃµÄ´ÅžK$ÄšÃ¡Ãš);aÄ’{bÄ–QbÃšÄe-Ã¹Ä´ÅžÃ†s(Ã«Ä…Äž-aÅ’SaÅ“Ã¹Å„Åž;b$Ã¼Å•-Ã‘;Åš-9ÅÄ‰u-IÄ¥ÄžÃ¼Å„ÅžIÄ¥Åž)9ÅŽ0gÃ®gÃ6sÃ«Ä©gJÃ«$Äª}<4??AÃƒlhUVÃ’Ä½FÃ¬Å€Ã•6Å‚ÃÄÃƒÃžÅˆÄ±TÄŸÅ‡XTvÃ“Cz!]Ã²Ã­ÃƒÄ±QXXÃ‹JgÃ¹2Ã¸ÄÃ¾yS8Ã³Ä„ÄIÃ’ÅŒlXX5wQÄ·Ea4Ã¬Ä±ÃƒhqIÃ«ÅÄ¶ÄÄˆzeRkgR9Ã†Ä±ÅŽF6Ä®Ã¬TÃˆÃ’k?;Ä¯ÃŒÃµÃ„Ä«ÄšRÄ…ÄœÃ”[Ä¡ÅŽÄ¨x9AtÃL30Ã»fsÃºA8ÃƒÃ¬ÃÄ”Ä¤Ãˆ&Ã«paÃ»$Å‡Ã¡Ã¨T[TUÃ‚_Å‹ÄÅ 0Ã¹ÃƒÄ²4XS2F#ÄˆX0Ä¦3Ä½cÃc.@ÄªÄÄg",
"lava0": "0g0g*Å„Ä¨ZÄ¼Ã€ZÅ„Ä™YÅ‘Ã®ZÅÃHÅ„Å™WÄ¯Å‡HÄ´gYÄ¸SZÅ€ÃºHÅ„Å‰WÄ¼Ã¬WÄ¼ÃžWÅ‰2HÅ€Ä™YÄ¸ÃWÅ‰yYÅ‰2YÅÃƒHÅ‰iYÅˆÅ™HÄ¯Å—HÄ¸wYÄ¼ÃŽWÄ¸(ZÅ„Å™HÅ‰NZÅ¢ÄWÅ•Ä»YÅ€Ä‰YÄ´wYÄ´0YÅ„Ä¸ZÅ„Ä™ZÅ•Ä«YÅ•Ä«HÄ¸Ã€ZÅOWÅ€Ã¬HÅ‰iZÅ‘ÄŒWÅ‘Ã¼WÅ•Å‹ZÅ•Ä»ZÄ¸(YÅ‰yZÄ¯Ä·HÅ‘ÄœHÄ«Ä·HÅš*YÅÃYÅ‘Ã®YÅÃ Y0gRcTToÃŸ1Ay^EJÄ³)Å‰I;ÄŒ1MkÃ»Ã€Ä¹TxVÃ¿K6]5ÄŽÅƒÃÄ·Ã†Ã¥ÅšwÃ¯Ã”Ä¿CDz0Ã«Ã†Ã>Ã’Ã‘ÄÄ€AOÃˆÃ¡Ã®8Ã¹9Ãƒ(Ä°Ä±xÄ¹^BGP-^0Ã¨Å‘ÃƒÃ†ÅˆÃ‹%Ã¢Ä¨Ã“Ä’Ä´uÄªIoÃ­11Ä]ÃŽmÃ·tÅžÄ¯xVÃµÄAÃ²Ã¤Ã­Ä½qÅŒÄ„Ä¥Ã°5Ã–Ä“Ä§Ä™ÃŽÄ˜VÅšMÄ¥Ã¯ÄˆwÄ©Ä³~#&tÃ±Ä…MVÄ”(mnÄ´Ä§ÃKÄ©IoÃ9Ä¥*Å„CÃ’[(Ã¼Ä¯KÃ EÄ’Ä‰ÃˆMÃŽÃ½Ã†Ã®9ÄœÃ¹ÃˆEÃ†)|Ä·[Ã©KUPlÄ°",
"lava1": "0g0g(Å€Ä™YÄ¼Ã€ZÄ¸SZÅ€Ä‰YÅÃƒHÅ‰NZÅ„Ä¸ZÄ´0YÄ¸(ZÅ€ÃºHÅ„Ä¨ZÅ„Å‰WÅ„Ä™YÅ€Ã¬HÄ¼ÃžWÄ¼ÃŽWÅ‰iYÅ„Å™WÅ‰2HÄ¯Å—HÄ¸wYÄ¸Ã€ZÅ‰2YÅžÃ“HÅ‘Ã¼WÅ„Ä™ZÄ¸(YÄ¼Ã¬WÅ‘ÄŒWÅ‘Ã®ZÅ‰yZÅ‘Ã®YÅ„Å™HÅ€Ä‰HÅ>WÅÃ YÅÃHÅˆÅ™HÅ„Ä¹WÅ•Ä«HÄ´gYÄ¯Å‡HÄ¯Ä·HÄ´wYÅ•Å›ZÅ‘Ã»ZÅ‘ÄœHÅ•Ä«Y0gÃ®gÃÃ¬sÃ«Ã¬AÄˆb(Ã»}$MÃ¸;Äœ1<hÃ‚%wÄµ9*eUÄ©Ä¯5Ã’Ä¿$OÃ¬wÃ Å€1TÅÃšÄ®t0zÄ©wyÅ…$ÄºÄ‚BÅ›Ã€AzÄ©8,Ã¹-ÅŸa8N^)iÃ‰Ã°EÄ±sÄBÃ•NÃ²-gRÄ‚GwÄ‰SÄ¨swÃ­dÃRa43ÄˆÃžÄ¨=Ã«Ã·^x9Ã€jUÄŽÄ’ÅƒÃwÃ°SÃ…0Ã•Ã³F{Ã Å“ÄÄa4ÅšÃ·^wÃ»8qÄ°<+Ã­AÅ—Ã¸hÄ§Ã•;ÃºÃ­ÄŽÃ¹SÃžÃ>)Å‹Å-ÄRÃ—Ã®Å„Ä¢ÅœÃ¯.^ÃƒÃ•zÃ¶PÄ˜Ã¹EÃŽXÃ¼Ã¹Ã•Ä‰Äˆ_Ã²gP",
"lava2": "0g0g#Å€Ä‰YÄ¸SZÅ€ÃºHÅ‰NZÅ‰2YÅ„Ä¨ZÄ¼Ã€ZÄ´gYÄ¼Ã¬WÅ„Å‰WÅ€Ã¬HÄ¼ÃžWÅ„Ä™YÄ¼Ã¬HÅ„Å™HÅˆÅ™HÅ„Ä¸ZÅ‰iYÄ¸Ã€ZÄ´0YÄ¸wYÄ¼ÃŽWÄ¸(YÅ„Å™WÅš5WÅÃƒHÄ´wYÄ¯Å—HÅ‘Ã®YÄ¸(ZÅ„Ä¹WÅ€Ä™YÅ‰yZÅNZÅ‘ÄŒWÅÃ YÅ>WÄ¯Å‡HÅ‘Ã»ZÅ‘ÄœHÅÃHÅÃYÅ‰2H0gRcT@sÃŽÃ°wÃºP0ÄˆÃ´kzb)ÅŠÄ­p4PkÅ˜RP*aUÄ¨Ã„5Ã£pk2Ã´P*S1ÄŽÄ»%Ä®p0iÄ¨Ã¢Ä¾ÃºkÄUFÄ©Ã…8hÃ¾Ã¡x4UÃ‘v4yv$il!6?{ÄÃ€Ã†DÄ±UgÃ‹mEÅ…tSÃ´Ã•KT8JÄ…4Ã»Ä©t)Ä¼EhÃ½A.aÃ†ÃÃ¼Ã¾ÃÅƒÄ€Ã’?Ã‹pÃ«Ã¡nÃƒ|MÄÄ‰?vUÃ’_ÃŠMÄ‚%V2pÄ˜V8Ä˜@eÃ¹Ãˆ81TÃšÄ™Ã¯ÃÅ—0%Ã„Ä®$yTÃMÄ‘ÃŸE3VÄ‘ÃƒÃ¡iÄ±AÄ˜Ã—0U3SwÃˆÃ–Ä¸Ã¯Ã«ÃºÃ­",
"lava3": "0g0gCÅ€ÃºHÄ¸SZÄ¸(ZÅ‰2YÅ„Å‰WÅ€Ä‰YÄ¼Ã€ZÄ¸(YÄ¼ÃžWÄ¼ÃŽWÅ„Å™WÅ€Ã¬HÄ¼Ã¬WÅ„Ä™YÅˆÅ™HÅ‰2HÅ„Ä¨ZÄ´0YÄ¸wYÅ€Ä™YÅ•Ä«YÅ‰yZÅ„Ä¸ZÄ´wYÄ¯Å—HÅÃƒHÅ>WÅ‰iYÅÃ YÅ‰NZÅÃHÅ‘ÄŒWÅ•Å‹ZÅ•Ä»YÄ´gYÄ¯Å‡HÅ‘Ã®YÅ‘Ã®Z0gÃ«cT@sÃ­@wRX$Ä§8)Ä™]4ÅŠÃ¬4ÄºÄ·kÅˆ5pkIB)Ä¹95lkÃ€0pimlÃ£nBÃ¾Äƒ0Ã18ÃÅEÃºÃ¿MÄ«g0gÃ‚4Ä¾Ã‰(mÄ§425wi@lÅŽÄ·QÃ°Ã¶808ogÃ±!8~Ã²Ãb4Ã¹RM278,ÃƒÃ²k]kJ9*Ä¾{ÃŠjiÃ·)ÄÃ¹J5TÄ¡08ÃÃ‚?gÃ‘Ã¢Ã¡Ã¯wÃŽÃ²Ã‡Äš10Ä«ÃµpÃ«{{Ã¬Ã°ÃšÄ·[|3RÃŽÃ¬Ã¾Ã¤QjwÃ“y(5Ã¬Ã‹gÃ‡Ã—Ã„Ä…pÃ£h4jcSKX1*Ã®{Ä˜Ã…sxÃ¶Ãš1Ã¯",
"lava4": "0g0gyÄ¼Ã¬WÄ¸(YÄ¸wYÄ¼ÃžWÅ„Å‰WÅ„Ä™YÅ€ÃºHÄ¼Ã€ZÄ¸SZÄ¼ÃŽWÅˆÅ™HÅ‰2YÅ€Ä‰YÅ„Ä¨ZÄ´0YÅ€Ã¬HÅ€Ä™YÄ´gYÅ‘Ã®YÄ¯Å—HÅ‰NZÅ‰iYÄ¸(ZÅ‰yZÅ„Ä¸ZÅÃYÅ‘ÄœHÅ‘Ã¼WÅ„Å™WÅ‰2HÄ¯Å‡HÄ´wYÅ>WÅÃH0gÃ®gÃÃ±wKÄ®AÄŠÄ«cMÃ®(MÃ«cÄ‰8wÄ¨coÄŠÃ¶sÅ‡Ã«<1Ãº94XoÃ‘cdiÃ€pkÄ¸t?QoÃ Ä®Ã†Ã¬nKÃŸhdÃ¼coÃŸhwÄ¬_dÃŽfwÃŽÄ­AhÄ¯p@|-ÃŸÄ³Ã†07wgRÃŽÄŽÄ«?jÄ­cNmAÄ©RxÄ®@QÅ‹S)K9pV38Ã Ä©Ã¥ÅŽÄ¾Ã‘OÄ­MÄ½@Ã†MÃ±QÅ‡K%Å—Ã°;ÃŸ7lÄªÄªkKÃ®xMÄ­)N[ÃžÄ·]g>m|MÅƒÃ«Ä¾gsXÄ¸;ÃŽ]Ã¨ÅŒÃ¼Ã„oÃ…xkÄ¸wÃ«3(Ã«|0Ã“4oN2Ã†Ã¬Ä³F2c",
"lava5": "0g0gxÄ¼ÃžWÄ¸wYÄ´wYÄ¼ÃŽWÅ„Ä™YÅ€ÃºHÅ€Ã¬HÅ€Ä‰YÄ¸SZÄ¼Ã€ZÅ‰2YÅ‰NZÅ„Å‰WÄ¼Ã¬WÅ‰2HÅ„Ä¸ZÄ¸(ZÄ¸(YÅ„Ä¨ZÅ„Å™WÅ‰iYÄ´0YÄ´gYÅ€Ä™YÄ¯Å—HÅÃYÅˆÅ™HÅ‘Ã»ZÅÃƒHÅ‰yZÄ¯Å‡HÅ>WÅ‘Ã®Y0gÃ®gÃÃ®cÃ8AÄŠÄ³wM|oM?kÅŠÄ·QUÃ¯1*cdÃ€?kÃžÃ¾8Ã‚Ä¾)UX*Ã?pÃ“lxQÄ®)ÃºPTkÃ·gXm1ÃºÄ¬oÃ¼mQÃ“Ã·AlÄ§wÃ‚0Akh)ÄŠÄ«UXÃ¯w2]wgÃ­Ã‹ÄŸiÃ‡K7kÄ¹hAÃ‚2wÄª5Ã‡VÃ°MÃžP*[SQÃºTÃ¥ÅŒÄ‚ÃÄ¸@lÄdSÄ¼Ä§Ã‡Ã€Ã·MK|kX9sÅ˜?(Ã€PxÃ€Ä¾(Ä·8PwP-ÅˆÃÃŽÃ­}Ã¡?4xmmoÃÄ·Ã‡UUMÅŸtxÃ“mwÃºÃ«l0Ã…0UJ02hwÃ«Ä¬(Ã‚7",
"lava6": "0g0gvÄ¼Ã€ZÄ´wYÄ´gYÅ€ÃºHÄ¼ÃžWÄ¼ÃŽWÄ¼Ã¬WÅ„Ä¨ZÄ¸SZÅ‰iYÅ>WÅ„Å‰WÄ¸(YÅ€Ä‰YÅ€Ä™YÅ‰2YÄ¸(ZÅ„Å™WÅ‰NZÅ‰2HÄ´0YÄ¸wYÅ„Ä™YÅ„Ä¸ZÅ€Ã¬HÄ¯Å—HÅÃHÄ¯Å‡HÅˆÅ™HÅ‰yZÅ‘Ã¼W0Q1Ã¹Ã¯MÄ³Ã«B_KqÃ0Ã¶Ã Ä¶0ÄÄ­4Ã’NÃ‚Ä‹Ä›PTpÃ“wÄ¾ÃžIowÄ›]@Ä­x@Ã„5Ä“Ã˜3RÅÃ‘Ä§#SJÅ˜SÄ˜4dÃ«SÃ—yÄ–Ã›Ä‹6Q1cKXxÅ&gÃ¬Ã“ÅˆlÃ¬wAtÄ«l4)Ä•Äˆ3Ä¹Ã†kÃ¢Å…Ä«Ã¢dÄŒAU]dÃÄ•4Ã§aÄŒÃ—!1Ä¡ÄžÃ§Ä’IÃ€Ã±Å8Ã°ÃµBJ@Ä³Å‹Ä‘Ã§VÃ•7yoÄ®1Ã€;ÃœÃ¨Ä€by0(RU%1eÄ»lg0bÃ®Åˆe",
"lava7": "0g0gwÄ¸SZÄ´gYÄ¼ÃžWÄ¼Ã€ZÄ¼ÃŽWÅ€ÃºHÅ„Å‰WÅ€Ã¬HÅ‰yZÅÃYÅ„Å™WÅ€Ä‰YÄ¼Ã¬WÅ„Ä™YÅ„Ä¸ZÅ‰iYÄ¸(YÅÃƒHÄ´0YÄ¸wYÅˆÅ™HÄ¯Å—HÅ„Ä¨ZÄ´wYÅ€Ä™YÄ¸(ZÅ‰NZÅ‰2HÄ¯Å‡HÅ‰2YÅÃHÅ‘ÄœH0R10Ã‘FÃ·0x!8mÄ¨Ã«Ã¶Ã Å‚0Ã¹ÄŒ2ÄŠÅ˜^Ã˜NÄ®FcÄˆpÃ–?X2wÃ˜Ã‡Ä¿ÄˆoÃ¾]4Äž<ÄªxÄ«Å‡KÅ–Ã€Ã®6Ä³Ã±Ã¹mÅ‡0>w+Ä²Ã¹](2ÅžÄ€Ã’zÅ‘Ä¬Ä TÃ˜kGÄ ÅhÅ‡ÄŒcÄ–Ã‹ÃšÄ‹Ã¯u(9Ã ÅŽAÄ¥lÄ‹pÄœSnÄ XÄŒÃ‚Ä±ÃÄ­Ã›6lÄŽÄ¼Ä‰Ä€]@Ã¥Ä¿3IyÃ·Ã¸/Ä»Ä‚ÃÃ©Ã–Ã°Ä‰F~ÄUCÃ“Å¥ÅŸ6Ã…oÄ±TÅƒBÄ°$Ã‡ÃµpwÄ¯$8d",
"lava8": "0g0gyÄ¸(ZÄ´gYÄ´0YÄ¸(YÄ¸SZÄ´wYÄ¼ÃžWÅ€Ä‰YÅ‰2HÅ€ÃºHÅ‰NZÅ‘Ã®ZÅ„Å™WÄ¯Å—HÅ€Ä™YÄ¼Ã¬WÄ¼Ã€ZÅ„Ä¸ZÅˆÅ™HÅ‰iYÄ¸wYÅ€Ã¬HÅ„Å‰WÅÃYÅ>WÅ„Ä™YÄ¼ÃŽWÅÃƒHÅ‰2YÄ¯Å‡HÅ‰yZÅ„Ä¨ZÅÃHÅ•Ä«Y0gÃ®gÃ6sÃ­Q0ÄŠÄ³)3Ã¸c)hPMÄ»8?QÃÃ’Ä¿;lp]Ãžd8T10Ã¼Äº-ggSj|4Ã£Ã¬gÃŽÄ­cxÃ±ogÃ¶TÄ™Ã¼p0|8NÃÃ€Ä¼5gÃ¹>0z|Ã€J[8B0g0Ã­4zRÃ–Ä©~kwm(Ã¼18(RSÃ¾X4x[Ã™ÄŒÃ€4Ä©gSÅ˜Ä»Ã¢Äº@Ã¤GÄ«dkÄ·gÃ£h0zÃ€oB4Ã¨(QÃ•Å›ÃƒÃ¬KÄ»kzÄ¯EJQÃ•0V%Ä™Ã¼8xÄ€Ã¨JÅ†4zTAÃºÃ®8Ä·Ä‡hÃ•ÃƒÃ€gÃ¼Ã–2Ã€0gÃ°k[Ä­8S4p6Ã¹B0v",
"lava9": "0g0gAÄ¸wYÄ´0YÄ¯Å—HÄ´wYÄ¸(YÄ¼ÃžWÅ„Ä™YÅ‰yZÅ€ÃºHÄ¸SZÅ>WÅ‘ÄŒWÅ„Å™WÄ¯Å‡HÄ¼Ã¬WÄ´gYÅ„Å‰WÅ‰iYÅ€Ä‰YÅ‘Ã®ZÅÃƒHÅ€Ã¬HÅ„Ä¨ZÅ‰NZÄ¸(ZÄ¼Ã€ZÄ¼ÃŽWÅˆÅ™HÅ€Ä™YÅ‘Ã®YÅ‰2YÅÃHÅ‘Ã»ZÅ‘ÄœHÅÃ YÅ•Å‹Z0gÃ®cx5oÃŸ90ÄŠÄ³)TÃ·;NÃ€QÃ¡Ã®4TQ<4Ä»UÅ—mQÃ«d8(|cÃ¯Ä¾Ã†Å—oAj|<Ã„dAÃÃ¯gC]Ã‘gÃ­B@Ã¬lÃ¹|4Å˜Ã„;wÃ¬BÃ€~0j|;Ã„I4wÃ®Ã‘>R;wÃ­B6Ãˆ0gr?C~8Å—TÃ‘Ã°o4gsÃ¢Qp96Ä°Ã’Ã…0)Ä·Ä?Ä«4<Ã”Ã²BÄ®Å‚Aj~AwoÃ†0Ã†Ã’ÄŒaÃ«Ä¨f;ihEÃ­oAg]Ã°x>4hUÃÅÃ„;wÃ¸wÃ°Q8wÃ‚;Ã•Ä¸;gQlJpcgÃ‡5Ã¯Ã²*Ã°9.ÄŽÃ²wÃºm",
"lava10": "0g0gyÄ´gYÄ´0YÄ¯Å—YÄ¸(ZÄ¸Ã€ZÄ¼Ã¬HÅ„Å™WÄ¼ÃžWÅ…2WÅÃWÅ€Ä™YÄ¯Å‡HÄ´wYÅ€Ä¨YÅ„ÅˆZÄ¸SZÅ€Ä‰YÅ‰RZÅ‰yYÄ¼ÃŽWÅ€Ä‰HÄ¯Å—HÄ¸wYÅ…iHÅ€ÃºHÄ¼ÃºHÅ€Ä¸ZÅ‰RYÅ…yHÅ„Ä¸ZÅ‰NYÅ‰Ã‚ZÅÃ WÅ‘Ä‹Y0gÃ«00Ä«kÃŽÄ«cÃ­^$Ä¨Q40Ä´-ÃŽÄª0ÄªÄ³54Ã‚{jk-Ã 240VMMÃ°kgcÃ†gÃ½5O2cTQ(gÄº;gÃ­dÃžcg(S4ho0wÃ¬Ã‡(m0lR4ÅšÅ€0gÃ«cÄ§T4wÃ­Ã‡SÄ«c0dÃ•ÃÄ§8gTd(c407ÃšÄ«39>>gÃžÄ§8g>Ã¡Ã‚Ãµ4Ãƒ><Ã±Ã³dK0Ã†5ÃµÃ‘0Ã„hNIÃ¨Ä·Ä¨4kÅ„x)Ä³cgÃƒÃ¬ÅŠÄ§4hsÃ’-p4wÃ¬t(Ä³4g?0Ã†Ã‹4g{g)Äª(Ä§f5Ã’38(Äª{Å—ÄªsÅšp",
"lava11": "0g0guÄ´gYÄ´0YÄ¯Å—YÄ¸wYÄ¸Ã€ZÄ¼ÃŽWÄ¼Ã¬HÅ„Ä¸ZÄ¼ÃžWÅ„ÅˆZÅ‰RYÅ€ÃºHÄ¯Å—HÅ€Ä¨YÅ€Ä¸ZÄ¸(ZÄ¼ÃºHÅ…yHÅ…2HÄ´wYÄ¸SZÅ„Å™WÅ€Ä‰YÅ€Ä‰HÅ€Ä™YÅ…iHÅ‰NYÅ…2WÅ‰RZÅÃ®H0Q0cÃ¯MÄ·Ã­Ä_KcSÃµÃ¶ÃžÄ·TÃ¬Å‡czy5Å’ÃŸCgX$Ã¥ÃŠÅ‹4jo4Ä§Ã¹ÃŽxgS5ÅŒÄˆQxÄ»ÄœzÄ§(4Ã´0XhÃ¹kÄ€Ã†g=Ã¾Ã¤4nÄ³j8XFÄÅ#Ä¨Ã¨lÅ‡gSnÃ¼j80ÃµÄ½3k(Å™x0g0ÅÄƒ0aMRÃ,Ä‰F.Ã¶Å‡S2NÄŠÄ°ÄºÄ†04Ä•Ä‘P/0BUÄ†04ÄƒÃ¬Ã¤Ã«IxFu0Ã«82/Ä·XOÄ‹Ä¯ÅžÄ¤f3Å•Å˜=Ã¸zÅ…ÅŸiÃ“",
"lava12": "0g0gpÄ´gYÄ´0YÄ´wYÄ¸SZÄ¼ÃŽWÄ¼ÃžWÅ€Ä¨YÄ¼ÃºHÅ€Ä¸ZÅ…2HÄ¼Ã¬HÄ¯Å—HÄ¸(ZÅ„Å™WÅ€ÃºHÄ¸wYÄ¯Å—YÄ¸Ã€ZÅ€Ä™YÅ„Ä¸ZÅ€Ä‰HÅ€Ä‰YÅ…iHÅ…yHÅÃ‚Z0RwcXFÃ³ÃŸÄ‰!Ã†a(Ä˜IMÃ³Ã„1Ã«1ÃˆÄ¸Ã¬Ã·MÃŒgX(ÃµÃ’y42Ã¤30Ä¬Å‡A_g5Å˜IÃŽ7Ä³ÄŒz5h6&4whdÅ‹kwg(Ã“Ã´Å‡nÃ²Å“c30lÃ¯$SÃ¦hÃ«806Q23Ä§@Ä³Ä—Ã¬Ã•Ä¯Ã¼Ã«8Ã«Ä±Ä†S9tiÄDÃ²]Å˜NwEwÄ©Ä’Ã°^y00Ã½QÃEIMÄ›Ã†02%Ã¡Ã›Ã€XxAÃŒ08?1Ãžw42ryÅ˜ÃºÅ“3E(Ä­$Ã´o/g?",
"lava13": "0g0gnÄ´gYÄ´0YÄ´wYÄ¼ÃŽWÄ¼ÃžWÅ€Ä™YÅ€ÃºHÅ„Ä¸ZÄ¯Å—HÄ¸(ZÅ€Ä‰YÄ¼ÃºHÄ¸Ã€ZÄ¸wYÅ€Ä¨YÄ¸SZÄ¯Å—YÄ¼Ã¬HÅ„ÅˆZÅ€Ä¸ZÅ„Å™WÅ€Ä‰HÅ‰NY0RwcÃ®x]ÃƒkÅ‹S8Ã¹ÄŒÃ±Ã]Äž1Äˆ1sÃ¡Ã¬Å’Ãq0XxrcÃ“42Ã•30Ä¥Ä•z8Å—4{KÃŽ1/MqÃˆ@Ã¯Å4whBAÃ™w0*Å™yKmÃ²Lc30dCÃ0]Ä™w844Ä¤y2S.Ã¼Ã­Ã¬mÅQKaQÃ»$ÄˆbyÄ©^XqÃ¾Ã¹(KoKÄ€Ä»Ä±Ä‰Ä¿01Ã´Ã Å…C)$Ã»J01Ã»OE(XxÃÄ«0BÄŒ1%Ã€42_Ã‚ChF3Å‘Ä§Ä˜Ã–ÃÃˆÄ©Ã¹Q",
"lava14": "0g0gmÄ´gYÄ´0YÄ¸wYÄ´wYÄ¼ÃžWÄ¼Ã¬HÅ€Ä‰HÅ„Ä¸ZÅ€Ä¨YÅ€Ä™YÄ¼ÃŽWÄ¯Å—YÄ¸(ZÄ¸SZÄ¼ÃºHÅ€ÃºHÅ€Ä‰YÄ¸Ã€ZÅ…2WÅ„Å™WÅ„ÅˆZÅ…2H0RxÃ¹ÄŒxIÃ¡p!Ã†8Ä§ÄÄ®Ã¥Ã²50K2ÄˆÃ¬2&Ã¥o(4xz]@X2KÄ©gÄ™Ãµ$UÄ·0ÃšIÃ„hÄ¨Å—ÃƒoÃ„1ÄŽoÃ„gMÄ—iÄ½0aN$RhÃ·!aÄ©g?Ã¹T@R*Ã®841(z3[o<SÃˆÃ³Ä¼/wbQÄ©Ä¡wb]ÄÄµÃ³ÃÄ·Ä§gÃ«IÃ„ÄªxÄµTÄ»02AOo*(%Q4MÃ­E)ÃgXxÃ´61ÄXp!Å‡03KÄ¿*<Ä”s|gÄÃ¶Ã´5kgÃ—",
"lava15": "0g0goÄ´gYÄ´0YÄ¸wYÄ´wYÄ¼Ã¬HÅ€ÃºHÄ¼ÃžWÄ¼ÃºHÅ…2WÅ„ÅˆZÄ¸Ã€ZÄ¯Å—YÅ€Ä‰HÅ€Ä¸ZÄ¸SZÅ€Ä™YÄ¸(ZÄ¼ÃŽWÅ€Ä‰YÅ€Ä¨YÅ…yHÅ„Å™WÅ…2HÅ„Ä¸Z0RxÃ¹ÄŽMÄ³XÃ¹Ã³Ã†{(Ä‘Ã²xcÄº003ÃµÅ˜Ã¬QxÄˆw5ÃŽ)zh$2Ã«Ä§gÃ³e#Ã¼Å‡0gIÃ„guÃƒ(Ä‰E2coÃ„gd~iÄ½(dUÃ‘Rg2CaÄ©gÄ§ÃƒÄ“6ÄSR841Ä§w2Ã°ÄŠpÄ§Ã‰ÃµÅÃ½T2ÄˆztÅ‡ckÃ–ÃˆÅ‘*JÅ‡oÃ«Ã«Ã„ÅŽÄœÄ­Ã½Ä³0dÃA4OS(.6MÃ¬Ä³ÃÄ0XxÃÃ«1Ä’6kÃ‚K03Ã«43|Ã€iÃ³ÄˆoÄµÃ¡6ÄŽÄ„a",
"lava16": "0g0gpÄ´gYÄ´0YÄ¸(ZÄ´wYÅ€Ä‰HÅ€Ä™YÄ¼ÃžWÅ‰yYÅ…2HÄ¼ÃŽWÄ¯Å—YÄ¸Ã€ZÅ€Ä¨YÅ„Å™WÄ¼Ã¬HÅ€ÃºHÄ¼ÃºHÄ¸wYÄ¸SZÅ€Ä‰YÅ„Ä¸ZÅ‰RYÅ…yHÅ…iHÅ„ÅˆZ0RxÃ¹ÄŽMÃµÃ¡pyÃ€{0Ä•Ã¶MÃµÄ¾4x0JÅ—1&MXwFTXÃ…wEhkSgÃµ_Ä„Ã¾w02]UgpÃ¶)Ã‘Ä°0QIUg1)iÃ½g1Ã¢ÃŽÃ­g0Ä­aÃ­gÃ·)Ä›7x@M84MÄ¬Sq[AÄŒTÃ€JÄœJT2?lÄ§Äˆ8Å‹Ã“tÃ­*Ã›Ä˜<ÅˆIVC)Ä°Ã£c0eÃ‚)@O]M^S-Ã·}Ä‚Ä´gXxgÄ§oÄŽ@Ã³Ã†K0Ãg07ÃMiÃŒÃ¹qiÃ¼SÄ„gb",
"lava17": "0g0gvÄ´gYÄ´0YÄ¸(ZÄ´wYÅ€Ä¨YÄ¼ÃžWÄ¼ÃŽWÅ‰Ã‚ZÅ‰yYÄ¸Ã€ZÄ¸wYÄ¯Å—YÅ€Ä¸ZÅ„Å™WÅ…iHÅ€ÃºHÄ¼Ã¬HÅ€Ä‰YÄ¸SZÅ€Ä‰HÄ¯Å—HÅÃ‚ZÅ„ÅˆZÄ¼ÃºHÅ‰RZÅ€Ä™YÅ„Ä¸ZÅ‰RYÅÃ WÅ…2HÅ…2W0RxÃ¹Ã¯M^Ã¡A^Ã†{0ÄÃ¶MÃ³ÅŽXx0Ä¬0Ã«ÄMQw%KIÄ«ÄˆÄ”agÃ«gÃ«@AÄŒwc!(mgpÃ·!JÄ»Ã«ÃƒÃ€Ã„gÃ«Ä•l2w1*Ä™Rg2naÄ©lÃ¬|Ä¬Ã°BdR84(2Ã«p@AÄ¯ÃŽÃ†Ä¹Ã»QT1Ã‚Ä‘WwÃ†kÃ‹ÃœzÃ±(KÅx2ÅÄ…Ã¡Äš%Äˆ0ER(0NÄŒzkÃ«Me?Ã³Ã‚0X#g2hlBiÃŒK0ÃÃ€0nÅŸÄ’hÄ†KTÅ™iÃ«Ã“Ä«2",
"lava18": "0g0gvÄ´gYÄ´0YÄ¸(ZÄ¸wYÅ„Ä¸ZÅ„ÅˆZÄ¼Ã¬HÄ¼ÃŽWÄ¼ÃžWÅÃ HÅ‰Ã‚ZÄ¸SZÅ„Å™WÄ¸Ã€ZÅ‰NYÅ€Ä™YÄ¯Å—YÄ´wYÄ¯Å—HÅ€Ä¨YÅ‰RYÅ…2HÅ€Ä‰HÅ…yHÅ…2WÄ¼ÃºHÅ€Ä‰YÅÃ WÅ€ÃºHÅÃ‚ZÅÃ»Y0RxÃ¹ÄŽ.Ä·Ã½$08}gÄ‰ÃµÃ˜Ã€ÅŽÃ°10SI18Ã—mÄ Ä±0Ä€08]3gÃ«0Ã«]wXwÄ«M-wg$ÄœQ~ÃƒÃ«Ã„gKgÃ¯nkÃ­EÃ¯Ä‘Ä­>02Åc2pR*Å…y02y8m(2SqyMÄ«xÃ«qÄ»;ÃŽ2rhÃžÅˆÃ«SÃ“Ã£Ä§ÅŽÄžÃÄµÃŽcAÄ½ÃŠÅŠÃ˜.oÃµSÃ•3sÄ„w0Ä§MdÃ”Ã§@gXgoRhwÅjÃ€Ä·0ÃžoRtÃ‹hi-ÃÃ |kSÃ¦Ä³2",
"lava19": "0g0gyÄ´gYÄ´0YÄ¸(ZÄ¸wYÅ„Å™WÄ¼ÃºHÄ¼ÃŽWÄ¸Ã€ZÄ¼ÃžWÅÃ»YÅÃ HÄ¯Å—HÄ¯Å—YÅ…2WÄ¸SZÅÃ‚ZÅ€Ä¨YÄ´wYÅ€Ä¸ZÄ¯Å‡HÄ¼Ã¬HÅÃWÅ‰NYÅ€Ä‰HÅ‰RYÅÃ»HÅ…yHÅ€Ä™YÅ€ÃºHÅ…2HÅÃ WÅ‘Ä«WÅ„ÅˆZÅ‰RZ0gRcT5oÃŸ9ENÄ¨4Ä¨Ã¬4Ã®|-Å‰fSiÄ¨0Äª6$28-Ã®Ã±QÄ›0]0{{Ä˜38AS4gÃ¼gwÃ­4(Sw314MlxhÃ¾o0Ä¾8j14Ä¬o8Ä˜}QhÅ€Ã–Ã{46Ä·4Ä§T|)ÃˆÃ’ÄŒT(kR41Äª0kÄ§dQÃ4jc(gÃ±x4TQÃÃº1Ä­Ä¨(Ä˜?Ã¢Åˆ{Ã‹Å™]64Ã¬(ÄšÄ®Ã¢Ã¬Ã«8?Ä¸QwÃ¬8gÃÃKS$g>8OÃ·Ã™Ã{4gcQj1.TI8ÅˆÄ©00Ä¸Qj1Rlh-Ã±8?Ã¡79g]Ã–wh",
"seaLantern0": "0g0g_Ã‚DYÃ‚nYÃˆ,ZÃ‚nHÃ‚DZÃˆDZÃ„DZÃŒEWÃˆ-WÃ„DY}nHÃŸÄ¢WÃ·Å¡ZÃ°Å‘ZÄ›ÃŠYÄ“$WÄ®Ã©YÄªÃšHÄ—;HÄ›ÃŠZÃ»bHÃ£Ä¡ZÃ·Å¢WÄ®Ã©HÄºÃ¶ZÄ¾Ä†WÄ¾Ä…ZÄ¶Ã¶YJÅ¢W}7HÄ¶Ã¶ZÅ†Ä–WÅ†Ä–HÅŠÄ–HÅ‚Ä†WÄ²Ã¶YPÅžWÄ—$WÅ†Ä•ZÅ†Ä…YÄºÃ¶YÄŸÃŠZÄ—{YÅŽÄ–HÅŽÄ¦HÅŠÄ–WÅŠÄ•ZÄ“;H^7HÄ®Ã¶YÅŠÄ¦WÃ„EWÅŠÄ¦HYÃ‹WÅ†Ä•Y^7WÅ‚Ä…ZÅ‚Ä–WÅ‚Ä–HJÅ¢HÄªÃ‹WÄ®ÃšHÃŸÄ¡ZÃ·Å‘ZÄ¾Ã¶ZÄºÄ…ZYÃšWPÅžHÃ£Ä‘ZÃ­Ä±HÃ°ÅYÄ—{HÃ£Ä¢WÃ‚nZ}nY048wÃŽ01ag8KK>IiEÃ†Ä¨Ä‹Ã±Ã¹y]ÃºNÃ¯SÃ³6UÄ™Ã 6cÄ‚NÃ•Ä¸Ä›Ã”aÃ®/ÃÄ¡ÅŠ[Ä·xRXÅ¡zÃ•ÄµAcÃ¼Ä¨ÄŒ9Ã»C{Ä.Åš!kÄ…gÄÄ¸Å›Ä°Ã½Ä”ÃˆÄ™NÃ‘6Ã²t6]Ä¸Å›Ä²mxRÄ™ÃÅ‹6Ã¿Ä˜cÄ«Ä¸Å›Ä²gÄ•ÃˆÃ¯JÃ‘CÃ´XÃ“ÃµÄ¹kÄ²Ã€ÄŽÃˆÄ¸JÅ‹CÄ‚X2ÄŒÄ¸Å›Ä²mÄ‰RÄ™ÃÃ¡6P0eÃ¼Å˜Å›Ä°Ã¾$ÃˆÄ™ÄšÃ‘67,Ã“PrÃ±FÃ»CÃŠÄMÅž@Ã²(2Å”ÅˆÃ DÄ·Ä‰=Ã«Å¡3f_A/Å Å mCÃ¶S*29Ä}Ä±Äª/6zÄ Ä™Ã±nwÄŽ/JÄ¹01JÃºzÃž|Ä¿>Ã›Ã¢wgÃ¶Äª^",
"seaLantern1": "0g0g^Ã‚DZÃ‚nY}nHÃˆ,ZÃ‚nHÃ‚DY}7HÃˆDZÃ„DY}nYÃŒ-WÃ£Ä¢WÃ·Å¢WÃ°Å‘YÄ›ÃŠZÄ—$WÄ®Ã©YÄªÃšWÄ—;HÄ›ÃŠYÃ»bHÃŸÄ‘ZÄªÃ©HÄºÃ¶YÄºÃ¶ZÄ¾Ä…ZÄ¾Ã¶ZÄ¶Ã¶YÃ¾Å¢WÃ£Ä¡ZÄ®Ã©HÄ¶Ã¶ZÅ†Ä…YÅ†Ä•YÅ‚Ä†WÄ²Ã¶YJÅ¢WPÅžWÃ„DZÄ“$WÄºÄ…ZÅ†Ä•ZÅŠÄ•ZÄŸÃŠYÃˆ-WÄ¾Ä…YÅ‚Ä…YÅŽÄ¦HÅŠÄ–HÄ›;YÅŠÄ–WÅŠÄ¦HÃ‚nZÅŽÄ–HÃ„EWÅ‚Ä…ZÄªÃ‹WÄ£Ã™Z^7HÅ†Ä…HÅ‚Ä–HÄªÃŠZÄ²Ã©YÅ‚Ä†HÄªÃšHÄ®Ã¶YPÅžHJÅ¢HÃ­Ä±YÃ°Ä±HÄ—{YÄŸÃŠZÄ—{H^7W04g(Ã¬SÃ°ekwÃ«Ã­?3ggÃ†Ä¨Ä‹Ã±Ã¹y]ÃºNÃ¯SX8$ÃŽÃÅcÄ‚)Ã‘Ä°Ä›Ã”eÃ­4(Å˜ÅšEgwRÃ¬2zÃ•Ä¹B{Ä…TÃ¼aV!Ã‚Ä^3@Ä¼Ã°Ã†PÃ—ÅŒ^Ã¿Ä˜KÄ¨aÄÄ­P98Ä«Ä±Ã½$Ã¿Ä—Ã“Ä¥Ã¦ÄŒ6PBÃ•SÄ±5#Ä¿!RÄ¼Ã­Ã¼afCÃ™Ã¶Ä¢l|Ã†xRÄ¨Ã¦Ã¼6ÃŠ1Ã•ÅŒÄ¢5{qÄ˜KÄ¥Ã­ÄŒ6P1kÄ„Å¡5!Ã†LKÄ¨Ã‚Ã½Ä­7/{PpÃ½Ä±Ã¹Ä‘Ã‚Ä‘ÃƒÄŸÃ°P/2MÅ’ÅŠ#Ã¹wÃŠÃ¬Ã Åšg6Bc%A8C{ÄNÃ‘Ä¨JzeÄ©ckÃŠ-ÃºÃgxuRÄœÃ­Ä©ÄŽ{Ã½!Ã€Ã‚Ã‹B^p#QÄ¹S2",
"seaLantern2": "0g0gUÃ„DZÃ‚nHÃ‚nYÃˆ,ZÃ‚DZÃˆDZÃ£Ä¢WJÅ¡ZÃ°Å‘ZÄ›ÃŠYÄ—$WÄ®Ã©YÄªÃšWÄ—{YÄ—;HÄ›{YÃ»bHÃ£Ä¡Z}nHÃ‚7HÃ·Å¡ZÄ®Ã©HÄºÃ¶ZÄ¾Ã¶HÄ¾Ä…YÄ¾Ã¶YÅ‚Ã¶YÅ‚Ä…HÄ¶Ã¶YÄºÃ¶YÃ¾Å¢WÃŸÄ‘ZJÅ¢WÄ®Ã¶YÄ¶Ã¶ZÅ†Ä–WÅ‚Ä…ZÅ†Ä…ZÅ†Ä•ZÄ¾Ä…HÄ²Ã¶YPÅžWÅŠÄ–HÅŠÄ–WÄŸÃŠY^7WÃˆ-WÄ“;HÄ¾Ã¶WÅŽÄ–HÅ‚Ä…YÄ“;W}7HÅŠÄ¦HÅ†Ä•YÅ†Ä…YÃˆEWÄ²Ã¶ZYÃ‹WÄ£Ã™ZÅŽÄ¦HÃŒ-WÄ“$WÄºÃ¶HÅŠÄ•ZÄ¾Ä…ZÄ›;H}nYÄªÃ‹WÄ²Ã©YÅ†Ä†WÄªÃšHÃ£Ä¢HÃ·Å’WÃ·Å¢WPÅžH}7YÃ‚DYJÅ¢HÃ°ÅHÃ­Ä±YÄŸÃŠZÄ›{H^7H04g(x21ag80wRÃ®08(Ãž2?bo)ÃÅ™4TiCoÄ‰Ã‚Ä¬Ä³oNÃ•Å€ÄªÄÃ¸Ã¬AÃ¬az8Ä¹B@Ã¶NÃ Ä’gF0EÄ™XÃ—Ã½Ä“Ã„Ä•ÃˆO7m%ÃŠÄ¥Ã­*Ã—Ä¼!UÄ¬ÃˆÄœÃ™ÄÄœ2.JÄÃšÃ†ÄžÃ™Ä¬Ã‚Ã‘Ã“@Ä•0%J*Ã—Å‚!UÅ„ÃˆÄœÃ“aÃ«ÃÅŒJVÃ—Äƒ!UÅ€Ä’ÄœÃ“t44Å”J*Ã—Ã½NÃ›Å˜Ã‚ÄœÄŽnÃ­Ã¦Å Å¡*Ã—Å…;UÄ‘ÃˆÄœÄÄ«Ä•0.>AÄ’Ä¼Ä“Ã„Ä•ÃŠ4Ä˜ÃŽ%Ã°Ã­AÃƒaÄ¸ÄÃµÃ¶Ãˆ]MÄ±FÃ–y{G$ÃµoÃ‘Ä¯Ä¤oÅ™IÄ²Ä))ÅÅ›7Ã½n@Ã¹Ã¼1Ã¬00Ä^J_Ã–Ä‘ÄŽP]0Ã³T>",
"seaLantern3": "0g0g|Ã‚DZÃ‚nY}nHÃˆ-WÃ‚7HÃ‚DY}nYÃ„DZÃ‚nHÃ„DYÃˆDZÃ£Ä¢WJÅ‘ZÃ°Å‘ZÄŸÃŠYÄ›;WÄ²Ã©HÄ®ÃšWÄ›{HÄ›ÃŠYÃ»bHÃ‚7WÃ·Å¢WÄ®Ã©YÄ¾Ã¶YÄ¾Ä…ZÄ¶Ã¶HÄºÄ…ZJÅ¢WÄ®Ã¶YÄ¶Ã¶YÅ†Ä†WÅ†Ä–WÅŠÄ–WÄºÃ¶YÄ®Ã©HPÅZ^7HÃˆ,ZÄŸ{YÄ¾Ä…YÅ†Ä•YÅ†Ä…YÅ†Ä•ZÄ›;H}7HÄŸ{HÅŠÄ¦HÄ¾Ã¶ZÄ›{Y^7WÅŽÄ¦HÅŠÄ–HÃ„EWÄ²Ã¶HÄ£Ã™ZÅ‚Ä…ZÃŒ-WÄ›$WÄŸÃŠZÄ—;HÄ—;WJÅ¢HÄªÃ‹WÅ‚Ä†WÄªÃšHPÅžHÄªÃšWÄ²Ã¶YÃ·Å’WÃ£Ä¡ZÃ°ÅYÄ®Ã©WÄ£Ã™YÃ¦Ä¢WPÅžWÃ‚nZ04g(Ã¬RÃ°e0SÃ¹Ã«?aiwÃ†Ä¨Ä‹Ã±Ã¹y]ÃºNÃ­Ä§Ã­!$Ä™Ã 6{ÄNÃ‘Ä°Ä‹Ã”5IgÃ€ÅÅŠDÄ·wRÃ¬1Ã¼]ÄµAe<hÃ¼EÃ€Ä‰RÃ¯a3CÃ±B{Ä…TÅ›EÃ€Ä‘UÃ¯ÃˆÄœCÃ„%2Ä¡TÅ›#Ä¼wRÄak$oÄšeSÄ±4!Ã¹xÃ“Ä¸^k6]7Ã—Ä¿Ä±5Ã—Ã¹LÃ•Ã¯Ã‚k6]Ã«2Å„ÄªQEUÄ‰=Ä‘ak6[Ã«ÃŸÅÅ™kEÃ€Ä’UÃ¯ÃˆkctÄeÅ—Ä¸Ã¼EÃ€Ä‰RÄ•ÃˆÄœ6ÃŒÄš2Å Å 3EÃ€ÄˆRÃ¬43(_RÃˆ$Äœ-Ã°{Ä NKÄ±IM?Ä©Ãˆ6OÅÅŠ7+ÃºBÃ Ä›JÃ«93%zBÄ”Ä‰_Ã¾aÃŠÄ§Å™ÄªÄ•",
"seaLantern4": "0g0g^Ã‚DZÃ‚nY}nYÃˆ,ZÃ‚nHÃˆDZÃ„DZ}nHÃŒ-WÃ„DYÃ£Ä¡ZÃ·Å‘ZÃ³Å‘ZÄ›ÃŠYÄ—$WÄ®Ã©HÄªÃšWÄ—;HÄ›{YJÅ¢HÃ£Ä‘ZÃ£Ä¢WÃ·Å¢WÄºÃ¶ZÄ¾Ä…ZÄ¶Ã¶YJÅ¢WÄ²Ã¶YÅ‚Ä†WÅ†Ä†WÅ†Ä–WPÅžWÄ“$WÄ¶Ã¶ZÄ¾Ã¶YÅŠÄ•ZÅ†Ä…YÄ¾Ã¶ZÄŸÃŠY^7HÃˆ-WÄ—{YÄ¾Ä…YÅ†Ä…ZÅ†Ä•YÅŠÄ–HÅŠÄ–WÅ‚Ä…ZÄ“;HÄ›;HÅŽÄ¦HÄ—;YÄ®Ã©YÅŠÄ¦HÄªÃ‹WÃ‚DYÄ£Ã™ZÅ†Ä•ZÅ‚Ä…HÅ†Ä…HÄºÃ¶YÄŸÃŠZÅ†Ä–HÅ‚Ä–WÄªÃšHÃ‚7HÃ·Å’WÄ®Ã¶YPÅžH}7HÃ°ÅY^7WPÅZÃ„nY04g(Ã«0Ã¬a08KÃ¬Ä«3igÃ€Ä™Ã®[fwQÃ²yÃ’0XeUÄ˜Å™Åco(KÄ¨Ã»CÃ¯78Ã•Å€Ã 7eÄ…/Ã¡Å˜Ã®CÄ´vcÃ¬azÄ®ÃºÄŒ]Ã¶pÅ‹ÄŽÃƒDÃ€ÄÃÄ¬Ã˜m%ÃŠÃºyÅŠÃ´Ä¿72Ä¬Ã¥ÅŒÃ´n%Ã‘ÄÃOÄ­pÄcÄ¸Ã¥Ä»Ã´Ã„Ä•ÃˆÄÃ—ÄªÄ­q6cÃšÃÅ‹Ã´ÃˆÄ–ÃˆÄœÅ™ÄªÄ­r,cÅˆÃÄ¾&Ã¾Ä–ÃˆÄ¡ÅOÄ­8Ã¬g-Ä°Ä®EÅ„Ä•ÃŠÅ”qOÄ—uÄcQÅÅšÃ´Ä„Ä”Ã†ÅŒqÅŽÄ­8Ä2Ã–Ä˜ÅšfÄµÄ–;Ã¤ÅÄªgbvÃ­Ã„k8Ã“co(ÃŽÅˆÃ°Ä­Ã¯QÃ³0Ã-Ä¸Ã²fuÅœ]ÄºRÄƒÃ¬cÃ¨Å ÅŸÄ™ÅŠÄ‡=uQÃ¹Ä®Ä§Ã­",
"prismarine0": "0g0g5ÃŒÄH@DHÄƒ#ZÃ¦ÅYR6Y5({Ã•IÄƒgiÃº|Ä€oÃ­)Ä¨c?8^m0wÄŽAÃ™RSÃ¯Ä˜^KmAwkÄÃ«Ä™bÃ“)Ä³iiÃˆ}6R5Cj0Ãºj9Ã­Ä¿5F0$8SFÃ­Åˆ(QÄ¯$2Ã»Ã“CÄ³Ã‘Ä«Ä§2(zPÃ¾00Ã¾4{NcÃºÄ1X1i",
"prismarine1": "0g0g5ÃŒÄ€Z&lHÄƒ#ZÃ¦Å€HBÅ‹Y5({Ã•IÄƒgiÃº|Ä€oÃ­)Ä¨c?8^m0wÄŽAÃ™RSÃ¯Ä˜^KmAwkÄÃ«Ä™bÃ“)Ä³iiÃˆ}6R5Cj0Ãºj9Ã­Ä¿5F0$8SFÃ­Åˆ(QÄ¯$2Ã»Ã“CÄ³Ã‘Ä«Ä§2(zPÃ¾00Ã¾4{NcÃºÄ1X1i",
"prismarine2": "0g0g5ÃŒqHÃ–Ä°HÄƒ#ZÃ¦Ä²HÃ‡Ä€Y5({Ã•IÄƒgiÃº|Ä€oÃ­)Ä¨c?8^m0wÄŽAÃ™RSÃ¯Ä˜^KmAwkÄÃ«Ä™bÃ“)Ä³iiÃˆ}6R5Cj0Ãºj9Ã­Ä¿5F0$8SFÃ­Åˆ(QÄ¯$2Ã»Ã“CÄ³Ã‘Ä«Ä§2(zPÃ¾00Ã¾4{NcÃºÄ1X1i",
"prismarine3": "0g0g5ÃŒÃ¦H}qWÄƒ#ZÃ¦ÅY?ÅH5({Ã•IÄƒgiÃº|Ä€oÃ­)Ä¨c?8^m0wÄŽAÃ™RSÃ¯Ä˜^KmAwkÄÃ«Ä™bÃ“)Ä³iiÃˆ}6R5Cj0Ãºj9Ã­Ä¿5F0$8SFÃ­Åˆ(QÄ¯$2Ã»Ã“CÄ³Ã‘Ä«Ä§2(zPÃ¾00Ã¾4{NcÃºÄ1X1i",
"stonecutterSaw0": "0g0g7000Å‚ÃšYZZZÄ’Ä’YÅ’Ä–YÃ­8WÃžÄ®W00000000000000000000000000000000000000000000000000000000ÃƒPÃ«00mÃ²?y00ÄŠ^MAÄ§1JÃÃ²yÃ«5oÃµPiI8Ã¼_EÃ¼Ã†cÄŠÃ›Ä»ÄŠÃ€",
"stonecutterSaw1": "0g0g7000Ä’Ä’YZZZÅ‚ÃšYÅ’Ä–YÃ­8WÃžÄ®W00000000000000000000000000000000000000000000000000000000Ã‚FÃ«00)Äƒ|m00ÄŽÅÃ–AÄ§1,jP@Sd+Ä„^+Ä€5ÄœÅ€ÃžÄœÄ·9ÄŽÅ•Ä¼ÄŽÄ¯",
"stonecutterSaw2": "0g0g7000Å‚ÃšYÄ’Ä’YZZZÅ’Ä–YÃ­8WÃžÄ®W00000000000000000000000000000000000000000000000000000000ÃƒÃ•Ã«00CÄ°Ã’Äœ00Äš_%ÄžS1JÃ‡ÃšÄ©Ä§9JÄ²Ã›iÄ·cÃ¾^(Ã¾Ã†cÄšÃ›Ä»ÄšÃ†",
fire: "0g0g=000ÄgWÄ™0WÄ¡wWÄ¡SWÄwWÄ¥Ã€WÄ¨Ã«WÄ¬ÄˆWÄ¡(WÄ¥KWÄ´Ä§HÄ´Ä·HÄ°ÄˆWÄ¬Ã¹WÄ°Ä˜WÄ¸Å—HÄ½wYÄ½(ZÄ¨KWÄ¨ÃWÄ´Å‡HÅÃWÅÄšHÅ…ÃžYÄ¬Ã«WÄ¹0YÅSZÅ‰ÄšHÅ‰ÄŠWÅ‰ÃºZÅšÃ„ZZÅ•ZÅ–kYÅTWÄ°Ä˜HÅ…ÃŽHÅ‘ÅŠWÅ‘ÅŠHÅžÄZÅšÃ„HÅžÃ¤WÅ–*HÅžÄHÅ’4WÄ¹gYÅÅŠWÄ½wZZÅ•WZZZÅ…Ã¬YÅ’3ZÅšÃ”WÅ‘ÅšYÅšÃ„YÅ¢Ä³ZÅ–AZÄ½gYÄ¥SWÅ¢Ä³YZÅ„YÅÄ©Y0000000000000000000000000000000000000000gS0024g00000M18gR0000000ÃÃ±wKS00000Ä°EÄ›c(Ä·S00003Ã¶<4Ã‚SÄ·Ä§0000ÄŠe|>VÃ‡Ã£fE001Ã¾Ã¶<ÄŸtÃ¥ÅŸxÃ²Ã’00Ä€Å‹Ã¥Ä°Ã“Ä†Ã³Ã—Ä–Ä²S0Ä£Ã¾Ä¥Ä“Å—Ä®sÄŒÄÃ’01>Ã·h{Å˜Ä®||Ã€Ã£S1h2Ã|Ä™Ä®sÃ‰Ag00Å£ÃžSÃ“Ä™Å†pÃ¤Ä®uÃ¦3sÃ§UÃ¿;wÄ‹Ä¥Ä¬Ã¬Ä§",
"fire0": "0g0g=000ÄgWÄ™0WÄ¡wWÄ¡SWÄwWÄ¥Ã€WÄ¨Ã«WÄ¬ÄˆWÄ¡(WÄ¥KWÄ´Ä§HÄ´Ä·HÄ°ÄˆWÄ¬Ã¹WÄ°Ä˜WÄ¸Å—HÄ½wYÄ½(ZÄ¨KWÄ¨ÃWÄ´Å‡HÅÃWÅÄšHÅ…ÃžYÄ¬Ã«WÄ¹0YÅSZÅ‰ÄšHÅ‰ÄŠWÅ‰ÃºZÅšÃ„ZZÅ•ZÅ–kYÅTWÄ°Ä˜HÅ…ÃŽHÅ‘ÅŠWÅ‘ÅŠHÅžÄZÅšÃ„HÅžÃ¤WÅ–*HÅžÄHÅ’4WÄ¹gYÅÅŠWÄ½wZZÅ•WZZZÅ…Ã¬YÅ’3ZÅšÃ”WÅ‘ÅšYÅšÃ„YÅ¢Ä³ZÅ–AZÄ½gYÄ¥SWÅ¢Ä³YZÅ„YÅÄ©Y0000000000000000000000000000000000000000gS0024g00000M18gR0000000ÃÃ±wKS00000Ä°EÄ›c(Ä·S00003Ã¶<4Ã‚SÄ·Ä§0000ÄŠe|>VÃ‡Ã£fE001Ã¾Ã¶<ÄŸtÃ¥ÅŸxÃ²Ã’00Ä€Å‹Ã¥Ä°Ã“Ä†Ã³Ã—Ä–Ä²S0Ä£Ã¾Ä¥Ä“Å—Ä®sÄŒÄÃ’01>Ã·h{Å˜Ä®||Ã€Ã£S1h2Ã|Ä™Ä®sÃ‰Ag00Å£ÃžSÃ“Ä™Å†pÃ¤Ä®uÃ¦3sÃ§UÃ¿;wÄ‹Ä¥Ä¬Ã¬Ä§",
"fire1": "0g0g/000Ä™0WÄgWÄ¡wWÄ¥SWÄ¥KWÄwWÄ¡(WÄ¨Ã«WÄ¬Ã¹WÄ¨KWÄ¥Ã€WÄ¨ÃWÄ°Ä˜WÄ´Ä·HÄ´Å‡HÄ¬Ã«WÄ¹0YÅSZÅTWÅÅŠWÅ–*YÅ‰ÃºZÄ¸Å—HÄ¹gYÅ(ZÅÃWÅ…Ã¬YÅ–kYÅ‘ÅšYÅ–kHÅÄºWÅ’4WÅ‰Ã¬YÄ½gYÅšÃ”WZZZZZHÅÃŽWÅ‰ÄšHÅ–AZÄ¡SWÅš@WÄ°Ä˜HÅ¢Ä£YÅÄ©YÅÄ¹ZÅžIZÅšÃ„YÄ´Ä§HÅ–*HÄ¬ÄˆWÄ½(ZÅ‰ÄŠWÅ…ÃžHÄ°Ä§HÄ°ÄˆWZZW0000000000000000000000000000000000000000gÃ«0000000000gÄ«kK000000TsÃ­PAÄˆ000002Ä³(ÄºÃ¸)Ä§S0000ÃÃ¯gÄœd?A^o000>{wÅ›J|?Ã„ÃŠÅˆÃ«0AoÃ’ÄŽÄ½ÃžÄ¾Ä‡Ã­jS0Ã°ÄŠÃŠÅ›ÃJÃ‡JÃˆyÄ§0Äš8sÄ‘Å‹JÃ¯Ã²EÄ‰00Ä·Ä§ÄŒÄAJPhog00Ã³ÄŒÄ”ÄÅ“Äš_Ã›JÄ‹S2Å (Ä«Ã£Äš)Ä³Ä½Ä¥Ä‹03<*ÅPAÅƒÄ†AÃº&Ã‘",
"fire2": "0g0g.000Ä™0WÄgWÄwWÄ¡SWÄ¥Ã€WÄ¥KWÄ¡(WÄ¥SWÄ¨ÃWÄ¬Ã¹WÄ¬ÄˆWÄ¨Ã«WÄ¬Ã«WÄ°Ä§HÄ´Å‡HÄ°ÄˆWÄ¸Å—HÄ¹0YÅ…ÃžHÅ‰ÄŠWÄ½wZÄ½(ZÅSZÅ‰ÄšHÅ…Ã¬YÅ‰ÃºZÄ½wYÄ¨KWÄ´Ä·HÄ°Ä˜HÅ‘ÅšHZZZÅšÃ”WÅ(ZÄ½gYÅTWÄ¡wWÅ…ÃŽHÅ¢Ä²ZÅÅŠWÅÃWÅ¢Ä’WÅ–AZÅšÃ”HÅžÄWÅ¢Ä’HÅš@WÅÄ©YÅžÄZÅ‘ÅŠHÅ’4WÅÃŽWÅžÄHÅžGZÅ¢Ä¢ZÅ…ÃŽW00000000000000000000000000000000000000000Rcg00000004T@kÃ000000Ã±wJÃ´(S000001Ä®sÃžÃ¶-Å›70000y?kÄ›Ä¸P*l$Ã¹001}<BÃ¿Ã@pÃ–ÄŸ00QÃ‹.ÅŠÅ†Ã­oÄ‹Ã¹Å S0MÃ°sÃ‡ÄˆÄ†Ã³|kÃ€Ã«0KÃ«cÃ„wÃ­aÄ…8000Ã„Ä“)>Å“ÄžÅÄÄ¥Ä03cÃŸRUÄ˜-JÅÄ´ÃS0Ä¿Å›ÃŒ8w.Ä©ÄˆÃ¬Ã—Åœq6Ã£Å…Å“Ä½Å‰8rÃ¡Ä¾T",
"fire3": "0g0g/000ÄgWÄwWÄ¡(WÄ¡wWÄ™0WÄ0WÄ¡SWÄ¥KWÄ¨KWÄ¥Ã€WÄ¬Ã«WÄ¬Ã¹WÄ¬ÄˆWÄ°Ä˜WÄ°Ä§HÄ½gYÄ½(ZÄ´Ä·HÄ¨Ã«WÄ´Å‡HÄ¹0YÅTWÅÃWÄ½wZÄ´Ä§HÅ…Ã¬YÅšÃ”YÅ‘ÅŠHÄ¹gYÄ¸Å—HÄ°ÄˆWÄ½wYZÅ„HÅš@HÅ‰ÃºZÄ¨ÃWÄ¥SWÄ˜Å—WÅ…ÃŽHZZZÅžÄHÅ‘ÅšZÅ–kYÅšÃ„YÅšÃ„HÅ…ÃžYÅ‰Ä‰ZÅ¢Ä³WÅžGYZÅ•HÅ–*HÅ’3ZÅSZÅ’4HÅ–AZZZWÅ…ÃžH0000000000000000000000000000000000000000gÃ®gÃ€00000068ÃŸ9Eg000001T4xÄ¯$Ä©500000Ä«gÃ»}<4Ã‚wS000Äº)ÅœlÃ‡Ã¢Ä¸ÃŽÃ¹Ã«0j|(ÄªÅÃšÄ®ÃŒVÅ˜S0ÃÄ®8Ã¤xÃ³,Ã‘Ã¼(00FÃ«kÃ¥ÅÄŠÄ‚Ã¶k000ADE)Ä“ÄšÅ€Ä¸Ã¶Ã€Ã«1qÄ–$AÄ<OwÄ¥Å‡Ä§0Ã±ÄˆÃ…aE/UÅ˜Ä°Ã„Ä6Ã¯ÅƒÄµÄ´*ÃŒÃ³w;Ä®Ä§bÃ‘ÄŸÄŠÃ³EÄ‹Ãª.ÄˆÄ§0",
"fire4": "0g0gM000Ä™0WÄgWÄ¡(WÄwWÄ¥Ã€WÄ¨KWÄ¨ÃWÄ¬Ã¹WÄ°Ä§HÄ´Ä·HÄ¨Ã«WÄ¥SWÄ¬Ã«WÄ°ÄˆWÄ¸Å—HÄ¹0YÄ¹gYÄ´Å‡HÄ¥KWÄ½(ZÅÄ¹ZÅ…Ã¬YÄ´Ä§HÄ¡wWÅ–BWÅ‘ÅŠWÅÃWÄ½wYÅžIYZZZÅ–kYÄ°Ä˜WÅÄ©YÅ’4WÅ‘ÅšYÄ½gYÄ¬ÄˆWÅ…ÃžHÅSZÄ¡SWZÅ”ZÅ–kHÅ‘ÅšZÅ¢Ä’HÅšÃ”YÅžÃ¤WÅÄºWÅ…ÃŽH00000000000000000000000000000T4000000000wÄªg000000000h3kÃ000000T4MÃ±wJÃ´g0000{oÄºÃ²<4Ã‚EÃ004Ä­oÃŸkVÃ‘Ã²ÃŠÃ001o8)ÄÃ–ÄšÃ¯cw00000[tÃ¥ÅœÃ±00008ic]xÃ³*fJÃ€00ÄÄ„{FÃ‘Ã«Ã Ã‚Ä†0S2Ã­Ã‚!DÄ‘wMÃ½Ã’Aw2Ä‘CÃ°ÄUÃÅ’gÃ«ÄšÄ§1ÃÄŠÃ¥ÅŽÄ†Ã¦Ä“Ã‰Ã¤Ä˜0Ã¦Å‰LÃ¥ÅŽÄ†Ã“.Ä†Ä‚cd",
"fire5": "0g0g*000Ä™0WÄgWÄwWÄ¡(WÄ¥SWÄ¥Ã€WÄ¨Ã«WÄ¬Ã«WÄ¡SWÄ¨ÃWÄ°Ä˜WÄ°Ä§HÄ°ÄˆWÄ´Å‡HÅÃŽWÄ½wZÄ¬Ã¹WÅ‰ÄŠWÅ…Ã¬YÄ½gYÅ’3ZÅžIZÅ‰ÄšHÄ½wYÄ¥KWÅ…ÃžYÅÄ©YÄ¸Å—HÄ¹0YÄ´Ä·HÄ¬ÄˆWÅžÄHÅ–kYÅÃWÅ‰ÃºZÅ…ÃŽHÅžIYÅ‘ÅšYÄ¹gYÅÄ¹ZZZZÅÅŠWÅ‘ÅšZÄ½(ZÅžÃ¤WÅ‘ÅŠHÅÄšHZÅ•YÅ–*WÅ…ÃžHZZHÅ¢Ä’Y00000000000000000000000000000R40000000000Rc(00000000x5oÃŸ9000003gÃI$ÄªdwS000Ä°AÃ‚Ã·<2Ä¸QÃ€000R4zÃ‚|>Pcg00000zÃ½Ã‡Ã£600006]8kÃˆÃšDb$K00ÄÃŒAiÃ·)ÄŠÃ´-Ã00A_Ã©ÄxEMÄŠÃµÄ›Q2DÃ¼ÃºEÄ»Ã£Ã‡Ã·Ã¨Ä‰Ã«2Ã EÄŽÄ‚Ã–ÄŽÄ’Å“ÄÃ¹0ÄŽÅ‹ÃœÄ©Ä‚Ã–Ä­Å£Ä‘Ã²nÃ­Ä/Ã“Ä‚Ä‚ÃÄ„ÃÄœÃŽÅS",
"fire6": "0g0gM000Ä™0WÄgWÄ¡(WÄ¥SWÄ0WÄwWÄ¡SWÄ¥Ã€WÄ¨ÃWÄ¬Ã«WÄ¨KWÄ°ÄˆWÄ¹0YÄ´Ä·HÄ¥KWÄ½(ZÄ¨Ã«WÄ¡wWÄ˜Å—WÅ‰Ã¬YÅ‘ÅšYÅÃWÅ…ÃžHÄ°Ä§HÄ°Ä˜WÄ¬Ã¹WÄ¬ÄˆWÅÄ¹ZÅ…Ã¬YÄ¸Å—HÄ½wZÄ´Ä§HÄ¹gYÄ´Å‡HÅÄ©YZZZÅ‰ÃºZÅÄšHÅžÄWÅ¢Ä¢ZÅ–kHÅžÃ²WÅžGYÅ‰ÄŠWÅ…ÃŽHÅ–kYÅžIZÅTW00000000000000000000000000000040000000000RcT2000000kÃŽÄ¯AÄŠÃ´gg0002oÃŽc)Å‰Ã´;K00000iÃ€SÅ‹Ã‚4000001OkVÃÃ®00001Ã±02Ã€Ã‹Ã“9$w01C^82pÃ•Ä›Ä±Ã™S002Ä¸AÄ¾t;wÅ…Ã©i026ÄµÃ¯Ã’ÄŠ/*Å€QÃ«Ä§1Ã»tJPAJÃ‡|Ä€S0Ä…Ã£ÄÄŠPAÄÄ¼ÄŒÃ¨JSJÄ’Å“ÃŸP%Ã¤IÄ–Ã¯Ä˜Ä§Ä¦.AÃ»ct5oÄ…Ã‘ÄŽS",
"fire7": "0g0g%000Ä™0WÄgWÄ¡wWÄ¥SWÄ¥Ã€WÄ¡(WÄ˜Å—WÄwWÄ¨ÃWÄ°Ä˜WÄ¬Ã¹WÄ¡SWÄ´Å‡HÄ¬ÄˆWÄ½wZÅ…ÃžYÄ¹0YÄ¸Å—HÄ½(ZÄ¹gYÄ¥KWÄ¨Ã«WÄ¨KWÅSZÄ½gYÄ´Ä·HÄ´Ä§HÄ°Ä§HÄ¬Ã«WZZZÅžGYÅÃWÅ…ÃŽHÅšÃ”HÅ‘ÅŠHZÅ•YZÅ„WÅ–kHÅÅŠWÅ‰ÄŠWÅTWÄ½wYÅšÃ”YÅšÃ„Z0000000000000000000000000000004wÃ«0000000gÃ®gÃ@800000si9EÄ™{o0000001|)ÅˆR00000002~TiÄ©00000101Ã‚|RÄ«c0005Qs1Ã¾AÃƒ5ÃŠw0035gÄŽp(iaÃ•Ã€Ã«1Ã¢Ä²ÃšmÃŠ.)Ã‹UKS1Ã¢Ä€Ã¥ÅŽÄ†Ãª6q;Ã«0Ã¯lÄˆÃ²ÅŽÄ†Ã·3Å‹]Ã€Ä§Ã¾Ã–Å‡Ä‰ÅŽÄ‰)Ã„Ä)Ã¹Ã«ÄŠÃ±Ä†Ã¦Ã¼Äº8Ã‚Ä’%VSFÄ’Å…Ã¥(Io3t&Ä®Å…",
"fire8": "0g0gO000Ä™0WÄgWÄwWÄ¡SWÄ¨ÃWÄ¥KWÄ¡(WÄ¬Ã¹WÄ¬ÄˆWÄ¥SWÄ´Ä·HÄ½gYÄ°Ä§HÄ°Ä˜HÄ¸Å—HÄ¨KWÄ¥Ã€WÄ¡wWÄ¬Ã«WÄ´Ä§HÄ°Ä˜WÄ¸Å—YZZZZZYÅÅŠWÄ¹gYÄ°ÄˆWÄ½wYÅ–kHÅ¢Å„WÅ‰ÄŠWÅ–kYÅÄšHÅ…ÃžHÅ…Ã¬YÅ¢Ä³HÅÃWÅTWÄ¹0YÅ…ÃžYÅ¢Ä’YÅ¢Ä£HÅSZÄ´Å‡HÅšÃ„YÄ½(ZÅÄ©YÅ’4WÅÃŽWZÅ„Y0000000000000000000000000000018(Ä¨00000000QkÃŽÄª40000000Ä¯AÃÄ§00000002Ã´(Ä¸Ã«00000001Äµ;Äœ340000Ä©00ÃºoQÃ±s0000Ã®cÃ‚Ä´]0?{(00MÄ­{Ä¹Ä¯l?@gw00Ã¡Ã„Ã‹Ã¯Ä¾Ã’Ä‹Ä°)g0ÃšUsÃ¢Ã¢Å…Ã¨ÄªÅ‡)Ã0Ã¯ÅŸÄ„Ã¶Ã¥BÃlÃ“)Äˆ0Ä†Ã³Ã…Ä’ÄŸf8R$kSÄ§?_Ã…ÃŒÅ‡Ã­80Ä­lÅ¢Å—Ã‹ÅœÃžGAU}(Ã¬@ÅŠÄ¨",
"fire9": "0g0gO000Ä™0WÄgWÄ¡(WÄ¥Ã€WÄ¨KWÄ¡SWÄwWÄ¬Ã¹WÄ°Ä§HÄ¨Ã«WÄ¬Ã«WÄ°Ä˜WÄ˜Å—WÄ¨ÃWÄ¥SWÄ°Ä˜HÅ–BWÅš?ZÅžÃ¤WÅ–*YÅ…ÃŽHÄ´Ä·HÄ¡wWÄ¥KWÄ¸Å‡HÅÄ©YÅžIYÅ¢Ä£YÅšÃ„ZÄ´Å‡HÄ´Ä§HÅ…Ã¬YÄ¸Å—HÄ½(ZÄ½gYÅÃWÅžGZÅšÃ„YÄ¹0YÅSZZZZÄ½wZÄ¬ÄˆWÅ–AZÄ½wYÄ¹gYÅTWÅ‘ÅšHÅ‰ÄŠWÅžÄW0000000000000000000g0000000002c(Ã«00000000QkKÃ«00000001Ä¯AÄˆÄ§00000000Ã´(Ã¬Ã¬000000003oÃÃ­400001)NÄµ803;g000Ã®gÄš5;ÅŠÃ®sÄ·000Ä·?AÄ»VÃe-00Ã‹Ã®Å€Ã–ÄŸtVÅŽÅ‡$g0Ã°EÅ…JÃ‡ÄŠ(RDwÃ0yXÄ‘Ä‚Ä‘Ä°8ÃžÃ˜gÃ08Ä²FÄŽÄ·Ã¬40Ã°iÄ¿Ä–Ã—ÅšlÄ¨>ÄµigSpÅŒÃ«ÄŠ;Ã‹Ãˆ3ÄªÄ°ÃƒÄŽÄ¬Ãžd",
"fire10": "0g0gL000ÄgWÄ™0WÄwWÄ¡(WÄ¥Ã€WÄ¨Ã«WÄ¨KWÄ¥SWÄ¡SWÄ¡wWÄ¥KWÅ…Ã¬YÅ‰ÄŠWÅÄ¹ZÅ‰Ä‰ZÄ¹0YÄ¬Ã¹WÄ¨ÃWÄ°Ä˜WÅ…ÃžHÅ–kHÅš?ZÅ‘ÅŠHÄ½wZÄ´Ä·HÄ°Ä§HÄ°Ä˜HÄ½wYÅ’3ZÅ‘ÅšYÄ½gYÄ¸Å—HZZZÄ´Å‡HÄ¬ÄˆWÅ‘ÅŠWÅÃWÅÄ©YÄ¬Ã«WÄ°ÄˆWÅTWÄ´Ä§HÅ‰ÃºZÅšÃ„YÅÅŠWÄ½(Z0000000000000000004w0000000003gg000000000Ã¯oÃ€Ã«000000005oÃS000000001cg00000000y9001400002EÃ‚Ä°cÃº180000@(ÄºÃ¸TkÃ²A000NÃ»ÃVÃ¿ÃŽ)Ã€k00tÃ¾ÄƒÃžÄ¾Ä‡QÃ¼Äƒsw0i3Ä‰Ã¥8Ä‹8iÃ‚gw01pxÃ¯0S003hÄŽÃ±Ã­4ÅŒÄ‚ÃŽ9!Ã0!XS}!Ã“Ä‘Ä©>Ä2Å’ÃM04Ä¾ÄÃ¨_xÄœÄ‰ÄƒÄ¢mS",
"fire11": "0g0gL000Ä™0WÄgWÄ¡wWÄ¥SWÄwWÄ¥Ã€WÄ¡(WÄ˜Å—WÄ¹0YÄ½(ZÅTWÄ½wYÄ°Ä˜WÄ¥KWÄ¡SWÄ0WÄ¬Ã«WÅ‰ÄŠWÅÄ¹ZÅ…Ã¬YÄ´Å‡HÄ¨KWÄ¨Ã«WÄ¬Ã¹WÄ¸Å—HÅ‰ÃºZÄ¨ÃWÅ…ÃžHZZZÄ°Ä§HÅ¢Ä’YÄ°ÄˆWÅSZÅÃWÄ°Ä˜HÄ´Ä·HÄ½wZÅ…ÃžYÅ‘ÅŠHÄ¬ÄˆWZÅ•ZÅ–BWÅ–AZÅ–kHÅšÃ”YÅšÃ”W000000000000000001800000000003gÃ€0000000003oÃ000000000840000000000Ã­0000000004ÃÄ©4wS000004AÄŠÄ³)ÅŠÄ¬80004hMAÄ»VlÃ¶s005Ã¡Ã†Ã’CÄÃ™ÃžÃ¿;000Ä¾tÃ–Ã…Äƒ4hQ8001ÄžÄ‡Ã¢Ã€Ã«0019ÄÃ¬Ã†Ä¿xÃ‚xR4Å—09ÄÃ«gÄ¹ÃÃ·SÄ©Ã¼ÄºÄ°Ã¤wS0Ä‘Ã¶Ã¹Ã¥Å„]Ã Ä€BÅ0Ä,Ã—Ä–aÅ“Ã£Ä¾Ã‹Ã£rÄ…",
"fire12": "0g0gM000Ä™0WÄgWÄ˜Å—WÄwWÄ°ÄˆWÄ´Ä·HÄ´Å‡HÄ°Ä§HÄ¨ÃWÄ¡(WÄ¥Ã€WÅÃWÅ…ÃŽHÄ½(ZÄ°Ä˜WÄ¡SWÄ¨KWÄ¥KWÅTWÄ½gYÅšÃ”WÅSZÄ¬ÄˆWÅ–*HÅ¢Ä£WÄ¬Ã¹WÄ½wYÄ¹0YÄ¨Ã«WÄ°Ä˜HÅ…Ã¬YZZZÄ¡wWZÅ•WÅ‰ÄšHÅÄ©YÅÄ¹ZÅ’3ZÅ‘ÅšZÅ¢Ä’WÄ½wZÅÄºWÅ–kYÄ¸Å—HÅžIZÅ’4WZZHÅ–*Y0000000000000000018(0000000001gw000000000000000000000000000000000S000000002kÃŽÄ¯AÄˆÃ«00000boÄª};Äœh40012Ä¹x)Ä¯]RÃ´8000Ã½lÃ†Ã¯Ä²00Q0000Ä›oÃ‘Ã«S0000Ä‰04Ã¾ÄƒMÄ§Ã«0g012Ã«5Ä¹sÃ‹ÃÃ¬Ã¥hqAg00Ã“ÅÃŠÄÅ‡NkhqASÃ¶ÅŸAÃ©Ä‘Ã“Ã­Ã¤wÄŠÄ‚Ä“2Ä²KÄ¢ÅžÃ‘Ã®4Å‚M-w",
"fire13": "0g0g%000Ä™0WÄ¥Ã€WÄ¨Ã«WÄ¬Ã¹WÄ¨ÃWÄ¡(WÄ¡wWÄ¸Å—HÄ¹gYÄ´Å‡HÄgWÄwWÄ¡SWÄ¹0YÄ´Ä§HÅ‰ÄŠWÄ¬ÄˆWÅÄ©YÅ’4WÄ¥SWÄ½gYÄ°Ä§HÄ¬Ã«WÄ¨KWÄ´Ä·HÄ½wYZZZÅÅŠWÄ½wZÅš@HÅÃWÅ…Ã¬YÅÄ¹ZÅ‰ÃºZÅšÃ”HÅ¢Ä’WÅ…ÃŽWÅ–kYÅÄšHÅ–BWÅ(ZÄ½(ZÅžÄYÅ–AZ0000000000000000004000000000000000000000000000000000000000000008M5og0000007gÃ­^kÃÄ®0000jdgÅŠX)iÄ³0000ÄºÄ·xh|0010000ÃJ{SS0000g01T]UÅ—00000Ä˜S1TmÃŠÃ€SKKRo000@?kÄ­Äƒ-Ä›d?Ä¨Ã«FÄ¾Ä‡U-xÃ›EÅ‹{ÅÃˆ1ÄÄƒÄ†Ã¯ÅŽÃ›Ã³VÄ’Ã¾Å‚1Ã¼Ä‡Ãˆ6Å’ÄšÄ­Å‚ÃšÄžÅ‚",
"fire14": "0g0gL000ÄwWÄ¡SWÄ¥SWÄ¡(WÄ™0WÄ¥KWÄ°Ä˜WÄ°Ä§HÄ¬Ã¹WÄgWÄ¨ÃWÄ¨Ã«WÄ½wYÄ¥Ã€WÄ´Ä§HÅÃWÅ…Ã¬YÄ´Å‡HÄ¨KWÄ´Ä·HÅ¢Ä£YÄ½(ZÅ‰ÄŠWÄ¹0YÅ‰ÃºZÅšÃ„YÅ‰ÄšHÅ‘ÅŠHÅ‰Ã¬YÄ¸Å—HÅžGYÅ…ÃŽHÄ¬Ã«WZZZÅ‘ÅšYÄ½gYÄ½wZÅšÃ“ZÅžIZÅ(ZÅ‰Ä‰ZÅ¢Ä²ZÅ¢Ä£WÅ¢Ä³HÅžÃ¤WÅ’3Z0000000000000000000000000000000000000000000000000004wÄ«k00000005oÃŸ9cÄˆ500000aoÃ­b4050000Ä‹dsÄ›Ã¬0000000ÃƒÄ·QÄ˜00000000hÃ¸]Ã¹00000000hÃ²{(04Ã€ak000Å‰}cÄlwÃT|ÃŽS.?Ä¿x*ÄÃ–Ã“ÅƒÃ¢[Ã´0Ã¢Å†Ã¬Ä€Ã‡Ã³.oÃ]ÄŠ0Ä€By8ÄŽÃ·-ÄŠÃ³EÄŠCFÅuÄ€Ä’Ã¦ÄŸÃ™ÄžEÄ–",
"fire15": "0g0g(000Ä™0WÄgWÄ¡(WÄ¨ÃWÄ¨Ã«WÄ¥KWÄwWÄ¬Ã«WÄ¬Ã¹WÄ¥Ã€WÄ¥SWÄ°Ä˜HÄ¹0YÄ½gYÄ¡SWÄ¬ÄˆWÄ°Ä˜WÅÄ©YÄ˜Å—WÄ½wYÄ¸Å‡HÅSZÅÄšHÄ´Å‡HÄ½wZÅÃWÅÄ¹ZÅÃŽWZZZÅ‰ÄŠWÄ¸Å—HÄ´Ä·HÅšÃ„ZÅ‘ÅŠWÄ½(ZÅ–kHÅžIZÅ¢Ä’YÅ’4WÅ…Ã¬YÅžGZÅ–AZÅžÃ¤WÅ‰ÃºZÅžÃ²WÅ‘ÅŠHÅ…ÃžH0000000000000000000000000000000000000000gÃ¬000000000cT@s00000000cÃ­^40000002Ä³kÄˆÄ¨00000002d-Äˆ000000003Ä·QK000000000Ä­$Ã00000000yÃ®siik0jdg00Ã¯cgÄÃ„Ã‹Ã°ÃˆÃ€JR0Ã„Äƒ.ÃºÃŠÃ¢ÅŽÅ‡Ã¬ÅŸÃ0Ã’v@,Ã‘Ã‹FÃ‹Ã£Ã”Ã“<Å€Ä´CÃ±Ã–ÃªÄ’BÄ•Ä¾Ã™Ã£Ä¾Ã‹Ã£ÅŽÃ‹Ã£0Ä«Ã¢Ä½Å–",
"fire16": "0g0g)000Ä™0WÄ¡(WÄ¡SWÄ¡wWÄgWÄ¥Ã€WÄwWÄ¨ÃWÄ°Ä˜WÄ°Ä§HÄ¨Ã«WÄ½gYÄ¥SWÄ°ÄˆWÄ¸Å—HÅSZÄ¬ÄˆWÄ´Å‡HÄ¨KWÅÃWÄ´Ä·HÄ½wYZÅ„YÅÃŽWÄ°Ä˜HÅ‰ÄŠWÄ¹0YZZZÅÄ©YÅ…Ã¬YÅ‘ÅšZÅ¢Ä£YÅš@WÅ¢Ä’HÅ‰ÃºZÄ´Ä§HÅ–AZÅ‰ÄšHÅ…ÃŽHÅ–*YÅšÃ„YÄ½(ZÅ–*ZÅÄºWÄ¬Ã«WZZHÅžGZZÅ”ZÅ‘ÅŠWÄ¬Ã¹WÅ‘ÅŠH0000000000000000000000000000000000000004wÄ«000000000kÃŽÃ±00000001]oxÄ§00000001Ã²Ew000000001Ä¯$w000000001>gg000000001541Ãµc004K00Ä¹I)Ã Ã¸TiJFMÃ«0ÃÄ»VUÄ½Ã‹Ã­Ã².Ã¾Äƒ0BV?ÄŸtÃ¥ÅŽÅ‡ÃŸnt6EÅ‹%[B=Ã–ÅÄÄ®!ÃŸÄŸsÃŸÄ®sÃžÃƒÃšÄ¡Ä®~-Ä®ÃŠÃŸÅž(Ä®BÃŸÄ´Ä®s",
"fire17": "0g0gL000Ä™0WÄgWÄwWÄ¡(WÄ¨ÃWÄ¥Ã€WÄ¬ÄˆWÄ¥SWÄ°Ä˜WÄ´Ä·HÄ¥KWÄ¬Ã«WÄ¸Å—HÄ¬Ã¹WÄ´Å‡HÅ’4HÄ½gYÄ¨Ã«WÄ°Ä§HÅ–AZÅ…ÃžHÅSZÅ…Ã¬YÅ–kHÅ¢Ä³YÅÅŠWZZZÄ½wYÅÄšHÄ½wZÄ¨KWÅÄ©YÅÃWÅ‘ÅŠHÅ–kYÅ¢Ä£WÅÄºWÅ¢Ä£HÅšÃ”HÅžÄZÅ‰ÄŠWÄ¹gYÅÄ¹ZZÅ„ZÅžÃ¤WZÅ•H0000000000000000000000000000gÃ¬0000000000M1000000004cwS00000000Ä¬kw000000000@ow000000000280000000000S00Ã±8000w00x]8hPEÄ™{kSÃ«0N|-Ä¨Ã¸TjÃµkÄ«?0hÄ®P*lÃ‡Ã’Ä¿Ã’ÄŽÅƒ1Ä¾Ã·Ã©ÅÅ‡!lÄŠÃ¶ÄžÄ±JÃ‡ÄƒÃšÄ½Å‚ÃšMÃ·Ä†Ã³}ÃªÄ’Å‚Ã›Ã£Å“Ä”ÅŠJÄ•Ä¡Ä1ÄšÃ½ÄÄžÅ•-ÅÅ‚ÃšÃ°Å‚",
"fire18": "0g0g+000Ä™0WÄ˜Å—WÄ¡(WÄ¡SWÄwWÄ¡wWÄgWÄ¨ÃWÄ¬Ã«WÄ¬ÄˆWÄ¥Ã€WÄ°Ä˜WÅ…ÃžHÄ´Ä§HÄ¨KWÄ°ÄˆWÄ¥KWÄ¬Ã¹WÅ…Ã¬YÄ½wYÄ¹0YÄ½wZÅ’4WÅ…ÃžYÅ–BWÄ¹gYÄ´Ä·HÄ¸Å—HÅš?ZÄ°Ä§HÅ‰ÃºZÅÄ¹ZZZZZZYÅš@WÅžIYÅ‘ÅšYÅ–*YÅÄ©YÅ¢Ä³HÅ¢Ä¢ZÅ‰ÄšHÅ‰Ä‰ZÅšÃ„YÄ´Å‡HÅÃWÅ–AZÅ–kHÅ‰Ã¬YÅ…ÃŽHZÅ•WÄ°Ä˜HÄ½(Z0000000000000000000000000000gS000000001800000000003g00000000005o0000000000100000000000000400000000Ä®018A(Ä«cg00ya$Ä˜Ä³)ÅŠÄ²$Äœ703Ä¯?AÄ»VVÃ»Ã‹Ã°Ã‚1ÄŽÄ¯%Ä®|Ã¥ÄŽÄ‡Ã­oÃ²Ã¨Ä¿ÅˆÃ¯.xXÄ©Ä¹Ã¾Ã_pÄ°ÅÃ°Ã•Ã–ÄÃ¼]Ä–r!2rÃ›Ä¦oÃ‘]Ä€ÃŽÃ±8ÃŽ0Å£ÃŽÄ£$Å‚Ã„oÃŽÄ‡|]",
"fire19": "0g0g;000ÄgWÄ™0WÄ¡(WÄ¡SWÄ¥Ã€WÄ¡wWÄwWÄ¨ÃWÄ¹0YÄ¬Ã«WÄ¥SWÄ¨KWÄ´Ä·HÄ´Ä§HÄ°Ä§HÄ½gYÅ…ÃŽHÄ½wYÅ…Ã¬YÄ¬Ã¹WÄ°Ä˜WÅ‰ÄŠWÄ½wZÄ¬ÄˆWÄ´Å‡HÅTWÅšÃ”HÅ–*YÅÄ¹ZZZZÅ¢Ä³HÅÃWÅ–kHÅš@WÄ¨Ã«WÅ‰ÃºZÅÅŠWÄ½(ZÅžÃ¤WÅ¢Ä’YÅ’4WÅ‘ÅŠHÄ¸Å—HÅ’4HÅÄºWÅ¢Ä²ZÅ–BWÅžÃ¤HÅ‘ÅšYÅžÄYÅSZÅ…ÃŽWÅšÃ“ZÄ¸Å—YÅÄ©ZÄ¹gYÅžGYÅ‰ÄšHÄ°Ä˜H00000000000000000000000000000000000000140000000000280000000000000000000000000200000000Ã«00>gwÃ­80000Ä¬oÃ]AÄ‰3sMS00Ä²cÄ©|-ÅšÃ€?AÄª1RÃ´dVÃ¿KÄ½Ãˆ|ÄŸ4*7ÃŒÃª8ÃŒÃ²RÅŠJÃ‡Ã¬0Å€DÄŠÃ¿Äƒ{Ã¬5?Å‘Ä“2ÄªÃ“ÄžÅŽÄ—Ã€ÃµuÃ§sÄ‘0Ã†uÄ¶||Å€ÅŽÄ†ÅƒÅ…3ÅˆÅ•ÃŽÅ’Ä5ÃºÅŽÄ…ÃºÃ­u",
"fire20": "0g0g*000Ä™0WÄgWÄwWÄ˜Å—WÄ¥SWÄ¬ÄˆWÄ¥Ã€WÄ¡(WÄ°Ä˜WÄ¬Ã¹WÄ°Ä§HÄ¸Å—HÄ´Ä§HÄ¡SWÄ¬Ã«WÄ½(ZÄ´Å‡HÄ¨Ã«WÄ¹0YÅ(ZÅÅŠWÅ‰ÄŠWÅ…ÃŽHZZZÅ’4WÄ¹gYÅÄšHÄ¨ÃWÅTWÅ…Ã¬YÄ°ÄˆWÅ–AZÅš?ZÅÄ©YÅ¢Ä³YÅ–kHÄ¥KWÄ½wZÄ½gYÅ‰ÃºZÅšÃ„YÅÄ¹ZÄ¨KWÅÄºWZÅ•ZÅžIZÅ‘ÅšYÄ´Ä·HÅšÃ„HÅÄ©HÅSZÅ‰ÄšH00000000000000000000000000000000000000000000000000000000000000000000000000000180000000>4S5oÃÃ¬4gÃ«00Ã®8Ã­@EÄŠÃ´(Äº00ÅˆÄª8Å›h]ÃÃƒÃVÃ¬kÄÄ¿Ã’ÄÄ€ÃšÄ©sÃ¢ÅŠ01ÅœÅ‡Ã°EÅ‹Ã£Ã€Ä¬ÄÃ±Ä„1ÃŸÅŽÄŠÃ¾!=Ä£oÄžEk0Ã²Å•ÄÅ‚Å—?Ã°oÃœ4RFÃ²rÃ‹Åž7Ã‹Ã°lÃ¡Å¡Å‘fnÄ‰ÃŽÃ°&ÃŽÃµÃ°c$Å›",
"fire21": "0g0g*000ÄgWÄ¥Ã€WÄwWÄ™0WÄ¨KWÄ¥KWÄ¨ÃWÄ¬ÄˆWÄ¨Ã«WÄ¬Ã¹WÄ´Ä·HÄ°Ä§HÄ¸Å—HÅ…ÃŽHÄ½wYÄ¹0YÅ–*YÅ…ÃžHÅTWÅš?ZÄ¡wWÅ(ZÄ½wZÅÄ©YÅÄ¹ZÅ…ÃžYÅ–*HÅÄšHÄ¹gYÄ¥SWÄ¡(WÅšÃ„ZÄ´Å‡HÄ°ÄˆWÅÃŽWÅ‘ÅšYÅšÃ”HÅ…Ã¬YÅÃWZZZÅšÃ„HÅ‰ÄŠWÅÄºWÅ‰ÃºZZÅ„WÄ°Ä˜HÄ½(ZÄ½gYÅÅŠWÅ–AZÅ‰Ä‰ZÅ¢Ä£H0000000000000000000000000000000000000000000000000000000000000000000000000000018(00000040h?oÃŽÃ±wJÃ«00Ä«gyÄ¯8ÃŸ{)ÅŠÄ§0Ã¡h]ÄœÄ»{BRTÃ00Ã¢Ä¿Ã’ÄŽÅƒÃ¢Å‡Ã+5Äª2oÃ¶Ã·PÃ“sFÅÄŽÃ—ÄŠ0-Ã˜TÃ§cNÃ³%Ä˜Ä£Ã«ÃªÃ±e;Ä‰ÃŒÄ¦Ã³pÄ§ÃÃ¶hÃ¼Ä™ÄŠÃ³NÄŠÃµÄ¯cj|0krÄŠÃ³p&m{Ã›Ã¶4",
"fire22": "0g0gM000ÄwWÄ¡(WÄ¡wWÄ¡SWÄ¥Ã€WÄ¬Ã«WÄ¨ÃWÄ°Ä˜WÄ¹0YÄ°Ä˜HÅ…Ã¬YÄ¬Ã¹WÄ¸Å—HÅ‰ÃºZÄgWÄ°Ä§HÄ¥SWÄ´Å‡HÅ…ÃŽHÅ…ÃžHÄ½(ZÅÄšHÄ´Ä·HÄ´Ä§HÄ½wYÅ‘ÅŠHÅ(ZÄ¥KWÅšÃ”WÅÄ¹ZÅSZÄ™0WÄ°ÄˆWÅÃWÅTWÄ¬ÄˆWÅš@WZZZÅšÃ„ZÅ…ÃŽWÅ–AZÅ¢Ä’HÅ‰ÄŠWÅžÄWÅÄ©YÅžIZÅÅŠWÅšÃ„H00000000000000000000000000000000000000000000000000000000000000000040000000000Ã­8wÄ«kSÃ«0000MÃ±8T@wJÃ«0ybAÄª})zÄ«SÄ¸Ã«1kÃ»ÃVÃ»ÃŠw1FÃ’Ä§0Ä¨Ä€Ã‘ÅÄƒÃzÃ‹Ã¥ÅžÄ¸28Ã]Ä€Å‹JÃ‡ÄÄˆÄ‹02Ä€Ä]ÃžQCÄ‘Ä“]Ã€Ä„2Ã±Ä²ÄšÃ–Ä•Ä‚ÅŒA=970Å›Ä—Ä‚Ã–Ä•PAÅˆ/Ã¾Ã«NÃ“Ä“Ä‚Ã–Ä˜Ã¾Ã–ÄŽÄ‚Ã0",
"fire23": "0g0g)000Ä™0WÄgWÄ¥SWÄ¡SWÄwWÄ¡wWÄ¥Ã€WÄ¨ÃWÄ°ÄˆWÄ¨KWÄ¸Å—HÄ°Ä˜WÄ½wYÄ¬ÄˆWÄ¬Ã¹WÄ½gYÅTWÄ¬Ã«WÅ(ZÅ…Ã¬YÄ¸Å—YÅ‰ÄŠWÅÃŽWÄ¹0YÄ´Å‡HÄ´Ä·HÄ¨Ã«WÅ¢Ä¢ZÅ‘ÅŠHÄ½wZÄ¥KWÄ¡(WÅ–AZÅ¢Ä’YÅ…ÃžHÄ°Ä§HÄ¹gYÅ’3ZZZZÅžIZÅ…ÃŽHÅ–kYÅÃWÄ˜Å—WÄ°Ä˜HÅ‰ÃºZÅ‘ÅšYÅ¢Ä£WÅ–kHÅžÄ‘ZÅžIY00000000000000000000000000000000000000000000000000000000000000000T8gR8w00000gÄ«8ÃÃ±wJÃ«0iÃ´AÄ‹d-Ã€?;Ä¨Ä§0Ãƒg)ÄœÃ€-w1POÄ§0NÃ²%llcÃ‚Ã„Ã‹Ã°S02oMÄŽiÃšÃ”tÃ¤Å‰Ã«1Ã£pMÅ˜wÃ—oÄ‹Ã¹(Ã¬1Ã²ÃƒÄ‚Ã¦FÄŠÄ’Ä¶aÄ®Ä©0rÃ›Ä†Ã¥Ä½Ã–ÄŒiTQSiÃ§Ä–Ä†Ã¥Å‘Ä¦Ã¨DÄ†Ã£Ä§Ä­Ã¨ÄÄ†Ã¥ÅŽÄ†Ã¥ÅŽÄ†Ã¨Å€",
"fire24": "0g0gM000ÄgWÄ™0WÄwWÄ¡SWÄ¨KWÄ¡wWÄ¬Ã¹WÄ¥KWÄ¡(WÄ¨ÃWÄ°Ä˜HÄ´Ä§HÄ´Ä·HÄ°Ä˜WÄ¸Å—HÄ¥Ã€WÄ¥SWÄ¨Ã«WÄ¹0YÄ½wYÄ°Ä§HÄ½gYÄ½(ZÅ‘ÅšYÅ…Ã¬YÄ¬ÄˆWÄ¬Ã«WÅ‰ÄšWÅ–AZÅSZÅ‰Ã¬YZZZÅÄºWÅ‘ÅŠHÅÄšHÅTWÅ¢Ä’YÅ¢Ä£HÅ…ÃžHÅšÃ„ZÅ…ÃŽHZÅ•YÅ‰Ä‰ZÅ–*HÅ¢ÅƒZÅÃŽWÅšÃ„HÅ‰ÄŠW00000000000000000000000000000000000000000000000000000000000000000T00Ã®gÃ€Ä§01Ã±wJÃ´kw1wÄˆÄ§02Ãµ)ÅŠÄ´Ew0SÄ»00kÃ‚%*lAxÃ„|ÃÄ§04}sÅŠ?xÃ£p<x00Ä¹ÅÃšhÃ®Ã–Ä®ÃŒÃ•Ã¹Ã«0ÅŠ~Ãª8Ã„Ã³*i81Ã«01Å‹Ã¾Ã•DMÃƒ?VOS2Ã±Ä‘Ã­ÄxÄ–bwÃ­Ä¸SÄ¢bÅ‡Ã­8wÃ­8wÃ­65y8wÃ­8wÃ­8mÃ¹Åƒw",
"fire25": "0g0gM000Ä˜Å—WÄgWÄ¡wWÄ¡SWÄwWÄ¡(WÄ¨ÃWÄ¬Ã«WÄ¬Ã¹WÄ¨Ã«WÄ°ÄˆWÄ¥Ã€WÄ°Ä§HÄ´Ä·HÄ°Ä˜WÄ¨KWÅ…ÃŽHÄ½wYÄ¥KWÅTWÅ‰ÄŠWÄ¹0YÄ¬ÄˆWÄ½wZÅ–kYÅÃWÄ¸Å—HÄ™0WÅš?ZÅžIHÅ(ZÄ¥SWÅ…Ã¬YÄ½(ZZZZÅžÄWÅ‰ÃºZÅ¢Ä£WÅÄšHÅ¢Ä³WÅ–*ZÅ‘ÅšYÅžIYZÅ„YÅSZÄ´Å‡HÅ…ÃžYÄ½gY0000000000000000000000000000000000000000000000000000000018(0004kxÃ±o00oS0018AÄŠÄ°g00oÃ«Ã«01{wÄºI81Ã¸;Ã®001[SÃ­{oÅ‹Ã‚*(Ã«11Ä®{KÃ­t?Ã„sw015Ä¶ÃŽÃ¾Ã·?ÄŽÄ·Ã7004mÃ’Ä¾Ä‡;ÄšÅ‡sÄ™Ä§2mÅ‰Ã·]ÅŒÃ—Ã–ÅÃ·Ãº0//Ä“Ã·-ÅŠÃ·-ÅŠÃ·-Ri-ÅŠÄš-ÅŠÃ·-Å‰ÄžÅ’Å’Ã·-ÅŠÄ¦-ÅŠÃ·*^Ä¨Ä€Ä¬",
"fire26": "0g0gM000Ä™0WÄgWÄ¡(WÄ¥Ã€WÄ¥SWÄ¨KWÄwWÄ¥KWÄ¬Ã«WÄ¬Ã¹WÄ¨ÃWÄ¸Å—HÄ´Ä·HÄ¡SWÅSZÄ¨Ã«WÅ…ÃžHÄ´Å‡HÄ¹0YÄ¹gYÄ°Ä§HÄ´Ä§HÅ‰Ä‰ZÅÄ¹ZÅ‘ÅŠHÄ°Ä˜WÅšÃ„ZÅ–BWÅžÄHÅÃWÄ½gYÅ‘ÅšYÅ–AZZZZÅÄšHÅ–*YÅ‰ÃºZÅ’4WÅ¢Ä¢ZÅ¢Ä£ZÅ¢Ä³YZÅ”ZÅ¢Ä’WÅ(ZÄ½(ZÅ‰ÄŠWÅÄ©YÅ¢Ä³W00000000000000000000000000000000000000000000000000100Ã®4004w000XgÃXs008Ã€000>wJI40@$TÄ§00?kÃ¬Ã®sÃ»dAÅ‡00Ã Ã·cwTgÄªÄ´gg00MÃ¹*kÃ³|?Q00001Ã„Ã‹Ã°ÃƒEJÄª-Ã«Ä§1CÃ»ÃšÄ®ÃŒÃª7Ä‰Ã³MÄ§qPÃ“Ä†EÄŠÃ³!FÄ’DÄ§aEÄŠÄ–EÄŠÃ³EÄ”Ä#hÃ³EÄŠÄ¢EÄŠÃ³#Ä°^ÅÄ¨^EÄŠÄ©EÄŠÃ³EÄ•Ã³EÃ³",
"fire27": "0g0g,000Ä™0WÄgWÄwWÄ¡(WÄ¡wWÄ¥Ã€WÄ¥KWÄ¡SWÄ¥SWÄ¬Ã¹WÄ°ÄˆWÄ¸Å‡HÄ¸Å—HÄ°Ä˜WÄ´Ä§HÄ½(ZÅ…ÃŽHÅ…ÃžHÄ°Ä§HÄ¨ÃWÄ¨KWÄ´Ä·HÅÄ¹ZÅÄ©ZÅ’3ZÄ½gYÅÃŽWÄ¹0YÅ‰ÃºZZZZÅSZÅ…Ã¬YÅš?ZÅšÃ„HÅšÃ„ZÅžGZÅžIHÅšÃ”WÅ¢Ä’HZÅ•ZÄ½wYÄ°Ä˜HÅžÃ¤WÅ‰ÄŠWÅÄ©YÄ¬Ã«WÅTWÅÄšHÅ¢Ä¢ZZÅ•HÅ–kYÅšÃ„YZÅ•YÅžIZ000000000000000000000000000000000000000001000000002cM50000w0002gÃŽÄ«005g(0003cR24JÃ³ow000Ã®8g0kÄ›ag000h6EÄ¹Ã±-Å™X00000Ä±TkÃ»ÃÃÃ­8(01?mÃ‹Ã°ÃˆÃ‡ÄŸtÃ¥Å—Sa7Å„Ã¯ÅŽÄ†Ã¥ÅÄ‹JUÄ§2Ã”ÄÄÅŽÄ†Ã¥Å‘gÄÃÃ—Ä•ÅŽÄ†Ä™ÅŽÄ†Ã¥Å’Ã›/Å£0|ÅŽÄ†Ä¬ÅŽÄ†Ã¥ÅŽÃ¹Ã¥ÅŽÃ°rDÄ†Ã§,ÄœÃ§Ã…Ä†Ã¥ÅŽÄž",
"fire28": "0g0g:000Ä™0WÄgWÄ¡wWÄ¡(WÄ0WÄwWÄ¥Ã€WÄ¨ÃWÄ¬ÄˆWÄ¨KWÄ¬Ã¹WÄ¥KWÄ´Å‡HÄ¹0YÄ¥SWÄ˜Å—WÅÃŽWÅ…ÃžHÅ…Ã¬YÄ´Ä·HÄ¸Å—HÄ°Ä˜HÄ½wZÅš@WÄ¸Å—YÅSZÅÄºWZZZÅ‘ÅŠHÅ‘ÅšYÅ’4WÅÄ¹ZÅ–*YÅ–kYÅžIZÄ½wYÄ°Ä§HÄ°Ä˜WÄ¡SWÅ‰ÃºZÅ‰ÄŠWÅ‰ÄšHÄ¬Ã«WÄ½(ZÅžIHÅžÄHÄ½gYZZWZÅ„HÅšÃ„HZÅ”ZÅ¢Ä³ZZÅ•WÅÃWÅÄšHÅ¢Ä’WÅ…ÃŽHÅ¢Ä£W00000000000000000000000000000000000000000T0000000008M2000kg00004xÃ«0xÄ®g000000004Ã­^80000Ã°sÄ™Ä«wÄšÃ°00000{)ÅŠÃ´sÅ˜g0000OÄ²?AÄ»BVÃ¿KÄ·01Ã½ÃˆÃšÄ®sÃžÄ®ÃŒÃ©Ä¹027xÃ²Ä®sÃžÄ¯Å‹/Ã‡ÄÄ‰Ä®sÄÄ®sÃžÄ±Ä“$Å’0%Ä®sÄžÅŽsÃžÄ®LÄ©,6i,sÃžÅ“ÃŸÄ¶[*ÃžÄ®vÄ…|ÄŸÅˆÄ´Å Ã Ä”ÃŸÃžÄ¯Å–",
"fire29": "0g0g,000Ä™0WÄ˜Å—WÄgWÄwWÄ¡(WÄ¨KWÄ¥Ã€WÄ¡SWÄ¬Ã¹WÄ°Ä§HÄ°Ä˜WÄ¥KWÄ¹0YÄ½wYÄ¬ÄˆWÄ¨ÃWÄ¨Ã«WÄ´Ä§HÅ…Ã¬YÄ¬Ã«WÄ¸Å—HÅ…ÃžYZÅ„WZZZÅžÄHÅ‰Ã¬YÅ‰ÃºZÅ…ÃŽHÅÃWÅ–*HÅÄ¹ZÅ¢Ä³YÅ–BWÄ´Å‡HÅžÃ¤HÅ¢Ä³ZÄ´Ä·HÅš?ZÅ–*YZÅ•YÅžÄYÅ–AZÅ‘ÅšZÅžGZÅÄšHZZHÅžÄZÅžÃ²WZÅ„YÅžIZÅžÃ¤WÄ°Ä˜HZÅ”ZÅ…ÃžH0000000000000000000000000000000000000000gS0000000000wS00Ä«4000000000ÃÃ¯000001gÃž1kÃŸ1000005AÄŠÄ³kSÄ§000016)ÅŠÃ¸SÅ›Ã‚|S00JÄ¼Ã‡Ã£oÃŽÃ¼ÅÃšÄ©01Ä¾Ä‡Ãª6oÃŽI|IÅ›0Ã„-Å…}@oÃŽÃ°Ä¸SÄ‘SN+AÄ‚Ã¦oÃŽÃ³VÄ’Ä£06Å€&Ã-ÅŽÄŽÅ(Ä®sÃ»6Ã…ÃšÃ¶XÅšÃ;Ä†Ä¬ÃµÃÃ£+dÃƒ[Ã¢Ä³Ä¹Ã£Ä²mo",
"fire30": "0g0g+000Ä0WÄ¡(WÄgWÄ¡wWÄwWÄ¥Ã€WÄ¨ÃWÄ™0WÄ¡SWÄ°Ä˜WÄ´Ä·HÄ¥KWÄ¥SWÄ¨Ã«WÄ¸Å—HÄ½wZÅ–BWÅ¢Ä£WÅ‘ÅŠHÄ½(ZÅ(ZÄ¸Å‡HÅÄ¹ZÅ…ÃŽHÅšÃ„ZZZZÅ–*YÅÄ©ZÄ´Å‡HÄ°Ä˜HÅšÃ“ZÄ¬Ã«WÅ…Ã¬YÅ‘ÅšZÅ‘ÅšHÅ¢Ä’HÅ‰ÄŠWÅšÃ”HÅ¢Ä²ZÅšÃ„YÅžIZÄ¹gYÅžÃ¤WÅ‘ÅšYÅ’4WÅšÃ”WÄ¬Ã¹WÅÃWÄ´Ä§HÄ½wYZÅ•WÅ–kHÅžÄH0000000000000000000000000000000000000000000000000000000gÃ®0000000(0cTS000003oÃžÄ©cÃ«0000009EÄšÄ®AÄª};Ã¹00ÃºÄ±TkJP)kUÅ™01Ã‘nÃŽÃ¾Ä‚Ã–ÄŸtÃ¤Å‰St5Ä¿ÃŽÅÄ‚PCÄ®q3Ã«alÄ¿Ã³.iPCÃ´Ã°pS1Ã¥Ä‚Ä†UÃ‚PÄŒÃºÄŠÃ¾Ä’1Å‘ÅÄšÄ£Ã‚Ã–CÅ”ÄÄ“Ã³T+Ä“Ä¦Ä»Ä‚Ã–Ä¤%Ã—Ä‚ÃˆuÃ¡Å˜~$ÅPt(ÄšÃ¾Ä",
"fire31": "0g0gB000ÄwWÄ™0WÄ¡(WÄ¬Ã«WÅSZÄ¡SWÄ´Ä·HÄ´Å‡HÄ½wYÅÄ©YÅ…ÃžHÅ(ZÅ’3ZÅ–*HÅšÃ“ZÄ¥Ã€WÄ¨ÃWÅ‰ÄŠWÅ‘ÅšZÅ¢Ä³WZZZÄ½gYÅ‘ÅŠHÅÄºWÄ°ÄˆWÄ½(ZÅÃWÅ–AZÅ–kYÅ‘ÅšYÄ¬ÄˆWÄ¹0YÅÄ©ZÅš?ZÄ½wZÄ¸Å—H0000000000000000000000000000000000000000000004000000wÃ«00T0000000wÄ©0gT0000008TQ4(@00000Ä©gÃÄ«sÃÄ¨000029kÃ¬^EÄŠÄ®4000O8gJÃ¶-ÅŠÄ²t001iÃ‚|z~<?~Ã‡Ã’Ã«1jj]ÄÄ¼VVe;Åp0+ÄƒÃš+Ã¼VV~UÅžp?Ä¾ÄƒhÅŸlVVx;ÅŠÄ€q8Ä‹Ã›]Ã½VVcXÅŠÃ·Ã­BÃÃ¨Ã¢VV>Ã¼VVm",
"soulLantern0": "0g0gb000<lWP@HAÄ›Z2Ã‡Y#$ZzcHÃœYWÅžÅ–ZÄ®ZZTBZ1yg000002hw002h0iyx00130kVT00130CGÃ003j0DÃ²ÃŸ00000DÄ€ÃŸ00130mGÃŽ003j0iyx00000hÄ’h00000qyÄ‰002h0ÄŠy!00130ÄŠy!00000qyÄ‰00000hÄ’h0000000000000",
"soulLantern1": "0g0ga000<lWP@HAÄ›Z2Ã‡Y#$ZÃ§Å†YZZZÅ‚ZZTBZ1yg000002hw002h0iyx00130kVT00130BÃ“Ã‚003j0CÃ¤Ã00000CÃ±Ã00130lÃ“Ã003j0iyx00000hÄh00000pyÃº002h0JyF00130JyF00000pyÃº00000hÄh0000000000000",
"soulLantern2": "0g0ga000<lWP@HAÄ›Z2Ã‡Y#$ZGÄ¶HZÅ–YÅ‚Å–YTBZ1yg000002hw002h0iyx00130kVT00130BÃ“Ã‚003j0CÃ¤Ã00000CÃ±Ã00130lÃ“Ã003j0iyx00000hÄh00000pyÃº002h0JyF00130JyF00000pyÃº00000hÄh0000000000000",
"lantern0": "0g0gc000<lWP@HÃ²>WÃ¬2WAÄ›ZÄ¨Ã­WÅ™QYÅ¢CHZÅ¤HZÅŸYTBZ1yg000003Q(002h0iyx00150@GÃ‘00150,IÃ 005l0-Ä‚Ã®00000-Ä‘Ã®00150[IÃ¡005l0iyx00000hÄ£h00000ryÄ™002h0Äšy#00150Äšy#00000ryÄ™00000hÄ£h0000000000000",
"lantern1": "0g0gd000<lWP@HÃ²>WÃ¬2WAÄ›ZÄ¥ÃžZÅ•4HÅžmWZÅ¤HÅ¢ÅŽZÅ•kHTBZ1yg000003Q(002h0iyx00150@GÃ‘00150,IÃ 005l0-Ä‚Ã®00000-Ä‘Ã®00150_IÄœ005l0iyx00000hÄ³h00000syÄ¨002h0Ä©y$00150Ä©y$00000syÄ¨00000hÄ³h0000000000000",
"lantern2": "0g0gc000<lWP@HÃ²>WÃ¬2WAÄ›ZÄ¡ÃžZÅ•4HÅš5YZÅ¤HÅ¢ÅŽZTBZ1yg000003Q(002h0iyx00150@GÃ‘00150,IÃ 005l0-Ä‚Ã®00000-Ä‘Ã®00150[IÃ¡005l0iyx00000hÄ£h00000ryÄ™002h0Äšy#00150Äšy#00000ryÄ™00000hÄ£h0000000000000",
"magma0": "0g0g9SÃHÄ°(HÃ‘ÄŠYÃ€ÃŽYÅiWÅŒÃºWÃÄªWÅ¡ÄYÅ¡Ã¡H1z3Aw2ÃzÃ“(0Bz6TNGÃ„yÃNÃ•NUÃ„)liUÃ¬zxÃƒxÃzyÃ’wNg2@(3N@zw+Ã­Ã06Ã¬UiÃXVzAihTlmxÃ‚ÃzBzÃ‚wNki(ANR(3Bw2Ã­6Xz0Bz2RjÃÃ‚(ANÃÃ‚TNÃƒyÃ†UÃ¬xxV]XÃ“zÃ„N*iC@(Nkw",
"magma1": "0g0g9SÃHÅŒÃºWÃ‘ÄŠYÃ€ÃŽYÄ°(HÅiWÃÄªWÅ¡ÄYÅ¡Ã¡H1z3xw2?ÃÃ“(0ÃŽz2hNnÃ£CVNxNhm*]Ã°TlÃA>A?ÃyÃ•K+S2m(3+Ã‚ÃwNÃƒz02hUizÃlÃAmÃ¯VÃRÃ•Ã°TzÃŽzmw+Ãi(BNR(3ÃŽw2Ã‚2kz0Az2mÃƒyi(Ã‘NÃRoNÃƒCÃ¬TÃAÃ•UTÃ†ÃzÃ°N)iy@(+]K",
"magma2": "0g0gaSÃHÅŒÃºWÃ‘ÄŠYÃ€ÃŽYÅiWÄ°(HÃÄªWÅ¡Ã¡HÅ¡ÄYÅœÅ˜H1z3Aw2?zC(0Dz2Ã¢NoÃ°y?NDNhm,ÃRk?zx>FVzyxwNÃ2m(3Nizw+RÃ06?ÃizlÃzÃ”Ã£klhÃ‚xÃ‚[ÃAziwNÃm(xNÃ£(3Bw2i6ÃžÃ0xz6@jy@(Ã‘NÃÃ£TNjCnÃ¡nÃŽBlVnÃ“Ã@NMRyi(NÃw",
"crimsonStem0": "0g0g8QÃ®WÃ€ÃŽWÄ˜JH]Ã»HÃ¤0WÃ¼ÃHI(ZUÄ›Z0ÄŽÅˆÄŒMI0Ä·ÅˆÄÄ›8/iÄµÄªÃ­ÃžTÄ©1Ä®Ä ÃšLÄ€Ã‡Ã¯ÅšÄ‘vÄ€Ã§(Ä˜ÃžOÅšvÅjÃ´Ä¶Ä›3Å£Ä¯Ã‰Ä§gÃŽdÄ€W)Ã“Ä³X]Ã§!ÃºÅŸ(Ä©Ä¿ÄÃ­Zis1Ä´Ä©v(Ã³T$ÅŠ3Ä«NÃ·7h8)ÄžÃ–2Ã¾w!ÃºI",
"crimsonStem1": "0g0g8QÃ®WÃ€ÃŽWI(Z]Ã»HÃ¤0WÃ¼ÃHUÄ›ZÄ˜JH0ÄŽÅˆÄŒ(I0Ä§ÅˆÄÄ›]NiÄ³>2Ã¥TÄ©1[-ÃšLoÃ‡Ã¯Å‰ÃºroÃ (Ä˜ÃWÃuÄ­jbÄ—O3Ä¿Ä¯Ã‰ÄˆgÃŽdÃ¼+E@Ä³XAÃ !hÄ˜(Ä¹Ä¿Ã¯Ã­Åhu1Ã¶ÄŠuEÃ³T$Äº3ÄŒO{7Ãº8)ÄžÃ2Ã¾w=Ãº8",
"crimsonStem2": "0g0g8QÃ®WÃ€ÃŽWI(Z]Ã»HÃ¤0WÃ¼ÃHÄ˜JHUÄ›Z0ÄŽÅˆXM]0Ä§ÅˆÃ¯Ä›INiÄ³Ã®Ã­Ã–Ã¬Ä©1Ã±Ä Ã—LÄ€Ã‡Ã¯ÅšhvÄ€Ã§EÄ˜ÃŽOÅ™Ä‡ÅJÃ´Ã¸Ä›>Å£ÅƒÃ‰Ã«gÃ–dÄ‚W(@ÄµÄŒ!Ã§NhÅŸ)ÄŠÄ¿Ã¯Ã­Z9k1Ã¶Ä¹vEIT$Äº3XOc6Ãº8(ÄžÃŽ1mwNh8",
"crimsonStem3": "0g0g8QÃ®WÃ€ÃŽWÃ¤0W]Ã»HI(ZUÄ›ZÃ¼ÃHÄ˜JH0ÄŽÄ¸Q(I0ÄˆÄ¸Ã¯ÄšIFiÄ³Ã­Ã­ÃTÄŠ1Ä­ÄœÃ‚&Ã¼Ã‡Ä¬Ä¹ÃºmÄ€Ã˜;Ä˜Ã!ÄºÄ…ÄiÃ´}Ä›ÄªÄœÄ«Ã‰SgÃždÃ¼%ECÄµXAÃ˜FhÃ•(ÄŠÄ¿?Ã­Å”9k1|Å‰tEXT$Ä©Ã®QNÃ³6gIEÄžÃ1mgFgI",
"crimsonStem4": "0g0g8QÃ®WÃ€ÃŽWI(Z]Ã»HÃ¤0WÃ¼ÃHÄ˜JHUÄ›Z0ÄŽÅˆÄŒM]0ÄˆÅˆÄÄšI!JÄ´ÄªÃ­ÃÃ¬Å‰1ÄÄ Ã‘LÄ‚Ã‡?ÅšxvÄ‚Ã§EÄ˜ÃŽOÅšÃÅjbÃ¸ÄšÃ®Å£Ä¯Ã‰SgÃŽdÄ€WE@Ä³X]Ã§*hÅŸ(Ä©Ä¿Ä¬Ã­Zio1Ä•Ä©v(XT$Äª3XO|6h8(ÄžÃž2mw!h]",
"crimsonStemSW0": "0g0g8QÃ®WÃ€ÃŽWI(ZÃ¼ÃHÄ˜JH]Ã»HÃ¤0WUÄ›Z0ÄŽ^QoS6ÄºoÄ£Ä·Ã«Ã•ÅÄ§ZÅ¢Ã²BKÃÄ¤Ä„ÃŠÄˆJEDÃ?rbÅÄ¿ÃºÃšÄ«ÃÄµnÄ·Ã£2Å¥MÄ¦JÃ²BgÃÅ£Å‹ÄƒÃµÅ”Ã¶ÅŽi9Ã‘s?-Å†Å+Ã®Ä™Ä­Å¡%kÄœÃ£Ä«s]@h]EÄŠÃŸ$Ã¬HÄ+Ã²5iLÄœÃ¾S",
"crimsonStemSW1": "0g0g8QÃ®WÃ€ÃŽWÃ¤0WÃ¼ÃHI(Z]Ã»HÄ˜JHUÄ›Z0ÄŒ_Ã‘oS6ÄºwÄ£Ä·Ã«Ã¤ÅÃ«ZÅ¡Ã²BÄ§ÃÄ¤Ã¼UÄˆJEBy?9bÅ]ÃºÃšQÃÄ±nÄ·Ã‚2Å¥hÄ¦JÃ²BÃ¹Ã€Å£Ä‘rÄ³Ä«Ã¶ÅŒi9Ã‘o?EÅ†Å+Ã­Åˆ@Å¡%kÄ¤Ã‘Qk]?Ãº]EÄ©ÃŠ(Ã¬HÄŽ[Ã²5iLÄœÃ¾S",
"crimsonStemSW2": "0g0g8QÃ®WÃ€ÃŽWÃ¤0W]Ã»HUÄ›ZI(ZÃ¼ÃHÄ˜JH0ÄŒ^QkS5ÄšÃ¹Ã—(Ã«Ä ÄžÃ«J@Ã²DKÃÃÃ¼VKJoBy>97pÄ»Ã¹Å‚Q.ee(Ã‚1Ä¯.ÃžJÃ²BgÃÃ¹ÄŒJ]Å‚Ã´Ã°J9Qq>-Ä¡o%Ã®Ã–Ä¬Ä­rcÄ’Ã£Å‹k]?gÄ¯)ÄŠÃªEÃ«Å‹Ã’Ã‹Ã²5isÃ™Ä‚S",
"crimsonStemSW3": "0g0g8QÃ®WÃ€ÃŽWÃ¤0W]Ã»HUÄ›ZI(ZÃ¼ÃHÄ˜JH0ÄŒ^QkS5ÄšÃ¹Ã—(Ã«UÄžÃ«J@Ã²CÅ‡ÃÃÃ¼Ã‚KJoCÄŠ>97pÅŸÃ¹Å‚Q.ee(Ã‚1Ä¯MÃžÃ»PBgÃ•Ã¹Å”Ã—]Ä_Ã±J9Qk>-Ä¡o%Ã­ÃºÄÄ­rcÄŒÃ‚Qk]?gÄ¯EÄŠÃ‚EÃ«Å‹Ã’AÃ²5isÃ™Ã¼S",
"crimsonStemSW4": "0g0g8QÃ®WÃ€ÃŽWÃ¼ÃHÄ˜JHI(ZÃ¤0W]Ã»HUÄ›Z0ÄŽ{ÄŒqS7ÃÄˆÄ¾Åˆ0ÄœÅ”0ZÅ£Ã²CÄ·Ã–ÅƒÃ¾Ã‘Ä§J(By@mÃ¶Å˜IÃºÄžÄŒÃœÄ´rÅ‡Ãš3ÃªFÅ†iÃ²CÃ¹Ã•Å£Ä«Ä¹Ã¼Å‚}Åi9ÄŒq@)Å–Å—:3Ã–ÄÃ¨+oÄ±ÃšÄŒq]?hI)Ä¹Ã$Ã¬YÄ­Å‚95i,Ä¿Ä‚S",
"warpedStem0": "0g0g8QÃ®WQÄZmÃ„Z]Ã»HlÃ¯Yi6HhÄžYUÄ›Z0ÄŽÅˆÄŒMI0Ä·ÅˆÄÄ›8/iÄµÄªÃ­ÃžTÄ©1Ä®Ä ÃšLÄ€Ã‡Ã¯ÅšÄ‘vÄ€Ã§(Ä˜ÃžOÅšvÅjÃ´Ä¶Ä›3Å£Ä¯Ã‰Ä§gÃŽdÄ€W)Ã“Ä³X]Ã§!ÃºÅŸ(Ä©Ä¿ÄÃ­Zis1Ä´Ä©v(Ã³T$ÅŠ3Ä«NÃ·7h8)ÄžÃ–2Ã¾w!ÃºI",
"warpedStem1": "0g0g8QÃ®WQÄZhÄžY]Ã»HlÃ¯Yi6HUÄ›ZmÃ„Z0ÄŽÅˆÄŒ(I0Ä§ÅˆÄÄ›]NiÄ³>2Ã¥TÄ©1[-ÃšLoÃ‡Ã¯Å‰ÃºroÃ (Ä˜ÃWÃuÄ­jbÄ—O3Ä¿Ä¯Ã‰ÄˆgÃŽdÃ¼+E@Ä³XAÃ !hÄ˜(Ä¹Ä¿Ã¯Ã­Åhu1Ã¶ÄŠuEÃ³T$Äº3ÄŒO{7Ãº8)ÄžÃ2Ã¾w=Ãº8",
"warpedStem2": "0g0g8QÃ®WQÄZhÄžY]Ã»HlÃ¯Yi6HmÃ„ZUÄ›Z0ÄŽÅˆXM]0Ä§ÅˆÃ¯Ä›INiÄ³Ã®Ã­Ã–Ã¬Ä©1Ã±Ä Ã—LÄ€Ã‡Ã¯ÅšhvÄ€Ã§EÄ˜ÃŽOÅ™Ä‡ÅJÃ´Ã¸Ä›>Å£ÅƒÃ‰Ã«gÃ–dÄ‚W(@ÄµÄŒ!Ã§NhÅŸ)ÄŠÄ¿Ã¯Ã­Z9k1Ã¶Ä¹vEIT$Äº3XOc6Ãº8(ÄžÃŽ1mwNh8",
"warpedStem3": "0g0g8QÃ®WQÄZlÃ¯Y]Ã»HhÄžYUÄ›Zi6HmÃ„Z0ÄŽÄ¸Q(I0ÄˆÄ¸Ã¯ÄšIFiÄ³Ã­Ã­ÃTÄŠ1Ä­ÄœÃ‚&Ã¼Ã‡Ä¬Ä¹ÃºmÄ€Ã˜;Ä˜Ã!ÄºÄ…ÄiÃ´}Ä›ÄªÄœÄ«Ã‰SgÃždÃ¼%ECÄµXAÃ˜FhÃ•(ÄŠÄ¿?Ã­Å”9k1|Å‰tEXT$Ä©Ã®QNÃ³6gIEÄžÃ1mgFgI",
"warpedStem4": "0g0g8QÃ®WQÄZhÄžY]Ã»HlÃ¯Yi6HmÃ„ZUÄ›Z0ÄŽÅˆÄŒM]0ÄˆÅˆÄÄšI!JÄ´ÄªÃ­ÃÃ¬Å‰1ÄÄ Ã‘LÄ‚Ã‡?ÅšxvÄ‚Ã§EÄ˜ÃŽOÅšÃÅjbÃ¸ÄšÃ®Å£Ä¯Ã‰SgÃŽdÄ€WE@Ä³X]Ã§*hÅŸ(Ä©Ä¿Ä¬Ã­Zio1Ä•Ä©v(XT$Äª3XO|6h8(ÄžÃž2mw!h]",
"warpedStemSW0": "0g0g8QÃ®WQÄZhÄžYi6HmÃ„Z]Ã»HlÃ¯YUÄ›Z0ÄŽ^QoS6ÄºoÄ£Ä·Ã«Ã•ÅÄ§ZÅ¢Ã²BKÃÄ¤Ä„ÃŠÄˆJEDÃ?rbÅÄ¿ÃºÃšÄ«ÃÄµnÄ·Ã£2Å¥MÄ¦JÃ²BgÃÅ£Å‹ÄƒÃµÅ”Ã¶ÅŽi9Ã‘s?-Å†Å+Ã®Ä™Ä­Å¡%kÄœÃ£Ä«s]@h]EÄŠÃŸ$Ã¬HÄ+Ã²5iLÄœÃ¾S",
"warpedStemSW1": "0g0g8QÃ®WQÄZlÃ¯Yi6HhÄžY]Ã»HmÃ„ZUÄ›Z0ÄŒ_Ã‘oS6ÄºwÄ£Ä·Ã«Ã¤ÅÃ«ZÅ¡Ã²BÄ§ÃÄ¤Ã¼UÄˆJEBy?9bÅ]ÃºÃšQÃÄ±nÄ·Ã‚2Å¥hÄ¦JÃ²BÃ¹Ã€Å£Ä‘rÄ³Ä«Ã¶ÅŒi9Ã‘o?EÅ†Å+Ã­Åˆ@Å¡%kÄ¤Ã‘Qk]?Ãº]EÄ©ÃŠ(Ã¬HÄŽ[Ã²5iLÄœÃ¾S",
"warpedStemSW2": "0g0g8QÃ®WQÄZlÃ¯Y]Ã»HUÄ›ZhÄžYi6HmÃ„Z0ÄŒ^QkS5ÄšÃ¹Ã—(Ã«Ä ÄžÃ«J@Ã²DKÃÃÃ¼VKJoBy>97pÄ»Ã¹Å‚Q.ee(Ã‚1Ä¯.ÃžJÃ²BgÃÃ¹ÄŒJ]Å‚Ã´Ã°J9Qq>-Ä¡o%Ã®Ã–Ä¬Ä­rcÄ’Ã£Å‹k]?gÄ¯)ÄŠÃªEÃ«Å‹Ã’Ã‹Ã²5isÃ™Ä‚S",
"warpedStemSW3": "0g0g8QÃ®WQÄZlÃ¯Y]Ã»HUÄ›ZhÄžYi6HmÃ„Z0ÄŒ^QkS5ÄšÃ¹Ã—(Ã«UÄžÃ«J@Ã²CÅ‡ÃÃÃ¼Ã‚KJoCÄŠ>97pÅŸÃ¹Å‚Q.ee(Ã‚1Ä¯MÃžÃ»PBgÃ•Ã¹Å”Ã—]Ä_Ã±J9Qk>-Ä¡o%Ã­ÃºÄÄ­rcÄŒÃ‚Qk]?gÄ¯EÄŠÃ‚EÃ«Å‹Ã’AÃ²5isÃ™Ã¼S",
"warpedStemSW4": "0g0g8QÃ®WQÄZi6HmÃ„ZhÄžYlÃ¯Y]Ã»HUÄ›Z0ÄŽ{ÄŒqS7ÃÄˆÄ¾Åˆ0ÄœÅ”0ZÅ£Ã²CÄ·Ã–ÅƒÃ¾Ã‘Ä§J(By@mÃ¶Å˜IÃºÄžÄŒÃœÄ´rÅ‡Ãš3ÃªFÅ†iÃ²CÃ¹Ã•Å£Ä«Ä¹Ã¼Å‚}Åi9ÄŒq@)Å–Å—:3Ã–ÄÃ¨+oÄ±ÃšÄŒq]?hI)Ä¹Ã$Ã¬YÄ­Å‚95i,Ä¿Ä‚S",
endRod: "0g0gcÅžÃµZÃžÃ¾H000ZZZÅžÄ”ZÄšÄ¢YÅžÄµHÃ³7ZZÅ…HZÅ†HZÄ´HZÄ¤Z00hyyz2yQ0ÃyywNyÃ‘nÃžyyyyyIÃ¢Ã…yyyyyÃ®Ã¢Ã…yyyyyOÃ¢Ã…yyyyyOÃ¢Ã…yyyyyOhhyyyyyÃ»yyyyyyyIyyyyyyyIyyyyyyyÃ³yyyyyyyÄœyyyyyyyÄœyyyyyyy0yyyyyyyyyyyyyyy",
endRod2: "0g0gc000ÅžÃµZZZZÃžÃ¾HÃ³7ZÄšÄ¢YÅžÄ”ZZÅ…HZÄ´HÅžÄµHZÅ†HZÄ¤Z000000000000000000000000i0000000x00000000000000000000000000000000000000000000000O)Q>0000*?VÃƒ0000h?VÃƒ0000h)Q>0000mÃ”yyDÃ¤Ã“gmÃ¿ÃŸyÄGÄ£g",
//pretty: "0g0g40001blc009d4hc009efw01ulak1c3300022112200033333022111122033303332112211233300033312222133300022333222233322022113330033311222112233333322112112220333302221111222033330222112112233333322112221133300333112202233322223332200033312222133300033321122112333033302211112203333300222112200033",
//pigFace: "0g0gr000006w14172ew1hejb3s1heul881luzbw81lvx4oo1o2w1dk1qb44541qbfcoo1sj0ws81sjc3qw1sjc5bs1sjndvc1sjnfg81sjynzs1sjypko1sk9y481skl9tk1ur8we01urk6ig1urvf201urvgmw1urvi7s1us6p6g1us6qrc1ustb081x2x0xkaa669999ddddbbddaa669999ddddbbdd7766ccii99kknnnn7766ccii99kknnnn88cceeeeddddeenn88cceeeeddddeenn00qqbbbbjjjjqq0000qqbbbbjjjjqq0099ddhhppppppggdd99ddhhppppppggddcccc11ddff11llllcccc11ddff11llll999922335544oomm999922335544oommbbbbddeellffffnnbbbbddeellffffnn",
/*
steveFace: "0g0gw08wkrnc0b4hipk0b4sr940dcpjw80fkxji00hs7rw80hsj0fs0hsuak80m9axh40sxbw8o0sxbxtk0xdgohk0zloo3c0zlopo811ta86w11twpa0141thx416a1hiw16acrnc16ao3co18i9h4o1aqhlh41aqsvlk1ar45q01cypmns1cz0ws81cz0yd41czc5bs1f78we01f78xyw1hfh0qg1x2x0xk221111110000111122111111000011111111113377441111111111337744111111rrttuuttttll3311rrttuuttttll33mmppmmnnjjttiiiimmppmmnnjjttiiiippvv88oott88vvmmppvv88oott88vvmmhhooqqaaaasskkcchhooqqaaaasskkccgggg66eeee66ffddgggg66eeee66ffdd999966556666ddbb999966556666ddbb",
steveHeadTop: "0g0g406ocs1k08w9j3s08wkrnc0b4hipk3333223333222200333322333322221133223333332222223322333333222222333333223322222233333322332222222233332233333333223333223333333333333322223333333333332222333333333322223333333333332222333333333322333333113333332233332200333333333322222233333333222222223333",
lexiFace: "0g0g6009pbso06oo3qw1urv2ew1utfnco1wxln201x2x0xk3333333333333333333333333333333333332222222233333333222222223333331111222211113333111122221111333355002222005533335500222200553333550022220055333355002222005533332222222222223333222222222222333322224444222233332222444422223333332222222233333333222222223333",
lexiTop: "0g0g11utfnco0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
sarahFace: "0g0g6009ehh406o1hx406oo3qw1wugttk1x1114o1x2x0xk1111111111111111111111111111111111114411111111111111441111111111111122441111111111112244111111111155004444111111115500444411111111550044444411111155004444441111114444444444441111444444444444111144443333444411114444333344441111444444444444111144444444444411",
sarahTop: "0g0g106o1hx40000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
sallyFace: "0g0g6000006w006lb0806oo3qw1sgim7s1wzrth41x2x0xk0000000000000000000000000000000000004444444400000000444444440000000022444422000000002244442200000000114444110000000011444411000000551144441155000055114444115500004444444444440000444444444444000044443333444400004444333344440000444444444444000044444444444400",
sallyTop: "0g0g1000006w0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
face: "0g0g60077lrs0fkme480ohifp41unspvc1x1114o1x2x0xk1111111111111111111111111111111111114444444411111111444444441111112222444422221111222244442222111155004444005511115500444400551111550044440055111155004444005511114444444444441111444444444444111144443333444411114444333344441111444444444444111144444444444411",
faceTop: "0g0g10fkme480000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
//*/
cowSide:"0g0g400000000qoh7n40qoh7nc1uuozqw0000000000000000000000000000000000000000000000000000000000000000001111111111100011111111331111112233222333322322223332233332332222333222332233222233322222223322222222233322332222222222222222220220000000002200022000000000220002200000000022000220000000002200",
cow: "0g0g20xd56go1uuozqw0000000000000000000100000001110000111000100111100011100000001111000110000000111100000001100001110010000111000000001100111100000000010011100110000000011100011000100001110000000011000000000001101100110000000100110011100011000010001111000110000000011100011100",
error:function(n){
for (let x = 0; x < 16; ++x) {
for (let y = 0; y < 16; ++y) {
let p = false
if(x>=8){
if(y>=8){
p=true
}
}else{
if(y<8){
p=true
}
}
if(p){
setPixel(n, x, y, 0, 0, 0);
}else{
setPixel(n, x, y, 255, 0, 255);
}
}
}
}//"0g0g2000006w1ulbvg81111111100000000111111110000000011111111000000001111111100000000111111110000000011111111000000001111111100000000111111110000000000000000111111110000000011111111000000001111111100000000111111110000000011111111000000001111111100000000111111110000000011111111",
}
window.textures = textures
var tickSpeed = 1000/20
const animated = {
Water:{
time:2,
arr:(function(){var a=[]; for(var i=0; i<32; i++)a.push("water"+i); return a})(),
tint:[10,30,255]
},
portal:{
time:1,
arr:(function(){var a=[]; for(var i=0; i<32; i++)a.push("netherPortal"+i); return a})()
},
Lava:{
time:2,
arr: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,18,17,16,15,14,13,12,11,10,9,8,7,6,5,4,3,2,1].map(v => "lava"+v),
},
prismarine:{
time:300,
arr:[0,1,0,2,0,3,0,1,2,1,3,1,0,2,1,2,3,2,0,3,1,3].map(v => "prismarine"+v),
interpolate:true
},
seaLantern:{
time:5,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("seaLantern"+i); return a})(),
},
stonecutterSaw:{
time:1,
arr:["stonecutterSaw0","stonecutterSaw1","stonecutterSaw2"]
},
fire:{
time:1,
arr:(function(){var a=[]; for(var i=0; i<32; i++)a.push("fire"+i); return a})(),
},
lantern:{
time:8,
arr:["lantern0","lantern1","lantern2"]
},
soulLantern:{
time:8,
arr:["soulLantern0","soulLantern1","soulLantern2"]
},
magma:{
time:8,
arr:["magma0","magma1","magma2"],
interpolate:true
},
warpedStemSide:{
time:10,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("warpedStem"+i); return a})(),
interpolate:true
},
warpedStemSW:{
time:10,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("warpedStemSW"+i); return a})(),
interpolate:true
},
crimsonStemSide:{
time:10,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("crimsonStem"+i); return a})(),
interpolate:true
},
crimsonStemSW:{
time:10,
arr:(function(){var a=[]; for(var i=0; i<5; i++)a.push("crimsonStemSW"+i); return a})(),
interpolate:true
},
}
for(var a in animated){
animated[a].time *= tickSpeed
}
window.animated = animated
const blockData = [
{
name: "air",
id: 0,
textures: [],
transparent: true,
shadow: false,
},
{
name: "grass",
Name: "Grass Block",
textures: [ "dirt", "grassTop", "grassSide" ],
breakTime: 0.9,
drop:"dirt",
type:"ground",
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{ name: "dirt", Name:"Dirt", breakTime:0.75, type:"ground",
digSound: ["block.gravel.dig1", "block.gravel.dig2", "block.gravel.dig3", "block.gravel.dig4"],
stepSound: ["block.gravel.step1", "block.gravel.step2","block.gravel.step3","block.gravel.step4"]
},
{ name: "stone", Name:"Stone", drop:"cobblestone", type:"rock1", breakTime:7.5, stoneSound:true},
{ name: "bedrock", Name:"Bedrock", breakTime:Infinity, stoneSound:true},
{ name: "sand", Name:"Sand", breakTime:0.75,
onupdate: function(x,y,z,b){
fall(x,y,z,b)
},
digSound: ["block.sand.dig1", "block.sand.dig2", "block.sand.dig3", "block.sand.dig4"],
stepSound: ["block.sand.step1", "block.sand.step2","block.sand.step3","block.sand.step4","block.sand.step5"]},
{ name: "gravel", Name:"Gravel", breakTime:0.9, type:"ground",
onupdate: function(x,y,z){
fall(x,y,z,blockIds.gravel)
},
drop: function(){
if(round(random(10)) === 1) return "flint"
else return "gravel"
},
digSound: ["block.gravel.dig1", "block.gravel.dig2", "block.gravel.dig3", "block.gravel.dig4"],
stepSound: ["block.gravel.step1", "block.gravel.step2","block.gravel.step3","block.gravel.step4"]},
{
name: "leaves",
Name: "Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "oakSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "glass",
Name:"Glass",
transparent: true,
shadow: false,
breakTime: 0.45,
type: "glass",
glassSound: true
},
{ name: "cobblestone", Name:"Cobblestone", breakTime:10, type:"rock1", stoneSound:true},
{ name: "mossyCobble", Name:"Mossy Cobblestone", breakTime:10, type:"rock1", stoneSound:true},
{ name: "stoneBricks", Name:"Stone Bricks", breakTime:7.5, type:"rock1", stoneSound:true},
{ name: "mossyStoneBricks", Name:"Mossy Stone Bricks", breakTime:7.5, type:"rock1", stoneSound:true},
{ name: "bricks", Name:"Bricks", breakTime:10, type:"rock1", stoneSound:true},
{ name: "coalOre", Name:"Coal Ore", breakTime:15, type:"rock1", drop:"coal", stoneSound:true, experience:0.1},
{ name: "ironOre", Name:"Iron Ore", breakTime:15, type:"rock2", drop:"rawIron", stoneSound:true},
{ name: "goldOre", Name:"Gold Ore", breakTime:15, type:"rock3", drop:"rawGold", stoneSound:true},
{ name: "diamondOre", Name:"Diamond Ore", breakTime:15, type:"rock3", drop:"diamond", stoneSound:true, experience:1},
{ name: "redstoneOre", Name:"Redstone Ore", breakTime:15, type:"rock3", stoneSound:true, drop:"redstoneDust", dropAmount:[4,5], experience:0.3},
{ name: "lapisOre", Name:"Lapis Lazuli Ore", breakTime:15, type:"rock2", drop:"lapisLazuli", stoneSound:true, experience:0.5},
{ name: "emeraldOre", Name:"Emerald Ore", breakTime:15, type:"rock3", drop:"emerald", stoneSound:true, experience:1.5},
{ name: "coalBlock", Name:"Block of Coal", breakTime:25, type:"rock1", stoneSound:true},
{ name: "ironBlock", Name:"Block of Iron", breakTime:25, type:"metal2", stoneSound:true},
{ name: "goldBlock", Name:"Block of Gold", breakTime:15, type:"metal3", stoneSound:true},
{ name: "diamondBlock", Name:"Block of Diamond", breakTime:25, type:"metal3", stoneSound:true},
{ name: "redstoneBlock", Name:"Block of Redstone", breakTime:25, type:"metal1", stoneSound:true},
{ name: "lapisBlock", Name:"Block of Lapis Lazuli", breakTime:15, type:"metal2", stoneSound:true},
{ name: "emeraldBlock", Name:"Block of Emerald", breakTime:25, type:"metal3", stoneSound:true},
{ name: "oakPlanks", Name:"Oak Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "oakLog",
Name:"Oak Log",
textures: [ "logTop", "logSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "acaciaPlanks", Name:"Acacia Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "acaciaLog",
Name:"Acacia Log",
textures: [ "acaciaLogTop", "acaciaLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "birchPlanks", Name:"Birch Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "birchLog",
Name:"Birch Log",
textures: [ "birchLogTop", "birchLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "darkOakPlanks", Name:"Dark Oak Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "darkOakLog",
Name:"Dark Oak Log",
textures: [ "darkOakLogTop", "darkOakLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "junglePlanks", Name:"Jungle Planks", type:"wood", breakTime:3,woodSound:true},
{
name: "jungleLog",
Name:"Jungle Log",
textures: [ "jungleLogTop", "jungleLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "sprucePlanks", Name:"Spruce Planks", type:"wood", breakTime:3, woodSound:true},
{
name: "spruceLog",
Name:"Spruce Log",
textures: [ "spruceLogTop", "spruceLogSide" ],
breakTime:3,
woodSound:true,
type:"wood",
},
{ name: "whiteWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "orangeWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "magentaWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "lightBlueWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "yellowWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "limeWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "pinkWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "grayWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "lightGrayWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "cyanWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "purpleWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "blueWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "brownWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "greenWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "redWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "blackWool", breakTime:1.2, clothSound:true, shearBreakTime:0.2},
{ name: "whiteConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "orangeConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "magentaConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "lightBlueConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "yellowConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "limeConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "pinkConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "grayConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "lightGrayConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "cyanConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "purpleConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "blueConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "brownConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "greenConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "redConcrete", breakTime:9, type:"rock1", stoneSound:true},
{ name: "blackConcrete", breakTime:9, type:"rock1", stoneSound:true},
{
name: "bookshelf",
Name:"Bookshelf",
textures: [ "oakPlanks", "bookshelf" ],
stoneSound: true,
type:"wood", 
},
{ name: "netherrack",
Name:"Netherrack",
digSound: ["block.netherrack.dig1", "block.netherrack.dig2", "block.netherrack.dig3", "block.netherrack.dig4", "block.netherrack.dig5", "block.netherrack.dig6"],
stepSound: ["block.netherrack.step1", "block.netherrack.step2","block.netherrack.step3","block.netherrack.step4","block.netherrack.step5","block.netherrack.step6"]},
{ name: "soulSand",
Name:"Soul Sand",
speedFactor: 0.5,
digSound: ["block.soul_sand.dig1", "block.soul_sand.dig2", "block.soul_sand.dig3", "block.soul_sand.dig4", "block.soul_sand.dig5", "block.soul_sand.dig6","block.soul_sand.step7","block.soul_sand.step8","block.soul_sand.step9"],
stepSound: ["block.soul_sand.step1", "block.soul_sand.step2","block.soul_sand.step3","block.soul_sand.step4","block.soul_sand.step5","block.soul_sand.step6"]},
{
name: "glowstone",
Name:"Glowstone",
lightLevel: 15,
glassSound: true
},
{ name: "netherBricks",
Name:"Nether Bricks",
digSound: ["block.nether_bricks.dig1", "block.nether_bricks.dig2", "block.nether_bricks.dig3", "block.nether_bricks.dig4", "block.nether_bricks.dig5", "block.nether_bricks.dig6"],
stepSound: ["block.nether_bricks.step1", "block.nether_bricks.step2","block.nether_bricks.step3","block.nether_bricks.step4","block.nether_bricks.step5","block.nether_bricks.step6"]},
{ name: "redNetherBricks",
Name:"Red Nether Bricks",
digSound: ["block.nether_bricks.dig1", "block.nether_bricks.dig2", "block.nether_bricks.dig3", "block.nether_bricks.dig4", "block.nether_bricks.dig5", "block.nether_bricks.dig6"],
stepSound: ["block.nether_bricks.step1", "block.nether_bricks.step2","block.nether_bricks.step3","block.nether_bricks.step4","block.nether_bricks.step5","block.nether_bricks.step6"]},
{ name: "netherQuartzOre", 
Name:"Nether Quartz Ore",
digSound: ["block.nether_ore.dig1", "block.nether_ore.dig2", "block.nether_ore.dig3", "block.nether_ore.dig4"],
stepSound: ["block.nether_ore.step1", "block.nether_ore.step2","block.nether_ore.step3","block.nether_ore.step4","block.nether_ore.step5"]},
{
name: "quartzBlock",
name:"Block of Quartz",
textures: ["quartzBlockBottom", "quartzBlockTop", "quartzBlockSide"],
stoneSound: true
},
{
name: "quartzPillar",
Name:"Pillar",
textures: ["quartzPillarTop", "quartzPillar"],
stoneSound: true
},
{
name: "chiseledQuartzBlock",
Name:"Chiseled Quartz Block",
textures: ["chiseledQuartzBlock", "chiseledQuartzBlockTop"],
stoneSound: true
},
{ name: "chiseledStoneBricks", Name:"Chiseled Stone Bricks", stoneSound:true},
{ name: "smoothStone", Name:"Smooth Stone (it doesn't really look like stone)", stoneSound:true},
{ name: "andesite", Name:"Andesite", stoneSound:true},
{ name: "polishedAndesite", Name:"Polished Andesite", stoneSound:true},
{ name: "diorite", Name:"Diorite", stoneSound:true},
{ name: "polishedDiorite", Name:"Polished Diorite", stoneSound:true},
{ name: "granite", Name:"Granite", stoneSound:true},
{ name: "polishedGranite", Name:"Polished Granite", stoneSound:true},
{
name: "tnt",
Name:"Trinitrotoluene",
textures: ["tntBottom", "tntTop", "tntSides"],
//onupdate: function(x,y,z){
//  explode(x,y,z,5)
//}, flint and steel explodes it
explode: function(x,y,z){
world.setBlock(x,y,z,0)
world.addEntity(new PrimedTNT(x,y,z))
playSound("entity.tnt.fuse", 0, posSound(x,y,z))
},
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "portal",
solid:false,
shadow: false,
portal: true,
transparent:true,
lightLevel: 11,
ontouch: function(){
portalEffect += 2
if(portalEffect >= 100){
portalEffect = 0
//releasePointer()
if(world.type === "nether"){
world = dimensions.overworld
//world.loadSave(world.getSaveString())
//changeScene("loading")
}else{
world = dimensions.nether
//world.loadSave(world.getSaveString())
//changeScene("netherLoading")
}
playSound("block.portal.travel")
if(multiplayer) send({type:"playSound", data:"block.portal.travel", x:p.x,y:p.y,z:p.z})
}
},
glassSound: true
},
{ name: "obsidian", Name:"Obsidian", stoneSound:true},
{
name:"redstoneDust",
flatIcon:true,
iconTexture:"redstone",
/*onupdate: function(x,y,z){
var neigbors = [
world.getBlock(x+1,y,z),
world.getBlock(x-1,y,z),
world.getBlock(x,y,z+1),
world.getBlock(x,y,z-1),
world.getBlock(x,y+1,z),
world.getBlock(x,y-1,z)
];
if(neigbors.includes(blockIds.redstoneBlock) || neigbors.includes(blockIds.redstoneDustOn)){
world.setBlock(x,y,z, blockIds.redstoneDustOn, false, true)
}
}*/
},
{
name:"redstoneDustOn",
hidden: true,
/*onupdate: function(x,y,z){
var checked = []
function touchingSource(x,y,z, t){
t = t || 0;
t ++;
var neighbors = [
[x+1,y,z],
[x-1,y,z],
[x,y,z+1],
[x,y,z-1],
[x,y+1,z],
[x,y-1,z]
];
for(var i=0; i<neighbors.length; i++){
var value = neighbors[i];
var block = world.getBlock(value[0], value[1], value[2])
if(block === blockIds.redstoneBlock){
return true;
}
if(t<10){
if( !(checked.includes[value]) && (block === blockIds.redstoneDust || block === blockIds.buffer) && touchingSource(value[0], value[1], value[2], t)){
checked.push(value);
return true
};
}
}
return false;
}
if(!touchingSource(x,y,z)){
world.setBlock(x,y,z, blockIds.redstoneDust);
}
//world.setBlock(x,y,z, blockIds.redstoneDust);
}*/
},
{
name: "buffer",
textures: ["bufferTop", "bufferMiddle"],
onupdate: function(x,y,z){
setTimeout(() => {
var isOn = world.getBlock(x,y+1,z);
isOn = isOn === blockIds.redstoneDustOn || isOn === blockIds.redstoneBlock;
if(isOn && world.getBlock(x,y-1,z) === blockIds.redstoneDust ){
setTimeout(function(){world.setBlock(x,y-1,z, blockIds.redstoneDustOn)}, 500);
}
}, 10)
}
},
{ name: "soup"},
{ name: "soup2"},
{
name: "soup3",
transparent:true,
},
{ name: "soup4"},
{ name: "randomSoup"},
{
name: "redStain",
transparent: true,
},
{
name:"poision potion",
transparent:true,
crossShape:true,
},
{
name: "light",
textures: "none",
transparent:true,
lightLevel: 15,
solid: false,
icon: "glass",
shadow: false
},
{
name: "autumnLeaves",
transparent: true,
},
{
name: "darkLeaves",
transparent: true,
},
{
name: "redBerryLeaves",
transparent: true,
},
{
name: "blueBerryLeaves",
transparent: true,
},
{
name: "pinkLeaves",
transparent: true,
},
{ name: "flowerOftheValley",
Name:"Flower of The Valley",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "poppy",
Name:"Poppy",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "dandelion",
Name:"Dandelion",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "blueOrchid",
Name:"Blue Orchid",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
},
{ name: "pinkTulip",
Name:"Pink Tulip",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "orangeTulip",
Name:"Orange Tulip",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "redTulip",
Name:"Red Tulip",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "whiteTulip",
Name:"White Tulip",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "azureBluet",
Name:"Azure Bluet",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "cornFlower",
Name:"Cornflower",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "purpleFlower",
Name:"Purple Flower (i don't think this exsists in minecraft)",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "allium",
Name:"Allium",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "oxeyeDaisy",
Name:"Oxeye Daisy",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{ name: "lilac",
Name:"Lilac",
solid: false,
transparent: true,
shadow: false,
textures: "lilacTop",
tallcrossShape: true,
},
{ name: "roseBush",
Name:"Rose Bush",
solid: false,
transparent: true,
shadow: false,
textures: "roseBushTop",
tallcrossShape: true,
},
{ name: "peony",
Name:"Peony",
solid: false,
transparent: true,
shadow: false,
textures: "peonyTop",
tallcrossShape: true,
},
{ name: "witherRose",
Name:"Wither Rose",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
ontouch: () => {witherEffect = 120; witherDamage = 1; witherTime = 2000}
},
{ name: "TallGrass",
Name:"Grass",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
drop: "wheatSeeds",
dropAmount:[0,1],
dropSelfWhenSheared:true,
shearDropAmount:1
},
{ 
name: "oakDoor",
Name:"Oak Door",
transparent: true,
shadow: false,
textures: "oakDoorBottom",
door:true,
woodSound:true
},
{
name: "spruceDoor",
Name:"Spruce Door",
transparent: true,
shadow: false,
textures:"spruceDoorBottom",
door:true,
woodSound:true
},
{
name: "ironDoor",
Name:"Iron Door",
transparent: true,
shadow: false,
textures:"ironDoorBottom",
door:true,
woodSound:true
},
{
name: "darkOakDoor",
Name:"Dark Oak Door",
transparent: true,
shadow: false,
textures:"darkOakDoorBottom",
door:true,
woodSound:true
},
{
name: "birchDoor",
Name:"Birch Door",
transparent: true,
shadow: false,
textures:"birchDoorBottom",
door:true,
woodSound:true
},
{
name: "jungleDoor",
Name:"Jungle Door",
transparent: true,
shadow: false,
textures:"jungleDoorBottom",
door:true,
woodSound:true
},
{
name: "acaciaDoor",
Name:"Acacia Door",
transparent: true,
shadow: false,
textures:"acaciaDoorBottom",
door:true,
woodSound:true
},
{
name: "warpedDoor",
Name:"Warped Door",
transparent: true,
shadow: false,
textures:"warpedDoorBottom",
door:true,
woodSound:true
},
{
name: "crimsonDoor",
Name:"Crimson Door",
transparent: true,
shadow: false,
textures:"crimsonDoorBottom",
door:true,
woodSound:true
},
{
name: "torch",
Name:"Torch",
transparent: true,
shadow: false,
torch: true,
lightLevel: 13,
woodSound:true,
solid:false,
drop:"torch"
},
{
name: "soulTorch",
Name:"Soul Torch",
transparent: true,
shadow: false,
torch: true,
lightLevel: 10,
woodSound:true
},
{
name: "lantern",
Name:"Lantern",
transparent: true,
shadow: false,
lightLevel: 13,
iconTexture: "lanternIcon",
lantern: true,
digSound: ["block.lantern.dig1", "block.lantern.dig2", "block.lantern.dig3", "block.lantern.dig4", "block.lantern.dig5", "block.lantern.dig6"],
placeSound: ["block.lantern.place1", "block.lantern.place2","block.lantern.place3","block.lantern.place4","block.lantern.place5","block.lantern.place6"]
},
{
name: "soulLantern",
Name:"Soul Lantern",
transparent: true,
shadow: false,
lightLevel: 10,
iconTexture:"soulLanternIcon",
lantern: true,
digSound: ["block.lantern.dig1", "block.lantern.dig2", "block.lantern.dig3", "block.lantern.dig4", "block.lantern.dig5", "block.lantern.dig6"],
placeSound: ["block.lantern.place1", "block.lantern.place2","block.lantern.place3","block.lantern.place4","block.lantern.place5","block.lantern.place6"]
},
{
name: "beacon",
Name:"Beacon",
transparent: true,
shadow: false,
beacon: true,
lightLevel: 15,
glassSound: true
},
{
name: "cactus",
Name:"Cactus",
textures: ["cactusBottom", "cactusTop", "cactusSide"],
transparent: true,
cactus: true,
damage: 1,
potCross: true
},
{
name: "glassPane",
Name:"Glass Pane",
transparent: true,
shadow: false,
breakTime: 60,
pane:true,
textures: ["glassPaneTop","glassPaneTop","glass","glass","glassPaneSide","glassPaneSide"],
glassSound: true
},
{ name: "ladder",
Name:"Ladder",
transparent: true,
shadow: false,
wallFlat: true,ladder:true
},
{ name: "vine",
Name:"Vine",
transparent: true,
shadow: false,
wallFlat: true,ladder:true,
noDrop:true,
dropSelfWhenSheared:true,
shearBreakTime:0.35
},
{
name: "Water",
transparent: true,
liquid: true,
solid:false,
shadow: false, //to hide faces
semiTrans: true
},
{
name: "Lava",
transparent: true,
liquid: true,
solid:false,
lightLevel:15,
damage:4,
burnPlayer:true,
dieMessage: () => username+" tried to swim in lava.",
shadow: false
},
{
name: "craftingTable",
Name:"Crafting Table",
textures: ["oakPlanks","craftingTableTop","craftingTableFront","craftingTableSide"],
onclick: () => {changeScene("crafting"); releasePointer()},
woodSound: true
},
{
name: "crimsonNylium",
textures: ["netherrack", "crimsonNyliumTop", "crimsonNyliumSide"],
nyliumSound: true
},
{
name: "warpedNylium",
textures: ["netherrack", "warpedNyliumTop", "warpedNyliumSide"],
nyliumSound: true
},
{
name: "crimsonStem",
textures: ["crimsonStemTop", "crimsonStemSide"],
stemSound: true
},
{
name: "warpedStem",
textures: ["warpedStemTop", "warpedStemSide"],
stemSound: true
},
{ name: "netherWartBlock",
digSound: ["block.netherwart.dig1", "block.netherwart.dig2", "block.netherwart.dig3", "block.netherwart.dig4", "block.netherwart.dig5", "block.netherwart.dig6"],
stepSound: ["block.netherwart.step1", "block.netherwart.step2","block.netherwart.step3","block.netherwart.step4","block.netherwart.step5"]},
{ name: "warpedWartBlock",
digSound: ["block.netherwart.dig1", "block.netherwart.dig2", "block.netherwart.dig3", "block.netherwart.dig4", "block.netherwart.dig5", "block.netherwart.dig6"],
stepSound: ["block.netherwart.step1", "block.netherwart.step2","block.netherwart.step3","block.netherwart.step4","block.netherwart.step5"]},
{ name: "shroomlight", lightLevel:15,
digSound: ["block.shroomlight.dig1", "block.shroomlight.dig2", "block.shroomlight.dig3", "block.shroomlight.dig4", "block.shroomlight.dig5"],
stepSound: ["block.shroomlight.step1", "block.shroomlight.step2","block.shroomlight.step3","block.shroomlight.step4","block.shroomlight.step5","block.shroomlight.step6"]},
{ 
name: "warpedFungus",
solid: false,
shadow: false,
transparent: true,
crossShape: true,
potCross: true,
digSound: ["block.fungus.dig1", "block.fungus.dig2", "block.fungus.dig3", "block.fungus.dig4", "block.fungus.dig5", "block.fungus.dig6"]
},
{
name: "blackstone",
textures: ["blackstoneTop", "blackstone" ],
stoneSound: true
},
{ name: "gildedBlackstone", stoneSound: true},
{ name: "polishedBlackstoneBricks", stoneSound: true},
{ name: "chiseledPolishedBlackstone", stoneSound: true},
{
name: "netheriteBlock",
type:"rock4",
breakTime:250,
digSound: ["block.netherite.dig1", "block.netherite.dig2", "block.netherite.dig3", "block.netherite.dig4"],
stepSound: ["block.netherite.step1", "block.netherite.step2","block.netherite.step3","block.netherite.step4","block.netherite.step5","block.netherite.step6"]
},
{
name: "basalt",
textures: [ "basaltTop", "basaltSide" ],
basaltSound: true
},
{
name: "polishedBasalt",
textures: [ "polishedBasaltTop", "polishedBasaltSide" ],
basaltSound: true
},
{ name: "chain", transparent:true, shadow:false, chain:true, iconTexture:"chainIcon",
digSound: ["block.chain.dig1", "block.chain.dig2", "block.chain.dig3", "block.chain.dig4"],
stepSound: ["block.chain.step1", "block.chain.step2","block.chain.step3","block.chain.step4","block.chain.step5","block.chain.step6"]},
{ name: "warpedPlanks", woodSound:true},
{ 
name: "warpedTrapdoor",
transparent: true,
shadow: false,
trapdoor: true,
woodSound:true
},
{ name: "magma", Name:"Magma Block", lightLevel:15},
{
name: "crimsonFungus",
solid: false,
shadow: false,
transparent: true,
crossShape: true,
potCross: true,
digSound: ["block.fungus.dig1", "block.fungus.dig2", "block.fungus.dig3", "block.fungus.dig4", "block.fungus.dig5", "block.fungus.dig6"]
},
{ 
name: "warpedRoots",
transparent: true,
solid: false,
shadow: false,
crossShape: true,
rootSound: true
},
{ 
name: "crimsonRoots",
transparent: true,
solid: false,
shadow: false,
crossShape: true,
rootSound: true
},
{ 
name: "twistingVines",
transparent: true,
solid: false,
shadow: false,
transparent: true,
crossShape: true
},
{ 
name: "twistingVinesPlant",
transparent: true,
solid: false,
shadow: false,
transparent: true,
crossShape: true
},
{ 
name: "weepingVines",
transparent: true,
solid: false,
shadow: false,
crossShape: true
},
{ 
name: "weepingVinesPlant",
transparent: true,
solid: false,
shadow: false,
crossShape: true
},
{ 
name: "netherSprouts",
solid: false,
shadow: false,
transparent: true,
crossShape: true,
digSound: ["block.nether_sprouts.dig1", "block.nether_sprouts.dig2", "block.nether_sprouts.dig3", "block.nether_sprouts.dig4"],
stepSound: ["block.nether_sprouts.step1", "block.nether_sprouts.step2","block.nether_sprouts.step3","block.nether_sprouts.step4","block.nether_sprouts.step5"]
},
{ name: "stoneButton", textures:"stone", button:true, transparent: true },
{ 
name: "RespawnAnchorOff",
textures: ["respawnAnchorBottom", "respawnAnchorTopOff", "respawnAnchorSide0"],
onupdate: (x,y,z) => {if(world.type !== "nether"){explode(x,y,z,2)}}
},
{ 
name: "RespawnAnchor1",
textures: ["respawnAnchorBottom", "respawnAnchorTop1", "respawnAnchorSide1"],
//hidden: true
},
{ 
name: "RespawnAnchor2",
textures: ["respawnAnchorBottom", "respawnAnchorTop2", "respawnAnchorSide2"],
//hidden: true
},
{ 
name: "RespawnAnchor3",
textures: ["respawnAnchorBottom", "respawnAnchorTop3", "respawnAnchorSide3"],
//hidden: true
},
{ 
name: "RespawnAnchor",
textures: ["respawnAnchorBottom", "respawnAnchorTop", "respawnAnchorSide4"],
//hidden: true
},
{
name:"redBed",
Name:"Red Bed",
textures: "bedbottom",
iconTexture: "bedIcon",
flatIcon: true,
onclick: (x,y,z) => {
if(world.type !== ""){explode(x,y,z,5); return}
world.spawnPoint.x=x
world.spawnPoint.y=y
world.spawnPoint.z=z
Messages.add("You can't sleep in beds yet")
Messages.add("Respawn point set")
},
transparent: true,
bed: true,
bounciness: 0.6
},
{
name: "flintAndSteel",
Name:"Flint & Steel",
textures: "flintAndSteel",
item: true,
onuse: (x,y,z, block, replaceItem, useDurability) => {
if(block === blockIds.tnt){
blockData[blockIds.tnt].explode(x,y,z)
}else{
var pos = getPosition()
world.setBlock(pos[0],pos[1],pos[2],blockIds.fire)
useDurability(1)
}
},
durability:64,
stackSize:1
},
{
name: "barrier",
Name:"That Invisible Block with a ðŸš« Icon",
textures: "none",
iconTexture: "barrier",
flatIcon:true,
transparent:true
},
{
name: "oakSapling",
Name:"Oak Sapling",
crossShape: true,
potCross: true,
transparent: true,
solid: false,
shadow:false,
grow: function(wx,wy,wz){
let i=wx, j=wy, k=wz
var ground = wy//this.chunk.tops[i * 16 + k]
var top = ground + floor(4.5 + (Math.random()*2.5) )
var rand = floor(Math.random()*4096)
let tree = blockIds.oakLog
let leaf = blockIds.oakLeaves
let groundBlock = blockIds.dirt
//Center
for (let j = ground + 1; j <= top; j++) {
world.setBlock(i, j, k, tree)
}
world.setBlock(i, top + 1, k, leaf)
world.setBlock(i, ground, k, groundBlock)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top - 1, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top, wz + z, leaf)
}
}
}
}
//Top leaves
world.setBlock(wx + 1, top + 1, wz, leaf)
world.setBlock(wx, top + 1, wz - 1, leaf)
world.setBlock(wx, top + 1, wz + 1, leaf)
world.setBlock(wx - 1, top + 1, wz, leaf)
}
},
{ 
name: "crimsonTrapdoor",
Name:"Crimson Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "oakTrapdoor",
Name:"Oak Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "spruceTrapdoor",
Name:"Spruce Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "darkOakTrapdoor",
Name:"Dark Oak Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "birchTrapdoor",
Name:"Birck Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "jungleTrapdoor",
Name:"Jungle Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "acaciaTrapdoor",
Name:"Acaica Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "ironTrapdoor",
Name:"Iron Trapdoor",
transparent: true,
trapdoor: true,
woodSound: true
},
{ 
name: "cryingObsidian",
Name:"Obsidian: ðŸ˜¢",
shadow: false,
lightLevel: 10
},
{ name: "netherGoldOre",
Name:"Nether Gold Ore",
digSound: ["block.nether_ore.dig1", "block.nether_ore.dig2", "block.nether_ore.dig3", "block.nether_ore.dig4"],
stepSound: ["block.nether_ore.step1", "block.nether_ore.step2","block.nether_ore.step3","block.nether_ore.step4","block.nether_ore.step5"]},
{
name: "flowerPot",
Name:"Flower Pot",
transparent: true,
shadow: false,
pot: true,
iconTexture:"flowerPotIcon",
flatIcon:true
},
{
name: "acaciaSapling",
Name:"Acacia Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true
},
{
name: "birchSapling",
Name:"Birch Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true,
grow:function(wx,wy,wz){
let i=wx, j=wy, k=wz
var ground = wy//this.chunk.tops[i * 16 + k]
var top = ground + floor(4.5 + (Math.random()*2.5) )
var rand = floor(Math.random()*4096)
let tree = blockIds.birchLog
let leaf = blockIds.birchLeaves
let groundBlock = blockIds.dirt
//Center
for (let j = ground + 1; j <= top; j++) {
world.setBlock(i, j, k, tree)
}
world.setBlock(i, top + 1, k, leaf)
world.setBlock(i, ground, k, groundBlock)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top - 1, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.setBlock(wx + x, top, wz + z, leaf)
}
} else {
world.setBlock(wx + x, top, wz + z, leaf)
}
}
}
}
//Top leaves
world.setBlock(wx + 1, top + 1, wz, leaf)
world.setBlock(wx, top + 1, wz - 1, leaf)
world.setBlock(wx, top + 1, wz + 1, leaf)
world.setBlock(wx - 1, top + 1, wz, leaf)
}
},
{
name: "darkOakSapling",
Name:"Dark Oak Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true
},
{
name: "jungleSapling",
Name:"Jungle Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true
},
{
name: "spruceSapling",
Name:"Spruce Sapling",
transparent: true,
shadow: false,
solid: false,
crossShape: true,
potCross: true
},
{
name: "blueOrchidPot",
transparent: true,
shadow: false,
solid: false,
potCross: true
},
{
name: "warpedRootsPot",
transparent: true,
shadow: false,
solid: false,
potCross: true
},
{
name: "crimsonRootsPot",
transparent: true,
shadow: false,
solid: false,
potCross: true
},
{ name: "whiteCarpet", textures: "whiteWool", carpet: true, clothSound:true},
{ name: "orangeCarpet", textures: "orangeWool", carpet: true, clothSound:true},
{ name: "magentaCarpet", textures: "magentaWool", carpet: true, clothSound:true},
{ name: "lightBlueCarpet", textures: "lightBlueWool", carpet: true, clothSound:true},
{ name: "yellowCarpet", textures: "yellowWool", carpet: true, clothSound:true},
{ name: "limeCarpet", textures: "limeWool", carpet: true, clothSound:true},
{ name: "pinkCarpet", textures: "pinkWool", carpet: true, clothSound:true},
{ name: "grayCarpet", textures: "grayWool", carpet: true, clothSound:true},
{ name: "lightGrayCarpet", textures: "lightGrayWool", carpet: true, clothSound:true},
{ name: "cyanCarpet", textures: "cyanWool", carpet: true, clothSound:true},
{ name: "purpleCarpet", textures: "purpleWool", carpet: true, clothSound:true},
{ name: "blueCarpet", textures: "blueWool", carpet: true, clothSound:true},
{ name: "brownCarpet", textures: "brownWool", carpet: true, clothSound:true},
{ name: "greenCarpet", textures: "greenWool", carpet: true, clothSound:true},
{ name: "redCarpet", textures: "redWool", carpet: true, clothSound:true},
{ name: "blackCarpet", textures: "blackWool", carpet: true, clothSound:true},
{ name: "polishedBlackstone", stoneSound:true},
{ name: "chiseledNetherBricks",
digSound: ["block.nether_bricks.dig1", "block.nether_bricks.dig2", "block.nether_bricks.dig3", "block.nether_bricks.dig4", "block.nether_bricks.dig5", "block.nether_bricks.dig6"],
stepSound: ["block.nether_bricks.step1", "block.nether_bricks.step2","block.nether_bricks.step3","block.nether_bricks.step4","block.nether_bricks.step5","block.nether_bricks.step6"]},
{ name: "crackedNetherBricks",
digSound: ["block.nether_bricks.dig1", "block.nether_bricks.dig2", "block.nether_bricks.dig3", "block.nether_bricks.dig4", "block.nether_bricks.dig5", "block.nether_bricks.dig6"],
stepSound: ["block.nether_bricks.step1", "block.nether_bricks.step2","block.nether_bricks.step3","block.nether_bricks.step4","block.nether_bricks.step5","block.nether_bricks.step6"]},
{ name: "smoothBasalt", basaltSound: true},
{
name: "oakLogSW",
textures: ["logSide","logSide","logTop","oakLogSW"],
rotate: true, woodSound:true
},
{
name: "acaciaLogSW",
textures: ["acaciaLogSide","acaciaLogSide","acaciaLogTop","acaciaLogSW"],
rotate: true, woodSound:true
},
{
name: "birchLogSW",
textures: ["birchLogSide","birchLogSide","birchLogTop","birchLogSW"],
rotate: true, woodSound:true
},
{
name: "darkOakLogSW",
textures: ["darkOakLogSide","darkOakLogSide","darkOakLogTop","darkOakLogSW"],
rotate: true, woodSound:true
},
{
name: "jungleLogSW",
textures: ["jungleLogSide","jungleLogSide","jungleLogTop","jungleLogSW"],
rotate: true, woodSound:true
},
{
name: "spruceLogSW",
textures: ["spruceLogSide","spruceLogSide","spruceLogTop","spruceLogSW"],
rotate: true, woodSound:true
},
{
name: "crimsonStemSW",
textures: ["crimsonStemSide","crimsonStemSide","crimsonStemTop","crimsonStemSW"],
rotate: true, stemSound:true
},
{
name: "warpedStemSW",
textures: ["warpedStemSide","warpedStemSide","warpedStemTop","warpedStemSW"],
rotate: true, stemSound:true
},
{
name: "basaltSW",
textures: ["basaltSide","basaltSide","basaltTop","basaltSideSW"],
rotate: true, basaltSound:true
},
{
name: "polishedBasaltSW",
textures: ["polishedBasaltSide","polishedBasaltSide","polishedBasaltTop","polishedBasaltSideSW"],
rotate: true, basaltSound: true
},
{ name:"crimsonPlanks",woodSound:true },
{
name:"deadBush",
Name:"Dead Bush",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
drop: "stick",
dropAmount: [0,2],
dropSelfWhenSheared:true,
shearDropAmount:1
},
{ name:"stick", Name:"Stick", item:true },
{ name:"coal", Name:"Coal", item:true },
{ name:"ironIngot", Name:"Iron Ingot", item:true },
{ name:"copperIngot", Name:"Copper Ingot", item:true },
{ name:"goldIngot", Name:"Gold Ingot", item:true },
{ name:"diamond", Name:"Diamond", item:true },
{ name:"lapisLazuli", Name:"Lapis Lazuli", item:true },
{ name:"emerald", Name:"Emerald", item:true },
{ name:"copperOre", Name:"Copper Ore", breakTime:15, drop:"rawCopper", type:"rock2", stoneSound:true },
{ name:"rawIron", Name:"Raw Iron", item:true },
{ name:"rawCopper", Name:"Raw Copper", item:true },
{ name:"rawGold", Name:"Raw Gold", item:true },
{
name: "netherWart",
Name:"Nether Wart",
transparent: true,
shadow: false,
solid: false,
crop: true,
flatIcon:true,
iconTexture:"netherWartIcon"
},
{
name: "wheat",
Name:"Wheat",
transparent: true,
shadow: false,
solid: false,
crop: true,
flatIcon:true,
iconTexture:"wheatIcon",
drop:["wheat","wheatSeeds"]
},
{
name: "lodestone",
Name:"Lodestone",
textures: ["lodestoneTop", "lodestoneSide"]
},
{
name: "anvil",
Name:"Anvil",
transparent: true,
anvil: true,
digSound: "block.anvil.land",
stepSound: ["block.stone.step1", "block.stone.step2","block.stone.step3","block.stone.step4","block.stone.step5","block.stone.step6"],
onupdate: function(x,y,z,b){
fall(x,y,z,b)
},
},
{ name: "slime",
Name:"Slime",
transparent: true,
shadow: false,
bounciness: 0.8,
speedFactor: 0.5
},
{ 
name:"soulSoil",
Name:"Soul Soil",
speedFactor: 0.5,
},
{ name:"blueIce", Name:"Blue Ice", slide:0.9, glassSound: true},
{ name:"ice", Name:"Ice", transparent:true, shadow:false, slide:0.9, glassSound: true},
{ name:"packedIce", Name:"Packed Ice", slide:0.9, glassSound: true},
{ name:"calcite", Name:"Calcite" },
{
name:"furnace",
Name:"Furnace",
textures: ["furnaceTop","furnaceTop","furnaceSide","furnaceFront","furnaceSide","furnaceSide"],
rotate: true,
onclick: (x,y,z) => {
furnaceData.x = x
furnaceData.y = y
furnaceData.z = z
changeScene("furnace")
releasePointer()
},
stoneSound:true
},
{
name:"blastFurnace",
Name:"Blast Furnace",
textures: ["blastFurnaceTop","blastFurnaceTop","blastFurnaceSide","blastFurnaceFront","blastFurnaceSide","blastFurnaceSide"],
rotate: true
},
{
name:"smoker",
Name:"Smoker",
textures: ["smokerBottom","smokerTop","smokerSide","smokerFront","smokerSide","smokerSide"],
rotate: true
},
{
name:"noteBlock",
Name:"Note Block"
},
{
name:"jukebox",
Name:"Jukebox",
textures: ["jukeboxTop","jukeboxSide"]
},
{
name:"loom",
Name:"Loom",
textures: ["loomBottom","loomTop","loomFront","loomSide","loomSide","loomSide"],
rotate: true
},
{
name:"sandstone",
Name:"Sandstone",
textures: ["sandstoneBottom", "sandstoneTop", "sandstone"]
},
{ name:"chiseledSandstone",
Name:"Chiseled Sandstone",
textures: ["sandstoneBottom", "sandstoneTop","chiseledSandstone"]
},
{ name:"cutSandstone",
Name:"Cut Sandstone",
textures: ["sandstoneBottom", "sandstoneTop","cutSandstone"]
},
{ name:"smoothSandstone", Name:"Smooth Sandstone", textures:"sandstoneTop" },
{ name: "DoubleTallGrass",
Name:"Tall Grass",
solid: false,
transparent: true,
shadow: false,
textures: "tallGrassTop",
tallcrossShape: true,
},
{
name:"apple",
Name:"Apple",
edible: true,
eatWhenFull: false,
food: 4,
saturation: 2.4
},
{
name:"woodenPickaxe",
Name:"Wooden Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 2,
durability: 59,
attackDamage: 2
},
{
name:"stonePickaxe",
Name:"Stone Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 4,
durability: 131,
attackDamage: 2
},
{
name:"ironPickaxe",
Name:"Iron Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 6,
durability: 250,
attackDamage: 3
},
{
name:"goldenPickaxe",
Name:"Golden Pickax",
item: true,
pickaxe: true,
mineSpeed: 12,
durability: 32,
attackDamage: 4
},
{
name:"diamondPickaxe",
Name:"Diamond Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 8,
durability: 1561,
attackDamage: 5
},
{ name:"flint", Name:"Flint", item:true },
{
name:"mossBlock",
breakTime:0.15,
type: "plant2"
},
{
name:"mossCarpet",
textures: "mossBlock",
breakTime:0.15,
carpet: true
},
{
name: "caveVines",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
},
{
name: "caveVinesPlant",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
},
{
name: "caveVinesLit",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
lightLevel: 14
},
{
name: "caveVinesPlantLit",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
lightLevel: 14
},
{
name:"sporeBlossom",
Name:"Spore Blossom",
sporeBlossom: true,
shadow:false,
transparent: true
},
{
name: "rootedDirt",
},
{
name: "hangingRoots",
solid: false,
transparent: true,
shadow: false,
crossShape: true
},
{
name:"azalea",
Name:"Azalea",
textures: ["azaleaTop", "azaleaSide"],
potTex:["pottedAzaleaBushTop","pottedAzaleaBushSide"],
azalea: true,
transparent: true,
potCross:true
},
{
name:"floweringAzalea",
Name:"Flowering Azalea",
textures: ["floweringAzaleaTop","floweringAzaleaSide"],
potTex:["pottedFloweringAzaleaBushTop","pottedFloweringAzaleaBushSide"],
azalea: true,
transparent: true,
potCross:true
},
{
name:"sunflower",
Name:"Sunflower",
textures:["sunflowerBack","sunflowerFront","sunflowerTop"],
sunflower: true,
transparent:true,
shadow:false,
iconTexture: "sunflowerFront"
},
{
name: "bucket",
Name:"Bucket",
item: true,
onuse: (x,y,z, block, replaceItem) => {
if(blockData[block].name === "Water"){
replaceItem(blockIds.waterBucket)
world.setBlock(x,y,z,0)
}
if(blockData[block].name === "Lava"){
replaceItem(blockIds.lavaBucket)
world.setBlock(x,y,z,0)
}
if(block === blockIds.powderSnow){
replaceItem(blockIds.powderSnowBucket)
world.setBlock(x,y,z,0)
}
},
stackSize: 1,
allHitbox: true
},
{
name: "waterBucket",
Name:"Water Bucket",
item: true,
onuse: (x,y,z, block, replaceItem) => {
if(survival)replaceItem(blockIds.bucket)
var pos = getPosition()
world.setBlock(pos[0],pos[1],pos[2],blockIds.Water)
},
stackSize: 1
},
{
name: "lavaBucket",
Name:"Lava Bucket",
item: true,
onuse: (x,y,z, block, replaceItem) => {
if(survival)replaceItem(blockIds.bucket)
var pos = getPosition()
world.setBlock(pos[0],pos[1],pos[2],blockIds.Lava)
},
stackSize: 1
},
{
name: "cowSpawnEgg",
item: true,
onuse: (x,y,z, block, replaceItem) => {
world.addEntity(new Cow(p2.x,p2.y,p2.z))
}
},
{
name:"sugarCane",
Name:"Sugarcane",
iconTexture: "sugarCaneIcon",
crossShape: true,
solid: false,
transparent: true,
shadow: false,
},
{
name:"woodenSword",
Name:"Wooden Swords aren't even sharp!",
item: true,
sword: true,
durability: 59,
attackDamage: 4
},
{
name:"stoneSword",
Name:"Stone Sword",
item: true,
sword: true,
durability: 131,
attackDamage: 5
},
{
name:"ironSword",
Name:"Iron Sword",
item: true,
sword: true,
durability: 250,
attackDamage: 6
},
{
name:"goldenSword",
Name:"Golden Sword",
item: true,
sword: true,
durability: 32,
attackDamage: 4
},
{
name:"diamondSword",
Name:"Diamond Sword",
item: true,
sword: true,
durability: 1561,
attackDamage: 7
},
{ name:"azaleaLeaves",
transparent: true,
breakTime: 0,
type:"plant2",
drop: function(){
if(rand() > 0.05){
let r = floor(rand(2))
if(r === 0) return "azalea"
else return "floweringAzalea"
}
},
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{ name:"floweringAzaleaLeaves",
transparent: true,
breakTime: 0,
type:"plant2",
drop: function(){
if(rand() > 0.05){
let r = floor(rand(2))
if(r === 0) return "azalea"
else return "floweringAzalea"
}
},
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "pigSpawnEgg",
item: true,
onuse: (x,y,z, block, replaceItem) => {
world.addEntity(new Pig(p2.x,p2.y,p2.z))
}
},
{name:"tuff",Name:"Tuff",breakTime:1.5},
{name:"deepslate", Name:"Deepslate", textures:["deepslateTop","deepslate"],breakTime:3,deepslateSound:true},
{name:"cobbledDeepslate", Name:"Cobbled Deepslate",deepslateSound:true},
{name:"chiseledDeepslate", Name:"Chiseled Deepslate",breakTime:3.5,deepslateSound:true},
{name:"polishedDeepslate",Name:"Polished Deepslate",breakTime:3.5,deepslateSound:true},
{name:"deepslateTiles",Name:"Deepslate Tiles",breakTime:3.5,deepslateSound:true},
{name:"deepslateBricks",Name:"Deepslate Bricks",breakTime:3.5,deepslateBricksSound:true},
{name:"crackedDeepslateTiles",Name:"Cracked Deepslate Tiles",deepslateSound:true},
{name:"crackedDeepslateBricks",Name:"Cracked Deepslate Bricks",deepslateBricksSound:true},
{name:"deepslateCoalOre",Name:"Deepslate Coal Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateIronOre",Name:"Deepslate Iron Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateCopperOre",Name:"Deepslate Copper Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateGoldOre",Name:"Deepslate Gold Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateDiamondOre",Name:"Deepslate Diamond Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateRedstoneOre",Name:"Deepslate Redstone Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateEmeraldOre",Name:"Deepslate Emerald Ore",breakTime:22.5,deepslateSound:true},
{name:"deepslateLapisOre",Name:"Deepslate Lapis Lazuli Ore",breakTime:22.5,deepslateSound:true},
{name:"amethystBlock",Name:"Amethyst Block", amethystSound: true},
{name:"amethystShard",Name:"Amythest Shard",item:true},
{name:"buddingAmethyst",Name:"Budding Amethyst", amethystSound: true},
{name:"smallAmethystBud",Name:"Small Amethyst Bud",sideCross:true,
solid: false,
transparent: true,
shadow: false,
amethystClusterSound: true
},
{name:"mediumAmethystBud",Name:"Medium Amethyst Bud",sideCross:true,
solid: false,
transparent: true,
shadow: false,
amethystClusterSound: true
},
{name:"largeAmethystBud",Name:"Large Amethyst Bud",sideCross:true,
solid: false,
transparent: true,
shadow: false,
amethystClusterSound: true
},
{name:"amethystCluster",Name:"Amethyst Cluster",sideCross:true,
solid: false,
transparent: true,
shadow: false,
amethystClusterSound: true,
drop: "amethystShard"
},
{
name:"snowBlock",
Name:"Block of Snow",
textures:"snow",
breakTime: 1,
drop:"snowball",
dropAmount: 4
},
{
name:"snow",
Name:"Snow Layer",
layers: true,
transparent:true,
drop:"snowball",
breakTime: 0.5,
onupdate: function(x,y,z,b){
fall(x,y,z,b)
},
},
{
name:"powderSnow",
Name:"Powder Snow",
solid:false,
powder: true,
breakTime: 0.4,
drop:"air",
transparent:true
},
{
name:"snowball",
Name:"Snowball",
item: true,
/*onuse:function(){
var pd = p.direction
world.addEntity(new Snowball(p.x+pd.x,p.y+pd.y,p.z+pd.z, pd.x, pd.y, pd.z))
},
minusOnUse:true,
useAnywhere:true*/
},
{
name:"powderSnowBucket",
Name:"Powder Snow Bucket",
item:true,
onuse: (x,y,z, block, replaceItem) => {
if(survival)replaceItem(blockIds.bucket)
var pos = getPosition()
world.setBlock(pos[0],pos[1],pos[2],blockIds.powderSnow)
},
stackSize: 1
},
{
name:"bread",
Name:"Bread",
edible: true,
eatWhenFull: false,
food: 6,
saturation: 11
},
{
name:"boneBlock",
textures:["boneBlockTop","boneBlockSide"]
},
{
name:"farmland",
Name:"Farmland",
textures:["dirt","farmland","dirt"],
_1PixLower: true
},
{
name:"glowBerries",
Name:"Glow Berries",
edible: true,
eatWhenFull: false,
food: 2,
saturation: 0.4
},
{
name:"hayBlock",
Name:"Hay Bale",
textures:["hayBlockTop","hayBlockSide"],
type:"plant2"
},
{
name:"hayBlockSW",
textures: ["hayBlockSide","hayBlockSide","hayBlockTop","hayBlockSW"],
rotate: true,
},
{
name:"woodenShovel",
Name:"Wooden Shovel",
item: true,
shovel: true,
durability: 59,
mineSpeed:2,
attackDamage: 2
},
{
name:"stoneShovel",
Name:"Stone Shovel",
item: true,
shovel: true,
durability: 131,
mineSpeed:3.6,
attackDamage: 4
},
{
name:"ironShovel",
Name:"Iron Shovel",
item: true,
shovel: true,
durability: 250,
mineSpeed:6,
attackDamage: 4
},
{
name:"goldenShovel",
Name:"Golden Shovel",
item: true,
shovel: true,
durability: 32,
mineSpeed:12,
attackDamage: 2
},
{
name:"diamondShovel",
Name:"Diamond Shovel",
item: true,
shovel: true,
durability: 1561,
mineSpeed:8,
attackDamage: 5
},
{
name:"woodenAxe",
Name:"Wooden Axe",
item: true,
axe: true,
durability: 59,
mineSpeed:2,
attackDamage: 7,
attackSpeed:0.8
},
{
name:"stoneAxe",
Name:"Stone Axe",
item: true,
axe: true,
durability: 131,
mineSpeed:4,
attackDamage: 9,
attackSpeed:0.8
},
{
name:"ironAxe",
Name:"Iron Axe",
item: true,
axe: true,
durability: 250,
mineSpeed:6,
attackDamage: 9,
attackSpeed:0.9
},
{
name:"goldenAxe",
Name:"Golden Axe",
item: true,
axe: true,
durability: 32,
mineSpeed:12,
attackDamage: 7,
attackSpeed:1
},
{
name:"diamondAxe",
Name:"Diamond Axe",
item: true,
axe: true,
durability: 1561,
mineSpeed:8,
attackDamage: 9,
attackSpeed:1
},
{
name: "strippedOakLog",
textures: ["strippedOakLogTop", "strippedOakLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedOakLogSW",
textures: ["strippedOakLog", "strippedOakLog", "strippedOakLogTop","strippedOakLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedBirchLog",
textures: ["strippedBirchLogTop", "strippedBirchLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedBirchLogSW",
textures: ["strippedBirchLog", "strippedBirchLog", "strippedBirchLogTop","strippedBirchLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedAcaciaLog",
textures: ["strippedAcaciaLogTop", "strippedAcaciaLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedAcaciaLogSW",
textures: ["strippedAcaciaLog", "strippedAcaciaLog", "strippedAcaciaLogTop","strippedAcaciaLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedJungleLog",
textures: ["strippedJungleLogTop", "strippedJungleLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedJungleLogSW",
textures: ["strippedJungleLog", "strippedJungleLog", "strippedJungleLogTop","strippedJungleLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedSpruceLog",
textures: ["strippedSpruceLogTop", "strippedSpruceLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedSpruceLogSW",
textures: ["strippedSpruceLog", "strippedSpruceLog", "strippedSpruceLogTop","strippedSpruceLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name: "strippedDarkOakLog",
textures: ["strippedDarkOakLogTop", "strippedDarkOakLog"],
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedDarkOakLogSW",
textures: ["strippedDarkOakLog", "strippedDarkOakLog", "strippedDarkOakLogTop","strippedDarkOakLogSW"],
breakTime:3,
woodSound:true,
type:"wood",
rotate:true
},
{
name:"boneBlockSW",
textures:["boneBlockSide","boneBlockSide","boneBlockTop","boneBlockSW"],
rotate:true
},
{
name:"redMushroom",
Name:"Red Mushroom",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{
name:"brownMushroom",
Name:"Brown Mushroom",
solid: false,
transparent: true,
shadow: false,
potCross: true,
crossShape: true,
},
{
name:"mushroomStem",
mushroomBlock:true
},
{
name:"redMushroomBlock",
mushroomBlock:true
},
{
name:"brownMushroomBlock",
mushroomBlock:true
},
{
name:"mycelium",
Name:"Mycelium",
textures:["dirt","myceliumTop","myceliumSide"],
type:"ground"
},
{
name:"terracotta",
Name:"Terracotta"
},
{
name:"redTerracotta",
Name:"Terracotta with watermelon juice"
},
{
name:"blueTerracotta",
Name:"Terracotta with blueberry juice"
},
{
name:"cyanTerracotta",
Name:"Terracotta with cyan colored fruit punch"
},
{
name:"grayTerracotta",
Name:"Dusty Terracotta"
},
{
name:"limeTerracotta",
Name:"Terracotta with leaf juice"
},
{
name:"pinkTerracotta",
Name:"Terracotta with fruit punch"
},
{
name:"blackTerracotta",
Name:"Terracotta painted black"
},
{
name:"brownTerracotta",
Name:"Dirty Terracotta"
},
{
name:"greenTerracotta",
Name:"Terracotta with some other leaf juice"
},
{
name:"whiteTerracotta",
Name:"Terracotta with flour"
},
{
name:"orangeTerracotta",
Name:"Orange Terracotta"
},
{
name:"purpleTerracotta",
Name:"Purple Terracotta"
},
{
name:"yellowTerracotta",
Name:"Terracotta with lemon juice"
},
{
name:"magentaTerracotta",
Name:"Magenta Terracotta"
},
{
name:"lightBlueTerracotta",
Name:"Light Blue Terracotta"
},
{
name:"lightGrayTerracotta",
Name:"Light Gray Terracotta"
},
{
name:"redGlazedTerracotta",
rotate:true,
Name:"Watermelon Swirl"
},
{
name:"blueGlazedTerracotta",
rotate:true,
Name:"Blue Fan"
},
{
name:"cyanGlazedTerracotta",
rotate:true,
Name:"Creeper in the skies"
},
{
name:"grayGlazedTerracotta",
rotate:true,
Name:"Bunch of Dust"
},
{
name:"limeGlazedTerracotta",
rotate:true,
Name:"Overlapping lilies"
},
{
name:"pinkGlazedTerracotta",
rotate:true,
Name:"Pink turtle shell"
},
{
name:"blackGlazedTerracotta",
rotate:true,
Name:"Red monster"
},
{
name:"brownGlazedTerracotta",
rotate:true,
Name:"Mudslide in the ocean"
},
{
name:"greenGlazedTerracotta",
rotate:true,
Name:"Camouflaged monster"
},
{
name:"whiteGlazedTerracotta",
rotate:true,
Name:"Sun & clouds"
},
{
name:"orangeGlazedTerracotta",
rotate:true,
Name:"Flower Monster"
},
{
name:"purpleGlazedTerracotta",
rotate:true,
Name:"Sword & pickaxe monster"
},
{
name:"yellowGlazedTerracotta",
rotate:true,
Name:"Some kind of bug"
},
{
name:"magentaGlazedTerracotta",
rotate:true,
Name:"Arrow"
},
{
name:"lightBlueGlazedTerracotta",
rotate:true,
Name:"Monster sticking out tongue and eyes facing opposite direction"
},
{
name:"lightGrayGlazedTerracotta",
rotate:true,
Name:"Monster with blue eyes and mouth"
},
{
name:"ancientDebris",
Name:"Ancient Debris",
textures:["ancientDebrisTop","ancientDebrisSide"]
},
{
name:"wheatSeeds",
Name:"Seeds",
item:true,
useAs:function(x,y,z,block,face){
if(!block) return
if(face === "top" && blockData[block].name === "farmland") return "wheat"
}
},
{
name:"yellowStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"whiteStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"redStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"purpleStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"pinkStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"orangeStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"magentaStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"limeStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"lightGrayStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"lightBlueStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"greenStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"grayStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"cyanStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"brownStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"blueStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name:"blackStainedGlass",
transparent: true,
shadow: false,
breakTime: 0.3,
type:"glass",
glassSound: true
},
{
name: "yellowStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["yellowStainedGlassPaneTop","yellowStainedGlassPaneTop","yellowStainedGlass","yellowStainedGlass","yellowStainedGlassPaneSide","yellowStainedGlassPaneSide"],
glassSound: true
},
{
name: "whiteStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["whiteStainedGlassPaneTop","whiteStainedGlassPaneTop","whiteStainedGlass","whiteStainedGlass","whiteStainedGlassPaneSide","whiteStainedGlassPaneSide"],
glassSound: true
},
{
name: "redStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["redStainedGlassPaneTop","redStainedGlassPaneTop","redStainedGlass","redStainedGlass","redStainedGlassPaneSide","redStainedGlassPaneSide"],
glassSound: true
},
{
name: "purpleStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["purpleStainedGlassPaneTop","purpleStainedGlassPaneTop","purpleStainedGlass","purpleStainedGlass","purpleStainedGlassPaneSide","purpleStainedGlassPaneSide"],
glassSound: true
},
{
name: "pinkStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["pinkStainedGlassPaneTop","pinkStainedGlassPaneTop","pinkStainedGlass","pinkStainedGlass","pinkStainedGlassPaneSide","pinkStainedGlassPaneSide"],
glassSound: true
},
{
name: "orangeStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["orangeStainedGlassPaneTop","orangeStainedGlassPaneTop","orangeStainedGlass","orangeStainedGlass","orangeStainedGlassPaneSide","orangeStainedGlassPaneSide"],
glassSound: true
},
{
name: "magentaStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["magentaStainedGlassPaneTop","magentaStainedGlassPaneTop","magentaStainedGlass","magentaStainedGlass","magentaStainedGlassPaneSide","magentaStainedGlassPaneSide"],
glassSound: true
},
{
name: "limeStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["limeStainedGlassPaneTop","limeStainedGlassPaneTop","limeStainedGlass","limeStainedGlass","limeStainedGlassPaneSide","limeStainedGlassPaneSide"],
glassSound: true
},
{
name: "lightGrayStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["lightGrayStainedGlassPaneTop","lightGrayStainedGlassPaneTop","lightGrayStainedGlass","lightGrayStainedGlass","lightGrayStainedGlassPaneSide","lightGrayStainedGlassPaneSide"],
glassSound: true
},
{
name: "lightBlueStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["lightBlueStainedGlassPaneTop","lightBlueStainedGlassPaneTop","lightBlueStainedGlass","lightBlueStainedGlass","lightBlueStainedGlassPaneSide","lightBlueStainedGlassPaneSide"],
glassSound: true
},
{
name: "greenStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["greenStainedGlassPaneTop","greenStainedGlassPaneTop","greenStainedGlass","greenStainedGlass","greenStainedGlassPaneSide","greenStainedGlassPaneSide"],
glassSound: true
},
{
name: "grayStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["grayStainedGlassPaneTop","grayStainedGlassPaneTop","grayStainedGlass","grayStainedGlass","grayStainedGlassPaneSide","grayStainedGlassPaneSide"],
glassSound: true
},
{
name: "cyanStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["cyanStainedGlassPaneTop","cyanStainedGlassPaneTop","cyanStainedGlass","cyanStainedGlass","cyanStainedGlassPaneSide","cyanStainedGlassPaneSide"],
glassSound: true
},
{
name: "brownStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["brownStainedGlassPaneTop","brownStainedGlassPaneTop","brownStainedGlass","brownStainedGlass","brownStainedGlassPaneSide","brownStainedGlassPaneSide"],
glassSound: true
},
{
name: "blueStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["blueStainedGlassPaneTop","blueStainedGlassPaneTop","blueStainedGlass","blueStainedGlass","blueStainedGlassPaneSide","blueStainedGlassPaneSide"],
glassSound: true
},
{
name: "blackStainedGlassPane",
transparent: true,
shadow: false,
breakTime: 0.3,
pane:true,
textures: ["blackStainedGlassPaneTop","blackStainedGlassPaneTop","blackStainedGlass","blackStainedGlass","blackStainedGlassPaneSide","blackStainedGlassPaneSide"],
glassSound: true
},
{
name: "cobweb",
Name:"Cobweb",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
breakTime:20,
noDrop:true,
dropSelfWhenSheared:true,
shearBreakTime:0.4
},
{
name: "strippedCrimsonStem",
textures: ["strippedCrimsonStemTop", "strippedCrimsonStem"],
breakTime:2,
stemSound:true
},
{
name: "strippedCrimsonStemSW",
textures: ["strippedCrimsonStem", "strippedCrimsonStem", "strippedCrimsonStemTop","strippedCrimsonStemSW"],
breakTime:2,
stemSound:true,
rotate:true
},
{
name: "strippedWarpedStem",
textures: ["strippedWarpedStemTop", "strippedWarpedStem"],
breakTime:2,
stemSound:true
},
{
name: "strippedWarpedStemSW",
textures: ["strippedWarpedStem", "strippedWarpedStem", "strippedWarpedStemTop","strippedWarpedStemSW"],
breakTime:2,
stemSound:true,
rotate:true
},
{
name: "oakPressurePlate",
textures: "oakPlanks",
carpet: true
},
{
name: "birchPressurePlate",
textures: "birchPlanks",
carpet: true
},
{
name: "sprucePressurePlate",
textures: "sprucePlanks",
carpet: true
},
{
name: "junglePressurePlate",
textures: "junglePlanks",
carpet: true
},
{
name: "acaciaPressurePlate",
textures: "acaciaPlanks",
carpet: true
},
{
name:"darkOakPressurePlate",
textures: "darkOakPlanks",
carpet: true
},
{
name: "warpedPressurePlate",
textures: "warpedPlanks",
carpet: true
},
{
name: "crimsonPressurePlate",
textures: "crimsonPlanks",
carpet: true
},
{
name: "stonePressurePlate",
textures: "stone",
carpet: true
},
{
name: "polishedBlackstonePressurePlate",
textures: "polishedBlackstone",
carpet: true
},
{
name: "lightWeightedPressurePlate",
textures: "goldBlock",
carpet: true
},
{
name: "heavyWeightedPressurePlate",
textures: "ironBlock",
carpet: true
},
{
name:"oakButton",
textures:"oakPlanks",
button:true,
transparent: true
},
{
name:"birchButton",
textures:"birchPlanks",
button:true,
transparent: true
},
{
name:"acaciaButton",
textures:"acaciaPlanks",
button:true,
transparent: true
},
{
name:"darkOakButton",
textures:"darkOakPlanks",
button:true,
transparent: true
},
{
name:"jungleButton",
textures:"junglePlanks",
button:true,
transparent: true
},
{
name:"spruceButton",
textures:"sprucePlanks",
button:true,
transparent: true
},
{
name:"warpedButton",
textures:"warpedPlanks",
button:true,
transparent: true
},
{
name:"crimsonButton",
textures:"crimsonPlanks",
button:true,
transparent: true
},
{
name:"polishedBlackstoneButton",
textures:"polishedBlackstone",
button:true,
transparent:true
},
{
name:"copperBlock",
Name:"Block of Copper"
},
{
name:"crackedPolishedBlackstoneBricks",
Name:"Cracked Polished Blackstone Bricks"
},
{
name:"crackedStoneBricks",
Name:"Cracked Stone Bricks"
},
{
name:"woodenHoe",
Name:"Wooden Hoe",
item: true,
hoe: true,
durability: 59,
mineSpeed:2,
attackDamage: 1,
attackSpeed:1
},
{
name:"stoneHoe",
Name:"Stone Hoe",
item: true,
hoe: true,
durability: 131,
mineSpeed:4,
attackDamage: 1,
attackSpeed:2
},
{
name:"ironHoe",
Name:"Iron Hoe",
item: true,
hoe: true,
durability: 250,
mineSpeed:6,
attackDamage: 1,
attackSpeed:3
},
{
name:"goldenHoe",
Name:"Golden Hoe",
item: true,
hoe: true,
durability: 32,
mineSpeed:12,
attackDamage: 1,
attackSpeed:1
},
{
name:"diamondHoe",
Name:"Diamond Hoe",
item: true,
hoe: true,
durability: 1561,
mineSpeed:8,
attackDamage: 1,
attackSpeed:4
},
{
name:"podzol",
Name:"Podzol",
textures:["dirt","podzolTop","podzolSide"]
},
{
name:"rawIronBlock",
Name:"Block of Raw Iron",
type:"rock2",
breakTime:25
},
{
name:"rawGoldBlock",
Name:"Block of Raw Gold",
type:"rock3",
breakTime:25
},
{
name:"rawCopperBlock",
Name:"Block of Raw Copper",
type:"rock2",
breakTime:25
},
{
name:"netheriteScrap",
Name:"Netherite Scrap",
item:true
},
{
name:"netheriteIngot",
Name:"Netherite Ingot",
item:true
},
{
name:"netheritePickaxe",
Name:"Netherite Pickaxe",
item: true,
pickaxe: true,
mineSpeed: 9,
durability: 2031,
attackDamage: 6
},
{
name:"netheriteSword",
Name:"Netherite Sword",
item: true,
sword: true,
durability: 2031,
attackDamage: 8
},
{
name:"netheriteAxe",
Name:"Netherite Axe",
item: true,
axe: true,
durability: 2031,
mineSpeed:9,
attackDamage: 10,
attackSpeed:1
},
{
name:"netheriteShovel",
Name:"Netherite Shovel",
item: true,
shovel: true,
durability: 2031,
mineSpeed:9,
attackDamage: 6
},
{
name:"netheriteHoe",
Name:"Nethrite Hoe",
item: true,
hoe: true,
durability: 2031,
mineSpeed:9,
attackDamage: 1,
attackSpeed:4
},
{
name:"cartographyTable",
Name:"Cartograpgy Table",
textures: ["cartographyTableSide3","cartographyTableTop","cartographyTableSide3","cartographyTableSide1","cartographyTableSide2","cartographyTableSide3"],
rotate:true
},
{
name:"cake",
Name:"Cake",
textures:["cakeBottom","cakeTop","cakeSide"],
cake:true,
transparent:true,
flatIcon:true,
iconTexture:"cake"
},
{
name:"smithingTable",
Name:"Smithing Table",
textures:["smithingTableBottom","smithingTableTop","smithingTableFront","smithingTableSide"],
},
{
name:"stonecutter",
Name:"Stonecutter",
textures:["stonecutterBottom","stonecutterTop","stonecutterSide"],
transparent:true,
stonecutter:true
},
{
name:"itemFrame",
Name:"Item Frame",
transparent:true,
itemFrame:true
},
{
name:"enderPearl",
Name:"Ender Pearl",
item:true,
onuse:function(){
world.addEntity(new EnderPearl(p.x,p.y,p.z, p.direction.x, p.direction.y, p.direction.z))
},
minusOnUse:true,
useAnywhere:true
},
{
name:"ironNugget",
Name:"Iron Nugget",
item:true
},
{
name:"goldNugget",
Name:"Gold Nugget",
item:true
},
{
name:"pumpkin",
Name:"Pumpkin",
textures:["pumpkinSide","pumpkinTop","pumpkinSide"]
},
{
name:"carvedPumpkin",
Name:"Carved Pumpkin",
textures:["pumpkinSide","pumpkinTop","pumpkinSide","carvedPumpkin","pumpkinSide","pumpkinSide"],
rotate:true
},
{
name:"jackOLantern",
Name:"Jack o'Lantern",
textures:["pumpkinSide","pumpkinTop","pumpkinSide","jackOLantern","pumpkinSide","pumpkinSide"],
lightLevel:15,
rotate:true
},
{
name:"shears",
Name:"Shears",
item:true,
shears:true
},
{
name:"pumpkinSeeds",
Name:"Pumpkin Seeds",
item:true
},
{
name:"melonSeeds",
Name:"Watermelon Seeds",
item:true
},
{
name:"melon",
Name:"Watermelon",
textures:["melonSide","melonTop","melonSide"],
breakTime:1.5,
drop:"melonSlice",
dropAmount:[3,7]
},
{
name:"melonSlice",
Name:"Slice of Watermelon",
item:true,
edible: true,
food: 2,
saturation: 1.2
},
{
name:"redstoneLamp",
Name:"Redstone Lamp",
},
{
name:"glowstoneDust",
item:true
},
{
name:"quartz",
Name:"Quartz",
item:true
},
{
name: "endPortalFrame", 
Name:"End Portal Frame",
textures: ["endStone", "endPortalFrameTop", "endPortalFrameSide"]
},
{
name: "eyeOfEnder",
Name:"Eye of Ender",
item:true,
iconTexture:"enderEye",
shadow: false,
canPlace:function(block){
return block === blockIds.endPortalFrame
},
placeSound:["block.end_portal.eyeplace1","block.end_portal.eyeplace2","block.end_portal.eyeplace3"],
eyeOfEnder: true
},
{
name:"endStone",
Name:"Endstone",
},
{
name:"redSand",
Name:"Red Sand",
breakTime:0.75,
onupdate: function(x,y,z,block){
fall(x,y,z,block)
},
digSound: ["block.sand.dig1", "block.sand.dig2", "block.sand.dig3", "block.sand.dig4"],
stepSound: ["block.sand.step1", "block.sand.step2","block.sand.step3","block.sand.step4","block.sand.step5"]
},
{
name:"redSandstone",
Name:"Red Sandstone",
textures: ["redSandstoneBottom", "redSandstoneTop", "redSandstone"]
},
{ name:"chiseledRedSandstone",
Name:"Chiseled Red Sandstone",
textures: ["redSandstoneBottom", "redSandstoneTop","chiseledRedSandstone"]
},
{ name:"cutRedSandstone",
Name:"Cut Red Sandstone",
textures: ["redSandstoneBottom", "redSandstoneTop","cutRedSandstone"]
},
{ name:"smoothredSandstone", Name:"Smooth Red Sandstone", textures:"redSandstoneTop" },
{
name:"purpurBlock",
Name:"Purpur Block",
},
{
name:"purpurPillar",
Name:"Purpur Pillar",
textures:["purpurPillarTop","purpurPillar"]
},
{
name:"purpurPillarSW",
textures:["purpurPillar","purpurPillar","purpurPillarTop","purpurPillarSW"],
rotate:true
},
{
name:"prismarine",
Name:"Prismarine"
},
{
name:"prismarineBricks",
Name:"Prismarine Bricks"
},
{
name:"darkPrismarine",
Name:"Dark Prismarine",
},
{
name:"prismarineCrystals",
Name:"Prismarine Crystals",
item:true
},
{
name:"prismarineShard",
Name:"Prismarine Shard",
item:true
},
{
name:"seaLantern",
Name:"Sea Lantern",
lightLevel:15,
breakTime:0.45
},
{
name:"oakLeaves",
Name: "Oak Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "oakSapling"
else{
return rand() > 0.8 ? "orange" : "apple"
}
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "acaciaLeaves",
Name:"Acacia Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "acaciaSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "birchLeaves",
Name:"Birch Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "birchSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "darkOakLeaves",
Name:"Dark Oak Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "darkOakSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "jungleLeaves",
Name:"Jungle Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "jungleSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name: "spruceLeaves",
Name:"Spruce Leaves",
transparent: true,
breakTime: 0.3,
type:"plant2",
drop: function(){
if(rand() > 0.8){
let r = floor(rand(3))
if(r === 0) return "stick"
else if(r === 1) return "spruceSapling"
else return "apple"
}
},
dropSelfWhenSheared:true,
shearBreakTime:0.05,
digSound: ["block.grass.dig1", "block.grass.dig2", "block.grass.dig3", "block.grass.dig4"],
stepSound: ["block.grass.step1", "block.grass.step2","block.grass.step3","block.grass.step4","block.grass.step5","block.grass.step6"]
},
{
name:"spyglass",
Name:"Spyglass",
item:true,
spyglass:true
},
{
name:"egg",
Name:"Egg",
item:true
},
{
name:"noodles",
Name:"Noodles",
item:true
},
{
name:"bowl",
Name:"Bowl",
item:true
},
{
name:"mushroomStew",
Name:"Mushroom Stew",
edible: true,
eatWhenFull: false,
food: 6,
saturation: 7.2
},
{
name:"ramen",
Name:"Ramen! Yum!",
edible: true,
eatWhenFull: true,
food: 8,
saturation: 10
},
{
name:"orange",
Name:"Orange",
edible: true,
eatWhenFull: false,
food: 4,
saturation: 2.4
},
{
name:"fern",
Name:"Fern",
solid: false,
transparent: true,
shadow: false,
crossShape: true,
},
{
name: "largeFarn",
Name:"Large Fern",
solid: false,
transparent: true,
shadow: false,
textures: "largeFernTop",
tallcrossShape: true,
},
{
name:"fire",
fire:true,
damage:1,
burnPlayer:true,
transparent:true,
shadow:false,
solid:false,
lightLevel:15
},
{
name: "endRod",
Name:"End Rod",
transparent: true,
shadow: false,
lightLevel: 15
},
{
name: "oakWood",
Name:"Oak Wood",
textures: "logSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "acaciaWood",
Name:"Acacia Wood",
textures: "acaciaLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "birchWood",
Name:"Birch Wood",
textures: "birchLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "darkOakWood",
Name:"Dark Oak Wood",
textures: "darkOakLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "jungleWood",
Name:"Jungle Wood",
textures: "jungleLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "spruceWood",
Name:"Spruce Wood",
textures: "spruceLogSide",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "crimsonHyphae",
textures: "crimsonStemSide",
stemSound: true
},
{
name: "warpedHyphae",
textures: "warpedStemSide",
stemSound: true
},
{
name: "strippedOakWood",
Name:"Stripped Oak Wood",
textures: "strippedOakLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedAcaciaWood",
Name:"Stripped Acacia Wood",
textures: "strippedAcaciaLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedBirchWood",
Name:"Stripped Birch Wood",
textures: "strippedBirchLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedDarkOakWood",
Name:"Stripped Dark Oak Wood",
textures: "strippedDarkOakLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedJungleWood",
Name:"Stripped Jungle Wood",
textures: "strippedJungleLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedSpruceWood",
Name:"Stripped Spruce Wood",
textures: "strippedSpruceLog",
breakTime:3,
woodSound:true,
type:"wood",
},
{
name: "strippedCrimsonHyphae",
textures: "strippedCrimsonStem",
stemSound: true
},
{
name: "strippedWarpedHyphae",
textures: "strippedWarpedStem",
stemSound: true
},
/*
{ name: "pigFace" },
{ 
name: "steveFace",
textures: ["steveHeadTop", "steveFace"]
},
{ name: "sarahFace",
textures: ["sarahTop", "sarahFace"]
},
{
name: "lexiFace",
textures: ["lexiTop","lexiFace"]
},
{
name: "sallyFace",
textures: ["sallyTop","sallyFace"]
},
{
name: "face",
textures: ["faceTop","face"]
},//*/
];
window.BLOCK_COUNT = blockData.length;
window.console.log(BLOCK_COUNT,"blocks")
var texNum=0;for(var t in textures) texNum ++
window.console.log(texNum,"textures")
window.emptyFunc = function(){}
var stoneDigSound = ["block.stone.dig1", "block.stone.dig2", "block.stone.dig3", "block.stone.dig4"],
stoneStepSound = ["block.stone.step1", "block.stone.step2","block.stone.step3","block.stone.step4","block.stone.step5","block.stone.step6"],
woodDigSound = ["block.wood.dig1", "block.wood.dig2", "block.wood.dig3", "block.wood.dig4"],
woodStepSound = ["block.wood.step1", "block.wood.step2","block.wood.step3","block.wood.step4","block.wood.step5","block.wood.step6"],
clothDigSound = ["block.cloth.dig1", "block.cloth.dig2", "block.cloth.dig3", "block.cloth.dig4"],
clothStepSound = ["block.cloth.step1", "block.cloth.step2","block.cloth.step3","block.cloth.step4"],
glassDigSound = ["block.glass.dig1", "block.glass.dig2", "block.glass.dig3"],
nyliumDigSound = ["block.nylium.dig1", "block.nylium.dig2", "block.nylium.dig3", "block.nylium.dig4", "block.nylium.dig5", "block.nylium.dig6"],
nyliumStepSound = ["block.nylium.step1", "block.nylium.step2","block.nylium.step3","block.nylium.step4","block.nylium.step5","block.nylium.step6"],
stemDigSound = ["block.stem.dig1", "block.stem.dig2", "block.stem.dig3", "block.stem.dig4", "block.stem.dig5", "block.stem.dig6"],
stemStepSound = ["block.stem.step1", "block.stem.step2","block.stem.step3","block.stem.step4","block.stem.step5","block.stem.step6"],
basaltDigSound = ["block.basalt.dig1", "block.basalt.dig2", "block.basalt.dig3", "block.basalt.dig4", "block.basalt.dig5"],
basaltStepSound = ["block.basalt.step1", "block.basalt.step2","block.basalt.step3","block.basalt.step4","block.basalt.step5","block.basalt.step6"],
rootDigSound = ["block.roots.dig1", "block.roots.dig2", "block.roots.dig3", "block.roots.dig4", "block.roots.dig5", "block.roots.dig6"],
rootStepSound = ["block.roots.step1", "block.roots.step2","block.roots.step3","block.roots.step4","block.roots.step5","block.roots.step6"],
amethystPlaceSound = ["block.amethyst.place1","block.amethyst.place2","block.amethyst.place3","block.amethyst.place4"],
amethystDigSound = ["block.amethyst.dig1","block.amethyst.dig2","block.amethyst.dig3","block.amethyst.dig4"],
amethystStepSound = (function(){var arr=[]; for(var i=0; i<14; i++){arr.push("block.amethyst.step"+(i+1))};return arr})(),
amethystClusterPlaceSound = ["block.amethyst_cluster.place1", "block.amethyst_cluster.place2", "block.amethyst_cluster.place3", "block.amethyst_cluster.place4"],
amethystClusterDigSound = ["block.amethyst_cluster.dig1", "block.amethyst_cluster.dig2", "block.amethyst_cluster.dig3", "block.amethyst_cluster.dig4"],
deepslatePlaceSound = ["block.deepslate.place1","block.deepslate.place2","block.deepslate.place3","block.deepslate.place4","block.deepslate.place5","block.deepslate.place6"],
deepslateStepSound = ["block.deepslate.step1","block.deepslate.step2","block.deepslate.step3","block.deepslate.step4","block.deepslate.step5","block.deepslate.step6"],
deepslateDigSound = ["block.deepslate.dig1","block.deepslate.dig2","block.deepslate.dig3","block.deepslate.dig4"],
deepslateBricksPlaceSound = [1,2,3,4,5,6].map(v => "block.deepslate_bricks.place"+v),
deepslateBricksStepSound = [1,2,3,4,5].map(v => "block.deepslate_bricks.step"+v)
// Set defaults on blockData
for (let i = 1; i < BLOCK_COUNT; ++i) {
const data = blockData[i];
data.id = i;
if ( !("textures" in data) ) {
data.textures = new Array(6).fill(data.name);
} else if (typeof data.textures === "string") {
data.textures = new Array(6).fill(data.textures);
} else {
const { textures } = data;
if (textures.length === 3) {
textures[3] = textures[2];
textures[4] = textures[2];
textures[5] = textures[2];
} else if (textures.length === 2) {
// Top and bottom are the first texture, sides are the second.
textures[2] = textures[1];
textures[3] = textures[2];
textures[4] = textures[2];
textures[5] = textures[2];
textures[1] = textures[0];
}else if(textures.length === 4){
textures[4] = textures[5] = textures[3]
textures[3] = textures[2]
}
}
for(let t = 0; t<data.textures.length; t++){
if(!textures[data.textures[t]]){
window.console.log("Missing texture for "+data.textures[t])
data.textures[t] = "error"
}
}
data.transparent = data.transparent || false
data.shadow = data.shadow !== undefined ? data.shadow	: true
data.lightLevel = data.lightLevel || 0
data.onupdate = data.onupdate || emptyFunc
if(data.solid === undefined)data.solid = true
data.breakTime = data.breakTime ? data.breakTime*1000 : 0.05*1000 //time for breaking
if(data.dropAmount === undefined) data.dropAmount = 1
if(data.item || data.edible || data.crossShape || data.tallcrossShape || data.sideCross || data.ladder || data.torch || data.door || data.lantern || data.chain || data.sunflower || data.pane || data.fire) data.flatIcon = true
if(data.door) data.iconTexture = data.name
if(data.liquid) data.noHitbox = true
if(!data.stackSize)data.stackSize = 64
if(data.pickaxe){
data.stackSize = 1
data.attackTime = 20/1.2
}
if(data.sword){
data.stackSize = 1
data.attackTime = 20/1.6
}
if(data.shovel){
data.stackSize = 1
data.attackTime = 20/1
}
if(data.axe){
data.stackSize = 1
}
if(data.attackSpeed) data.attackTime = 20/data.attackSpeed
if(data.stoneSound){
data.digSound = stoneDigSound
data.stepSound = stoneStepSound
}
if(data.woodSound){
data.digSound = woodDigSound
data.stepSound = woodStepSound
}
if(data.clothSound){
data.digSound = clothDigSound
data.stepSound = clothStepSound
}
if(data.glassSound){
data.digSound = glassDigSound
data.placeSound = stoneDigSound
}
if(data.nyliumSound){
data.digSound = nyliumDigSound
data.stepSound = nyliumStepSound
}
if(data.stemSound){
data.digSound = stemDigSound
data.stepSound = stemStepSound
}
if(data.basaltSound){
data.digSound = basaltDigSound
data.stepSound = basaltStepSound
}
if(data.rootSound){
data.digSound = rootDigSound
data.stepSound = rootStepSound
}
if(data.amethystSound){
data.placeSound = amethystPlaceSound
data.digSound = amethystDigSound
data.stepSound = amethystStepSound
}
if(data.amethystClusterSound){
data.placeSound = amethystClusterPlaceSound
data.digSound = amethystClusterDigSound
}
if(data.deepslateSound){
data.placeSound = deepslatePlaceSound
data.digSound = deepslateDigSound
data.stepSound = deepslateStepSound
}
if(data.deepslateBricksSound){
data.placeSound = deepslateBricksPlaceSound
data.stepSound = deepslateBricksStepSound
}
}
let textureIds = {}
let idx = -1
for(var i in textures){
idx ++
textureIds[i] = idx
}
window.textureIds = textureIds
// survival inventory
let invItems = [1];
let invLength = 13*9;
for(let i=0; i<invLength; i++){
if(!invItems[i]){
invItems.push({id:0,amount:64})
}
}
//add something to inventory
function newInvItem(id){
//look for empty slot
for(let i=0; i<inventory.hotbar.length; i++){
if(!inventory.hotbar[i].id){
inventory.hotbar[i] = {id:id, amount:1, animation:1.5}
return true
}
if(inventory.hotbar[i].id === id && inventory.hotbar[i].amount < blockData[inventory.hotbar[i].id].stackSize){
inventory.hotbar[i].amount ++;
inventory.hotbar[i].animation = 1.5
return true
}
}
for(let i=0; i<invLength; i++){
if(!(invItems[i] && invItems[i].id)){
invItems[i] = {id:id, amount:1}
return true
}
if(invItems[i].id === id && invItems[i].amount < blockData[invItems[i].id].stackSize){
invItems[i].amount ++;
return true
}
}
return false
}
const crafts = {
"oakLog": {name:"oakPlanks", amount:4, shapeless: true},
"acaciaLog": {name:"acaciaPlanks", amount:4, shapeless: true},
"birchLog": {name:"birchPlanks", amount:4, shapeless: true},
"darkOakLog": {name:"darkOakPlanks", amount:4, shapeless: true},
"jungleLog": {name:"junglePlanks", amount:4, shapeless: true},
"spruceLog": {name:"sprucePlanks", amount:4, shapeless: true},
"oakPlanks,air,air,oakPlanks": {name:"stick", amount:4, shaped:true},
"acaciaPlanks,air,air,acaciaPlanks": {name:"stick", amount:4, shaped:true},
"birchPlanks,air,air,birchPlanks": {name:"stick", amount:4, shaped:true},
"darkOakPlanks,air,air,darkOakPlanks": {name:"stick", amount:4, shaped:true},
"junglePlanks,air,air,junglePlanks": {name:"stick", amount:4, shaped:true},
"sprucePlanks,air,air,sprucePlanks": {name:"stick", amount:4, shaped:true},
"oakPlanks,oakPlanks,air,oakPlanks,oakPlanks,air,oakPlanks,oakPlanks":{name:"oakDoor", amount:3},
"acaciaPlanks,acaciaPlanks,air,acaciaPlanks,acaciaPlanks,air,acaciaPlanks,acaciaPlanks":{name:"acaciaDoor", amount:3},
"birchPlanks,birchPlanks,air,birchPlanks,birchPlanks,air,birchPlanks,birchPlanks":{name:"birchDoor", amount:3},
"darkOakPlanks,darkOakPlanks,air,darkOakPlanks,darkOakPlanks,air,darkOakPlanks,darkOakPlanks":{name:"darkOakDoor", amount:3},
"junglePlanks,junglePlanks,air,junglePlanks,junglePlanks,air,junglePlanks,junglePlanks":{name:"jungleDoor", amount:3},
"sprucePlanks,sprucePlanks,air,sprucePlanks,sprucePlanks,air,sprucePlanks,sprucePlanks":{name:"spruceDoor", amount:3},
"warpedPlanks,warpedPlanks,air,warpedPlanks,warpedPlanks,air,warpedPlanks,warpedPlanks":{name:"warpedDoor", amount:3},
"crimsonPlanks,crimsonPlanks,air,crimsonPlanks,crimsonPlanks,air,crimsonPlanks,crimsonPlanks,air":{name:"crimsonDoor",amount:3},
"ironIngot,ironIngot,air,ironIngot,ironIngot,air,ironIngot,ironIngot,air":{name:"ironDoor",amount:3},
"oakPlanks,oakPlanks,oakPlanks,oakPlanks,oakPlanks,oakPlanks":{name:"oakTrapdoor", amount:2},
"birchPlanks,birchPlanks,birchPlanks,birchPlanks,birchPlanks,birchPlanks":{name:"birchTrapdoor", amount:2},
"darkOakPlanks,darkOakPlanks,darkOakPlanks,darkOakPlanks,darkOakPlanks,darkOakPlanks":{name:"darkOakTrapdoor", amount:2},
"junglePlanks,junglePlanks,junglePlanks,junglePlanks,junglePlanks,junglePlanks":{name:"jungleTrapdoor", amount:2},
"sprucePlanks,sprucePlanks,sprucePlanks,sprucePlanks,sprucePlanks,sprucePlanks":{name:"spruceTrapdoor", amount:2},
"acaciaPlanks,acaciaPlanks,acaciaPlanks,acaciaPlanks,acaciaPlanks,acaciaPlanks":{name:"acaciaTrapdoor", amount:2},
"warpedPlanks,warpedPlanks,warpedPlanks,warpedPlanks,warpedPlanks,warpedPlanks":{name:"warpedTrapdoor", amount:2},
"crimsonPlanks,crimsonPlanks,crimsonPlanks,crimsonPlanks,crimsonPlanks,crimsonPlanks":{name:"crimsonTrapdoor", amount:2},
"ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot":{name:"ironTrapdoor", amount:2},
"redWool,redWool,redWool,oakPlanks,oakPlanks,oakPlanks":{name:"redBed", amount:3},
"oakPlanks,oakPlanks,air,oakPlanks,oakPlanks":{name:"craftingTable"},
"birchPlanks,birchPlanks,air,birchPlanks,birchPlanks":{name:"craftingTable"},
"darkOakPlanks,darkOakPlanks,air,darkOakPlanks,darkOakPlanks":{name:"craftingTable"},
"acaciaPlanks,acaciaPlanks,air,acaciaPlanks,acaciaPlanks":{name:"craftingTable"},
"sprucePlanks,sprucePlanks,air,sprucePlanks,sprucePlanks":{name:"craftingTable"},
"junglePlanks,junglePlanks,air,junglePlanks,junglePlanks":{name:"craftingTable"},
"warpedPlanks,warpedPlanks,air,warpedPlanks,warpedPlanks":{name:"craftingTable"},
"crimsonPlanks,crimsonPlanks,air,crimsonPlanks,crimsonPlanks":{name:"craftingTable"},
"coal,air,air,stick":{name:"torch",amount:4},
"coal,coal,coal,coal,coal,coal,coal,coal,coal":{name:"coalBlock"},
"ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot,ironIngot":{name:"ironBlock"},
"goldIngot,goldIngot,goldIngot,goldIngot,goldIngot,goldIngot,goldIngot,goldIngot,goldIngot":{name:"goldBlock"},
"diamond,diamond,diamond,diamond,diamond,diamond,diamond,diamond,diamond":{name:"diamondBlock"},
"lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli,lapisLazuli":{name:"lapisBlock"},
"emerald,emerald,emerald,emerald,emerald,emerald,emerald,emerald,emerald":{name:"emeraldBlock"},
"oakPlanks,oakPlanks,oakPlanks,air,stick,air,air,stick":{name:"woodenPickaxe"},
"cobblestone,cobblestone,cobblestone,air,stick,air,air,stick":{name:"stonePickaxe"},
"ironIngot,ironIngot,ironIngot,air,stick,air,air,stick":{name:"ironPickaxe"},
"goldIngot,goldIngot,goldIngot,air,stick,air,air,stick":{name:"goldenPickaxe"},
"diamond,diamond,diamond,air,stick,air,air,stick":{name:"diamondPickaxe"},
"ironIngot,air,air,air,flint": {name:"flintAndSteel"},
"air,oakPlanks,air,air,oakPlanks,air,air,stick": {name:"woodenSword"},
"air,cobblestone,air,air,cobblestone,air,air,stick": {name:"stoneSword"},
"air,ironIngot,air,air,ironIngot,air,air,stick": {name:"ironSword"},
"air,goldIngot,air,air,goldIngot,air,air,stick": {name:"goldenSword"},
"air,diamond,air,air,diamond,air,air,stick": {name:"diamondSword"},
"air,air,air,snowBlock,snowBlock,snowBlock": {name:"snow", amount:6},
"snowball,snowball,air,snowball,snowball": {name:"snowBlock"},
"ironIngot,air,ironIngot,air,ironIngot":{name:"bucket"},
"cobblestone,cobblestone,cobblestone,cobblestone,air,cobblestone,cobblestone,cobblestone,cobblestone":{name:"furnace"},
"wheat,wheat,wheat":{name:"bread"},
"oakPlanks,air,air,stick,air,air,stick":{name:"woodenShovel"},
"cobblestone,air,air,stick,air,air,stick":{name:"stoneShovel"},
"ironIngot,air,air,stick,air,air,stick":{name:"ironShovel"},
"goldIngot,air,air,stick,air,air,stick":{name:"goldenShovel"},
"diamond,air,air,stick,air,air,stick":{name:"diamondShovel"},
"oakPlanks,oakPlanks,air,oakPlanks,stick,air,air,stick":{name:"woodenAxe"},
"cobblestone,cobblestone,air,cobblestone,stick,air,air,stick":{name:"stoneAxe"},
"ironIngot,ironIngot,air,ironIngot,stick,air,air,stick":{name:"ironAxe"},
"goldIngot,goldIngot,air,goldIngot,stick,air,air,stick":{name:"goldenAxe"},
"diamond,diamond,air,diamond,stick,air,air,stick":{name:"diamondAxe"},
"birchPlanks,birchPlanks":{name:"birchPressurePlate",shapeless:true},
"oakPlanks,oakPlanks":{name:"oakPressurePlate",shapeless:true},
"junglePlanks,junglePlanks":{name:"junglePressurePlate",shapeless:true},
"sprucePlanks,sprucePlanks":{name:"sprucePressurePlate",shapeless:true},
"darkOakPlanks,darkOakPlanks":{name:"darkOakPressurePlate",shapeless:true},
"acaciaPlanks,acaciaPlanks":{name:"acaciaPressurePlate",shapeless:true},
"warpedPlanks,warpedPlanks":{name:"warpedPressurePlate",shapeless:true},
"crimsonPlanks,crimsonPlanks":{name:"crimsonPressurePlate",shapeless:true},
"stone,stone":{name:"stonePressurePlate",shapeless:true},
"polishedBlackstone,polishedBlackstone":{name:"polishedBlackstone",shapeless:true},
"goldIngot,goldIngot":{name:"lightWeightedPressurePlate",shapeless:true},
"ironIngot,ironIngot":{name:"heavyWeightedPressurePlate",shapeless:true},
"strippedOakLog": {name:"oakPlanks", amount:4, shapeless: true},
"strippedAcaciaLog": {name:"acaciaPlanks", amount:4, shapeless: true},
"strippedBirchLog": {name:"birchPlanks", amount:4, shapeless: true},
"strippedDarkOakLog": {name:"darkOakPlanks", amount:4, shapeless: true},
"strippedJungleLog": {name:"junglePlanks", amount:4, shapeless: true},
"strippedSpruceLog": {name:"sprucePlanks", amount:4, shapeless: true},
"warpedStem": {name:"warpedPlanks", amount:4, shapeless: true},
"crimsonStem":{name:"crimsonPlanks", amount:4, shapeless: true},
"strippedWarpedStem": {name:"warpedPlanks", amount:4, shapeless: true},
"strippedCrimsonStem":{name:"crimsonPlanks", amount:4, shapeless: true},
"warpedPlanks,air,air,warpedPlanks": {name:"stick", amount:4},
"crimsonPlanks,air,air,crimsonPlanks": {name:"stick", amount:4},
"stone":{name:"stoneButton", shapeless: true},
"oakPlanks":{name:"oakButton", shapeless: true},
"birchPlanks":{name:"birchButton", shapeless: true},
"darkOakPlanks":{name:"darkOakButton", shapeless: true},
"acaciaPlanks":{name:"acaciaButton", shapeless: true},
"sprucePlanks":{name:"spruceButton", shapeless: true},
"junglePlanks":{name:"jungleButton", shapeless: true},
"warpedPlanks":{name:"warpedButton", shapeless: true},
"crimsonPlanks":{name:"crimsonButton", shapeless: true},
"polishedBlackstone":{name:"polishedBlackstoneButton", shapeless:true},
"ironBlock": {name:"ironIngot",amount:9,shapeless:true},
"goldBlock": {name:"goldIngot",amount:9,shapeless:true},
"coalBlock": {name:"coal",amount:9,shapeless:true},
"emeraldBlock": {name:"emerald",amount:9,shapeless:true},
"diamondBlock": {name:"diamond",amount:9,shapeless:true},
"copperIngot,copperIngot,copperIngot,copperIngot,copperIngot,copperIngot,copperIngot,copperIngot,copperIngot":{name:"copperBlock"},
"copperBlock": {name:"copperIngot",amount:9,shapeless:true},
"oakPlanks,oakPlanks,air,air,stick,air,air,stick":{name:"woodenHoe"},
"cobblestone,cobblestone,air,air,stick,air,air,stick":{name:"stoneHoe"},
"ironIngot,ironIngot,air,air,stick,air,air,stick":{name:"ironHoe"},
"goldIngot,goldIngot,air,air,stick,air,air,stick":{name:"goldenHoe"},
"diamond,diamond,air,air,stick,air,air,stick":{name:"diamondHoe"},
"rawIron,rawIron,rawIron,rawIron,rawIron,rawIron,rawIron,rawIron,rawIron":{name:"rawIronBlock"},
"rawGold,rawGold,rawGold,rawGold,rawGold,rawGold,rawGold,rawGold,rawGold":{name:"rawGoldBlock"},
"rawCopper,rawCopper,rawCopper,rawCopper,rawCopper,rawCopper,rawCopper,rawCopper,rawCopper":{name:"rawCopperBlock"},
"rawIronBlock":{name:"rawIron",amount:9,shapeless:true},
"rawGoldBlock":{name:"rawGold",amount:9,shapeless:true},
"rawCopperBlock":{name:"rawCopper",amount:9,shapeless:true},
"netheriteScrap,netheriteScrap,netheriteScrap,netheriteScrap,goldIngot,goldIngot,goldIngot,goldIngot":{name:"netheriteIngot"},
"netheriteIngot,netheriteIngot,netheriteIngot,air,stick,air,air,stick":{name:"netheritePickaxe"},
"netheriteIngot,air,air,netheriteIngot,air,air,stick":{name:"netheriteSword"},
"netheriteIngot,air,air,stick,air,air,stick":{name:"netheriteShovel"},
"netheriteIngot,netheriteIngot,air,netheriteIngot,stick,air,air,stick":{name:"netheriteAxe"},
"netheriteIngot,netheriteIngot,air,air,stick,air,air,stick":{name:"netheriteHoe"},
"netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot,netheriteIngot":{name:"netheriteBlock"},
"netheriteBlock":{name:"netheriteIngot",amount:9},
"wheat,wheat,wheat,wheat,wheat,wheat,wheat,wheat,wheat":{name:"hayBlock"},
"hayBlock":{name:"wheat",amount:9,shapeless:true},
"ironIngot":{name:"ironNugget",amount:9,shapeless:true},
"goldIngot":{name:"goldNugget",amount:9,shapeless:true},
"ironNugget,ironNugget,ironNugget,ironNugget,ironNugget,ironNugget,ironNugget,ironNugget,ironNugget":{name:"ironIngot"},
"goldNugget,goldNugget,goldNugget,goldNugget,goldNugget,goldNugget,goldNugget,goldNugget,goldNugget":{name:"goldIngot"},
"ironNugget,ironNugget,ironNugget,ironNugget,torch,ironNugget,ironNugget,ironNugget,ironNugget":{name:"lantern"},
"stick,air,stick,stick,stick,stick,stick,air,stick":{name:"ladder",amount:3},
"ironNugget,air,air,ironIngot,air,air,ironNugget":{name:"chain"},
"stone,stone,air,stone,stone":{name:"stoneBricks",amount:4},
"stoneBricks,vine":{name:"mossyStoneBricks",shapeless:true},
"cobblestone,vine":{name:"mossyCobble",shapeless:true},
"chiseledStoneBricks,chiseledStoneBricks,chiseledStoneBricks,chiseledStoneBricks,netheriteIngot,chiseledStoneBricks,chiseledStoneBricks,chiseledStoneBricks,chiseledStoneBricks":{name:"lodestone"},
"oakPlanks,oakPlanks,oakPlanks,oakPlanks,redstoneDust,oakPlanks,oakPlanks,oakPlanks,oakPlanks":{name:"noteBlock"},
"oakPlanks,oakPlanks,oakPlanks,oakPlanks,diamond,oakPlanks,oakPlanks,oakPlanks,oakPlanks":{name:"jukebox"},
"ironIngot,ironIngot,ironIngot,ironIngot,furnace,ironIngot,smoothStone,smoothStone,smoothStone":{name:"blastFurnace"},
"air,oakLog,air,oakLog,furnace,oakLog,air,oakLog":{name:"smoker"},
"carvedPumpkin,torch":{name:"jackOLantern",shapeless:true},
"air,ironIngot,air,ironIngot":{name:"shears"},
"melonSlice":{name:"melonSeeds",shapeless:true},
"melonSlice,melonSlice,melonSlice,melonSlice,melonSlice,melonSlice,melonSlice,melonSlice,melonSlice":{name:"melon"},
"redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust,redstoneDust":{name:"redstoneBlock"},
"air,redstoneDust,air,redstoneDust,glowstone,redstoneDust,air,redstoneDust":{name:"redstoneLamp"},
"glowstoneDust,glowstoneDust,air,glowstoneDust,glowstoneDust":{name:"glowstone"},
"cobblestone,quartz,air,quartz,cobblestone":{name:"diorite",amount:2,shaped:true},
"diorite,diorite,air,diorite,diorite":{name:"polishedDiorite",amount:4,shaped:true},
"cobblestone,diorite":{name:"andesite",amount:2,shapeless:true},
"andesite,andesite,air,andesite,andesite":{name:"polishedAndesite",amount:4,shaped:true},
"diorite,quartz":{name:"granite",shapeless:true},
"granite,granite,air,granite,granite":{name:"polishedGranite",amount:4,shaped:true},
"amethystShard,air,air,copperIngot,air,air,copperIngot":{name:"spyglass",shaped:true},
"oakPlanks,air,oakPlanks,air,oakPlanks":{name:"bowl",amount:4,shaped:true},
"redMushroom,brownMushroom,bowl":{name:"mushroomStew",shapeless:true},
"egg,noodles,wheatSeeds,bowl":{name:"ramen",shapeless:true},
"wheat,egg,wheat":{name:"noodles",shaped:true},
}
var breakTypes = {
plant: "axe",
wood: "axe",
metal1: "pickaxe",
metal2: ["stonePickaxe","ironPickaxe","diamondPickaxe","netheritePickaxe"],
metal3: ["ironPickaxe","diamondPickaxe","netheritePickaxe"],
metal4: ["diamondPickaxe","netheritePickaxe"],
rock1: "pickaxe",
rock2: ["stonePickaxe","ironPickaxe","diamondPickaxe","netheritePickaxe"],
rock3: ["ironPickaxe","diamondPickaxe","netheritePickaxe"],
rock4: ["diamondPickaxe","netheritePickaxe"],
ground: "shovel",
plant2: "hoe"
}
var handBreakable = [
"plant","wood","plant2","ground"
]
var allPickaxes = ["woodenPickaxe","stonePickaxe","ironPickaxe","diamondPickaxe","netheritePickaxe","goldenPickaxe"]
var allShovels = ["woodenShovel","stoneShovel","ironShovel","diamondShovel","netheriteShovel","goldenShovel"]
for(var b in breakTypes){
var t = breakTypes[b]
if(t === "pickaxe"){
breakTypes[b] = allPickaxes
}
if(t === "shovel"){
breakTypes[b] = allShovels
}
}
var smelts = {
rawIron: {name:"ironIngot", time:200, xp:0.7},
rawCopper: {name:"copperIngot", time:200, xp:0.7},
rawGold: {name:"goldIngot", time:200, xp:1},
sand: {name:"glass",time:200,xp:0.1, furnace:true},//furnace propertie means it can only be smelted in furnace
cobblestone: {name:"stone",time:200,xp:0.1, furnace:true},
stone: {name:"smoothStone", time:200, xp:0.1, furnace:true},
stoneBricks: {name:"crackedStoneBricks",time:200,xp:0.1, furnace:true}
}
var smeltFuel = { //time is in seconds
oakLog: {time:15},
coal: {time:80},
oakPlanks: {time:15},
stick: {time:5},
}
var achievementTypes = {
"Taking Inventory":{
score: 10,
description:"Open your inventory"
},
"Getting Wood":{
score:10,
description:"Punch a tree until a block of wood pops out."
},
"Benchmaking":{
score:10,
description:"Craft a Crafting Table with four blocks of wooden planks."
},
"Time to Mine!":{
score:10,
description:"Use planks and sticks to make a pickaxe."
},
"Getting an Upgrade":{
score:15,
description:"Construct a better pickaxe."
},
"Bake Bread":{
score:15,
description:"Turn wheat into bread."
},
"Time to Strike!":{
score:10,
description:"Use planks and sticks to make a sword."
},
"DIAMONDS!":{
score:20,
description:"Acquire diamonds with your iron tools."
},
"Diamonds to you!":{ //how is this possible to code???
score:15,
description:"Throw diamonds at another player."
},
"Time to Farm!":{
score:10,
description:"Make a Hoe."
}
}
for(var a in achievementTypes){
achievementTypes[a].name = a
}
var achievments = []
function achievment(name){
var a = achievementTypes[name]
if(!a) return console.log("No such achievment: "+name)
if(achievments.includes(name)) return
if(cheats) return
achievments.push(name)
sideMessage("Achievment made: "+a.name, a.description)
if(multiplayer) send({type:"achievment",data:a.name})
}
// implementation of xxHash
const {
seedHash,
hash
} = (() => {
// closure around mutable `seed`; updated via calls to `seedHash`
let seed = Math.random() * 2100000000 | 0;
const PRIME32_2 = 1883677709;
const PRIME32_3 = 2034071983;
const PRIME32_4 = 668265263;
const PRIME32_5 = 374761393;
const seedHash = s => {
seed = s | 0;
}
const { imul } = Math;
const hash = (x, y) => {
let h32 = 0;
h32 = seed + PRIME32_5 | 0;
h32 += 8;
h32 += imul(x, PRIME32_3);
h32 = imul(h32 << 17 | h32 >> 32 - 17, PRIME32_4);
h32 += imul(y, PRIME32_3);
h32 = imul(h32 << 17 | h32 >> 32 - 17, PRIME32_4);
h32 ^= h32 >> 15;
h32 *= PRIME32_2;
h32 ^= h32 >> 13;
h32 *= PRIME32_3;
h32 ^= h32 >> 16;
return h32 / 2147483647;
};
return {
seedHash,
hash
};
})();
const win = window.parent;
const doc = document;
const { console } = win;
win.world = undefined;
let worldSeed;
win.dimensions = null
function setSeed(seed){
worldSeed = seed
seedHash(worldSeed)
caveNoise = openSimplexNoise(worldSeed)
noiseProfile.noiseSeed(worldSeed)
}
class Marsaglia {
// from http://www.math.uni-bielefeld.de/~sillke/ALGORITHMS/random/marsaglia-c
nextInt() {
const { z, w } = this;
this.z = 36969 * (z & 65535) + (z >>> 16) & 0xFFFFFFFF;
this.w = 18000 * (w & 65535) + (w >>> 16) & 0xFFFFFFFF;
return ((this.z & 0xFFFF) << 16 | this.w & 0xFFFF) & 0xFFFFFFFF;
}
nextDouble() {
const i = this.nextInt() / 4294967296;
const is_less_than_zero = (i < 0) | 0; // cast to 1 or 0
return is_less_than_zero + i;
}
constructor(i1, i2) { // better param names
this.z = (i1 | 0) || 362436069;
this.w = i2 || hash(521288629, this.z) * 2147483647 | 0;
}
}
// The noise and random functions are copied from the processing.js source code; these others are polyfills made by me to avoid needing to remove all the pjs draw calls
const {
randomSeed,
random
} = (() => {
// closure around mut `currentRandom`
let currentRandom = null;
const randomSeed = seed => {
currentRandom = new Marsaglia(seed);
};
const random = (min, max) => {
if (!max) {
if (min) {
max = min;
min = 0;
} else {
min = 0;
max = 1;
}
}
return currentRandom.nextDouble() * (max - min) + min;
};
return {
randomSeed,
random
};
})();
class PerlinNoise {
// http://www.noisemachine.com/talk1/17b.html
// http://mrl.nyu.edu/~perlin/noise/
static grad3d(i, x, y, z) {
const h = i & 15; // convert into 12 gradient directions
const u = h < 8
? x
: y;
const v = h < 4
? y
: h === 12 || h === 14
? x
: z;
return ((h & 1) === 0 ? u : -u) + ((h & 2) === 0 ? v : -v)
}
static grad2d(i, x, y) {
const v = (i & 1) === 0
? x
: y;
return (i & 2) === 0
? -v
: v;
}
static grad1d(i, x) {
return (i & 1) === 0
? -x
: x;
}
static lerp(t, a, b) {
return a + t * (b - a);
}
// end of statics
// permutation
perm = new Uint8Array(0x200);
// prototype functions:
noise3d(x, y, z) {
const { floor } = Math;
const X = floor(x) & 0xff;
const Y = floor(y) & 0xff;
const Z = floor(z) & 0xff;
x -= floor(x);
y -= floor(y);
z -= floor(z);
const fx = (3 - 2 * x) * x * x;
const fy = (3 - 2 * y) * y * y;
const fz = (3 - 2 * z) * z * z;
const { perm } = this;
const p0 = perm[X] + Y;
const p00 = perm[p0] + Z;
const p01 = perm[p0 + 1] + Z;
const p1 = perm[X + 1] + Y;
const p10 = perm[p1] + Z;
const p11 = perm[p1 + 1] + Z;
const { lerp, grad3d } = PerlinNoise;
return lerp(
fz,
lerp(
fy,
lerp(
fx,
grad3d(perm[p00], x, y, z),
grad3d(perm[p10], x - 1, y, z)
),
lerp(
fx,
grad3d(perm[p01], x, y - 1, z),
grad3d(perm[p11],x - 1, y - 1, z)
)
),
lerp(
fy,
lerp(
fx,
grad3d(perm[p00 + 1], x, y, z - 1),
grad3d(perm[p10 + 1], x - 1, y, z - 1)
),
lerp(
fx,
grad3d(perm[p01 + 1], x, y - 1, z - 1),
grad3d(perm[p11 + 1], x - 1, y - 1, z - 1)
)
)
);
}
noise2d(x, y) {
const { floor } = Math;
const X = floor(x) & 0xff;
const Y = floor(y) & 0xff;
x -= floor(x);
y -= floor(y);
const { perm } = this;
const fx = (3 - 2 * x) * x * x;
const fy = (3 - 2 * y) * y * y;
const p0 = perm[X] + Y;
const p1 = perm[X + 1] + Y;
const { lerp, grad2d } = PerlinNoise;
return lerp(
fy,
lerp(
fx,
grad2d(
perm[p0],
x,
y
),
grad2d(
perm[p1],
x - 1,
y
)
),
lerp(
fx,
grad2d(
perm[p0 + 1],
x,
y - 1
),
grad2d(
perm[p1 + 1],
x - 1,
y - 1
)
)
);
}
noise1d(x) {
const { floor } = Math;
const X = floor(x) & 0xff;
x -= floor(x);
const fx = (3 - 2 * x) * x * x;
const { lerp, grad1d } = PerlinNoise;
return lerp(
fx,
grad1d(perm[X], x),
grad1d(perm[X + 1], x - 1)
);
}
constructor(seed) {
if (seed === undefined) {
throw new TypeError("A value for `seed` parameter was not provided to `PerlinNoise`");
}
const rnd = new Marsaglia(seed);
// generate permutation
const { perm } = this;
// fill 0x0..0x100
for (let i = 0; i < 0x100; ++i) {
perm[i] = i;
}
for (let i = 0; i < 0x100; ++i) {
const j = rnd.nextInt() & 0xFF;
const t = perm[j];
perm[j] = perm[i];
perm[i] = t;
}
// copy to avoid taking mod in perm[0]
// copies from first half of array, into the second half
perm.copyWithin(0x100, 0x0, 0x100);
}
}
const noiseProfile = {
generator: undefined,
octaves: 4,
fallout: 0.5,
seed: undefined,
noiseSeed(seed) {
this.seed = seed;
this.generator = new PerlinNoise(noiseProfile.seed);
},
noise(x, y, z) {
const { generator, octaves, fallout } = (this || noiseProfile);
let effect = 1,
k = 1,
sum = 0;
for (let i = 0; i < octaves; ++i) {
effect *= fallout;
const k = 1 << i;
let temp;
switch (arguments.length) {
case 1: {
temp = generator.noise1d(k * x);
break;
} case 2: {
temp = generator.noise2d(k * x, k * y);
break;
} case 3: {
temp = generator.noise3d(k * x, k * y, k * z);
break;
}
}
sum += effect * (1 + temp) / 2;
}
return sum;
}
};
const noise = noiseProfile.noise
let caveNoise;
// Copied and modified from https://github.com/blindman67/SimplexNoiseJS
function openSimplexNoise(clientSeed) {
const SQ4 = 2
const toNums = function(s) { return s.split(",").map(function(s) { return new Uint8Array(s.split("").map(function(v) { return Number(v) })) }) }
const decode = function(m, r, s) { return new Int8Array(s.split("").map(function(v) { return parseInt(v, r) + m })) }
const toNumsB32 = function(s) { return s.split(",").map(function(s) { return parseInt(s, 32) }) }
const NORM_3D = 1.0 / 206.0
const SQUISH_3D = 1 / 3
const STRETCH_3D = -1 / 6
var base3D = toNums("0000110010101001,2110210120113111,110010101001211021012011")
const gradients3D = decode(-11, 23, "0ff7mf7fmmfffmfffm07f70f77mm7ff0ff7m0f77m77f0mf7fm7ff0077707770m77f07f70")
var lookupPairs3D = function() { return new Uint16Array(toNumsB32("0,2,1,1,2,2,5,1,6,0,7,0,10,2,12,2,41,1,45,1,50,5,51,5,g6,0,g7,0,h2,4,h6,4,k5,3,k7,3,l0,5,l1,5,l2,4,l5,3,l6,4,l7,3,l8,d,l9,d,la,c,ld,e,le,c,lf,e,m8,k,ma,i,p9,l,pd,n,q8,k,q9,l,15e,j,15f,m,16a,i,16e,j,19d,n,19f,m,1a8,f,1a9,h,1aa,f,1ad,h,1ae,g,1af,g,1ag,b,1ah,a,1ai,b,1al,a,1am,9,1an,9,1bg,b,1bi,b,1eh,a,1el,a,1fg,8,1fh,8,1qm,9,1qn,9,1ri,7,1rm,7,1ul,6,1un,6,1vg,8,1vh,8,1vi,7,1vl,6,1vm,7,1vn,6")) }
var p3D = decode(-1, 5, "112011210110211120110121102132212220132122202131222022243214231243124213241324123222113311221213131221123113311112202311112022311112220342223113342223311342223131322023113322023311320223113320223131322203311322203131")
const setOf = function(count) { var a = [],i = 0; while (i < count) { a.push(i++) } return a }
const doFor = function(count, cb) { var i = 0; while (i < count && cb(i++) !== true) {} }
function shuffleSeed(seed,count){
seed = seed * 1664525 + 1013904223 | 0
count -= 1
return count > 0 ? shuffleSeed(seed, count) : seed
}
const types = {
_3D : {
base : base3D,
squish : SQUISH_3D,
dimensions : 3,
pD : p3D,
lookup : lookupPairs3D,
}
}
function createContribution(type, baseSet, index) {
var i = 0
const multiplier = baseSet[index ++]
const c = { next : undefined }
while(i < type.dimensions) {
const axis = ("xyzw")[i]
c[axis + "sb"] = baseSet[index + i]
c["d" + axis] = - baseSet[index + i++] - multiplier * type.squish
}
return c
}
function createLookupPairs(lookupArray, contributions){
var i
const a = lookupArray()
const res = new Map()
for (i = 0; i < a.length; i += 2) { res.set(a[i], contributions[a[i + 1]]); }
return res
}
function createContributionArray(type) {
const conts = []
const d = type.dimensions
const baseStep = d * d
var k, i = 0
while (i < type.pD.length) {
const baseSet = type.base[type.pD[i]]
let previous, current
k = 0
do {
current = createContribution(type, baseSet, k)
if (!previous) { conts[i / baseStep] = current; }
else { previous.next = current; }
previous = current
k += d + 1
} while(k < baseSet.length)
current.next = createContribution(type, type.pD, i + 1)
if (d >= 3) { current.next.next = createContribution(type, type.pD, i + d + 2) }
if (d === 4) { current.next.next.next = createContribution(type, type.pD, i + 11) }
i += baseStep
}
const result = [conts, createLookupPairs(type.lookup, conts)]
type.base = undefined
type.lookup = undefined
return result
}
let temp = createContributionArray(types._3D)
const contributions3D = temp[0], lookup3D = temp[1]
const perm = new Uint8Array(256)
const perm3D = new Uint8Array(256)
const source = new Uint8Array(setOf(256))
var seed = shuffleSeed(clientSeed, 3)
doFor(256, function(i) {
i = 255 - i
seed = shuffleSeed(seed, 1)
var r = (seed + 31) % (i + 1)
r += r < 0 ? i + 1 : 0
perm[i] = source[r]
perm3D[i] = (perm[i] % 24) * 3
source[r] = source[i]
})
base3D = undefined
lookupPairs3D = undefined
p3D = undefined
return function(x, y, z) {
const pD = perm3D
const p = perm
const g = gradients3D
const stretchOffset = (x + y + z) * STRETCH_3D
const xs = x + stretchOffset, ys = y + stretchOffset, zs = z + stretchOffset
const xsb = floor(xs), ysb = floor(ys), zsb = floor(zs)
const squishOffset	= (xsb + ysb + zsb) * SQUISH_3D
const dx0 = x - (xsb + squishOffset), dy0 = y - (ysb + squishOffset), dz0 = z - (zsb + squishOffset)
const xins = xs - xsb, yins = ys - ysb, zins = zs - zsb
const inSum = xins + yins + zins
var c = lookup3D.get(
(yins - zins + 1) |
((xins - yins + 1) << 1) |
((xins - zins + 1) << 2) |
(inSum << 3) |
((inSum + zins) << 5) |
((inSum + yins) << 7) |
((inSum + xins) << 9)
)
var i, value = 0
while (c !== undefined) {
const dx = dx0 + c.dx, dy = dy0 + c.dy, dz = dz0 + c.dz
let attn = 2 - dx * dx - dy * dy - dz * dz
if (attn > 0) {
i = pD[(((p[(xsb + c.xsb) & 0xFF] + (ysb + c.ysb)) & 0xFF) + (zsb + c.zsb)) & 0xFF]
attn *= attn
value += attn * attn * (g[i++] * dx + g[i++] * dy + g[i] * dz)
}
c = c.next
}
return value * NORM_3D + 0.5
}
}
//copied from https://gist.github.com/bzdgn/d722c961f45d97ea8efc6cef3aa39e76
function nodeRotationX(node, theta) {
var cosTheta = Math.cos(theta);
var sinTheta = Math.sin(theta);
var y = node.y;
var z = node.z;
node.y = y * cosTheta - z * sinTheta;
node.z = y * sinTheta + z * cosTheta;
}
function nodeRotationY(node, theta) {
var cosTheta = Math.cos(theta);
var sinTheta = Math.sin(theta);
var x = node.x;
var z = node.z;
node.x = x * cosTheta - z * sinTheta;
node.z = x * sinTheta + z * cosTheta;
}
var node = {x:0, y:0, z:0}
function getRotation(rotX, rotY){
//node.x = -sin(rotY) * cos(rotX)
//node.y = sin(rotX)
//node.z = cos(rotY) * cos(rotX)
node.x = 0;node.y=0;node.z=1
nodeRotationX(node,rotX+Math.PI)
node.z = -node.z
nodeRotationY(node,rotY)
return node
}
win.getRotation = getRotation
class PVector {
constructor(x, y, z) {
this.x = x
this.y = y
this.z = z
}
set(x, y, z) {
if (y === undefined) {
this.x = x.x
this.y = x.y
this.z = x.z
} else {
this.x = x
this.y = y
this.z = z
}
}
normalize() {
let mag = Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
this.x /= mag
this.y /= mag
this.z /= mag
}
add(v) {
this.x += v.x
this.y += v.y
this.z += v.z
}
mult(m) {
this.x *= m
this.y *= m
this.z *= m
}
crossProduct(x,y,z,vector) {
vector.x = this.y * z - this.z * y
vector.y = this.z * x - this.x * z
vector.z = this.x * y - this.y * x
return vector
}
product(x,y,z,vector) {
vector.x = this.x * x
vector.y = this.y * y
vector.z = this.z * z
return vector
}
}
let fill = function(r, g, b, a) {
if (g === undefined) {
g = r
b = r
}
a = a || a === 0 ? a : 100
ctx.fillStyle = "rgb(" + r + ", " + g + ", " + b + ", "+a+"%)"
}
let stroke = function(r, g, b) {
if (g === undefined) {
g = r
b = r
}
ctx.strokeStyle = "rgb(" + r + ", " + g + ", " + b + ")"
}
let line = function(x1, y1, x2, y2) {
ctx.moveTo(x1, y1)
ctx.lineTo(x2, y2)
}
let ellipse = function(x,y,w,h){
if(ctx.ellipse){
ctx.ellipse(x,y,w,h,0, 0,Math.PI*2)
}
}
function text(txt, x, y, h) {
h = h || 0
let lines = txt.split("\n")
for (let i = 0; i < lines.length; i++) {
if(lines[i].includes("Â§")){
let middle = ctx.measureText(lines[i].replace(/Â§./g, "")).width
let m2 = middle / 2
let codes = lines[i].split("Â§")
ctx.fillText(codes[0], x-m2, y + h * i)
let tx = ctx.measureText(codes[0]).width
for(var j=1; j<codes.length; j++){
let str = codes[j]
ctx.fillStyle = colors[str.substring(0,1)]
str = str.substring(1)
ctx.fillText(str, x+tx-m2, y+h*i)
tx += ctx.measureText(str).width
}
}else{
ctx.fillText(lines[i], x, y + h * i)
}
}
}
function textSize(size) {
ctx.font = size + 'px mojangles' // mojangles
}
let strokeWeight = function(num) {
ctx.lineWidth = num
}
function map(v, min, max, min2, max2){
return min2 + (max2 - min2) * ((v - min) / (max - min));
}
function dist2(x,y,x2,y2){
let xDist = x - x2
let yDist = y - y2
return sqrt((xDist*xDist)+(yDist*yDist))
}
function dist3(x,y,z,x2,y2,z2){
let xDist = x - x2
let yDist = y - y2
let zDist = z - z2
return sqrt((xDist*xDist)+(yDist*yDist)+(zDist*zDist))
}
win.dist2 = dist2; win.dist3 = dist3
const ARROW = "arrow"
const HAND = "pointer"
let cursor = function(type) {
canvas.style.cursor = type
}
randomSeed(Math.random() * 10000000 | 0)
async function createDatabase() {
return await new Promise(async (resolve, reject) => {
let request = window.indexedDB.open("Minecraft", 1)
request.onupgradeneeded = function(event) {
let DB = event.target.result
// Worlds will contain and ID containing the timestamp at which the world was created, a "saved" timestamp,
// and a "data" string that's identical to the copy/paste save string
let store = DB.createObjectStore("worlds", { keyPath: "id" })
store.createIndex("id", "id", { unique: true })
store.createIndex("data", "data", { unique: false })
}
request.onsuccess = function(e) {
resolve(request.result)
}
request.onerror = function(e) {
console.error(e)
reject(e)
}
})
}
async function loadFromDB(id) {
return await new Promise(async (resolve, reject) => {
let db = await createDatabase()
let trans = db.transaction("worlds", "readwrite")
let store = trans.objectStore("worlds")
let req = id ? store.get(id) : store.getAll()
req.onsuccess = function(e) {
resolve(req.result)
db.close()
}
req.onerror = function(e) { 
resolve(null)
db.close()
}
})
}
async function saveToDB(id, data) {
return new Promise(async (resolve, reject) => {
let db = await createDatabase()
let trans = db.transaction("worlds", "readwrite")
let store = trans.objectStore("worlds")
let req = store.put({ id: id, data: data })
req.onsuccess = function() {
resolve(req.result)
}
req.onerror = function(e) {
reject(e)
}
})
}
async function deleteFromDB(id) {
return new Promise(async (resolve, reject) => {
let db = await createDatabase()
let trans = db.transaction("worlds", "readwrite")
let store = trans.objectStore("worlds")
let req = store.delete(id)
req.onsuccess = function() {
resolve(req.result)
}
req.onerror = function(e) {
reject(e)
}
})
}
function save(getObj) {
world = dimensions.overworld
var obj = {
id: world.id,
edited: Date.now(),
name: world.name,
version: world.version || version,
code: world.getSaveString(),
nether: world.getNetherSaveString(),
inv: world.getInv(),
surviv: world.getSurvivStr(),
ent: world.getEntities(),
mod: world.mod,
thumbnail: genWorldImage(),
achievments:achievments,
playersInv: playersInv
}
if(!getObj){
saveToDB(world.id, obj).then(() => world.edited = Date.now()).catch(e => console.error(e))
}else{
return obj
}
}
win.save = save
function getSaveJSON(){
var obj = save(true)
delete obj.thumbnail
return JSON.stringify(obj)
}
let thumbCnv = document.createElement("canvas")
thumbCnv.width = thumbCnv.height = 70
let thumbCtx = thumbCnv.getContext("2d")
win.genWorldImage = function(){
var midx = gl.canvas.width / 2, midy = gl.canvas.height / 2
var size = min(gl.canvas.width, gl.canvas.height), s2 = size / 2
thumbCtx.drawImage(gl.canvas, midx - s2, midy - s2, size,size, 0,0,70,70)
return thumbCnv.toDataURL("image/png")
}
win.thumbCnv = thumbCnv, win.thumbCtx = thumbCtx
// Expose these functions to the global scope for debugging
win.saveToDB = saveToDB
win.loadFromDB = loadFromDB
win.createDatabase = createDatabase
win.deleteFromDB = deleteFromDB
//globals
//{
let version = "Alpha 1.0.4"
doc.title = "Minecraft "+version
let normReach = 5
let bigReach = 40
let reach = normReach // Max distance player can place or break blocks
let sky = [/*0.33, 0.54, 0.72, <originl sky>*/  0.6, 0.8, 0.9] // 0 to 1 RGB color scale
function changeSky(type){
if(type === "nether"){
sky = [0,0,0]
}else{
sky = [0.6, 0.8, 0.9]
}
}
let soundOn = true
let superflat = false
let trees = true
let caves = true
let survival = false;
let cheats = false
let dieMessage = ""
let touchMoveLimit = 500 //(touch screen only) miliseconds before it decides you want to break a block
let blockIds = {}
blockData.forEach(block => blockIds[block.name] = block.id)
blockData.forEach(block => {
if(block.rotate && block.name.includes("SW")){
var unSw = block.name.replace("SW",'')
if(blockIds[unSw]){
block.drop = unSw
var obj = blockData[blockIds[unSw]]
block.breakTime = obj.breakTime
block.type = obj.type
}
}
})
win.blockData = blockData
win.blockIds = blockIds
//fill the crafts that have less than 9 items. Ex: "thing" => "thing,air,air..."
let arr, arr2 = new Array(9)
for(let i in crafts){
arr = i.split(",")
for(let j = 0; j<9; j++){
if(arr[j]){
arr[j] = blockIds[arr[j]]
}else{
arr.push(0)
}
}
crafts[i].id = blockIds[crafts[i].name]
if(crafts[i].amount === undefined) crafts[i].amount = 1
crafts[arr.join(",")] = crafts[i]
//shaped recipes
if(crafts[i].shaped){
var craft2 = Object.assign({},crafts[i])
craft2.hidden = true
var xSpace = 3, ySpace = 3
//find how much empty space there is
for(var x=2; x>=0; x--){
var a = arr[x]
var b = arr[x+3]
var c = arr[x+6]
if(a||b||c){
xSpace = x
break
}
}
for(var y=2; y>=0; y--){
var a = arr[y*3]
var b = arr[(y*3)+1]
var c = arr[(y*3)+2]
if(a||b||c){
ySpace = y
break
}
}
var offsetX = -1, offsetY = -1
for(var x = xSpace; x<3; x++){
offsetX ++
for(var y = ySpace; y<3; y++){
offsetY ++
if(x === xSpace && y === ySpace) continue
arr2.fill(0)
for(var x2 = 0; x2<3; x2++){
for(var y2 = 0; y2<3; y2++){
var b = arr[x2+(y2*3)]
if(b){
var bx = x2 + offsetX
var by = y2 + offsetY
arr2[bx+(by*3)] = b
}
}
}
crafts[arr2.join(",")] = craft2
}
offsetY = -1
}
}
delete crafts[i]
}
win.crafts = crafts
function shapelessCraft(craft) {
let arr2 = craft;
arr2.sort(function(a, b) {
return a - b;
});
let arr = [];
for(let i in crafts) {
if(!crafts[i].shapeless) continue;
arr = i.split(",");
arr.sort(function(a, b) {
return a - b;
});
let comp = arr.map(num => Number(num));
if(arrayValues(comp,arr2)) {
return i;
}
}
}
for(i in smelts){
smelts[i].id = blockIds[smelts[i].name]
smelts[blockIds[i]] = smelts[i]
delete smelts[i]
}
for(i in smeltFuel){
smeltFuel[i].operations = smeltFuel[i].time / 10
smeltFuel[i].ops = smeltFuel[i].operations / smeltFuel[i].time //operations per seconds
smeltFuel[blockIds[i]] = smeltFuel[i]
delete smeltFuel[i]
}
win.smelts = smelts; win.smeltFuel = smeltFuel
let currentFov
// Configurable and savable settings
let settings = {
renderDistance: 4,
fov: 70, // Field of view in degrees
mouseSense: 100 // Mouse sensitivity as a percentage of the default
}
let locked = true
let generatedChunks
let mouseX, mouseY, mouseDown
let width = window.innerWidth
let height = window.innerHeight
class Skybox{ //from https://www.khanacademy.org/computer-programming/skybox/5709195676041216 with syntax modifications
constructor(){
this.vertexData = new Float32Array([
//bottom vertices
-1.0, -1.0, -1.0,
1.0, -1.0, -1.0,
1.0, -1.0,  1.0,
-1.0, -1.0,  1.0,
// top vertices
-1.0,  1.0, -1.0,
1.0,  1.0, -1.0,
1.0,  1.0,  1.0,
-1.0,  1.0,  1.0
]);
this.faceData = new Uint8Array([
//-y
1, 0, 3,
1, 3, 2,
//+y
5, 7, 4,
5, 6, 7,
//+x
1, 2, 5,
2, 6, 5,
//-x
0, 4, 3,
3, 4, 7,
//-z
0, 1, 5,
0, 5, 4,
//+z
3, 7, 6,
3, 6, 2
]);
gl.enableVertexAttribArray(glCache.skyboxVertex);
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
this.buffer = gl.createBuffer();
gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
gl.bufferData(gl.ARRAY_BUFFER, this.vertexData, gl.DYNAMIC_DRAW);
this.indexBuffer = gl.createBuffer();
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.faceData, gl.DYNAMIC_DRAW);
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
render() {
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.vertexAttribPointer(glCache.skyboxVertex, 3, gl.FLOAT, false, 4 * 3, 0);
gl.uniformMatrix4fv(glCache.skyboxView, false, p.transformation.elements)
gl.drawElements(gl.TRIANGLES, this.faceData.length, gl.UNSIGNED_BYTE, 0);
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
let skybox
let colors = {
0: "#000",
1: "#00a",
2: "#0a0",
3: "#0aa",
4: "#a00",
5: "#a0a",
6: "#fa0",
7: "#aaa",
8: "#555",
9: "#55f",
a: "#5f5",
b: "#5ff",
c: "#f55",
d: "#f5f",
e: "#ff5",
f: "#fff",
g: "#DDD605",//minecoin gold
}
if (height === 400) alert("Canvas is too small. Click the \"Settings\" button to the left of the \"Vote Up\" button under the editor and change the height to 600.")
let generator = {
height: 80, // Height of the hills
smooth: 0.01, // Smoothness of the terrain
extra: 30, // Extra height added to the world.
caveSize: 0.00, // Redefined right above where it's used
biomeSmooth: 0.007, // Smoothness of biomes
}
let maxHeight = 255
let blockOutlines = false
let blockFill = true
let updateHUD = true
var explodeVaos = [], experienceOrbVaos = [], genericVaos = []
let images = {
attackIndicatorCrosshair: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAHBAMAAAC8U9OhAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAKlBMVEUAAAD///86OzzS0tbX2erq7PI6OzxbSkmCbWxtWVfX2er////q7PL///+PAAbaAAAABnRSTlMAAAAAAABupgeRAAAAAWJLR0QN9rRh9QAAAAd0SU1FB+UICBISCBYUzEAAAAABb3JOVAHPoneaAAAASklEQVQI12NgYGOAAHYwyQilGRjSoKCzcxUYQOnVMAmFzs4zu4HABEobMKAZxeIAMwoNMAoKigouAWIsEoJRqxwFA7HpCFkClAAAVfMfb4rLipMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDgtMDhUMTg6MTc6MTgrMDA6MDB6HTijAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA4LTA4VDE4OjE3OjE4KzAwOjAwC0CAHwAAAABJRU5ErkJggg==",
deadHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAT0lEQVQoU62OwQ3AMAwCz1N4//E8RSqjuiVRn/ULocMQvLduGYBr2uhbmSlRVbgGQqkx7esjO/QvtG3yyq6aTeNv2wYQdYwV6MAXpOozfAGB1SIH1uYKrgAAAABJRU5ErkJggg==",
heart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAXElEQVQoU3XQQRKAIAiF4Z97ua8j19572UCSTytWjHwCgzGi9dQAzfEHj/YrwOJXgFqhFGl8pw4GepUXdADbBzqBvXeKnVaYwE0uPkEFuZcOio4+QqY8J5igAi9cnpgXB7uKmTQAAAAASUVORK5CYII=",
halfHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAY0lEQVQoU4WOwQ3AMAgDzS50i/zbkTtAxmCXVLiBoKhS+YDMYSxYNeYoAOoMF7xGVVWVopl5E14R6B1ojctjQgEuqPz9hG4A5w/ETBUMp5opPBJ0KAAmL1/S8XrF3O0Qwf34AVFaJQc+FQukAAAAAElFTkSuQmCC",
whiteHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAARUlEQVQoU61QQQ4AIAiK/z+aBsuNbN7ykKQEJtYJkhQEgMSu6VBRzQn7VRFKNbP7/0h9jscqZ+m2efePcg21ghS4SJP1BvDiR/68vCmnAAAAAElFTkSuQmCC",
witherHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJ1BMVEUAAAAAAAA7ExPLy8srKysvDw8nJycdHR0qDg4gICA5HBxHHBz///8BX2maAAAAAXRSTlMAQObYZgAAAAFiS0dEDIGzUWMAAAAHdElNRQfkCBcNAScIdsCqAAAAAW9yTlQBz6J3mgAAADpJREFUCNdjYBBkFGBgYFQSUmRgEDJRcRJgEHVxcxdgkJjmMkuAgbHTcyEDA4PEbKAaBsaNDCAAZAIArksGwN+RpQkAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMjNUMTM6MDE6MzkrMDA6MDAs2fv0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTIzVDEzOjAxOjM5KzAwOjAwXYRDSAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5Gf/zMgAAABV0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA51JEX7wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTk4MTg3Njk53UrJaAAAAA50RVh0VGh1bWI6OlNpemUAMELJbxjtAAAANnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nMTA3NzIwNzAyOTQ0NjEzMTIwMzcf2rzMAAAAAElFTkSuQmCC",
witherHalfHeart: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAlElEQVQoU2NkQID/UCYjAwMDMpsBJAAC/y24ucGME1+/MoiLi4PZL1++BFGMYF0gBVMOHmSIjo5mEHzyhOE+Dw/cfJBCsCJtNjaGP4qKcIkPHz5gKlJlY2P4KiLCwMHBwcDKysqATRHYTTCFvLy8cEXIboIZDVf49+9fuKPBLkcKArCJrqKiDLtfv0aRQ1cEVoiuGQBusjgHiQpSWAAAAABJRU5ErkJggg==",
freezeHeart:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAKVJREFUKFNjZECA/1AmIwMDAzKbASTAwMjE/N9r5zWwmq2u6gzeu2/C2SBpsC6QYKy1KsPio7cZzLTFGU5dfckQZ6PGsOjILbAmuCKQVpACDUF+hhvvP4IVwkwGK1r5/T9YIlGMnyFz/y2wKSA+SEM4JyPETWCH7v/E0Kj+D6xw/quPDPU3mRgYHPnAToYpQlGIrACsCikI4AphJsDk0BVBFKJpBgBbYkAHTYvoqAAAAABJRU5ErkJggg==",
freezeHalfHeart:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAAXNSR0IArs4c6QAAAJxJREFUKFNjZECA/1AmIwMDAzKbASTAwMjE/N9r5zWwmq2u6gwaGhpg9o0bN8DSYF3eu28yxFqrMiw+epvBTFucYbmTBdx8kEK4IpAoSIGGID9DvaEmpqKV3/8z3Hj/kSFRjJ8hc/8thru5/hiKQAL/GfZ/YmhU/wdW6KYDMQnZTTBdcIUgN8EUgF2OFARwExkc+VDk0BVBFKJpBgBAXzsHeDkERgAAAABJRU5ErkJggg==",
bubble: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAElBMVEUAAAAAAAAAlP/R6/9WuP////8DieLBAAAAAXRSTlMAQObYZgAAAAFiS0dEBfhv6ccAAAAHdElNRQflBhwAOQFmUYA6AAAAAW9yTlQBz6J3mgAAAC9JREFUCNdjYGAUZAACISUBBgZGBQZFIJPZgEUASDKASAYQCRR3BKoRcQGqAasHADZEAh1qmnpBAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA2LTI4VDAwOjU1OjAxKzAwOjAwEE5qGwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNi0yOFQwMDo1NTowMSswMDowMGET0qcAAAAASUVORK5CYII=",
bubblePop: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJAgMAAACd/+6DAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAADFBMVEUAAAAAlP8AAAD///8Mq+G/AAAAAXRSTlMAQObYZgAAAAFiS0dEAxEMTPIAAAAHdElNRQflBhwBAwbcXqHXAAAAAW9yTlQBz6J3mgAAACVJREFUCNdjYHBgYHBwZGCY0MbAoMDBAAYOjA4MLUwNDBIsYDEAStwDy/jv20gAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjEtMDYtMjhUMDE6MDM6MDYrMDA6MDB0NlEVAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIxLTA2LTI4VDAxOjAzOjA2KzAwOjAwBWvpqQAAAABJRU5ErkJggg==",
drumstickBG: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAQAAABKmM6bAAAABGdBTUEAALGPC/xhBQAAAAJiS0dEAP+Hj8y/AAAAB3RJTUUH5AgXESYlKYFJ9wAAAAFvck5UAc+id5oAAAA8SURBVAjXZc2xDcAwDAPBk6bR/tN4G6VQ4MTwV8SDBIHWNoEurMmIEX4yv0GZeYrlJLml/dnV5zdeeXU9xdgUJaD0S9kAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMjNUMTc6Mzg6MzcrMDA6MDDZqKf0AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTIzVDE3OjM4OjM3KzAwOjAwqPUfSAAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5Gf/zMgAAABV0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA51JEX7wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTk4MjA0MzE3ULE6DQAAAA50RVh0VGh1bWI6OlNpemUAMELJbxjtAAAANnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nMTIwMTgzMjY0MzU0MzI0OTcxOTF/QUjUAAAAAElFTkSuQmCC",
drumstick: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJBAMAAAASvxsjAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAJFBMVEUAAAAAAADUKiqyGBjfsY+4hFidbUNhPBt7US3i1ar/99z///9NiP3lAAAAAXRSTlMAQObYZgAAAAFiS0dECx/XxMAAAAAHdElNRQfkCBcRJiawiBhNAAAAAW9yTlQBz6J3mgAAAC5JREFUCNdjYBBkAAJGZQEgKeQUCCSFVVOBHMaKNJCQeAeIZBScCKIYpMCkIAMAcDQEJB3YgfcAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjAtMDgtMjNUMTc6Mzg6MzgrMDA6MDAv4NcdAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIwLTA4LTIzVDE3OjM4OjM4KzAwOjAwXr1voQAAACB0RVh0c29mdHdhcmUAaHR0cHM6Ly9pbWFnZW1hZ2ljay5vcme8zx2dAAAAGHRFWHRUaHVtYjo6RG9jdW1lbnQ6OlBhZ2VzADGn/7svAAAAFnRFWHRUaHVtYjo6SW1hZ2U6OkhlaWdodAA5Gf/zMgAAABV0RVh0VGh1bWI6OkltYWdlOjpXaWR0aAA51JEX7wAAABl0RVh0VGh1bWI6Ok1pbWV0eXBlAGltYWdlL3BuZz+yVk4AAAAXdEVYdFRodW1iOjpNVGltZQAxNTk4MjA0MzE4wA4nnAAAAA50RVh0VGh1bWI6OlNpemUAMELJbxjtAAAANnRFWHRUaHVtYjo6VVJJAGZpbGU6Ly8vdG1wL3RodW1ibHIvaW1nMTMzODIyODY4OTM1NDEwNTg2ODQQPSTjAAAAAElFTkSuQmCC",
halfDrumstick: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAjUlEQVQoU2NkQID/UCYjkhiYCRP4r6GhwdD98iWD7/v3yOJwRWAFB+fWMbxJqGe49+YNhkKQSWBFILChIJjhb+8qhicJRgzu1SvhJmJYB5J5HWPAkDR5P4YikADYREvBNwzS4qIMLRuuY1UEVgjz2eNraxhktUJQfIfua7CG/9/vMjByKsODAKsiWLgBAAIkLghjp1NyAAAAAElFTkSuQmCC",
experienceBar:[
"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALYAAAAKCAMAAAAuJlQ4AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACVVBMVEUAAAAJEAw2QzwuOjMpNS8UHxkgKyUgLCUZJB4oMy0IHBEWLRoiPSItSylDaSRjkECLylmIxleGxFdglzRajTE4XhpSgSxMdylxpEh4rk1yp0trm0UsSRVGbSV9tFCPzlx4rkxYijBQfiwzVRhLdShFbCVchTt6sU5TgixHbiVrnEV3rUxVhi5XiC81VhdxpUl9tVB2qkxOeSpNeSouSxV0p0p7s1B1qkt3rExTgy0yUxdZizCJx1iEwFVTgSxbkDGBvFNtnUVUhC4gOg0gOA10qkhllT9eijtOeioaPipMdilpmENIcSdzp0pvoUlTfy96sU95r05TgS1ypUiHxFd9tU9Why92qUtvoEZNeClqmUR2qktKdCiHw1aP0V1Ugy1IcCZJcidsnUZ8tFB5sE6IxlhTgi2NwGS09X6f2nGTyWh6pleOwmVeiT2Rx2ea0myEtF14o1VxmlBpmESY0GuCsFuLvmKLvmOKvGJmlEIvTxZnlUKGt112oVOf2nCo5neLyVluoEeVzGmu7nqj3nOPw2SRxmaCvVQzVRlolkOBsFuWzWplkUCDs1yArlqVy2l3olQWNSRq",
"mkWIuWCRxWdfiz5/rVmCslxmk0Gp5nab1W2Ds12NwmOXzmqDslwuTBWUy2l8qViz832QxGaLvWOCsVxjjz9jjj+LvWKJvGGCsV2MvmOIuWF+rFhHbyZvokhOeytlkkFfiT1RfyxzpkpPfCtUgyxSfyxzqEtWiC9fiT5Ugi1ijUB1qUxdjzVelDN5sE1zp0mKyVlwo0hPfStypkn///82xGcQAAAAAXRSTlMAQObYZgAAAAFiS0dExvoCes0AAAAHdElNRQflCgkTMix8LVIBAAAAAW9yTlQBz6J3mgAAAqxJREFUOMvVU2dXE0EU3VBlN8xiBAecQUWTWTVEoqBA7Bp1zcauKLGCPYBZFwgoYgdlKQp2sfeKYi/Y9X85s2QTjp/hA+/TPfe+d+edOfdxnGUYFsdZ4uITWMXHJQ4ySkoaMmsLZ0lIHsEqOSFxkFFKypBZW4brbw/TbHO8IFhpCbR4hgSelUkZIpN4s4+pDKVa2YBgjvJRMerGG9OpVmtkgtEGKUTfiODoI0LsEQP2c9QkNbYN1ejWAIhpI222UekZo2Fmlm0MAgCD7LHjbONRzoSJdgdBNglNmowBIFOckpTrmgphnnsaQtPzC7Khe8bMwiJXsQfOmj3HKTnnujzF82zz0woX2Bcu8gK4eMlSQqC8zCcTpIjE58B+gNzu5StW+pjhqtUiyadozdp1adL6Euix+xVpw0YRlHoACLg3ETFnM/ZDZcvWvMycbXh7WfkO585du2We48mevfuCFRWVBFftD1WqBzS1GpNgTa0arqs/eKjhcG2NplUwrjEUCoaPHD2WcfzEyVNN4XDz6TMtQV3TdFUlONBaqTKs",
"4LZ2nZpoWkcBbg+dPUe5OtTZdZ6Kmt5RhdsuNKsUqhcxuaQ3NWr65RZ85eq1uu5uXc/zlF+/wRpvoltt6u07Wn1IIxi13r13X1UfPMSPHj95qj97/oLQtXvSXxKisD9+VdIrNiAkl2JZJq8bkGL8e1ZRF0L5FL15S1XFT9E7RMRCyeXAENI+hdC+0vdIpC6QqrJCCAlA4PV+gNT5o1MGnWUyERXDsPhTL5VRD8AOGVHAOEc2+UyUauDH9i8i6ev7+g16cr//+Cn9+m33Y/DnL6LmbBlAxC5EER/NdiS0kdgZcaKB4gdmkTdRZCLSaJImN+AEzEQL/S5CNPvW/46FhdeAlBPMw4gFPnYEgtHP/QMLi7iU40xIawAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMS0xMC0wOVQxOTo1MDowOCswMDowMPuKPhEAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjEtMTAtMDlUMTk6NTA6MDgrMDA6MDCK14atAAAAAElFTkSuQmCC"
//splitting it because it is too long
].join(""),
generic: "https://16f81.codesandbox.io/images/generic.png",
explode: "https://16f81.codesandbox.io/images/explode.png",
experienceOrb:"https://16f81.codesandbox.io/images/experience_orb.png",
freezeEffect: "https://16f81.codesandbox.io/images/freeze_effect.png",
spyglassScope:"https://16f81.codesandbox.io/images/spyglass_scope.png",
minecraft: "https://16f81.codesandbox.io/images/minecraft.png",
panorama: "https://server.nathaniel2006.repl.co/panorama",
}
let crossOriginImages = ["generic","explode","experienceOrb","panorama"]
for(var i in images){
var url = images[i]
images[i] = new Image()
images[i].src = url
images[i].onload = () => loadDone()
images[i].onerror = err => {loadDone(); console.log(err)}
if(crossOriginImages.includes(i)){
images[i].crossOrigin = ""
}
}
win.images = images
let audioCtx
let CUBE,SLAB,STAIR,CROSS,TALLCROSS,DOOR,TORCH,LANTERN,LANTERNHANG,BEACON,
CACTUS,PANE,PORTAL,WALLFLAT,TRAPDOOR,TRAPDOOROPEN,FENCE,WALLPOST,WALL,
WALLU,//wall withe exteion under another wall
FENCQ,//fence (one extension)
BUTTON,CHAIN,POT,POTCROSS,CARPET,LAYER1,LAYER2,LAYER3,LAYER4,LAYER5,LAYER6,LAYER7,LAYER8,
FLIP,NORTH,SOUTH,EAST,WEST,ROTATION// Mask for the direction bits
let isCube
var prevConstVersion = null
var curConst = 0
function nextConst(rotate, flip){
var n = 1
if(rotate) n = 4
if(flip) n = 8
var p=curConst
curConst += n*500
return p
}
function verMoreThan(a,b){
a = a.split(".")
b = b.split(".")
if(a[0] > b[0]) return true
if(a[1] > b[1] && a[0] === b[0]) return true
if(a[2] > b[2] && a[1] === b[1]) return true
}
function constVersion(v){
if(v === prevConstVersion) return
prevConstVersion = v
isCube = 0xff
var verNum = v.replace(/Alpha /, '')//.replace(/(?<=\..*)\./g, '') //second regex removes the periods after the first
if(verMoreThan(verNum, "1.0.3") || verNum==="1.0.3"){
CUBE = 0
LAYER2 = SLAB = 0x100<<5 // 9th bit
LAYER3 = STAIR = 0x200<<5 // 10th bit
LAYER4 = CROSS = 0x300<<5
LAYER5 = TALLCROSS = 0x700<<5
LAYER6 = LANTERN = 0x900<<5
LAYER7 = LANTERNHANG=0x1100<<5
BEACON = 0x1300<<5
CACTUS = 0x1400<<5
POT = 0x1500<<5
POTCROSS = 0x1700<<5
LAYER1 = TORCH = 0x1800<<5
CHAIN = 0x1900<<5
LAYER8 = DOOR = 0x2100<<5
PORTAL = 0x2200<<5
WALLFLAT = 0x2300<<5
PANE = 0x4400<<5
TRAPDOOR = 0x2800<<5
TRAPDOOROPEN=0x4000<<5
FENCE = 0x6000<<5
WALLPOST = 0x6200<<5
WALL = 0x6400<<5
WALLU = 0x6600<<5 //wall withe exteion under another wall
FENCQ = 0x4100<<5 //fence (one extension)
BUTTON = 0x4200<<5
CARPET    = 0x4300<<5
FLIP      = 0x400 // 11th bit
NORTH = 0 // 12th and 13th bits for the 4 directions
SOUTH = 0x800
EAST = 0x1000
WEST = 0x1800
ROTATION = 0x1800 // Mask for the direction bits
isCube = BLOCK_COUNT
}else if(verNum >= 1){
CUBE = 0
LAYER2 = SLAB = 0x100 // 9th bit
LAYER3 = STAIR = 0x200 // 10th bit
LAYER4 = CROSS = 0x300
FLIP = 0x400 // 11th bit
LAYER5 = TALLCROSS = 0x700
LAYER6 = LANTERN = 0x900
LAYER7 = LANTERNHANG=0x1100
BEACON = 0x1300
CACTUS = 0x1400
POT = 0x1500
POTCROSS = 0x1700
LAYER1 = TORCH = 0x1800
CHAIN = 0x1900
LAYER8 = DOOR = 0x2100
PORTAL = 0x2200
WALLFLAT = 0x2300
PANE = 0x4400
TRAPDOOR = 0x2800
TRAPDOOROPEN=0x4000
FENCE = 0x6000
WALLPOST = 0x6200
WALL = 0x6400
WALLU = 0x6600 //wall withe exteion under another wall
FENCQ = 0x4100 //fence (one extension)
BUTTON = 0x4200
CARPET    = 0x4300
FLIP      = 0x400 // 11th bit
NORTH = 0 // 12th and 13th bits for the 4 directions
SOUTH = 0x800
EAST = 0x1000
WEST = 0x1800
ROTATION = 0x1800 // Mask for the direction bits
}else{
CUBE      = 0
LAYER2 = SLAB      = 0x100 // 9th bit
LAYER3 = STAIR     = 0x200 // 10th bit
LAYER4 = CROSS     = 0x2000
LAYER5 = TALLCROSS = 0x2200
LAYER8 = DOOR      = 0x2400
LAYER1 = TORCH     = 0x2600
LAYER6 = LANTERN   = 0x2800
LAYER7 = LANTERNHANG=0x3000
BEACON    = 0x4200
CACTUS    = 0x4400
PANE      = 0x4600
PORTAL    = 0x5000
WALLFLAT  = 0x4800
TRAPDOOR  = 0x5200
TRAPDOOROPEN=0x5400
FENCE     = 0x6000
WALLPOST  = 0x6200
WALL      = 0x6400
WALLU     = 0x6600 //wall withe exteion under another wall
FENCQ     = 0x6800 //fence (one extension)
BUTTON    = 0x7000
CHAIN     = 0x7200
POT       = 0x8000
POTCROSS  = 0x8200
CARPET    = 0x8400
FLIP      = 0x400 // 11th bit
NORTH     = 0 // 12th and 13th bits for the 4 directions
SOUTH     = 0x800
EAST      = 0x1000
WEST      = 0x1800
ROTATION  = 0x1800 // Mask for the direction bits
}
initBlockData()
genIcons()
}
let blockMode   = CUBE
win.changeBlockMode = m => blockMode = m
let tex
let textureAtlas
let textureMap
let dirtBuffer, netherBuffer
let dirtTexture, netherTexture, explodeTexture, panoramaTexture, experienceOrbTexture, genericTexture
let textureCoords
let texCoordsBuffers
let mainbg, dirtbg, netherbg // Background images
let bigArray = win.bigArray || new Float32Array(600000)
win.bigArray = bigArray
// Callback functions for all the screens; will define them further down the page
let drawScreens = {
"main menu": () => {},
"options": () => {},
"play": () => {},
"pause": () => {},
"creation menu": () => {},
"inventory": () => {},
"multiplayer menu": () => {},
"comingsoon menu": () => {},
"loadsave menu": () => {},
"marketplace": () => {},
}
let html = {
pause: {
enter: [window.message],
exit: [window.savebox, window.saveDirections, window.message]
},
"loadsave menu": {
enter: [window.worlds, window.boxCenterTop, window.uploadWorld, window.quota],
exit: [window.worlds, window.boxCenterTop, window.uploadWorld, window.quota],
onenter: () => {
window.boxCenterTop.placeholder = "Enter Save String (Optional)"
if (navigator && navigator.storage && navigator.storage.estimate) {
navigator.storage.estimate().then(data => {
window.quota.innerText = `${data.usage.toLocaleString()} / ${data.quota.toLocaleString()} bytes (${(100 * data.usage / data.quota).toLocaleString(undefined, { maximumSignificantDigits: 2 })}%) of your quota used`
}).catch(console.error)
}
window.boxCenterTop.onmousedown = e => {
let elem = document.getElementsByClassName("selected")
if (elem && elem[0]) {
elem[0].classList.remove("selected")
}
selectedWorld = 0
Button.draw()
}
},
onexit: () => {
window.boxCenterTop.onmousedown = null
}
},
"multiplayer menu": {
enter: [window.servers],
exit: [window.servers],
onenter: initServersMenu
},
"creation menu": {
enter: [window.boxCenterTop],
exit: [window.boxCenterTop],
onenter: () => {
window.boxCenterTop.placeholder = "Enter World Name"
window.boxCenterTop.value = ""
}
},
loading: {
onenter: () => {
startLoad()
constVersion(world.version || version)
},
onexit: () => {
if(multiplayer){
send({
"type":"joined",
username: username
})
}
Messages.add("<span style='color:lime;'>Press / to open chat. "+(cheats ? "Type /? for help with commands." : "")+"</span>")
}
},
netherLoading: {
onenter: startLoad
},
editworld: {
enter: [window.boxCenterTop, window.editworld],
exit: [window.boxCenterTop, window.editworld],
onenter: () => {
var w = worlds[selectedWorld]
window.boxCenterTop.placeholder = "Enter World Name"
window.boxCenterTop.value = w.name
window.url.value = w.thumbnail
}
},
marketplace: {
enter: [window.marketplace],
exit: [window.marketplace]
},
play: {
enter: [window.messageHolder, window.onscreenControl_Element],
exit: [window.messageHolder, window.onscreenControl_Element],
onexit: () => Messages.clear()
},
help:{
enter: [window.help],
exit: [window.help]
}
}
let screen = "main menu"
let previousScreen = screen
function changeScene(newScene) {
if (screen === "options") {
saveToDB("settings", settings).catch(e => console.error(e))
}
if (html[screen] && html[screen].exit) {
for (let element of html[screen].exit) {
element.classList.add("hidden")
}
}
if (html[newScene] && html[newScene].enter) {
for (let element of html[newScene].enter) {
element.classList.remove("hidden")
}
}
if (html[newScene] && html[newScene].onenter) {
html[newScene].onenter()
}
if (html[screen] && html[screen].onexit) {
html[screen].onexit()
}
previousScreen = screen
screen = newScene
mouseDown = false
drawScreens[screen]()
Button.draw()
Slider.draw()
if(newScene === "main menu" || newScene === "play" || newScene === "paused" || newScene === "inventory" || newScene === "options"){
themeColor.content = "#fff"
}else{
themeColor.content = "#110"
}
}
win.changeScene = changeScene
win.getScene = () => screen
let hitBox = {}
win.hitBox = hitBox
win.entHitbox = {}
let holding = 0
let crack = {
0: "crack1",
1: "crack2",
2: "crack3",
3: "crack4",
4: "crack5",
5: "crack6",
6: "crack7",
7: "crack8",
8: "crack9",
9: "crack10",
10: "crack10",
length: 10,
idx: 0, // block will break if idx is 4
tex: "crack1",
shape: null,
pos: [0,0,0],
prevPos: [-1,-1,-1],
breakStart: 0,
delayBetween:60*3/10,
delayDone:0,
entity: null, //define later
soundTimer: 0
}
win.crack = crack
let entityFire
let fireBlock
{
//command system
var copiedBlocks = [];
var prevPos;
function fill(x,y,z,x2,y2,z2, blockID){
if(x>x2){var px=x; x=x2; x2=px}
if(y>y2){var py=y; y=y2; y2=py}
if(z>z2){var pz=z; z=z2; z2=pz}
for(var X=x; x2>=X; X++){
for(var Y=y; y2>=Y; Y++){
for(var Z=z; z2>=Z; Z++){
world.setBlock(X,Y,Z,blockID)
}
}
}
}
function copy(x,y,z,x2,y2,z2){
if(x>x2){var px=x; x=x2; x2=px}
if(y>y2){var py=y; y=y2; y2=py}
if(z>z2){var pz=z; z=z2; z2=pz}
copiedBlocks = [];
for(var X=x; x2>=X; X++){
var xRow = [];
for(var Y=y; y2>=Y; Y++){
var yRow = []
for(var Z=z; z2>=Z; Z++){
yRow.push(world.getBlock(X,Y,Z));
}
xRow.push(yRow);
}
copiedBlocks.push(xRow);
}
}
function paste(x,y,z){
for(var X = 0; X<copiedBlocks.length; X++){
var xRow = copiedBlocks[X];
for(var Y=0; Y<xRow.length; Y++){
var yRow = xRow[Y];
for(var Z=0; Z<yRow.length; Z++){
var block = yRow[Z];
world.setBlock(X+x,Y+y,Z+z,block)
}
}
}
}
function replaceBlocks(x,y,z,x2,y2,z2, replace, into){
if(x>x2){var px=x; x=x2; x2=px}
if(y>y2){var py=y; y=y2; y2=py}
if(z>z2){var pz=z; z=z2; z2=pz}
for(var X=x; x2>=X; X++){
for(var Y=y; y2>=Y; Y++){
for(var Z=z; z2>=Z; Z++){
if(world.getBlock(X,Y,Z) === replace){
world.setBlock(X,Y,Z,into)
}
}
}
}
}
function fromPlayer(){
prevPos = [p2.x, p2.y, p2.z]
}
function fillToPlayer(id){
//fills at player feet
fill(prevPos[0], prevPos[1]-1, prevPos[2], p2.x, p2.y-1, p2.z, id)
}
function copyToPlayer(){
copy(prevPos[0], prevPos[1]-1, prevPos[2], p2.x, p2.y-1, p2.z);
}
function pasteAtPlayer(){
paste(p2.x,p2.y-1,p2.z)
}
function hcyl(bottom, height, radius, id) {
let radsq = radius * radius
let innerRadsq = (radius - 1.2) * (radius - 1.2)
height += bottom
for (let x = -radius; x <= radius; x++) {
for (let y = bottom; y < height; y++) {
for (let z = -radius; z <= radius; z++) {
let d = x * x + z * z
if (d < radsq && d >= innerRadsq) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function cyl(bottom, height, radius, id) {
let radsq = radius * radius
height += bottom
for (let x = -radius; x <= radius; x++) {
for (let y = bottom; y < height; y++) {
for (let z = -radius; z <= radius; z++) {
let d = x * x + z * z
if (d < radsq) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function sphereoid(w, h, d, id, X,Y,Z) {
let w2 = w * w
let h2 = h * h
let d2 = d * d
let w3 = (w - 1.5) * (w - 1.5)
let h3 = (h - 1.5) * (h - 1.5)
let d3 = (d - 1.5) * (d - 1.5)
for (let y = -h; y < h; y++) {
for (let x = -w; x <= w; x++) {
for (let z = -d; z <= d; z++) {
let n = x * x / w2 + y * y / h2 + z * z / d2
let n2 = x * x / w3 + y * y / h3 + z * z / d3
if (n < 1 && n2 >= 1) {
world.setBlock(X + x, Y + y, Z + z, id)
}
}
}
}
}
var cmds = [
{
name: "showAll",
info: "Shows all messages.",
func: () => Messages.showAll(),
noCheats: true
},
{
name: "clear",
info: "Clears shown messages",
func: () => Messages.clear(),
noCheats: true
},
{
name: "fromPlayer",
info: "Sets position 1 to player",
func: () => fromPlayer()
},
{
name: "fillToPlayer",
args: ["block_name"],
info: "Fills from position 1 to player position",
func: split => {
let id = blockIds[split[1]]
if(!split[1]) id = 0
fillToPlayer(id)
}
},
{
name: "copyToPlayer",
info: "Copys blocks from position 1 to player position",
func: () => copyToPlayer()
},
{
name: "pasteAtPlayer",
info: "Pastes copied blocks at the player's position",
func: () => pasteAtPlayer()
},
{
name: "sphereoid",
args: ["width", "height", "depth", "block_name", "x", "y", "z"],
func: split => {
let id = blockIds[split[4]]
if(!split[4]) id = 0
let x = split[5] ? parseInt(split[5]) : p2.x,
y = split[6] ? parseInt(split[6]) : p2.y,
z = split[7] ? parseInt(split[7]) : p2.z
sphereoid(split[1], split[2], split[3], id, x,y,z)
}
},
{
name: "replaceToPlayer",
args: ["replace_what", "with_what"],
func: split => {
let replace = blockIds[split[1]]
if(!split[1]) replace = 0
let into = blockIds[split[2]]
if(!split[2]) into = 0
replaceBlocks(prevPos[0], prevPos[1]-1, prevPos[2], p2.x, p2.y-1, p2.z, replace, into)
}
},
{
name: "give",
args: ["target", "block_name", "amount"],
info: "Gives the target the the specified amount of specified blocks",
func: split => {
let id = blockIds[split[2]]
var amount = split[3] || 1
if(split[1] === "@s"){
if(id){
for(var i=0; i<amount; i++){
newInvItem(id)
}
}
}else if(split[1] === "@a"){
for(var i in players){
var p = players[i]
for(var a=0; a<amount; a++){
world.addEntity(new Item(p.x,p.y,p.z,0,0,0,id))
}
}
}else if(hasPlayer(split[1])){
var p = getPlayerByUsername(split[1])
for(var a=0; a<amount; a++){
world.addEntity(new Item(p.x,p.y,p.z,0,0,0,id))
}
}else{
Messages.add("Can't select with selector "+split[1])
}
}
},
{
name: "kill",
args: ["selector","message"],
info: "Kills someone. Selectors: @s, your username, someone's uername, @a, @e",
func: split => {
split[1] = split[1] || "@s"
if(split[1] === "@s" || split[1] === username){
dieMessage = split[2] || (username+" killed themself with the kill command. Why would you do that???")
die()
}else if(split[1] === "@a" || hasPlayer(split[1])){
send({type:"kill", message:split[2] || "", data:split[1]})
}else if(split[1] === "@e"){
var killed = []
for(var i=world.entities.length-1; i>=0; i--){
killed.push(world.entities[i].type || "Entity")
world.deleteEntity(0,false,i)
}
Messages.add("Killed: "+killed.join(", "))
}else{
Messages.add("Can't select with selector "+split[1])
}
}
},
{
name: "ban",
args: ["username"],
info: "Bans a player. They cannot rejoin the world. Only bans them until multiplayer turns off",
func: split => {
if(win.ban){
ban(split[1])
}else{
Messages.add("Error: can't ban.")
}
},
noCheats:true
},
{
name: "unban",
args: ["username"],
info: "Unbans a player.",
func: split => {
if(win.unban){
unban(split[1])
}else{
Messages.add("Error: can't ban.")
}
},
noCheats:true
},
{
name: "time",
args: ["mode","n"],
info: "mode can be: set, add, subtract. n is the time to set to. 1000 is a day. n an also be: day, night",
func: split => {
var time
if(split[2] === "day") time = -20
else if(split[2] === "night") time = 480
else time = parseInt(split[2]) || 0
time = time * Math.PId / 1000
if(split[1] === "set"){
worldTime = time
}else if(split[1] === "add"){
worldTime += time
}else if(split[1] === "subtract"){
worldTime -= time
}else{
Messages.add("No such mode: "+split[1])
}
}
},
{
name:"gameMode",
args: ["mode"],
info: "mode can be: creative, survival, spectator",
func: split => {
let m = split[1]
p.spectator = false
if(m === "creative") survival = false
else if(m === "survival") survival = true
else if(m === "spectator") p.spectator = p.flying = true
else Messages.add("Game mode doesn't exsist: "+m)
}
},
{
name:"tp",
args: ["to_who"],
info: "Teleport to someone. \"to_who\" should be a username.",
func: split => {
if(hasPlayer(split[1])){
var player = getPlayerByUsername(split[1])
p.x = player.x
p.y = player.y
p.z = player.z
}else{
Messages.add("Player doesn't exsist: "+split[1])
}
}
},
{
name:"online",
args:[],
noCheats: true,
info: "Lists people that are playing on this world.",
func: split => {
if(!multiplayer){
return Messages.add("You are not in a multiplayer world.")
}
send({type:"fetchUsers"})
}
},
{
name:"playSound",
args:["sound", "volume"],
info:"Plays a sound. Sound can be any sound, for example: click, block.grass.dig1, entity.generic.explode1. Volume is a number from 0 to 1.",
func: split => {
if(!split[1]) return
if(playSound(split[1], 0, parseFloat(split[2]))){
if(multiplayer) send({type:"playSound", data:split[1], volume:parseFloat(split[2])})
}else{
Messages.add("That sound doesn't exsist.")
}
}
},
{
name:"sendEval",
args:["selector","data"],
info:"Send javascript to players. Only works if your'e the host. Selector can be: username, @p. If selector isn't specified, it sends it to all players except you.",
func: split => {
if(!multiplayer) return
split.splice(0,1)
var to = split.splice(0,1)[0]
if(to === "@p") to = ""
send({type:"eval",data:split.join(" ")}, to || undefined)
}
},
]
win.cmds = cmds
cmds.forEach(cmd => {
//Now you really need cheats to get commands!
Object.defineProperty(cmd, 'noCheats', {
value: cmd.noCheats || false,
writable: false
})
})
function getCmd(name){
for(var i=0; i<cmds.length; i++){
if(cmds[i].name === name){
return cmds[i]
}
}
}
function runCmd(str){
str = str.replace("/", '')
let split = str.split(" ")
let name = split[0]
if(name === "?"){
if(split[1]){
var cmd = getCmd(split[1])
if(cmd){
var str = "<b>/"+split[1]+"</b><br>"
str += "Syntax: /"+cmd.name+" "
if(cmd.args) str += cmd.args.join(" ")
str += "<br>"
if(cmd.info) str += "Description: "+cmd.info
Messages.add(str)
}else Messages.add("There is no information for /"+split[1])
}else{
if(cheats){
var str = "List of commands:<br>"
str += "Use <span style='color:lime;'>/? command_name</span> to get information about a command<br>"
cmds.forEach(r => {
str += "<span style='color:lightblue;'>/"+r.name+"</span> "
if(r.args) str += r.args.join(" ")
str += "<br>"
})
Messages.add(str)
}else{
var str = "List of available commands:<br>"
str += "Use <span style='color:lime;'>/? command_name</span> to get information about a command<br>"
cmds.forEach(r => {
if(!r.noCheats) return
str += "<span style='color:lightblue;'>/"+r.name+"</span> "
if(r.args) str += r.args.join(" ")
str += "<br>"
})
Messages.add(str)
}
}
}else{
var cmd = getCmd(name)
if(cmd){
if(!cheats && !cmd.noCheats){
Messages.add("Â§cThat command requires cheats")
return
}
cmd.func(split)
}else Messages.add("Â§cError: no such command called Â§f"+name)
}
}
win.runCmd = runCmd
}
let Messages = {
array: [],
all: [],
update:function(){
if(this.array.length === 0){
messages.innerHTML = ""
}else messages.innerHTML = this.array.join("<br>")
},
showAll: function(){
if(this.all.length === 0){
messages.innerHTML = ""
}else messages.innerHTML = this.all.join("<br>")
},
clear: function(){this.array = [];this.update()},
add: function(msg){
msg = this.format(msg)
this.array.push(msg)
this.all.push(msg)
if(this.array.length > 5){
this.array.shift()
}
this.update()
},
write: function(msg, from){
this.add((from || username)+": "+msg)
if(!from && multiplayer){
send({type:"message", data:msg, username:username})
}
},
showInput(){
messageInput.classList.remove("hidden")
messageInput.focus()
messageInput.onkeypress = (e) => {
if(e.key !== "Enter") return
if(messageInput.value[0] === "/"){
Messages.add(messageInput.value)
runCmd(messageInput.value)
}else{
Messages.write(messageInput.value)
}
messageInput.classList.add("hidden")
messageInput.value = ""
canvas.focus()
}
},
format(str){
if(str.includes("Â§")){
var arr = str.split("Â§")
var res = arr[0]
var spans = 0
for(var i=1; i<arr.length; i++){
var s = arr[i]
var col = colors[s.substring(0,1)]
s = s.substring(1)
res += "<span style='color:"+col+";'>"+s
spans ++
}
for(i=0; i<spans;i++) res += "</span>"
return res
}else return str
}
}
window.Messages = Messages
let title = ""
let subtitle = ""
let titleOpacity = 0
let titleColor = "black"
function showTitle(aTitle, aSubtitle, color){
title = aTitle
subtitle = aSubtitle
titleOpacity = 140
titleColor = color || "white"
}
win.showTitle = showTitle
let sideMessageTime = 0,
sideMessageTitle, sideMessageContent
function sideMessage(title, content){
sideMessageTime = 600
sideMessageTitle = title
sideMessageContent = content
}
win.sideMessage = sideMessage
function die(){
if(survival){
for(var i=0; i<inventory.hotbar.length; i++){
if(inventory.hotbar[i].id){
for(var j=0; j<inventory.hotbar[i].amount; j++)world.addEntity(new Item(p.x,p.y,p.z,0,0,0,inventory.hotbar[i].id,true))
inventory.hotbar[i] = 0
}
}
for(var i=0; i<invLength; i++){
if(invItems[i] && invItems[i].id){
for(var j=0; j<invItems[i].amount; j++)world.addEntity(new Item(p.x,p.y,p.z,0,0,0,invItems[i].id, true))
invItems[i].id = 0
}
}
world.addEntity(new ExperienceOrb(p.x,p.y,p.z,p.XP))
}
changeScene("dead")
releasePointer()
p3.y = 0
if(multiplayer) send({type:"die", id:achexUsername, message:dieMessage})
}
function damage(amount, why, nosound,type){
p.health -= amount
harmEffect = 40
if(!nosound){
switch(type){
case "drown":
drownHurtSound()
break
case "freeze":
freezeHurtSound()
break
default:
hitSound()
}
}
dieMessage = why
updateHUD = true
if(multiplayer) send({type:"harmEffect", id:achexUsername})
}
win.damage = damage
function XP(amount){
p.lastXP = performance.now()
p.XP += amount
if(p.XP >= p.nextLevel){
p.level += Math.floor(p.XP / p.nextLevel)
p.XP = p.XP % p.nextLevel
playSound("experience.levelup")
setLevel()
}else{
playSound("experience.orb")
}
updateHUD = true
}
function setLevel(){
if(p.level <= 15){
p.nextLevel = 2*p.level+7
}else if(p.level <= 30){
p.nextLevel = 5*p.level-38
}else{
p.nextLevel = 9*p.level-158
}
}
let Key = {}
let modelView = win.modelView || new Float32Array(16)
win.modelView = modelView
let glCache
let worlds, selectedWorld = 0
let freezeFrame = 0
let p
let vec1 = new PVector(), vec2 = new PVector(), vec3 = new PVector(), vec4 = new PVector()
let move = {
x: 0,
y: 0,
z: 0,
ang: Math.sqrt(0.5),
}
let p2 = {
x: 0,
y: 0,
z: 0,
}
let p3 = { //precise positions for multiplayer
x: 0,
y: 0,
z: 0,
survival: false,
username: ""
}
let controlMap = {}
function setControl(name, key, shift = false, ctrl = false, alt = false){
controlMap[name] = {
key,
shift,
ctrl,
alt,
get pressed() {
return Boolean(Key[this.key]
&& (!this.shift || Key.ShiftLeft || Key.ShiftRight)
&& (!this.ctrl || Key.ControlLeft || Key.ControlRight)
&& (!this.alt || Key.AltLeft || Key.AltRight))
},
// Check to see if all of an event's data matches this key map
event(e) {
return Boolean(e.key === this.key
&& (!this.shift || e.shiftKey)
&& (!this.ctrl || e.ctrlKey)
&& (!this.alt || e.altKey))
}
}
}
setControl("jump", " ")
setControl("forward", "w")
setControl("left", "a")
setControl("backward", "s")
setControl("right", "d")
setControl("sprint", "q")
setControl("inventory", "e")
setControl("chat", "/")
setControl("pause", "p")
setControl("hyperBuilder", "h")
setControl("superBreaker", "b")
setControl("spectator", "l")
setControl("zoom", "z")
setControl("cycleBlockShapes", "enter")
setControl("sneak", "shift")
setControl("dropItem", "backspace")
setControl("break", "leftMouse")
setControl("place", "rightMouse")
setControl("pick", "middleMouse")
setControl("thirdPerson", "o")
let place
let liquid = false
let powder = false
let inWater = 0 //head is in liquid
let tick = false
let standingOn = 0 //block id you are standing on
let lastTick = 0
let lastLiquid = false
let attackCooldown = 0, attackCooldownStart = 0, attackCooldownTime = 0 //for swords
let harmEffect = 0
//let healTime = 5000 // miliseconds between each heal
let healEffect = 0 // health bar outline flash white
let lastHeal = 0
let lastBlockHarm = 0
let lastLoseOxygen = 0
let lastGetOxygen = 0
let witherEffect = 0
let witherDamage = 0
let witherTime = 0
let freezeEffect = 0
let lastFreezeHealth = 0
let loseHealthEffect = 0
let portalEffect = 0
win.lastStepSound = 0
let eatSoundTimer = 0
let inventory = {
hotbar: [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ],
main: [],
hotbarSlot: 0,
showName:0,
size: 40 * min(width, height) / 600,
ts:(40 * min(width, height) / 600) / 16,
holding: 0,
space: invItems,
crafting: [0,0,0,0,0,0,0,0,0],
craftingStr: "",
craftingRes: 0, //block id
spreaded: [],
spreadPlace: "", //inventory, crafting, etc
spreadStart: -1,
spreading: false,
furnaceData: {
x:0,y:0,z:0,
data:null
}
}
inventory.craftingStr = inventory.crafting.join(",")
let furnaceData = inventory.furnaceData
win.inventory = inventory
//}
for(var i=0; i<9; i++){
inventory.hotbar[i] = {id:inventory.hotbar[i],amount:64}
}
for(var i=0; i<9; i++){
inventory.crafting[i] = {id:inventory.crafting[i],amount:64}
}
function setHotbar(arr){
inventory.hotbar = arr
for(var i=0; i<9; i++){
inventory.hotbar[i] = {id:inventory.hotbar[i],amount:64}
}
}
function play() {
canvas.onblur()
p.lastBreak = Date.now()
updateHUD = true
use3d()
gl.clearColor(sky[0], sky[1], sky[2], 1.0)
getPointer()
fill(255, 255, 255)
textSize(10)
changeScene("play")
}
let gl
let glExtensions
function getPointer() {
if(touchScreen) return
if (canvas.requestPointerLock) {
canvas.requestPointerLock()
}
}
function releasePointer() {
if (doc.exitPointerLock) {
doc.exitPointerLock()
}
}
let Block = {
top: 0x4,
bottom: 0x8,
north: 0x20,
south: 0x10,
east: 0x2,
west: 0x1,
}
let Sides = {
top: 0,
bottom: 1,
north: 2,
south: 3,
east: 4,
west: 5,
}
// GLSL Shader code (written in script tags at the top of the file)
let vertexShaderSrc3D
let fragmentShaderSrc3D
let vertexShaderSrc2D
let fragmentShaderSrc2D
let vertexShaderSrcPanorama
let fragmentShaderSrcPanorama
let skyboxVertex
let skyboxFragment
let vertexShaderSrcEntity
let fragmentShaderSrcEntity
let vertexShaderSrcParticle
let fragmentShaderSrcParticle
function updateGLSL(){
vertexShaderSrc3D = document.getElementById("blockVertexShader").text
fragmentShaderSrc3D = document.getElementById("blockFragmentShader").text
vertexShaderSrc2D = document.getElementById("2dVertexShader").text
fragmentShaderSrc2D = document.getElementById("2dFragmentShader").text
skyboxVertex = document.getElementById("skyboxVertexShader").text
skyboxFragment = document.getElementById("skyboxFragmentShader").text
vertexShaderSrcEntity = document.getElementById("entityVertexShader").text
fragmentShaderSrcEntity = document.getElementById("entityFragmentShader").text
vertexShaderSrcParticle = document.getElementById("particleVertexShader").text
fragmentShaderSrcParticle = document.getElementById("particleFragmentShader").text
}
updateGLSL()
win.updateGLSL = updateGLSL
function createProgramObject(curContext, vetexShaderSource, fragmentShaderSource) {
let vertexShaderObject = curContext.createShader(curContext.VERTEX_SHADER)
curContext.shaderSource(vertexShaderObject, vetexShaderSource)
curContext.compileShader(vertexShaderObject)
if (!curContext.getShaderParameter(vertexShaderObject, curContext.COMPILE_STATUS)) {
throw curContext.getShaderInfoLog(vertexShaderObject)
}
let fragmentShaderObject = curContext.createShader(curContext.FRAGMENT_SHADER)
curContext.shaderSource(fragmentShaderObject, fragmentShaderSource)
curContext.compileShader(fragmentShaderObject)
if (!curContext.getShaderParameter(fragmentShaderObject, curContext.COMPILE_STATUS)) {
throw curContext.getShaderInfoLog(fragmentShaderObject)
}
let programObject = curContext.createProgram()
curContext.attachShader(programObject, vertexShaderObject)
curContext.attachShader(programObject, fragmentShaderObject)
curContext.linkProgram(programObject)
if (!curContext.getProgramParameter(programObject, curContext.LINK_STATUS)) {
throw "Error linking shaders."
}
return programObject
}
let program3D, program2D, skyboxProgram, programEntity, programParticle
function objectify(x, y, z, width, height, textureX, textureY, texXFlip,texYFlip,rotateTex) {
return {
x: x,
y: y,
z: z,
w: width,
h: height,
tx: textureX,
ty: textureY,
txf: texXFlip,
rt:rotateTex
}
}
function customFace(x,y,z,x2,y2,z2,x3,y3,z3,x4,y4,z4, tx,ty,tw,th){
tw = tw || 16
th = th || 16
return {
x,y,z,x2,y2,z2,x3,y3,z3,x4,y4,z4, tx,ty,tw,th,
custom:true
}
}
function generateItemShape(){
var arr = []
var bottom = [],
top = [],
east = [],
west = []
var i
for(i=0; i<16; i++){
bottom.push(objectify(0,i,7.5,16,1,0,(16-i)-1))
top.push(objectify(0,i+1,8.5,16,1,0,16-i-1))
east.push(objectify(i+1,16,7.5,1,16,(16-i)-1,0))
west.push(objectify(i,16,8.5,1,16,(16-i)-1,0))
}
return [bottom,top,
[objectify(16, 16, 8.5, 16, 16, 0, 0, true)],[objectify( 0, 16,  7.5, 16, 16, 0, 0)],
east,west]
}
function layerShape(h){
return [
[objectify(0,0,0,16,16,0,0)],
[objectify(0,h,16,16,16,0,0)],
[objectify(16, h, 16, 16, h, 0, 16-h)],
[objectify( 0, h,  0, 16, h, 0, 16-h)],
[objectify(16, h,  0, 16, h, 0, 16-h)],
[objectify( 0, h, 16, 16, h, 0, 16-h)]
]
}
let shapes = {
/*
[
[(-x, -z), (+x, -z), (+x, +z), (-x, +z)], // minX = 0,  minZ = 2,  maxX = 6, maxZ = 8
[(-x, +z), (+x, +z), (+x, -z), (-x, -z)], // minX = 9,  minZ = 10, maxX = 3, maxZ = 4
[(+x, +y), (-x, +y), (-x, -y), (+x, -y)], // minX = 6,  minY = 7,  maxX = 0, maxY = 1
[(-x, +y), (+x, +y), (+x, -y), (-x, -y)], // minX = 9,  minY = 10, maxX = 3, maxY = 4
[(+y, -z), (+y, +z), (-y, +z), (-y, -z)], // minY = 10, minZ = 11, maxY = 4, maxZ = 5
[(+y, +z), (+y, -z), (-y, -z), (-y, +z)]  // minY = 7,  minZ = 8,  maxY = 1, maxZ = 2
]
*/
cube: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0)], //south
[objectify(16, 16,  0, 16, 16, 0, 0)], //east
[objectify( 0, 16, 16, 16, 16, 0, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
rotate: {
verts: [
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0)], //south
[objectify(16, 16,  0, 16, 16, 0, 0)], //east
[objectify( 0, 16, 16, 16, 16, 0, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
_1PixLower:{
verts: [
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 15, 16, 16, 16, 0, 0)], //top
[objectify(16, 15, 16, 16, 15, 0, 1)], //north
[objectify( 0, 15,  0, 16, 15, 0, 1)], //south
[objectify(16, 15,  0, 16, 15, 0, 1)], //east
[objectify( 0, 15, 16, 16, 15, 0, 1)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
slab: {
verts: [
[objectify( 0, 0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 8, 16, 16, 16, 0, 0)], //top
[objectify(16, 8, 16, 16, 8, 0, 0)], //north
[objectify( 0, 8,  0, 16, 8, 0, 0)], //south
[objectify(16, 8,  0, 16, 8, 0, 0)], //east
[objectify( 0, 8, 16, 16, 8, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 1,
south: 1,
east: 1,
west: 1
},
texVerts: [],
buffer: null,
size: 6,
varients: [],
flip: true,
rotate: false
},
stair: {
verts: [
[objectify( 0, 0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 8,  8, 16, 8, 0, 8), objectify( 0, 16,  16, 16, 8, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify( 0, 8,  0, 16, 8, 0, 0), objectify( 0, 16,  8, 16, 8, 0, 0)], //south
[objectify(16, 8, 0, 8, 8, 8, 0), objectify(16, 16, 8, 8, 16, 0, 0)], //east
[objectify( 0, 8, 8, 8, 8, 0, 0), objectify( 0, 16, 16, 8, 16, 8, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 3,
south: 0,
east: 0,
west: 0
},
texVerts: [],
buffer: null,
size: 10,
varients: [],
flip: true,
rotate: true
},
cross: {
verts: [
[], //bottom
[], //top
[customFace(2,16,2, 14,16,14, 14,0,14, 2,0,2, 0,0)], //north
[customFace(14,16,2, 2,16,14, 2,0,14, 14,0,2, 0,0)], //south
[customFace(14,16,14, 2,16,2, 2,0,2, 14,0,14, 0,0)], //east
[customFace(2,16,14, 14,16,2, 14,0,2, 2,0,14, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
hitbox: "cube"
},
sideCross: {
verts: [
[], //bottom
[], //top
[customFace(2,2,16, 14,14,16, 14,14,0, 2,2,0, 0,16,16,-16)], //north
[customFace(14,2,16, 2,14,16, 2,14,0, 14,2,0, 0,16,16,-16)], //south
[customFace(14,14,16, 2,2,16, 2,2,0, 14,14,0, 0,16,16,-16)], //east
[customFace(2,14,16, 14,2,16, 14,2,0, 2,14,0, 0,16,16,-16)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
hitbox: "cube",
rotate: true,
hitbox: "cube"
},
bottomCross: {
verts: [
[], //bottom
[], //top
[customFace(2,16,2, 14,16,14, 14,0,14, 2,0,2, 0,16,16,-16)], //north
[customFace(14,16,2, 2,16,14, 2,0,14, 14,0,2, 0,16,16,-16)], //south
[customFace(14,16,14, 2,16,2, 2,0,2, 14,0,14, 0,16,16,-16)], //east
[customFace(2,16,14, 14,16,2, 14,0,2, 2,0,14, 0,16,16,-16)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
hitbox: "cube"
},
tallCross: {
verts: [
[], //bottom
[], //top
[customFace(2,16,2, 14,16,14, 14,0,14, 2,0,2, 16,0),customFace(2,32,2, 14,32,14, 14,16,14, 2,16,2, 0,0)], //north
[customFace(14,16,2, 2,16,14, 2,0,14, 14,0,2, 16,0),customFace(14,32,2, 2,32,14, 2,16,14, 14,16,2, 0,0)], //south
[customFace(14,16,14, 2,16,2, 2,0,2, 14,0,14, 16,0),customFace(14,32,14, 2,32,2, 2,16,2, 14,16,14, 0,0)], //east
[customFace(2,16,14, 14,16,2, 14,0,2, 2,0,14, 16,0),customFace(2,32,14, 14,32,2, 14,16,2, 2,16,14, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
door: {
verts: [
[objectify( 0,  0,  0, 16, 3, 0, 0)], //bottom
[objectify( 0, 16, 3, 16, 3, 0, 0),objectify( 0, 32, 3, 16, 3, -16, 0)], //top
[objectify(16, 16, 3, 16, 16, 0, 0),objectify(16, 32, 3, 16, 16, -16, 0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0),objectify( 0, 32,  0, 16, 16, -16, 0)], //south
[objectify(16, 16,  0, 3, 16, 0, 0),objectify(16, 32,  0, 3, 16, -16, 0)], //east
[objectify( 0, 16, 3, 3, 16, 0, 0),objectify( 0, 32, 3, 3, 16, -16, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
torch: {
verts: [
[objectify( 7,  0,  7, 2, 2, 7, 14)], //bottom
[objectify( 7, 10, 9, 2, 2, 7, 6)], //top
[objectify(9, 10, 9, 2, 10, 7, 6)], //north
[objectify( 7, 10,  7, 2, 10, 7, 6)], //south
[objectify(9, 10,  7, 2, 10, 7, 6)], //east
[objectify( 7, 10, 9, 2, 10, 7, 6)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
wallTorch: {
verts: [
[customFace(9,4,17, 7,4,17, 7,3,15, 9,3,15, 7,14,2,2)],
[customFace(9,13,11, 7,13,11, 7,14,13, 9,14,13, 7,6,2,2)],
[customFace(9,14,13, 7,14,13, 7,4,17, 9,4,17, 7,6,2,10)], //north
[customFace(7,13,11, 9,13,11, 9,3,15, 7,3,15, 7,6,2,10)], //south
[customFace(9,13,11, 9,14,13, 9,4,17, 9,3,15, 7,6,2,10)], //east
[customFace(7,14,13, 7,13,11, 7,3,15, 7,4,17, 7,6,2,10)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
lantern: {
verts: [
[objectify(5,  0, 5, 6, 6, 0, 9)], //bottom
[objectify(6, 9, 10, 4, 4, 1, 10),objectify(5, 7, 11, 6, 6, 0, 9)], //top
[objectify(10, 9, 10, 4, 2, 1, 0),objectify(11, 7, 11, 6, 7, 0, 2),objectify(9.5, 11, 8, 3, 2, 11, 10)], //north
[objectify(6, 9, 6, 4, 2, 1, 0),objectify(5, 7, 5, 6, 7, 0, 2),objectify(6.5, 11, 8, 3, 2, 11, 10)], //south
[objectify(10, 9, 6, 4, 2, 1, 0),objectify(11, 7, 5, 6, 7, 0, 2)], //east
[objectify(6, 9, 10, 4, 2, 1, 0),objectify(5, 7, 11, 6, 7, 0, 2)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
lanternHang: {
verts: [
[objectify(5,  0, 5, 6, 6, 0, 9)], //bottom
[objectify(6, 9, 10, 4, 4, 1, 10),objectify(5, 7, 11, 6, 6, 0, 9)], //top
[objectify(10, 9, 10, 4, 2, 1, 0),objectify(11, 7, 11, 6, 7, 0, 2),objectify(9.5, 11, 8, 3, 2, 11, 10),objectify(9.5, 16, 8, 3, 3, 11, 2)], //north
[objectify(6, 9, 6, 4, 2, 1, 0),objectify(5, 7, 5, 6, 7, 0, 2),objectify(6.5, 11, 8, 3, 2, 11, 10),objectify(6.5, 16, 8, 3, 3, 11, 2)], //south
[objectify(10, 9, 6, 4, 2, 1, 0),objectify(11, 7, 5, 6, 7, 0, 2),objectify(8, 14, 6.5, 3, 4, 11, 1)], //east
[objectify(6, 9, 10, 4, 2, 1, 0),objectify(5, 7, 11, 6, 7, 0, 2),objectify(8, 14, 9.5, 3, 4, 11, 1)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
beacon: {
verts: [
[objectify( 0, 0,  0, 16, 16, 16, -96),objectify( 2, 0.001, 2, 12, 12, -32, 0)], //bottom
[objectify( 3, 13, 13, 10, 10, 3, 3),objectify( 0,  16,  16, 16, 16, -32, 0),objectify( 2, 3, 14, 12, 12, -16, 3)], //top
[objectify(13, 13, 13, 10, 10, 3, 3),objectify( 16, 16,  16, 16, 16, -32, 0),objectify(14, 3, 14, 12, 3,  -16, 3)], //north
[objectify( 3, 13,  3, 10, 10, 3, 3),objectify( 0,  16,  0,  16, 16, -32, 0),objectify(2,  3, 2,  12, 3,  -16, 3)], //south
[objectify(13, 13,  3, 10, 10, 3, 3),objectify( 16, 16,  0,  16, 16, -32, 0),objectify(14, 3, 2,  12, 3,  -16, 3)], //east
[objectify( 3, 13, 13, 10, 10, 3, 3),objectify( 0,  16,  16, 16, 16, -32, 0),objectify(2,  3, 14, 12, 3,  -16, 3)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
cactus: {
verts: [
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 0, 0)], //top
[objectify(16, 16, 15, 16, 16, 0, 0)], //north
[objectify( 0, 16,  1, 16, 16, 0, 0)], //south
[objectify(15, 16,  0, 16, 16, 0, 0)], //east
[objectify( 1, 16, 16, 16, 16, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
hitbox: "cube"
},
pane: {
verts: [
[objectify( 0,  0,  7, 16, 2, 0, 7)], //bottom
[objectify( 0, 16, 9, 16, 2, 0, 7)], //top
[objectify(16, 16, 9, 16, 16, 0, 0)], //north
[objectify( 0, 16,  7, 16, 16, 0, 0)], //south
[objectify(16, 16, 7, 2, 16, 7, 0)], //east
[objectify(0, 16, 9, 2, 16, 7, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
portal: {
verts: [
[objectify(0, 0, 7, 16, 2, 0, 0)],
[objectify(0, 16, 9, 16, 2, 0, 0)],
[objectify(16, 16, 9, 16, 16, 0, 0)],
[objectify(0, 16, 7, 16, 16, 0, 0)],
[objectify(16, 16, 7, 2, 16, 0, 0)],
[objectify(0, 16, 9, 2, 16, 0, 0)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
trapdoor: {
verts: [
[objectify(0, 0, 0, 16, 16, 0, 0)], //bottom
[objectify(0, 3, 16, 16, 16, 0, 0)], //top
[objectify(16, 3, 16, 16, 3, 0, 0)], //north
[objectify(0, 3, 0, 16, 3, 0, 0)], //south
[objectify(16, 3, 0, 16, 3, 0, 0)], //east
[objectify(0, 3, 16, 16, 3, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true,
flip: true
},
trapdoorOpen: {
verts: [
[objectify(0, 0, 13, 16, 3, 0, 0)], //bottom
[objectify(0, 16, 16, 16, 3, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify(0, 16, 13, 16, 16, 0, 0)], //south
[objectify(16, 16, 13, 3, 16, 0, 0)], //east
[objectify(0, 16, 16, 3, 16, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
wallFlat: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify(0, 0, 0, 0, 0, 0, 0)], //bottom
[objectify(0, 16, 16, 0, 0, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify(0, 16,  15, 16, 16, 0, 0)], //south
[objectify(0, 0,  0, 0, 0, 0, 0)], //east
[objectify(0, 0, 16, 0, 0, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
fence: {
verts: [
[objectify(6, 0, 6, 4, 4, 0, 1)], //bottom
[objectify(6, 16, 10, 4, 4, 0, 1)], //top
[objectify(10, 16, 10, 4, 16, 6, 0)], //north
[objectify(6, 16, 6, 4, 16, 6, 0)], //south
[objectify(10, 16, 6, 4, 16, 6, 0)], //east
[objectify(6, 16, 10, 4, 16, 6, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
wallpost: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify(4, 0, 4, 8, 8, 4, 4)], //bottom
[objectify(4, 16, 12, 8, 8, 4, 4)], //top
[objectify(12, 16, 12, 8, 16, 4, 0)], //north
[objectify(4, 16, 4, 8, 16, 4, 0)], //south
[objectify(12, 16, 4, 8, 16, 4, 0)], //east
[objectify(4, 16, 12, 8, 16, 4, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
wall: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify(4, 0, 4, 8, 8, 4, 4),objectify(5, 0, 12, 6, 4, 5, 10)], //bottom
[objectify(4, 16, 12, 8, 8, 4, 4),objectify(5, 16, 16, 6, 4, 5, 10)], //top
[objectify(12, 16, 12, 8, 16, 4, 0),objectify(11, 16, 16, 6, 16, 5, 0)], //north
[objectify(4, 16, 4, 8, 16, 4, 0)], //south
[objectify(12, 16, 4, 8, 16, 4, 0),objectify(11, 16, 12, 4, 16, 12, 0)], //east
[objectify(4, 16, 12, 8, 16, 4, 0),objectify(5, 16, 16, 4, 16, 12, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
wallu: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify(4, 0, 4, 8, 8, 4, 4),objectify(5, 0, 12, 6, 4, 5, 10)], //bottom
[objectify(4, 16, 12, 8, 8, 4, 4),objectify(5, 13, 16, 6, 4, 5, 10)], //top
[objectify(12, 16, 12, 8, 16, 4, 0),objectify(11, 13, 16, 6, 13, 5, 3)], //north
[objectify(4, 16, 4, 8, 16, 4, 0)], //south
[objectify(12, 16, 4, 8, 16, 4, 0),objectify(11, 13, 12, 4, 13, 12, 3)], //east
[objectify(4, 16, 12, 8, 16, 4, 0),objectify(5, 13, 16, 4, 13, 12, 3)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
rotate: true
},
fencq: {
verts: [
[objectify(6, 0, 6, 4, 4, 0, 1),objectify(10, 12, 7, 6, 2, 0, 2),objectify(10, 6, 7, 6, 2, 0, 2)], //bottom
[objectify(6, 16, 10, 4, 4, 0, 1),objectify(10, 15, 9, 6, 2, 0, 2),objectify(10, 9, 9, 6, 2, 0, 2)], //top
[objectify(10, 16, 10, 4, 16, 6, 0),objectify(16, 15, 9, 6, 3, 6, 0),objectify(16, 9, 9, 6, 3, 6, 0)], //north
[objectify(6, 16, 6, 4, 16, 6, 0),objectify(10, 15, 7, 6, 3, 6, 0),objectify(10, 9, 7, 6, 3, 6, 0)], //south
[objectify(10, 16, 6, 4, 16, 6, 0)], //east
[objectify(6, 16, 10, 4, 16, 6, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
rotate: true
},
fench: {
verts:[
[objectify(6,0,6,4,4,0,1),objectify(10,12,7,6,2,0,2),objectify(10,6,7,6,2,0,2),objectify(0,12,7,6,2,0,0),objectify(0,6,7,6,2,0,0)],
[objectify(6,16,10,4,4,0,1),objectify(10,15,9,6,2,0,2),objectify(10,9,9,6,2,0,2),objectify(0,15,9,6,2,0,0),objectify(0,9,9,6,2,0,0)],
[objectify(10,16,10,4,16,6,0),objectify(16,15,9,6,3,6,0),objectify(16,9,9,6,3,6,0),objectify(6,15,9,6,3,0,0),objectify(6,9,9,6,3,0,0)],
[objectify(6,16,6,4,16,6,0),objectify(10,15,7,6,3,6,0),objectify(10,9,7,6,3,6,0),objectify(0,15,7,6,3,0,0),objectify(0,9,7,6,3,0,0)],
[objectify(10,16,6,4,16,6,0)],
[objectify(6,16,10,4,16,6,0)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
rotate: true
},
button: {
verts: [
[objectify(5, 6, 14, 6, 2, 5, 6)], //bottom
[objectify(5, 10, 16, 6, 2, 5, 6)], //top
[objectify(11, 10, 16, 6, 4, 5, 6)], //north
[objectify(5, 10, 14, 6, 4, 5, 6)], //south
[objectify(11, 10, 14, 2, 4, 5, 6)], //east
[objectify(5, 10, 16, 2, 4, 5, 6)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
buffer: null,
size: 6,
varients: [],
flip: true,
rotate: true
},
chain: {
verts: [
[objectify(8, 0, 8, 0.5, 0.5, 0, 0)], //bottom
[objectify(8, 16, 8, 0.5, 0.5, 0, 0)], //top
[objectify(9.5, 16, 8, 3, 16, 3, 0)], //north
[objectify(6.5, 16, 8, 3, 16, 3, 0)], //south
[objectify(8, 16, 6.5, 3, 16, 0, 0)], //east
[objectify(8, 16, 9.5, 3, 16, 0, 0)] //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
pot: {
verts: [
[objectify(5, 0, 5, 6, 6, 5, 10)], //bottom
[objectify(5, 6, 11, 6, 6, 5, 5), objectify(6, 4, 10, 4, 4, -16, 0)], //top
[objectify(11, 6, 11, 6, 6, 5, 10), objectify(11, 6, 6, 6, 6, 5, 10)], //north
[objectify(5, 6, 5, 6, 6, 5, 10), objectify(5, 6, 10, 6, 6, 5, 10)], //south
[objectify(11, 6, 5, 6, 6, 5, 10), objectify(6, 6, 5, 6, 6, 5, 10)], //east
[objectify(5, 6, 11, 6, 6, 5, 10), objectify(10, 6, 11, 6, 6, 5, 10)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6,
},
potCross: {
verts: [
[], //bottom
[], //top
[customFace(2,4,2, 14,4,14, 14,-12,14, 2,-12,2, 0,0)], //north
[customFace(14,4,2, 2,4,14, 2,-12,14, 14,-12,2, 0,0)], //south
[customFace(14,4,14, 2,4,2, 2,-12,2, 14,-12,14, 0,0)], //east
[customFace(2,4,14, 14,4,2, 14,-12,2, 2,-12,14, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
carpet: {
verts: [
[objectify( 0, 0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 1, 16, 16, 16, 0, 0)], //top
[objectify(16, 1, 16, 16, 1, 0, 0)], //north
[objectify( 0, 1,  0, 16, 1, 0, 0)], //south
[objectify(16, 1,  0, 16, 1, 0, 0)], //east
[objectify( 0, 1, 16, 16, 1, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 1,
south: 1,
east: 1,
west: 1
},
texVerts: [],
buffer: null,
size: 6,
varients: []
},
bed: {
verts: [
[objectify( 0, 3,  0, 16, 16, -16, 0),objectify( 0, 3,  16, 16, 16, -16, 0),
objectify(0, 0, 0, 3,3,  38,0),
objectify(13, 0, 29, 3,3,38,0),
objectify(0, 0, 29, 3,3, 38,0),
objectify(13, 0, 0, 3,3, 38,0)], //bottom
[objectify( 0, 9, 32, 16, 16, 16, 0),objectify( 0, 9, 16, 16, 16, 0, 0)], //top
[objectify(16, 9, 32, 16, 6, 80, 6),
objectify(3, 3, 3, 3,3,  38,3),
objectify(16, 3, 32, 3,3,32,3),
objectify(3, 3, 32, 3,3, 35,3),
objectify(16, 3, 3, 3,3, 41,3)], //north
[objectify( 0, 9,  0, 16, 6, 80, 0),
objectify(0, 3, 0, 3,3,  32,3),
objectify(13, 3, 29, 3,3,38,3),
objectify(0, 3, 29, 3,3, 41,3),
objectify(13, 3, 0, 3,3, 35,3)], //south
[objectify( 16, 9,  0, 16, 6, 48, 0),objectify( 16, 9,  16, 16, 6, 64, 0),
objectify(3, 3, 0, 3,3,  41,3),
objectify(16, 3, 29, 3,3,35,3),
objectify(3, 3, 29, 3,3, 38,3),
objectify(16, 3, 0, 3,3, 32,3)], //east
[objectify( 0, 9, 32, 16, 6, 64, 6),objectify( 0, 9, 16, 16, 6, 48, 6),
objectify(0, 3, 3, 3,3,  35,3),
objectify(13, 3, 32, 3,3,41,3),
objectify(0, 3, 32, 3,3, 32,3),
objectify(13, 3, 3, 3,3, 38,3)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
buffer: null,
size: 6,
varients: [],
rotate: true
},
cactusPot: {
verts: [
[], //bottom
[objectify( 6, 1, 10, 4,  4, 6, 6)], //top
[objectify(10, 1, 10, 4, 11, 6, 0)], //north
[objectify( 6, 1,  6, 4, 11, 6, 0)], //south
[objectify(10, 1,  6, 4, 11, 6, 0)], //east
[objectify( 6, 1, 10, 4, 11, 6, 0)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
crop: {
verts: [
[objectify(0,0,0,0,0,0,0)],
[objectify(0,0,0,0,0,0,0)],
[objectify(16,16,4,16,16,0,0),objectify(16,16,12,16,16,0,0)],
[objectify(0,16,12,16,16,0,0),objectify(0,16,4,16,16,0,0)],
[objectify(4,16,0,16,16,0,0),objectify(12,16,0,16,16,0,0)],
[objectify(12,16,16,16,16,0,0),objectify(4,16,16,16,16,0,0)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
buffer: null,
size: 6,
varients: []
},
anvil: {
verts: [
[objectify(2,0,2,12,12,0,0),objectify(0,10,3,16,10,0,0)],
[objectify(2,4,14,12,12,0,0),objectify(3,5,12,10,8,0,0),objectify(0,16,13,16,10,-16,3)],
[objectify(14,4,14,12,4,0,0),objectify(16,16,13,16,6,0,0),objectify(13,5,12,10,1,0,0),objectify(12,10,11,8,5,0,0)],
[objectify(2,4,2,12,4,0,0),objectify(0,16,3,16,6,0,0),objectify(3,5,4,10,1,0,0),objectify(4,10,5,8,5,0,0)],
[objectify(14,4,2,12,4,0,0),objectify(16,16,3,10,6,0,0),objectify(13,5,4,8,1,0,0),objectify(12,10,5,6,5,0,0)],
[objectify(2,4,14,12,4,0,0),objectify(0,16,13,10,6,0,0),objectify(3,5,12,8,1,0,0),objectify(4,10,11,6,5,0,0)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
buffer: null,
size: 21,
varients: [],
rotate: true
},
liquidSurface: {
verts: [
[objectify( 0,    0,  0, 16,   16, 0, 0), objectify( 0, 14.5, 0, 16, 16, 0, 0)], //bottom
[objectify( 0, 14.5, 16, 16,   16, 0, 0)], //top
[objectify(16, 14.5, 16, 16, 14.5, 0, 0)], //north
[objectify( 0, 14.5,  0, 16, 14.5, 0, 0)], //south
[objectify(16, 14.5,  0, 16, 14.5, 0, 0)], //east
[objectify( 0, 14.5, 16, 16, 14.5, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
sporeBlossom: {
verts: [
[objectify( 1, 15.9, 1, 14, 14, -15, 1)], //bottom
[objectify( 1, 15.9, 15, 14, 14, -15, 1)], //top
[customFace(0,15.9,8, 16,15.9,8, 16,11.1,-8, 0,11.1,-8, 16,16,-16,-16), customFace(16,15.9,8, 0,15.9,8, 0,11.1,-8, 16,11.1,-8, 16,16,-16,-16)],
[customFace(0,15.9,8, 16,15.9,8, 16,11.1,24, 0,11.1,24, 16,16,-16,-16), customFace(16,15.9,8, 0,15.9,8, 0,11.1,24, 16,11.1,24, 16,16,-16,-16)], //southobjectify( 0, 16,  0, 16, 16, 0, 0)
[customFace(8,15.9,0, 8,15.9,16, -8,11.1,16, -8,11.1,0, 16,16,-16,-16), customFace(8,15.9,16, 8,15.9,0, -8,11.1,0, -8,11.1,16, 16,16,-16,-16)],
[customFace(8,15.9,0, 8,15.9,16, 24,11.1,16, 24,11.1,0, 16,16,-16,-16), customFace(8,15.9,16, 8,15.9,0, 24,11.1,0, 24,11.1,16, 16,16,-16,-16)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
},
azalea: {
verts: [
[objectify( 0,  8,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 0, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0),customFace(0,16,0, 16,16,16, 16,0,16, 0,0,0, -32,0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0),customFace(16,16,0, 0,16,16, 0,0,16, 16,0,0, -32,0)], //south
[objectify(16, 16,  0, 16, 16, 0, 0),customFace(16,16,16, 0,16,0, 0,0,0, 16,0,16, -32,0)], //east
[objectify( 0, 16, 16, 16, 16, 0, 0),customFace(0,16,16, 16,16,0, 16,0,0, 0,0,16, -32,0)]  //west
],
cull: {
top: 3,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
}
},
azaleaPot: {
verts: [
[objectify( 4,  -7,  4, 8, 8, 4, 4)], //bottom
[objectify( 4, -1, 12, 8, 8, 4, 4)], //top
[objectify(12, -1, 12, 8, 11, 4, 5),customFace(4,-1,4, 12,-1,12, 12,-12,12, 4,-12,4, -12,5,8,11)], //north
[objectify( 4, -1,  4, 8, 11, 4, 5),customFace(12,-1,4, 4,-1,12, 4,-12,12, 12,-12,4, -12,5,8,11)], //south
[objectify(12, -1,  4, 8, 11, 4, 5),customFace(12,-1,12, 4,-1,4, 4,-12,4, 12,-12,12, -12,5,8,11)], //east
[objectify( 4, -1, 12, 8, 11, 4, 5),customFace(4,-1,12, 12,-1,4, 12,-12,4, 4,-12,12, -12,5,8,11)]  //west
],
cull: {
top: 3,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
sunflower: {
verts: [
[customFace(0,34,7, 16,34,7, 16,18,11, 0,18,11, 0,0)], //bottom
[customFace(16,34,7, 0,34,7, 0,18,11, 16,18,11, 0,0)], //top
[customFace(2,16,2, 14,16,14, 14,0,14, 2,0,2, -16,0),customFace(2,32,2, 14,32,14, 14,16,14, 2,16,2, 0,0)], //north
[customFace(14,16,2, 2,16,14, 2,0,14, 14,0,2, -16,0),customFace(14,32,2, 2,32,14, 2,16,14, 14,16,2, 0,0)], //south
[customFace(14,16,14, 2,16,2, 2,0,2, 14,0,14, -16,0),customFace(14,32,14, 2,32,2, 2,16,2, 14,16,14, 0,0)], //east
[customFace(2,16,14, 14,16,2, 14,0,2, 2,0,14, -16,0),customFace(2,32,14, 14,32,2, 14,16,2, 2,16,14, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
}
},
cake:{
verts: [
[objectify(1,0,1,14,14,1,1)],
[objectify(1,8,15,14,14,1,1)],
[objectify(15,8,15,14,8,1,8)],
[objectify(1,8,1,14,8,1,8)],
[objectify(15,8,1,14,8,1,8)],
[objectify(1,8,15,14,8,1,8)]
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
}
},
stonecutter:{
verts:[
[objectify(0,0,0,16,16,0,0)],
[objectify(0,9,16,16,16,0,0)],
[objectify(16,9,16,16,9,0,7),objectify(16,16,8,16,7,16,9)],
[objectify(0,9,0,16,9,0,7),objectify(0,16,8,16,7,16,9)],
[objectify(16,9,0,16,9,0,7)],
[objectify(0,9,16,16,9,0,7)]
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
}
},
itemFrame:{
verts: [
[objectify(2,2,15,12,1,-16,0),objectify(3,13,15,10,1,-16,0)],
[objectify(2,14,16,12,1,-16,0),objectify(3,3,16,10,1,-16,0)],
[objectify(14,14,16,12,12,-16,0)],
[objectify(3,13,15.5,10,10,3,3),objectify(2,14,15,11,1,-14,2),objectify(13,14,15,1,11,-3,2),objectify(3,3,15,11,1,-13,13),objectify(2,13,15,1,11,-14,3)],
[objectify(14,14,15,1,12,-16,0),objectify(3,13,15,1,10,-16,0)],
[objectify(2,14,16,1,12,-16,0),objectify(13,13,16,1,10,-16,0)]
],
cull: {
top: 0,
bottom: 0,
north: 3,
south: 0,
east: 0,
west: 0
},
rotate:true
},
endPortalFrame:{
verts: [
[objectify( 0,  0,  0, 16, 16, 0, 0)], //bottom
[objectify( 0, 13, 16, 16, 16, 0, 0)], //top
[objectify(16, 13, 16, 16, 13, 0, 3)], //north
[objectify( 0, 13,  0, 16, 13, 0, 3)], //south
[objectify(16, 13,  0, 16, 13, 0, 3)], //east
[objectify( 0, 13, 16, 16, 13, 0, 3)]  //west
],
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
},
rotate:true
},
eyeOfEnder: {
verts: [
[objectify( 4,  -3, 4, 8, 8, 4, 4)], //bottom
[objectify( 4, 0, 12, 8, 8, 4, 4)], //top
[objectify( 12, 0, 12, 8, 3, 4, 0)], //north
[objectify( 4, 0, 4, 8, 3, 4, 0)], //south
[objectify( 12, 0, 4, 8, 3, 4, 0)], //east
[objectify( 4, 0, 12, 8, 3, 4, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
rotate: true
},
fire: {
verts: [
[], //bottom
[], //top
[objectify(16, 16, 16, 16, 16, 0, 0), customFace(0,16,16, 16,16,16, 16,0,0, 0,0,0, 0,0), customFace(16,16,16, 0,16,16, 0,0,0, 16,0,0, 0,0)], //north
[objectify( 0, 16,  0, 16, 16, 0, 0), customFace(16,16,0, 0,16,0, 0,0,16, 16,0,16, 0,0), customFace(0,16,0, 16,16,0, 16,0,16, 0,0,16, 0,0)], //south
[objectify(16, 16,  0, 16, 16, 0, 0), customFace(16,16,0, 16,16,16, 0,0,16, 0,0,0, 0,0), customFace(16,16,16, 16,16,0, 0,0,0, 0,0,16, 0,0)], //east
[objectify( 0, 16, 16, 16, 16, 0, 0), customFace(0,16,0, 0,16,16, 16,0,16, 16,0,0, 0,0), customFace(0,16,16, 0,16,0, 16,0,0, 16,0,16, 0,0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
hitbox:"cube"
},
endRod: {
verts: [
[objectify( 6, 0,  6, 4, 4, 2, 4)], //bottom
[objectify( 7, 16, 9, 2, 2, 2, 0),objectify(6, 1,  10, 4, 4, 2, 4)], //top
[objectify(9, 16, 9, 2, 15, 0, 0),objectify(10, 1, 10, 4, 1, 2, 2)], //north
[objectify(7, 16, 7, 2, 15, 0, 0),objectify(6, 1,  6, 4, 1, 2, 2)], //south
[objectify(9, 16, 7, 2, 15, 0, 0),objectify(10, 1, 6, 4, 1, 2, 2)], //east
[objectify(7, 16, 9, 2, 15, 0, 0),objectify(6, 1, 10, 4, 1, 2, 2)]  //west
],
cull: {
top: 0,
bottom: 1,
north: 0,
south: 0,
east: 0,
west: 0
},
flip: true,
},
endRodSW: {
verts: [
[objectify(7, 7, 0, 2, 15, 0, 0),objectify(6, 6,  15, 4, 1, 2, 4)], //bottom
[objectify(7, 9, 15, 2, 15, 0, 0),objectify(6, 10, 16, 4, 1, 2, 4)], //top
[objectify(10, 10, 16, 4, 4, 2, 4)], //north
[objectify( 7, 9, 0, 2, 2, 2, 0),objectify(6, 10,  15, 4, 4, 2, 2)], //south
[objectify(9, 9, 0, 15, 2, 16, 14),objectify(10, 10, 15, 1, 4, 2, 2)], //east
[objectify(7, 9, 15, 15, 2, 16, 14),objectify(6, 10, 16, 1, 4, 2, 2)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 1,
south: 0,
east: 0,
west: 0
},
rotate: true,
},
playerHand: {
verts: [
[objectify( 6,  6,  6, 4,  4, 0, 0)], //bottom
[objectify( 6, 18, 10, 4,  4, 0, 0)], //top
[objectify(10, 18, 10, 4, 12, 0, 0)], //north
[objectify( 6, 18,  6, 4, 12, 0, 0)], //south
[objectify(10, 18,  6, 4, 12, 0, 0)], //east
[objectify( 6, 18, 10, 4, 12, 0, 0)]  //west
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
texVerts: [],
varients: [],
buffer: null,
size: 6
},
item: {
verts: generateItemShape(),
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null
},
cube2: {
verts: [
[objectify(0,0,0,16,16,0,0),objectify(8,4,8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0)],
[objectify(16,16,16,16,16,0,0),objectify(24,20,24,16,16,0,0)],
[objectify(0,16,0,16,16,0,0),objectify(8,20,8,16,16,0,0)],
[objectify(16,16,0,16,16,0,0),objectify(24,20,8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0)]
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
},
cube3: {
verts: [
[objectify(0,0,0,16,16,0,0),objectify(8,4,8,16,16,0,0),objectify(-8,8,-8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0),objectify(-8,24,8,16,16,0,0)],
[objectify(16,16,16,16,16,0,0),objectify(24,20,24,16,16,0,0),objectify(8,24,8,16,16,0,0)],
[objectify(0,16,0,16,16,0,0),objectify(8,20,8,16,16,0,0),objectify(-8,24,-8,16,16,0,0)],
[objectify(16,16,0,16,16,0,0),objectify(24,20,8,16,16,0,0),objectify(8,24,-8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0),objectify(-8,24,8,16,16,0,0)]
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
},
},
cube4: {
verts: [
[objectify(0,0,0,16,16,0,0),objectify(8,4,8,16,16,0,0),objectify(-8,8,-8,16,16,0,0),objectify(8,-4,-8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0),objectify(-8,24,8,16,16,0,0),objectify(8,12,8,16,16,0,0)],
[objectify(16,16,16,16,16,0,0),objectify(24,20,24,16,16,0,0),objectify(8,24,8,16,16,0,0),objectify(24,12,8,16,16,0,0)],
[objectify(0,16,0,16,16,0,0),objectify(8,20,8,16,16,0,0),objectify(-8,24,-8,16,16,0,0),objectify(8,12,-8,16,16,0,0)],
[objectify(16,16,0,16,16,0,0),objectify(24,20,8,16,16,0,0),objectify(8,24,-8,16,16,0,0),objectify(24,12,-8,16,16,0,0)],
[objectify(0,16,16,16,16,0,0),objectify(8,20,24,16,16,0,0),objectify(-8,24,8,16,16,0,0),objectify(8,12,8,16,16,0,0)]
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
}
},
entityFire: {
verts: [
[], //bottom
[], //top
[customFace(0,16,0, 16,16,16, 16,0,16, 0,0,0, 0,0), objectify(16, 16,  8, 16, 16, 0, 0)], //north
[customFace(16,16,0, 0,16,16, 0,0,16, 16,0,0, 0,0), objectify(0,  16,  8, 16, 16, 0, 0)], //south
[customFace(16,16,16, 0,16,0, 0,0,0, 16,0,16, 0,0), objectify(8,  16,  0, 16, 16, 0, 0)], //east
[customFace(0,16,16, 16,16,0, 16,0,0, 0,0,16, 0,0), objectify(8,  16, 16, 16, 16, 0, 0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
},
cow: {
verts: [
// x, y, z, width, height, textureX, textureY
// 0, 0, 0 is the corner on the top left of the texture
[objectify( 0,  0,  0, 16, 16, 0, 0), objectify(16,  8,  4,  8,  8,  0,  0)], //bottom
[objectify( 0, 12, 16, 16, 16, 0, 0), objectify(16, 16, 12,  8,  8,  0,  0)], //top
[objectify(16, 12, 16, 16, 12, 0, 4), objectify(24, 16, 12,  8,  8, 16,  0)], //north
[objectify( 0, 12,  0, 16, 12, 0, 4), objectify(16, 16,  4,  8,  8, 16,  0)], //south
[objectify(16, 12,  0, 16, 12, 0, 4), objectify(24, 16,  4,  8,  8, 16,  0)], //east
[objectify( 0, 12, 16, 16, 12, 0, 4), objectify(16, 16, 12,  8,  8, 16,  0)]  //west
],
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
},
texVerts: [],
varients: [],
buffer: null,
size: 12,
},
blockParticle: {
verts: [
[], //bottom
[], //top
[objectify( 16, 16, 8, 16, 16, 0, 0)], //north
[objectify(  0, 16, 8, 16, 16, 0, 0)], //south
[], //east
[]  //west
],
cull: {
top: 3,
bottom: 3,
north: 3,
south: 3,
east: 3,
west: 3
}
},
panorama:{
verts: //*
(function(){
var arr = [[],[],[],[],[],[]]
var data = arr[2]
var rt = Math.PId/360
var s = (sin(-rt)+1)*8, c = (cos(-rt)+1)*8
var w = -rt/Math.PId*16
for(var deg=0; deg<Math.PId; deg+=rt){
var s2 = (sin(deg)+1)*8, c2 = (cos(deg)+1)*8
var a = deg / Math.PId
data.push(customFace(s,16,c, s2,16,c2, s2,0,c2, s,0,c, a*16,0,w,16))
s = s2, c = c2
}
return arr
})()/*/[
[objectify( 0,  0,  0, 16, 16, 6, 0)], //bottom
[objectify( 0, 16, 16, 16, 16, 4, 0)], //top
[objectify(16, 16, 16, 16, 16, 0, 0)], //north
[objectify( 0, 16,  0, 16, 16, 2, 0)], //south
[objectify(16, 16,  0, 16, 16, 8, 0)], //east
[objectify( 0, 16, 16, 16, 16, 10, 0)]  //west
]//*/
,
cull: {
top: 0,
bottom: 0,
north: 0,
south: 0,
east: 0,
west: 0
}
},
}
win.shapes = shapes
for(var shape = 0; shape < 8; shape ++){
shapes["layer"+(shape+1)] = {
verts: layerShape((shape+1)*2),
cull: {
top: 0,
bottom: 3,
north: 0,
south: 0,
east: 0,
west: 0
}
}
}
//automatically set size
for(var shape in shapes){
shape = shapes[shape]
let v = shape.verts
let s = v[0].length + v[1].length + v[2].length + v[3].length + v[4].length + v[5].length
shape.size = s
shape.texVerts = []
shape.varients = []
shape.buffer = null
if(typeof shape.hitbox === "string"){
shape.hitbox = shapes[shape.hitbox]
}
}
function compareArr(arr, out) {
let minX = 1000
let maxX = -1000
let minY = 1000
let maxY = -1000
let minZ = 1000
let maxZ = -1000
let num = 0
for (let i = 0; i < arr.length; i += 3) {
num = arr[i]
minX = minX > num ? num : minX
maxX = maxX < num ? num : maxX
num = arr[i + 1]
minY = minY > num ? num : minY
maxY = maxY < num ? num : maxY
num = arr[i + 2]
minZ = minZ > num ? num : minZ
maxZ = maxZ < num ? num : maxZ
}
out[0] = minX
out[1] = minY
out[2] = minZ
out[3] = maxX
out[4] = maxY
out[5] = maxZ
return out
}
function arrayValues(a1,a2){
if(a1.length !== a2.length) return false
let minLen = a1.length
for(var i=0; i<minLen; i++){
if(a1[i] !== a2[i]){
return false
}
}
return true
}
function initShapes() {
function mapCoords(rect, face) {
if(rect.custom) return mapCustomCoords(rect)
let x = rect.x
let y = rect.y
let z = rect.z
let w = rect.w
let h = rect.h
let tx = rect.tx
let ty = rect.ty
let tex = [tx+w,ty, tx,ty, tx,ty+h, tx+w,ty+h]
if(rect.txf){
tex[0] = tx
tex[2] = tx+w
tex[4] = tx+w
tex[6] = tx
}
if(rect.rt){//doesn't work
tex.push(...tex.splice(0,2))
}
let pos = null
switch(face) {
case 0: // Bottom
pos = [x,y,z, x+w,y,z, x+w,y,z+h, x,y,z+h]
break
case 1: // Top
pos = [x,y,z, x+w,y,z, x+w,y,z-h, x,y,z-h]
break
case 2: // North
pos = [x,y,z, x-w,y,z, x-w,y-h,z, x,y-h,z]
break
case 3: // South
pos = [x,y,z, x+w,y,z, x+w,y-h,z, x,y-h,z]
break
case 4: // East
pos = [x,y,z, x,y,z+w, x,y-h,z+w, x,y-h,z]
break
case 5: // West
pos = [x,y,z, x,y,z-w, x,y-h,z-w, x,y-h,z]
break
}
pos = pos.map(c => c / 16 - 0.5)
let minmax = compareArr(pos, [])
pos.max = minmax.splice(3, 3)
pos.min = minmax
tex = tex.map(c => c / 16 / 16)
return {
pos: pos,
tex: tex
}
}
function mapCustomCoords(coords){
let {x,y,z,x2,y2,z2,x3,y3,z3,x4,y4,z4, tx,ty,tw,th} = coords
let tex = [tx+tw,ty, tx,ty, tx,ty+th, tx+tw,ty+th]
let pos = [x,y,z,x2,y2,z2,x3,y3,z3,x4,y4,z4]
pos = pos.map(c => c / 16 - 0.5)
let minmax = compareArr(pos, [])
pos.max = minmax.splice(3, 3)
pos.min = minmax
tex = tex.map(c => c / 16 / 16)
return {pos,tex}
}
// 90 degree clockwise rotation; returns a new shape object
function rotate(shape, bit) {
let verts = shape.verts
let texVerts = shape.texVerts
let cull = shape.cull
let pos = []
tex = []
for (let i = 0; i < verts.length; i++) {
let side = verts[i]
pos[i] = []
tex[i] = []
for (let j = 0; j < side.length; j++) {
let face = side[j]
let c = []
pos[i][j] = c
for (let k = 0; k < face.length; k += 3) {
c[k] = face[k + 2]
c[k + 1] = face[k + 1]
c[k + 2] = -face[k]
}
tex[i][j] = texVerts[i][j].slice() // Copy texture verts exactly
if (i === 0) {
// Bottom
c.push(...c.splice(0, 3))
tex[i][j].push(...tex[i][j].splice(0, 2))
}
if (i === 1) {
// Top
c.unshift(...c.splice(-3, 3))
tex[i][j].unshift(...tex[i][j].splice(-2, 2))
}
let minmax = compareArr(c, [])
c.max = minmax.splice(3, 3)
c.min = minmax
}
}
let temp = tex[2] // North
tex[2] = tex[5] // North = West
tex[5] = tex[3] // West = South
tex[3] = tex[4] // South = East
tex[4] = temp // East = North
temp = pos[2] // North
pos[2] = pos[5] // North = West
pos[5] = pos[3] // West = South
pos[3] = pos[4] // South = East
pos[4] = temp // East = North
let cull2 = {
top: cull.top,
bottom: cull.bottom,
north: cull.west,
west: cull.south,
south: cull.east,
east: cull.north
}
let buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos.flat(2)), gl.STATIC_DRAW)
return {
verts: pos,
texVerts: tex,
cull: cull2,
rotate: true,
flip: shape.flip,
buffer: buffer,
size: shape.size,
varients: shape.varients,
bit: bit,
rotated: true,
rotateTimes: (shape.rotateTimes || 0) + 1
}
}
// Reflect over the y plane; returns a new shape object
function flip(shape, bit) {
let verts = shape.verts
let texVerts = shape.texVerts
let cull = shape.cull
let pos = []
tex = []
for (let i = 0; i < verts.length; i++) {
let side = verts[i]
pos[i] = []
tex[i] = []
for (let j = 0; j < side.length; j++) {
let face = side[j].slice().reverse()
let c = []
pos[i][j] = c
for (let k = 0; k < face.length; k += 3) {
c[k] = face[k + 2]
c[k + 1] = -face[k + 1]
c[k + 2] = face[k]
}
let minmax = compareArr(c, [])
c.max = minmax.splice(3, 3)
c.min = minmax
tex[i][j] = texVerts[i][j].slice() // Copy texture verts exactly
}
}
let temp = pos[0] // Bottom
pos[0] = pos[1] // Bottom = Top
pos[1] = temp // Top = Bottom
temp = tex[0] // Bottom
tex[0] = tex[1] // Bottom = Top
tex[1] = temp // Top = Bottom
let cull2 = {
top: cull.bottom,
bottom: cull.top,
north: (cull.north & 1) << 1 | (cull.north & 2) >> 1,
west: (cull.west & 1) << 1 | (cull.west & 2) >> 1,
south: (cull.south & 1) << 1 | (cull.south & 2) >> 1,
east: (cull.east & 1) << 1 | (cull.east & 2) >> 1
}
let buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(pos.flat(2)), gl.STATIC_DRAW)
return {
verts: pos,
texVerts: tex,
cull: cull2,
rotate: shape.rotate,
flip: shape.flip,
buffer: buffer,
size: shape.size,
varients: shape.varients,
bit: bit
}
}
for (let shape in shapes) {
let obj = shapes[shape]
let verts = obj.verts
// Populate the vertex coordinates
for (let i = 0; i < verts.length; i++) {
let side = verts[i]
let texArr = []
obj.texVerts.push(texArr)
for (let j = 0; j < side.length; j++) {
let face = side[j]
let mapped = mapCoords(face, i)
side[j] = mapped.pos
texArr.push(mapped.tex)
}
}
if (obj.rotate) {
let v = obj.varients
let east = rotate(obj, 4<<10)
let south = rotate(east, 2<<10)
let west = rotate(south, 6<<10)
v[0] = obj
v[2] = south
v[4] = east
v[6] = west
}
if (obj.flip) {
let v = obj.varients
v[1] = flip(obj,1<<10)
if (obj.rotate) {
v[3] = flip(v[2], 3<<10)
v[5] = flip(v[4], 5<<10)
v[7] = flip(v[6], 7<<10)
}
}
obj.buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, obj.buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(verts.flat(2)), gl.STATIC_DRAW)
}
function makeBlock(tex,shape,Block){
Block.textures = tex
Block.shape = shape
Block.shadow = true
Block.transparent = false
Block.solid = true
}
function rotTex(tex,n){
tex = tex.slice()
if(n){
for(var i=0; i<n; i++){
let temp = tex[2] // North
tex[2] = tex[5] // North = West
tex[5] = tex[3] // West = South
tex[3] = tex[4] // South = East
tex[4] = temp // East = North
}
}else{
let temp = tex[2] // North
tex[2] = tex[5] // North = West
tex[5] = tex[3] // West = South
tex[3] = tex[4] // South = East
tex[4] = temp // East = North
}
return tex
}
win.initBlockData = function(){
for (let i = 0; i < BLOCK_COUNT; i++) {
let baseBlock = blockData[i]
for(var t=0; t<baseBlock.textures.length; t++){
if(semiTransTextures.includes(baseBlock.textures[t])){
baseBlock.semiTrans = true
break
}
}
let slabBlock = Object.create(baseBlock)
let stairBlock = Object.create(baseBlock)
let crossBlock = Object.create(baseBlock)
let tallcrossBlock = Object.create(baseBlock)
let doorBlock = Object.create(baseBlock)
let torchBlock = Object.create(baseBlock)
let lanternBlock = Object.create(baseBlock)
let lanternHangBlock = Object.create(baseBlock)
let beaconBlock = Object.create(baseBlock)
let cactusBlock = Object.create(baseBlock)
let paneBlock = Object.create(baseBlock)
let portalBlock = Object.create(baseBlock)
let trapdoorBlock = Object.create(baseBlock)
let openTrapdoor = Object.create(baseBlock)
let wallFlatBlock = Object.create(baseBlock)
let fenceBlock = Object.create(baseBlock)
let wallPostBlock = Object.create(baseBlock)
let wallBlock = Object.create(baseBlock)
let walluBlock = Object.create(baseBlock)
let fencqBlock = Object.create(baseBlock)
let buttonBlock = Object.create(baseBlock)
let chainBlock = Object.create(baseBlock)
let potBlock = Object.create(baseBlock)
let potCrossBlock = Object.create(baseBlock)
let carpetBlock = Object.create(baseBlock)
baseBlock.shape = shapes.cube
slabBlock.shape = shapes.slab
slabBlock.transparent = true
stairBlock.shape = shapes.stair
stairBlock.transparent = true
crossBlock.shape = shapes.cross
tallcrossBlock.shape = shapes.tallCross
doorBlock.shape = shapes.door
doorBlock.solid = false
torchBlock.shape = shapes.torch
lanternBlock.shape = shapes.lantern
lanternHangBlock.shape = shapes.lanternHang
beaconBlock.shape = shapes.beacon
cactusBlock.shape = shapes.cactus
paneBlock.shape = shapes.pane
portalBlock.shape = shapes.portal
wallFlatBlock.shape = shapes.wallFlat
trapdoorBlock.shape = shapes.trapdoor
openTrapdoor.shape = shapes.trapdoorOpen
fenceBlock.shape = shapes.fence
fenceBlock.transparent = true
wallPostBlock.shape = shapes.wallpost
wallPostBlock.transparent = true
wallBlock.shape = shapes.wall
walluBlock.shape = shapes.wallu
fencqBlock.shape = shapes.fencq
buttonBlock.shape = shapes.button
chainBlock.shape = shapes.chain
potBlock.shape = shapes.pot
potCrossBlock.shape = shapes.potCross
carpetBlock.shape = shapes.carpet
carpetBlock.shadow = false
carpetBlock.transparent = true
if(baseBlock.bed) baseBlock.shape = shapes.bed
if(baseBlock.rotate) baseBlock.shape = shapes.rotate
if(baseBlock.cactus) potCrossBlock.shape = shapes.cactusPot
if(baseBlock.crop) baseBlock.shape = shapes.crop
if(baseBlock.anvil) baseBlock.shape = shapes.anvil
if(baseBlock.liquid) slabBlock.shape = shapes.liquidSurface
if(baseBlock._1PixLower){baseBlock.shape = shapes._1PixLower; baseBlock.transparent = true}
if(baseBlock.item) baseBlock.shape = shapes.item
if(baseBlock.torch) slabBlock.shape = shapes.wallTorch
if(baseBlock.sporeBlossom) baseBlock.shape = shapes.sporeBlossom
if(baseBlock.azalea){
baseBlock.shape = shapes.azalea
potCrossBlock.shape = shapes.azaleaPot
var t = baseBlock.potTex
potCrossBlock.textures = [t[0],t[0],t[1],t[1],t[1],t[1]]
}
if(baseBlock.sunflower) baseBlock.shape = shapes.sunflower
if(baseBlock.sideCross){baseBlock.shape = shapes.sideCross; slabBlock.shape = shapes.bottomCross}
if(baseBlock.layers){
torchBlock.shape = shapes.layer1
torchBlock.solid = true
torchBlock.shadow = false
torchBlock.dropAmount = 1
slabBlock.shape = shapes.layer2
slabBlock.solid = true
slabBlock.shadow = false
slabBlock.dropAmount = 2
stairBlock.shape = shapes.layer3
stairBlock.solid = true
stairBlock.shadow = false
stairBlock.dropAmount = 3
crossBlock.shape = shapes.layer4
crossBlock.solid = true
crossBlock.shadow = false
crossBlock.dropAmount = 4
tallcrossBlock.shape = shapes.layer5
tallcrossBlock.solid = true
tallcrossBlock.shadow = false
tallcrossBlock.dropAmount = 5
lanternBlock.shape = shapes.layer6
lanternBlock.solid = true
lanternBlock.shadow = false
lanternBlock.dropAmount = 6
lanternHangBlock.shape = shapes.layer7
lanternHangBlock.solid = true
lanternHangBlock.shadow = false
lanternHangBlock.dropAmount = 7
doorBlock.shape = shapes.layer8
doorBlock.solid = true
doorBlock.shadow = false
doorBlock.dropAmount = 8
}
if(baseBlock.name === "grass"){
crossBlock.shape = shapes.cube
crossBlock.textures = ["dirt","grassTop","snowGrass","snowGrass","snowGrass","snowGrass"]
crossBlock.solid = true
crossBlock.transparent = false
crossBlock.shadow = true
tallcrossBlock.shape = shapes._1PixLower
tallcrossBlock.textures = ["dirt","dirtPathTop","dirtPathSide","dirtPathSide","dirtPathSide","dirtPathSide"]
tallcrossBlock.solid = true
tallcrossBlock.transparent = true
tallcrossBlock.shadow = true
}
if(baseBlock.name === "farmland"){
slabBlock.textures = []
copyArr(baseBlock.textures, slabBlock.textures)
slabBlock.textures[1] = "farmlandMoist"
slabBlock.shape = shapes._1PixLower
}
if(baseBlock.mushroomBlock){
var cap = baseBlock.name
var pore = "mushroomBlockInside"
makeBlock(new Array(6).fill(pore), shapes.cube, slabBlock)
makeBlock([pore,cap,pore,pore,pore,pore], shapes.cube, stairBlock)
makeBlock([cap,pore,pore,pore,pore,pore], shapes.cube, crossBlock)
makeBlock([cap,cap,pore,pore,pore,pore], shapes.cube, tallcrossBlock)
makeBlock([pore,pore,cap,pore,pore,pore], shapes.rotate, doorBlock)
makeBlock([pore,cap,cap,pore,pore,pore], shapes.rotate, paneBlock)
makeBlock([cap,pore,cap,pore,pore,pore], shapes.rotate, portalBlock)
makeBlock([cap,cap,cap,pore,pore,pore], shapes.rotate, wallFlatBlock)
}
if(baseBlock.cake) baseBlock.shape = shapes.cake
if(baseBlock.stonecutter) baseBlock.shape = shapes.stonecutter
if(baseBlock.itemFrame) baseBlock.shape = shapes.itemFrame
if(baseBlock.name === "redstoneLamp"){
makeBlock(new Array(6).fill("redstoneLampOn"), shapes.cube, slabBlock)
slabBlock.lightLevel = 15
}
if(baseBlock.name === "endPortalFrame"){
baseBlock.shape = shapes.endPortalFrame
}
if(baseBlock.eyeOfEnder){
slabBlock.shape = shapes.eyeOfEnder
}
if(baseBlock.name === "furnace"){
var arr = baseBlock.textures.slice()
arr[3] = "furnaceFrontOn"
makeBlock(arr, shapes.rotate, slabBlock)
slabBlock.textures = arr
}
if(baseBlock.name === "jungleLeaves"){
makeBlock(new Array(6).fill("floweringJungleLeaves"), shapes.cube, slabBlock)
slabBlock.transparent = true
}
if(baseBlock.fire){
baseBlock.shape = shapes.fire
slabBlock.shape = shapes.cube
}
if(baseBlock.name === "endRod"){
baseBlock.shape = shapes.endRod
slabBlock.shape = shapes.endRodSW
}
blockData[i | SLAB] = slabBlock
blockData[i | STAIR] = stairBlock
blockData[i | CROSS] = crossBlock
blockData[i | TALLCROSS] = tallcrossBlock
blockData[i | DOOR] = doorBlock
blockData[i | TORCH] = torchBlock
blockData[i | LANTERN] = lanternBlock
blockData[i | LANTERNHANG] = lanternHangBlock
if(baseBlock.beacon) blockData[i | BEACON] = beaconBlock
if(baseBlock.cactus) blockData[i | CACTUS] = cactusBlock
blockData[i | PANE] = paneBlock
blockData[i | PORTAL] = portalBlock
blockData[i | WALLFLAT] = wallFlatBlock
blockData[i | TRAPDOOR] = trapdoorBlock
blockData[i | TRAPDOOROPEN] = openTrapdoor
blockData[i | FENCE] = fenceBlock
blockData[i | WALLPOST] = wallPostBlock
blockData[i | WALL] = wallBlock
blockData[i | WALLU] = walluBlock
blockData[i | FENCQ] = fencqBlock
if(baseBlock.button) blockData[i | BUTTON] = buttonBlock
if(baseBlock.chain) blockData[i | CHAIN] = chainBlock
if(baseBlock.pot) blockData[i | POT] = potBlock
blockData[i | POTCROSS] = potCrossBlock
if(baseBlock.carpet) blockData[i | CARPET] = carpetBlock
let v
if(baseBlock.shape.rotate || baseBlock.shape.flip){
let t = baseBlock.textures
v = baseBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
if(v[j].rotated) block.textures = rotTex(t, v[j].rotateTimes) //rotate textures around
blockData[i | v[j].bit] = block
}
}
}
v = slabBlock.shape.varients
for (let j = 0; j < v.length; j++) {
let t = slabBlock.textures
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
if(v[j].rotated) block.textures = rotTex(t, v[j].rotateTimes) //rotate textures around
blockData[i | SLAB | v[j].bit] = block
}
}
v = stairBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
blockData[i | STAIR | v[j].bit] = block
}
}
v = doorBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.solid = false
blockData[i | DOOR | v[j].bit] = block
}
}
v = paneBlock.shape.varients
for (let j = 0; j < v.length; j++) {
let t = baseBlock.textures
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
if(v[j].rotated) block.textures = rotTex(t, v[j].rotateTimes) //rotate textures around
blockData[i | PANE | v[j].bit] = block
}
}
v = portalBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | PORTAL | v[j].bit] = block
}
}
v = wallFlatBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | WALLFLAT | v[j].bit] = block
}
}
v = trapdoorBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | TRAPDOOR | v[j].bit] = block
}
}
v = openTrapdoor.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | TRAPDOOROPEN | v[j].bit] = block
}
}
v = wallBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
blockData[i | WALL | v[j].bit] = block
}
}
v = walluBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
blockData[i | WALLU | v[j].bit] = block
}
}
v = fencqBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j]) {
let block = Object.create(baseBlock)
block.shape = v[j]
block.transparent = true
blockData[i | FENCQ | v[j].bit] = block
}
}
v = buttonBlock.shape.varients
for (let j = 0; j < v.length; j++) {
if (v[j] && blockData[i].button) {
let block = Object.create(baseBlock)
block.shape = v[j]
blockData[i | BUTTON | v[j].bit] = block
}
}
}
}
}
let indexOrder;
(function() {
let arr = []
for (let i = 0; i < 100000; i++) {
arr.push(0 + i * 4, 1 + i * 4, 2 + i * 4, 0 + i * 4, 2 + i * 4, 3 + i * 4)
}
indexOrder = new Uint32Array(arr)
})()
let hexagonVerts
let slabIconVerts
let stairIconVerts
let _2dIconVerts
let fenceIconVerts
let wallPostIconVerts
let walluIconVerts
let wallIconVerts
let fencqIconVerts
let buttonIconVerts
let carpetIconVerts
let trapdoorIconVerts
let azaleaIconVerts
let cactusIconVerts
let snowIconVerts
let blockIcons
let blockIconError
{
let side = Math.sqrt(3) / 2
let s = side
let q = s / 2
let p = s / 16
hexagonVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
slabIconVerts = new Float32Array([
0, 0.5, 1, side, 0, 1, 0, -0.5, 1, -side, 0, 1,
0, -0.5, 1, side, 0, 1, side, -0.5, 1, 0, -1, 1,
-side, 0, 1, 0, -0.5, 1, 0, -1, 1, -side, -0.5, 1,
])
stairIconVerts = [
-s,0.5,0,0,1,         0,1,1,0,1,         q,0.75,1,0.5,1,    -q,0.25,0,0.5,1,    // top of the top step
-q,-0.25,0,0,1,       q,0.25,1,0,1,      s,0,1,0.5,1,        0,-0.5,0,0.5,1,    // top of the bottom step
-q,0.25,0,0,0.6,      q,0.75,1,0,0.6,    q,0.25,1,0.5,0.6,  -q,-0.25,0,0.5,0.6, // front of the top step
0,-0.5,0,0,0.6,       s,0,1,0,0.6,       s,-0.5,1,0.5,0.6,   0,-1,0,0.5,0.6,    // front of the bottom step
-s,0.5,0,0,0.8,      -q,0.25,0.5,0,0.8, -q,-0.75,0.5,1,0.8, -s,-0.5,0,1,0.8,    // side of the top step
-q,-0.25,0.5,0.5,0.8, 0,-0.5,1,0.5,0.8,  0,-1,1,1,0.8,      -q,-0.75,0.5,1,0.8, // side of the bottom step
]
_2dIconVerts = [
//-1,-1,0,0,1,          1,-1,1,0,1,        1,1,1,1,1          -1,1,0,1,1 //x, y, tx, ty, useless
1,1,1,0,1,         1,-1,1,1,1,         -1,-1,0,1,1,    -1,1,0,0,1
]
fenceIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
wallPostIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
wallIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
walluIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
fencqIconVerts = new Float32Array([
0, 1, 1, side, 0.5, 1, 0, 0, 1, -side, 0.5, 1,
0, 0, 1, side, 0.5, 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5, 1, 0, 0, 1, 0, -1, 1, -side, -0.5, 1,
])
buttonIconVerts = new Float32Array([
0, 0.5, 1, side, 0, 1, 0, -0.5, 1, -side, 0, 1,
0, -0.5, 1, side, 0, 1, side, -0.5, 1, 0, -1, 1,
-side, 0, 1, 0, -0.5, 1, 0, -1, 1, -side, -0.5, 1,
])
carpetIconVerts = new Float32Array([
0, 1-(p*17), 1, side, 0.5-(p*17), 1, 0, -(p*17), 1, -side, 0.5-(p*17), 1,
0, -(p*17), 1, side, 0.5-(p*17), 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5-(p*17), 1, 0, -(p*17), 1, 0, -1, 1, -side, -0.5, 1,
])
trapdoorIconVerts = new Float32Array([
0, 1-(p*15), 1, side, 0.5-(p*15), 1, 0, -(p*15), 1, -side, 0.5-(p*15), 1,
0, -(p*15), 1, side, 0.5-(p*15), 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5-(p*15), 1, 0, -(p*15), 1, 0, -1, 1, -side, -0.5, 1,
])
snowIconVerts = new Float32Array([
0, 1-(p*16), 1, side, 0.5-(p*16), 1, 0, -(p*16), 1, -side, 0.5-(p*16), 1,
0, -(p*16), 1, side, 0.5-(p*16), 1, side, -0.5, 1, 0, -1, 1,
-side, 0.5-(p*15), 1, 0, -(p*16), 1, 0, -1, 1, -side, -0.5, 1,
])
cactusIconVerts = new Float32Array([
0, 1-p, 1, side, 0.5-p, 1, 0, -p, 1, -side, 0.5-p, 1,
-p, 0, 1, side-p, 0.5, 1, side-p, -0.5, 1, -p, -1, 1,
-side+p, 0.5, 1, p, 0, 1, p, -1, 1, -side+p, -0.5, 1,
])
}
function genIcons() {
blockIcons = [null]
blockIcons.lengths = []
let texOrder = [ 1, 4, 3 ]
let shadows = [ 1, 0.4, 0.7 ]
let scale = 0.16 / height * inventory.size
let prevTexture
let data = []
for (let j = 11; j >= 0; j--) {
data.push(-hexagonVerts[j * 3 + 0] * scale)
data.push(hexagonVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(textureCoords[textureMap.error][(j * 2 + 0) % 8])
data.push(textureCoords[textureMap.error][(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
let buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIconError = buffer
blockIconError.length = 6 * 3
for (let i = 1; i < BLOCK_COUNT; i++) {
let data = []
let v, buffer
let block = blockData[i]
win.b = block.name
if(block.icon){
block = blockData[blockIds[block.icon]]
}
if(block.iconTexture){
prevTexture = block.textures
block.textures = new Array(6).fill(block.iconTexture)
}
if(block.flatIcon){
v = _2dIconVerts
for (let j = 3; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[2]]]
let tx = tex[0]
let ty = tex[1]
data.push(-v[j * 5 + 0] * scale)
data.push(v[j * 5 + 1] * scale)
data.push(0.1666666)
data.push(tx + v[j * 5 + 2] / 16)
data.push(ty + v[j * 5 + 3] / 16)
data.push(1)
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6
blockIcons[i | CROSS] = buffer
blockIcons.lengths[i | CROSS] = 6
blockIcons[i | TALLCROSS] = buffer
blockIcons.lengths[i | TALLCROSS] = 6
blockIcons[i | WALLFLAT] = buffer
blockIcons.lengths[i | WALLFLAT] = 6
blockIcons[i | TORCH] = buffer
blockIcons.lengths[i | TORCH] = 6
blockIcons[i | PANE] = buffer
blockIcons.lengths[i | PANE] = 6
}else if(block.carpet){
v = carpetIconVerts
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-v[j * 3 + 0] * scale)
data.push(v[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
blockIcons[i | CARPET] = buffer
blockIcons.lengths[i | CARPET] = 6 * 3
}else if(block.trapdoor){
v = trapdoorIconVerts
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-v[j * 3 + 0] * scale)
data.push(v[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
blockIcons[i | TRAPDOOR] = buffer
blockIcons.lengths[i | TRAPDOOR] = 6 * 3
blockIcons[i | TRAPDOOROPEN] = buffer
blockIcons.lengths[i | TRAPDOOROPEN] = 6 * 3
}else if(block.layers){
v = snowIconVerts
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-v[j * 3 + 0] * scale)
data.push(v[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
blockIcons[i | LAYER1] = buffer
blockIcons.lengths[i | LAYER1] = 6 * 3
blockIcons[i | LAYER2] = buffer
blockIcons.lengths[i | LAYER2] = 6 * 3
blockIcons[i | LAYER3] = buffer
blockIcons.lengths[i | LAYER3] = 6 * 3
blockIcons[i | LAYER4] = buffer
blockIcons.lengths[i | LAYER4] = 6 * 3
blockIcons[i | LAYER5] = buffer
blockIcons.lengths[i | LAYER5] = 6 * 3
blockIcons[i | LAYER6] = buffer
blockIcons.lengths[i | LAYER6] = 6 * 3
blockIcons[i | LAYER7] = buffer
blockIcons.lengths[i | LAYER7] = 6 * 3
blockIcons[i | LAYER8] = buffer
blockIcons.lengths[i | LAYER8] = 6 * 3
}else if(block.cactus){
v = cactusIconVerts
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-v[j * 3 + 0] * scale)
data.push(v[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
blockIcons[i | CACTUS] = buffer
blockIcons.lengths[i | CACTUS] = 6 * 3
}else{
for (let j = 11; j >= 0; j--) {
data.push(-hexagonVerts[j * 3 + 0] * scale)
data.push(hexagonVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]][(j * 2 + 0) % 8])
data.push(textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]][(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i] = buffer
blockIcons.lengths[i] = 6 * 3
}
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[floor(j / 4)]]]]
data.push(-slabIconVerts[j * 3 + 0] * scale)
data.push(slabIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[floor(j / 4)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | SLAB] = buffer
blockIcons.lengths[i | SLAB] = 6 * 3
data = []
v = stairIconVerts
for (let j = 23; j >= 0; j--) {
let num = floor(j / 8)
let tex = textureCoords[textureMap[block.textures[texOrder[num]]]]
let tx = tex[0]
let ty = tex[1]
data.push(-v[j * 5 + 0] * scale)
data.push(v[j * 5 + 1] * scale)
data.push(0.1666666)
data.push(tx + v[j * 5 + 2] / 16)
data.push(ty + v[j * 5 + 3] / 16)
data.push(shadows[num])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | STAIR] = buffer
blockIcons.lengths[i | STAIR] = 6 * 6
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-fenceIconVerts[j * 3 + 0] * scale)
data.push(fenceIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | FENCE] = buffer
blockIcons.lengths[i | FENCE] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-wallPostIconVerts[j * 3 + 0] * scale)
data.push(wallPostIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | WALLPOST] = buffer
blockIcons.lengths[i | WALLPOST] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-wallIconVerts[j * 3 + 0] * scale)
data.push(wallIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | WALL] = buffer
blockIcons.lengths[i | WALL] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-walluIconVerts[j * 3 + 0] * scale)
data.push(walluIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | WALLU] = buffer
blockIcons.lengths[i | WALLU] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-fencqIconVerts[j * 3 + 0] * scale)
data.push(fencqIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | FENCQ] = buffer
blockIcons.lengths[i | FENCQ] = 6 * 1
data = []
for (let j = 11; j >= 0; j--) {
let tex = textureCoords[textureMap[block.textures[texOrder[Math.floor(j / 4)]]]]
data.push(-buttonIconVerts[j * 3 + 0] * scale)
data.push(buttonIconVerts[j * 3 + 1] * scale)
data.push(0.1666666)
data.push(tex[(j * 2 + 0) % 8])
data.push(tex[(j * 2 + 1) % 8])
data.push(shadows[Math.floor(j / 16)])
}
buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(data), gl.STATIC_DRAW)
blockIcons[i | BUTTON] = buffer
blockIcons.lengths[i | BUTTON] = 6 * 1
if(block.iconTexture){
block.textures = prevTexture
}
}
}
function uniformMatrix(cacheId, programObj, vrName, transpose, matrix) {
let vrLocation = glCache[cacheId]
if(vrLocation === undefined) {
vrLocation = gl.getUniformLocation(programObj, vrName)
glCache[cacheId] = vrLocation
}
gl.uniformMatrix4fv(vrLocation, transpose, matrix)
}
function vertexAttribPointer(cacheId, programObj, vrName, size, VBO) {
let vrLocation = glCache[cacheId]
if(vrLocation === undefined) {
vrLocation = gl.getAttribLocation(programObj, vrName)
glCache[cacheId] = vrLocation
}
if (vrLocation !== -1) {
gl.enableVertexAttribArray(vrLocation)
gl.bindBuffer(gl.ARRAY_BUFFER, VBO)
gl.vertexAttribPointer(vrLocation, size, gl.FLOAT, false, 0, 0)
}
}
//panorama buffer
let panoramaVertBuffer
let panoramaTexBuffer
let panoramaSize
//Generate buffers for every block face and store them
let sideEdgeBuffers
let indexBuffer
function cross(v1, v2, result) {
let x = v1.x,
y = v1.y,
z = v1.z,
x2 = v2.x,
y2 = v2.y,
z2 = v2.z
result.x = y * z2 - y2 * z
result.y = z * x2 - z2 * x
result.z = x * y2 - x2 * y
}
let matrix = new Float32Array(16); // A temperary matrix that may store random data.
let projection = new Float32Array(16)
let defaultModelView = new Float32Array([ -10,0,0,0,0,10,0,0,0,0,-10,0,0,0,0,1 ])
class Matrix {
constructor(arr) {
this.elements = new Float32Array(arr || 16)
}
translate(x, y, z) {
let a = this.elements
a[3] += a[0] * x + a[1] * y + a[2] * z
a[7] += a[4] * x + a[5] * y + a[6] * z
a[11] += a[8] * x + a[9] * y + a[10] * z
a[15] += a[12] * x + a[13] * y + a[14] * z
}
rotX(angle) {
let elems = this.elements
let c = cos(angle)
let s = sin(angle)
let t = elems[1]
elems[1] = t * c + elems[2] * s
elems[2] = t * -s + elems[2] * c
t = elems[5]
elems[5] = t * c + elems[6] * s
elems[6] = t * -s + elems[6] * c
t = elems[9]
elems[9] = t * c + elems[10] * s
elems[10] = t * -s + elems[10] * c
t = elems[13]
elems[13] = t * c + elems[14] * s
elems[14] = t * -s + elems[14] * c
}
rotY(angle) {
let c = cos(angle)
let s = sin(angle)
let elems = this.elements
let t = elems[0]
elems[0] = t * c + elems[2] * -s
elems[2] = t * s + elems[2] * c
t = elems[4]
elems[4] = t * c + elems[6] * -s
elems[6] = t * s + elems[6] * c
t = elems[8]
elems[8] = t * c + elems[10] * -s
elems[10] = t * s + elems[10] * c
t = elems[12]
elems[12] = t * c + elems[14] * -s
elems[14] = t * s + elems[14] * c
}
rotZ(angle) {
let c = cos(angle)
let s = sin(angle)
let elems = this.elements
let t = elems[0]
elems[0] = t * c + elems[1] * s
elems[1] = t * -s + elems[1] * c
t = elems[4]
elems[4] = t * c + elems[5] * s
elems[5] = t * -s + elems[5] * c
t = elems[8]
elems[8] = t * c + elems[9] * s
elems[9] = t * -s + elems[9] * c
t = elems[12]
elems[12] = t * c + elems[13] * s
elems[13] = t * -s + elems[13] * c
}
scale(x, y, z) {
let a = this.elements
a[0] *= x;
a[1] *= y;
a[2] *= z;
a[4] *= x;
a[5] *= y;
a[6] *= z;
a[8] *= x;
a[9] *= y;
a[10] *= z;
a[12] *= x;
a[13] *= y;
a[14] *= z;
}
unscale(x,y,z){
let a = this.elements
a[0] /= x;
a[1] /= y;
a[2] /= z;
a[4] /= x;
a[5] /= y;
a[6] /= z;
a[8] /= x;
a[9] /= y;
a[10] /= z;
a[12] /= x;
a[13] /= y;
a[14] /= z;
}
identity() {
let a = this.elements
a[0] = 1
a[1] = 0
a[2] = 0
a[3] = 0
a[4] = 0
a[5] = 1
a[6] = 0
a[7] = 0
a[8] = 0
a[9] = 0
a[10] = 1
a[11] = 0
a[12] = 0
a[13] = 0
a[14] = 0
a[15] = 1
}
// somebody optimize this
// you just have to expand it
mult(b) {
const a = this.elements.slice()
const out = this.elements
let e = 0
for (let row = 0; row < 4; row++) {
for (let col = 0; col < 4; col++) {
out[e++] = a[row * 4 + 0] * b[col + 0] + a[row * 4 + 1] * b[col + 4] + a[row * 4 + 2] * b[col + 8] + a[row * 4 + 3] * b[col + 12];
}
}
}
// same here
postMult(a) {
const b = this.elements.slice()
const out = this.elements
let e = 0
for (let row = 0; row < 4; row++) {
for (let col = 0; col < 4; col++) {
out[e++] = a[row * 4 + 0] * b[col + 0] + a[row * 4 + 1] * b[col + 4] + a[row * 4 + 2] * b[col + 8] + a[row * 4 + 3] * b[col + 12];
}
}
}
transpose() {
let matrix = this.elements
let temp = matrix[4]
matrix[4] = matrix[1]
matrix[1] = temp
temp = matrix[8]
matrix[8] = matrix[2]
matrix[2] = temp
temp = matrix[6]
matrix[6] = matrix[9]
matrix[9] = temp
temp = matrix[3]
matrix[3] = matrix[12]
matrix[12] = temp
temp = matrix[7]
matrix[7] = matrix[13]
matrix[13] = temp
temp = matrix[11]
matrix[11] = matrix[14]
matrix[14] = temp
}
copyArray(from) {
let to = this.elements
for (let i = 0; i < from.length; i++) {
to[i] = from[i]
}
}
copyMatrix(from) {
let to = this.elements
from = from.elements
for (let i = 0; i < from.length; i++) {
to[i] = from[i]
}
}
}
class Plane {
constructor(nx, ny, nz) {
this.set(nx, ny, nz)
}
set(nx, ny, nz) {
// Pre-computed chunk offsets to reduce branching during culling
this.dx = nx > 0 ? 16 : 0
this.dy = ny > 0
this.dz = nz > 0 ? 16 : 0
// Normal vector for the plane
this.nx = nx
this.ny = ny
this.nz = nz
}
}
let defaultTransformation = new Matrix([ -10,0,0,0,0,10,0,0,0,0,-10,0,0,0,0,1 ])
class Camera {
constructor() {
this.x = 0
this.y = 0
this.z = 0
this.rx = 0; // Pitch
this.ry = 0; // Yaw
this.rz = 0
this.currentFov = 0
this.defaultFov = settings.fov
this.targetFov = settings.fov
this.step = 0
this.lastStep = 0
this.projection = new Float32Array(5)
this.transformation = new Matrix()
this.direction = { x: 1, y: 0, z: 0 }; // Normalized direction vector
this.frustum = [] // The 5 planes of the viewing frustum (there's no far plane)
for (let i = 0; i < 5; i++) {
this.frustum.push(new Plane(1, 0, 0))
}
}
FOV(fov, time) {
if (fov === this.currentFov) return
if (!fov) {
let now = Date.now()
fov = this.currentFov + this.step * (now - this.lastStep)
this.lastStep = now
if (Math.sign(this.targetFov - this.currentFov) !== Math.sign(this.targetFov - fov)) {
fov = this.targetFov
}
}
else if (time) {
this.targetFov = fov
this.step = (fov - this.currentFov) / time
this.lastStep = Date.now()
return
} else {
this.targetFov = fov
}
const tang = Math.tan(fov * Math.PI / 360)
const scale = 1 / tang
const near = 1
const far = 1000000
this.currentFov = fov; // Store the state of the projection matrix
this.nearH = near * tang; // This is needed for frustum culling
this.projection[0] = scale / width * height
this.projection[1] = scale
this.projection[2] = -far / (far - near)
this.projection[3] = -1
this.projection[4] = -far * near / (far - near)
}
transform() {
this.transformation.copyMatrix(defaultTransformation)
this.transformation.rotZ(this.rz)
this.transformation.rotX(this.rx)
this.transformation.rotY(this.ry)
this.transformation.translate(-this.x, -this.y, -this.z)
}
resetMatrix() {
this.transformation.copyMatrix(defaultTransformation)
}
getMatrix() {
let proj = this.projection
let view = this.transformation.elements
matrix[0]  = proj[0] * view[0]
matrix[1]  = proj[1] * view[4]
matrix[2]  = proj[2] * view[8] + proj[3] * view[12]
matrix[3]  = proj[4] * view[8]
matrix[4]  = proj[0] * view[1]
matrix[5]  = proj[1] * view[5]
matrix[6]  = proj[2] * view[9] + proj[3] * view[13]
matrix[7]  = proj[4] * view[9]
matrix[8]  = proj[0] * view[2]
matrix[9]  = proj[1] * view[6]
matrix[10] = proj[2] * view[10] + proj[3] * view[14]
matrix[11] = proj[4] * view[10]
matrix[12] = proj[0] * view[3]
matrix[13] = proj[1] * view[7]
matrix[14] = proj[2] * view[11] + proj[3] * view[15]
matrix[15] = proj[4] * view[11]
return matrix
}
setDirection() {
if (this.targetFov !== this.currentFov) {
this.FOV()
}
this.direction.x = -sin(this.ry) * cos(this.rx)
this.direction.y = sin(this.rx)
this.direction.z = cos(this.ry) * cos(this.rx)
this.computeFrustum()
}
computeFrustum() {
let X = vec1
let dir = this.direction
X.x = dir.z
X.y = 0
X.z = -dir.x
X.normalize()
let Y = vec2
Y.set(dir)
Y.mult(-1)
cross(Y, X, Y)
//Near plane
this.frustum[0].set(dir.x, dir.y, dir.z)
let aux = vec3
aux.set(Y)
aux.mult(this.nearH)
aux.add(dir)
aux.normalize()
cross(aux, X, aux)
this.frustum[1].set(aux.x, aux.y, aux.z)
aux.set(Y)
aux.mult(-this.nearH)
aux.add(dir)
aux.normalize()
cross(X, aux, aux)
this.frustum[2].set(aux.x, aux.y, aux.z)
aux.set(X)
aux.mult(-this.nearH * width / height)
aux.add(dir)
aux.normalize()
cross(aux, Y, aux)
this.frustum[3].set(aux.x, aux.y, aux.z)
aux.set(X)
aux.mult(this.nearH * width / height)
aux.add(dir)
aux.normalize()
cross(Y, aux, aux)
this.frustum[4].set(aux.x, aux.y, aux.z)
}
canSee(x, y, z, maxY) {
x -= 0.5
y -= 0.5
z -= 0.5
maxY += 0.5
let px = 0, py = 0, pz = 0, plane = null
let cx = p.x, cy = p.y, cz = p.z
for (let i = 0; i < 5; i++) {
plane = this.frustum[i]
px = x + plane.dx
py = plane.dy ? maxY : y
pz = z + plane.dz
if ((px - cx) * plane.nx + (py - cy) * plane.ny + (pz - cz) * plane.nz < 0) {
return false
}
}
return true
}
}
function trans(matrix, x, y, z) {
let a = matrix
a[3] += a[0] * x + a[1] * y + a[2] * z
a[7] += a[4] * x + a[5] * y + a[6] * z
a[11] += a[8] * x + a[9] * y + a[10] * z
a[15] += a[12] * x + a[13] * y + a[14] * z
}
function rotX(matrix, angle) {
// This function is basically multiplying 2 4x4 matrices together,
// but 1 of them has a bunch of 0's and 1's in it,
// so I removed all terms that multiplied by 0, and just left off the 1's.
// mat2 = [1, 0, 0, 0, 0, c, -s, 0, 0, s, c, 0, 0, 0, 0, 1]
let elems = matrix
let c = cos(angle)
let s = sin(angle)
let t = elems[1]
elems[1] = t * c + elems[2] * s
elems[2] = t * -s + elems[2] * c
t = elems[5]
elems[5] = t * c + elems[6] * s
elems[6] = t * -s + elems[6] * c
t = elems[9]
elems[9] = t * c + elems[10] * s
elems[10] = t * -s + elems[10] * c
t = elems[13]
elems[13] = t * c + elems[14] * s
elems[14] = t * -s + elems[14] * c
}
function rotY(matrix, angle) {
//source = c, 0, s, 0, 0, 1, 0, 0, -s, 0, c, 0, 0, 0, 0, 1
let c = cos(angle)
let s = sin(angle)
let elems = matrix
let t = elems[0]
elems[0] = t * c + elems[2] * -s
elems[2] = t * s + elems[2] * c
t = elems[4]
elems[4] = t * c + elems[6] * -s
elems[6] = t * s + elems[6] * c
t = elems[8]
elems[8] = t * c + elems[10] * -s
elems[10] = t * s + elems[10] * c
t = elems[12]
elems[12] = t * c + elems[14] * -s
elems[14] = t * s + elems[14] * c
}
function scale(a,x,y,z){
a[0] *= x;
a[1] *= y;
a[2] *= z;
a[4] *= x;
a[5] *= y;
a[6] *= z;
a[8] *= x;
a[9] *= y;
a[10] *= z;
a[12] *= x;
a[13] *= y;
a[14] *= z;
}
function transpose(matrix) {
let temp = matrix[4]
matrix[4] = matrix[1]
matrix[1] = temp
temp = matrix[8]
matrix[8] = matrix[2]
matrix[2] = temp
temp = matrix[6]
matrix[6] = matrix[9]
matrix[9] = temp
temp = matrix[3]
matrix[3] = matrix[12]
matrix[12] = temp
temp = matrix[7]
matrix[7] = matrix[13]
matrix[13] = temp
temp = matrix[11]
matrix[11] = matrix[14]
matrix[14] = temp
}
function matMult() {
//Multiply the projection matrix by the view matrix; this is optimized specifically for these matrices by removing terms that are always 0.
let proj = projection
let view = modelView
matrix[0] = proj[0] * view[0]
matrix[1] = proj[0] * view[1]
matrix[2] = proj[0] * view[2]
matrix[3] = proj[0] * view[3]
matrix[4] = proj[5] * view[4]
matrix[5] = proj[5] * view[5]
matrix[6] = proj[5] * view[6]
matrix[7] = proj[5] * view[7]
matrix[8] = proj[10] * view[8] + proj[11] * view[12]
matrix[9] = proj[10] * view[9] + proj[11] * view[13]
matrix[10] = proj[10] * view[10] + proj[11] * view[14]
matrix[11] = proj[10] * view[11] + proj[11] * view[15]
matrix[12] = proj[14] * view[8]
matrix[13] = proj[14] * view[9]
matrix[14] = proj[14] * view[10]
matrix[15] = proj[14] * view[11]
}
function copyArr(a, b) {
for (let i = 0; i < a.length; i++) {
b[i] = a[i]
}
}
function FOV(fov) {
let tang = Math.tan(fov * 0.5 * Math.PI / 180)
let scale = 1 / tang
let near = 1
let far = 1000000
currentFov = fov
projection[0] = scale / width * height
projection[5] = scale
projection[10] = -far / (far - near)
projection[11] = -1
projection[14] = -far * near / (far - near)
}
function initModelView(camera, x, y, z, rx, ry, sx, sy) {
if (camera) {
camera.transform()
uniformMatrix("view3d", program3D, "uView", false, camera.getMatrix())
} else {
copyArr(defaultModelView, modelView)
rotX(modelView, rx)
rotY(modelView, ry)
trans(modelView, -x, -y, -z)
if(sy){
scale(modelView,sx,sy,1)
}else{
scale(modelView, sx,sx,1)
}
matMult()
transpose(matrix)
uniformMatrix("view3d", program3D, "uView", false, matrix)
}
}
win.initModelView = initModelView
function timeString(millis) {
if (millis > 300000000000 || !millis) {
return "never"
}
const SECOND = 1000
const MINUTE = SECOND * 60
const HOUR = MINUTE * 60
const DAY = HOUR * 24
const YEAR = DAY * 365
if (millis < MINUTE) {
return "just now"
}
let years = floor(millis / YEAR)
millis -= years * YEAR
let days = floor(millis / DAY)
millis -= days * DAY
let hours = floor(millis / HOUR)
millis -= hours * HOUR
let minutes = floor(millis / MINUTE)
if (years) {
return `${years} year${years > 1 ? "s" : ""} and ${days} day${day !== 1 ? "s" : ""} ago`
}
if (days) {
return `${days} day${days > 1 ? "s" : ""} and ${hours} hour${hours !== 1 ? "s" : ""} ago`
}
if (hours) {
return `${hours} hour${hours > 1 ? "s" : ""} and ${minutes} minute${minutes !== 1 ? "s" : ""} ago`
}
return `${minutes} minute${minutes > 1 ? "s" : ""} ago`
}
function roundBits(number) {
return ((number * 1000000 + 0.5) | 0) / 1000000
}
function rayTrace(x, y, z, shape) {
let cf, cd = 1e9; //Closest face and distance
let m; //Absolute distance to intersection point
let ix, iy, iz; //Intersection coords
let minX, minY, minZ, maxX, maxY, maxZ, min, max; //Bounds of face coordinates
let east = p.direction.x < 0
let top = p.direction.y < 0
let north = p.direction.z < 0
let verts = shape.verts
let faces = verts[0]
//Top and bottom faces
if (top) {
faces = verts[1]
}
if (p.direction.y) {
for (let face of faces) {
min = face.min
minX = min[0]
minZ = min[2]
max = face.max
maxX = max[0]
maxZ = max[2]
m = (y + face[1] - p.y) / p.direction.y
ix = m * p.direction.x + p.x
iz = m * p.direction.z + p.z
if (m > 0 && m < cd && ix >= x + minX && ix <= x + maxX && iz >= z + minZ && iz <= z + maxZ) {
cd = m; //Ray crosses bottom face
cf = top ? "top" : "bottom"
}
}
}
//West and East faces
if (east) {
faces = verts[4]
} else {
faces = verts[5]
}
if (p.direction.x) {
for (let face of faces) {
min = face.min
minY = min[1]
minZ = min[2]
max = face.max
maxY = max[1]
maxZ = max[2]
m = (x + face[0] - p.x) / p.direction.x
iy = m * p.direction.y + p.y
iz = m * p.direction.z + p.z
if (m > 0 && m < cd && iy >= y + minY && iy <= y + maxY && iz >= z + minZ && iz <= z + maxZ) {
cd = m
cf = east ? "east" : "west"
}
}
}
//South and North faces
if (north) {
faces = verts[2]
} else {
faces = verts[3]
}
if (p.direction.z) {
for (let face of faces) {
min = face.min
minX = min[0]
minY = min[1]
max = face.max
maxX = max[0]
maxY = max[1]
m = (z + face[2] - p.z) / p.direction.z
ix = m * p.direction.x + p.x
iy = m * p.direction.y + p.y
if (m > 0 && m < cd && ix >= x + minX && ix <= x + maxX && iy >= y + minY && iy <= y + maxY) {
cd = m
cf = north ? "north" : "south"
}
}
}
return [ cd, cf ]
}
let entPlayerCollided
let collidedWithMe
function entityRayTrace(x,y,z,returnIt){
entPlayerCollided = false
for(var i=0; i<world.entities.length; i++){
var ent = world.entities[i]
var ex = ent.x, ey = ent.y, ez = ent.z
var w2=ent.width/2, h2=ent.height/2, d2=ent.depth/2
if(x>ex-w2 && x<ex+w2 && y>ey-h2 && y<ey+h2 && z>ez-d2 && z<ez+d2){
if(returnIt) return ent
else return entHitbox.ent = ent
}
}
if(multiplayer){
for(var i in players){
var ent = players[i]
var ex = ent.x, ey = ent.y, ez = ent.z
var w2=ent.width/2, h2=ent.height/2, d2=ent.depth/2
if(x>ex-w2 && x<ex+w2 && y>ey-h2 && y<ey+h2 && z>ez-d2 && z<ez+d2){
if(returnIt){
entPlayerCollided = true
return ent
}else{
entHitbox.player = true
return entHitbox.ent = ent
}
}
}
}
var px = p.x, py = p.y, pz = p.z
var w2 = p.w/2, th = p.topH, bh = p.bottomH
if(x>px-p.w && x<px+p.w && y>py-bh && y<py+th && z>pz-w2 && z<pz+w2){
collidedWithMe = true
}
}
function runRayTrace(x, y, z) {
let block = world.getBlock(x, y, z)
if (block && !(blockData[block].noHitbox && !(holding && blockData[holding].allHitbox))) {
let shape = blockData[block].shape
if(shape.hitbox) shape = shape.hitbox
let rt = rayTrace(x, y, z, shape)
if (rt[1] && rt[0] < hitBox.closest) {
hitBox.closest = rt[0]
hitBox.face = rt[1]
hitBox.pos = [ x, y, z ]
hitBox.shape = shape
crack.pos = [x, y, z]
crack.shape = shape
}
}
}
function lookingAt() {
// Checks blocks in front of the player to see which one they're looking at
hitBox.pos = null
hitBox.closest = 1e9
entHitbox.ent = null
entHitbox.player = false
if (p.spectator) {
return
}
let blockState = world.getBlock(p2.x, p2.y, p2.z)
if (blockState && !(blockData[blockState].noHitbox && !(holding && blockData[holding].allHitbox))) {
hitBox.pos = [ p2.x, p2.y, p2.z ]
hitBox.closest = 0
hitBox.shape = blockData[blockState].shape
if(hitBox.shape.hitbox) hitBox.shape = hitBox.shape.hitbox
crack.pos = [p2.x, p2.y, p2.z]
crack.shape = blockData[blockState].shape
return
}
let pd = p.direction
// Target block
let tx = round(pd.x * reach + p.x)
let ty = round(pd.y * reach + p.y)
let tz = round(pd.z * reach + p.z)
let minX = p2.x
let maxX = 0
let minY = p2.y
let maxY = 0
let minZ = p2.z
let maxZ = 0
for (let i = 0; i < reach + 1; i++) {
if (i > reach) {
i = reach
}
maxX = round(p.x + pd.x * i)
maxY = round(p.y + pd.y * i)
maxZ = round(p.z + pd.z * i)
if (maxX === minX && maxY === minY && maxZ === minZ) {
continue
}
if (minX !== maxX) {
if (minY !== maxY) {
if (minZ !== maxZ) {
runRayTrace(maxX, maxY, maxZ)
}
runRayTrace(maxX, maxY, minZ)
}
if (minZ !== maxZ) {
runRayTrace(maxX, minY, maxZ)
}
runRayTrace(maxX, minY, minZ)
}
if (minY !== maxY) {
if (minZ !== maxZ) {
runRayTrace(minX, maxY, maxZ)
}
runRayTrace(minX, maxY, minZ)
}
if (minZ !== maxZ) {
runRayTrace(minX, minY, maxZ)
}
if (hitBox.pos) {
return; //The ray has collided; it can't possibly find a closer collision now
}
var ex=maxX, ey=maxY, ez=maxZ
for(var e=0; e<1; e+=0.1){
ex += pd.x*0.1, ey += pd.y*0.1, ez += pd.z*0.1
entityRayTrace(ex,ey,ez)
if(entHitbox.ent){
hitBox.pos = null
return
}
}
minZ = maxZ
minY = maxY
minX = maxX
}
}
function calcThirdPerson(){
return 4
}
let inBox = function(x, y, z, w, h, d) {
let iy = y - h/2 - p.topH
let ih = h + p.bottomH + p.topH
let ix = x - w/2 - p.w
let iw = w + p.w*2
let iz = z - d/2 - p.w
let id = d + p.w*2
return p.x > ix && p.y > iy && p.z > iz && p.x < ix + iw && p.y < iy + ih && p.z < iz + id
}
let onBox = function(x, y, z, w, h, d) {
let iy = roundBits(y - h/2 - p.topH)
let ih = roundBits(h + p.bottomH + p.topH)
let ix = roundBits(x - w/2 - p.w)
let iw = roundBits(w + p.w*2)
let iz = roundBits(z - d/2 - p.w)
let id = roundBits(d + p.w*2)
return p.x > ix && p.y > iy && p.z > iz && p.x < ix + iw && p.y <= iy + ih && p.z < iz + id
}
let takeDamage
function collided(x, y, z, vx, vy, vz, block) {
if(p.spectator) {
return false
}
let shape = blockData[block].shape
if(shape.hitbox) shape = shape.hitbox
let verts = shape.verts
let blockObj = blockData[block]
let px = roundBits(p.x - p.w - x)
let py = roundBits(p.y - p.bottomH - y)
let pz = roundBits(p.z - p.w - z)
let pxx = roundBits(p.x + p.w - x)
let pyy = roundBits(p.y + p.topH - y)
let pzz = roundBits(p.z + p.w - z)
let minX, minY, minZ, maxX, maxY, maxZ, min, max
//Top and bottom faces
let faces = verts[0]
if (vy <= 0) {
faces = verts[1]
}
if (!vx && !vz) {
for (let face of faces) {
min = face.min
minX = min[0]
minZ = min[2]
max = face.max
maxX = max[0]
maxZ = max[2]
if (face[1] > py && face[1] < pyy && minX < pxx && maxX > px && minZ < pzz && maxZ > pz) {
if (vy <= 0) {
p.onGround = true
p.y = round((face[1] + y + p.bottomH) * 10000) / 10000
return false
} else {
//if(blockObj.damage > takeDamage){
//takeDamage = blockObj.damage
//}
return true
}
}
}
return false
}
//West and East faces
if (vx < 0) {
faces = verts[4]
} else if (vx > 0) {
faces = verts[5]
}
if (vx) {
let col = false
for (let face of faces) {
min = face.min
minZ = min[2]
minY = min[1]
max = face.max
maxZ = max[2]
maxY = max[1]
if (face[0] > px && face[0] < pxx && minY < pyy && maxY > py && minZ < pzz && maxZ > pz) {
if (maxY - py > 0.5) {
p.canStepX = false
}
col = true
//if(blockObj.damage > takeDamage){
//takeDamage = blockObj.damage
//}
}
}
return col
}
//South and North faces
if (vz < 0) {
faces = verts[2]
} else if (vz > 0) {
faces = verts[3]
}
if (vz) {
let col = false
for (let face of faces) {
min = face.min
minX = min[0]
minY = min[1]
max = face.max
maxX = max[0]
maxY = max[1]
if (face[2] > pz && face[2] < pzz && minY < pyy && maxY > py && minX < pxx && maxX > px) {
if (maxY - py > 0.5) {
p.canStepZ = false
}
col = true
//if(blockObj.damage > takeDamage){
//takeDamage = blockObj.damage
//}
}
}
return col
}
}
let contacts = {
array: [],
size: 0,
add: function(x, y, z, block) {
if (this.size === this.array.length) {
this.array.push([ x, y, z, block ])
} else {
this.array[this.size][0] = x
this.array[this.size][1] = y
this.array[this.size][2] = z
this.array[this.size][3] = block
}
this.size++
},
clear: function() {
this.size = 0
},
}
let blocks = []
let resolveContactsAndUpdatePosition = function(now) {
let pminX = p2.x - 1
let pmaxX = p2.x + 1
let pminY = p2.y - 2
let pmaxY = p2.y + 1
let pminZ = p2.z - 1
let pmaxZ = p2.z + 1
let block = null
let vel = p.velocity
let blocksSize = 0
for (let x = pminX; x <= pmaxX; x++) {
for (let y = pminY; y <= pmaxY; y++) {
for (let z = pminZ; z <= pmaxZ; z++) {
let block = world.getBlock(x, y, z)
if (block && blockData[block].solid && !blockData[block].liquid) {
contacts.add(x, y, z, block)
}
if (block) {
if(blocks[blocksSize]){
blocks[blocksSize][0] = x
blocks[blocksSize][1] = y
blocks[blocksSize][2] = z
blocks[blocksSize][3] = block
}else{
blocks.push([x,y,z,block])
}
blocksSize ++
}
}
}
}
let dt = (performance.now() - p.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
p.previousX = p.x
p.previousY = p.y
p.previousZ = p.z
var ontouch
var x
var y
var z
var damageBlock
takeDamage = 0
liquid = false
powder = false
//collisions for ontouch
for (let i = 0; i < blocksSize; i++) {
block = blocks[i]
x = block[0]
y = block[1]
z = block[2]
if(block[0] === p2.x && block[2] === p2.z && blockData[block[3]].ontouch){
ontouch = blockData[block[3]].ontouch
}
if(blockData[block[3]].liquid) {
liquid = true
}
if(!blockData[block[3]].solid && blockData[block[3]].powder){
powder = true
}
let d = blockData[block[3]].damage
if(d && d>takeDamage/* && collided(x,y,z,0,0,0,block[3])*/) {
takeDamage = d
damageBlock = blockData[block[3]]
}
}
//Check collisions in the Y direction
p.onGround = false
p.canStepX = false
p.canStepZ = false
p.y += vel.y * dt
for (let i = 0; i < contacts.size; i++) {
block = contacts.array[i]
if (collided(block[0], block[1], block[2], 0, vel.y, 0, block[3])) {
p.y = p.previousY
vel.y = 0
break
}
}
if (p.y === p.previousY && !p.flying) {
p.canStepX = true
p.canStepZ = true
}
var sneakLock = false, sneakSafe = false
if (p.sneaking) {
for (let i = 0; i < contacts.size; i++) {
block = contacts.array[i]
if (onBox(block[0], block[1], block[2], 1, 1, 1)) {
sneakLock = true
break
}
}
}
//Check collisions in the X direction
p.x += vel.x * dt
for (let i = 0; i < contacts.size; i++) {
block = contacts.array[i]
if (collided(block[0], block[1], block[2], vel.x, 0, 0, block[3])) {
if (p.canStepX && !world.getBlock(block[0], block[1] + 1, block[2]) && !world.getBlock(block[0], block[1] + 2, block[2])) {
continue
}
p.x = p.previousX
vel.x = 0
break
}
if (sneakLock && onBox(block[0], block[1], block[2], 1, 1, 1)) {
sneakSafe = true
}
}
if (sneakLock && !sneakSafe) {
p.x = p.previousX
vel.x = 0
}
sneakSafe = false
//Check collisions in the Z direction
p.z += vel.z * dt
for (let i = 0; i < contacts.size; i++) {
block = contacts.array[i]
if (collided(block[0], block[1], block[2], 0, 0, vel.z, block[3])) {
if (p.canStepZ && !world.getBlock(block[0], block[1] + 1, block[2]) && !world.getBlock(block[0], block[1] + 2, block[2])) {
continue
}
p.z = p.previousZ
vel.z = 0
break
}
if (sneakLock && onBox(block[0], block[1], block[2], 1, 1, 1)) {
sneakSafe = true
}
}
if (sneakLock && !sneakSafe) {
p.z = p.previousZ
vel.z = 0
}
//Minimun height: -40
if(!survival && p.y <= -40){
p.y = -40
p.onGround = true
}
if (!p.flying) {
if (liquid){
//p.jumpSpeed = 0.135;
p.gravityStength = -0.01;
if (controlMap.jump.pressed){
p.velocity.y += 0.025
}
if (controlMap.sneak.pressed){
p.velocity.y -= 0.025
}
p.velocity.y *= 0.9
}else{
p.gravityStength = -0.032
}
if(powder){
p.velocity.y *= 0.5
if(controlMap.jump.pressed) p.velocity.y += 0.025
}
let drag = liquid ? 0.7 : (p.onGround ? 0.5 : 0.85)
if(blockData[standingOn].slide) drag = blockData[standingOn].slide
p.velocity.z += (p.velocity.z * drag - p.velocity.z) * dt
p.velocity.x += (p.velocity.x * drag - p.velocity.x) * dt
} else {
let drag = 0.9
p.velocity.z += (p.velocity.z * drag - p.velocity.z) * dt
p.velocity.x += (p.velocity.x * drag - p.velocity.x) * dt
p.velocity.y += (p.velocity.y * 0.8 - p.velocity.y) * dt
if (p.onGround && !p.spectator) {
p.flying = false
}
}
p.lastUpdate = performance.now()
contacts.clear()
lookingAt()
if(takeDamage > 0 && now - lastBlockHarm > 500 && survival){
lastBlockHarm = now
dieMessage = damageBlock.dieMessage ? damageBlock.dieMessage() : (username+" died because of "+damageBlock.name+". You should avoid it next time.")
damage(takeDamage, dieMessage)
}
if(damageBlock && damageBlock.burnPlayer){
p.burnStart = now
p.burnTimer += 0.1
}
if(ontouch){
ontouch(x, y, z)
}
}
let runGravity = function() {
if (p.flying) {
return
}
let dt = (performance.now() - p.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
if(p.onGround) {
let fall = p.lastY - p.y
p.lastY = p.y
var block = standingOn
if(fall > 3 && survival && !liquid) {
damage(Math.floor(fall-3), username+" fell from a high place. You fell "+Math.round(fall)+" blocks.", true)//Math.floor( (p.velocity.y * p.velocity.y * 8));
if(fall > 6){
playSound("damage.bigfall")
}else playSound("damage.smallfall")
}
if(p.velocity.y < -0.1 && block){
blockParticles(block, p.x,p.y-2,p.z,10)
blockSound(block, "step", p.x,p.y,p.z, 1)
}
if(blockData[block].bounciness && p.velocity.y < -0.2){
p.velocity.y *= -blockData[block].bounciness
}else{
if(controlMap.jump.pressed) {
p.velocity.y = p.jumpSpeed
p.onGround = false
if(survival){
p.foodExhaustion += p.sprinting ? 0.2 : 0.05
}
} else {
p.velocity.y = 0
}
}
} else {
p.velocity.y += p.gravityStength * dt
if(p.velocity.y < -p.maxYVelocity) {
p.velocity.y = -p.maxYVelocity
}
}
if(liquid !== lastLiquid){
lastLiquid = liquid
if(liquid){
playSound("liquid.splash")
}else{
//playSound("liquid.exit")
}
}
}
let defineWorld = function() {
let tickStart = performance.now()
world.tick()
analytics.totalTickTime += performance.now() - tickStart
let renderStart = performance.now()
p2.x = round(p.x)
p2.y = round(p.y)
p2.z = round(p.z)
p3.x = p.x
p3.y = p.y
p3.z = p.z
p3.ry = p.ry
p3.survival = survival
p3.username = username || ""
p3.time = worldTime
p3.harmEffect = harmEffect
p3.crackPos = crack.pos
p3.crack = crack.idx
p3.burning = p.burning
let prevX
let prevY
let prevZ
let prevRotX
let prevRotY
if(p.thirdPerson){
prevX = p.x
prevY = p.y
prevZ = p.z
prevRotX = p.rx
prevRotY = p.ry
/*p.rx += Math.PI
p.ry += Math.PI*/ //third person back, not front
var d = calcThirdPerson()
p.x -= p.direction.x*d
p.y -= p.direction.y*d
p.z -= p.direction.z*d
}
updateTextures()
world.render()
if(p.thirdPerson){
p.x = prevX
p.y = prevY
p.z = prevZ
p.rx = prevRotX
p.ry = prevRotY
}
analytics.totalRenderTime += performance.now() - renderStart
}
let renderPlayer = function(){
if(p.thirdPerson){
p.character.render()
}else{
//p.hand.render()
}
}
let updtPlayer = function(){
p.character.x = p.x
p.character.y = p.y-1
p.character.z = p.z
p.character.yaw = -p.ry
p.character.burning = p.burning
p.character.update()
//p.hand.update()
}
let controls = function() {
move.x = 0
move.z = 0
let dt = (performance.now() - p.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
if(controlMap.forward.pressed) move.z += p.speed
if(controlMap.backward.pressed) move.z -= p.speed
if(controlMap.left.pressed) move.x += p.speed
if(controlMap.right.pressed) move.x -= p.speed
if (p.flying) {
if(controlMap.jump.pressed) p.velocity.y += 0.06 * dt
if(controlMap.sneak.pressed) p.velocity.y -= 0.06 * dt
}
if(Key.arrowleft) p.ry -= 0.1 * dt
if(Key.arrowright) p.ry += 0.1 * dt
if(Key.arrowup) p.rx += 0.1 * dt
if(Key.arrowdown) p.rx -= 0.1 * dt
if (!p.sprinting && controlMap.sprint.pressed && !p.sneaking && controlMap.forward.pressed) {
p.FOV(settings.fov + 10, 250)
p.sprinting = true
}
if(p.sprinting && p.food > 6) {
move.x *= p.sprintSpeed
move.z *= p.sprintSpeed
if(survival)p.foodExhaustion += (p.speed * p.sprintSpeed)*0.1
}
if(p.flying) {
move.x *= p.flySpeed
move.z *= p.flySpeed
}
if (!move.x && !move.z) {
if (p.sprinting) {
p.FOV(settings.fov, 100)
}
p.sprinting = false
} else if(abs(move.x) > 0 && abs(move.z) > 0) {
move.x *= move.ang
move.z *= move.ang
}
//Update the velocity, rather than the position.
let co = cos(p.ry)
let si = sin(p.ry)
let speedFactor = blockData[standingOn].speedFactor
let friction = liquid ? 0.4 : (p.onGround ? 1 : 0.3)
if(speedFactor){
friction *= speedFactor
}
p.velocity.x += (co * move.x - si * move.z) * friction * dt
p.velocity.z += (si * move.x + co * move.z) * friction * dt
const TAU = Math.PI * 2
const PI1_2 = Math.PI / 2
while(p.ry > TAU) p.ry -= TAU
while(p.ry < 0)   p.ry += TAU
if(p.rx > PI1_2)  p.rx = PI1_2
if(p.rx < -PI1_2) p.rx = -PI1_2
p.setDirection()
}
function box2(sides, tex, shape) {
if (blockFill && !shape) {
let i = 0
for (let side in Block) {
if (sides & Block[side]) {
vertexAttribPointer("aVertex", program3D, "aVertex", 3, sideEdgeBuffers[Sides[side]])
vertexAttribPointer("aTexture", program3D, "aTexture", 2, texCoordsBuffers[textureMap[tex[i]]])
gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0)
}
i++
}
}else if(shape){
for (let i = 0; i < shape.size; i++) {
vertexAttribPointer("aVertex", program3D, "aVertex", 3, shape.buffer)
vertexAttribPointer("aTexture", program3D, "aTexture", 2, texCoordsBuffers[textureMap[tex[i]]])
gl.drawArrays(gl.TRIANGLES, 6, gl.UNSIGNED_INT, 0) //doesn't work
}
}
if (blockOutlines) {
vertexAttribPointer("aVertex", program3D, "aVertex", 3, hitBox.shape.buffer)
vertexAttribPointer("aTexture", program3D, "aTexture", 2, texCoordsBuffers[textureMap.hitbox])
for (let i = 0; i < hitBox.shape.size; i++) {
gl.drawArrays(gl.LINE_LOOP, i * 4, 4)
}
}
}
function block2(x, y, z, t, camera) {
if (camera) {
camera.transformation.translate(x, y, z)
uniformMatrix("view3d", program3D, "uView", false, camera.getMatrix())
} else {
//copyArr(modelView, matrix)
trans(modelView, x, y, z)
matMult()
trans(modelView, -x, -y, -z)
transpose(matrix)
uniformMatrix("view3d", program3D, "uView", false, matrix)
}
box2(0xff, blockData[t].textures)
}
function changeWorldBlock(t, drop) {
let pos = hitBox.pos
if(pos && pos[1] >= 0 && pos[1] < maxHeight) {
let shape = t && blockData[t].shape
if (t && shape.rotate) {
let pi = Math.PI / 4
if (p.ry <= pi) {} // North; default
else if (p.ry < 3 * pi) {
t |= WEST
} else if (p.ry < 5 * pi) {
t |= SOUTH
} else if (p.ry < 7 * pi) {
t |= EAST
}
}
if (t && shape.flip && hitBox.face !== "top" && (hitBox.face === "bottom" || (p.direction.y * hitBox.closest + p.y) % 1 < 0.5)) {
t |= FLIP
}
var prevBlock = world.getBlock(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2])
world.setBlock(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], t)
if(drop){
let block = prevBlock
let theDrop = blockData[prevBlock].drop
let amount = blockData[prevBlock].dropAmount
var canDrop = handBreakable.includes(blockData[prevBlock].type)
if(holding && breakTypes[blockData[prevBlock].type] && breakTypes[blockData[prevBlock].type].includes(blockData[holding].name)) canDrop = true
if(!blockData[prevBlock].type) canDrop = true
if(canDrop){
if(amount.length === 2){
amount = round(rand(amount[0], amount[1]))
}
if(holding && blockData[holding].shears && blockData[prevBlock].dropSelfWhenSheared){
if(blockData[prevBlock].shearDropAmount){
amount = blockData[prevBlock].shearDropAmount
}
}else{
if(typeof theDrop === "function"){
block = blockIds[theDrop()]
}else if(Array.isArray(theDrop)){
block = theDrop
}else if(theDrop) block = blockIds[theDrop]
else if(blockData[prevBlock].noDrop) block = 0
}
if(block && pos){
if(Array.isArray(block)){//drop multiple items
for(var b=0; b<block.length; b++){
var bId = blockIds[block[b]]
for(var i=0; i<amount; i++){
world.addEntity(new Item(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], 0, 0, 0, bId, true))
}
}
}else{
for(var i=0; i<amount; i++){
world.addEntity(new Item(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], 0, 0, 0, block, true))
}
}
}
}
}
if (t) {
p.lastPlace = Date.now()
} else {
p.lastBreak = Date.now()
if(!prevBlock) return
blockParticles(prevBlock,hitBox.pos[0],hitBox.pos[1],hitBox.pos[2],30)
blockSound(prevBlock, "dig", hitBox.pos[0], hitBox.pos[1], hitBox.pos[2])
if(blockData[prevBlock].experience) world.addEntity(new ExperienceOrb(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], blockData[prevBlock].experience))
var breakType = blockData[prevBlock].type
if(survival && holding && blockData[holding].pickaxe) {
inventory.hotbar[inventory.hotbarSlot].durability --
updateHUD = true
}
if(survival && holding && blockData[holding].sword) {
inventory.hotbar[inventory.hotbarSlot].durability -= 2
updateHUD = true
}
if(survival && holding && blockData[holding].shovel) {
inventory.hotbar[inventory.hotbarSlot].durability -= 1
updateHUD = true
}
if(survival && holding && blockData[holding].axe) {
inventory.hotbar[inventory.hotbarSlot].durability -= 1
updateHUD = true
}
if(survival && holding && blockData[holding].hoe && breakType !== "plant2") {
inventory.hotbar[inventory.hotbarSlot].durability -= 1
updateHUD = true
}
}
}
}
function replaceItem(id){
inventory.hotbar[inventory.hotbarSlot] && (inventory.hotbar[inventory.hotbarSlot].id = id)
holding = inventory.hotbar[inventory.hotbarSlot].id
updateHUD = true
}
function getPosition(){
let pos = hitBox.pos, x = pos[0], y = pos[1], z = pos[2]
let side = false
switch(hitBox.face) {
case "top":
y += 1
break
case "bottom":
y -= 1
break
case "south":
z -= 1
side = true
break
case "north":
z += 1
side = true
break
case "west":
x -= 1
side = true
break
case "east":
x += 1
side = true
break
}
pos[0] = x
pos[1] = y
pos[2] = z
return pos
}
function useDurability(d){
if(survival && inventory.hotbar[inventory.hotbarSlot]){
inventory.hotbar[inventory.hotbarSlot].durability -= d
updateHUD = true
}
}
function newWorldBlock() {
let pos = hitBox.pos,x,y,z, face = hitBox.face
if(pos) x = pos[0], y = pos[1], z = pos[2]
let cblock = pos ? world.getBlock(x, y, z) : 0
var pholding = holding
if(holding && blockData[holding].useAs){
var useAs = blockData[holding].useAs
if(typeof useAs === "function"){
useAs = useAs(x,y,z,cblock,face)
if(blockIds[useAs]){
holding = blockIds[useAs]
}
}else{
holding = blockIds[useAs]
}
}
if(cblock){
if(hitBox.pos){
let onclick = blockData[cblock].onclick
if(onclick && !Key.shift){
if(!onclick(x, y, z)){p.lastPlace = Date.now(); return} //if it doesn't return true
}
}
if(holding && blockData[holding].shovel){
if(cblock === blockIds.grass || cblock === blockIds.dirt || cblock === blockIds.rootedDirt || cblock === blockIds.mycelium || cblock === blockIds.podzol){
world.setBlock(x,y,z,blockIds.grass | TALLCROSS)
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
return p.lastPlace = Date.now()
}
}
if(holding && cblock && blockData[holding].axe){
var name = blockData[cblock].name
name = name[0].toUpperCase() + name.substring(1)
name = "stripped"+name
if(blockIds[name]){
world.setBlock(x,y,z,blockIds[name])
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
return p.lastPlace = Date.now()
}
}
if(holding && cblock && blockData[holding].hoe){
if((blockData[cblock].name === "grass" || cblock === blockIds.dirt) && !world.getBlock(x,y+1,z)){
world.setBlock(x,y,z,blockIds.farmland)
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
return p.lastPlace = Date.now()
}
if(cblock === blockIds.rootedDirt){
world.setBlock(x,y,z,blockIds.dirt)
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
world.addEntity(new Item(x, y+0.5, z, 0, 0, 0, blockIds.hangingRoots, true))
return p.lastPlace = Date.now()
}
}
if(holding && cblock && blockData[holding].shears){
if(cblock === blockIds.pumpkin){
world.setBlock(x,y,z,blockIds.carvedPumpkin)
var h = inventory.hotbar[inventory.hotbarSlot]
h.durability --
for(var n=0; n<4; n++)world.addEntity(new Item(x, y+0.5, z, 0, 0, 0, blockIds.pumpkinSeeds, true))
return p.lastPlace = Date.now()
}
}
}
if(blockData[holding]){
if(blockData[holding].useAnywhere ? true : hitBox.pos){
let onuse = blockData[holding].onuse
if(onuse){ //items like flint and steel can't be placed but lights stuff
if(survival && blockData[holding].minusOnUse){inventory.hotbar[inventory.hotbarSlot].amount --; updateHUD = true}
if(!onuse(x,y,z, cblock, replaceItem, useDurability)){p.lastPlace = Date.now(); return}
}
}
}
var item = holding && blockData[holding].item
if(item && blockData[holding].canPlace && blockData[holding].canPlace(cblock)){
item = false
}
if(!hitBox.pos || !holding || item || blockData[holding].edible) {
return
}
let side = false
switch(hitBox.face) {
case "top":
y += 1
break
case "bottom":
y -= 1
break
case "south":
z -= 1
side = true
break
case "north":
z += 1
side = true
break
case "west":
x -= 1
side = true
break
case "east":
x += 1
side = true
break
}
var hitboxBlock = world.getBlock(x, y, z)
var blocking = blockData[holding].solid && inBox(x, y, z, 1, 1, 1)
var canPlace = (!hitboxBlock) || (blockData[hitboxBlock].liquid)
if (!blocking && canPlace) {
var block = holding
var prevBlockMode = blockMode;
var under = world.getBlock(x,y-1,z)
var onPot = !side && blockData[under] && blockData[under].pot
if(blockData[holding].potCross && onPot){
blockMode = POTCROSS
}else if(blockData[holding].crossShape){
if(onPot && blockIds[blockData[holding].name+"Pot"]){
block = blockIds[blockData[holding].name+"Pot"]
blockMode = POTCROSS
}else{
blockMode = CROSS
}
}
if(blockData[holding].sideCross){
if(side){
blockMode = CUBE
}else if(hitBox.face === "bottom"){
blockMode = SLAB
}else blockMode = CROSS
}
if(blockData[holding].tallcrossShape){
blockMode = TALLCROSS
}
if(blockData[holding].door){
blockMode = DOOR
}
if(blockData[holding].torch){
blockMode = TORCH
if(side) blockMode = SLAB
}
if(blockData[holding].lantern){
if(world.getBlock(x,y+1,z)){
blockMode = LANTERNHANG
}else{
blockMode = LANTERN
}
}
if(blockData[holding].beacon){
blockMode = BEACON
}
if(blockData[holding].cactus && blockMode !== POTCROSS){
blockMode = CACTUS
}
if(blockData[holding].pane){
blockMode = PANE
}
if(blockData[holding].portal){
blockMode = PORTAL
}
if(blockData[holding].wallFlat){
blockMode = WALLFLAT
}
if(blockData[holding].trapdoor){
if(side){
blockMode = TRAPDOOROPEN
}else{
blockMode = TRAPDOOR
}
}
if(blockData[holding].chain){
blockMode = CHAIN
}
if(blockData[holding].button){
blockMode = BUTTON
}
if(blockData[holding].pot){
blockMode = POT
}
if(blockData[holding].carpet){
blockMode = CARPET
}
if(blockData[cblock].name === "endPortalFrame" && blockData[holding].eyeOfEnder){
blockMode = SLAB
}
if(blockData[holding].name === "endRod"){
if(side){
blockMode = SLAB
}else{
blockMode = CUBE
}
}
if(side && blockIds[blockData[block].name+"SW"]){
block = blockIds[blockData[block].name+"SW"]
}
if(blockData[holding].layers){
var b = world.getBlock(pos[0],pos[1],pos[2])
let layer = 0
if((b & LAYER1) === LAYER1) layer = 1
if((b & LAYER2) === LAYER2) layer = 2
if((b & LAYER3) === LAYER3) layer = 3
if((b & LAYER4) === LAYER4) layer = 4
if((b & LAYER5) === LAYER5) layer = 5
if((b & LAYER6) === LAYER6) layer = 6
if((b & LAYER7) === LAYER7) layer = 7
if((b & LAYER8) === LAYER8) layer = 8
if(((b & blockIds.snow) === blockIds.snow) && layer > 0 && layer < 8){
x = pos[0], y = pos[1], z = pos[2]
layer ++
switch(layer){
case 2:
blockMode = LAYER2
break
case 3:
blockMode = LAYER3
break
case 4:
blockMode = LAYER4
break
case 5:
blockMode = LAYER5
break
case 6:
blockMode = LAYER6
break
case 7:
blockMode = LAYER7
break
case 8:
blockMode = LAYER8
break
}
}else{
blockMode = LAYER1
}
}
pos[0] = x
pos[1] = y
pos[2] = z
changeWorldBlock(block < isCube ? (block | blockMode) : block)
blockMode = prevBlockMode;
if(survival && inventory.hotbar[inventory.hotbarSlot]){
inventory.hotbar[inventory.hotbarSlot].amount --;
updateHUD = true
}
//play sound
blockSound(block, "place", x,y,z)
}
holding = pholding
}
function entClick(){
let ent = entHitbox.ent
if(!ent) return
var block = blockData[holding || 0]
var holdObj = inventory.hotbar[inventory.hotbarSlot]
var atime = block.attackTime
var time = (Date.now() - p.lastBreak) / 1000 * 20
var attackDamage = (block && block.attackDamage) || 0
var damage, critical
if(attackDamage){
damage = atime ? (0.2 + ((time + 0.5) / atime) ** 2 * 0.8) : 1
if(p.velocity.y < 0 && !p.onGround && !liquid && !p.flying && !p.sprinting && damage > 0.848) critical = true
damage = max(min(damage, 1), 0.2) * attackDamage
if(critical) damage *= 1.5
}else damage = 1
if(entHitbox.player){
var pd = p.direction
send({type:"hit", username:username, damage:damage, velx:pd.x/2, velz:pd.z/2}, ent.id)
}else{
if(ent.onhit){
ent.onhit(damage)
var pd = p.direction
ent.velx += pd.x / 2
ent.velz += pd.z / 2
}
}
if(block.pickaxe){
holdObj.durability -= 2
}
if(block.sword){
holdObj.durability --
}
if(block.shovel){
holdObj.durability -= 2
}
if(block.axe){
holdObj.durability -= 2
}
if(block.pickaxe || block.sword || block.shovel || block.axe){
attackCooldownStart = Date.now()
attackCooldownTime = atime
}
console.log(damage)
p.foodExhaustion += 0.1
p.lastBreak = Date.now()
}
function cracks(){
var now = Date.now()
var block = hitBox.pos ? world.getBlock(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2]) : 0
var touchBreak = pTouch.touching && pTouch.canDig && Date.now() - pTouch.touchStart > touchMoveLimit
var breaking = ((controlMap.break.pressed && !Key.control) || touchBreak) && block && (crack.delayDone >= crack.delayBetween)
if(!arrayValues(crack.prevPos, crack.pos)){
crack.prevPos = crack.pos
crack.soundTimer = 0
crack.delayDone = 0
crack.breakStart = now
}
if(breaking){
var breakTime = blockData[block].breakTime
var breakType = blockData[block].type
if(holding && blockData[holding].shears && blockData[block].shearBreakTime){
breakTime = blockData[block].shearBreakTime
}
if(holding && (blockData[holding].pickaxe || (blockData[holding].shovel && breakType === "ground") || (blockData[holding].axe && breakType === "wood") || (blockData[holding].hoe && breakType === "plant2"))){
breakTime /= blockData[holding].mineSpeed
}
let prog = map(now, crack.breakStart,crack.breakStart+breakTime, 0,1)
crack.idx = floor(prog * crack.length)
crack.tex = crack[crack.idx]
pTouch.digProg = prog
crack.soundTimer ++
if(crack.soundTimer > 15){
crack.soundTimer -= 15
blockSound(block, "breaking", hitBox.pos[0], hitBox.pos[1], hitBox.pos[2])
}
if(crack.idx >= crack.length){
changeWorldBlock(0, true)
p.foodExhaustion += 0.005
}
}else{
crack.idx = -1
crack.delayDone ++
crack.breakStart = now
pTouch.digProg = 0
}
if(!controlMap.break.pressed){
crack.delayDone = 0
}
}
// Save the coords for a small sphere used to carve out caves
let sphere;
{
let blocks = []
let radius = 3.5
let radsq = radius * radius
for (let i = -radius; i <= radius; i++) {
for (let j = -radius; j <= radius; j++) {
for (let k = -radius; k <= radius; k++) {
if (i*i + j*j + k*k < radsq) {
blocks.push(i|0, j|0, k|0)
}
}
}
}
sphere = new Int8Array(blocks)
}
function isCave(x, y, z) {
// Generate a 3D rigid multifractal noise shell.
// Then generate another one with different coordinates.
// Overlay them on top of each other, and the overlapping parts should form a cave-like structure.
// This is extremely slow, and requires generating 2 noise values for every single block in the world.
// TODO: replace with a crawler system of some sort, that will never rely on a head position in un-generated chunks.
let smooth = 0.02
let caveSize = 0.0055
let cave1 = abs(0.5 - caveNoise(x * smooth, y * smooth, z * smooth)) < caveSize
let cave2 = abs(0.5 - caveNoise(y * smooth, z * smooth, x * smooth)) < caveSize
return (cave1 && cave2)
}
function carveSphere(x, y, z) {
if (y > 3) {
for (let i = 0; i < sphere.length; i += 3) {
world.setBlock(x + sphere[i], y + sphere[i + 1], z + sphere[i + 2], blockIds.air, true)
}
}
}
let renderedChunks = 0
function getBlock(x, y, z, blocks) {
return blocks[((x >> 4) + 1) * 9 + ((y >> 4) + 1) * 3 + (z >> 4) + 1][((x & 15) << 8) + ((y & 15) << 4) + (z & 15)]
}
/**
* Returns a 1 if the face is exposed and should be drawn, or a 0 if the face is hidden
* 
* @param {number} x - The X coordinate of the block that may be covering a face
* @param {number} y - The Y coordinate of the block that may be covering a face
* @param {number} z - The Z coordinate of the block that may be covering a face
* @param {Collection} blocks - Some collection of blocks that can return the block at (x, y, z)
* @param {number} type - The blockstate of the block that's being considered for face culling
* @param {function} func - The function that can be called to return a block from the blocks collection
*/
function hideFace(x, y, z, blocks, type, func, sourceDir, dir, section) {
let block = func.call(world, x, y, z, blocks)
if (!block) {
return 1
}
let data = blockData[block]
let sourceData = blockData[type]
let sourceRange = 3
let hiderRange = 3
if (func !== getBlock || screen === "loading") {
// getBlock is only used during the optimize phase of worldGen
sourceRange = sourceData.shape.cull[sourceDir]
hiderRange = data.shape.cull[dir]
}
if ((sourceRange & hiderRange) !== sourceRange || sourceRange === 0 || block !== type && data.transparent || data.transparent && data.shadow) {
return 1
}
return 0
}
let getShadows = {
shade: [ 1, 0.85, 0.7, 0.6, 0.3 ],
ret: [],
blocks: [],
top: function(x, y, z, block) { // Actually the bottom... How did these get flipped?
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y-1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x, y-1, z-1, block)].shadow
blocks[2] = blockData[getBlock(x+1, y-1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x-1, y-1, z, block)].shadow
blocks[4] = blockData[getBlock(x, y-1, z, block)].shadow
blocks[5] = blockData[getBlock(x+1, y-1, z, block)].shadow
blocks[6] = blockData[getBlock(x-1, y-1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x, y-1, z+1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y-1, z+1, block)].shadow
ret[0] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]*0.75
ret[1] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]*0.75
ret[2] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]*0.75
ret[3] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]*0.75
return ret
},
bottom: function(x, y, z, block) { // Actually the top
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y+1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x, y+1, z-1, block)].shadow
blocks[2] = blockData[getBlock(x+1, y+1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x-1, y+1, z, block)].shadow
blocks[4] = blockData[getBlock(x, y+1, z, block)].shadow
blocks[5] = blockData[getBlock(x+1, y+1, z, block)].shadow
blocks[6] = blockData[getBlock(x-1, y+1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x, y+1, z+1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y+1, z+1, block)].shadow
ret[0] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]
ret[1] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]
ret[2] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]
ret[3] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]
return ret
},
north: function(x, y, z, block) {
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y-1, z+1, block)].shadow
blocks[1] = blockData[getBlock(x, y-1, z+1, block)].shadow
blocks[2] = blockData[getBlock(x+1, y-1, z+1, block)].shadow
blocks[3] = blockData[getBlock(x-1, y, z+1, block)].shadow
blocks[4] = blockData[getBlock(x, y, z+1, block)].shadow
blocks[5] = blockData[getBlock(x+1, y, z+1, block)].shadow
blocks[6] = blockData[getBlock(x-1, y+1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x, y+1, z+1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y+1, z+1, block)].shadow
ret[0] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]*0.95
ret[1] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]*0.95
ret[2] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]*0.95
ret[3] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]*0.95
return ret
},
south: function(x, y, z, block) {
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y-1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x-1, y, z-1, block)].shadow
blocks[2] = blockData[getBlock(x-1, y+1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x, y-1, z-1, block)].shadow
blocks[4] = blockData[getBlock(x, y, z-1, block)].shadow
blocks[5] = blockData[getBlock(x, y+1, z-1, block)].shadow
blocks[6] = blockData[getBlock(x+1, y-1, z-1, block)].shadow
blocks[7] = blockData[getBlock(x+1, y, z-1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y+1, z-1, block)].shadow
ret[0] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]*0.95
ret[1] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]*0.95
ret[2] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]*0.95
ret[3] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]*0.95
return ret
},
east: function(x, y, z, block) {
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x+1, y-1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x+1, y, z-1, block)].shadow
blocks[2] = blockData[getBlock(x+1, y+1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x+1, y-1, z, block)].shadow
blocks[4] = blockData[getBlock(x+1, y, z, block)].shadow
blocks[5] = blockData[getBlock(x+1, y+1, z, block)].shadow
blocks[6] = blockData[getBlock(x+1, y-1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x+1, y, z+1, block)].shadow
blocks[8] = blockData[getBlock(x+1, y+1, z+1, block)].shadow
ret[0] = this.shade[blocks[1] + blocks[2] + blocks[4] + blocks[5]]*0.8
ret[1] = this.shade[blocks[5] + blocks[4] + blocks[8] + blocks[7]]*0.8
ret[2] = this.shade[blocks[4] + blocks[3] + blocks[7] + blocks[6]]*0.8
ret[3] = this.shade[blocks[0] + blocks[1] + blocks[3] + blocks[4]]*0.8
return ret
},
west: function(x, y, z, block) {
let blocks = this.blocks
let ret = this.ret
blocks[0] = blockData[getBlock(x-1, y-1, z-1, block)].shadow
blocks[1] = blockData[getBlock(x-1, y, z-1, block)].shadow
blocks[2] = blockData[getBlock(x-1, y+1, z-1, block)].shadow
blocks[3] = blockData[getBlock(x-1, y-1, z, block)].shadow
blocks[4] = blockData[getBlock(x-1, y, z, block)].shadow
blocks[5] = blockData[getBlock(x-1, y+1, z, block)].shadow
blocks[6] = blockData[getBlock(x-1, y-1, z+1, block)].shadow
blocks[7] = blockData[getBlock(x-1, y, z+1, block)].shadow
blocks[8] = blockData[getBlock(x-1, y+1, z+1, block)].shadow
ret[0] = this.shade[blocks[7] + blocks[8] + blocks[4] + blocks[5]]*0.8
ret[1] = this.shade[blocks[5] + blocks[4] + blocks[2] + blocks[1]]*0.8
ret[2] = this.shade[blocks[4] + blocks[3] + blocks[1] + blocks[0]]*0.8
ret[3] = this.shade[blocks[6] + blocks[7] + blocks[3] + blocks[4]]*0.8
return ret
},
}
function average(l, a, b, c, d) {
a = l[a]
b = l[b]
c = l[c]
d = l[d]
let count = 1
let zero = 0
let total = a
if (b && abs(a-b) <= 2) {
total += b
count++
} else zero++
if (c && abs(a-c) <= 2) {
total += c
count++
} else zero++
if (d && abs(a-d) <= 2) {
total += d
count++
} else zero++
let mx = max(a, b, c, d)
if (mx > 2) {
return total / (count * 15)
}
if (mx > 1) {
return zero ? total / (count * 15 + 15) : total / (count * 15)
}
return (total) / 60
}
let getLight = {
blocks: [],
top: function(x, y, z, block, ret, blockLight = 0, bright) { // Actually the bottom... How did these get flipped?
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x+1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x-1, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x+1, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x-1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
if(bright){
ret[0] = ret[1] = ret[2] = ret[3] = 1
}else{
ret[0] = average(blocks, 4, 0, 1, 3)
ret[1] = average(blocks, 4, 1, 2, 5)
ret[2] = average(blocks, 4, 5, 7, 8)
ret[3] = average(blocks, 4, 3, 6, 7)
}
// debugger
return ret
},
bottom: function(x, y, z, block, ret, blockLight = 0) { // Actually the top
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x+1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x-1, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x+1, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x-1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 3, 6, 7)
ret[1] = average(blocks, 4, 5, 7, 8)
ret[2] = average(blocks, 4, 1, 2, 5)
ret[3] = average(blocks, 4, 0, 1, 3)
return ret
},
north: function(x, y, z, block, ret, blockLight = 0) {
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x+1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x-1, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x+1, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x-1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 5, 7, 8)
ret[1] = average(blocks, 4, 3, 6, 7)
ret[2] = average(blocks, 4, 0, 1, 3)
ret[3] = average(blocks, 4, 1, 2, 5)
return ret
},
south: function(x, y, z, block, ret, blockLight = 0) {
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x-1, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x-1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x+1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x+1, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 1, 2, 5)
ret[1] = average(blocks, 4, 5, 7, 8)
ret[2] = average(blocks, 4, 3, 6, 7)
ret[3] = average(blocks, 4, 0, 1, 3)
return ret
},
east: function(x, y, z, block, ret, blockLight = 0) {
let blocks = this.blocks
blocks[0] = (getBlock(x+1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x+1, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x+1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x+1, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x+1, y, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x+1, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x+1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x+1, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x+1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 1, 2, 5)
ret[1] = average(blocks, 4, 5, 7, 8)
ret[2] = average(blocks, 4, 3, 6, 7)
ret[3] = average(blocks, 4, 0, 1, 3)
return ret
},
west: function(x, y, z, block, ret, blockLight = 0) {
let blocks = this.blocks
blocks[0] = (getBlock(x-1, y-1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[1] = (getBlock(x-1, y, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[2] = (getBlock(x-1, y+1, z-1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[3] = (getBlock(x-1, y-1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[4] = (getBlock(x-1, y, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[5] = (getBlock(x-1, y+1, z, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[6] = (getBlock(x-1, y-1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[7] = (getBlock(x-1, y, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
blocks[8] = (getBlock(x-1, y+1, z+1, block) & 0xf << (blockLight * 4)) >> blockLight * 4
ret[0] = average(blocks, 4, 5, 7, 8)
ret[1] = average(blocks, 4, 1, 2, 5)
ret[2] = average(blocks, 4, 0, 1, 3)
ret[3] = average(blocks, 4, 3, 6, 7)
return ret
},
}
/*
function interpolateShadows(shadows, x, y) {
let sx = (shadows[1] - shadows[0]) * x + shadows[0]
let sx2 = (shadows[3] - shadows[2]) * x + shadows[2]
return (sx2 - sx) * y + sx
}
*/
class Generator {
constructor() {
this.seedSet = false;
this.seed = 0;
this.size = 600;
this.diagonalNeighbors = true; //true if the corners are also adjacent
this.grid = [];
this.vertex = [];
this.river = [];
this.precip = [];
this.biome = [];
this.biomeBlend = [];
this.highestPoint = [0,0];
this.updates = [];
this.stage = 0;
this.changes = 0;
this.rivers = 0;
this.h = 0;
this.X = 0;
}
GetVertex(x, y) {
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 0;}
return this.vertex[x+y*this.size];
}
GetHeight(x, y) {
x = (x+this.size/2)*0.5; y = (y+this.size/2)*0.5;
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 5;}
return Math.round(
(this.GetVertex(Math.floor(x), Math.floor(y))+
this.GetVertex(Math.floor(x+0.5), Math.floor(y))+
this.GetVertex(Math.floor(x), Math.floor(y+0.5))+
this.GetVertex(Math.floor(x+0.5), Math.floor(y+0.5)))*0.5+5);
};
GetWater(x, y) {
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 1;}
if (this.GetBiome(x,y) === -15099421 || this.GetBiome(x,y) === -16479791) {return 1}
return Math.sqrt(this.river[x+y*this.size]);
}
GetWaterDepth(x, y) {
x = (x+this.size/2)*0.5; y = (y+this.size/2)*0.5;
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 1;}
var w = 0;
for (let x2 = 0; x2 < 1; x2+=0.5) {
for (let y2 = 0; y2 < 1; y2+=0.5) {
w += this.GetWater(Math.floor(x+x2),Math.floor(y+y2));
}
}
w = w/4.0;
if (w > 0.25) {
return 1;
}   else {
return 0;
}
}
GetBiome(x, y) {
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return -16479791;}
return this.biome[x+y*this.size];
}
GetBiomeType(x, y) {
x = (x+this.size/2)*0.5; y = (y+this.size/2)*0.5;
if (x < 0 || x >= this.size || y < 0 || y >= this.size) {return 1;}
return this.GetBiome(Math.floor(x),Math.floor(y));
}
GetNeighbors(x, y) {
var n = [];
if (x > 0) {
n.push({x:x-1, y:y});
if (this.diagonalNeighbors) {
if (y > 0) {
n.push({x:x-1, y:y-1});
}
if (y < this.size-1) {
n.push({x:x-1, y:y+1});
}}
}
if (x < this.size-1) {
n.push({x:x+1, y:y});
if (this.diagonalNeighbors) {
if (y > 0) {
n.push({x:x+1, y:y-1});
}
if (y < this.size-1) {
n.push({x:x+1, y:y+1});
}
}
}
if (y > 0) {
n.push({x:x, y:y-1});
}
if (y < this.size-1) {
n.push({x:x, y:y+1});
}
return n;
}
GetDown(x, y) {
var n = this.GetNeighbors(x, y);
var l = this.size;
var ld = [];
for (var i in n) {
if (this.vertex[n[i].x + n[i].y*this.size] <= l) {
if (this.vertex[n[i].x + n[i].y*this.size] === l) {
ld.push(n[i]);
}
l = this.vertex[n[i].x + n[i].y*this.size];
ld = [n[i]];
}
}
if (l <= this.vertex[x + y*this.size]) {
return ld[Math.floor(random(ld.length))];
}
return undefined;
}
SetSeed(seed) {
this.seed = seed;
this.seedSet = true;
randomSeed(hash(seed, 2123155232) * 210000000)
}
Generate(start) {
var end = start+16;
var nS = 0.021;
function sq(n) {return n*n}
function color(r, g, b, a) {
a = (a === undefined ? 255 : a);
g = (g === undefined ? r : g);
b = (b === undefined ? g : b);
if (a > 127) {a = -256+a;}
return b+g*256+r*65536+a*16777216;
}
if (this.stage === 0) { //landmass
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
this.grid[x +y*this.size] = 0;
this.vertex[x + y*this.size] = -1;
this.precip[x + y*this.size] = -1;
this.river[x + y*this.size] = 0;
var d = this.size/2-Math.sqrt(sq(x-this.size/2)+sq(y-this.size/2));
var islandMask = Math.sqrt(sq(this.size/2)-sq(d-this.size/2))*2/this.size;
var v = noise(x*nS, y*nS, this.seed);
if (v*islandMask > 0.3) {
this.grid[x+y*this.size] = 1;
}
}
this.X++;
}
if (this.X === this.size) {
this.updates.push({type:"ocean", x:0, y:0});
}
}   else if (this.stage === 1) {    //Oceans
while (this.updates.length > 0 && win.performance.now() < end) {
var u = this.updates.shift();
if (this.grid[u.x+u.y*this.size] === 0) {
this.grid[u.x+u.y*this.size] = 2;
var n = this.GetNeighbors(u.x, u.y);
for (var i = 0; i < n.length; i++) {
if (this.grid[n[i].x+n[i].y*this.size] === 0) {
this.updates.push({type:"ocean",x:n[i].x,y:n[i].y});
}
}
}
}
if (this.updates.length === 0) {
this.X = this.size;
}
}   else if (this.stage === 2) {    //altitude
if (this.h === -1) {this.h = 0;}
var doingLake = false;
var I = 0;
while (win.performance.now() < end && this.updates.length > 0 && I < this.updates.length) {
if (this.updates[I].type === "lake") {
var u = this.updates.splice(I, 1)[0];
if (this.grid[u.x + u.y*this.size] === 0 && this.vertex[u.x+u.y*this.size] === -1) {
this.vertex[u.x + u.y*this.size] = u.a;
var n = this.GetNeighbors(u.x, u.y);
for (var i in n) {
if (this.grid[n[i].x+n[i].y*this.size] === 0 && this.vertex[n[i].x + n[i].y*this.size] === -1) {
this.updates.push({type:"lake",x:n[i].x,y:n[i].y,a:u.a});
}
}
}
I--;
}
I++;
}
while (this.X < this.size && win.performance.now() < end && !doingLake) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
if (this.vertex[x+y*this.size] === -1) {
if (this.grid[x+y*this.size] === 2) {
this.vertex[x+y*this.size] = this.h;
this.changes++;
}   else if (this.h > 0) {
var n = this.GetNeighbors(x, y);
var l = this.size;
var ld;
for (var i in n) {
var v = this.vertex[n[i].x + n[i].y*this.size];
if (v < l && v !== -1) {
l = v;
ld = n[i];
}
}
if (l !== this.size && l <= this.h) {
if (this.grid[x+y*this.size] === 0) {
this.updates.push({type:"river",x:ld.x,y:ld.y});
this.updates.push({type:"lake",x:x,y:y,a:l});
}   else {
this.vertex[x+y*this.size] = l+1+(random() > 0.5 ? 1 : 0);
}
this.changes++;
}
}
}
}
this.X++;
}
if (this.X === this.size && this.h < this.size/3) {
if (this.changes === 0) {
this.h++;
}
this.X = 0;
this.changes = 0;
}
}   else if (this.stage === 3) {    //altitude readjustment
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
this.vertex[x+y*this.size] = (Math.pow(20, this.vertex[x+y*this.size]/this.size*3)-1)/(20-1)*this.size/3;
if (this.vertex[x+y*this.size] > this.vertex[this.highestPoint[0]+this.highestPoint[1]*this.size]) {
this.highestPoint[0] = x;
this.highestPoint[1] = y;
}
}
this.X++;
}
}   else if (this.stage === 4) {    //rivers
if (this.rivers === 0) {
var x, y;
for (var i = 0; i < 200 && this.rivers < 100; i++) {
x = Math.floor(random(this.size));
y = Math.floor(random(this.size));
if (this.grid[x+y*this.size] === 1) {
this.updates.push({type:"river",x:x,y:y});
this.rivers++;
}
}
}   else {
if (this.updates.length === 0) {
this.X = this.size;
}
}
while(this.updates.length > 0 && win.performance.now() < end) {
var u = this.updates[0];
if (this.grid[u.x+u.y*this.size] === 1) {
this.river[u.x+u.y*this.size]++;
var d = this.GetDown(u.x, u.y);
if (d === undefined) {
this.updates.shift();
}   else {
this.updates[0].x = d.x; this.updates[0].y = d.y;
}
}   else {
this.updates.shift();
}
}
}   else if (this.stage === 5) {    //precipitation
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
if (this.precip[x + y*this.size] === -1) {
if (this.h === -1) {
if (this.grid[x + y*this.size] === 2) {
this.precip[x + y*this.size] = 5;
this.changes++;
}
}   else {
if (this.h <= 8) {
if (this.grid[x + y*this.size] === 0 || this.river[x+y*this.size] > 0) {
this.precip[x + y*this.size] = 8;
this.changes++;
}
}
var n = this.GetNeighbors(x, y);
var h = -1;
for (var i in n) {
if (this.precip[n[i].x + n[i].y*this.size] > h) {
h = this.precip[n[i].x + n[i].y*this.size];
}
}
if (h > -1 && h >= this.h) {
this.precip[x+y*this.size] = Math.max(h - (random() < 0.5 ? 0.66 : 0.33), 0);
this.changes++;
}
}
}
}
this.X++;
}
if (this.X === this.size) {
this.X = 0;
if (this.h === -1) {
this.h = 10;
}   else {
if (this.changes === 0) {
this.h--;
}
this.changes = 0;
if (this.h < 0) {
this.X = this.size;
}
}
}
}   else if (this.stage === 6) {    //readjust precipitation
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
this.precip[x+y*this.size] = Math.floor(this.precip[x+y*this.size]/10*6);
}
this.X++;
}
}   else if (this.stage === 7) {    //temperature
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
}
this.X++;
}
}   else if (this.stage === 8) {    //biomes
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
var c;
var h = Math.floor(this.vertex[x+y*this.size]/this.size*6*5);
switch (this.grid[x+y*this.size]) {
case 0: if (h > 2) {
c = color(157, 194, 201);
}   else {
c = color(25, 153, 227);
}   break;
case 1: if (this.river[x+y*this.size] > 0) {
if (h > 2) {
c = color(157, 194, 201);
}   else {
c = color(25, 153, 227);
}
}   else {
switch (h) {
case 0: switch (this.precip[x+y*this.size]) {
case 5: case 4: c = color(10, 133, 72); break;
case 3: case 2: c = color(10, 133, 23); break;
case 1: c = color(179, 232, 35); break;
case 0: c = color(209, 166, 58); break;
} break;
case 1: switch (this.precip[x+y*this.size]) {
case 5: c = color(14, 156, 85); break;
case 4: case 3: c = color(72, 133, 10); break;
case 2: case 1: c = color(179, 232, 35); break;
case 0: c = color(207, 195, 58); break;
} break;
case 2: switch (this.precip[x+y*this.size]) {
case 5: case 4: c = color(121, 191, 95); break;
case 3: case 2: c = color(155, 161, 135); break;
case 1: case 0: c = color(207, 195, 58); break;
} break;
case 3: case 4: switch (this.precip[x+y*this.size]) {
case 5: case 4: case 3: c = color(255); break;
case 2: c = color(149, 189, 94); break;
case 1: c = color(180); break;
case 0: c = color(128);
} break;
}
}
break;
case 2: c = color(4, 137, 209); break;
}
this.biome[x+y*this.size] = c;
}
this.X++;
}
}   else if (this.stage === 9) {    //add lava
let ph = this.vertex[this.highestPoint[0] + this.highestPoint[1]*this.size]-5;
while (this.X < this.size && win.performance.now() < end) {
var x = this.X;
for (var y = 0; y < this.size; y++) {
if (this.vertex[x + y*this.size] > ph) {
this.vertex[x + y*this.size] = ph-2;
this.biome[x + y*this.size] = -65536;
}
}
this.X++;
}
}
if (this.X === this.size) {
console.log(this.stage)
this.X = 0;
this.h = -1;
this.stage++;
}
}
}
class Section {
constructor(x, y, z, size, chunk) {
this.x = x
this.y = y
this.z = z
this.size = size
this.arraySize = size * size * size
this.blocks = new Int32Array(this.arraySize)
this.light = new Uint8Array(this.arraySize)
this.tags = new Array(this.arraySize) //tags are like nbt in minecraft
this.renderData = []
this.renderLength = 0
this.faces = 0
this.hasVisibleBlocks = false
this.chunk = chunk
this.edited = false
this.caves = !caves
this.pallete = [0]
this.palleteMap = {"0": 0}
this.palleteSize = 0
}
getBlock(x, y, z) {
let s = this.size
return this.blocks[x * s * s + y * s + z]
}
setBlock(x, y, z, blockId) {
let s = this.size
this.blocks[x * s * s + y * s + z] = blockId
}
deleteBlock(x, y, z) {
let s = this.size
this.blocks[x * s * s + y * s + z] = 0
}
optimize() {
let visible = false
let pos = 0
let xx = this.x
let yy = this.y
let zz = this.z
let blockState = 0
let palleteIndex = 0
let index = 0
let s = this.size
let blocks = this.blocks
this.hasVisibleBlocks = false
this.renderLength = 0
let localBlocks = world.getAdjacentSubchunks(xx, yy, zz)
//Check all the blocks in the subchunk to see if they're visible.
for (let i = 0; i < s; i++) {
for (let j = 0; j < s; j++) {
for (let k = 0; k < s; k++, index++) {
blockState = blocks[index]
if (this.palleteMap[blockState] === undefined) {
this.palleteMap[blockState] = this.pallete.length
palleteIndex = this.pallete.length
this.pallete.push(blockState)
} else {
palleteIndex = this.palleteMap[blockState]
}
visible = blockState && (hideFace(i-1, j, k, localBlocks, blockState, getBlock, "west", "east")
| hideFace(i+1, j, k, localBlocks, blockState, getBlock, "east", "west",this) << 1
| hideFace(i, j-1, k, localBlocks, blockState, getBlock, "bottom", "top",this) << 2
| hideFace(i, j+1, k, localBlocks, blockState, getBlock, "top", "bottom",this) << 3
| hideFace(i, j, k-1, localBlocks, blockState, getBlock, "south", "north",this) << 4
| hideFace(i, j, k+1, localBlocks, blockState, getBlock, "north", "south",this) << 5)
if (visible) {
pos = (i | j << 4 | k << 8) << 19
this.renderData[this.renderLength++] = 1 << 31 | pos | visible << 13 | palleteIndex
this.hasVisibleBlocks = true
}
}
}
}
}
updateBlock(x, y, z, world, leaveMe) {
if (!world.meshQueue.includes(this.chunk)) {
world.meshQueue.push(this.chunk)
}
let i = x
let j = y
let k = z
let s = this.size
x += this.x
y += this.y
z += this.z
let blockState = this.blocks[i * s * s + j * s + k]
let visible = blockState && (hideFace(x-1, y, z, 0, blockState, world.getBlock, "west", "east")
| hideFace(x+1, y, z, 0, blockState, world.getBlock, "east", "west") << 1
| hideFace(x, y-1, z, 0, blockState, world.getBlock, "bottom", "top") << 2
| hideFace(x, y+1, z, 0, blockState, world.getBlock, "top", "bottom") << 3
| hideFace(x, y, z-1, 0, blockState, world.getBlock, "south", "north") << 4
| hideFace(x, y, z+1, 0, blockState, world.getBlock, "north", "south") << 5)
let pos = (i | j << 4 | k << 8) << 19
let index = -1
// Find index of current block in this.renderData
for (let i = 0; i < this.renderLength; i++) {
if ((this.renderData[i] & 0x7ff80000) === pos) {
index = i
break
}
}
// Update pallete
if (this.palleteMap[blockState] === undefined) {
this.palleteMap[blockState] = this.pallete.length
this.pallete.push(blockState)
}
if (index < 0 && !visible) {
// Wasn't visible before, isn't visible after.
return
}
if (!visible) {
// Was visible before, isn't visible after.
this.renderData.splice(index, 1)
this.renderLength--
this.hasVisibleBlocks = !!this.renderLength
return
}
if (visible && index < 0) {
// Wasn't visible before, is visible after.
index = this.renderLength++
this.hasVisibleBlocks = true
}
this.renderData[index] = 1 << 31 | pos | visible << 13 | this.palleteMap[blockState]
var block = world.getBlock(x,y,z)
if(!leaveMe && blockData[block]) blockData[block].onupdate(x,y,z,block);
}
genMesh(barray, index) {
if (!this.renderLength) {
return index
}
let length = this.renderLength
let rData = this.renderData
let x = 0, y = 0, z = 0, loc = 0, data = 0,
sides = 0, tex = null, x2 = 0, y2 = 0, z2 = 0,
verts = null, texVerts = null, texShapeVerts = null,
tx = 0, ty = 0
let wx = this.x, wy = this.y, wz = this.z
let blocks = world.getAdjacentSubchunks(wx, wy, wz)
let lightChunks = world.getAdjacentSubchunks(wx, wy, wz, true)
let block = null
let shadows = null, slights = [0, 0, 0, 0], blights = [0, 0, 0, 0]
let blockSides = Object.keys(Block)
let side = ""
let shapeVerts = null
let shapeTexVerts = null
let pallete = this.pallete
// let intShad = interpolateShadows
for (let i = 0; i < length; i++) {
data = rData[i]
block = blockData[pallete[data & 0x1fff]]
tex = block.textures
sides = data >> 13 & 0x3f
loc = data >> 19 & 0xfff
x = loc & 15
y = loc >> 4 & 15
z = loc >> 8 & 15
x2 = x + this.x
y2 = y + this.y
z2 = z + this.z
shapeVerts = block.shape.verts
shapeTexVerts = block.shape.texVerts
let texNum = 0
for (let n = 0; n < 6; n++) {
side = blockSides[n]
if (sides & Block[side]) {
shadows = getShadows[side](x, y, z, blocks)
slights = getLight[side](x, y, z, lightChunks, slights, 0)
blights = getLight[side](x, y, z, lightChunks, blights, 1) //top is actually bottom
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
verts = directionalFaces[facei]
texVerts = textureCoords[textureMap[tex[texNum]]]
tx = texVerts[0]
ty = texVerts[1]
texShapeVerts = shapeTexVerts[n][facei]
barray[index] = verts[0] + x2
barray[index+1] = verts[1] + y2
barray[index+2] = verts[2] + z2
barray[index+3] = tx + texShapeVerts[0]
barray[index+4] = ty + texShapeVerts[1]
barray[index+5] = shadows[0]
barray[index+6] = slights[0]
barray[index+7] = blights[0]
barray[index+8] = verts[3] + x2
barray[index+9] = verts[4] + y2
barray[index+10] = verts[5] + z2
barray[index+11] = tx + texShapeVerts[2]
barray[index+12] = ty + texShapeVerts[3]
barray[index+13] = shadows[1]
barray[index+14] = slights[1]
barray[index+15] = blights[1]
barray[index+16] = verts[6] + x2
barray[index+17] = verts[7] + y2
barray[index+18] = verts[8] + z2
barray[index+19] = tx + texShapeVerts[4]
barray[index+20] = ty + texShapeVerts[5]
barray[index+21] = shadows[2]
barray[index+22] = slights[2]
barray[index+23] = blights[2]
barray[index+24] = verts[9] + x2
barray[index+25] = verts[10] + y2
barray[index+26] = verts[11] + z2
barray[index+27] = tx + texShapeVerts[6]
barray[index+28] = ty + texShapeVerts[7]
barray[index+29] = shadows[3]
barray[index+30] = slights[3]
barray[index+31] = blights[3]
index += 32
}
}
texNum++
}
}
return index
}
carveCaves() {
let wx = this.x + 16, wz = this.z + 16, wy = this.y + 16
for (let x = this.x, xx = 0; x < wx; x++, xx++) {
for (let z = this.z, zz = 0; z < wz; z++, zz++) {
wy = this.chunk.tops[zz * 16 + xx]
for (let y = this.y; y < wy; y++) {
if (isCave(x, y, z)) {
carveSphere(x, y, z)
}
}
}
}
this.caves = true
}
tick() {
for (let i = 0; i < 3; i++) {
let rnd = Math.random() * this.blocks.length | 0
if ((this.blocks[rnd]) === blockIds.grass) {
// Spread grass
let x = (rnd >> 8) + this.x
let y = (rnd >> 4 & 15) + this.y
let z = (rnd & 15) + this.z
if (!blockData[world.getBlock(x, y + 1, z)].transparent) {
world.setBlock(x, y, z, blockIds.dirt, false)
return
}
let rnd2 = Math.random() * 27 | 0
let x2 = rnd2 % 3 - 1
rnd2 = (rnd2 - x2 - 1) / 3
let y2 = rnd2 % 3 - 1
rnd2 = (rnd2 - y2 - 1) / 3
z += rnd2 - 1
x += x2
y += y2
if (world.getBlock(x, y, z) === blockIds.dirt && world.getBlock(x, y + 1, z) === blockIds.air) {
world.setBlock(x, y, z, blockIds.grass, false)
}
} else if (this.blocks[rnd] === (blockIds.oakSapling | CROSS)){
let i = (rnd >> 8) + this.x
let j = (rnd >> 4 & 15) + this.y
let k = (rnd & 15) + this.z
blockData[blockIds.oakSapling].grow(i,j,k)
}else if (this.blocks[rnd] === (blockIds.birchSapling | CROSS)){
let i = (rnd >> 8) + this.x
let j = (rnd >> 4 & 15) + this.y
let k = (rnd & 15) + this.z
blockData[blockIds.birchSapling].grow(i,j,k)
}
}
}
getLight(x, y, z, block = 0) {
let s = this.size
let i = x * s * s + y * s + z
return (this.light[i] & 15 << (block * 4)) >> (block * 4)
}
setLight(x, y, z, level, block = 0) {
let s = this.size
let i = x * s * s + y * s + z
this.light[i] = level << (block * 4) | (this.light[i] & 15 << (!block * 4))
}
getTags(x, y, z){
let s = this.size
return this.tags[x * s * s + y * s + z]
}
getTagByName(x, y, z, n){
var t = this.getTags(x,y,z)
return t && t[n]
}
setTags(x,y,z, data){
let s = this.size
this.tags[x * s * s + y * s + z] = data
}
setTagByName(x, y, z, n, data){
let s = this.size
var i = x * s * s + y * s + z
var t = this.tags[i]
if(!t){
t = this.tags[i] = {}
}
t[n] = data
}
}
let emptySection = new Section(0, 0, 0, 16)
let fullSection = new Section(0, 0, 0, 16)
fullSection.blocks.fill(blockIds.bedrock)
emptySection.light.fill(15)
class Chunk {
constructor(x, z, type, world) {
this.x = x
this.z = z
this.maxY = 0
this.minY = 255
this.sections = []
this.cleanSections = []
this.tops = new Uint8Array(16 * 16) // Store the heighest block at every (x,z) coordinate
this.ceils = new Uint8Array(16 * 16) //for nether
this.optimized = false
this.generated = false; // Terrain
this.populated = superflat === true // Trees and ores
this.lit = false
this.lazy = false
this.edited = false
this.loaded = false
this.type = type || world.type
// vao for this chunk
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
this.caves = !caves
this.doubleRender = false
this.world = world
}
getBlock(x, y, z) {
let s = y >> 4
return this.sections.length > s ? this.sections[s].getBlock(x, y & 15, z) : 0
}
setBlock(x, y, z, blockID, user) {
if (!this.sections[y >> 4]) {
do {
this.sections.push(new Section(this.x, this.sections.length * 16, this.z, 16, this))
} while (!this.sections[y >> 4])
}
if (user && !this.sections[y >> 4].edited) {
this.cleanSections[y >> 4] = this.sections[y >> 4].blocks.slice()
this.sections[y >> 4].edited = true
this.edited = true
}
if (blockData[blockID].semiTrans) {
this.doubleRender = true
if (!this.world.doubleRenderChunks.includes(this)) {
this.world.doubleRenderChunks.push(this)
}
}
this.sections[y >> 4].setBlock(x, y & 15, z, blockID)
}
getTags(x, y, z){
let s = y >> 4
return this.sections.length > s ? this.sections[s].getTags(x, y & 15, z) : null
}
getTagByName(x,y,z,n){
let s = y >> 4
return this.sections.length > s ? this.sections[s].getTagByName(x, y & 15, z,n) : null
}
setTags(x,y,z,data){
let s = y >> 4
if(this.sections.length > s) this.sections[s].setTags(x, y & 15, z, data)
}
setTagByName(x,y,z,n,data){
let s = y >> 4
if(this.sections.length > s) this.sections[s].setTagByName(x, y & 15, z,n,data)
}
fillLight() {
let max = this.sections.length * 16 - 1
let blockSpread = []
// Set virtical columns of light to level 15
for (let x = 0; x < 16; x++) {
for (let z = 0; z < 16; z++) {
let stop = false
for (let y = max; y >= 0; y--) {
let data = blockData[this.getBlock(x, y, z)]
if (data.lightLevel) {
if (!blockSpread[data.lightLevel]) blockSpread[data.lightLevel] = []
blockSpread[data.lightLevel].push(x + this.x, y, z + this.z)
this.setLight(x, y, z, data.lightLevel, 1)
}
if (!stop && !data.transparent) {
this.tops[z * 16 + x] = y
stop = true
} else if (!stop) {
this.setLight(x, y, z, 15, 0)
}
}
}
}
// Spread the light to places where the virtical columns stopped earlier, plus chunk borders
let spread = []
for (let x = 0; x < 16; x++) {
for (let z = 0; z < 16; z++) {
for (let y = this.tops[z * 16 + x] + 1; y <= max; y++) {
if (x === 15 || this.tops[z * 16 + x + 1] > y) {
spread.push(x + this.x, y, z + this.z)
continue
}
if (x === 0 || this.tops[z * 16 + x - 1] > y) {
spread.push(x + this.x, y, z + this.z)
continue
}
if (z === 15 || this.tops[(z + 1) * 16 + x] > y) {
spread.push(x + this.x, y, z + this.z)
continue
}
if (z === 0 || this.tops[(z - 1) * 16 + x] > y) {
spread.push(x + this.x, y, z + this.z)
continue
}
break
}
}
}
this.spreadLight(spread, 14)
for (let i = blockSpread.length - 1; i > 0; i--) {
let blocks = blockSpread[i]
if (blocks && blocks.length) {
this.spreadLight(blocks, i - 1, false, 1)
}
}
this.lit = true
}
setLight(x, y, z, level, blockLight) {
if(this.sections[y >> 4]) this.sections[y >> 4].setLight(x, y & 15, z, level, blockLight)
}
getLight(x, y, z, blockLight = 0) {
if (y >= this.sections.length * 16) return 15
if(!this.sections[y >> 4]) return 0
return this.sections[y >> 4].getLight(x, y & 15, z, blockLight)
}
trySpread(x, y, z, level, spread, blockLight, update = false) {
if(y < 0) return
if (world.getLight(x, y, z, blockLight) < level) {
if (blockData[world.getBlock(x, y, z)].transparent) {
world.setLight(x, y, z, level, blockLight)
spread.push(x, y, z)
}
}
if (update && (x < this.x || x > this.x + 15 || z < this.z || z > this.z + 15)) {
let chunk = world.getChunk(x, z)
if (chunk.buffer && !world.meshQueue.includes(chunk)) {
world.meshQueue.push(chunk)
}
}
}
spreadLight(blocks, level, update = false, blockLight = 0) {
let spread = []
let x = 0, y = 0, z = 0
for (let i = 0; i < blocks.length; i += 3) {
x = blocks[i]
y = blocks[i+1]
z = blocks[i+2]
if(y < 0) continue
this.trySpread(x - 1, y, z, level, spread, blockLight, update)
this.trySpread(x + 1, y, z, level, spread, blockLight, update)
this.trySpread(x, y - 1, z, level, spread, blockLight, update)
this.trySpread(x, y + 1, z, level, spread, blockLight, update)
this.trySpread(x, y, z - 1, level, spread, blockLight, update)
this.trySpread(x, y, z + 1, level, spread, blockLight, update)
}
if (level > 1 && spread.length) {
this.spreadLight(spread, level - 1, update, blockLight)
}
}
tryUnSpread(x, y, z, level, spread, respread, blockLight) {
if(y < 0) return
let light = world.getLight(x, y, z, blockLight)
let trans = blockData[world.getBlock(x, y, z)].transparent
if (light === level) {
if (trans) {
world.setLight(x, y, z, 0, blockLight)
spread.push(x, y, z)
}
} else if (light > level) {
respread[light].push(x, y, z)
}
if (x < this.x || x > this.x + 15 || z < this.z || z > this.z + 15) {
let chunk = world.getChunk(x, z)
if (chunk.buffer && !world.meshQueue.includes(chunk)) {
world.meshQueue.push(chunk)
}
}
}
unSpreadLight(blocks, level, respread, blockLight) {
let spread = []
let x = 0, y = 0, z = 0
for (let i = 0; i < blocks.length; i += 3) {
x = blocks[i]
y = blocks[i+1]
z = blocks[i+2]
if(y < 0) continue
this.tryUnSpread(x - 1, y, z, level, spread, respread, blockLight)
this.tryUnSpread(x + 1, y, z, level, spread, respread, blockLight)
this.tryUnSpread(x, y - 1, z, level, spread, respread, blockLight)
this.tryUnSpread(x, y + 1, z, level, spread, respread, blockLight)
this.tryUnSpread(x, y, z - 1, level, spread, respread, blockLight)
this.tryUnSpread(x, y, z + 1, level, spread, respread, blockLight)
}
if (level > 1 && spread.length) {
this.unSpreadLight(spread, level - 1, respread, blockLight)
}
}
reSpreadLight(respread, blockLight) {
for (let i = respread.length - 1; i > 1; i--) {
let blocks = respread[i]
let level = i - 1
let spread = respread[level]
for (let j = 0; j < blocks.length; j += 3) {
let x = blocks[j]
let y = blocks[j+1]
let z = blocks[j+2]
this.trySpread(x - 1, y, z, level, spread, blockLight)
this.trySpread(x + 1, y, z, level, spread, blockLight)
this.trySpread(x, y - 1, z, level, spread, blockLight)
this.trySpread(x, y + 1, z, level, spread, blockLight)
this.trySpread(x, y, z - 1, level, spread, blockLight)
this.trySpread(x, y, z + 1, level, spread, blockLight)
}
}
}
optimize() {
for (let i = 0; i < this.sections.length; i++) {
this.sections[i].optimize()
}
if (!world.meshQueue.includes(this)) {
world.meshQueue.push(this)
}
this.optimized = true
}
render() {
if (!this.buffer) {
return
}
if (p.canSee(this.x, this.minY, this.z, this.maxY)) {
renderedChunks++
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
updateBlock(x, y, z, world, lazy, leaveMe) {
if (this.buffer) {
this.lazy = lazy
if ((this.sections.length > y >> 4) && this.sections[y >> 4]) {
this.sections[y >> 4].updateBlock(x, y & 15, z, world, leaveMe)
}
}
}
deleteBlock(x, y, z, user) {
if (!this.sections[y >> 4]) {
return
}
if (user && !this.sections[y >> 4].edited) {
this.cleanSections[y >> 4] = this.sections[y >> 4].blocks.slice()
this.sections[y >> 4].edited = true
this.edited = true
}
this.sections[y >> 4].deleteBlock(x, y & 15, z)
this.minY = y < this.minY ? y : this.minY
this.maxY = y > this.maxY ? y : this.maxY
}
carveCaves() {
for (let i = 0; i < this.sections.length; i++) {
if (!this.sections[i].caves) {
this.sections[i].carveCaves()
if (i + 1 >= this.sections.length) {
this.caves = true
}
return
}
}
}
populate() {
var flowers = [blockIds.flowerOftheValley, blockIds.poppy, blockIds.dandelion, 
blockIds.blueOrchid, blockIds.pinkTulip, blockIds.orangeTulip, blockIds.redTulip, blockIds.whiteTulip,
blockIds.azureBluet, blockIds.cornFlower, blockIds.purpleFlower, blockIds.witherRose,
blockIds.allium, blockIds.oxeyeDaisy,
blockIds.lilac, blockIds.roseBush, blockIds.peony,
blockIds.TallGrass, blockIds.DoubleTallGrass]
randomSeed(hash(this.x, this.z) * 210000000)
let wx = 0, wz = 0, ground = 0, top = 0, rand = 0, place = false, topsi = 0, tall = 0
let trueX = this.x, trueY = this.y, trueZ = this.z
let smoothness = generator.smooth, hilliness = generator.height
let biomeSmooth = generator.biomeSmooth;
let biome = 0
let type = world.type
for (let i = 0; i < 16; i++) {
for (let k = 0; k < 16; k++) {
wx = this.x + i
wz = this.z + k
ground = this.tops[k * 16 + i]
biome = superflat ? 0 : noiseProfile.noise((trueX + i) * biomeSmooth, (trueZ + k) * biomeSmooth)
var b
if(superflat){b = "field"}else b = getBiome(biome)
let nb = getNetherBiome(biome)
if (trees && random() < 0.07 && type === "" && b === "field" && world.getBlock(i, ground, k) === blockIds.grass) {
top = ground + floor(4.5 + random(2.5))
rand = floor(random(4096))
let tree = random() < 0.6 ? blockIds.oakLog : ++top && blockIds.birchLog
let leaf = tree === blockIds.oakLog ? blockIds.oakLeaves : blockIds.birchLeaves
let groundBlock = blockIds.dirt
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree)
}
this.setBlock(i, top + 1, k, leaf)
this.setBlock(i, ground, k, groundBlock)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top, wz + z, leaf)
}
}
}
}
//Top leaves
world.spawnBlock(wx + 1, top + 1, wz, leaf)
world.spawnBlock(wx, top + 1, wz - 1, leaf)
world.spawnBlock(wx, top + 1, wz + 1, leaf)
world.spawnBlock(wx - 1, top + 1, wz, leaf)
}
if(b === "snowyField" && trees && random() < 0.07 && type === "" && world.getBlock(i, ground, k)){
top = ground + floor(4.5 + random(2.5))
rand = floor(random(4096))
let tree = random() < 0.6 ? blockIds.oakLog : ++top && blockIds.birchLog
let leaf = tree === blockIds.oakLog ? blockIds.oakLeaves : blockIds.birchLeaves
let groundBlock = blockIds.dirt
let snow = blockIds.snow
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree)
}
this.setBlock(i, top + 1, k, leaf)
this.setBlock(i, ground, k, groundBlock)
this.setBlock(i, top + 2, k, snow | LAYER2)
//Top leaves
world.spawnBlock(wx + 1, top + 1, wz, leaf)
world.spawnBlock(wx, top + 1, wz - 1, leaf)
world.spawnBlock(wx, top + 1, wz + 1, leaf)
world.spawnBlock(wx - 1, top + 1, wz, leaf)
world.spawnBlock(wx + 1, top + 2, wz, snow | LAYER1)
world.spawnBlock(wx, top + 2, wz - 1, snow | LAYER1)
world.spawnBlock(wx, top + 2, wz + 1, snow | LAYER1)
world.spawnBlock(wx - 1, top + 2, wz, snow | LAYER1)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top, wz + z, leaf)
if(rand & 2) world.spawnBlock(wx + x, top + 1, wz + z, snow | LAYER2)
else world.spawnBlock(wx + x, top + 1, wz + z, snow | LAYER1)
}
} else {
world.spawnBlock(wx + x, top, wz + z, leaf)
world.spawnBlock(wx + x, top + 1, wz + z, snow | LAYER1)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
if(rand & 2) world.spawnBlock(wx + x, top, wz + z, snow | LAYER2)
else world.spawnBlock(wx + x, top, wz + z, snow | LAYER1)
}
} else {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
world.spawnBlock(wx + x, top, wz + z, snow | LAYER1)
}
}
}
}
//get rid of snow underneath
/*for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if(x || z){
var g = world.getTop(wx,wz)
if(g) world.setBlock(wx+i, g+1, wz+k, 0)
}
}
}*/
//
}
// Cactus
if (random() < 0.01 && this.getBlock(i, ground, k) && b === "desert" && ground > 60 && this.type !== "nether") {
top = ground + Math.floor(2.5 + random(1.5));
rand = Math.floor(random(4096));
let tree = blockIds.cactus | CACTUS;
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree);
}
this.setBlock(i, ground, k, blockIds.sand);
}
if (random() < 0.006 && this.getBlock(i, ground, k) && b === "desert" && ground > 60 && this.type !== "nether") {
let tree = blockIds.deadBush | CROSS;
this.setBlock(i,ground+1,k, tree);
this.setBlock(i, ground, k, blockIds.sand);
}
// Jungle trees
if(trees && random() < 0.01 && type === "" && (b === "jungle" || b === "giantJungle") && world.getBlock(i, ground, k)){
tall = floor(5 + random(5)) //5 to 10
top = ground + tall
let tree = blockIds.jungleLog
let leaf = blockIds.jungleLeaves
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree)
}
this.setBlock(i, top + 1, k, leaf)
this.setBlock(i, ground, k, blockIds.dirt)
//Bottom leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 2, wz + z, leaf)
}
}
}
}
//2nd layer leaves
for (let x = -2; x <= 2; x++) {
for (let z = -2; z <= 2; z++) {
if (x || z) {
if ((x * z & 7) === 4) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
}
//3rd layer leaves
for (let x = -1; x <= 1; x++) {
for (let z = -1; z <= 1; z++) {
if (x || z) {
if (x & z) {
place = rand & 1
rand >>>= 1
if (place) {
world.spawnBlock(wx + x, top, wz + z, leaf)
}
} else {
world.spawnBlock(wx + x, top, wz + z, leaf)
}
}
}
}
//Top leaves
world.spawnBlock(wx + 1, top + 1, wz, leaf)
world.spawnBlock(wx, top + 1, wz - 1, leaf)
world.spawnBlock(wx, top + 1, wz + 1, leaf)
world.spawnBlock(wx - 1, top + 1, wz, leaf)
}//end jungle trees
//Giant jungle trees
if(trees && random() < 0.01 && type === "" && b === "giantJungle" && world.getBlock(i, ground, k)){
tall = floor(10 + random(20)) //10 to 30
top = ground + tall
let tree = blockIds.jungleLog
let leaf = blockIds.jungleLeaves
//Center
for (let j = ground + 1; j < top; j++) {
this.setBlock(i, j, k, tree)
world.spawnBlock(wx + 1, j, wz, tree)
world.spawnBlock(wx, j, wz + 1, tree)
world.spawnBlock(wx+1, j, wz+1, tree)
}
this.setBlock(i, ground, k, blockIds.dirt)
world.setBlock(wx + 1, ground, wz, blockIds.dirt)
world.setBlock(wx, ground, wz + 1, blockIds.dirt)
world.setBlock(wx+1, ground, wz+1, blockIds.dirt)
//Messy part
//leaves
let w2 = 5 * 5
let d2 = 5 * 5
let h2 = 5 * 5
for(var x=-4.5; x<4.5; x++){
for(var y=2; y<4.5; y++){
for(var z=-4.5; z<4.5; z++){
let n = x * x / w2 + y * y / h2 + z * z / d2
if (n < 1) {
world.spawnBlock(wx + x+1, top-4+y, wz + z+1, leaf)
}
}
}
}
//the diagonal branches
w2 = 3 * 3
d2 = 3 * 3
h2 = 3 * 3
for(y=ground+5; y<top; y += Math.floor(random(10))){
let side = Math.floor(random(4))
let mx=0,mz=0
switch(side){
case 0:
mx=1
break
case 1:
mx=-1
break
case 2:
mz=1
break
case 3:
mz=-1
break
}
let x = mx === 1?2:mx, z = mz === 1?2:mz
var rnd = Math.floor(random(4))+2
//branch
for(var by=0; by<rnd; by++){
world.setBlock(wx+x, y+by, wz+z, tree)
x += mx
z += mz
}
x -= mx
z -= mz
by -= 1
//leaves
for(var lx=-3; lx<3; lx++){
for(var ly=1; ly<3; ly++){
for(var lz=-3; lz<3; lz++){
let n = lx * lx / w2 + ly * ly / h2 + lz * lz / d2
if (n < 1) {
world.spawnBlock(wx+x + lx, y+by+ly, wz+z + lz, leaf)
}
}
}
}
// m = move; l = leaf
}
}//end giant jungle trees; jungle bushes
if(trees && random() < 0.007 && type === "" && (b === "jungle" || b === "giantJungle") && world.getBlock(i, ground, k)){
let w2 = 3 * 3
let d2 = 3 * 3
let h2 = 3 * 3
for(var x=-3; x<3; x++){
for(var y=1; y<3; y++){
for(var z=-3; z<3; z++){
let n = x * x / w2 + y * y / h2 + z * z / d2
if (n < 1) {
world.spawnBlock(wx+x, ground+y, wz+z, blockIds.jungleLeaves)
}
}
}
}
this.setBlock(i, ground+1, k, blockIds.jungleLog)
}
if (random() < 0.005 && type === "nether" && ground > 79 && nb !== 0){
tall = floor(4.5 + random(2.5))
if(floor(random(12)) === 1) tall *= 2
top = ground + tall
rand = floor(random(4096))
let tree
let leaf
let groundBlock = blockIds.netherrack
if(this.type === "nether"){
if(nb === 1){
tree = blockIds.warpedStem
leaf = blockIds.warpedWartBlock
}else if(nb === 2){
tree = blockIds.crimsonStem
leaf = blockIds.netherWartBlock
}
}
//Center
for (let j = ground + 1; j <= top; j++) {
this.setBlock(i, j, k, tree)
}
this.setBlock(i, top + 1, k, leaf)
this.setBlock(i, ground, k, groundBlock)
//Shroomlight
for(var l=0; l<3; l++) world.spawnBlock(wx + random(-2, 2), top + random(-1,1), wz + random(-2,2), blockIds.shroomlight)
//Top leaves
for(var x=-1; x<2; x++){
for(var z=-1; z<2; z++){
place = (x&1) && (z&1) ? rand & 1 : true
rand >>>= 1
if(place){
world.spawnBlock(wx + x, top + 1, wz + z, leaf)
}
}
}
//layer 2 leaves
for(var x=-2; x<3; x++){
for(var z=-2; z<3; z++){
place = (x===2 || x===-2) && (z===2 || z==-2) ? rand & 1 : true
rand >>>= 1
if(place){
world.spawnBlock(wx + x, top, wz + z, leaf)
}
}
}
rand = floor(random(4096))
//layer 1 leaves
for(var x=-2; x<3; x++){
for(var z=-2; z<3; z++){
place = x===2 || x===-2 || z===2 || z==-2 ? !(rand & 1) : false
rand >>>= 1
if(place){
world.spawnBlock(wx + x, top - 1, wz + z, leaf)
}
}
}
rand = floor(random(40964096))
//drooping leaves
for(var x=-2; x<3; x++){
for(var z=-2; z<3; z++){
place = x===2 || x===-2 || z===2 || z==-2
rand >>>= 1
if(place){
var h = rand & 4 && rand & 8 ? rand & 3 : 0
if(h){
world.spawnBlock(wx + x, top - 1, wz + z, leaf) //to make sure removed ones are put back
for(var y=0; y<h; y++){
world.spawnBlock(wx + x, top - 2 - y, wz + z, leaf)
}
}
}
}
}
if(nb === 2){
rand = floor(random(40964096))
//vines
for(var x=-2; x<3; x++){
for(var z=-2; z<3; z++){
place = x===2 || x===-2 || z===2 || z==-2
rand >>>= 1
if(place){
var h = (rand & 4 && rand & 8) ? (rand & (tall-2)) - 1 : 0
if(h){
world.spawnBlock(wx + x, top - 1, wz + z, leaf) //to make sure removed ones are put back
for(var y=0; y<h; y++){
world.spawnBlock(wx + x, top - 2 - y, wz + z, blockIds.weepingVinesPlant)
}
world.spawnBlock(wx + x, top - 2 - h, wz + z, blockIds.weepingVines)
}
}
}
}
}
}
//flowers and vines
if (random() < 0.05 && this.getBlock(i, ground, k) === blockIds.grass) {
var flower = flowers[Math.round(random(flowers.length-1))]
world.spawnBlock(wx, ground+1, wz, flower);
}
var block = this.getBlock(i, ground, k)
if(random() < 0.05){
if(block === blockIds.crimsonNylium){
world.spawnBlock(wx, ground+1, wz, blockIds.crimsonRoots);
}else if(block === blockIds.warpedNylium){
world.spawnBlock(wx, ground+1, wz, blockIds.warpedRoots);
}
}
//lava rivers
if(random() < 0.005 && world.getBlock(i,ground,k) && this.type==="nether"){
let it = 0
let x=wx, y=ground, z=wz
let dir=floor(random(0,8))
for(; it<100; it++){
let xp,zp
switch(dir){
case 0:
x+=1
zp=true
break
case 1:
x+=1
z+=1
break
case 2:
z+=1
xp=true
break
case 3:
x-=1
z+=1
break
case 4:
x-=1
zp=true
break
case 5:
x-=1
z-=1
break
case 6:
z-=1
xp=true
break
case 7:
x+=1
z-=1
break
}
if(random() < 0.08){
dir += round(random(-1,1))
}
let prev = world.getBlock(x,y,z)
world.setBlock(x,y,z,blockIds.Lava)
if(xp){
world.setBlock(x+1,y,z,blockIds.Lava)
}
if(zp){
world.setBlock(x,y,z+1,blockIds.Lava)
}
if(!prev && y>1){
y--
prev = world.getBlock(x,y,z)
world.setBlock(x,y,z,blockIds.Lava)
while(!prev && y>1){
y--
prev = world.getBlock(x,y,z)
world.setBlock(x,y,z,blockIds.Lava)
}
}
if(world.getBlock(x,y-1,z) === blockIds.Lava) break
}
}
if(this.type === "nether"){
let l
if(random() < 0.005){
let r = random(12345123451234512345)*3
let x=wx, y=this.ceils[k * 16 + i], z=wz
let ri=floor(random(5,15))
for(l=0; l<ri; l++){
x += r&1 - 1; r >>>= 1
y += r&3 - 2; r >>>= 1
z += r&1 - 1; r >>>= 1
world.spawnBlock(x,y,z, blockIds.glowstone)
}
}
for(l=0; l<16; l++){
let x = random(0, 16)
let y = random(10, 177)
let z = random(0, 16)
if(world.getBlock(wx+x,y,wz+z) === blockIds.netherrack && world.getBlock(wx+x,y+1,wz+z) === blockIds.netherrack && world.getBlock(wx+x,y-1,wz+z) === blockIds.netherrack){
world.setBlock(wx+x,y,wz+z, blockIds.netherQuartzOre)
}
}
for(l=0; l<10; l++){
let x = random(0, 16)
let y = random(10, 177)
let z = random(0, 16)
if(world.getBlock(wx+x,y,wz+z) === blockIds.netherrack && world.getBlock(wx+x,y+1,wz+z) === blockIds.netherrack && world.getBlock(wx+x,y-1,wz+z) === blockIds.netherrack){
world.setBlock(wx+x,y,wz+z, blockIds.netherGoldOre)
}
}
}else{
// Blocks of each per chunk in Minecraft
// Coal: 185.5
// Iron: 111.5
// Gold: 10.4
// Redstone: 29.1
// Diamond: 3.7
// Lapis: 4.1
//there is also copper
ground -= 4
if (random() < 3.7 / 256) {
let y = random() * 16 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.diamondOre)
}
}
if (random() < 111.5 / 256) {
let y = random() * 64 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.ironOre)
}
}
if (random() < 51 / 256) {
let y = random() * 64 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.copperOre)
}
}
if (random() < 185.5 / 256) {
let y = random() * ground | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.coalOre)
}
}
if (random() < 10.4 / 256) {
let y = random() * 32 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.goldOre)
}
}
if (random() < 29.1 / 256) {
let y = random() * 16 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.redstoneOre)
}
}
if (random() < 4.1 / 256) {
let y = random() * 32 | 0 + 1
y = y < ground ? y : ground
if (this.getBlock(i, y, k)) {
this.setBlock(i, y < ground ? y : ground, k, blockIds.lapisOre)
}
}
}
}
}
this.populated = true
}
genMesh() {
let start = performance.now()
let barray = bigArray
let index = 0
for (let i = 0; i < this.sections.length; i++) {
index = this.sections[i].genMesh(barray, index)
}
let arrayDone = performance.now()
if (!this.buffer) {
this.buffer = gl.createBuffer()
}
let data = barray.slice(0, index)
let maxY = 0
let minY = 255
let y = 0
for (let i = 1; i < data.length; i += 6) {
y = data[i]
maxY = max(maxY, y)
minY = min(minY, y)
}
this.maxY = maxY
this.minY = minY
this.faces = data.length / 32
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer)
gl.bufferData(gl.ARRAY_BUFFER, data, gl.DYNAMIC_DRAW)
gl.enableVertexAttribArray(glCache.aVertex)
gl.enableVertexAttribArray(glCache.aTexture)
gl.enableVertexAttribArray(glCache.aShadow)
gl.enableVertexAttribArray(glCache.aSkylight)
gl.enableVertexAttribArray(glCache.aBlocklight)
gl.vertexAttribPointer(glCache.aVertex, 3, gl.FLOAT, false, 32, 0)
gl.vertexAttribPointer(glCache.aTexture, 2, gl.FLOAT, false, 32, 12)
gl.vertexAttribPointer(glCache.aShadow, 1, gl.FLOAT, false, 32, 20)
gl.vertexAttribPointer(glCache.aSkylight, 1, gl.FLOAT, false, 32, 24)
gl.vertexAttribPointer(glCache.aBlocklight, 1, gl.FLOAT, false, 32, 28)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
this.lazy = false
}
tick() {
if (this.edited) {
for (let i = 0; i < this.sections.length; i++) {
if (this.sections[i].edited) {
this.sections[i].tick()
}
}
}
}
load() {
let chunkX = this.x >> 4
let chunkZ = this.z >> 4
let load = null
for (let i = 0; i < world.loadFrom.length; i++) {
load = world.loadFrom[i]
if (load.x === chunkX && load.z === chunkZ) {
let y = load.y * 16
for (let j in load.blocks) {
if(blockData[load.blocks[j]]){ // if a block doesn't exsist, they won't be generated
world.setBlock((j >> 8 & 15) + this.x, (j >> 4 & 15) + y, (j & 15) + this.z, load.blocks[j])
}
}
world.loadFrom.splice(i--, 1)
}
}
this.loaded = true
}
}
class Contacts {
constructor() {
this.array = []
this.size = 0
}
add(x, y, z, block) {
if (this.size === this.array.length) {
this.array.push([ x, y, z, block ])
} else {
this.array[this.size][0] = x
this.array[this.size][1] = y
this.array[this.size][2] = z
this.array[this.size][3] = block
}
this.size++
}
clear() {
this.size = 0
}
}
class Entity {
constructor(x, y, z, pitch, yaw, velx, vely, velz, width, height, depth, vertices, texture, faces, despawns, vao) {
this.x = x
this.y = y
this.z = z
this.previousX = x
this.previousY = y
this.previousZ = z
this.canStepX = true
this.canStepY = true
this.pitch = pitch
this.yaw = yaw
this.velx = velx
this.vely = vely
this.velz = velz
this.width = width
this.height = height
this.depth = depth
this.offsetY = 0
this.hidden = false
this.harmEffect = 0
this.contacts = new Contacts()
this.lastUpdate = performance.now()
this.onGround = false
this.hasCollided = false
this.gravityStength = -0.032
this.standingOn = 0
this.despawns = despawns
this.spawn = this.lastUpdate
this.canDespawn = false
this.dieEffect = 0
this.burning = false
this.parts = {}
this.faces = faces
if(vao){
this.vao = vao
}else{
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
addPart(name,size,vao,x,y,z,w,h,d,rx,ry){
this.parts[name] = {
size,vao,
x,y,z,w,h,d,rx,ry //all of these are relative to entity position
}
}
renderPart(part, matrix){
matrix.translate(part.x, part.y, part.z)
matrix.rotX(part.rx)
matrix.rotY(part.ry)
matrix.scale(part.w, part.h, part.d)
gl.uniformMatrix4fv(glCache.uViewEntity, false, matrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(part.vao)
gl.drawElements(gl.TRIANGLES, 6 * part.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
matrix.unscale(part.w, part.h, part.d)
matrix.rotY(-part.ry)
matrix.rotX(-part.rx)
matrix.translate(-part.x, -part.y, -part.z)
}
updateVelocity(now) {
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.standingOn = world.getBlock(this.x, round(this.y-this.height-1), this.z)
if (this.liquid){
this.gravityStength = -0.01
this.vely *= 0.9
}else{
this.gravityStength = -0.02
}
this.vely += this.gravityStength * dt
if (this.vely < -1.5) {
this.vely = -1.5
}
let drag = this.liquid ? 0.7 : (this.onGround ? 0.5 : 0.85)
if(blockData[this.standingOn].slide) drag = blockData[this.standingOn].slide
this.velz += (this.velz * 0.9 - this.velz) * dt
this.velx += (this.velx * 0.9 - this.velx) * dt
// this.vely += (this.vely * 0.9 - this.vely) * dt
}
collided(x, y, z, vx, vy, vz, block) {
let verts = blockData[block].shape.verts
let px = roundBits(this.x - this.width / 2 - x)
let py = roundBits(this.y - this.height / 2 - y)
let pz = roundBits(this.z - this.depth / 2 - z)
let pxx = roundBits(this.x + this.width / 2 - x)
let pyy = roundBits(this.y + this.height / 2 - y)
let pzz = roundBits(this.z + this.depth / 2 - z)
let minX, minY, minZ, maxX, maxY, maxZ, min, max
//Top and bottom faces
let faces = verts[0]
if (vy <= 0) {
faces = verts[1]
}
if (!vx && !vz) {
for (let face of faces) {
min = face.min
minX = min[0]
minZ = min[2]
max = face.max
maxX = max[0]
maxZ = max[2]
if (face[1] > py && face[1] < pyy && minX < pxx && maxX > px && minZ < pzz && maxZ > pz) {
if (vy <= 0) {
this.onGround = true
this.y = round((face[1] + y + this.height / 2) * 10000) / 10000
this.vely = 0
return false
} else {
return true
}
}
}
return false
}
//West and East faces
if (vx < 0) {
faces = verts[4]
} else if (vx > 0) {
faces = verts[5]
}
if (vx) {
let col = false
for (let face of faces) {
min = face.min
minZ = min[2]
minY = min[1]
max = face.max
maxZ = max[2]
maxY = max[1]
if (face[0] > px && face[0] < pxx && minY < pyy && maxY > py && minZ < pzz && maxZ > pz) {
if (maxY - py > 0.5) {
this.canStepX = false
}
col = true
}
}
return col
}
//South and North faces
if (vz < 0) {
faces = verts[2]
} else if (vz > 0) {
faces = verts[3]
}
if (vz) {
let col = false
for (let face of faces) {
min = face.min
minX = min[0]
minY = min[1]
max = face.max
maxX = max[0]
maxY = max[1]
if (face[2] > pz && face[2] < pzz && minY < pyy && maxY > py && minX < pxx && maxX > px) {
if (maxY - py > 0.5) {
this.canStepZ = false
}
col = true
}
}
return col
}
}
move(now) {
let pminX = floor(this.x - this.width / 2)
let pmaxX = ceil(this.x + this.width / 2)
let pminY = floor(this.y - this.height / 2)
let pmaxY = ceil(this.y + this.height / 2)
let pminZ = floor(this.z - this.depth / 2)
let pmaxZ = ceil(this.z + this.depth / 2)
let block = null
this.liquid = false
for (let x = pminX; x <= pmaxX; x++) {
for (let y = pminY; y <= pmaxY; y++) {
for (let z = pminZ; z <= pmaxZ; z++) {
let block = world.getBlock(x, y, z)
if (block && blockData[block].solid && !blockData[block].liquid) {
this.contacts.add(x, y, z, block)
}
if(x === round(this.x) && z === round(this.z) && blockData[block].liquid){
this.liquid = true
}
}
}
}
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.previousX = this.x
this.previousY = this.y
this.previousZ = this.z
this.canStepX = false
this.canStepY = false
this.onGround = false
this.hasCollided = false
//Check collisions in the Y direction
this.y += this.vely * dt
for (let i = 0; i < this.contacts.size; i++) {
block = this.contacts.array[i]
if (this.collided(block[0], block[1], block[2], 0, this.vely, 0, block[3])) {
this.y = this.previousY
this.vely = 0
this.hasCollided = true
break
}
}
if (this.y === this.previousY) {
this.canStepX = true
this.canStepZ = true
}
//Check collisions in the X direction
this.x += this.velx * dt
for (let i = 0; i < this.contacts.size; i++) {
block = this.contacts.array[i]
if (this.collided(block[0], block[1], block[2], this.velx, 0, 0, block[3])) {
if (this.canStepX && !world.getBlock(block[0], block[1] + 1, block[2]) && !world.getBlock(block[0], block[1] + 2, block[2])) {
continue
}
this.x = this.previousX
this.velx = 0
this.hasCollided = true
break
}
}
//Check collisions in the Z direction
this.z += this.velz * dt
for (let i = 0; i < this.contacts.size; i++) {
block = this.contacts.array[i]
if (this.collided(block[0], block[1], block[2], 0, 0, this.velz, block[3])) {
if (this.canStepZ && !world.getBlock(block[0], block[1] + 1, block[2]) && !world.getBlock(block[0], block[1] + 2, block[2])) {
continue
}
this.z = this.previousZ
this.velz = 0
this.hasCollided = true
break
}
}
if(this.onGround){
this.hasCollided = true
}
this.lastUpdate = now
this.contacts.clear()
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
}
render() {
if(this.hidden) return
const offsetY = this.offsetY
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y + offsetY, this.z)
modelMatrix.rotZ(this.dieEffect)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerEntity, 0)
gl.uniform1f(glCache.uLightLevelEntity, lightLevel)
gl.uniform1f(glCache.harmEffectEntity, this.harmEffect || this.dieEffect)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
for(var part in this.parts){
this.renderPart(this.parts[part], modelViewProjectionMatrix)
}
gl.uniform1f(glCache.harmEffectEntity, 0)
if(this.burning){
entityFire.render(this)
}
}
}
class Item extends Entity {
constructor(x, y, z, velx, vely, velz, blockID, autoSetVel, amount) {
const block = blockData[blockID]
const tex = block.textures
const shape = block.shape
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(x, y, z, 0, 0, velx, vely, velz, 0.25, 0.25, 0.25, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, 1500000)
this.block = blockID
this.type = "Item"
//this.amount = amount || 1
if(autoSetVel){
this.velx = (Math.random()-0.5) * 0.2
this.vely = Math.random() * 0.2
this.velz = (Math.random()-0.5) * 0.2
}
}
update() {
if(this.amount <= 0){
return this.canDespawn = true
}
let now = performance.now()
this.yaw += 0.01;
if(this.yaw > Math.PI*2){
this.yaw -= Math.PI*2
}
this.updateVelocity(now)
this.move(now)
let xDist = this.x - p.x
let yDist = this.y - p.y
let zDist = this.z - p.z
let pickup = xDist > -1 && xDist < 1 && yDist > -1.5 && yDist < 1 && zDist > -1 && zDist < 1
if(pickup){
var dist = dist3(this.x, this.y, this.z, p.x, p.y, p.z)
var dist2 = dist3(this.x, this.y, this.z, p.x, p.y-1, p.z)
pickup = ((1 >= dist) && (dist >= -1)) || ((1 >= dist2) && (dist2 >= -1))
}
/*if(multiplayer ? host : true){
let d = 3/4
var updateShape
for(var i=0; i<world.entities.length; i++){
var e = world.entities[i]
if(e.type === "Item" && e !== this){
xDist = this.x - e.x
yDist = this.y - e.y
zDist = this.z - e.z
let stack = xDist > -d && xDist < d && yDist > -d && yDist < d && zDist > -d && zDist < d
if(stack){
this.amount += e.amount
e.amount = 0
updateShape = true
}
}
}
if(updateShape) this.updateShape()
}*/
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
if(pickup){
/*var a = this.amount
for(var i=0; i<a; i++){
if(newInvItem(this.block)) this.amount --
else break
}
if(this.amount === 0){
this.canDespawn = true
updateHUD = true
playSound("entity.item.pickup")
}else this.updateShape()*/
if(newInvItem(this.block)){
this.canDespawn = true
if(this.block === blockIds.oakLog || this.block === blockIds.birchLog || this.block === blockIds.jungleLog){
achievment("Getting Wood")
}
if(this.block === blockIds.diamond){
achievment("DIAMONDS!")
}
updateHUD = true
playSound("entity.item.pickup")
if(multiplayer) send({type:"playSound", data:"entity.item.pickup", x:this.x,y:this.y,z:this.z})
}
}
this.offsetY = -0.1 * cos((performance.now() - this.spawn) * 0.0015) + 0.15
}
updateShape(){
if(blockData[this.block].shape !== shapes.cube) return
var shape
if(this.amount === 1){
shape = "cube"
}else if(this.amount < 4){
shape = "cube"+this.amount
}else{
shape = "cube4"
}
const block = blockData[this.block]
const tex = block.textures
shape = shapes[shape]
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
var vertices = new Float32Array(shapeVerts.flat(Infinity))
texture = new Float32Array(texture),
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
this.faces = size
}
}
win.Item = Item
class BlockEntity extends Entity{
constructor(blockID, x,y,z, solidOnGround, cacheBlocks){
const block = blockData[blockID]
const tex = block.textures
const shape = block.shape
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(x, y, z, 0, 0, 0, 0, 0, 0.996, 0.996, 0.996, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, 1500000)
this.block = blockID
this.type = "BlockEntity"
this.solidOnGround = solidOnGround
this.cacheBlocks = cacheBlocks
this.cached = {}
if(cacheBlocks){
this.cached[blockID] = this.vao
}
}
changeBlock(blockID){
if(this.cached[blockID]){
this.vao = this.cached[blockID]
return
}
const block = blockData[blockID]
const tex = block.textures
const shape = block.shape
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
var vertices = new Float32Array(shapeVerts.flat(Infinity)),
faces = size
texture = new Float32Array(texture),
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
if(this.cacheBlocks){
this.cached[blockID] = this.vao
}
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
if(this.onGround && this.solidOnGround){
var x = round(this.x), y = round(this.y), z = round(this.z)
var b = world.getBlock(x, y-1, z)
if(blockData[b] && blockData[b].shape === shapes.cube){
world.setBlock(x,y,z, this.block)
blockSound(this.block, "land", x,y,z)
}else{
// non cube block breaks falling blocks
world.addEntity(new Item(x,y,z, 0,0,0, this.block))
}
this.canDespawn = true
}
}
}
win.BlockEntity = BlockEntity
class FireBlock extends BlockEntity{
constructor(){
super(blockIds.fire | SLAB, 0,0,0)
this.width = 1
this.height = 0.5
this.depth = 1
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotY(-this.yaw)
modelMatrix.rotX(-this.pitch)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerEntity, 0)
gl.uniform1f(glCache.uLightLevelEntity, 1)
gl.uniform1f(glCache.harmEffectEntity, 0)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
gl.uniform1f(glCache.harmEffectEntity, 0)
}
}
class PrimedTNT extends BlockEntity{
constructor(x,y,z){
super(blockIds.tnt, x,y,z)
this.type = "PrimedTNT"
this.velx = (Math.random() * 0.1) - 0.05
this.vely = Math.random() * 0.1
this.velz = (Math.random() * 0.1) - 0.05
this.prevTex = blockIds.tnt
this.tex = this.prevTex
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
var i = Math.floor((now - this.spawn) / 250)
if(i%2){
this.tex = blockIds.tnt
}else{
this.tex = blockIds.whiteConcrete
}
if(this.prevTex !== this.tex){
this.changeBlock(this.tex)
this.prevTex = this.tex
}
if(i >= 16){
this.canDespawn = true
var x = round(this.x), y = round(this.y), z = round(this.z)
explode(x,y,z,4, blockData[world.getBlock(x,y,z)].liquid)
}
}
}
class EnderPearl extends BlockEntity{
constructor(x,y,z,velx,vely,velz){
super(blockIds.enderPearl, x,y,z)
this.type = "EnderPearl"
this.velx = velx
this.vely = vely
this.velz = velz
this.from = achexUsername
this.gravityStrength = -0.05
}
updateVelocity(now) {
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.vely += this.gravityStength * dt
if (this.vely < -1.5) {
this.vely = -1.5
}
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
var fromMe = this.from === achexUsername
if (fromMe && now - this.spawn > this.despawns) {
this.canDespawn = true
}
if(fromMe && this.hasCollided){
p.x = this.x
p.y = this.y
p.z = this.z
this.canDespawn = true
}
}
}
class Snowball extends BlockEntity{
constructor(x,y,z,velx,vely,velz){
super(blockIds.enderPearl, x,y,z)
this.type = "Snowball"
this.velx = velx
this.vely = vely
this.velz = velz
this.from = achexUsername
this.gravityStrength = -0.05
}
updateVelocity(now) {
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.vely += this.gravityStength * dt
if (this.vely < -1.5) {
this.vely = -1.5
}
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
var fromMe = this.from === achexUsername
if (fromMe && now - this.spawn > this.despawns) {
this.canDespawn = true
}
if(fromMe){
var collided = entityRayTrace(this.x,this.y,this.z,true)
if(collided){
if(entPlayerCollided){
var pd = p.direction
send({type:"hit", username:username, damage:damage, velx:pd.x/2, velz:pd.z/2}, ent.id)
}else{
if(collided.onhit) collided.onhit(0)
}
this.canDespawn = true
}else if(collidedWithMe && survival){
damage(1, username+" got killed by their own snowball")
}
}
}
}
class ExperienceOrb extends Entity{
//experienceOrb
constructor(x,y,z,value){
var i
if(!value || value <= 2){
i = 0
}else if(value <= 6){
i = 1
}else if(value <= 16){
i = 2
}else if(value <= 36){
i = 3
}else if(value <= 72){
i = 4
}else if(value <= 148){
i = 5
}else if(value <= 306){
i = 6
}else if(value <= 616){
i = 7
}else if(value <= 1236){
i = 8
}else if(value <= 2476){
i = 9
}else if(value <= 32767){
i = 10
}
super(x, y, z, 0, 0, 0, 0, 0, 0.5, 0.5, 0.5, null, null, experienceOrbVaos.size, 300000, experienceOrbVaos[i])
this.type = "ExperienceOrb"
this.value = value
this.tint = {r:1,g:1,b:1}
}
update(){
let now = performance.now()
var dist = dist3(this.x,this.y,this.z,p.x,p.y-p.bottomH,p.z)
if(dist < 7.25 && dist > -7.25){
//var speed = (7.25 - dist) / 10
var x = this.x - p.x; this.velx = (x-(Math.sign(x)*7.25)) / 150//; this.velx = -this.velx
if(this.onGround) {var y = this.y - (p.y-p.bottomH); this.vely = (y-(Math.sign(y)*7.25)) / 40/*; this.vely = -this.vely*/}
var z = this.z - p.z; this.velz = (z-(Math.sign(z)*7.25)) / 150//; this.velx = -this.velx
}
if(dist < 0.5 && dist > -0.5){
if(now - p.lastXP >= 10000){
XP(this.value)
this.canDespawn = true
}
}
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
this.facePlayer()
this.tint.r = min(max(abs((now-this.spawn) % 1000 - 500) / 500, 0), 1)
this.tint.g = 1
this.tint.b = 0
}
facePlayer(){
//var magnitude = dist3(this.x,this.y,this.z,p.x,p.y,p.z)
this.yaw = atan2(p.z - this.z, p.x-this.x)
var adjacent = dist2(this.x,this.z,p.x,p.z)
this.pitch = atan2(p.y - this.y, adjacent)
/*var r = this.rotationMatrix
r.identity()
var e = r.elements
var up = vec4
up.x = 0
up.y = 1
up.z = 0
e[12] = this.x
e[13] = this.y
e[14] = this.z
var z = vec1
z.x = this.x - p.x
z.y = this.y - p.y
z.z = this.z - p.z
z.normalize()
var x = up.crossProduct(z.x,z.y,z.z, vec2)
x.normalize()
var y = z.crossProduct(x.x,x.y,x.z, vec3)
y.normalize()
e[0] = x.x
e[1] = x.y
e[2] = x.z
e[4] = y.x
e[5] = y.y
e[6] = y.z
e[8] = z.x
e[9] = z.y
e[10] = z.z*/
/*/less code, more computing
var dx = p.x-this.x;
var dy = p.y-this.y;
var dz = p.z-this.z;
var rxy = Math.sqrt( Math.pow(dx,2) + Math.pow(dy,2) );
var lambda = Math.atan(dy/dx);
var phi = Math.atan(dz/rxy)
if (dx < 0) phi = phi + Math.PI;
if (dz < 0) lambda = -1 * lambda;
this.pitch = rxy
this.yaw = lambda*/
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.rotX(this.dieEffect)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0)
gl.bindTexture(gl.TEXTURE_2D, explodeTexture)
gl.uniform1i(glCache.uSamplerEntity, 5)
gl.uniform1f(glCache.uLightLevelEntity, lightLevel)
gl.uniform1f(glCache.harmEffectEntity, 0)
gl.uniform1i(glCache.isTextureAtlasEntity,0)
gl.uniform3f(glCache.tintEntity, this.tint.r,this.tint.g,this.tint.b)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
gl.uniform1i(glCache.isTextureAtlasEntity,1)
gl.uniform3f(glCache.tintEntity, 1,1,1)
}
}
win.ExperienceOrb = ExperienceOrb
class crackEntity extends Entity{
constructor(tex, x,y,z){
const shape = shapes.cube
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
}
super(x, y, z, 0, 0, 0, 0, 0, 1.01, 1.01, 1.01, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, Infinity)
this.cached = {}
}
cacheTexture(tex){
const shape = shapes.cube
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
}
var vertices = new Float32Array(shapeVerts.flat(Infinity)),
faces = size
texture = new Float32Array(texture)
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
this.cached[tex] = this.vao
}
changeTexture(tex){
this.vao = this.cached[tex]
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const skysLight = world.getLight(x, y+1, z, 0) * (skyLight / 15)
const lightLevel = min(skysLight * 0.9 + 0.1, 1.0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerEntity, 0)
gl.uniform1f(glCache.uLightLevelEntity, lightLevel)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
class EntityFire extends Entity{
constructor(){
const shape = shapes.entityFire
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap["fire"]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
}
super(0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, Infinity)
}
render(ent){ //for burning entities
if(!ent) return
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(ent.x, ent.y+ent.offsetY+(ent.height*0.25), ent.z)
//modelMatrix.rotX(0)
modelMatrix.rotY(ent.yaw)
modelMatrix.scale(ent.width*1.5, ent.height*1.5, ent.depth*1.5) //taller than the entity
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerEntity, 0)
gl.uniform1f(glCache.uLightLevelEntity, 1)
gl.uniformMatrix4fv(glCache.uViewEntity, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
//character is seen in 3rd person mode
class Character extends Entity{
constructor(blockID){
const block = blockData[blockID & 255]
const tex = block.textures
const shape = shapes.cube
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(0, 0, 0, 0, 0, 0, 0, 0, 0.6, 1.7, 0.6, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, Infinity)
this.cached = {}
this.cached[blockID] = this.vao
this.die = false
//this.addPart("thing",this.faces,this.vao,1,0,0,1,1,1,0,0)
}
update(){
this.offsetY = -0.1 * cos((performance.now() - this.spawn) * 0.0015) + 0.15
if(this.harmEffect > 0){
this.harmEffect --
}
if(this.die){
this.dieEffect += 0.06
if(this.dieEffect > Math.PI2){
this.y = 0
this.die = false
this.dieEffect = 0
}
}
}
changeBlock(blockID){
if(this.cached[blockID])return this.vao = this.cached[blockID]
const block = blockData[blockID]
const tex = block.textures
const shape = block.shape
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
var vertices = new Float32Array(shapeVerts.flat(Infinity)),
faces = size
texture = new Float32Array(texture),
this.vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexEntity, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, texture, gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureEntity, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexEntity)
gl.enableVertexAttribArray(glCache.aTextureEntity)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
this.cached[blockID] = this.vao
}
}
window.Player = Character
//world.entities.push(new Cow(p2.x, p2.y, p2.z))
class Mob extends Entity{
constructor(){
super(...arguments)
this.moveTime = 0
this.spinTime = 0
this.spin = 0
this.dirx = 0
this.dirz = 0
this.health = 0
this.lastY = this.y
}
AI(now){
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
if(this.moveTime > 0){
this.moveTime --
this.velx += this.dirx / 100
this.velz += this.dirz / 100
}else if(this.spinTime > 0){
this.spinTime --
this.yaw += this.spin
if(this.yaw > Math.PI*2){
this.yaw -= Math.PI*2
}
if(this.yaw < 0){
this.yaw += Math.PI*2
}
}else if(Math.random()>0.8){
if(Math.random() > 0.5){
this.spinTime = Math.random()*60
this.spin = (Math.random()>0.5 ? 0.05 : -0.05)
}else{
this.moveTime = Math.random()*60
this.dirx = Math.cos(this.yaw)
this.dirz = -Math.sin(this.yaw)
}
}
if(this.moveTime > 0 && Math.random() > 0.5){
var b = world.getBlock(round(this.x+this.dirx), this.y, round(this.z+this.dirz))
if(this.onGround && blockData[b].solid && !blockData[b].liquid){
this.vely = 0.3
}
if(blockData[b].liquid){
this.vely += 0.05
}
}
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
//health and death & stuff
if(this.onGround){
let fall = this.lastY - this.y
this.lastY = this.y
if(fall > 3){
let damage = Math.floor(fall-3)
this.health -= damage
this.harmEffect = 40
}
}
if(this.harmEffect > 0){
this.harmEffect --
}
if(this.health <= 0){
this.health = -1
this.dieEffect += 0.06
if(this.dieEffect > Math.PI2){
this.canDespawn = true
poof(this.x,this.y,this.z)
}
}
this.AI(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
}
onhit(damage){
this.health -= damage
this.harmEffect = 40
}
}
class Cow extends Mob{
constructor(x,y,z){
const tex = ["cow","cow","cowSide","cowSide","cowSide","cowSide"]
const shape = shapes.cow
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < blockSides.length; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(x, y, z, 0, 0, 0, 0, 0, 1, 1, 1, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, 1500000)
this.type = "Cow"
this.health = 10
}
}
class Pig extends Mob{
constructor(x,y,z){
const tex = new Array(6).fill("pinkWool")
const shape = shapes.cow
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < blockSides.length; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex[texNum]]]
let tx = texVerts[0]
let ty = texVerts[1]
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + texShapeVerts[0]
texture[index + 1] = ty + texShapeVerts[1]
texture[index + 2] = tx + texShapeVerts[2]
texture[index + 3] = ty + texShapeVerts[3]
texture[index + 4] = tx + texShapeVerts[4]
texture[index + 5] = ty + texShapeVerts[5]
texture[index + 6] = tx + texShapeVerts[6]
texture[index + 7] = ty + texShapeVerts[7]
index += 8
}
texNum++
}
super(x, y, z, 0, 0, 0, 0, 0, .9, .9, .9, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, 1500000)
this.type = "Pig"
this.health = 10
}
}
class Particle extends Entity{
constructor() {
super(...arguments)
this.rotationMatrix = new Matrix() //for pointing at camera
}
facePlayer(){
//var magnitude = dist3(this.x,this.y,this.z,p.x,p.y,p.z)
this.yaw = atan2(p.z - this.z, p.x-this.x)
var adjacent = dist2(this.x,this.z,p.x,p.z)
this.pitch = atan2(p.y - this.y, adjacent)
/*var r = this.rotationMatrix
r.identity()
var e = r.elements
var up = vec4
up.x = 0
up.y = 1
up.z = 0
e[12] = this.x
e[13] = this.y
e[14] = this.z
var z = vec1
z.x = this.x - p.x
z.y = this.y - p.y
z.z = this.z - p.z
z.normalize()
var x = up.crossProduct(z.x,z.y,z.z, vec2)
x.normalize()
var y = z.crossProduct(x.x,x.y,x.z, vec3)
y.normalize()
e[0] = x.x
e[1] = x.y
e[2] = x.z
e[4] = y.x
e[5] = y.y
e[6] = y.z
e[8] = z.x
e[9] = z.y
e[10] = z.z*/
/*/less code, more computing
var dx = p.x-this.x;
var dy = p.y-this.y;
var dz = p.z-this.z;
var rxy = Math.sqrt( Math.pow(dx,2) + Math.pow(dy,2) );
var lambda = Math.atan(dy/dx);
var phi = Math.atan(dz/rxy)
if (dx < 0) phi = phi + Math.PI;
if (dz < 0) lambda = -1 * lambda;
this.pitch = rxy
this.yaw = lambda*/
}
updateVelocity(now) {
let dt = (now - this.lastUpdate) / 33
dt = dt > 2 ? 2 : dt
this.vely += -0.02 * dt
if (this.vely < -1.5) {
this.vely = -1.5
}
let drag = this.onGround ? 0 : 0.9
this.velz += (this.velz * drag - this.velz) * dt
this.velx += (this.velx * drag - this.velx) * dt
// this.vely += (this.vely * 0.9 - this.vely) * dt
}
update() {
let now = performance.now()
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
this.facePlayer()
}
render() {
const offsetY = this.offsetY
const modelMatrix = new Matrix();
modelMatrix.identity()
//var modelMatrix = this.rotationMatrix
modelMatrix.translate(this.x, this.y + offsetY, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.uniform1i(glCache.uSamplerParticle, 0)
gl.uniform1f(glCache.uLightLevelParticle, lightLevel)
gl.uniformMatrix4fv(glCache.uViewParticle, false, modelViewProjectionMatrix.elements)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
}
}
class BlockParticle extends Particle{
constructor(tex, x,y,z){
let s=4/16
let bs = 3/16 //particle size
let p=1/(16+4)
let offX = random(p), offY = random(p)
let velx = (Math.random()-0.5) * 0.3,
vely = Math.random() * 0.2,
velz = (Math.random()-0.5) * 0.3
const shape = shapes.blockParticle
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texVerts = textureCoords[textureMap[tex]]
let tx = texVerts[0] + offX
let ty = texVerts[1] + offY
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = tx + (texShapeVerts[0]*s)
texture[index + 1] = ty + (texShapeVerts[1]*s)
texture[index + 2] = tx + (texShapeVerts[2]*s)
texture[index + 3] = ty + (texShapeVerts[3]*s)
texture[index + 4] = tx + (texShapeVerts[4]*s)
texture[index + 5] = ty + (texShapeVerts[5]*s)
texture[index + 6] = tx + (texShapeVerts[6]*s)
texture[index + 7] = ty + (texShapeVerts[7]*s)
index += 8
}
}
super(x, y, z, 0, 0, velx, vely, velz, bs, bs, bs, new Float32Array(shapeVerts.flat(Infinity)), new Float32Array(texture), size, Math.random()*3000)
}
}
win.BlockParticle = BlockParticle
class GenericParticle extends Particle{
constructor(x,y,z){
super(x, y, z, rand(-0.04, 0.04), 0, rand(-0.04, 0.04), 0, 0, 0.5, 0.5, 0.5, null, null, explodeVaos.size, rand(500, 2000), genericVaos[floor(rand(8))])
this.brightness = rand(0.8, 1)
this.speed = rand(0.01, 0.05)
}
update(){
this.vely = this.speed
let now = performance.now()
this.updateVelocity(now)
this.move(now)
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
this.facePlayer()
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0) * this.brightness
gl.bindTexture(gl.TEXTURE_2D, genericTexture)
gl.uniform1i(glCache.uSamplerParticle, 6) //explode texture
gl.uniform1f(glCache.uLightLevelParticle, lightLevel)
gl.uniformMatrix4fv(glCache.uViewParticle, false, modelViewProjectionMatrix.elements)
gl.uniform1i(glCache.isTextureAtlasParticle, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
gl.uniform1i(glCache.isTextureAtlasParticle, 1)
}
}
win.GenericParticle = GenericParticle
function poof(x,y,z){
for(var i=0; i<20; i++){
world.particles.push(new GenericParticle(x,y,z))
}
}
win.poof = poof
class ExplodeParticle extends Particle{
constructor(x,y,z){
var vao = explodeVaos[8]
var frameTime = 25
super(x, y, z, 0, 0, 0, 0, 0, 2, 2, 2, null, null, explodeVaos.size, explodeVaos.length*frameTime, vao)
this.index = 0
this.brightness = (Math.random()/2)+0.5
this.frameTime = frameTime
}
update(){
let now = performance.now()
if (now - this.spawn > this.despawns) {
this.canDespawn = true
}
this.index = Math.floor((now - this.spawn) / this.frameTime)
this.vao = explodeVaos[this.index]
this.facePlayer()
}
render(){
const modelMatrix = new Matrix();
modelMatrix.identity()
modelMatrix.translate(this.x, this.y, this.z)
modelMatrix.rotX(this.pitch)
modelMatrix.rotY(this.yaw)
modelMatrix.scale(this.width, this.height, this.depth)
const viewMatrix = p.transformation.elements
const proj = p.projection
const projectionMatrix = [proj[0], 0, 0, 0, 0, proj[1], 0, 0, 0, 0, proj[2], proj[3], 0, 0, proj[4], 0]
const modelViewProjectionMatrix = new Matrix()
modelViewProjectionMatrix.identity()
modelViewProjectionMatrix.mult(projectionMatrix)
modelViewProjectionMatrix.mult(viewMatrix)
modelViewProjectionMatrix.mult(modelMatrix.elements)
// row major to column major
modelViewProjectionMatrix.transpose()
const x = round(this.x)
const y = round(this.y)
const z = round(this.z)
const blockLight = world.getLight(x, y, z, 1)
const skysLight = world.getLight(x, y, z, 0) * (skyLight / 15)
const lightLevel = min(max(skysLight, blockLight) * 0.9 + 0.1, 1.0) * this.brightness
gl.bindTexture(gl.TEXTURE_2D, explodeTexture)
gl.uniform1i(glCache.uSamplerParticle, 3) //explode texture
gl.uniform1f(glCache.uLightLevelParticle, lightLevel)
gl.uniformMatrix4fv(glCache.uViewParticle, false, modelViewProjectionMatrix.elements)
gl.uniform1i(glCache.isTextureAtlasParticle, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(this.vao)
gl.drawElements(gl.TRIANGLES, 6 * this.faces, gl.UNSIGNED_INT, 0)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
gl.uniform1i(glCache.isTextureAtlasParticle, 1)
}
}
win.ExplodeParticle = ExplodeParticle
function initParticles(){
win.explodeVaos = explodeVaos
let shape = shapes.blockParticle
explodeVaos.size = shape.size
let shapeVerts = shape.verts
for(let y=0; y<4; y++){
for(let x=0; x<4; x++){
var texSize = 1/4
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let tx = x / 4
let ty = y / 4
texture[index    ] = tx + texSize
texture[index + 1] = ty
texture[index + 2] = tx
texture[index + 3] = ty
texture[index + 4] = tx
texture[index + 5] = ty + texSize
texture[index + 6] = tx + texSize
texture[index + 7] = ty + texSize
index += 8
}
}
var vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shapeVerts.flat(Infinity)), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexParticle, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texture), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureParticle, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexParticle)
gl.enableVertexAttribArray(glCache.aTextureParticle)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
explodeVaos.push(vao)
}
}
//xp
shape = shapes.blockParticle
experienceOrbVaos.size = shape.size
shapeVerts = shape.verts
for(let y=0; y<4; y++){
for(let x=0; x<4; x++){
var texSize = 1/4
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let tx = x / 4
let ty = y / 4
texture[index    ] = tx + texSize
texture[index + 1] = ty
texture[index + 2] = tx
texture[index + 3] = ty
texture[index + 4] = tx
texture[index + 5] = ty + texSize
texture[index + 6] = tx + texSize
texture[index + 7] = ty + texSize
index += 8
}
}
var vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shapeVerts.flat(Infinity)), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexParticle, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texture), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureParticle, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexParticle)
gl.enableVertexAttribArray(glCache.aTextureParticle)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
experienceOrbVaos.push(vao)
}
}
//generic particle
shape = shapes.blockParticle
genericVaos.size = shape.size
shapeVerts = shape.verts
for(let y=0; y<3; y++){
for(let x=0; x<3; x++){
var texSize = 1/3
let blockSides = Object.keys(Block)
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let tx = x / 3
let ty = y / 3
texture[index    ] = tx + texSize
texture[index + 1] = ty
texture[index + 2] = tx
texture[index + 3] = ty
texture[index + 4] = tx
texture[index + 5] = ty + texSize
texture[index + 6] = tx + texSize
texture[index + 7] = ty + texSize
index += 8
}
}
var vao = glExtensions.vertex_array_object.createVertexArrayOES()
const verticesBuffer = gl.createBuffer()
const textureBuffer = gl.createBuffer()
glExtensions.vertex_array_object.bindVertexArrayOES(vao)
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bindBuffer(gl.ARRAY_BUFFER, verticesBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shapeVerts.flat(Infinity)), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aVertexParticle, 3, gl.FLOAT, false, 0, 0)
gl.bindBuffer(gl.ARRAY_BUFFER, textureBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(texture), gl.STATIC_DRAW)
gl.vertexAttribPointer(glCache.aTextureParticle, 2, gl.FLOAT, false, 0, 0)
gl.enableVertexAttribArray(glCache.aVertexParticle)
gl.enableVertexAttribArray(glCache.aTextureParticle)
glExtensions.vertex_array_object.bindVertexArrayOES(null)
genericVaos.push(vao)
}
}
}
let analytics = {
totalTickTime: 0,
worstFrameTime: 0,
totalRenderTime: 0,
totalFrameTime: 0,
lastUpdate: 0,
frames: 1,
displayedTickTime: "0",
displayedRenderTime: "0",
displayedFrameTime: "0",
displayedwFrameTime: 0,
fps: 0,
}
function chunkDist(c) {
let dx = p.x - c.x
let dz = p.z - c.z
if (dx > 16) {
dx -= 16
} else if (dx > 0) {
dx = 0
}
if (dz > 16) {
dz -= 16
} else if (dz > 0) {
dz = 0
}
return Math.sqrt(dx * dx + dz * dz)
}
function sortChunks(c1, c2) { //Sort the list of chunks based on distance from the player
let dx1 = p.x - c1.x - 8
let dy1 = p.z - c1.z - 8
let dx2 = p.x - c2.x - 8
let dy2 = p.z - c2.z - 8
return dx1 * dx1 + dy1 * dy1 - (dx2 * dx2 + dy2 * dy2)
}
function fillReqs(x, z) {
// Chunks must all be loaded first.
var done = true
for (let i = x - 3; i <= x + 3; i++) {
for (let j = z - 3; j <= z + 3; j++) {
let chunk = world.loaded[(i + world.offsetX) * world.lwidth + j + world.offsetZ]
if (!chunk.generated) {
world.generateQueue.push(chunk)
done = false
}
if (!chunk.populated && i >= x - 2 && i <= x + 2 && j >= z - 2 && j <= z + 2) {
world.populateQueue.push(chunk)
done = false
}
if (world.loadFrom.length && !chunk.loaded && i >= x - 1 && i <= x + 1 && j >= z - 1 && j <= z + 1) {
world.loadQueue.push(chunk)
done = false
} else if (!world.loadFrom.length && !chunk.loaded) {
chunk.loaded = true
}
if (!chunk.lit && i >= x - 1 && i <= x + 1 && j >= z - 1 && j <= z + 1) {
world.lightingQueue.push(chunk)
done = false
}
}
}
return done
}
function maxDist(x, z, x2, z2) {
let ax = abs(x2 - x)
let az = abs(z2 - z)
return max(ax, az)
}
function renderFilter(chunk) {
return maxDist(chunk.x >> 4, chunk.z >> 4, p.cx, p.cz) <= settings.renderDistance
}
function debug(message) {
let ellapsed = performance.now() - debug.start
if (ellapsed > 30) {
console.log(message, ellapsed.toFixed(2), "milliseconds")
}
}
function login(){
return new Promise((resolve, reject) => {
var w = width / 2
var h = height / 2
var x = w - (w/2)
var y = h - (h/2)
var w = open("https://www.nathaniel2006.repl.co/website/login.html", "login","resizable=no,width="+w+",height="+h+",top="+y+",left="+x)
function onmsg(event){
if (event.source !== w) return;
if (event.data.startsWith("logged:")){
w.close()
window.removeEventListener("message", onmsg);
resolve(event.data.replace("logged:",''))
}else if(event.data === "canceled"){
w.close()
window.removeEventListener("message", onmsg);
reject()
}
}
window.addEventListener("message", onmsg);
})
}
var achexUsername = "player"+Date.now()
win.username = ""
async function loggedIn(){
var logged = false;
await fetch("https://server.nathaniel2006.repl.co/getuser", {credentials:"include"}).then(r => r.text()).then(r => logged=r)
if(logged){
username = logged
return logged
}else{
if(confirm("Your not logged in. Head over to www.nathaniel2006.repl.co/login.html to login.\n\nPress OK to login,")){
var logged
await login().then(r => logged=r).catch(r => logged=r)
if(logged){
username = logged
return logged
}
}
return false
changeScene("main menu")
}
}
async function getWorlds(pingCallback){
if(!navigator.onLine) return "offline"
var logged = await loggedIn()
if(!logged){
return "notLoggedIn"
}
var worlds
await fetch("https://server.nathaniel2006.repl.co/worlds").then(r => r.json()).then(r => worlds=r)
if(pingCallback){
fetch("https://server.nathaniel2006.repl.co/worldsPing").then(r => r.json()).then(pingCallback)
}
return worlds
}
var multiplayer = null
var players = {}
win.playersInv = {}
function hasPlayer(username){
for(var i in players){
if(players[i].username === username) return true
}
}
function getPlayerByUsername(username){
for(var i in players){
if(players[i].username === username) return players[i]
}
}
/*const hub = "Minecraft"
function sendHub(obj){
let str = JSON.stringify({
"toH": hub,
"msg": JSON.stringify(obj)
})
multiplayer.send(str)
return str
}
function sendUser(user, obj){
let str = JSON.stringify({
"to": user,
"msg": JSON.stringify(obj)
})
multiplayer.send(str)
return str
}*/
function send(msg, to){
msg.FROM = achexUsername
msg.USER = username
if(to) msg.TO = to
multiplayer.send(JSON.stringify(msg))
}
var host
function initMultiplayer(target){
if(multiplayer) return
var ban = []
host = false
if(!target){
target = world.id || 0
host = true
}
players = {} //empty
multiplayer = new WebSocket("wss://server.nathaniel2006.repl.co/ws?target="+target)
multiplayer.onopen = e => {
/*multiplayer.send(JSON.stringify({
"auth": achexUsername,
"passwd":"none"
}))
multiplayer.send(JSON.stringify({
"joinHub":hub,
"passwd":"none"
}))*/
send({
"type":"connect",
username: username,
id: achexUsername
})
if(host){
send({
"type":"init",
name: world.name
})
}
send({
"type":"getSave"
})
var invStuff = {}
multiplayer.pos = setInterval(() => {
if(world){
invStuff.invItems = invItems
invStuff.hotbar = inventory.hotbar
invStuff.x = p.x
invStuff.y = p.y
invStuff.z = p.z
invStuff.survivStr = world.getSurvivStr()
send({type:"pos", data:p3, host:host, dimension: world.type, inv:invStuff})
if(host){
send({type:"entityPosAll", data: world.getEntities()})
}
}
}, 500)
}
multiplayer.onmessage = msg => {
let packet = JSON.parse(msg.data)
var author = packet.FROM //should be the id
var data = packet//.msg ? JSON.parse(packet.msg) : {}
if(data.type === "ping"){
send({
type:"pong",
data:Date.now()
})
}else if(data.type === "getSave" && host){
if(ban.includes(data.USER)){
send({
type: "ban",
data: data.USER
}, author)
}else{
send({
type:"loadSave",
data:world.getSaveString(),
nether:world.getNetherSaveString(),
mod: world.mod,
id: world.id || Date.now(),
time: worldTime,
dimension: world.type || "overworld",
cheats:cheats,
inv: playersInv[data.USER]
}, author)
}
}else if(data.type === "loadSave"){
dimensions = {
overworld: new World(),
nether: new World("nether")
}
world = dimensions.overworld
world.id = data.id
if (data.data) {
try {
world.loadSave(data.data)
}catch(e) {
alert("Unable to load save code")
return
}
}
if (data.nether) {
let world = dimensions.nether
try {
world.loadSave(data.nether)
}catch(e) {
alert("Unable to load nether save code")
return
}
}
world.mod = data.mod
if(data.mod){
try{
var mod = Object.constructor("return "+data.mod)()
mod()
}catch(e){console.log("error loading mod: "+e)}
}
if(survival){
setHotbar([0,0,0,0,0,0,0,0,0])
}
world = dimensions[data.dimension || "overworld"]
worldTime = data.time
cheats = data.cheats
if(data.inv){
invItems = data.inv.invItems
inventory.hotbar = data.inv.hotbar
if(data.inv.x){
p.x = data.inv.x
p.y = data.inv.y
p.z = data.inv.z
}
if(data.survivStr) world.loadSurvivStr(data.survivStr)
}
changeScene("loading")
}else if(data.type === "pos"){
var pos = data.data
if(!players[author]){
players[author] = new Player(abs( (pos.username || "").hashCode()) % 80 + 1)
}
let thisplayer = players[author]
thisplayer.x = pos.x
thisplayer.y = pos.y - 1
thisplayer.z = pos.z
thisplayer.yaw = pos.ry
thisplayer.dimension = data.dimension
thisplayer.id = author
thisplayer.survival = pos.survival
thisplayer.harmEffect = pos.harmEffect
if(thisplayer.username !== pos.username){
thisplayer.username = pos.username
thisplayer.changeBlock(abs((pos.username || "").hashCode()) % 80 + 1)
}
thisplayer.crackPos = pos.crackPos
thisplayer.crack = pos.crack //crack number
thisplayer.burning = pos.burning
if(data.host){
worldTime = pos.time
}
playersInv[data.USER] = data.inv
}else if(data.type === "dc"){
delete players[data.data]
}else if(data.type === "setBlock"){
let pos = data.data
let world = dimensions[pos.dimension]
let prevBlock = world.getBlock(pos.x, pos.y, pos.z)
world.setBlock(pos.x, pos.y, pos.z, pos.block, false, false, true)
}else if(data.type === "entityPos"){
let world = getWorld(data.dimension)
world.posEntity(data, true)
}else if(data.type === "entityPosAll"){
var arr = data.data
//if(arr.length !== world.entities.length) world.entities = []
for(var i=0; i<arr.length; i++){
let world = getWorld(arr[i].dimension)
world.posEntity(arr[i], true)
}
}else if(data.type === "entityDelete"){
world.deleteEntity(data.id, true)
}else if(data.type === "achievment"){
Messages.add(data.USER+" earned the achievment: "+data.data)
}else if(data.type === "hit"){
if(survival){
damage(data.data || 1, data.username+" killed "+username)
p.velocity.x += data.velx
p.velocity.z += data.velz
}
}else if(data.type === "harmEffect"){
players[data.id].harmEffect = 40
}else if(data.type === "kill"){
dieMessage = data.data
die()
}else if(data.type === "die"){
var ent = players[data.id]
ent.die = true
poof(ent.x, ent.y, ent.z)
Messages.add(data.message)
}else if(data.type === "message"){
if(data.fromServer){
Messages.add(data.data)
}else{
Messages.write(data.data, data.username)
}
}else if(data.type === "playSound"){
var volume = 1
if((data.x || data.x === 0)){
volume = posSound(data.x,data.y,data.z)
}
if(data.volume) volume *= data.volume
playSound(data.data, 0, volume)
}else if(data.type === "eval"){
try{
eval(data.data)
}catch(e){
console.error(e)
}
}else if(data.type === "error"){
alert(data.data)
}
}
multiplayer.onclose = () => {
alert("Multiplayer connection lost!")
clearInterval(multiplayer.pos)
multiplayer = null
}
multiplayer.onerror = e => {
console.log("Multiplayer error!", e)
multiplayer.close()
}
win.ban = username => {
if(!host) return alert("Only the host can ban")
send({
type: "ban",
data: username
})
if(!ban.includes(username)) ban.push(username)
}
win.unban = username => {
if(!host) return alert("Only the host can unban")
if(ban.includes(username)) {
var i = ban.indexOf(username)
if(i === -1) return
ban.splice(i,1)
}
}
}
function getNetherBiome(biome) {
if(biome > 0.4 && biome < 0.5){
return 1
}else if(biome > 0.4){
return 2
}
return 0
}
function getBiome(biome){
if(biome > 0.6){
return "snowyField"
}else if(biome > 0.5){
return "desert"
}else if(biome > 0.4){
return "field"
}else if(biome > 0.36){
return "jungle"
}else if(biome > 0.3){
return "giantJungle"
}else{
return "oakForest"
}
}
function getDimension(){
if(world.type === ""){
return "overworld"
}else return world.type
}
function getWorld(d){
if(!d){
d = "overworld"
}
return dimensions[d]
}
win.getWorld = getWorld
let skyLight = 0
let worldTime = 0 //current in-game time
let fogDist = 16
class World {
constructor(type) {
generatedChunks = 0
fogDist = 16
p.y = superflat ? 6 : (round(noiseProfile.noise(8 * generator.smooth, 8 * generator.smooth) * generator.height) + 2 + generator.extra)
this.type = type || ""
this.spawnPoint = {
x: 0,
y: p.y,
z: 0
}
//Initialize the world's arrays
this.chunks = []
this.loaded = []
this.sortedChunks = []
this.doubleRenderChunks = []
this.offsetX = 0
this.offsetZ = 0
this.lwidth = 0
this.chunkGenQueue = []
this.populateQueue = []
this.generateQueue = []
this.lightingQueue = []
this.loadQueue = []
this.meshQueue = []
this.loadFrom = []
this.entities = []
this.particles = []
this.lastChunk = ","
this.edited = false
this.saveStr = null
}
genChunk(chunk) {
let x = chunk.x >> 4
let z = chunk.z >> 4
let trueX = chunk.x
let trueZ = chunk.z
if (chunk.generated) {
return false
}
let hide = !loadString
let smoothness = generator.smooth
let hilliness = generator.height
let biomeSmooth = generator.biomeSmooth
//{ for the nether terrain
const biomeSize = 1//0.001 // smaller = bigger
const flatness = 40 // bigger = flatter
const overhang = 3 // bigger = more overhang; flatter = less overhang
const bottom = 4 // Minimum height of the ground
const hillSize = 0.006 // smaller = bigger; 0.005 to 0.01 seems the be a reasonable range
//}
let gen = 0, floatGen = 0
for (let i = 0; i < 16; i++) {
for (let k = 0; k < 16; k++) {
floatGen = noiseProfile.noise((trueX + i) * smoothness, (trueZ + k) * smoothness) * hilliness + generator.extra
gen = superflat === "island" && this.type === "" ? win.islandGenerator.GetHeight(x*16+i, z*16+k) : (superflat ? 4 : Math.round(floatGen))
if(this.type === "nether" && superflat){
gen = Math.round(floatGen)
}
chunk.tops[k * 16 + i] = gen
if(this.type === "nether"){
let biome = noiseProfile.noise((trueX + i) * biomeSmooth, (trueZ + k) * biomeSmooth)
let b = getNetherBiome(biome)
let block = blockIds.netherrack
if(b === 1){
block = blockIds.warpedNylium
}else if(b === 2){
block = blockIds.crimsonNylium
}
const smo = noise((trueX + i) * biomeSize, (trueZ + k) * biomeSize) * flatness + 40
let top = 0
let solid = true
for (let j = 1; j < 128; j++) {
if (noise((trueX + i)/smo, overhang*j/smo, (trueZ + k)/smo) - (j - bottom) * hillSize > 0) {
chunk.setBlock(i, j, k, blockIds.netherrack)
top = j
solid = true
} else if (solid) {
chunk.setBlock(i, j - 1, k, block)
/*if (chunk.getBlock(i, j - 2, k)) chunk.setBlock(i, j - 2, k, block)
if (chunk.getBlock(i, j - 3, k)) chunk.setBlock(i, j - 3, k, block)
if (chunk.getBlock(i, j - 4, k)) chunk.setBlock(i, j - 4, k, block)*/
solid = false
} else if(j < 80){
chunk.setBlock(i, j-1, k, blockIds.Lava)
if(chunk.getBlock(i, j - 2, k) === block) chunk.setBlock(i, j-2, k, blockIds.netherrack)
}
}
chunk.tops[k * 16 + i] = top
chunk.setBlock(i, 0, k, blockIds.bedrock)
block = blockIds.netherrack
for(let j=1; j<gen; j++){
chunk.setBlock(i, maxHeight - 50 - j, k, block)
}
chunk.setBlock(i,maxHeight-50,k, blockIds.bedrock)
chunk.ceils[k * 16 + i] = maxHeight - 50 - gen
}else if (superflat === "island") {
if (win.islandGenerator.GetWaterDepth(x*16+i, z*16+k) > 0) {
chunk.setBlock(i, gen, k, blockIds.Water);
chunk.setBlock(i, gen - 1, k, blockIds.Water)
chunk.setBlock(i, gen - 2, k, blockIds.dirt)
chunk.setBlock(i, gen - 3, k, blockIds.dirt)
}   else {
let biomeHere =win.islandGenerator.GetBiomeType(x*16+i, z*16+k);
if (biomeHere === -3161286) {
chunk.setBlock(i, gen, k, blockIds.sand)
chunk.setBlock(i, gen - 1, k, blockIds.sand)
chunk.setBlock(i, gen - 2, k, blockIds.sand)
chunk.setBlock(i, gen - 3, k, blockIds.sand)
}   else if (biomeHere === -1) {
chunk.setBlock(i, gen, k, blockIds.whiteConcrete)
chunk.setBlock(i, gen - 1, k, blockIds.whiteConcrete)
chunk.setBlock(i, gen - 2, k, blockIds.stone)
chunk.setBlock(i, gen - 3, k, blockIds.stone)
}   else if (biomeHere === -4934476 || biomeHere === -8355712 || biomeHere === -6963874) {
chunk.setBlock(i, gen, k, blockIds.stone)
chunk.setBlock(i, gen - 1, k, blockIds.stone)
chunk.setBlock(i, gen - 2, k, blockIds.stone)
chunk.setBlock(i, gen - 3, k, blockIds.stone)
} else if (biomeHere === -65536) {
chunk.setBlock(i, gen, k, blockIds.Lava)
chunk.setBlock(i, gen - 1, k, blockIds.stone)
chunk.setBlock(i, gen - 2, k, blockIds.stone)
chunk.setBlock(i, gen - 3, k, blockIds.stone)
} else {
chunk.setBlock(i, gen, k, blockIds.grass)
chunk.setBlock(i, gen - 1, k, blockIds.dirt)
chunk.setBlock(i, gen - 2, k, blockIds.dirt)
chunk.setBlock(i, gen - 3, k, blockIds.dirt)
}
}
} else if(superflat){
chunk.tops[k * 16 + i] = gen;
chunk.setBlock(i, gen, k, blockIds.grass);
chunk.setBlock(i, gen - 1, k, blockIds.dirt);
chunk.setBlock(i, gen - 2, k, blockIds.dirt);
chunk.setBlock(i, gen - 3, k, blockIds.dirt);
}else{
let biome = noiseProfile.noise((trueX + i) * biomeSmooth, (trueZ + k) * biomeSmooth);
var b = getBiome(biome)
if(b === "desert"){
chunk.tops[k * 16 + i] = gen;
chunk.setBlock(i, gen, k, blockIds.sand);
chunk.setBlock(i, gen - 1, k, blockIds.sand);
chunk.setBlock(i, gen - 2, k, blockIds.sandstone);
chunk.setBlock(i, gen - 3, k, blockIds.sandstone);
if(gen<60) {
gen = 59;
chunk.setBlock(i, gen+1, k, blockIds.Water | SLAB);
chunk.setBlock(i, gen, k, blockIds.Water);
chunk.setBlock(i, gen - 1, k, blockIds.Water);
chunk.setBlock(i, gen - 2, k, blockIds.gravel);
chunk.setBlock(i, gen - 3, k, blockIds.gravel);
}
if(gen>120){
chunk.setBlock(i, gen, k, blockIds.stone);
}
if(gen>140){
chunk.setBlock(i, gen, k, blockIds.sand);
}
}
if(b === "field" || b === "oakForest"){
chunk.tops[k * 16 + i] = gen;
chunk.setBlock(i, gen, k, blockIds.grass);
chunk.setBlock(i, gen - 1, k, blockIds.dirt);
chunk.setBlock(i, gen - 2, k, blockIds.dirt);
chunk.setBlock(i, gen - 3, k, blockIds.dirt);
if(gen<60) {
gen = 59;
chunk.setBlock(i, gen+1, k, blockIds.Water | SLAB);
chunk.setBlock(i, gen, k, blockIds.Water);
chunk.setBlock(i, gen - 1, k, blockIds.Water);
chunk.setBlock(i, gen - 2, k, blockIds.gravel);
chunk.setBlock(i, gen - 3, k, blockIds.gravel);
}
}
if(b === "snowyField"){
chunk.tops[k * 16 + i] = gen;
if(gen >= 60){
var h = ceil(((floatGen + 0.5) % 1) * 8)
switch(h){//really smooth terrain!
case 1:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER1)
break
case 2:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER2)
break
case 3:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER3)
break
case 4:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER4)
break
case 5:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER5)
break
case 6:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER6)
break
case 7:
chunk.setBlock(i, gen + 1, k, blockIds.snow | LAYER7)
break
case 8:
chunk.setBlock(i, gen + 1, k, blockIds.snowBlock)
break
}
chunk.setBlock(i, gen, k, blockIds.grass | CROSS);
chunk.setBlock(i, gen - 1, k, blockIds.dirt);
chunk.setBlock(i, gen - 2, k, blockIds.dirt);
chunk.setBlock(i, gen - 3, k, blockIds.dirt);
}
if(gen<60) {
gen = 59;
chunk.setBlock(i, gen+1, k, blockIds.ice);
chunk.setBlock(i, gen, k, blockIds.ice);
chunk.setBlock(i, gen - 1, k, blockIds.Water);
chunk.setBlock(i, gen - 2, k, blockIds.gravel);
chunk.setBlock(i, gen - 3, k, blockIds.gravel);
}
}
if(b === "jungle" || b === "giantJungle"){
chunk.tops[k * 16 + i] = gen;
chunk.setBlock(i, gen, k, blockIds.mossBlock);
chunk.setBlock(i, gen - 1, k, blockIds.dirt);
chunk.setBlock(i, gen - 2, k, blockIds.dirt);
chunk.setBlock(i, gen - 3, k, blockIds.dirt);
if(gen<60) {
chunk.setBlock(i, 60, k, blockIds.Water | SLAB);
for(var y=59; y>=gen; y--){
chunk.setBlock(i, y, k, blockIds.Water);
}
chunk.setBlock(i, gen, k, blockIds.gravel);
chunk.setBlock(i, gen - 1, k, blockIds.gravel);
}
}
}
if(this.type !== "nether"){
for (let j = 1; j < gen - 3; j++) {
chunk.setBlock(i, j, k, blockIds.stone)
}
chunk.setBlock(i, 0, k, blockIds.bedrock)
}
}
}
chunk.generated = true
}
getAdjacentSubchunks(x, y, z, lights) {
let minChunkX = x - 16 >> 4
let maxChunkX = x + 16 >> 4
let minChunkY = y - 16 >> 4
let maxChunkY = y + 16 >> 4
let minChunkZ = z - 16 >> 4
let maxChunkZ = z + 16 >> 4
let section = null
let ret = []
for (x = minChunkX; x <= maxChunkX; x++) {
for (let y = minChunkY; y <= maxChunkY; y++) {
for (z = minChunkZ; z <= maxChunkZ; z++) {
if (y < 0) {
ret.push(lights ? emptySection.light : emptySection.blocks)
} else if (this.chunks[x] && this.chunks[x][z]) {
section = this.chunks[x][z].sections[y] || emptySection
ret.push(lights ? section.light : section.blocks)
} else {
ret.push(lights ? emptySection.light : emptySection.blocks)
}
}
}
}
return ret
}
updateBlock(x, y, z, lazy, leaveMe) {
let chunk = this.chunks[x >> 4] && this.chunks[x >> 4][z >> 4]
if (chunk && chunk.buffer) {
chunk.updateBlock(x & 15, y, z & 15, this, lazy, leaveMe)
}
}
getChunk(x, z) {
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
return this.loaded[X * this.lwidth + Z]
}
getWorldBlock(x, y, z) {
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return blockIds.air
}
return this.chunks[x >> 4][z >> 4].getBlock(x & 15, y, z & 15)
}
getBlock(x, y, z) {
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
if (y > maxHeight) {
return blockIds.air
} else if (y < 0) {
return blockIds.air
} else if (X < 0 || X >= this.lwidth || Z < 0 || Z >= this.lwidth) {
return this.getWorldBlock(x, y, z)
}
return this.loaded[X * this.lwidth + Z].getBlock(x & 15, y, z & 15)
}
setBlock(x, y, z, blockID, lazy, leaveSelf, remote, keepTags) {
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return
}
if(y < 0) return
let chunk = this.chunks[x >> 4][z >> 4]
let xm = x & 15
let zm = z & 15
if (blockID) {
chunk.setBlock(xm, y, zm, blockID, !lazy)
let data = blockData[blockID]
if (!lazy && chunk.buffer && (!data.transparent || data.lightLevel) && screen !== "loading") {
this.updateLight(x, y, z, true, data.lightLevel)
}
} else {
let data = blockData[chunk.getBlock(xm, y, zm)]
chunk.deleteBlock(xm, y, zm, !lazy)
if (!lazy && chunk.buffer && (!data.transparent || data.lightLevel) && screen !== "loading") {
this.updateLight(x, y, z, false, data.lightLevel)
}
}
if(!keepTags)chunk.setTags(xm, y, zm, null)
if (lazy) {
return
}
if(multiplayer && !remote){
send({type:"setBlock", data:{x:x, y:y, z:z, block:blockID, dimension:getDimension()}})
}
//Update the 6 adjacent blocks and 1 changed block
if (xm && xm !== 15 && zm && zm !== 15) {
chunk.updateBlock(xm - 1, y, zm, this, lazy)
chunk.updateBlock(xm + 1, y, zm, this, lazy)
chunk.updateBlock(xm, y - 1, zm, this, lazy)
chunk.updateBlock(xm, y + 1, zm, this, lazy)
chunk.updateBlock(xm, y, zm - 1, this, lazy)
chunk.updateBlock(xm, y, zm + 1, this, lazy)
}
else {
this.updateBlock(x - 1, y, z, lazy)
this.updateBlock(x + 1, y, z, lazy)
this.updateBlock(x, y - 1, z, lazy)
this.updateBlock(x, y + 1, z, lazy)
this.updateBlock(x, y, z - 1, lazy)
this.updateBlock(x, y, z + 1, lazy)
}
chunk.updateBlock(xm, y, zm, this, lazy, leaveSelf)
// Update the corner chunks so shadows in adjacent chunks update correctly
if (xm | zm === 0) { this.updateBlock(x - 1, y, z - 1, lazy); }
if (xm === 15 && zm === 0) { this.updateBlock(x + 1, y, z - 1, lazy); }
if (xm === 0 && zm === 15) { this.updateBlock(x - 1, y, z + 1, lazy); }
if (xm & zm === 15) { this.updateBlock(x + 1, y, z + 1, lazy); }
this.edited = true
}
getWorldTags(x, y, z) {
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return
}
return this.chunks[x >> 4][z >> 4].getTags(x & 15, y, z & 15)
}
getTags(x,y,z){
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
if (y > maxHeight) {
return
} else if (y < 0) {
return
} else if (X < 0 || X >= this.lwidth || Z < 0 || Z >= this.lwidth) {
return this.getWorldTags(x, y, z)
}
return this.loaded[X * this.lwidth + Z].getTags(x & 15, y, z & 15)
}
getTagByName(x,y,z,n){
var t = this.getTags(x,y,z)
return t && t[n]
}
setTags(x,y,z,data){
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return
}
if(y < 0) return
let chunk = this.chunks[x >> 4][z >> 4]
let xm = x & 15
let zm = z & 15
chunk.setTags(xm, y, zm, data)
}
setTagByName(x,y,z,n,data){
if (!this.chunks[x >> 4] || !this.chunks[x >> 4][z >> 4]) {
return
}
if(y < 0) return
let chunk = this.chunks[x >> 4][z >> 4]
let xm = x & 15
let zm = z & 15
chunk.setTagByName(xm, y, zm, n,data)
}
getLight(x, y, z, blockLight = 0) {
if(y < 0) return 0
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
if (X < 0 || X >= this.lwidth || Z < 0 || Z >= this.lwidth) {
return this.chunks[x >> 4][z >> 4].getLight(x & 15, y, z & 15, blockLight)
}
return this.loaded[X * this.lwidth + Z].getLight(x & 15, y, z & 15, blockLight)
}
setLight(x, y, z, level, block) {
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
return this.loaded[X * this.lwidth + Z].setLight(x & 15, y, z & 15, level, block)
}
updateLight(x, y, z, place, blockLight = 0) {
let chunk = this.getChunk(x, z)
let cx = x & 15
let cz = z & 15
let center = chunk.getLight(cx, y, cz, 0)
let blight = chunk.getLight(cx, y, cz, 1)
let up = this.getLight(x, y+1, z)
let down = this.getLight(x, y-1, z)
let north = this.getLight(x, y, z+1)
let south = this.getLight(x, y, z-1)
let east = this.getLight(x+1, y, z)
let west = this.getLight(x-1, y, z)
let spread = []
if (!place) { // Block was removed; increase light levels
if ((up & 15) === 15) {
for (let i = y; i > 0; i--) {
if (blockData[chunk.getBlock(cx, i, cz)].transparent) {
chunk.setLight(cx, i, cz, 15)
spread.push(x, i, z)
} else {
break
}
}
chunk.spreadLight(spread, 14, true)
} else {
center = max(up, down, north, south, east, west)
if (center > 0) center -= 1
this.setLight(x, y, z, center)
if (center > 1) {
spread.push(x, y, z)
chunk.spreadLight(spread, center - 1, true)
}
}
// Block light levels
if (!blockLight || blockLight < blight) {
spread.length = 0
up = this.getLight(x, y+1, z, 1)
down = this.getLight(x, y-1, z, 1)
north = this.getLight(x, y, z+1, 1)
south = this.getLight(x, y, z-1, 1)
east = this.getLight(x+1, y, z, 1)
west = this.getLight(x-1, y, z, 1)
blight = max(up, down, north, south, east, west)
if (blight > 0) blight -= 1
this.setLight(x, y, z, blight, 1)
if (blight > 1) {
spread.push(x, y, z)
chunk.spreadLight(spread, blight - 1, true, 1)
}
}
}
else if (place && (center !== 0 || blight !== 0)) { // Block was placed; decrease light levels
let respread = []
for (let i = 0; i <= center + 1; i++) respread[i] = []
chunk.setLight(cx, y, cz, 0, 0)
chunk.setLight(cx, y, cz, 0, 1)
spread.push(x, y, z)
// Sky light
if (center === 15) {
for (let i = y-1; i > 0; i--) {
if (blockData[chunk.getBlock(cx, i, cz)].transparent) {
chunk.setLight(cx, i, cz, 0)
spread.push(x, i, z)
} else {
break
}
}
}
chunk.unSpreadLight(spread, center - 1, respread)
chunk.reSpreadLight(respread)
// Block light
if (blight) {
respread.length = 0
for (let i = 0; i <= 15/*blight + 1*/; i++) respread[i] = []
spread.length = 0
spread.push(x, y, z)
chunk.unSpreadLight(spread, blight - 1, respread, 1)
chunk.reSpreadLight(respread, 1)
}
}
if (place && blockLight) { // Light block was placed
this.setLight(x, y, z, blockLight, 1)
spread.length = 0
spread.push(x, y, z)
chunk.spreadLight(spread, blockLight - 1, true, 1)
} else if (!place && blockLight) { // Light block was removed
this.setLight(x, y, z, 0, 1)
spread.push(x, y, z)
let respread = []
for (let i = 0; i <= 15/*blockLight + 1*/; i++) respread[i] = []
chunk.unSpreadLight(spread, blockLight - 1, respread, 1)
chunk.reSpreadLight(respread, 1)
}
}
spawnBlock(x, y, z, blockID) {
//Sets a block anywhere without causing block updates around it. Only to be used in world gen.
if(blockData[blockID].crossShape) blockID |= CROSS
if(blockData[blockID].tallcrossShape) blockID |= TALLCROSS
if(blockData[blockID].cactus) blockID |= CACTUS
let chunkX = x >> 4
let chunkZ = z >> 4
if (!this.chunks[chunkX]) {
this.chunks[chunkX] = []
}
let chunk = this.chunks[chunkX][chunkZ]
if (!chunk) {
chunk = new Chunk(chunkX * 16, chunkZ * 16,this.type, this)
this.chunks[chunkX][chunkZ] = chunk
}
if (chunk.buffer) {
//Only used if spawning a block post-gen
this.setBlock(x, y, z, blockID, true)
} else if (!chunk.getBlock(x & 15, y, z & 15)) {
chunk.setBlock(x & 15, y, z & 15, blockID)
}
}
getEntity(id){
for(var i=0; i<this.entities.length; i++){
if(this.entities[i].id === id){
return i
}
}
}
getEntPos(ent){
return {x:ent.x, y:ent.y, z:ent.z, yaw:ent.yaw, pitch:ent.pitch, block:ent.block, velx:ent.velx, vely:ent.vely, velz:ent.velz, amount:ent.amount, solidOnGround:ent.solidOnGround,harmEffect:ent.harmEffect, health:ent.health, from:ent.from, spawn:ent.spawn, value:ent.value, burning:ent.burning}
}
addEntity(ent, remote){
if(!ent.id)ent.id = Date.now()
if(multiplayer && !remote){
//host controls entities
send({type:"entityPos", id:ent.id, entType:ent.type, pos:this.getEntPos(ent), dimension:this.type})
this.entities.push(ent)
}else{
this.entities.push(ent)
}
}
deleteEntity(id, remote, i){
i = (i || i===0) ? i : this.getEntity(id)
if(!(i || i===0)) return
var ent = this.entities[i]
if(multiplayer && !remote){
send({type:"entityDelete", id:ent.id})
}
this.entities.splice(i, 1)
}
posEntity(d, m){ //for multiplayer.onmessage only
let p = d.pos
var i = this.getEntity(d.id)
var ent
if(i || i===0){
ent = this.entities[i]
}else{
switch(d.entType){
case "Item":
ent = new Item(0, 0, 0, 0, 0, 0, p.block, false, p.amount)
break
case "BlockEntity":
ent = new BlockEntity(p.block, 0,0,0, p.solidOnGround)
break
case "PrimedTNT":
ent = new PrimedTNT(0,0,0)
break
case "EnderPearl":
ent = new EnderPearl(0,0,0,0,0,0)
break
case "Snowball":
ent = new Snowball(0,0,0,0,0,0)
break
case "ExperienceOrb":
ent = new ExperienceOrb(0,0,0,p.value)
break
case "Cow":
ent = new Cow(0,0,0)
break
case "Pig":
ent = new Pig(0,0,0)
break
default:
break
}
if(!ent) return
ent.id = d.id
this.addEntity(ent, true)
}
if(!ent) return
ent.x = p.x
ent.y = p.y
ent.z = p.z
ent.yaw = p.yaw
ent.pitch = p.pitch
ent.velx = p.velx
ent.vely = p.vely
ent.velz = p.velz
ent.harmEffect = p.harmEffect
ent.health = p.health
ent.from = p.from
if(!m)ent.spawn = p.spawn
ent.burning = p.burning
}
getEntities(){
if(this.entities.length === 0) return this.entities //its an empty array, so no problems
return this.entities.map(ent => {
return {
id:ent.id,
entType:ent.type,
pos: this.getEntPos(ent),
dimension:this.type
}
})
}
tick() {
let tickStart = performance.now()
let maxChunkX = (p.x >> 4) + settings.renderDistance
let maxChunkZ = (p.z >> 4) + settings.renderDistance
let chunk = maxChunkX + "," + maxChunkZ
if (chunk !== this.lastChunk) {
this.lastChunk = chunk
this.loadChunks()
this.chunkGenQueue.sort(sortChunks)
}
worldTime += 0.0005
if (controlMap.break.pressed && !Key.control && p.lastBreak < Date.now() - 250 && screen === "play" && !survival && !entHitbox.ent) { // survival breaking isn't instant
changeWorldBlock(0)
}
if ((controlMap.place.pressed || Key.leftMouse && Key.control) && p.lastPlace < Date.now() - 250 && !p.autoBuild) {
newWorldBlock()
}
if (controlMap.break.pressed && p.autoBreak && !Key.control) {
changeWorldBlock(0)
}
if ((controlMap.place.pressed || Key.leftMouse && Key.control) && p.autoBuild) {
newWorldBlock()
}
for (let i = 0; i < this.sortedChunks.length; i++) {
this.sortedChunks[i].tick()
}
for (let i = this.entities.length - 1; i >= 0; i--) {
const entity = this.entities[i]
entity.update()
if (entity.canDespawn || (entity.y <= -64)) {
this.deleteEntity(0, false, i)
}
}
for (let i = this.particles.length - 1; i >= 0; i--) {
const particle = this.particles[i]
particle.update()
if (particle.canDespawn || (particle.y <= -64)) {
this.particles.splice(i,1)
}
}
updtPlayer()
if(multiplayer){
for(let i in players){
players[i].update()
}
}
do {
let doneWork = false
debug.start = performance.now()
if (this.meshQueue.length) {
// Update all chunk meshes.
let len = this.meshQueue.length - 1
do {
this.meshQueue.pop().genMesh()
} while(this.meshQueue.length)
doneWork = true
debug("Meshes")
}
if (this.generateQueue.length && !doneWork) {
let chunk = this.generateQueue.pop()
this.genChunk(chunk)
doneWork = true
}
if (this.populateQueue.length && !doneWork) {
let chunk = this.populateQueue[this.populateQueue.length - 1]
if (!chunk.caves) {
chunk.carveCaves()
debug("Carve caves")
} else if (!chunk.populated) {
chunk.populate()
this.populateQueue.pop()
}
doneWork = true
}
if (this.loadQueue.length && !doneWork) {
this.loadQueue.pop().load()
doneWork = true
if (!this.loadQueue.length) {
return
}
}
if (this.lightingQueue.length && !doneWork) {
this.lightingQueue.pop().fillLight()
doneWork = true
}
if (this.chunkGenQueue.length && !doneWork) {
let chunk = this.chunkGenQueue[0]
if (!fillReqs(chunk.x >> 4, chunk.z >> 4)) {}
else if (!chunk.optimized) {
chunk.optimize(this)
debug("Optimize")
} else if (!chunk.buffer) {
chunk.genMesh()
debug("Initial mesh")
} else {
this.chunkGenQueue.shift()
generatedChunks++
}
doneWork = true
}
if (!doneWork) {
break
}
} while(performance.now() - tickStart < 5)
}
render() {
gl.useProgram(program3D);
initModelView(p)
if(this.type === "nether"){
skyLight = 0
if(inWater === 1) gl.clearColor(0,0,255,1)
else if(inWater === 2) gl.clearColor(255,0,0,1)
else gl.clearColor(0, 0, 0, 1)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
}else{
skyLight = min(max(abs(worldTime % (Math.PId*1.2) - Math.PI) / Math.PI - 0.04, 0.1), 1)
if(inWater === 1) gl.clearColor(0,0,255,1)
else if(inWater === 2) gl.clearColor(255,0,0,1)
else gl.clearColor(sky[0] * skyLight, sky[1] * skyLight, sky[2] * skyLight, 1)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
//skybox render
if(inWater === 0){
/*gl.useProgram(skyboxProgram);
gl.uniform1f(glCache.skyboxTime, worldTime);
gl.depthFunc(gl.ALWAYS);
gl.disable(gl.CULL_FACE);
skybox.render();
gl.depthFunc(gl.LESS);
gl.enable(gl.CULL_FACE)*/
}
}
gl.useProgram(program3D);
renderedChunks = 0
let dist = (settings.renderDistance) * 16
if (this.chunkGenQueue.length) {
this.chunkGenQueue.sort(sortChunks)
let chunk = this.chunkGenQueue[0]
dist = min(dist, chunkDist(chunk))
}
if (dist !== fogDist) {
if (fogDist < dist - 0.1) fogDist += (dist - fogDist) / 120
else if (fogDist > dist + 0.1) fogDist += (dist - fogDist) / 30
else fogDist = dist
}
gl.uniform3f(glCache.uPos, p.x, p.y, p.z)
gl.uniform1f(glCache.uDist, fogDist)
// this is interesting because uTime is not actually based on time
// if you are going to change this to use actual time change line 4487 as well
// since it depends on it
gl.uniform1f(glCache.uTime, skyLight)
if(inWater) gl.uniform3f(glCache.skyColor, 0, 0, 255)
else gl.uniform3f(glCache.skyColor, sky[0], sky[1], sky[2])
gl.uniform1i(glCache.inWater, inWater)
let c = this.sortedChunks
for (let chunk of c) {
chunk.render()
}
if (this.doubleRenderChunks.length) {
gl.depthMask(false)
gl.uniform1i(glCache.uTrans, 1)
for (let chunk of this.doubleRenderChunks) {
chunk.render()
}
gl.uniform1i(glCache.uTrans, 0)
gl.depthMask(true)
}
gl.uniform3f(glCache.uPos, 0, 0, 0)
gl.uniform1i(glCache.inWater, 0)
gl.useProgram(programEntity)
for (let i = this.entities.length - 1; i >= 0; i--) {
const entity = this.entities[i]
entity.render()
}
if(multiplayer){
for(let i in players){
let player = players[i]
if(player.dimension === world.type){
player.render()
if(player.crack > -1 && player.survival){
let pos = player.crackPos
crack.entity.x = pos[0]
crack.entity.y = pos[1]
crack.entity.z = pos[2]
crack.entity.changeTexture(crack[player.crack])
crack.entity.render()
}
}
}
}
renderPlayer()
if(crack.idx > -1 && survival){
crack.entity.x = crack.pos[0]
crack.entity.y = crack.pos[1]
crack.entity.z = crack.pos[2]
crack.entity.changeTexture(crack.tex)
crack.entity.render()
}
if(p.burning && !p.thirdPerson){
fireBlock.x = p.x
fireBlock.y = p.y
fireBlock.z = p.z
fireBlock.pitch = p.rx
fireBlock.yaw = p.ry
gl.disable(gl.CULL_FACE)
fireBlock.render()
gl.enable(gl.CULL_FACE)
}
gl.useProgram(programParticle)
for (let i = this.particles.length - 1; i >= 0; i--) {
const particle = this.particles[i]
particle.render()
}
gl.useProgram(program3D)
if(hitBox.pos) {
blockOutlines = true
blockFill = false
block2(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2], 0, p)
blockOutlines = false
blockFill = true
}
//clear alpha so transparent things aren't white
gl.clearColor(1, 1, 1, 1);
gl.colorMask(false, false, false, true);
gl.clear(gl.COLOR_BUFFER_BIT);
gl.colorMask(true, true, true, true);
}
loadChunks() {
let renderDistance = settings.renderDistance + 3
let cx = p.x >> 4
let cz = p.z >> 4
p.cx = cx
p.cz = cz
let minChunkX = cx - renderDistance
let maxChunkX = cx + renderDistance
let minChunkZ = cz - renderDistance
let maxChunkZ = cz + renderDistance
this.offsetX = -minChunkX
this.offsetZ = -minChunkZ
this.lwidth = renderDistance * 2 + 1
this.chunkGenQueue.length = 0
this.lightingQueue.length = 0
this.populateQueue.length = 0
this.generateQueue.length = 0
if (this.loaded.length > this.lwidth * this.lwidth) {
this.loaded.length = this.lwidth * this.lwidth
}
let i = 0
for (let x = minChunkX; x <= maxChunkX; x++) {
for (let z = minChunkZ; z <= maxChunkZ; z++) {
let chunk
if (!this.chunks[x]) {
this.chunks[x] = []
}
if (!this.chunks[x][z]) {
chunk = new Chunk(x * 16, z * 16,this.type,this)
if (maxDist(cx, cz, x, z) <= settings.renderDistance) {
this.chunkGenQueue.push(chunk)
}
this.chunks[x][z] = chunk
}
chunk = this.chunks[x][z]
if (!chunk.buffer && !this.chunkGenQueue.includes(chunk) && maxDist(cx, cz, x, z) <= settings.renderDistance) {
this.chunkGenQueue.push(chunk)
}
this.loaded[i++] = chunk
}
}
this.sortedChunks.length = 0
this.doubleRenderChunks.length = 0
for (let chunk of this.loaded) {
if (renderFilter(chunk)) {
this.sortedChunks.push(chunk)
}
if (chunk.doubleRender) {
this.doubleRenderChunks.push(chunk)
}
}
this.sortedChunks = this.loaded.filter(renderFilter)
this.sortedChunks.sort(sortChunks)
}
getTop(x,z){
let X = (x >> 4) + this.offsetX
let Z = (z >> 4) + this.offsetZ
if (X < 0 || X >= this.lwidth || Z < 0 || Z >= this.lwidth) {
return this.chunks[x >> 4][z >> 4].tops[(z&15) * 16 + (x&15)]
}
}
getThisSaveString(){
let world = this
let edited = []
for (let x in this.chunks) {
for (let z in this.chunks[x]) {
let chunk = this.chunks[x][z]
if (chunk.edited) {
for (let y = 0; y < chunk.sections.length; y++) {
if (chunk.sections[y].edited) {
edited.push([ chunk.sections[y], chunk.cleanSections[y] ])
}
}
}
}
}
let pallete = {}
for (let chunks of edited) {
let changes = false
chunks[0].blocks.forEach((id, i) => {
if (id !== chunks[1][i]) {
pallete[id] = true
changes = true
}
})
if (!changes) {
chunks[0].edited = false
}
}
let blocks = Object.keys(pallete).map(n => Number(n))
pallete = {}
blocks.forEach((block, index) => pallete[block] = index)
let rnd = round
let options = p.flying | (superflat==="island" ? 2 : superflat) << 1 | p.spectator << 3 | caves << 4 | trees << 5 | survival << 6
let str = world.name + ";" + worldSeed.toString(36) + ";"
+ rnd(p.x).toString(36) + "," + rnd(p.y).toString(36) + "," + rnd(p.z).toString(36) + ","
+ (p.rx * 100 | 0).toString(36) + "," + (p.ry * 100 | 0).toString(36) + "," + options.toString(36) + ";"
+ (this.version || version) + ";"
+ blocks.map(b => b.toString(36)).join(",") + ";"
for (let i = 0; i < edited.length; i++) {
if (!edited[i][0].edited) {
continue
}
let real = edited[i][0]
let blocks = real.blocks
let original = edited[i][1]
str += (real.x / 16).toString(36) + "," + (real.y / 16).toString(36) + "," + (real.z / 16).toString(36) + ","
for (let j = 0; j < original.length; j++) {
if (blocks[j] !== original[j]) {
str += (pallete[blocks[j]] << 12 | j).toString(36) + ","
}
}
str = str.substr(0, str.length - 1); //Remove trailing comma
str += ";"
}
if (str.match(/;$/)) str = str.substr(0, str.length - 1)
return str
}
getSaveString() {
let world = this
if(this.type !== "") world = dimensions.overworld //save overworld
if(!world.edited && world.saveStr) return world.saveStr
return world.getThisSaveString()
}
getNetherSaveString(){
let world = this
if(this.type !== "nether") world = dimensions.nether //save nether
if(!world.edited && world.saveStr) return world.saveStr
return world.getThisSaveString()
}
getInv(){
let str = ""
let arr = []
for(let i=0; i<inventory.hotbar.length; i++){
if(inventory.hotbar[i]){
arr.push(inventory.hotbar[i].id)
arr.push(inventory.hotbar[i].amount)
}else{
arr.push(0)
arr.push(0)
}
}
str += arr.join(",") + "|"
arr = []
for(i=0; i<invItems.length; i++){
if(invItems[i]){
arr.push(invItems[i].id)
arr.push(invItems[i].amount)
}else{
arr.push(0)
arr.push(0)
}
}
str += arr.join(",") + "|"
arr = []
for(let i=0; i<inventory.hotbar.length; i++){
if(inventory.hotbar[i]){
arr.push(inventory.hotbar[i].durability || 0)
}else{
arr.push(0)
}
}
str += arr.join(",") + "|"
arr = []
for(i=0; i<invItems.length; i++){
if(invItems[i]){
arr.push(invItems[i].durability || 0)
}else{
arr.push(0)
}
}
return str
}
getSurvivStr(){
//survival stuff like player health
let str = ""
str += p.health + ","
str += witherEffect + ","
str += witherTime + ","
str += witherDamage + ","
str += world.spawnPoint.x + "," + world.spawnPoint.y + "," + world.spawnPoint.z + ","
str += p.food + "," + p.foodSaturation + "," + p.foodExhaustion + ","
str += p.oxygen + ","
str += worldTime + ","
str += (cheats ? "1" : "0")+","
str += freezeEffect+","
str += p.XP+","+p.level
return str
}
loadSave(str) {
this.saveStr = str
let data = str.split(";")
if (!str.includes("Alpha")) {
return this.loadOldSave(str)
}
this.name = data.shift()
setSeed(parseInt(data.shift(), 36))
let playerData = data.shift().split(",")
if(this.type === ""){
p.x = parseInt(playerData[0], 36)
p.y = parseInt(playerData[1], 36)
p.z = parseInt(playerData[2], 36)
p.rx = parseInt(playerData[3], 36) / 100
p.ry = parseInt(playerData[4], 36) / 100
}
let options = parseInt(playerData[5], 36)
let v = data[0].replace("Alpha ","")
if(this.type === ""){
let extra = verMoreThan(v, "1.0.3") || v === "1.0.3"
p.flying = options & 1
p.spectator = options >> 2 & 1
superflat = options >> 1 & 3
if(superflat === 0){superflat = false}
if(superflat === 1){superflat = true}
if(superflat === 2){superflat = "island"}
caves = options >> (3+extra) & 1
trees = options >> (4+extra) & 1
survival = (options >> (5+extra) & 1) ? true : false
}
let version = data.shift()
this.version = version
// if (version.split(" ")[1].split(".").join("") < 70) {
// 	alert("This save code is for an older version. 0.7.0 or later is needed")
// }
let pallete = data.shift().split(",").map(n => parseInt(n, 36))
this.loadFrom = []
for (let i = 0; data.length; i++) {
let blocks = data.shift().split(",")
this.loadFrom.push({
x: parseInt(blocks.shift(), 36),
y: parseInt(blocks.shift(), 36),
z: parseInt(blocks.shift(), 36),
blocks: [],
})
for (let j = 0; j < blocks.length; j++) {
let block = parseInt(blocks[j], 36)
let index = block & 0xffffff
let pid = block >> 12
this.loadFrom[i].blocks[index] = pallete[pid]
}
}
}
loadInv(str){
let arr = str.split("|")
let inv = arr[1].split(",")
let hotb = arr[0].split(",")
let len = inventory.hotbar.length
inventory.hotbar = []
for(let i=0; i<len*2; i+=2){
if(hotb[i]){
inventory.hotbar.push({
id: parseInt(hotb[i]),
amount: parseInt(hotb[i+1])
})
}else inventory.hotbar.push(0)
}
invItems = []
for(let i=0; i<inv.length; i+=2){
invItems.push({
id: parseInt(inv[i]),
amount: parseInt(inv[i+1])
})
}
try{
inv = arr[3].split(",")
hotb = arr[2].split(",")
for(let i=0; i<len*2; i++){
hotb[i] = parseInt(hotb[i]) || 0
if(hotb[i]){
inventory.hotbar[i].durability = hotb[i]
}
}
for(let i=0; i<inv.length; i++){
inv[i] = parseInt(inv[i]) || 0
if(inv[i]){
invItems[i].durability = inv[i]
}
}
}catch{}
}
loadSurvivStr(str){
let arr = str.split(",")
p.health = parseInt(arr[0])
witherEffect = parseInt(arr[1])
witherTime = parseInt(arr[2])
witherDamage = parseInt(arr[3])
world.spawnPoint.x = parseInt(arr[4]) || 0
world.spawnPoint.y = parseInt(arr[5]) || 0
world.spawnPoint.z = parseInt(arr[6]) || 0
p.food = parseInt(arr[7]); if(isNaN(p.food)) p.food = 20
p.foodSaturation = parseFloat(arr[8]) || 0, p.foodExhaustion = parseFloat(arr[9]) || 0
p.oxygen = parseInt(arr[10]); if(!p.oxygen) p.oxygen = 20
worldTime = parseFloat(arr[11]) || 0
cheats = arr[12] ? arr[12] === "1" : !survival
freezeEffect = parseInt(arr[13])
p.XP = parseFloat(arr[14]) || 0
p.level = parseInt(arr[15]) || 0; setLevel()
}
loadOldSave(str) {
let data = str.split(";");
setSeed(parseInt(data.shift(), 36))
this.id = Date.now()
this.name = "Old World " + (Math.random() * 1000 | 0)
let playerData = data.shift().split(",");
p.x = parseInt(playerData[0], 36);
p.y = parseInt(playerData[1], 36);
p.z = parseInt(playerData[2], 36);
p.rx = parseInt(playerData[3], 36) / 100;
p.ry = parseInt(playerData[4], 36) / 100;
let editCount = parseInt(data.shift(), 36);
this.loadFrom = [];
let coords = data.shift().split(",").map(function(n) {
return parseInt(n, 36);
});
for (let j = 0; j < coords.length; j += 3) {
this.loadFrom.push({
x: coords[j],
y: coords[j + 1],
z: coords[j + 2],
blocks: [],
})
}
for (let i = 0; data.length > 0; i++) {
let blocks = data.shift().split(",");
for (let j = 0; j < blocks.length; j++) {
let block = parseInt(blocks[j], 36);
let index = block >> 8;
let id = block & 0x7f | (block & 0x80) << 1;
this.loadFrom[i].blocks[index] = id;
}
}
}
}
win.World = World
// Mouse sensitivity variable, used for the settings buttons and in the "mmoved" function
let mouseS = 300
class Slider {
constructor(x, y, w, h, scenes, label, min, max, settingName, callback) {
this.x = x
this.y = y
this.h = h
this.w = Math.max(w, 350)
this.name = settingName
this.scenes = Array.isArray(scenes) ? scenes : [scenes]
this.label = label
this.min = min
this.max = max
this.sliding = false
this.callback = callback
}
draw() {
if (!this.scenes.includes(screen)) {
return
}
let current = (settings[this.name] - this.min) / (this.max - this.min)
// Outline
ctx.beginPath()
strokeWeight(2)
stroke(0)
fill(85)
ctx.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h)
ctx.stroke()
ctx.fill()
// Slider bar
let value = round(settings[this.name])
ctx.beginPath()
fill(130)
let x = this.x - (this.w - 10) / 2 + (this.w - 10) * current - 5
ctx.fillRect(x, this.y - this.h / 2, 10, this.h)
//Label
fill(255, 255, 255)
textSize(13)
ctx.textAlign = 'center'
text(`${this.label}: ${value}`, this.x, this.y + this.h / 8)
}
click() {
if (!mouseDown || !this.scenes.includes(screen)) {
return false
}
if (mouseX > this.x - this.w / 2 && mouseX < this.x + this.w / 2 && mouseY > this.y - this.h / 2 && mouseY < this.y + this.h / 2) {
let current = (mouseX - this.x + this.w / 2) / this.w
if (current < 0) current = 0
if (current > 1) current = 1
this.sliding = true
settings[this.name] = current * (this.max - this.min) + this.min
this.callback(current * (this.max - this.min) + this.min)
this.draw()
}
}
drag() {
if (!this.sliding || !this.scenes.includes(screen)) {
return false
}
let current = (mouseX - this.x + this.w / 2) / this.w
if (current < 0) current = 0
if (current > 1) current = 1
settings[this.name] = current * (this.max - this.min) + this.min
this.callback(current * (this.max - this.min) + this.min)
}
release() {
this.sliding = false
}
static draw() {
for (let slider of Slider.all) {
slider.draw()
}
}
static click() {
for (let slider of Slider.all) {
slider.click()
}
}
static release() {
for (let slider of Slider.all) {
slider.release()
}
}
static drag() {
if (mouseDown) {
for (let slider of Slider.all) {
slider.drag()
}
}
}
static add(x, y, w, h, scenes, label, min, max, defaut, callback) {
Slider.all.push(new Slider(x, y, w, h, scenes, label, min, max, defaut, callback))
}
}
Slider.all = []
class Button {
constructor(x, y, w, h, labels, scenes, callback, disabled, hoverText) {
this.x = x
this.y = y
this.h = h
this.w = w
this.index = 0
this.disabled = disabled || (() => false)
this.hoverText = !hoverText || typeof hoverText === "string" ? (() => hoverText) : hoverText
this.scenes = Array.isArray(scenes) ? scenes : [scenes]
this.labels = Array.isArray(labels) ? labels : [labels]
this.callback = callback
}
mouseIsOver() {
return mouseX >= this.x - this.w / 2 && mouseX <= this.x + this.w / 2 && mouseY >= this.y - this.h / 2 && mouseY <= this.y + this.h / 2
}
draw() {
if (!this.scenes.includes(screen)) {
return
}
let hovering = this.mouseIsOver()
let disabled = this.disabled()
let hoverText = this.hoverText()
// Outline
ctx.beginPath()
strokeWeight(6)
stroke(80)
if (disabled) {
fill(60)
stroke(20)
} else {
if (hovering) {
cursor(HAND)
fill(100, 120, 200)
stroke(100,80,160)
}else{
fill(120)
}
}
ctx.rect(this.x - this.w / 2, this.y - this.h / 2, this.w, this.h)
ctx.stroke()
ctx.fill()
ctx.beginPath()
stroke(200)
if (hovering && !disabled)stroke(200, 200, 255);
if(disabled)stroke(130);
strokeWeight(3.5)
if(disabled){
ctx.moveTo(this.x + (this.w / 2) + 2, this.y - this.h / 2-2)
ctx.lineTo(this.x + (this.w / 2) + 2, this.y + (this.h / 2)+1)
ctx.lineTo(this.x - this.w / 2 - 1, this.y + (this.h / 2)+1)
}else{
ctx.moveTo(this.x - this.w / 2 - 2, this.y + (this.h / 2)-2)
ctx.lineTo(this.x - this.w / 2 - 2, this.y - this.h / 2-2)
ctx.lineTo(this.x + (this.w / 2)+1, this.y - this.h / 2-2)
}
ctx.stroke()
stroke(0)
strokeWeight(1)
ctx.strokeRect(this.x-this.w/2-4, this.y-this.h/2-4, this.w+8, this.h+8)
//Label
textSize(13)
ctx.textAlign = 'center'
fill(0)
text(this.labels[this.index], this.x +2, this.y + this.h / 8 +2)
disabled ? fill(255) : (hovering ? fill(255,255,0) : fill(255) )
text(this.labels[this.index], this.x, this.y + this.h / 8)
if (hovering && hoverText) {
hoverbox.innerText = hoverText
hoverbox.classList.remove("hidden")
if (mouseY < height / 2) {
hoverbox.style.bottom = ""
hoverbox.style.top = mouseY + 10 + "px"
} else {
hoverbox.style.top = ""
hoverbox.style.bottom = height - mouseY + 10 + "px"
}
if (mouseX < width / 2) {
hoverbox.style.right = ""
hoverbox.style.left = mouseX + 10 + "px"
} else {
hoverbox.style.left = ""
hoverbox.style.right = width - mouseX + 10 + "px"
}
}
}
click() {
if (this.disabled() || !mouseDown || !this.scenes.includes(screen)) {
return false
}
if (this.mouseIsOver()) {
this.index = (this.index + 1) % this.labels.length
this.callback(this.labels[this.index])
return true
}
}
static draw() {
hoverbox.classList.add("hidden")
for (let button of Button.all) {
button.draw()
}
}
static click() {
for (let button of Button.all) {
if (button.click()) {
Button.draw()
playSound("click")
break
}
}
}
static add(x, y, w, h, labels, scenes, callback, disabled, hoverText) {
Button.all.push(new Button(x, y, w, h, labels, scenes, callback, disabled, hoverText))
}
}
Button.all = []
var initEverything
function initButtons() {
Button.all = []
Slider.all = []
const nothing = () => false
const always = () => true
// Main menu buttons
Button.add(width / 2, height / 2 - 40, 400, 40, "Singleplayer", "main menu", r => changeScene("loadsave menu"))
Button.add(width / 2, height / 2 + 15, 400, 40, "Multiplayer", "main menu", r => {
changeScene("multiplayer menu")
}, null, "If you want multiplayer, just wait.")
Button.add(width / 2, height / 2 + 70, 400, 40, "Marketplace", "main menu", r => changeScene("marketplace"))
Button.add(width / 2 - 105, height / 2 + 160, 190, 40, "Options", "main menu", r => changeScene("options"))
Button.add(width / 2 + 105, height / 2 + 160, 190, 40, "Quit", "main menu", r => {
if(window.opener !== null || window.history.length === 1){
close()
}else{
location.href = "https://www.nathaniel2006.repl.co"
}
})
Button.add(width / 2 - 235, height / 2 + 160, 40, 40, "?", "main menu", r => changeScene("help"))
// Creation menu buttons
Button.add(width / 2, 135, 300, 40, ["World Type: Normal", "World Type: Superflat", "World Type: Island"], "creation menu", r => {superflat = r === "World Type: Superflat"; if(r==="World Type: Island")superflat="island"})
Button.add(width / 2, 185, 300, 40, ["Trees: On", "Trees: Off"], "creation menu", r => trees = r === "Trees: On", function() {
if (superflat === true) {
this.index = 1
trees = false
}
return superflat === true
})
Button.add(width / 2, 235, 300, 40, ["Caves: On", "Caves: Off"], "creation menu", r => caves = r === "Caves: On", function() {
if (superflat === true) {
this.index = 1
caves = false
}
return superflat === true
})
Button.add(width / 2, 285, 300, 40, ["Game Mode: Creative", "Game Mode: Survival"], "creation menu", r => survival = r === "Game Mode: Survival")
Button.add(width / 2, 335, 300, 40, "Difficulty: Peaceful", "creation menu", nothing, always, "Coming soon\n\nPlease stop asking for mobs. Adding them will take a very long time. I know a lot of people want them, so just be patient.")
Button.add(width / 2, height - 90, 300, 40, "Create New World", "creation menu", r => {
if(boxCenterTop.value.startsWith("JSON")){
alert("That name is not allowed")
return
}
dimensions = {
overworld: new World(),
nether: new World("nether")
}
world = dimensions.overworld
world.id = Date.now()
let name = boxCenterTop.value || "World"
let number = ""
while(true) {
let match = false
for (let id in worlds) {
if (worlds[id].name === name + number) {
match = true
break
}
}
if (match) {
number = number ? number + 1 : 1
} else {
name = name + number
break
}
}
world.name = name.replace(/;/g, "\u037e")
world.loadChunks()
world.chunkGenQueue.sort(sortChunks)
cheats = !survival
if(survival) setHotbar([0,0,0,0,0,0,0,0,0])
changeScene("loading")
})
Button.add(width / 2, height - 40, 300, 40, "Cancel", "creation menu", r => changeScene(previousScreen))
// Loadsave menu buttons
const selected = () => !selectedWorld || !worlds[selectedWorld]
let w4 = min(width / 4 - 10, 220)
let x4 = w4 / 2 + 5
let w2 = min(width / 2 - 10, 450)
let x2 = w2 / 2 + 5
let mid = width / 2
Button.add(mid - 3 * x4, height - 30, w4, 40, "Edit", "loadsave menu", r => changeScene("editworld"), () => (selected() || !worlds[selectedWorld].edited))
Button.add(mid - x4, height - 30, w4, 40, "Delete", "loadsave menu", r => {
if (worlds[selectedWorld] && confirm(`Are you sure you want to delete ${worlds[selectedWorld].name}?`)) {
deleteFromDB(selectedWorld)
window.worlds.removeChild(document.getElementById(selectedWorld))
delete worlds[selectedWorld]
selectedWorld = 0
}
}, () => (selected() || !worlds[selectedWorld].edited), "Delete the world forever.")
Button.add(mid + x4, height - 30, w4, 40, "Export", "loadsave menu", r => {
boxCenterTop.value = worlds[selectedWorld].code
}, selected, "Export the save code into the text box above for copy/paste.")
Button.add(mid + 3 * x4, height - 30, w4, 40, "Cancel", "loadsave menu", r => changeScene("main menu"))
Button.add(mid - x2, height - 75, w2, 40, "Play Selected World", "loadsave menu", r => {
var ver
if(worlds[selectedWorld]){
ver = worlds[selectedWorld].version.replace("Alpha ","")
}else{
ver = boxCenterTop.value.split(";")[3].replace("Aplha ","")
}
if(!verMoreThan(ver, "1.0.2")){
changeScene("broken world")
return
}
playSelectedWorld()
}, () => !(!selectedWorld && boxCenterTop.value) && !worlds[selectedWorld])
Button.add(mid + x2, height - 75, w2, 40, "Create New World", "loadsave menu", r => changeScene("creation menu"))
//broken world buttons
Button.add(mid, height / 2 + 50, w2, 40, "Cancel", "broken world", r => {changeScene("loadsave menu")})
Button.add(mid, height / 2 + 105, w2, 40, "Load anyways", "broken world", r => {
try{
playSelectedWorld()
}catch(e){
alert(e)
}
}, always)
// Edit world menu
Button.add(mid, height / 2, w2, 40, "Save", "editworld", r => {
let w = worlds[selectedWorld]
w.name = boxCenterTop.value.replace(/;/g, "\u037e")
let split = w.code.split(";")
split[0] = w.name
w.code = split.join(";")
w.thumbnail = window.url.value
saveToDB(w.id, w).then(success => {
initWorldsMenu()
changeScene("loadsave menu")
}).catch(e => console.error(e))
})
Button.add(mid, height / 2 + 50, w2, 40, "Back", "editworld", r => changeScene(previousScreen))
// Multiplayer buttons
Button.add(mid + 3 * x4, height - 30, w4, 40, "Cancel", "multiplayer menu", r => changeScene("main menu"))
Button.add(mid - x2, height - 75, w2, 40, "Play Selected World", "multiplayer menu", async() => {
changeScene("multiplayer connecting")
initMultiplayer(servers[selectedWorld].id)
multiplayer.addEventListener("close", function(){
changeScene("multiplayer menu")
})
}, () => !servers[selectedWorld])
//multiplayer connecting buttons
Button.add(mid, height / 2 + 40, w2, 40, "Cancel", "multiplayer connecting", r => {multiplayer.close();changeScene("multiplayer menu")})
//play buttons
if(touchScreen){
Button.add(mid-14, 14, 20,20, "/", "play", Messages.showInput)
Button.add(mid+14, 14, 20,20, "âšâš", "play", r => changeScene("pause"))
}
// Pause buttons
Button.add(width / 2, 175, 300, 40, "Resume", "pause", play)
Button.add(width / 2, 225, 300, 40, "Options", "pause", r => changeScene("options"))
Button.add(width / 2, 275, 300, 40, "Save", "pause", () => save(), nothing, () => `Save the world to your computer/browser. Doesn't work in incognito.\n\nLast saved ${timeString(Date.now() - world.edited)}.`)
Button.add(width / 2, 325, 300, 40, "Get Save Code", "pause", r => {
savebox.classList.remove("hidden")
saveDirections.classList.remove("hidden")
savebox.value = world.getSaveString()
})
Button.add(width / 2, 375, 300, 40, "Exit Without Saving", "pause", r => {
savebox.value = world.getSaveString()
initWorldsMenu()
if(multiplayer) multiplayer.close()
changeScene("main menu")
})
Button.add(width / 2, 425, 300, 40, "Enable Multiplayer", "pause", async r => {
var logged
await loggedIn().then(r => logged = r)
if(logged){
initMultiplayer()
}
}, () => multiplayer)
Button.add(width / 2, 475, 300, 40, "Get Invite Link", "pause", r => {
savebox.classList.remove("hidden")
savebox.value = "https://minekhan.nathaniel2006.repl.co/?target="+world.id
}, () => !multiplayer, () => "Invite someone to this world if it is multiplayer.")
Button.add(width / 2, 525, 300, 40, "Download This World", "pause", r => {
var a = document.createElement("a")
a.href = "data:text/plain,"+getSaveJSON()
a.download = world.name+".mcs"
a.click()
}, nothing)
// You Died buttons
Button.add(width / 2, 225, 300, 40, "Respawn", "dead", r => {
respawn()
updateHUD = true
play()
})
// Options buttons
Button.add(width / 2, 430, width / 3, 40, ["Reach distance: "+normReach, "Reach distance: "+bigReach], "options", r => {
if(r === "Reach distance: "+normReach){
reach = normReach
}else reach = bigReach
})
Button.add(width / 2, 500, width / 3, 40, ["Sound: On", "Sound: Off"], "options", r => soundOn = r === "Sound: On")
Button.add(width / 2, 570/*640*/, width / 3, 40, "Back", "options", r => changeScene(previousScreen))
//Help buttons
Button.add(60, 30, 80, 30, "Back", "help", r => changeScene(previousScreen))
// Marketplace buttons
Button.add(60, 40, 80, 30, "Back", "marketplace", r => changeScene(previousScreen))
Button.add(mid - x2, height - 75, w2, 40, "Download", "marketplace", saveFromMarketplace, () => !marketplace[selectedWorld])
// Comingsoon menu buttons
Button.add(width / 2, 395, width / 3, 40, "Back", "comingsoon menu", r => changeScene(previousScreen))
// Settings Sliders
Slider.add(width/2, 245, width / 3, 40, "options", "Render Distance", 1, 32, "renderDistance", val => settings.renderDistance = round(val))
Slider.add(width/2, 305, width / 3, 40, "options", "FOV", 30, 110, "fov", val => {
p.FOV(val)
if (world) {
p.setDirection()
world.render()
}
})
Slider.add(width/2, 365, width / 3, 40, "options", "Mouse Sensitivity", 30, 400, "mouseSense", val => settings.mouseSense = val)
}
let texturePixels
let textureSize = 256
let textureH = 1024
function initTextures() {
let scale = 1 / (textureSize/16)
let scaleH = 1 / (textureSize/16)
texturePixels = new Uint8Array(textureSize * textureH * 4)
textureMap = {}
textureCoords = []
setPixel = function(textureNum, x, y, r, g, b, a) {
let texX = textureNum & 15
let texY = textureNum >> 4
let offset = (texY * 16 + y) * 1024 + texX * 64 + x * 4
texturePixels[offset] = r
texturePixels[offset + 1] = g
texturePixels[offset + 2] = b
texturePixels[offset + 3] = a !== undefined ? a : 255
}
/*getPixels = function(str) {
// var w = parseInt(str.substr(0, 2), 36)
// var h = parseInt(str.substr(2, 2), 36)
var colors = []
var pixels = []
var dCount = 0
for (;str[4 + dCount] === "0"; dCount++) {}
var ccount = parseInt(str.substr(4+dCount, dCount+1), 36)
for (var i = 0; i < ccount; i++) {
var num = parseInt(str.substr(5 + 2*dCount + i * 7, 7), 36)
colors.push([ num >>> 24 & 255, num >>> 16 & 255, num >>> 8 & 255, num & 255 ])
}
for (let i = 5 + 2*dCount + ccount * 7; i < str.length; i++) {
let num = parseInt(str[i], 36)
pixels.push(colors[num][0], colors[num][1], colors[num][2], colors[num][3])
}
return pixels
};*/
const base256CharSet = '0123456789abcdefghijklmnopqrstuvwxyzABCDEF!#$%&L(MNO)*+,-./:;<=WSTR>Q?@[]P^_{|}~Ã€ÃÃ‚ÃƒUVÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃKÃŽÃÃÃ‘Ã’Ã“Ã”Ã•Ã–Ã—Ã˜Ã™ÃšÃ›ÃœÃÃžÃŸÃ Ã¡Ã¢Ã£GÃ¤Ã¥Ã¦Ã§Ã¨Ã©ÃªHÃ«Ã¬Ã­Ã®XÃ¯Ã°Ã±IÃ²Ã³Ã´ÃµÃ¶Ã·Ã¸Ã¹ÃºJÃ»Ã¼Ã½Ã¾Ã¿Ä€ÄÄ‚ÄƒÄ„Ä…Ä†Ä‡ÄˆÄ‰ÄŠÄ‹ÄŒÄÄŽÄÄÄ‘Ä’Ä“Ä”Ä•Ä–Ä—Ä˜Ä™ÄšÄ›ÄœÄÄžÄŸÄ Ä¡Ä¢Ä£Ä¤Ä¥Ä¦YÄ§Ä¨Ä©ÄªÄ«Ä¬Ä­Ä®Ä¯Ä°Ä±Ä²Ä³Ä´ÄµÄ¶Ä·Ä¸Ä¹ÄºÄ»Ä¼Ä½Ä¾Ä¿Å€ÅÅ‚ÅƒÅ„Å…Å†Å‡ÅˆÅ‰ÅŠÅ‹ÅŒÅÅŽÅÅÅ‘Å’Å“Å”Å•Å–Å—Å˜Å™ÅšÅ›ÅœÅÅžÅŸÅ Å¡Å¢Å£Å¤Å¥Z'
const base256DecodeMap = new Map()
for (let i = 0; i < 256; i++) base256DecodeMap.set(base256CharSet[i], i)
function decodeByte(str) {
let num = 0
for (let char of str) {
num <<= 8
num += base256DecodeMap.get(char)
}
return num
}
getPixels = function(str, r = 255, g = 255, b = 255) {
const width = decodeByte(str.substr(0, 2))
const height = decodeByte(str.substr(2, 2))
const colorCount = decodeByte(str.substr(4, 1))
const colors = []
const pixels = new Uint8ClampedArray(width * height * 4)
let pixi = 0
for (let i = 0; i < colorCount; i++) {
const num = decodeByte(str.substr(5 + i * 3, 3))
let alpha = (num & 63) << 2
let blue  = (num >>> 6 & 63) << 2
let green = (num >>> 12 & 63) << 2
let red   = (num >>> 18 & 63) << 2
if (alpha >= 240) alpha = 255 // Make sure we didn't accidentally make the texture transparent
if (red === blue && red === green) {
red = red / 252 * r | 0
green = green / 252 * g | 0
blue = blue / 252 * b | 0
}
colors.push([ red, green, blue, alpha ])
}
// Special case for a texture filled with 1 pixel color
if (colorCount === 1) {
while (pixi < pixels.length) {
pixels[pixi + 0] = colors[0][0]
pixels[pixi + 1] = colors[0][1]
pixels[pixi + 2] = colors[0][2]
pixels[pixi + 3] = colors[0][3]
pixi += 4
}
return pixels
}
let bytes = []
for (let i = 5 + colorCount * 3; i < str.length; i++) { // Load the bit-packed index array
const byte = decodeByte(str[i])
bytes.push(byte)
}
const bits = Math.ceil(Math.log2(colorCount))
const bitMask = (1 << bits) - 1
let filledBits = 8
let byte = bytes.shift()
while (bytes.length || filledBits) {
let num = 0
if (filledBits >= bits) { // The entire number is inside the byte
num = byte >> (filledBits - bits) & bitMask
if (filledBits === bits && bytes.length) {
byte = bytes.shift()
filledBits = 8
}
else filledBits -= bits
}
else {
num = byte << (bits - filledBits) & bitMask // Only part of the number is in the byte
byte = bytes.shift() // Load in the next byte
num |= byte >> (8 - bits + filledBits) // Apply the rest of the number from this byte
filledBits += 8 - bits
}
pixels[pixi + 0] = colors[num][0]
pixels[pixi + 1] = colors[num][1]
pixels[pixi + 2] = colors[num][2]
pixels[pixi + 3] = colors[num][3]
pixi += 4
}
return pixels
}
semiTransTextures.splice(0,semiTransTextures.length)
textureUpdated()
{
//get amount of textures
var t = 0
for(var i in textures) t++
t = Math.ceil(t / 16) * 16
// Specify the texture coords for each index
const s = scale, sh = scaleH
for (let i = 0; i < t; i++) {
let texX = i & 15
let texY = i >> 4
let offsetX = texX * s
let offsetY = texY * sh
textureCoords.push(new Float32Array([ offsetX, offsetY, offsetX + s, offsetY, offsetX + s, offsetY + sh, offsetX, offsetY + sh ]))
}
// Set all of the textures into 1 big tiled texture
let n = 0
for (let i in textures) {
if (typeof textures[i] === "function") {
textures[i](n)
} else if (typeof textures[i] === "string") {
let pix = getPixels(textures[i])
let semiTrans
for (let j = 0; j < pix.length; j += 4) {
setPixel(n, j >> 2 & 15, j >> 6, pix[j], pix[j+1], pix[j+2], pix[j+3])
let a = pix[j+3]
if(a !== 0 && a !== 255){
semiTrans = true
}
}
if(semiTrans)semiTransTextures.push(i)
}
textureMap[i] = n
n++
}
for(var t in animated){
var a = animated[t].arr
var trans
for(var ti = 0; ti<a.length; ti++){
if(semiTransTextures.includes(a[ti])){//if this animated texture has transparent frames
trans = true
}
}
if(trans) semiTransTextures.push(t)
}
//Set the hitbox texture to 1 pixel
let arr = new Float32Array(192)
for (let i = 0; i < 192; i += 2) {
arr[i] = textureCoords[textureMap.hitbox][0] + 0.01
arr[i + 1] = textureCoords[textureMap.hitbox][1] + 0.01
}
textureCoords[textureMap.hitbox] = arr
}
// Big texture with everything in it
textureAtlas = gl.createTexture()
gl.activeTexture(gl.TEXTURE0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, textureSize, textureH, 0, gl.RGBA, gl.UNSIGNED_BYTE, texturePixels)
gl.generateMipmap(gl.TEXTURE_2D)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
gl.uniform1i(glCache.uSampler, 0)
// Dirt texture for the background
let dirtPixels = new Uint8Array(getPixels(textures.dirt))
dirtTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE1)
gl.bindTexture(gl.TEXTURE_2D, dirtTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 16, 16, 0, gl.RGBA, gl.UNSIGNED_BYTE, dirtPixels)
gl.generateMipmap(gl.TEXTURE_2D)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
// Netherrack texture for the background
let netherPixels = new Uint8Array(getPixels(textures.netherrack))
netherTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE2)
gl.bindTexture(gl.TEXTURE_2D, netherTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 16, 16, 0, gl.RGBA, gl.UNSIGNED_BYTE, netherPixels)
gl.generateMipmap(gl.TEXTURE_2D)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT)
let explodePixels = new Uint8Array([255,0,0,1])
explodeTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE3)
gl.bindTexture(gl.TEXTURE_2D, explodeTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, explodePixels)
images.explode.addEventListener("load", function(){
gl.activeTexture(gl.TEXTURE3)
gl.bindTexture(gl.TEXTURE_2D, explodeTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images.explode)
gl.generateMipmap(gl.TEXTURE_2D);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
})
let experienceOrbPixels = new Uint8Array([255,0,0,1])
experienceOrbTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE5)
gl.bindTexture(gl.TEXTURE_2D, experienceOrbTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, experienceOrbPixels)
images.experienceOrb.addEventListener("load", function(){
gl.activeTexture(gl.TEXTURE5)
gl.bindTexture(gl.TEXTURE_2D, experienceOrbTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images.experienceOrb)
gl.generateMipmap(gl.TEXTURE_2D);
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
})
let panoramaPixels = new Uint8Array([255,0,0,1])
panoramaTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE4)
gl.bindTexture(gl.TEXTURE_2D, panoramaTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, panoramaPixels)
images.panorama.addEventListener("load", function(){
gl.activeTexture(gl.TEXTURE4)
gl.bindTexture(gl.TEXTURE_2D, panoramaTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images.panorama)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
mainBGW = images.panorama.width
})
let genericPixels = new Uint8Array([255,0,0,1])
genericTexture = gl.createTexture()
gl.activeTexture(gl.TEXTURE6)
gl.bindTexture(gl.TEXTURE_2D, genericTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, genericPixels)
images.generic.addEventListener("load", function(){
gl.activeTexture(gl.TEXTURE6)
gl.bindTexture(gl.TEXTURE_2D, genericTexture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, images.generic)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
})
genIcons()
}
function lerp(t,a,b) {
return a + t * (b - a)
}
function updateTextures() {
var now = performance.now()
for(var i in animated){
var t = animated[i]
var fi = Math.floor((now / t.time) % t.arr.length)
var fi2 = (fi+1) % t.arr.length
var lerpAmount = (now / t.time) % 1
var frame = t.arr[fi]
var frame2 = t.arr[fi2]
var pos = textureCoords[textureMap[frame]]
var pos2 = textureCoords[textureMap[frame2]]
var idx = textureMap[i]
var r=1,g=1,b=1,a=1
if(t.tint){
r = t.tint[0]/255
g = t.tint[1]/255
b = t.tint[2]/255
a = t.tint[3]/255
if(isNaN(a)) a = 1
}
for(var x=0; x<16; x++){
for(var y=0; y<16; y++){
var texX = pos[0]*16, texY = pos[1]*16
var texX2 = pos2[0]*16, texY2 = pos2[1]*16
var offset = (texY * 16 + y) * 1024 + texX * 64 + x * 4
var offset2 = (texY2 * 16 + y) * 1024 + texX2 * 64 + x * 4
var pixr = texturePixels[offset]*r
var pixg = texturePixels[offset+1]*g
var pixb = texturePixels[offset+2]*b
var pixa = texturePixels[offset+3]*a
if(t.interpolate){
pixr = lerp(lerpAmount, pixr, texturePixels[offset2]*r)
pixg = lerp(lerpAmount, pixg, texturePixels[offset2+1]*g)
pixb = lerp(lerpAmount, pixb, texturePixels[offset2+2]*b)
pixa = lerp(lerpAmount, pixa, texturePixels[offset2+3]*a)
}
setPixel(idx, x,y, pixr,pixg,pixb,pixa)
}
}
}
gl.activeTexture(gl.TEXTURE0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, textureSize, textureH, 0, gl.RGBA, gl.UNSIGNED_BYTE, texturePixels);
}
function drawIcon(x, y, id, obj) {
id = id < isCube ? (id | blockMode) : id
let X =  x / (3 * height) - 0.1666 * width / height
let Y = y / (3 * height) - 0.1666
let scale = 1
if(obj && obj.animation){
scale = obj.animation
}
let semiTrans
if(blockData[id].semiTrans) semiTrans = true
initModelView(null, X, Y, 0, 0, 0, scale)
let buffer = blockIcons[id]
let length = blockIcons.lengths[id]
if(!blockIcons[id]){
buffer = blockIconError
length = blockIconError.length
}
gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
gl.vertexAttribPointer(glCache.aVertex, 3, gl.FLOAT, false, 24, 0)
gl.vertexAttribPointer(glCache.aTexture, 2, gl.FLOAT, false, 24, 12)
gl.vertexAttribPointer(glCache.aShadow, 1, gl.FLOAT, false, 24, 20)
gl.disableVertexAttribArray(glCache.aSkylight)
gl.disableVertexAttribArray(glCache.aBlocklight)
gl.vertexAttrib1f(glCache.aSkylight, 1.0)
gl.vertexAttrib1f(glCache.aBlocklight, 1.0)
gl.drawElements(gl.TRIANGLES, length, gl.UNSIGNED_INT, 0)
if(semiTrans){
gl.uniform1i(glCache.uTrans, 1)
gl.drawElements(gl.TRIANGLES, length, gl.UNSIGNED_INT, 0)
gl.uniform1i(glCache.uTrans, 0)
}
if(!obj) return
let s = inventory.size
let s2 = s/2
let ts = inventory.ts
if(obj.durability){
let percent = obj.durability / blockData[id].durability
if(percent !== 1){
let ww = (s-(ts*2))
let w = ww*percent
let color = percent > 0.6666 ? "#af5" : (percent > 0.3333 ? "#fa0" : "#f55")
let dx = x-s2+ts
let dy = y+s2-(ts*3)
let prevFill = ctx2.fillStyle
ctx2.fillStyle = "#333"
ctx2.fillRect(dx,dy,ww,ts*2)
ctx2.fillStyle = color
ctx2.fillRect(dx,dy,w,ts)
ctx2.fillStyle = prevFill
}
}
}
function hotbar() {
FOV(90)
let s = inventory.size
let s2 = s/2
ctx2.fillStyle = "white"
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
for(let i = 0; i < inventory.hotbar.length; i ++) {
let x = width / 2 - inventory.hotbar.length / 2 * inventory.size + (i + 0.5) * inventory.size + 25
let y = height - inventory.size
if(inventory.hotbar[i].id) {
drawIcon(x, y, inventory.hotbar[i].id, inventory.hotbar[i])
if(survival && inventory.hotbar[i].amount>1) ctx2.fillText(inventory.hotbar[i].amount, x+(s/2), y+(s/2))
}
}
if(touchScreen && screen === "play"){
i++
let x = width / 2 - inventory.hotbar.length / 2 * inventory.size + (i + 0.5) * inventory.size + 25
let y = height - inventory.size
ctx.fillStyle = "#0a0"
ctx.fillRect(x-s2, y-s2, s,s)
ctx.textAlign = "center"
var prev = ctx.textBaseline
ctx.textBaseline = "middle";
ctx.fillStyle = "white"
ctx.fillText("...",x,y)
ctx.textBaseline = prev;
}
}
function hud() {
if (p.spectator) {
return
}
//{ why does hotbar dissapear???
gl.useProgram(program3D)
gl.uniform1i(glCache.uSampler, 0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
//}
hotbar()
let s = inventory.size
let s2 = s / 2
let x = width / 2 + 0.5
let y = height / 2 + 0.5
let maxX = width / 2 - inventory.hotbar.length / 2 * s + 9.5 * s + 25
textSize(10)
// Spyglass image
if(p.usingSpyglass){
var w2 = width / 2
var h2 = height / 2
var t = p.spyglassTimer > 250 ? 250 : p.spyglassTimer
var size = min(width, height)
size = map(t,0,250, size/2,size)
var size2 = size / 2
ctx.fillStyle = "black"
ctx.fillRect(0,0,width,height)
ctx.clearRect(w2 - size2, h2 - size2, size, size)
ctx.drawImage(images.spyglassScope, w2 - size2, h2 - size2, size, size)
}
// Crosshair
if (!p.spectator) {
ctx.lineWidth = 1
ctx.strokeStyle = "white"
ctx.beginPath()
ctx.moveTo(x - 10, y)
ctx.lineTo(x + 10, y)
ctx.moveTo(x, y - 10)
ctx.lineTo(x, y + 10)
ctx.stroke()
}
//Attack indicator
if(attackCooldown > 0){
var c = attackCooldown * 16
ctx.drawImage(images.attackIndicatorCrosshair, 0,0,16,4, x-16,y+10,32,8)
ctx.drawImage(images.attackIndicatorCrosshair, 16,0,c,4, x-16,y+10,c*2,8)
}
//Hotbar
x = width / 2 - 9 / 2 * s + 0.5 + 25
y = height - s * 1.5 + 0.5
ctx.strokeStyle = "black"
ctx.lineWidth = 2
ctx.beginPath()
ctx.moveTo(x, y)
ctx.lineTo(x + s * 9, y)
ctx.moveTo(x, y + s)
ctx.lineTo(x + s * 9, y + s)
for(let i = 0; i <= 9; i++) {
ctx.moveTo(x + i * s, y)
ctx.lineTo(x + i * s, y + s)
}
ctx.stroke()
ctx.strokeStyle = "white"
ctx.lineWidth = 2
ctx.beginPath()
ctx.strokeRect(width / 2 - 9 / 2 * s + inventory.hotbarSlot * s + 25, height - s * 1.5, s, s)
if(survival){
var iw = 18
var pw = 2 //pixel width
var pw2 = pw/2
var iw2 = iw/2
var dw = iw2 - pw2
var iy = y-iw-4-12
var ih = iw+2
//Health bar
var outline = (healEffect < 40 && healEffect > 30) || (healEffect < 20 && healEffect > 10)
if((loseHealthEffect < 60 && loseHealthEffect > 50) || (loseHealthEffect < 40 && loseHealthEffect > 30) || (loseHealthEffect < 20 && loseHealthEffect > 10)) outline = true
var heartNum = Math.floor(p.health)
let wither = witherEffect > 0
let i
for(i=0; i<heartNum; i+=2){
var heartX = (i * dw) + x;
var offY = p.health < 5 ? (round(Math.random())*2)-1 : 0
if(heartNum === i+1){
ctx.drawImage(images[wither ? "witherHalfHeart": (freezeEffect === 140 ? "freezeHalfHeart" : "halfHeart")], heartX, iy+offY, iw, iw);
}else{
ctx.drawImage(images[wither ? "witherHeart" : (freezeEffect === 140 ? "freezeHeart" : "heart")], heartX, iy+offY, iw, iw);
}
if(outline){
ctx.drawImage(images.whiteHeart, heartX, iy, iw, iw);
}
}
for(; i<20; i+=2){
var heartX = (i * dw) + x;
var offY = p.health < 5 ? (round(Math.random())*2)-1 : 0
ctx.drawImage(images.deadHeart, heartX, iy+offY, iw, iw);
if(outline){
ctx.drawImage(images.whiteHeart, heartX, iy+offY, iw, iw);
}
}
//Hunger bar
for(i=0; i<p.food; i+=2){
var offY = (p.foodJitter === 0)? round(Math.random())*2 : 0
var X = maxX - ((i+4) * iw2)
if(p.food === i+1){
ctx.drawImage(images.halfDrumstick, X, iy+offY, iw, iw);
}else{
ctx.drawImage(images.drumstick, X, iy+offY, iw, iw);
}
}
for(; i<20; i+=2){
var offY = (p.foodJitter === 0)? round(Math.random())*2 : 0
var X = maxX - ((i+4) * iw2)
ctx.drawImage(images.drumstickBG, X, iy+offY, iw, iw);
}
//Oxygen bar
if(p.oxygen !== 20){
for(i=0; i<p.oxygen; i+=2){
var bubbleX = (maxX - (iw*11)) + (i * iw2)
if(p.oxygen === i+1){
ctx.drawImage(images.bubblePop, bubbleX, iy-ih, iw, iw);
}else{
ctx.drawImage(images.bubble, bubbleX, iy-ih, iw, iw);
}
}
}
var xpBar = p.XP / p.nextLevel
var level = p.level
ctx.drawImage(images.experienceBar, 0,0,182,5, x,iy+ih,s*9,10)
ctx.drawImage(images.experienceBar, 0,5,182*xpBar,5, x,iy+ih,s*9*xpBar,10)
ctx.font = "18px mojangles"
ctx.textAlign = "center"
var barX = x+s*4.5
ctx.strokeStyle = "black"
ctx.lineWidth = 4
ctx.strokeText(level, barX, iy+ih)
ctx.fillStyle = colors.a
ctx.fillText(level, barX, iy+ih)
ctx.textAlign = "left"
}
if(freezeEffect > 0){
var opacity = freezeEffect / 140
ctx.globalAlpha = opacity
ctx.drawImage(images.freezeEffect,0,0,width,height)
ctx.globalAlpha = 1
}
if(inventory.showName > 0){
ctx.globalAlpha = inventory.showName > 1 ? 1 : inventory.showName
var Y = y - (s*1.5)
ctx.font = "18px mojangles"
var slot = inventory.hotbar[inventory.hotbarSlot]
var name = slot && slot.id && (blockData[slot.id].Name || blockData[slot.id].name)
if(name){
var w = ctx.measureText(name).width + 20
var X = (width / 2) - (w/2)
fill(0)
ctx.fillRect(X,Y,w,s)
fill(255)
ctx.textBaseline = "Middle"
ctx.fillText(name, X+10,Y+s2)
ctx.textBaseline = "Alphabetic"
}
ctx.globalAlpha = 1
}
ctx.fillStyle = "white"
ctx.font = "10px mojangles"
let str = "Average Frame Time: " + analytics.displayedFrameTime + "ms\n"
+ "Worst Frame Time: " + analytics.displayedwFrameTime + "ms\n"
+ "Render Time: " + analytics.displayedRenderTime + "ms\n"
+ "Tick Time: " + analytics.displayedTickTime + "ms\n"
+ "Rendered Chunks: " + renderedChunks.toLocaleString() + " / " + world.loaded.length + "\n"
+ "Generated Chunks: " + generatedChunks.toLocaleString() + "\n"
+ "FPS: " + analytics.fps//*temp*/ + "   atk-cdn_"+attackCooldown+",start_"+attackCooldownStart+",time_"+attackCooldownTime
if (p.autoBreak) {
text("Super breaker enabled", 5, height - 89, 12)
}
if (p.autoBuild) {
text("Hyper builder enabled", 5, height - 101, 12)
}
if (multiplayer) {
let closest = Infinity
let cname = "Yourself"
for (let name in players) {
let pos = players[name]
if(pos.dimension === world.type){
let distance = sqrt((pos.x - p2.x)*(pos.x - p2.x) + (pos.y+1 - p2.y)*(pos.y+1 - p2.y) + (pos.z - p2.z)*(pos.z - p2.z))
if (distance < closest) {
closest = distance
cname = pos.username
}
}
}
if(cname === "Yourself") closest = 0
var info = round(closest)+" blocks away"
if(closest === 0) info = "Right here"
text(`Closest player: ${cname} (${info})`, 5, height - 113, 12)
}
ctx.textAlign = 'right'
text(p2.x + ", " + p2.y + ", " + p2.z, width - 10, 15, 0)
ctx.textAlign = 'left'
text(str, 5, height - 77, 12)
}
function updateCraftingGrid(){
let arr = inventory.crafting.map(v => v?v.id:0)
let recipe = inventory.craftingStr = arr.join(",")
if(crafts[recipe]){
inventory.craftingRes = crafts[recipe]
}else{
var shapeless = shapelessCraft(arr)
if(shapeless){
inventory.craftingRes = crafts[shapeless]
}else{
inventory.craftingRes = 0
}
}
}
window.invScroll = 0;
let draggingInvBar = false
let invHeight = 0
var barW = 20
var invBarOffset = 0
var barH = 0
function drawInv(nodraw) {
let x = 0
let y = 0
let s = inventory.size
let s2 = s / 2
let perRow = 13
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
gl.useProgram(program3D)
gl.uniform1i(glCache.uSampler, 0)
gl.bindTexture(gl.TEXTURE_2D, textureAtlas)
ctx.fillStyle = "rgb(127, 127, 127)"
ctx.fillRect(0, 0, canvas.width, canvas.height)
ctx2.clearRect(0, 0, canvas.width, canvas.height)
FOV(90)
let count = 1;
if(survival){
count = invLength
}else{
for (let i = 1; i < BLOCK_COUNT; i++) {
if(!blockData[i].hidden)count ++;
}
}
invHeight = (Math.ceil(count / perRow) * s)
let invWinH = s * 9;
// Scrollbar
if(survival){invScroll = 0}else{
barH = height * (invWinH/invHeight);
if(draggingInvBar){
invScroll = map(mouseY-invBarOffset, (barH/2), height-(barH/2), 0, invHeight);
if(invScroll > invHeight) invScroll = invHeight
if(invScroll < 0) invScroll = 0
}
var barYCent = map(invScroll, 0, invHeight, (barH/2), height-(barH/2));
var barTop = barYCent - (barH/2);
fill(100)
ctx.fillRect(width-barW-2, 0, barW+2, height)
fill(200)
ctx.fillRect(width-barW, barTop, barW-2, barH)
}
// Draw the grid
ctx.translate(0, -(invScroll % s))
ctx.lineWidth = 1
ctx.strokeStyle = "black"
ctx.beginPath()
for (y = 0; y < 10; y++) {
ctx.moveTo(50.5 - s2, 50.5 - s2 + y * s)
ctx.lineTo(50.5 - s2 + s * perRow, 50.5 - s2 + y * s)
}
y--
for (x = 0; x < perRow + 1; x++) {
ctx.moveTo(50.5 - s2 + s * x, 50.5 - s2)
ctx.lineTo(50.5 - s2 + s * x, 50.5 - s2 + y * s)
}
ctx.translate(0, invScroll % s)
// Hotbar
x = width / 2 - inventory.hotbar.length / 2 * s + 0.5 + 25
y = height - s * 1.5 + 0.5
ctx.moveTo(x, y)
ctx.lineTo(x + s * 9, y)
ctx.moveTo(x, y + s)
ctx.lineTo(x + s * 9, y + s)
for(let i = 0; i <= inventory.hotbar.length; i ++) {
ctx.moveTo(x + i * s, y)
ctx.lineTo(x + i * s, y + s)
}
ctx.stroke()
let overHot = (mouseX - x) / s | 0
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
x += s * overHot
ctx.lineWidth = 2
ctx.strokeStyle = "white"
ctx.beginPath()
ctx.strokeRect(x, y, s, s)
}
//Box highlight in inv
let overInv = Math.round(((mouseY + invScroll) - 50) / s) * perRow + Math.round((mouseX - 50) / s)
if (overInv >= 0 && overInv < count - (survival?0:1) && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2) {
x = overInv % perRow * s + 50 - s2
y = (overInv / perRow | 0) * s + 50 - s2
y -= invScroll
if(mouseY < s*9.5){
ctx.lineWidth = 2
ctx.strokeStyle = "white"
ctx.beginPath()
ctx.strokeRect(x, y, s, s)
}
}
if (inventory.holding && inventory.holding.id) {
drawIcon(mouseX, mouseY, inventory.holding.id, inventory.holding)
if(survival){
ctx2.fillStyle = "white"
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillText(inventory.holding.amount, mouseX+s2, mouseY+s2)
}
}
if(survival){
ctx2.fillStyle = "white"
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
for (let i = 0; i < invLength; i++) {
if(invItems[i] && invItems[i].id){
x = (i) % perRow * s + 50
y = ((i) / perRow | 0) * s + 50
drawIcon(x, y - invScroll, invItems[i].id, invItems[i])
if(inventory.spreaded.length && inventory.spreaded.includes(i)){
ctx.fillStyle = "rgb(180,180,180)"
ctx.fillRect(x+1-s2,y+1-s2,s-2,s-2)
}else ctx2.fillText(invItems[i].amount, x+s2, y+s2)
}
}
}else{
let invIdx = 0;
for (let i = 1; i < BLOCK_COUNT; i++) {
invIdx ++;
if(blockData[i].hidden){
while(blockData[i] && blockData[i].hidden) i++
if(!blockData[i]) break
}
x = (invIdx - 1) % perRow * s + 50
y = ((invIdx - 1) / perRow | 0) * s + 50
y -= invScroll
if(y < s*9.5 && y > 0){
drawIcon(x, y, i)
}
}
}
if(screen === "inventory"){
let offX = width - s*4
let offY = s*2
//draw grid
ctx.lineWidth = 1
ctx.strokeStyle = "black"
ctx.beginPath()
let y = s*2+offY
let x
for(x=0; x<3; x++){
ctx.moveTo(x*s+offX, offY)
ctx.lineTo(x*s+offX, y)
}
x = s*2+offX
for(y=0; y<3; y++){
ctx.moveTo(offX, y*s+offY)
ctx.lineTo(x, y*s+offY)
}
ctx.stroke()
//icons
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
for(y=0; y<2; y++){
for(x=0; x<2; x++){
let idx = (y*3) + x
if(inventory.crafting[idx] && inventory.crafting[idx].id){
let X = x*s+offX, Y = y*s+offY
drawIcon(X+s2,Y+s2, inventory.crafting[idx].id, inventory.crafting[idx])
ctx2.fillText(inventory.crafting[idx].amount, X+s, Y+s)
}
}
}
x = Math.floor((mouseX - offX) / s)
y = Math.floor((mouseY - offY) / s)
let over = (y * 3) + x
if(!(x >= 0 && x < 2 && y >= 0 && y < 2)){
over = -1
}else if(over > -1 && over < 9){
ctx.lineWidth = 2
ctx.strokeStyle = "white"
ctx.strokeRect(x*s+offX, y*s+offY, s,s)
}
x = offX + (s/2)
y = offY + (s*3)
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(inventory.craftingRes && inventory.craftingRes.id){
drawIcon(x+s2, y+s2, inventory.craftingRes.id, inventory.craftingRes)
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
ctx2.fillText(inventory.craftingRes.amount, x+s, y+s)
}
ctx.drawImage(gl.canvas,0,0)
if(inventory.craftingRes && inventory.craftingRes.id){
let name = blockData[inventory.craftingRes.id].Name || blockData[inventory.craftingRes.id].name
if(name !== "" && over){
ctx.textAlign = "left"
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10, mouseY+13+2);
}
}
}
hotbar()
//hud()
ctx.drawImage(gl.canvas, 0, 0)
// show block name on hover
if (overInv >= 0 && overInv < count - (survival?0:1) && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2) {
x = overInv % perRow
y = (overInv / perRow | 0)
var wrongidx = x+(y*perRow)+1;
var idx=1;
if(survival){
idx = wrongidx - 1
}else{
for(var i=1; i<wrongidx; i++){
idx++;
if(blockData[i+1] && blockData[i+1].hidden){
/*let i2 = idx
while(blockData[i2] && blockData[i2].hidden){
i2++
idx++
}*/
idx++
}
}
}
let name;
if(survival){
let id = invItems[idx] ? invItems[idx].id : 0
name = id ? blockData[id].Name || blockData[id].name : "";
}else{
name = blockData[idx] ? blockData[idx].Name || blockData[idx].name : "";
}
if((name !== "") && mouseY<s*9.5){
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10, mouseY+13+2);
}
}
//show name on hover for hotbar
x = width / 2 - inventory.hotbar.length / 2 * s + 0.5 + 25
y = height - s * 1.5 + 0.5
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
let slot = inventory.hotbar[overHot]
let name = slot && slot.id && (blockData[slot.id].Name || blockData[slot.id].name)
name = name || ""
if(name !== ""){
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10, mouseY+13+2);
}
}
if(!nodraw)ctx.drawImage(canvas2, 0,0)
}
function clickInv(dontRedraw,mouse) {
let s = inventory.size
let s2 = s / 2
let perRow = 13
let over = Math.round((mouseY + invScroll - 50) / s) * perRow + Math.round((mouseX - 50) / s)
if(!survival){
var idx = 0;
for(var i=1; i<over+1; i++){
if(!blockData[i]) break;
idx ++;
if(blockData[i+1] && blockData[i+1].hidden)idx++;
}
over = idx;
}
let count = survival ? invLength : BLOCK_COUNT - 1
//for crafting
let offX = width - s*4
let offY = s * 2
let craftResX = offX+(s/2)
let craftResY = offY+(s*3)
let x = width / 2 - 9 / 2 * s + 25
let y = height - s * 1.5
let overHot = (mouseX - x) / s | 0
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
let temp = inventory.hotbar[overHot]
inventory.hotbar[overHot] = inventory.holding
inventory.holding = temp
} else if (over >= 0 && over < count && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2 && mouseY < s*9.5) {
if(survival){
if(!invItems[over]) invItems[over] = {id:0,amount:0}
if(mouse === 2 && inventory.holding.amount > 1){
let holding = inventory.holding
let slot = invItems[over]
if(holding.id){
var canSplit = holding.id === slot.id && slot.amount < blockData[slot.id].stackSize
if(!slot.id){
canSplit = true
slot.id = holding.id
slot.amount = 0
}
if(canSplit){
slot.amount ++
holding.amount --
if(holding.amount <= 0) holding.id = 0
}
}
}else{
if(invItems[over] && invItems[over].id){
let temp = inventory.holding
if(temp.id === invItems[over].id && temp.amount < blockData[temp.id].stackSize && invItems[over].amount < blockData[invItems[over].id].stackSize){ //stacking together
let stackSize = blockData[invItems[over].id].stackSize
while(temp.amount > 0){
temp.amount--
invItems[over].amount ++
if(invItems[over].amount >= blockData[invItems[over].id].stackSize) break
}
if(temp.amount <= 0){
temp.id = 0
}
}else{
inventory.holding = invItems[over]
if(temp && temp.id){
invItems[over] = temp
}else invItems[over] = {id:0,amount:0}
}
}else if(inventory.holding){
invItems[over] = inventory.holding
inventory.holding = 0
inventory.spreadStart = over
inventory.spreadPlace = "invSpace"
}
}
}else{
inventory.holding = {id:over + 1, amount:blockData[over+1].stackSize}
}
} else if(screen === "inventory" && mouseX>offX && mouseX<offX+(s*2) && mouseY>offY && mouseY<offY+(s*2)){
//inv crafting grid
let X = Math.floor((mouseX - offX) / s)
let Y = Math.floor((mouseY - offY) / s)
let idx = (Y*3)+X
if(mouse === 2 && inventory.holding.amount > 1){
if(!inventory.crafting[idx]) inventory.crafting[idx] = {id:0,amount:0}
let holding = inventory.holding
let slot = inventory.crafting[idx]
if(holding.id){
var canSplit = holding.id === slot.id && slot.amount < blockData[slot.id].stackSize
if(!slot.id){
canSplit = true
slot.id = holding.id
slot.amount = 0
}
if(canSplit){
slot.amount ++
holding.amount --
if(holding.amount <= 0) holding.id = 0
}
}
}else{
let temp = inventory.holding
inventory.holding = inventory.crafting[idx]
inventory.crafting[idx] = temp
}
updateCraftingGrid()
}else if(screen === "inventory" && mouseX>craftResX && mouseX<craftResX+s && mouseY>craftResY && mouseY<craftResY+s && inventory.craftingRes && inventory.craftingRes.id){
//inv crafting output
inventory.holding = Object.assign({}, inventory.craftingRes)
for(let i=0; i<9; i++){
let block = inventory.crafting[i]
if(block && block.id){
block.amount --
if(block.amount < 1)inventory.crafting[i].id = 0
}
}
var r = inventory.holding && inventory.holding.id
if(r === blockIds.craftingTable){
achievment("Benchmaking")
}
updateCraftingGrid()
}else if(screen === "crafting" && mouseX>offX && mouseX<offX+(s*3) && mouseY>offY && mouseY<offY+(s*3)){}else{
inventory.holding = 0
}
if(!dontRedraw)drawScreens.inventory()
}
function moveInv(){
let s = inventory.size
let s2 = s / 2
let perRow = 13
let over = Math.round((mouseY + invScroll - 50) / s) * perRow + Math.round((mouseX - 50) / s)
if(!survival){
var idx = 0;
for(var i=1; i<over+1; i++){
if(!blockData[i]) break;
idx ++;
if(blockData[i+1] && blockData[i+1].hidden)idx++;
}
over = idx;
}
let count = survival ? invLength : BLOCK_COUNT - 1
//for crafting
let offX = width - s*4
let offY = s * 2
let craftResX = offX+(s/2)
let craftResY = offY+(s*3)
let x = width / 2 - 9 / 2 * s + 25
let y = height - s * 1.5
let overHot = (mouseX - x) / s | 0
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
//hotbar
} else if (over >= 0 && over < count && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2 && mouseY < s*9.5) {
if(survival){
if(!invItems[over]) invItems[over] = {id:0,amount:0}
if(inventory.spreadPlace === "invSpace" && inventory.spreadStart > -1 && invItems[inventory.spreadStart].amount > 1 && mouseDown){
inventory.spreading = true
}
if(inventory.spreading && !(invItems[over] && invItems[over].id) && over !== inventory.spreadStart && inventory.spreaded.length < invItems[inventory.spreadStart].amount){
if(inventory.spreaded.length){
invItems[over] = invItems[inventory.spreadStart]
inventory.spreaded.push(over)
}else{
invItems[over] = invItems[inventory.spreadStart]
inventory.spreaded.push(inventory.spreadStart, over)
}
}
}
}
}
function releaseInv(){
let s = inventory.size
let s2 = s / 2
let perRow = 13
let over = Math.round((mouseY + invScroll - 50) / s) * perRow + Math.round((mouseX - 50) / s)
if(!survival){
var idx = 0;
for(var i=1; i<over+1; i++){
if(!blockData[i]) break;
idx ++;
if(blockData[i+1] && blockData[i+1].hidden)idx++;
}
over = idx;
}
let count = survival ? invLength : BLOCK_COUNT - 1
//for crafting
let offX = width - s*4
let offY = s * 2
let craftResX = offX+(s/2)
let craftResY = offY+(s*3)
let x = width / 2 - 9 / 2 * s + 25
let y = height - s * 1.5
let overHot = (mouseX - x) / s | 0
if (mouseX < x + 9 * s && mouseX > x && mouseY > y && mouseY < y + s) {
//hotbar
} else if (over >= 0 && over < count && mouseX < 50 - s2 + perRow * s && mouseX > 50 - s2 && mouseY < s*9.5) {
if(survival){
if(!invItems[over]) invItems[over] = {id:0,amount:0}
if(inventory.spreadPlace === "invSpace" && inventory.spreaded.length){
//a/b with remainder
var a=invItems[inventory.spreadStart].amount
var b=inventory.spreaded.length
var n=a/b
var f=floor(n)
var r=n-f
n=f
r=floor(r*b)//sometimes not precise so use floor
//n = result   r = remainder
var id = invItems[inventory.spreadStart].id
for(var i=0; i<inventory.spreaded.length; i++){
invItems[inventory.spreaded[i]] = {id:id, amount:n}
}
if(r) inventory.holding = {id:id, amount:r}
inventory.spreaded = []
}
inventory.spreadStart = -1
inventory.spreading = false
}
}
}
function drawCrafting(mouse) {
drawInv(true, mouse)
let s = inventory.size
let s2 = s/2
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
let offX = width - s*4
let offY = s * 2
//draw grid
ctx.lineWidth = 1
ctx.strokeStyle = "black"
ctx.beginPath()
let y = s*3+offY
let x
for(x=0; x<4; x++){
ctx.moveTo(x*s+offX, offY)
ctx.lineTo(x*s+offX, y)
}
x = s*3+offX
for(y=0; y<4; y++){
ctx.moveTo(offX, y*s+offY)
ctx.lineTo(x, y*s+offY)
}
ctx.stroke()
//icons
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
for(y=0; y<3; y++){
for(x=0; x<3; x++){
let idx = (y*3) + x
if(inventory.crafting[idx] && inventory.crafting[idx].id){
let X = x*s+offX, Y = y*s+offY
drawIcon(X+s2,Y+s2, inventory.crafting[idx].id, inventory.crafting[idx])
ctx2.fillText(inventory.crafting[idx].amount, X+s, Y+s)
}
}
}
x = Math.floor((mouseX - offX) / s)
y = Math.floor((mouseY - offY) / s)
let over = (y * 3) + x
if(!(x >= 0 && x < 3 && y >= 0 && y < 3)){
over = -1
}else if(over > -1 && over < 9){
ctx.lineWidth = 2
ctx.strokeStyle = "white"
ctx.strokeRect(x*s+offX, y*s+offY, s,s)
}
x = offX + (s)
y = offY + (s*4)
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(inventory.craftingRes && inventory.craftingRes.id){
drawIcon(x+s2, y+s2, inventory.craftingRes.id, inventory.craftingRes)
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
ctx2.fillText(inventory.craftingRes.amount, x+s, y+s)
}
ctx.drawImage(gl.canvas,0,0)
if(inventory.craftingRes && inventory.craftingRes.id){
let name = blockData[inventory.craftingRes.id].Name || blockData[inventory.craftingRes.id].name
if(name !== "" && over){
ctx.textAlign = "left"
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10, mouseY+13+2);
}
}
ctx.drawImage(canvas2,0,0)
}
function clickCrafting(mouse) {
clickInv(true, mouse)
let s = inventory.size
let s2 = s/2
let offX = width - s*4
let offY = s * 2
let x = offX + (s)
let y = offY + (s*4)
//get thing from output
let over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
if(over && inventory.craftingRes && inventory.craftingRes.id){
inventory.holding = Object.assign({}, inventory.craftingRes)
for(let i=0; i<9; i++){
let block = inventory.crafting[i]
if(block && block.id){
block.amount --
if(block.amount < 1)inventory.crafting[i].id = 0
}
}
//achievments
var r = inventory.holding && inventory.holding.id
if(r && blockData[r].pickaxe){
achievment("Time to Mine!")
}
if(r === blockIds.stonePickaxe){
achievment("Getting an Upgrade")
}
if(r === blockIds.bread){
achievment("Bake Bread")
}
if(r && blockData[r].sword){
achievment("Time to Strike!")
}
if(r && blockData[r].hoe){
achievment("Time to Farm!")
}
}
//grid
if(mouseX>offX && mouseX<offX+(s*3) && mouseY>offY && mouseY<offY+(s*3)){
let X = Math.floor((mouseX - offX) / s)
let Y = Math.floor((mouseY - offY) / s)
let idx = (Y*3)+X
let temp = inventory.holding
if(mouse === 2 && inventory.holding.amount > 1){
if(!inventory.crafting[idx]) inventory.crafting[idx] = {id:0,amount:0}
let holding = inventory.holding
let slot = inventory.crafting[idx]
if(holding.id){
var canSplit = holding.id === slot.id && slot.amount < blockData[slot.id].stackSize
if(!slot.id){
canSplit = true
slot.id = holding.id
slot.amount = 0
}
if(canSplit){
slot.amount ++
holding.amount --
if(holding.amount <= 0) holding.id = 0
}
}
}else{
inventory.holding = inventory.crafting[idx]
inventory.crafting[idx] = temp
}
}
updateCraftingGrid()
drawScreens.crafting()
}
function drawFurnace(){
drawInv(true)
let s = inventory.size
let s2 = s/2
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
var toPlay
var data = world.getTags(furnaceData.x, furnaceData.y, furnaceData.z)
if(!data || !(data&&data.furnace)){
var block = world.getBlock(furnaceData.x, furnaceData.y, furnaceData.z)
if(blockData[block].name === "furnace"){
data = {furnace:true, input:0, fuel:0, output:0, smeltStart:0, burnStart:0, canBurn:false, smelting:false, xp:0}
world.setTags(furnaceData.x, furnaceData.y, furnaceData.z, data)
}else toPlay = true //furnace doesn't exsist here
}
furnaceData.data = data
data.smelting = data.input && data.fuel && smelts[data.input.id] && smeltFuel[data.fuel.id] && true
if(data.smelting){
var smeltTo = smelts[data.input.id]
var fuel = smeltFuel[data.fuel.id]
var seconds = (Date.now() - data.smeltStart) / 1000
var progress = seconds * 20 //ticks
var burnProgress = (Date.now() - data.burnStart) / 1000
data.progress = progress / smeltTo.time
data.burnProgress = 1-(burnProgress / fuel.time)
if(progress >= smeltTo.time){
var a = floor(progress/smeltTo.time)
for(var i=0; i<a; i++){
data.input.amount --
data.xp += smeltTo.xp
if(data.output){
data.output.amount ++
}else{
data.output = {id:smeltTo.id, amount:1}
}
if(data.input.amount >= 0){
data.input = 0
break
}
}
data.smeltStart += (a/20)*smeltTo.time*1000
}
if(burnProgress >= fuel.time){
data.canBurn = false
}
if(!data.canBurn){
var a = floor(burnProgress/fuel.time)
for(var i=0; i<a; i++){
data.fuel.amount --
if(data.fuel.amount === 0){
data.fuel = 0
break
}
}
data.burnStart += a*fuel.time*1000
data.canBurn = true
}
}
var block = world.getBlock(furnaceData.x,furnaceData.y,furnaceData.z)
var needs
if((block & SOUTH) === SOUTH){
needs = SOUTH
}else if((block & WEST) === WEST){
needs = WEST
}else if((block & EAST) === EAST){
needs = EAST
}else{
needs = NORTH
}
needs |= blockIds.furnace
if(data.smelting){
needs |= SLAB
}
if(!toPlay && block !== needs){
world.setBlock(furnaceData.x,furnaceData.y,furnaceData.z, needs, false, false, false, true)//last argument is keepTags
}
let offX = width - s*4
let offY = s * 2
ctx.font = "20px mojangles"
ctx.fillStyle = "white"
ctx.textAlign = "left"
ctx.fillText("Furnace", offX, offY - s2)
//font for numbers
ctx2.font = "14px mojangles"
ctx2.textAlign = "right"
ctx2.fillStyle = "white"
let x = offX+s2-2
let y = offY+s
fill(100)
ctx.fillRect(x,y,4,s)
if(data.burnProgress){
fill(255,data.burnProgress*255,0)
let h = data.burnProgress*s
ctx.fillRect(x,y+s-h,4,h)
}
x = offX+s
y = offY+s
ctx.strokeStyle = "black"
ctx.lineWidth = 1
ctx.beginPath()
ctx.moveTo(x+s,y+s2)
ctx.lineTo(x+s2,y)
ctx.moveTo(x+s,y+s2)
ctx.lineTo(x+s2,y+s)
ctx.stroke()
y = y+s2-2
fill(0)
ctx.fillRect(x,y,s,4)
if(data.progress){
fill(255)
ctx.fillRect(x,y,s*data.progress,4)
}
//input
x = offX
y = offY
let over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(data.input && data.input.id){
drawIcon(x+s2, y+s2, data.input.id, data.input)
ctx2.fillText(data.input.amount, x+s, y+s)
}
//fuel
x = offX
y = offY + (s*2)
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(data.fuel && data.fuel.id){
drawIcon(x+s2, y+s2, data.fuel.id, data.fuel)
ctx2.fillText(data.fuel.amount, x+s, y+s)
}
//output
x = offX + (s*2)
y = offY + s
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
ctx.lineWidth = over?2:1
ctx.strokeStyle = over?"white":"black"
ctx.strokeRect(x,y, s,s)
if(data.output && data.output.id){
drawIcon(x+s2, y+s2, data.output.id, data.output)
ctx2.fillText(data.output.amount, x+s, y+s)
}
ctx.drawImage(gl.canvas,0,0)
if(over && data.output && data.output.id){ //this is right aligned so you can see it
let name = blockData[data.output.id].Name || blockData[data.output.id].name
if(name !== "" && over){
ctx.textAlign = "left"
ctx.font = "16px mojangles";
var w = ctx.measureText(name).width;
fill(0)
ctx.fillRect(mouseX-w-20, mouseY, w+20, 20);
fill(255);
ctx.fillText(name, mouseX+10-w-20, mouseY+13+2);
}
}
ctx.drawImage(canvas2,0,0)
if(toPlay) play()
}
function clickFurnace(mouse){
let s = inventory.size
let s2 = s/2
let offX = width - s*4
let offY = s * 2
var data = furnaceData.data //inventory.furnaceData.data
let temp
var clicked
//input
let x = offX
let y = offY
let over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
if(over){
temp = data.input
data.input = inventory.holding
inventory.holding = temp
data.smeltStart = Date.now()
data.burnStart = Date.now()
clicked = true
}
//fuel
x = offX
y = offY + (s*2)
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
if(over){
temp = data.fuel
data.fuel = inventory.holding
inventory.holding = temp
data.burnStart = Date.now()
data.smeltStart = Date.now()
clicked = true
}
//output
x = offX + (s*2)
y = offY + s
over = mouseX>x && mouseX<x+s && mouseY>y && mouseY<y+s
if(over){
inventory.holding = data.output
if(data.output && data.output.id){
var xp = data.xp
data.xp = 0
world.addEntity(new ExperienceOrb(p.x,p.y,p.z, xp))
}
data.output = 0
clicked = true
}
if(!clicked)clickInv(true, mouse)
drawScreens.furnace()
}
let unpauseDelay = 0
function mmoved(e) {
let mouseS = settings.mouseSense / 30000
p.rx -= e.movementY * mouseS
p.ry += e.movementX * mouseS
while(p.ry > Math.PI*2) {
p.ry -= Math.PI*2
}
while(p.ry < 0) {
p.ry += Math.PI*2
}
if(p.rx > Math.PI / 2) {
p.rx = Math.PI / 2
}
if(p.rx < -Math.PI / 2) {
p.rx = -Math.PI / 2
}
}
function trackMouse(e) {
if (screen !== "play") {
cursor("")
mouseX = e.x
mouseY = e.y
if(screen !== "main menu" && !(screen === "furnace" && furnaceData.data.smelting)){
drawScreens[screen]()
Button.draw()
Slider.draw()
Slider.drag()
}
}
if(screen === "inventory" || screen === "crafting" || screen === "furnace") moveInv()
}
document.onmousemove = trackMouse
win.pTouch = {x: -100, y: 0};
canvas.addEventListener("touchstart", function(e) {
pTouch.x = e.changedTouches[0].pageX;
pTouch.y = e.changedTouches[0].pageY;
pTouch.touching = mouseDown=true
pTouch.touchStart = Date.now()
pTouch.moved = false
pTouch.canDig = true
}, false);
canvas.addEventListener("touchmove", function(e) {
e.movementY = -(e.changedTouches[0].pageY - pTouch.y);
e.movementX = -(e.changedTouches[0].pageX - pTouch.x);
pTouch.x = e.changedTouches[0].pageX;
pTouch.y = e.changedTouches[0].pageY;
mmoved(e);
pTouch.moved = true
if(Date.now() - pTouch.touchStart < touchMoveLimit && e.movementX < 10 && e.movementY < 10){
pTouch.canDig = false
}
e.preventDefault();
}, false);
var touchend = e => {
pTouch.touching = mouseDown = false
}
canvas.addEventListener("touchend",touchend,false)
canvas.addEventListener("touchcancel",touchend,false)
document.onpointerlockchange = function() {
if (doc.pointerLockElement === canvas) {
doc.onmousemove = mmoved
} else {
doc.onmousemove = trackMouse
if (screen === "play" && !freezeFrame) {
changeScene("pause")
unpauseDelay = Date.now() + 1000
}
}
for (let key in Key) {
Key[key] = false
}
}
canvas.onmousedown = function(e) {
mouseX = e.x
mouseY = e.y
mouseDown = true
let block, index
switch(e.button) {
case 0:
Key.leftMouse = true
break
case 1:
Key.middleMouse = true
if (!hitBox.pos || survival) break
updateHUD = true
block = world.getBlock(hitBox.pos[0], hitBox.pos[1], hitBox.pos[2]) & 0x3ff
index = -1
for(var i=0; i<inventory.hotbar.length; i++){
if(inventory.hotbar[i].id === block){
index = i
break
}
}
if (index >= 0) {
inventory.hotbarSlot = index
} else {
inventory.hotbar[inventory.hotbarSlot].id = block
}
break
case 2:
Key.rightMouse = true
break
}
if(screen === "play") {
if (doc.pointerLockElement !== canvas) {
getPointer()
p.lastBreak = Date.now()
} else {
place = false
if(e.button === 0) {
if(Key.control) {
place = true
} else if(entHitbox.ent){
holding = inventory.hotbar[inventory.hotbarSlot].id
entClick()
}else if(!survival){
changeWorldBlock(0)
}
}
holding = inventory.hotbar[inventory.hotbarSlot].id
if(e.button === 2 && holding) {
place = true
}
if(place) {
p.spyglassStart = Date.now()
newWorldBlock()
}
}
} else if (screen === "inventory" || screen === "crafting" || screen === "furnace") {
if(mouseDown && mouseX >= width-barW){
draggingInvBar = true
invBarOffset = mouseY-map(invScroll, 0, invHeight, (barH/2), height-(barH/2))
}
if(screen === "crafting")clickCrafting(e.button)
else if(screen === "furnace")clickFurnace(e.button)
else clickInv(false, e.button)
}
Button.click()
Slider.click()
}
canvas.onmouseup = function(e) {
switch(e.button) {
case 0:
Key.leftMouse = false
break
case 1:
Key.middleMouse = false
break
case 2:
Key.rightMouse = false
break
}
mouseDown = false
Slider.release()
draggingInvBar = false
if(screen === "inventory" || screen === "crafting" || screen === "furnace") releaseInv()
}
for(var onscreencontrol in onscreenControls){
var onscreencontrolElement = onscreenControls[onscreencontrol]
onscreencontrolElement.value = onscreencontrol
onscreencontrolElement.onmousedown=function(){
canvas.onkeydown({key:this.value})
}
onscreencontrolElement.onmouseup=function(){
canvas.onkeyup({key:this.value})
}
onscreencontrolElement.addEventListener("touchstart",onscreencontrolElement.onmousedown)
onscreencontrolElement.addEventListener("touchend",onscreencontrolElement.onmouseup)
onscreencontrolElement.addEventListener("touchcancel",onscreencontrolElement.onmouseup)
}
onscreenControls[" "].addEventListener("click",function(){
if (!survival && !p.spectator) {//fly toggle
if (Date.now() < p.lastJump + 400) {
p.flying ^= true
} else {
p.lastJump = Date.now()
}
}
})
let lastForward = 0
onscreenControls.w.addEventListener("touchstart",function(){
if (Date.now() < lastForward + 400) { //sprint toggle
player.sprinting = true
} else {
lastForward = Date.now()
}
})
onscreenControls.w.addEventListener("touchend",() => p.sprinting = false)
onscreenControls.w.addEventListener("touchcancel",() => p.sprinting = false)
onscreenControls[" "].addEventListener("mousedown",function(){
Key[" "]=true
})
onscreenControls[" "].addEventListener("mouseup",function(){
Key[" "]=false
})
onscreenControls[" "].addEventListener("touchstart",function(){
Key[" "]=true
})
onscreenControls[" "].addEventListener("touchend",function(){
Key[" "]=false
})
onscreenControl_Element.onclick = e => {mouseX = e.x; mouseY = e.y}
let changeSlot = () => {
for(let i = 0; i < inventory.hotbar.length; i ++) {
let x = width / 2 - inventory.hotbar.length / 2 * inventory.size + (i + 0.5) * inventory.size + 25
let y = height - inventory.size
x -= inventory.size/2
y -= inventory.size/2
if((mouseX>x)&&(mouseY>y)&&(mouseX < x+inventory.size)&&(mouseY < y+inventory.size)){
inventory.hotbarSlot = i
holding = inventory.hotbar[inventory.hotbarSlot].id
updateHUD = true
}
}
i ++
let x = width / 2 - inventory.hotbar.length / 2 * inventory.size + (i + 0.5) * inventory.size + 25
let y = height - inventory.size
x -= inventory.size/2
y -= inventory.size/2
if((mouseX>x)&&(mouseY>y)&&(mouseX < x+inventory.size)&&(mouseY < y+inventory.size)){
changeScene("inventory")
}
}
onscreenControl_Element.addEventListener("click",changeSlot)
onscreenControl_Element.addEventListener("touchend",changeSlot)
canvas.onkeydown = function(e) {
let k = e.key.toLowerCase()
if (e.preventDefault && k === " ") {
e.preventDefault()
}
if (e.repeat || Key[k]) {
return
}
Key[k] = true
if (k === "t") {
initTextures()
}
if (k === controlMap.cycleBlockShapes.key) {
blockMode = blockMode === CUBE ? SLAB : (blockMode === SLAB ? STAIR : (blockMode === STAIR ? FENCE : (blockMode === FENCE ? WALLPOST : (blockMode === WALLPOST ? WALL : (blockMode === WALL ? WALLU : (blockMode === WALLU ? FENCQ : CUBE))))))
updateHUD = true
}
if (screen === "play") {
if(k === controlMap.pause.key) {
releasePointer()
changeScene("pause")
}
if(k === controlMap.superBreaker.key) {
p.autoBreak = !p.autoBreak
updateHUD = true
if(survival) p.autoBreak = false
}
if(k === controlMap.hyperBuilder.key) {
p.autoBuild = !p.autoBuild
updateHUD = true
if(survival) p.autoBuild = false
}
if (k === controlMap.jump.key && !p.spectator) {
if (Date.now() < p.lastJump + 400) {
p.flying ^= true
if(survival) p.flying = false
} else {
p.lastJump = Date.now()
}
}
if (k === controlMap.zoom.key) {
p.FOV(10, 300)
}
if (k === controlMap.sneak.key && !p.flying) {
p.sneaking = true
if (p.sprinting) {
p.FOV(settings.fov, 100)
}
p.sprinting = false
p.speed = 0.03
p.bottomH = 1.32
}
if (k === controlMap.spectator.key && !survival) {
p.spectator = !p.spectator
p.flying = true
p.onGround = false
updateHUD = true
}
if (k === controlMap.thirdPerson.key){
p.thirdPerson = !p.thirdPerson
}
if (k === controlMap.inventory.key) {
changeScene("inventory")
releasePointer()
achievment("Taking Inventory")
}
if (k === ";") {
releasePointer()
freezeFrame = true
}
if(k === controlMap.chat.key){
Messages.showInput()
}
if (k === controlMap.dropItem.key && inventory.hotbar[inventory.hotbarSlot] && inventory.hotbar[inventory.hotbarSlot].id) {
let d = p.direction
let block = holding || inventory.hotbar[inventory.hotbarSlot].id
block = block < isCube ? block | blockMode : block
world.addEntity(new Item(p.x + (d.x), p.y + (d.y), p.z + (d.z), d.x/4, d.y/4, d.z/4, block))
if(survival){
inventory.hotbar[inventory.hotbarSlot].amount --
updateHUD = true
}
}
if(Number(k)) {
inventory.hotbarSlot = Number(k) - 1
inventory.showName = 1.5
holding = inventory.hotbar[inventory.hotbarSlot].id
updateHUD = true
}
} else if (screen === "pause") {
if(k === controlMap.pause.key) {
play()
}
} else if (screen === "inventory" || screen === "crafting" || screen === "furnace") {
if (k === controlMap.inventory.key) {
if(screen === "crafting" || screen === "inventory"){
for(var i=0; i<9; i++){
if(inventory.crafting[i] && inventory.crafting[i].id){
for(var n=0; n<inventory.crafting[i].amount; n++)newInvItem(inventory.crafting[i].id)
inventory.crafting[i].id = 0
}
}
inventory.craftingRes = 0
}
play()
}
if (k === controlMap.cycleBlockShapes.key) {
drawScreens.inventory()
}
}
}
canvas.onkeyup = function(e) {
let k = e.key.toLowerCase()
Key[k] = false
if(k === "escape" && (screen === "pause" || screen === "inventory" || screen === "options" && previousScreen === "pause") && Date.now() > unpauseDelay) {
play()
}
if (screen === "play") {
if (k === controlMap.zoom.key) {
p.FOV(settings.fov, 300)
}
if (k === controlMap.sneak.key && p.sneaking) {
p.sneaking = false
p.speed = 0.075
p.bottomH = 1.62
// p.y += 0.3
}
}
}
canvas.onblur = function() {
for (let key in Key) {
Key[key] = false
}
mouseDown = false
Slider.release()
}
canvas.oncontextmenu = function(e) {
e.preventDefault()
}
window.onbeforeunload = e => { 
if (screen === "play" && Key.control) {
releasePointer()
e.preventDefault()
e.returnValue = "Q is the sprint button; Ctrl + W closes the page."
return true
}
}
canvas.onwheel = e => {
e.preventDefault()
e.stopPropagation()
if(screen === "play"){
if (e.deltaY > 0) {
inventory.hotbarSlot++
} else if (e.deltaY < 0) {
inventory.hotbarSlot--
}
if (inventory.hotbarSlot > 8) {
inventory.hotbarSlot = 0
} else if (inventory.hotbarSlot < 0) {
inventory.hotbarSlot = 8
}
updateHUD = true
holding = inventory.hotbar[inventory.hotbarSlot].id
}
if(screen === "inventory" || screen === "crafting" || screen === "furnace"){
invScroll += e.deltaY
if(invScroll < 0) invScroll = 0
if(invScroll > invHeight) invScroll = invHeight
drawScreens[screen]()
}
}
document.onwheel = e => {} // Shouldn't do anything, but it helps with a Khan Academy bug somewhat
window.onresize = e => {
width = window.innerWidth
height = window.innerHeight
canvas.height = height
canvas.width = width
ctx.imageSmoothingEnabled = false
canvas2.width = width
canvas2.height = height
gl.canvas.height = height
gl.canvas.width = width
gl.viewport(0, 0, width, height)
initButtons()
initBackgrounds()
inventory.size = 40 * min(width, height) / 600
inventory.ts = inventory.size / 16
genIcons()
use3d()
p.FOV(p.currentFov + 0.0001)
if (screen === "play") {
play()
} else {
drawScreens[screen]()
Button.draw()
Slider.draw()
}
}
function use2d() {
gl.disableVertexAttribArray(glCache.aTexture)
gl.disableVertexAttribArray(glCache.aShadow)
gl.disableVertexAttribArray(glCache.aVertex)
gl.disableVertexAttribArray(glCache.aSkylight)
gl.disableVertexAttribArray(glCache.aBlocklight)
gl.useProgram(program2D)
gl.enableVertexAttribArray(glCache.aVertex2)
gl.enableVertexAttribArray(glCache.aTexture2)
gl.enableVertexAttribArray(glCache.aShadow2)
}
function use3d() {
gl.disableVertexAttribArray(glCache.aTexture2)
gl.disableVertexAttribArray(glCache.aShadow2)
gl.disableVertexAttribArray(glCache.aVertex2)
gl.useProgram(program3D)
gl.enableVertexAttribArray(glCache.aVertex)
gl.enableVertexAttribArray(glCache.aTexture)
gl.enableVertexAttribArray(glCache.aShadow)
gl.enableVertexAttribArray(glCache.aSkylight)
gl.enableVertexAttribArray(glCache.aBlocklight)
}
let maxLoad = 1
function startLoad() {
// Runs when the loading screen is opened; cache the player's position
p2.x = p.x
p2.y = p.y
p2.z = p.z
maxLoad = world.loadFrom.length + 9
}
function initWebglPrograms(){
modelView = new Float32Array(16)
glCache = {}
win.glCache = glCache
program3D = createProgramObject(gl, vertexShaderSrc3D, fragmentShaderSrc3D)
program2D = createProgramObject(gl, vertexShaderSrc2D, fragmentShaderSrc2D)
skyboxProgram = createProgramObject(gl, skyboxVertex, skyboxFragment);
programEntity = createProgramObject(gl, vertexShaderSrcEntity, fragmentShaderSrcEntity)
programParticle = createProgramObject(gl, vertexShaderSrcParticle, fragmentShaderSrcParticle)
skybox = new Skybox()
gl.useProgram(program2D)
glCache.uSampler2 = gl.getUniformLocation(program2D, "uSampler")
glCache.aTexture2 = gl.getAttribLocation(program2D, "aTexture")
glCache.aVertex2 = gl.getAttribLocation(program2D, "aVertex")
glCache.aShadow2 = gl.getAttribLocation(program2D, "aShadow")
gl.useProgram(skyboxProgram)
glCache.skyboxVertex = gl.getAttribLocation(skyboxProgram, "aVertex");
glCache.skyboxTime = gl.getUniformLocation(skyboxProgram, "time");
glCache.skyboxView = gl.getUniformLocation(skyboxProgram, "uView");
gl.useProgram(programEntity)
glCache.uSamplerEntity = gl.getUniformLocation(programEntity, "uSampler")
glCache.uLightLevelEntity = gl.getUniformLocation(programEntity, "uLightLevel")
glCache.uViewEntity = gl.getUniformLocation(programEntity, "uView")
glCache.harmEffectEntity = gl.getUniformLocation(programEntity, "harmEffect")
glCache.aTextureEntity = gl.getAttribLocation(programEntity, "aTexture")
glCache.aVertexEntity = gl.getAttribLocation(programEntity, "aVertex")
glCache.isTextureAtlasEntity = gl.getUniformLocation(programEntity, "isTextureAtlas")
glCache.tintEntity = gl.getUniformLocation(programEntity, "tint")
gl.uniform1i(glCache.isTextureAtlasEntity, 1)
gl.uniform3f(glCache.tintEntity, 1,1,1)
gl.useProgram(programParticle)
glCache.uSamplerParticle = gl.getUniformLocation(programParticle, "uSampler")
glCache.uLightLevelParticle = gl.getUniformLocation(programParticle, "uLightLevel")
glCache.uViewParticle = gl.getUniformLocation(programParticle, "uView")
glCache.aTextureParticle = gl.getAttribLocation(programParticle, "aTexture")
glCache.aVertexParticle = gl.getAttribLocation(programParticle, "aVertex")
glCache.isTextureAtlasParticle = gl.getUniformLocation(programParticle, "isTextureAtlas")
gl.uniform1i(glCache.isTextureAtlasParticle, 1)
gl.useProgram(program3D)
glCache.uSampler = gl.getUniformLocation(program3D, "uSampler")
glCache.uPos = gl.getUniformLocation(program3D, "uPos")
glCache.uDist = gl.getUniformLocation(program3D, "uDist")
glCache.uTime = gl.getUniformLocation(program3D, "uTime")
glCache.aShadow = gl.getAttribLocation(program3D, "aShadow")
glCache.aSkylight = gl.getAttribLocation(program3D, "aSkylight")
glCache.aBlocklight = gl.getAttribLocation(program3D, "aBlocklight")
glCache.aTexture = gl.getAttribLocation(program3D, "aTexture")
glCache.aVertex = gl.getAttribLocation(program3D, "aVertex")
glCache.skyColor = gl.getUniformLocation(program3D, "skyColor")
glCache.inWater = gl.getUniformLocation(program3D, "inWater")
glCache.uTrans = gl.getUniformLocation(program3D, "uTrans")
gl.uniform1i(glCache.uTrans, 0)
gl.uniform1f(glCache.uDist, 1000)
}
win.initWebglPrograms = initWebglPrograms
function initWebgl() {
if (!win.gl) {
let canv = document.createElement('canvas')
canv.width = ctx.canvas.width
canv.height = ctx.canvas.height
canv.style.position = "absolute"
canv.style.zIndex = -1
canv.style.top = "0px"
canv.style.left = "0px"
gl = canv.getContext("webgl", { preserveDrawingBuffer: true, antialias: false, premultipliedAlpha: false})
let ext = gl.getExtension('OES_element_index_uint')
if (!ext) {
alert("Please use a supported browser, or update your current browser.")
}
gl.viewport(0, 0, canv.width, canv.height)
gl.enable(gl.DEPTH_TEST)
gl.enable(gl.BLEND)
gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
win.gl = gl
glExtensions = []
const availableExtensions = gl.getSupportedExtensions()
for (let i = 0; i < availableExtensions.length; i++) {
const extensionName = availableExtensions[i]
glExtensions[extensionName.replace(/[A-Z]+_/g, "")] = gl.getExtension(extensionName)
}
} else {
gl = win.gl
}
if (!document.body.contains(gl.canvas)) {
document.body.append(gl.canvas)
}
initWebglPrograms()
//Send the block textures to the GPU
initTextures()
initShapes()
/*var data = []
var rt = Math.PId/360
var s = sin(-rt), c = cos(-rt)
for(var deg=0; deg<Math.PId; deg+=rt){
var s2 = sin(deg+rt), c2 = cos(deg+rt)
data.push(s,0,c, s2,0,c, s2,1,c2, s,1,c2)
s = s2, c = c2
}*/
/*data.push(1,1,1,-1,1,1,-1,-1,1,1,-1,1)
tex.push(0,0,1,0,1,4,0,4)
data.push(-1,1,-1,1,1,-1,1,-1,-1,-1,-1,-1)
tex.push(0,0,1,0,1,4,0,4)
win.panoramaVerts = data*/
// These buffers are only used for drawing the main menu blocks
sideEdgeBuffers = {}
for (let side in shapes.cube.verts) {
let edgeBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, edgeBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(shapes.cube.verts[side][0]), gl.STATIC_DRAW)
sideEdgeBuffers[side] = edgeBuffer
}
texCoordsBuffers = []
for (let t in textureCoords) {
let buff = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buff)
gl.bufferData(gl.ARRAY_BUFFER, textureCoords[t], gl.STATIC_DRAW)
texCoordsBuffers.push(buff)
}
//Bind the Vertex Array Object (VAO) that will be used to draw everything
indexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer)
gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indexOrder, gl.STATIC_DRAW)
//Tell it not to render the insides of blocks
gl.enable(gl.CULL_FACE)
gl.cullFace(gl.BACK)
gl.lineWidth(2)
blockOutlines = false
gl.enable(gl.POLYGON_OFFSET_FILL)
gl.polygonOffset(1, 1)
gl.clearColor(sky[0], sky[1], sky[2], 1.0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
}
function initBackgrounds() {
// Home screen background
const HALF_PI = Math.PI / 2
const blocks = [
7, 4, 1, 7,
7, 4, 2, 7,
7, 4, 3, 7,
7, 4, 4, 7,
7, 5, 1, 7,
7, 5, 2, 7,
7, 5, 3, 7,
6, 4, 0, 7,
6, 4, 1, 7,
6, 4, 2, 7,
6, 4, 3, 7,
6, 4, 4, 7,
6, 5, 0, 7,
6, 5, 1, 7,
6, 5, 2, 7,
6, 5, 3, 7,
6, 5, 4, 7,
6, 6, 3, 7,
6, 6, 4, 7,
6, 7, 3, 7,
5, 0, -1, 1,
5, 0, 0, 1,
5, 0, 1, 1,
5, 0, 2, 1,
5, 1, 2, 29,
5, 2, 2, 29,
5, 3, 2, 29,
5, 4, 2, 29,
5, 5, 2, 29,
5, 6, 2, 29,
5, 4, 0, 7,
5, 4, 1, 7,
5, 4, 3, 7,
5, 4, 4, 7,
5, 5, 0, 7,
5, 5, 1, 7,
5, 5, 3, 7,
5, 5, 4, 7,
5, 6, 1, 7,
5, 6, 3, 7,
5, 7, 1, 7,
5, 7, 2, 7,
5, 7, 3, 7,
4, -1, -1, 1,
4, -1, 0, 1,
4, -1, 1, 1,
4, -1, 2, 1,
4, 0, 3, 1,
4, 0, 4, 1,
4, 0, 5, 1,
4, 0, 6, 1,
4, 0, 7, 5,
4, 0, 8, 5,
4, 0, 9, 5,
4, 0, 10, 5,
4, 4, 0, 7,
4, 4, 1, 7,
4, 4, 2, 7,
4, 4, 3, 7,
4, 4, 4, 7,
4, 5, 0, 7,
4, 5, 1, 7,
4, 5, 2, 7,
4, 5, 3, 7,
4, 5, 4, 7,
4, 6, 1, 7,
4, 6, 2, 7,
4, 6, 3, 7,
4, 7, 4, 7,
3, -1, -1, 1,
3, -1, 0, 1,
3, -1, 1, 1,
3, -1, 2, 1,
3, -1, 3, 1,
3, -1, 4, 1,
3, 0, 5, 1,
3, 0, 6, 1,
3, 0, 7, 1,
3, 0, 8, 5,
3, 0, 9, 5,
3, 0, 10, 5,
3, 4, 1, 7,
3, 4, 2, 7,
3, 4, 3, 7,
3, 4, 4, 7,
3, 5, 1, 7,
3, 5, 2, 7,
3, 5, 3, 7,
2, -1, -1, 1,
2, -1, 0, 1,
2, -1, 1, 1,
2, -1, 2, 1,
2, -1, 3, 1,
2, -1, 4, 1,
2, -1, 5, 1,
2, -1, 6, 1,
2, -1, 7, 1,
2, 0, 8, 5,
2, 0, 9, 5,
2, 0, 10, 5,
1, -2, -1, 1,
1, -2, 0, 1,
1, -2, 1, 1,
1, -2, 2, 1,
1, -2, 3, 1,
1, -1, 4, 1,
1, -1, 5, 1,
1, -1, 6, 1,
1, -1, 7, 1,
1, -1, 8, 1,
1, -1, 9, 5,
1, -1, 10, 5,
0, -2, -1, 1,
0, -2, 0, 1,
0, -2, 1, 1,
0, -2, 2, 1,
0, -2, 3, 1,
0, -2, 4, 1,
0, -2, 5, 1,
0, -1, 6, 1,
0, -1, 7, 1,
0, -1, 8, 1,
0, -1, 9, 5,
0, -1, 10, 5,
-1, -2, -1, 1,
-1, -2, 0, 1,
-1, -2, 1, 1,
-1, -2, 2, 1,
-1, -2, 3, 1,
-1, -2, 4, 1,
-1, -2, 5, 1,
-1, -2, 6, 1,
-1, -2, 7, 1,
-1, -1, 8, 1,
-1, -1, 9, 1,
-1, -1, 10, 1,
-2, -2, -1, 1,
-2, -2, 0, 1,
-2, -2, 1, 1,
-2, -2, 2, 1,
-2, -2, 3, 1,
-2, -2, 4, 1,
-2, -2, 5, 1,
-2, -2, 6, 1,
-2, -2, 7, 1,
-2, -2, 8, 1,
-2, -2, 9, 1,
-2, -1, 10, 1,
-3, -2, -1, 1,
-3, -2, 0, 1,
-3, -2, 1, 1,
-3, -2, 2, 1,
-3, -2, 3, 1,
-3, -2, 4, 1,
-3, -2, 5, 1,
-3, -2, 6, 1,
-3, -2, 7, 1,
-3, -2, 8, 1,
-3, -2, 9, 1,
-3, -2, 10, 1,
-3, -2, 11, 1,
-3, -2, 12, 1,
-4, -2, -1, 1,
-4, -2, 0, 1,
-4, -2, 1, 1,
-4, -2, 2, 1,
-4, -2, 3, 1,
-4, -2, 4, 1,
-4, -2, 5, 1,
-4, -2, 6, 1,
-4, -2, 7, 1,
-4, -2, 8, 1,
-4, -2, 9, 1,
-4, -2, 10, 1,
-4, -2, 11, 1,
-4, -2, 12, 1,
-5, -2, -1, 1,
-5, -2, 0, 1,
-5, -2, 1, 1,
-5, -2, 2, 1,
-5, -2, 3, 1,
-5, -2, 4, 1,
-5, -2, 5, 1,
-5, -2, 6, 1,
-5, -2, 7, 1,
-5, -2, 8, 1,
-5, -2, 9, 1,
-5, -2, 10, 1,
-5, -2, 11, 1,
-5, -2, 12, 1,
-6, -2, -1, 1,
-6, -2, 0, 1,
-6, -2, 1, 1,
-6, -2, 2, 1,
-6, -2, 3, 1,
-6, -2, 4, 1,
-6, -2, 5, 1,
-6, -2, 6, 1,
-6, -2, 7, 1,
-6, -2, 8, 1,
-6, -2, 9, 1,
-6, -2, 10, 1,
-6, -2, 11, 1,
-7, -2, 3, 1,
-7, -2, 4, 1,
-7, -2, 5, 1,
-7, -2, 6, 1,
-7, -2, 7, 1,
-7, -2, 8, 1,
-7, -2, 9, 1,
-8, -2, 2, 1,
-8, -2, 3, 1,
-8, -2, 4, 1,
-8, -2, 5, 1,
-8, -2, 6, 1,
-8, -2, 7, 1,
-8, -2, 8, 1,
-8, -1, 8, 33,//birch tree
-8, 0, 8, 33,
-9, 1, 10, 7,
-8, 1, 10, 7,
-7, 1, 10, 7,
-10, 1, 9, 7,
-9, 1, 9, 7,
-8, 1, 9, 7,
-7, 1, 9, 7,
-6, 1, 9, 7,
-10, 1, 8, 7,
-9, 1, 8, 7,
-8, 1, 8, 7,
-7, 1, 8, 7,
-6, 1, 8, 7,
-10, 1, 7, 7,
-9, 1, 7, 7,
-8, 1, 7, 7,
-7, 1, 7, 7,
-6, 1, 7, 7,
-9, 1, 6, 7,
-8, 1, 6, 7,
-7, 1, 6, 7,
-9, 2, 10, 7,
-8, 2, 10, 7,
-7, 2, 10, 7,
-10, 2, 9, 7,
-9, 2, 9, 7,
-8, 2, 9, 7,
-7, 2, 9, 7,
-6, 2, 9, 7,
-10, 2, 8, 7,
-9, 2, 8, 7,
-8, 2, 8, 7,
-7, 2, 8, 7,
-6, 2, 8, 7,
-10, 2, 7, 7,
-9, 2, 7, 7,
-8, 2, 7, 7,
-7, 2, 7, 7,
-6, 2, 7, 7,
-9, 2, 6, 7,
-8, 2, 6, 7,
-7, 2, 6, 7,
-7, 3, 8, 7,//topper leaves
-9, 3, 8, 7,
-8, 3, 7, 7,
-8, 3, 9, 7,
-7, 4, 8, 7,
-9, 4, 8, 7,
-8, 4, 7, 7,
-8, 4, 9, 7,
3, 1, 8, 141,//cactus
3, 2, 8, 141,
];
var mainBG = document.createElement("canvas");
mainBG.width = gl.canvas.width;
mainBG.height = gl.canvas.height;
var mainBGRot = 0//-HALF_PI / 3;
win.mainBGW = 0
win.renderMainBG = function(){
//*
//mainBGRot += 0.05
mainBGRot += 0.002;
if(mainBGRot > Math.PId){
mainBGRot = 0;
}/*/
mainBGRot += 0.001;
if(mainBGRot > 1){
mainBGRot = 0;
}//*/
gl.clearColor(sky[0], sky[1], sky[2], 1.0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
//remove or add the slash to toggle comment
//can be: //* or /*
/*
gl.useProgram(program3D)
FOV(100)
initModelView(null, 1, 1.5, 5, -HALF_PI / 25, mainBGRot)//-HALF_PI / 3
gl.disableVertexAttribArray(glCache.aShadow)
gl.disableVertexAttribArray(glCache.aSkylight)
gl.disableVertexAttribArray(glCache.aBlocklight)
gl.vertexAttrib1f(glCache.aShadow, 1.0)
gl.vertexAttrib1f(glCache.aSkylight, 1.0)
gl.vertexAttrib1f(glCache.aBlocklight, 1.0)
gl.uniform3f(glCache.skyColor, sky[0], sky[1], sky[2])
for (let i = 0; i < blocks.length; i += 4) {
block2(blocks[i + 0], blocks[i + 1], blocks[i + 2], blocks[i + 3])
}
gl.enableVertexAttribArray(glCache.aShadow)
gl.enableVertexAttribArray(glCache.aSkylight)
gl.enableVertexAttribArray(glCache.aBlocklight)/*/
gl.useProgram(program3D)
//FOV(90)
initModelView(null, 0, 0, 0, 0, mainBGRot, 1,1)
gl.disableVertexAttribArray(glCache.aShadow)
gl.disableVertexAttribArray(glCache.aSkylight)
gl.disableVertexAttribArray(glCache.aBlocklight)
gl.vertexAttrib1f(glCache.aShadow, 1.0)
gl.vertexAttrib1f(glCache.aSkylight, 1.0)
gl.vertexAttrib1f(glCache.aBlocklight, 1.0)
gl.uniform1i(glCache.uSampler, 4)
gl.bindTexture(gl.TEXTURE_2D, panoramaTexture)
vertexAttribPointer("aVertex", program3D, "aVertex", 3, panoramaVertBuffer)
vertexAttribPointer("aTexture", program3D, "aTexture", 2, panoramaTexBuffer)
gl.disable(gl.CULL_FACE)
gl.drawElements(gl.TRIANGLES, panoramaSize*6, gl.UNSIGNED_INT, 0)
gl.uniform1i(glCache.uTrans, 1)
gl.drawElements(gl.TRIANGLES, panoramaSize*6, gl.UNSIGNED_INT, 0)
gl.uniform1i(glCache.uTrans, 0)
gl.enable(gl.CULL_FACE)
gl.enableVertexAttribArray(glCache.aShadow)
gl.enableVertexAttribArray(glCache.aSkylight)
gl.enableVertexAttribArray(glCache.aBlocklight)
gl.uniform1i(glCache.uSampler, 0)
//*/
}
// Dirt background
use2d()
let aspect = width / height
let stack = height / 96
let bright = 0.4
if (dirtBuffer) {
gl.deleteBuffer(dirtBuffer)
}
dirtBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, dirtBuffer)
let bgCoords = new Float32Array([
-1, -1, 0, stack, bright,
1, -1, stack * aspect, stack, bright,
1, 1, stack * aspect, 0, bright,
-1, 1, 0, 0, bright
])
gl.bufferData(gl.ARRAY_BUFFER, bgCoords, gl.STATIC_DRAW)
gl.uniform1i(glCache.uSampler2, 1)
gl.clearColor(0, 0, 0, 1)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
gl.vertexAttribPointer(glCache.aVertex2, 2, gl.FLOAT, false, 20, 0)
gl.vertexAttribPointer(glCache.aTexture2, 2, gl.FLOAT, false, 20, 8)
gl.vertexAttribPointer(glCache.aShadow2, 1, gl.FLOAT, false, 20, 16)
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
let pixels = new Uint8Array(width * height * 4)
gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
dirtbg = ctx.createImageData(width, height)
dirtbg.data.set(pixels)
// Netherrack background
bright = 0.4
if (netherBuffer) {
gl.deleteBuffer(netherBuffer)
}
netherBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, netherBuffer)
bgCoords = new Float32Array([
-1, -1, 0, stack, bright,
1, -1, stack * aspect, stack, bright,
1, 1, stack * aspect, 0, bright,
-1, 1, 0, 0, bright
])
gl.bufferData(gl.ARRAY_BUFFER, bgCoords, gl.STATIC_DRAW)
gl.uniform1i(glCache.uSampler2, 2) //netherrack textures uses TEXTURE2 so the number is 2
gl.clearColor(0, 0, 0, 1)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
gl.vertexAttribPointer(glCache.aVertex2, 2, gl.FLOAT, false, 20, 0)
gl.vertexAttribPointer(glCache.aTexture2, 2, gl.FLOAT, false, 20, 8)
gl.vertexAttribPointer(glCache.aShadow2, 1, gl.FLOAT, false, 20, 16)
gl.drawArrays(gl.TRIANGLE_FAN, 0, 4)
pixels = new Uint8Array(width * height * 4)
gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, pixels)
netherbg = ctx.createImageData(width, height)
netherbg.data.set(pixels)
}
function initPlayer() {
p = new Camera()
p.speed = 0.075
p.velocity = new PVector(0, 0, 0)
p.pos = new Float32Array(3)
p.sprintSpeed = 1.5
p.flySpeed = 2.5
p.x = 8
p.y = superflat ? 6 : (round(noiseProfile.noise(8 * generator.smooth, 8 * generator.smooth) * generator.height) + 2 + generator.extra)
p.z = 8
p.previousX = 8
p.previousY = 70
p.previousZ = 8
p.w = 3 / 8
p.bottomH = 1.62
p.topH = 0.18
p.onGround = false
p.jumpSpeed = 0.3
p.sprinting = false
p.maxYVelocity = 1.5
p.gravityStength = -0.032
p.lastUpdate = performance.now()
p.lastBreak = Date.now()
p.lastPlace = Date.now()
p.lastJump = Date.now()
p.autoBreak = false
p.autoBuild = false
p.flying = false
p.sneaking = false
p.spectator = false
p.health = 20
p.oxygen = 20
p.food = 20
p.foodSaturation = 5
p.foodTimer = 0
p.foodExhaustion = 0
p.foodJitter = 0
p.eatStart = 0
p.eating = false
p.lastY = 0 //y the last time it touched the ground
p.character = new Character(1)
p.thirdPerson = false
p.spyglassTimer = 0
p.spyglassStart = 0
p.prevUsingSpyglass = false
p.usingSpyglass = false
p.lastXP = 0
p.XP = 0
p.level = 0
p.nextLevel = 0
setLevel()
p.burning = false
p.burnTime = 0
p.burnStart = 0
win.player = p
win.p2 = p2
}
function respawn(){
let spawn = world.spawnPoint
p.x = spawn.x
p.z = spawn.z
/*p.y = 0
while(world.getBlock(0, p.y, 0)){
p.y ++;
if(p.y > maxHeight) break;
}*/
p.y = spawn.y
p.health = 20
p.oxygen = 20
witherEffect = 0
harmEffect = 0
healEffect = 0
p.foodSaturation = 5
p.foodTimer = 0
p.foodExhaustion = 0
p.food = 20
p.lastXP = 0
p.XP = 0
freezeEffect = 0
dieMessage = username+" died because Â¯\\_(ãƒ„)_/Â¯"
}
function initWorldsMenu() {
while (window.worlds.firstChild) {
window.worlds.removeChild(window.worlds.firstChild)
}
selectedWorld = 0
window.boxCenterTop.value = ""
const deselect = () => {
let elem = document.getElementsByClassName("selected")
if (elem && elem[0]) {
elem[0].classList.remove("selected")
}
}
function addWorld(name, version, size, id, edited, thumbnail) {
let div = doc.createElement("div")
div.className = "world"
div.onclick = e => {
deselect()
div.classList.add("selected")
selectedWorld = id
}
let br = "<br>"
div.id = id
div.innerHTML = "<img class='thumbnail'"+(thumbnail ? (" src='" + thumbnail + "'") : "")+"><div class='thumbnailHover'></div>"
div.innerHTML += "<strong>" + Messages.format(name) + "</strong>" + br
if (edited){
let str = (new Date(edited).toLocaleDateString(undefined, {
year: "numeric",
month: "short",
day: "numeric",
hour: "numeric",
minute: "2-digit"
}))
div.innerHTML += str + br
}
div.innerHTML += version + br
div.innerHTML += `${size.toLocaleString()} bytes used`
window.worlds.appendChild(div)
}
worlds = {}
if (loadString) {
try {
let tempWorld = new World()
tempWorld.loadSave(loadString)
let now = Date.now()
addWorld(`${tempWorld.name} (Pre-loaded)`, tempWorld.version, loadString.length, now)
worlds[now] = {
code: loadString,
id: now
}
}
catch(e) {
console.log("Unable to load hardcoded save.")
console.error(e)
}
}
loadFromDB().then(res => {
if(res && res.length) {
let index = res.findIndex(obj => obj.id === "settings")
if (index >= 0) {
Object.assign(settings, res[index].data) // Stored data overrides any hardcoded settings
p.FOV(settings.fov)
res.splice(index, 1)
}
}
if (res && res.length) {
res = res.map(d => d.data).filter(d => d && d.code).sort((a, b) => b.edited - a.edited)
for (let data of res) {
addWorld(data.name, data.version, (data.code.length + 60), data.id, data.edited, data.thumbnail)
worlds[data.id] = data
}
}
window.worlds.onclick = Button.draw
window.boxCenterTop.onkeyup = Button.draw
}).catch(e => console.error(e))
superflat = false
trees = true
caves = true
survival = false
}
var servers = {}
async function initServersMenu() {
while (window.servers.firstChild) {
window.servers.removeChild(window.servers.firstChild)
}
selectedWorld = null
const deselect = () => {
let elem = document.getElementsByClassName("selected")
if (elem && elem[0]) {
elem[0].classList.remove("selected")
}
}
function addWorld(name, id, host, players) {
let div = doc.createElement("div")
div.className = "world"
div.onclick = e => {
deselect()
div.classList.add("selected")
selectedWorld = id
}
let br = "<br>"
div.id = id
div.innerHTML = "<div class='ping'>Pinging...</div>"
div.innerHTML += "<strong>" + Messages.format(name)+ "</strong>" + br
div.innerHTML += "Hosted by "+host + br
div.innerHTML += players.length+" player"+(players.length===1 ? "" : "s")+" online"
servers[id] = {
id:id,
name:name,
host:host
}
window.servers.appendChild(div)
}
var worlds;
await getWorlds(pings => {
if(screen !== "multiplayer menu") return
var elems = window.servers.querySelectorAll(".world")
for(var i=0; i<elems.length; i++){
var el = elems[i]
var p = el.querySelector(".ping")
var ping = pings[el.id]
if(typeof ping === "number"){
var y
if(ping > 800) y = 32*2
else if(ping > 600) y = 24*2
else if(ping > 400) y = 16*2
else if(ping > 200) y = 8*2
else y = 0
p.innerHTML = ping+" miliseconds<div class='img' style='background-position:0 "+y+"px;'></div>"
}else if(ping === "timeout"){
p.innerHTML = "Ping timed out"
}else{
p.innerHTML = "Error"
}
}
}).then(r => worlds=r)
if(worlds === "notLoggedIn") return changeScene("main menu")
if(worlds === "offline") return window.servers.innerHTML = "<div class='message'>You are offline. Connect to the internet first.</div>"
worlds.forEach(r => addWorld(r.name, r.id, r.host, r.players))
window.servers.onclick = Button.draw
superflat = false
trees = true
caves = true
survival = false
}
let marketplace = {}; win.marketplaceData = null
async function initMarketplace(){
marketplaceData = await fetch("https://16f81.codesandbox.io/maps.json")
await new Promise((resolve, reject) => {
marketplaceData.text().then(r => {marketplaceData = JSON.parse(r); resolve()})
})
marketplace = {}
window.marketplace.innerHTML = ""
const deselect = () => {
let elem = document.getElementsByClassName("selected")
if (elem && elem[0]) {
elem[0].classList.remove("selected")
}
}
function addWorld(name, version, size, id, edited) {
let div = doc.createElement("div")
div.className = "world"
div.onclick = e => {
deselect()
div.classList.add("selected")
selectedWorld = id
}
let br = "<br>"
div.id = id
div.innerHTML = "<strong>" + Messages.format(name) + "</strong>" + br
if (edited){
let str = (new Date(edited).toLocaleDateString(undefined, {
year: "numeric",
month: "short",
day: "numeric",
hour: "numeric",
minute: "2-digit"
}))
div.innerHTML += str + br
}
div.innerHTML += version + br
div.innerHTML += `${size.toLocaleString()} bytes used`
window.marketplace.appendChild(div)
superflat = false
trees = true
caves = true
survival = false
}
let tempWorld = new World()
marketplaceData.forEach(data => {
let loadString, mod
if(typeof data === "object"){
loadString = data.loadString
mod = data.mod
}else loadString = data
tempWorld.loadSave(loadString)
let now = Date.now()
addWorld(tempWorld.name, tempWorld.version, loadString.length, now)
marketplace[now] = {
code: loadString,
id: now,
name: tempWorld.name,
version: tempWorld.version,
mod: mod,
}
})
window.marketplace.onclick = Button.draw
}
function saveFromMarketplace(){
let save = marketplace[selectedWorld]
saveToDB(save.id, {
id: save.id,
edited: Date.now(),
name: save.name,
version: save.version,
code: save.code,
mod: save.mod
})
initWorldsMenu()
changeScene("loadsave menu")
}
var sounds = {
click: "click.ogg",
damage: {
bigfall: "damage/fallbig.ogg",
smallfall: "damage/fallsmall.ogg",
hit1: "damage/hit1.ogg",
hit2: "damage/hit2.ogg",
hit3: "damage/hit3.ogg",
drown1: "damage/drown1.ogg",
drown2: "damage/drown2.ogg",
drown3: "damage/drown3.ogg",
drown4: "damage/drown4.ogg",
freeze1: "damage/freeze1.ogg",
freeze2: "damage/freeze2.ogg",
freeze3: "damage/freeze3.ogg",
freeze4: "damage/freeze4.ogg",
freeze5: "damage/freeze5.ogg"
},
block: {
grass: {
dig1: "grass/dig1.ogg",
dig2: "grass/dig2.ogg",
dig3: "grass/dig3.ogg",
dig4: "grass/dig4.ogg",
step1: "grass/step1.ogg",
step2: "grass/step2.ogg",
step3: "grass/step3.ogg",
step4: "grass/step4.ogg",
step5: "grass/step5.ogg",
step6: "grass/step6.ogg",
},
stone: {
dig1: "stone/dig1.ogg",
dig2: "stone/dig2.ogg",
dig3: "stone/dig3.ogg",
dig4: "stone/dig4.ogg",
step1: "stone/step1.ogg",
step2: "stone/step2.ogg",
step3: "stone/step3.ogg",
step4: "stone/step4.ogg",
step5: "stone/step5.ogg",
step6: "stone/step6.ogg",
},
gravel: {
dig1: "gravel/dig1.ogg",
dig2: "gravel/dig2.ogg",
dig3: "gravel/dig3.ogg",
dig4: "gravel/dig4.ogg",
step1: "gravel/step1.ogg",
step2: "gravel/step2.ogg",
step3: "gravel/step3.ogg",
step4: "gravel/step4.ogg",
},
sand: {
dig1: "sand/dig1.ogg",
dig2: "sand/dig2.ogg",
dig3: "sand/dig3.ogg",
dig4: "sand/dig4.ogg",
step1: "sand/step1.ogg",
step2: "sand/step2.ogg",
step3: "sand/step3.ogg",
step4: "sand/step4.ogg",
step5: "sand/step5.ogg",
},
basalt: {
dig1: "basalt/dig1.ogg",
dig2: "basalt/dig2.ogg",
dig3: "basalt/dig3.ogg",
dig4: "basalt/dig4.ogg",
dig5: "basalt/dig5.ogg",
step1: "basalt/step1.ogg",
step2: "basalt/step2.ogg",
step3: "basalt/step3.ogg",
step4: "basalt/step4.ogg",
step5: "basalt/step5.ogg",
step6: "basalt/step6.ogg",
},
chain: {
dig1: "chain/dig1.ogg",
dig2: "chain/dig2.ogg",
dig3: "chain/dig3.ogg",
dig4: "chain/dig4.ogg",
step1: "chain/step1.ogg",
step2: "chain/step2.ogg",
step3: "chain/step3.ogg",
step4: "chain/step4.ogg",
step5: "chain/step5.ogg",
step6: "chain/step6.ogg",
},
cloth: {
dig1: "cloth/dig1.ogg",
dig2: "cloth/dig2.ogg",
dig3: "cloth/dig3.ogg",
dig4: "cloth/dig4.ogg",
step1: "cloth/step1.ogg",
step2: "cloth/step2.ogg",
step3: "cloth/step3.ogg",
step4: "cloth/step4.ogg",
},
fungus: {
dig1: "fungus/dig1.ogg",
dig2: "fungus/dig2.ogg",
dig3: "fungus/dig3.ogg",
dig4: "fungus/dig4.ogg",
dig5: "fungus/dig3.ogg",
dig6: "fungus/dig4.ogg",
},
glass: {
dig1: "glass/dig1.ogg",
dig2: "glass/dig2.ogg",
dig3: "glass/dig3.ogg",
},
lantern: {
dig1: "lantern/dig1.ogg",
dig2: "lantern/dig2.ogg",
dig3: "lantern/dig3.ogg",
dig4: "lantern/dig4.ogg",
dig5: "lantern/dig5.ogg",
dig6: "lantern/dig6.ogg",
place1: "lantern/place1.ogg",
place2: "lantern/place2.ogg",
place3: "lantern/place3.ogg",
place4: "lantern/place4.ogg",
place5: "lantern/place5.ogg",
place6: "lantern/place6.ogg",
},
nether_bricks: {
dig1: "nether_bricks/dig1.ogg",
dig2: "nether_bricks/dig2.ogg",
dig3: "nether_bricks/dig3.ogg",
dig4: "nether_bricks/dig4.ogg",
dig5: "nether_bricks/dig5.ogg",
dig6: "nether_bricks/dig6.ogg",
step1: "nether_bricks/step1.ogg",
step2: "nether_bricks/step2.ogg",
step3: "nether_bricks/step3.ogg",
step4: "nether_bricks/step4.ogg",
step5: "nether_bricks/step5.ogg",
step6: "nether_bricks/step6.ogg",
},
nether_ore: {
dig1: "nether_ore/dig1.ogg",
dig2: "nether_ore/dig2.ogg",
dig3: "nether_ore/dig3.ogg",
dig4: "nether_ore/dig4.ogg",
step1: "nether_ore/step1.ogg",
step2: "nether_ore/step2.ogg",
step3: "nether_ore/step3.ogg",
step4: "nether_ore/step4.ogg",
step5: "nether_ore/step5.ogg",
},
nether_sprouts: {
dig1: "nether_sprouts/dig1.ogg",
dig2: "nether_sprouts/dig2.ogg",
dig3: "nether_sprouts/dig3.ogg",
dig4: "nether_sprouts/dig4.ogg",
step1: "nether_sprouts/step1.ogg",
step2: "nether_sprouts/step2.ogg",
step3: "nether_sprouts/step3.ogg",
step4: "nether_sprouts/step4.ogg",
step5: "nether_sprouts/step5.ogg",
},
netherite: {
dig1: "netherite/dig1.ogg",
dig2: "netherite/dig2.ogg",
dig3: "netherite/dig3.ogg",
dig4: "netherite/dig4.ogg",
step1: "netherite/step1.ogg",
step2: "netherite/step2.ogg",
step3: "netherite/step3.ogg",
step4: "netherite/step4.ogg",
step5: "netherite/step5.ogg",
step6: "netherite/step6.ogg",
},
netherrack: {
dig1: "netherrack/dig1.ogg",
dig2: "netherrack/dig2.ogg",
dig3: "netherrack/dig3.ogg",
dig4: "netherrack/dig4.ogg",
dig5: "netherrack/dig5.ogg",
dig6: "netherrack/dig6.ogg",
step1: "netherrack/step1.ogg",
step2: "netherrack/step2.ogg",
step3: "netherrack/step3.ogg",
step4: "netherrack/step4.ogg",
step5: "netherrack/step5.ogg",
step6: "netherrack/step6.ogg",
},
netherwart: {
dig1: "netherwart/dig1.ogg",
dig2: "netherwart/dig2.ogg",
dig3: "netherwart/dig3.ogg",
dig4: "netherwart/dig4.ogg",
dig5: "netherwart/dig5.ogg",
dig6: "netherwart/dig6.ogg",
step1: "netherwart/step1.ogg",
step2: "netherwart/step2.ogg",
step3: "netherwart/step3.ogg",
step4: "netherwart/step4.ogg",
step5: "netherwart/step5.ogg",
},
nylium: {
dig1: "nylium/dig1.ogg",
dig2: "nylium/dig2.ogg",
dig3: "nylium/dig3.ogg",
dig4: "nylium/dig4.ogg",
dig5: "nylium/dig5.ogg",
dig6: "nylium/dig6.ogg",
step1: "nylium/step1.ogg",
step2: "nylium/step2.ogg",
step3: "nylium/step3.ogg",
step4: "nylium/step4.ogg",
step5: "nylium/step5.ogg",
step6: "nylium/step6.ogg",
},
roots: {
dig1: "roots/dig1.ogg",
dig2: "roots/dig2.ogg",
dig3: "roots/dig3.ogg",
dig4: "roots/dig4.ogg",
dig5: "roots/dig5.ogg",
dig6: "roots/dig6.ogg",
step1: "roots/step1.ogg",
step2: "roots/step2.ogg",
step3: "roots/step3.ogg",
step4: "roots/step4.ogg",
step5: "roots/step5.ogg",
},
shroomlight: {
dig1: "shroomlight/dig1.ogg",
dig2: "shroomlight/dig2.ogg",
dig3: "shroomlight/dig3.ogg",
dig4: "shroomlight/dig4.ogg",
dig5: "shroomlight/dig5.ogg",
step1: "shroomlight/step1.ogg",
step2: "shroomlight/step2.ogg",
step3: "shroomlight/step3.ogg",
step4: "shroomlight/step4.ogg",
step5: "shroomlight/step5.ogg",
step6: "shroomlight/step6.ogg",
},
soul_sand: {
dig1: "soul_sand/dig1.ogg",
dig2: "soul_sand/dig2.ogg",
dig3: "soul_sand/dig3.ogg",
dig4: "soul_sand/dig4.ogg",
dig5: "soul_sand/dig5.ogg",
dig6: "soul_sand/dig6.ogg",
dig7: "soul_sand/dig7.ogg",
dig8: "soul_sand/dig8.ogg",
dig9: "soul_sand/dig9.ogg",
step1: "soul_sand/step1.ogg",
step2: "soul_sand/step2.ogg",
step3: "soul_sand/step3.ogg",
step4: "soul_sand/step4.ogg",
step5: "soul_sand/step5.ogg",
},
stem: {
dig1: "stem/dig1.ogg",
dig2: "stem/dig2.ogg",
dig3: "stem/dig3.ogg",
dig4: "stem/dig4.ogg",
dig5: "stem/dig5.ogg",
dig6: "stem/dig6.ogg",
step1: "stem/step1.ogg",
step2: "stem/step2.ogg",
step3: "stem/step3.ogg",
step4: "stem/step4.ogg",
step5: "stem/step5.ogg",
step6: "stem/step6.ogg",
},
wood: {
dig1: "wood/dig1.ogg",
dig2: "wood/dig2.ogg",
dig3: "wood/dig3.ogg",
dig4: "wood/dig4.ogg",
step1: "wood/step1.ogg",
step2: "wood/step2.ogg",
step3: "wood/step3.ogg",
step4: "wood/step4.ogg",
step5: "wood/step5.ogg",
step6: "wood/step6.ogg",
},
anvil: {
land: "random/anvil_land.ogg"
},
amethyst: {
dig1: "amethyst/break1.ogg",
dig2: "amethyst/break2.ogg",
dig3: "amethyst/break3.ogg",
dig4: "amethyst/break4.ogg",
place1: "amethyst/place1.ogg",
place2: "amethyst/place2.ogg",
place3: "amethyst/place3.ogg",
place4: "amethyst/place4.ogg",
step1: "amethyst/step1.ogg",
step2: "amethyst/step2.ogg",
step3: "amethyst/step3.ogg",
step4: "amethyst/step4.ogg",
step5: "amethyst/step5.ogg",
step6: "amethyst/step6.ogg",
step7: "amethyst/step7.ogg",
step8: "amethyst/step8.ogg",
step9: "amethyst/step9.ogg",
step10: "amethyst/step10.ogg",
step11: "amethyst/step11.ogg",
step12: "amethyst/step12.ogg",
step13: "amethyst/step13.ogg",
step14: "amethyst/step14.ogg",
},
amethyst_cluster: {
dig1: "amethyst_cluster/break1.ogg",
dig2: "amethyst_cluster/break2.ogg",
dig3: "amethyst_cluster/break3.ogg",
dig4: "amethyst_cluster/break4.ogg",
place1: "amethyst_cluster/place1.ogg",
place2: "amethyst_cluster/place2.ogg",
place3: "amethyst_cluster/place3.ogg",
place4: "amethyst_cluster/place4.ogg",
},
deepslate:{
dig1:"deepslate/break1.ogg",
dig2:"deepslate/break2.ogg",
dig3:"deepslate/break3.ogg",
dig4:"deepslate/break4.ogg",
place1:"deepslate/place1.ogg",
place2:"deepslate/place2.ogg",
place3:"deepslate/place3.ogg",
place4:"deepslate/place4.ogg",
place5:"deepslate/place5.ogg",
place6:"deepslate/place6.ogg",
step1:"deepslate/step1.ogg",
step2:"deepslate/step2.ogg",
step3:"deepslate/step3.ogg",
step4:"deepslate/step4.ogg",
step5:"deepslate/step5.ogg",
step6:"deepslate/step6.ogg",
},
deepslate_bricks:{
place1:"deepslate_bricks/place1.ogg",
place2:"deepslate_bricks/place2.ogg",
place3:"deepslate_bricks/place3.ogg",
place4:"deepslate_bricks/place4.ogg",
place5:"deepslate_bricks/place5.ogg",
place6:"deepslate_bricks/place6.ogg",
step1:"deepslate_bricks/step1.ogg",
step2:"deepslate_bricks/step2.ogg",
step3:"deepslate_bricks/step3.ogg",
step4:"deepslate_bricks/step4.ogg",
step5:"deepslate_bricks/step5.ogg",
},
end_portal:{
eyeplace1:"end_portal/eyeplace1.ogg",
eyeplace2:"end_portal/eyeplace2.ogg",
eyeplace3:"end_portal/eyeplace3.ogg"
},
portal:{
portal:"portal/portal.ogg",
travel:"portal/travel.ogg",
trigger:"portal/trigger.ogg",
},
},
entity: {
generic: {
explode1: "random/explode1.ogg",
explode2: "random/explode2.ogg",
explode3: "random/explode3.ogg",
explode4: "random/explode4.ogg",
},
tnt: {
fuse: "random/fuse.ogg"
},
item: {
pickup: "random/plop.ogg",
break: "random/break.ogg"
},
witch:{
ambient1:"witch/ambient1.ogg",
ambient2:"witch/ambient2.ogg",
ambient3:"witch/ambient3.ogg",
ambient4:"witch/ambient4.ogg",
ambient5:"witch/ambient5.ogg",
celebrate:"witch/celebrate.ogg",
},
ender_dragon:{
end:"ender_dragon/end.ogg",
},
},
item:{
spyglass:{
use:"spyglass/use.ogg",
stop:"spyglass/stop.ogg"
}
},
experience:{
orb:"random/orb.ogg",
levelup:"random/levelup.ogg"
},
liquid:{
enter: "liquid/enter.ogg",
exit: "liquid/exit.ogg",
splash: "liquid/splash.ogg"
},
eat: {
1: "random/eat1.ogg",
2: "random/eat2.ogg",
3: "random/eat3.ogg",
burp:"random/burp.ogg"
},
/*music:{
menu:{
1:"music/menu/menu1.ogg",
2:"music/menu/menu2.ogg",
3:"music/menu/menu3.ogg",
4:"music/menu/menu4.ogg",
},
game:{
creative:{
1:"music/game/creative/creative1.ogg",
2:"music/game/creative/creative2.ogg",
3:"music/game/creative/creative3.ogg",
4:"music/game/creative/creative4.ogg",
5:"music/game/creative/creative5.ogg",
6:"music/game/creative/creative6.ogg",
}
}
},*/
}
var soundVolumes = {
}
win.sounds = sounds
function loadSoundBuffer(url){
return new Promise((resolve, reject) => {
var request = new XMLHttpRequest();
request.open('GET', url, true);
request.responseType = 'arraybuffer';
request.onerror = reject
request.onload = function() {
audioCtx.decodeAudioData(request.response, function(buffer) {
resolve(buffer)
}, reject);
}
request.send();
})
}
async function initAudioCtx(){
try{
window.AudioContext = window.AudioContext || window.webkitAudioContext;
audioCtx = new AudioContext();
}catch(e) {
alert('Web Audio API is not supported in this browser');
return
}
async function loadSoundsObj(obj){
for(var i in obj){
if(typeof obj[i] === "object"){
loadSoundsObj(obj[i])
}else{
var url
if(obj[i].startsWith("https://")){
url = obj[i]
}else{
url = "https://16f81.codesandbox.io/sounds/"+obj[i]
}
let loadIt = true
if(url.startsWith("https://16f81.codesandbox.io/sounds/music/") && urlParams.has("no_music")) loadIt = false
if(loadIt){
await loadSoundBuffer(url).then(buffer => {
obj[i] = buffer
loadDone()
}).catch(() => {
loadDone()
})
}else loadDone()
}
}
}
loadSoundsObj(sounds)
}
function playSound(name, start, volume, onend){ //from https://www.html5rocks.com/en/tutorials/webaudio/intro/
if(!soundOn) return
var sound
var soundVol
if(name.includes(".")){
sound = sounds
soundVol = soundVolumes
name = name.split(".")
for(var i=0; i<name.length; i++){
var n = name[i]
if(sound[n]){
sound = sound[n]
}else return
if(soundVol[n]){soundVol = soundVol[n]}
}
}else{
sound = sounds[name]
soundVol = soundVolumes[name]
if(!sound) return
}
if(!volume && volume !== 0) volume = 1
if((typeof soundVol === "object") || (!soundVol && soundVol !== 0)) soundVol = 1
volume *= soundVol
var buffer = sound
if(audioCtx && (typeof buffer !== "string") && volume > 0){
var source = audioCtx.createBufferSource();
source.buffer = buffer;
if( (!(volume || volume === 0)) || volume === 1){
source.connect(audioCtx.destination);
}else{
var gainNode = audioCtx.createGain();
source.connect(gainNode);
gainNode.connect(audioCtx.destination);
gainNode.gain.value = volume;
}
if(onend) source.onended = onend
source.start(start ? audioCtx.currentTime + (start/1000) : 0);
return true
}
}
win.playSound = playSound
function blockSound(blockID, type, x,y,z, volume){
var block = blockData[blockID]
if(!(volume || volume === 0)) volume = posSound(x,y,z)
var sound
switch(type){
case "place":
sound = block.placeSound || block.digSound
break;
case "dig":
sound = block.digSound
break;
case "step":
sound = block.stepSound
break;
case "breaking":
sound = block.stepSound
break;
case "land":
sound = block.landSound || block.digSound
}
if(typeof sound === "function") return sound()
if(Array.isArray(sound)){
sound = sound[Math.floor(Math.random()*sound.length)]
}
if(sound){
playSound(sound, 0, volume)
if(multiplayer) send({type:"playSound", data:sound, x:x,y:y,z:z})
}
}
win.blockSound = blockSound
function hitSound(){
var i = Math.ceil(Math.random()*3)
playSound("damage.hit"+i)
if(multiplayer) send({type:"playSound", data:"damage.hit"+i, x:p.x,y:p.y,z:p.z})
}
function drownHurtSound(){
var i = Math.ceil(Math.random()*4)
playSound("damage.drown"+i)
if(multiplayer) send({type:"playSound", data:"damage.drown"+i, x:p.x,y:p.y,z:p.z})
}
function freezeHurtSound(){
var i = Math.ceil(Math.random()*5)
playSound("damage.freeze"+i)
if(multiplayer) send({type:"playSound", data:"damage.freeze"+i, x:p.x,y:p.y,z:p.z})
}
win.hitSound = hitSound
var explodeSounds = ["entity.generic.explode1", "entity.generic.explode2", "entity.generic.explode3", "entity.generic.explode4"]
function explodeSound(x,y,z){
var sound = explodeSounds[Math.floor(Math.random()*explodeSounds.length)]
playSound(sound, 0, posSound(x,y,z))
if(multiplayer) send({type:"playSound", data:sound, x:x,y:y,z:z})
}
win.explodeSound = explodeSound
function posSound(x,y,z){
var volume = 1
if((x || x===0) && (y || y===0) && (z || z===0)){
var falloff = volume > 16 ? 16*volume : 16
var dist = dist3(x,y,z, p2.x, p2.y, p2.z)
volume = dist > falloff ? volume - ((dist - falloff) / 10) : volume
if(volume < 0) volume = 0
}
return volume
}
function eatSound(){
var i = Math.ceil(Math.random()*3)
playSound("eat."+i)
if(multiplayer) send({type:"playSound", data:"eat."+i, x:p.x,y:p.y,z:p.z})
}
let maxStartLoad = 0, loaded = 0
win.allLoaded = false
function findObjValueAmount(obj){
for(var i in obj){
if(typeof obj[i] === "object"){
findObjValueAmount(obj[i])
}else maxStartLoad ++
}
}
findObjValueAmount(sounds)
for(var image in images) maxStartLoad ++
loadProg.innerHTML = `0% 0/${maxStartLoad}`
function loadDone(){
loaded ++
let percent = Math.floor(loaded * 100 / maxStartLoad)
loadProg.innerHTML = `${percent}% ${loaded}/${maxStartLoad}`
loadBar.style.width = percent+"%"
if(loaded === maxStartLoad){
allLoaded = true
loader.style.opacity = 0
setTimeout(() => {
loader.style.opacity = 1
loader.classList.add("hidden")
finishedLoading()
},1000)
}
if(loaded > maxStartLoad){
console.log("loaded > maxStartLoad\nloaded = "+loaded)
}
}
function createNewWorld(){
dimensions = {
overworld: new World(),
nether: new World("nether")
}
world = dimensions.overworld
world.id = Date.now()
let name = boxCenterTop.value || "World"
let number = ""
while(true) {
let match = false
for (let id in worlds) {
if (worlds[id].name === name + number) {
match = true
break
}
}
if (match) {
number = number ? number + 1 : 1
} else {
name = name + number
break
}
}
world.name = name.replace(/;/g, "\u037e")
world.loadChunks()
world.chunkGenQueue.sort(sortChunks)
if(survival) setHotbar([0,0,0,0,0,0,0,0,0])
changeScene("loading")
}
function playSelectedWorld(){
dimensions = {
overworld: new World(),
nether: new World("nether")
}
world = dimensions.overworld
let code
let inv
let surviv
let mod
let nether
let ent
if (!selectedWorld && !boxCenterTop.value.startsWith("JSON")) {
code = boxCenterTop.value
} else {
let data = worlds[selectedWorld]
if(boxCenterTop.value.startsWith("JSON")){
data = boxCenterTop.value.replace("JSON","")
try{
data = JSON.parse(data)
}catch(e){
alert(e)
}
}
if (data) {
code = data.code
world.id = data.id
world.edited = data.edited
inv = data.inv
surviv = data.surviv
nether = data.nether
ent = data.ent
if(data.achievments) achievments = data.achievments
playersInv = data.playersInv || {}
try{
world.mod = data.mod
mod = Object.constructor("return "+data.mod)()
}catch(e){console.log("error loading mod: "+e)}
}
}
if (code) {
try {
world.loadSave(code)
world.id = world.id || Date.now()
}
catch(e) {
alert("Unable to load save")
return
}
}
if (nether) {
let world = dimensions.nether
try {
world.loadSave(nether)
world.id = world.id || Date.now()
}
catch(e) {
alert("Unable to load save")
return
}
}
if(inv){
world.loadInv(inv)
}else if(survival) setHotbar([0,0,0,0,0,0,0,0,0])
if(surviv){world.loadSurvivStr(surviv)}else{cheats = !survival}
if(ent){
for(var i=0; i<ent.length; i++){
let world = getWorld(ent[i].dimension)
world.posEntity(ent[i])
}
}
if(mod){
try{mod()}catch(e){console.log(e)}
}
changeScene("loading")
}
function setupHelp(){
//Setup images
var divs = document.querySelectorAll("div[img]")
for(var i=0; i<divs.length; i++){
var d = divs[i]
d.style.backgroundSize = "100%"
d.style.imageRendering = "pixelated"
d.style.display = "inline-block"
d.style.verticalAlign = "middle"
var img = d.getAttribute("img")
var w, h
if(img === "heart"){
w = h = 18
d.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAXElEQVQoU3XQQRKAIAiF4Z97ua8j19572UCSTytWjHwCgzGi9dQAzfEHj/YrwOJXgFqhFGl8pw4GepUXdADbBzqBvXeKnVaYwE0uPkEFuZcOio4+QqY8J5igAi9cnpgXB7uKmTQAAAAASUVORK5CYII=)"
}else if(img === "halfHeart"){
w = h = 18
d.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAY0lEQVQoU4WOwQ3AMAgDzS50i/zbkTtAxmCXVLiBoKhS+YDMYSxYNeYoAOoMF7xGVVWVopl5E14R6B1ojctjQgEuqPz9hG4A5w/ETBUMp5opPBJ0KAAmL1/S8XrF3O0Qwf34AVFaJQc+FQukAAAAAElFTkSuQmCC)"
}else if(img === "deadHeart"){
w = h = 18
d.style.backgroundImage = "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAJCAYAAADgkQYQAAAAT0lEQVQoU62OwQ3AMAwCz1N4//E8RSqjuiVRn/ULocMQvLduGYBr2uhbmSlRVbgGQqkx7esjO/QvtG3yyq6aTeNv2wYQdYwV6MAXpOozfAGB1SIH1uYKrgAAAABJRU5ErkJggg==)"
}
var a = parseInt(d.getAttribute("amount"))
if(a){
d.style.backgroundSize = (100/a)+"% 100%"
d.style.width = (w * a)+"px"
}else d.style.width = w+"px"
d.style.height = h+"px"
}
//Setup collapsibles
var coll = document.getElementsByClassName("collapsible");
for (var i = 0; i < coll.length; i++) {
var c = coll[i]
var title = document.createElement("div")
title.classList.add("title")
title.innerHTML = c.getAttribute("title")
var content = document.createElement("div")
content.classList.add("content")
content.innerHTML = c.innerHTML
c.innerHTML = ""
c.appendChild(title)
c.appendChild(content)
content.style.maxHeight = "0px"
title.addEventListener("click", function() {
var content = this.nextElementSibling
this.classList.toggle("active")
if (content.style.maxHeight !== "0px"){
content.style.maxHeight = "0px";
} else {
content.style.maxHeight = content.scrollHeight + "px";
}
})
}
//Set recipes collapsible
var recipes = document.querySelector("#recipes .content")
var size = inventory.size
var s2 = size/2
var icons = {}
var ix = -s2, iy = s2
function addIcon(id){
ix += size
if(ix > gl.canvas.width - s2){
ix = s2
iy += size
}
drawIcon(ix, iy, id)
icons[id] = [ix,iy]
}
use3d()
FOV(90)
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
var ic = document.createElement("canvas")
ic.width = ic.height = size
var ictx = ic.getContext("2d")
var rhtml = ""
for(var c in crafts){
var r = crafts[c]
if(r.hidden) continue
var arr = c.split(",")
rhtml += "<div class='recipe'>"
rhtml += r.name+"<br><br>"
rhtml += "<div class='grid'>"
//Grid
for(var a=0; a<arr.length; a++){
var id = parseInt(arr[a])
if(id) {
if(!icons[id]){
addIcon(id)
var xy = icons[id]
ictx.clearRect(0,0,size,size)
ictx.drawImage(gl.canvas, xy[0]-s2,xy[1]-s2, size,size, 0,0,size,size)
icons[id] = ic.toDataURL()
}
var img = icons[id]
rhtml += "<img src='"+img+"' style='width:"+size+"px;height:"+size+"px;' title='"+blockData[id].name+"'>"
}else{
rhtml += "<div style='width:"+size+"px;height:"+size+"px;'></div>"
}
if(a%3===2 && a !== 8){
rhtml += "<br>"
}
}
rhtml += "</div>"
//Result
var id = r.id
if(!icons[id]){
addIcon(id)
var xy = icons[id]
ictx.clearRect(0,0,size,size)
ictx.drawImage(gl.canvas, xy[0]-s2,xy[1]-s2, size,size, 0,0,size,size)
icons[id] = ic.toDataURL()
}
var img = icons[id]
rhtml += "<br><div class='result' style='margin-left:"+size+"px;margin-top:"+size+"px;'>"
rhtml += "<img src='"+img+"' style='width:"+size+"px;height:"+size+"px;' title='"+blockData[id].name+"'>"
rhtml += "<div class='number'>"+r.amount+"</div>"
rhtml += "</div><br><br>"
if(r.shapeless){
rhtml += "Shapeless"
}else if(r.shaped){
rhtml += "Shaped"
}else{
rhtml += "Fixed"
}
rhtml += "</div>"
}
recipes.innerHTML = rhtml
}
function initPanorama(){
const shape = shapes.panorama
const shapeVerts = shape.verts
const shapeTexVerts = shape.texVerts
const size = shape.size
var ts = 16
let blockSides = Object.keys(Block)
let texNum = 0
let texture = []
let index = 0
for (let n = 0; n < 6; n++) {
let side = blockSides[n]
let directionalFaces = shapeVerts[Sides[side]]
for (let facei = 0; facei < directionalFaces.length; facei++) {
let texShapeVerts = shapeTexVerts[n][facei]
texture[index    ] = texShapeVerts[0]*ts
texture[index + 1] = texShapeVerts[1]*ts*4
texture[index + 2] = texShapeVerts[2]*ts
texture[index + 3] = texShapeVerts[3]*ts*4
texture[index + 4] = texShapeVerts[4]*ts
texture[index + 5] = texShapeVerts[5]*ts*4
texture[index + 6] = texShapeVerts[6]*ts
texture[index + 7] = texShapeVerts[7]*ts*4
index += 8
}
texNum++
}
panoramaVertBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, panoramaVertBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(new Float32Array(shapeVerts.flat(Infinity))), gl.STATIC_DRAW)
panoramaTexBuffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, panoramaTexBuffer)
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(new Float32Array(texture)), gl.STATIC_DRAW)
panoramaSize = size
}
function initEverything() {
console.log("Initializing world.")
setSeed(Math.random() * 2000000000 | 0)
console.log("worldSeed "+worldSeed)
win.islandGenerator = new Generator();
generatedChunks = 0
crack.shape = shapes.cube
initWebgl()
constVersion(version)
initPlayer()
fetch("https://server.nathaniel2006.repl.co/getuser",{credentials:'include'}).then(r => r.text()).then(r => {
username = r || "Steve"
p.character.changeBlock(abs(r.hashCode()) % 80 + 1)
})
message.innerHTML = "".split("").reverse().join("")
crack.entity = new crackEntity("crack1",0,0,0)
for(var i=0; i<crack.length; i++){crack.entity.cacheTexture(crack[i])}
entityFire = new EntityFire()
fireBlock = new FireBlock(blockIds.fire | SLAB, 0,0,0) //the fire that shows up on your screen
initBackgrounds()
initParticles()
initPanorama()
drawScreens[screen]()
Button.draw()
Slider.draw()
p.FOV(settings.fov)
initWorldsMenu()
initMarketplace()
initButtons()
initAudioCtx()
setupHelp()
}
function finishedLoading(){
// See if a user followed a link here.
if (urlParams.has("target")) {
changeScene("multiplayer menu")
initMultiplayer(urlParams.get("target"))
}
}
// Define all the scene draw functions
let clear,dirt,nether
(function() {
var splashs = [
"Multiplayer!",
"Survival!",
"Flowers? Make a garden!",
"Nether!",
"Can't break bedrock.",
"Chat with a slash!",
"Watch out from\nthe falling sand!",
"Hard Parkour!",
"Log => 4 planks\n2 Planks => 4 sticks\n1 stick + 1 coal\n=\ntorch",
"Annoying cactus!",
"Nice looking flowers.",
"I like watermelon.",
"Have you played\nMinecraft?",
"So, you read splash text.",
document.documentElement.outerHTML.split("\n").length+" lines of code.",
"Island world type\nhas a volcano.",
"Have you realized\npunching wood\nhurts your hand?",
"Don't make a tnt\ncube over\nsomeone's mansion.",
"Awesome!",
"Fun!",
"Build!",
"Mine!",
"Craft!",
"Would you like a potion of fun?",
"Falling anvils are\neven more annoying\nthan sand!",
"No tnt!!!",
"Don't mess\naround with\nuranium!!!",
"Why does my\nhouse have a\nhole in the\nroof???",
"Â§1CÂ§2oÂ§3lÂ§4oÂ§5rÂ§6mÂ§7aÂ§8tÂ§9iÂ§ac",
"Using WebGL!",
"Who has awesome hair?",
"Supercalifragilisticexpialidocious!",
"Really really fun!",
"Not kidding",
"Punch diamonds!",
"Very long useless text,\nglorbouirewsoytuderkoilsykrojeticfilistikmensuiklit",
"Play for 10 hours!",
"Also try VVVVVV!",
"Also try Terraria!",
"Why are you reading this???",
"Really. You read\n splash text.",
"Umm... Why are\nthe trees floating?",
"No robots",
"Kick 'em up!",
"Gotta eat some soup!",
"Disgusting soup.",
"This is a very\ncool splash.",
"Hey, you!", 
"Can render 400,000 blocks!", 
"Updates incoming", 
"No hidden fees!", 
"Hippopotamus!",
"Gotta catch them all!", 
"Not greyscale", 
"Nope.", 
"Sometimes, having a giant monitor is really helpful.",
"Also try Ultimate Platformer", 
"What's the opposite of right? Wrong!", 
"Feeling snackish? I know the feeling.", 
"Hey look! It's invisible!", 
"LG logo is pacman!", 
"Don't mine bedrock", 
"Cross-platform, if you build the platform",
"I have a nice\nhouse!",
"TNT can be satisfying!",
"Griefing could be fun!"
]
let splash = ""
function rdmSplash(){
splash = splashs[Math.floor(Math.random()*splashs.length)]
}
win.rdmSplash = rdmSplash
win.setSplash = function(s){
splash = splashs[s]
}
rdmSplash()
setInterval(() => rdmSplash(), 60000)
function title() {
  let text = "SAFCRAFT"
  let subtext = "HTML EDITION (By Safin)"
  let font = "minecraftia,mojangles"
  strokeWeight(1)
  ctx.textAlign = 'center'


  ctx.font = "bold 120px " + font
  fill(30)
  text(title, width / 2, 158)
  fill(40)
  text(title, width / 2, 155)
  ctx.font = "bold 121px " + font
  fill(50)
  text(title, width / 2, 152)
  fill(70)
  text(title, width / 2, 150)
  fill(90)
  ctx.font = "bold 122px " + font
  text(title, width / 2, 148)
  fill(110)
  text(title, width / 2, 145)

  ctx.font = "bold 32px " + font
  fill(50)
  text(subtext, width / 2-1, 180)
  text(subtext, width / 2+1, 180)
  text(subtext, width / 2, 179)
  text(subtext, width / 2, 181)
  ctx.font = "bold 32px " + font
  fill(150)
  text(subtext, width / 2, 180)
}
const clear = () => ctx.clearRect(0, 0, canvas.width, canvas.height)
const dirt = () => ctx.putImageData(dirtbg, 0, 0)

drawScreens["main menu"] = () => {
  ctx.putImageData(mainbg, 0, 0)
  title()
  fill(220)
  ctx.font = "20px minecraftia"
  ctx.textAlign = 'left'
  text("Safcraft " + version, width - (width - 2), height - 2)
}
drawScreens.play = () => {
ctx2.clearRect(0,0,width,height)
var now = Date.now()
tick = false
if(now - lastTick > 50){
lastTick = now
tick = true
}
p.rz = 0
if(survival && p.y < 0){
if(now-lastBlockHarm > 500){
lastBlockHarm = now
damage(4, username+" fell out of the world.")
}
}
if(controlMap.place.pressed && holding && blockData[holding].edible && (blockData[holding].eatWhenFull||(!survival) ? true : p.food < 20)){
var block = blockData[holding]
if(p.eating){
var time = now - p.eatStart
if(now - eatSoundTimer > 250){
eatSoundTimer = now
eatSound()
}
if(time > 1610){
p.eating = false
p.food += block.food
p.foodSaturation += block.saturation
if(survival && inventory.hotbar[inventory.hotbarSlot]){
inventory.hotbar[inventory.hotbarSlot].amount --;
updateHUD = true
}
if(p.food >= 20){
playSound("eat.burp")
if(multiplayer) send({type:"playSound", data:"eat.burp", x:p.x,y:p.y,z:p.z})
}
}
}else{
p.eating = true
p.eatStart = now
}
}else if(p.eating) p.eating = false
if(p.sneaking || p.eating || p.usingSpyglass){
p.sprinting = false
p.speed = 0.03
if(p.sneaking)p.bottomH = 1.32
}else if(!p.sprinting){
p.sneaking = false
p.speed = 0.075
p.bottomH = 1.62
}
for(var i=0; i<9; i++){
if(inventory.hotbar[i].id && inventory.hotbar[i].amount < 1){
inventory.hotbar[i] = 0
holding = inventory.hotbar[inventory.hotbarSlot].id
updateHUD = true
}
if(inventory.hotbar[i].id && inventory.hotbar[i].animation > 1){
inventory.hotbar[i].animation -= 0.04
if(inventory.hotbar[i].animation < 1) inventory.hotbar[i].animation = 1
updateHUD = true
}
if(inventory.hotbar[i] && (blockData[inventory.hotbar[i].id].pickaxe || blockData[inventory.hotbar[i].id].sword || blockData[inventory.hotbar[i].id].shovel || blockData[inventory.hotbar[i].id].axe || blockData[inventory.hotbar[i].id].hoe || inventory.hotbar[i].id===blockIds.flintAndSteel)){
if(inventory.hotbar[i].durability <= 0){
inventory.hotbar[i] = 0
holding = inventory.hotbar[inventory.hotbarSlot].id
playSound("entity.item.break")
if(multiplayer) send({type:"playSound", data:"entity.item.break", x:p.x,y:p.y,z:p.z})
updateHUD = true
}else if(!inventory.hotbar[i].durability){
inventory.hotbar[i].durability = blockData[inventory.hotbar[i].id].durability
}
}
}
if((now - attackCooldownStart) / 1000 * 20 > attackCooldownTime){
if(attackCooldown !== 0) updateHUD = true
attackCooldown = 0
}else{
let prog = (now - attackCooldownStart) / 1000 * 20
attackCooldown = prog / attackCooldownTime
updateHUD = true
}
p.prevUsingSpyglass = p.usingSpyglass
p.usingSpyglass = false
if(controlMap.place.pressed && holding && blockData[holding].spyglass){
p.spyglassTimer = Date.now() - p.spyglassStart
p.usingSpyglass = p.spyglassTimer < 60000
}
if(!p.prevUsingSpyglass && p.usingSpyglass){
p.FOV(settings.fov/10, 300)
playSound("item.spyglass.use")
if(multiplayer) send({type:"playSound", data:"item.spyglass.use", x:p.x,y:p.y,z:p.z})
}else if(p.prevUsingSpyglass && !p.usingSpyglass){
p.FOV(settings.fov, 300)
playSound("item.spyglass.stop")
if(multiplayer) send({type:"playSound", data:"item.spyglass.stop", x:p.x,y:p.y,z:p.z})
}
if(p.usingSpyglass || p.prevUsingSpyglass){
updateHUD = true
}
standingOn = world.getBlock(p2.x,p2.y-2,p2.z)
controls()
runGravity()
if(survival){
cracks()
}
if(witherEffect>0){
witherEffect --;
if(survival && now-lastBlockHarm > witherTime){
lastBlockHarm = now
loseHealthEffect = 60
damage(witherDamage, username+" got withered. Ew.")
}
}
if(survival && tick){
if(powder){
freezeEffect ++
if(freezeEffect > 140){
freezeEffect = 140
if(now - lastFreezeHealth > 2000 && survival){
lastFreezeHealth = now
loseHealthEffect = 60
damage(1,username+" froze to death.", false, "freeze")
}
}else{
lastFreezeHealth = now
updateHUD = true
}
}else if(freezeEffect > 0){
freezeEffect --
updateHUD = true
}
}
/*if(now - lastHeal > healTime) {
lastHeal = now
if(p.health < 20){
p.health += 1
healEffect = 40
updateHUD = true
}
}*/
if(survival){
if(p.foodSaturation > p.food) p.foodSaturation = p.food
/*if(p.food > 17 || p.food === 0){
var timer = now - p.foodTimer
if(timer >= 4000){
p.foodTimer = now
if(p.food === 0){
p.health --
harmEffect = 40
hitSound()
updateHUD = true
}else if(p.foodSaturation > 0 && p.health < 20){
p.health ++
healEffect = 40
updateHUD = true
}
}*/
/*if((timer === 500 || timer === 0) && p.food >= 20 && p.health < 20 && p.foodExhaustion > 0){
var heal = min(p.foodSaturation/6, 1)
p.health += heal
if(p.food > 18){
p.foodExhaustion += heal*6
}
healEffect = 40
updateHUD = true
}
}*/
var healTimer = now-lastHeal
if(p.health < 20){
var heal
if(p.foodSaturation > 0 && p.food === 20 && healTimer >= 500){
heal = 1
}else if(p.food >= 18 && healTimer >= 4000){
heal = 1
}
if(heal){
lastHeal = now
p.health += heal
healEffect = 40
updateHUD = true
}
if(p.food < 18 && p.food > 0) lastHeal = now
}
if(p.health > 1 && p.food <= 0 && healTimer >= 4000){
lastHeal = now
damage(1, username+" starved to death.")
}
if(p.foodExhaustion >= 4){
p.foodExhaustion = 0
p.foodSaturation --
if(p.foodSaturation <= 0){
p.food --
}
}
if(p.food > 20) p.food = 20
if(p.food < 0) p.food = 0
if(p.foodSaturation < 0) p.foodSaturation = 0
if(tick){
if(p.foodSaturation <= 0 || p.foodJitter > -1){
p.foodJitter ++
if(p.foodJitter > 10) p.foodJitter = -1
updateHUD = true
}else{
p.foodJitter = -1
}
}
}
if(liquid) p.burnTimer = 0
if(survival && p.burnTimer > 0){
if(now - p.burnStart > 500){
p.burnStart = now
p.burnTimer --
damage(1, username+" burned up.")
}
}
p.burning = p.burnTimer > 0
if(!survival) p.burnTimer = 0
var blockHere = world.getBlock(p2.x, p2.y, p2.z)
inWater = 0
if(blockHere === blockIds.Water) inWater = 1
if(blockHere === blockIds.Lava) inWater = 2
var blockAtFeet = world.getBlock(p2.x, p2.y-1, p2.z)
if(!p.flying && controlMap.jump.pressed && ((blockHere && blockData[blockHere].ladder) || (blockAtFeet && blockData[blockAtFeet].ladder))){
p.velocity.y = 0
p.y += 0.04
}
if(survival){
if(liquid && blockHere === blockIds.Water){
if(p.oxygen > 0){
if(now - lastLoseOxygen > 1000){
p.oxygen --
lastLoseOxygen = now
updateHUD = true
}
}else{
if(now-lastBlockHarm > 500){
lastBlockHarm = now
damage(1, username+" drowned.",false, "drown")
}
}
}else if(p.oxygen < 20 && now - lastGetOxygen > 300){
lastGetOxygen = now
p.oxygen = (Math.floor(p.oxygen/2)*2) + 2
updateHUD = true
}
}
if(p.health > 20) {
p.health = 20;
}
if(p.oxygen > 20) {
p.oxygen = 20;
}
if(harmEffect > 0){
harmEffect --
p.rz = max(harmEffect-20,0) / 200
p.character.harmEffect = harmEffect
updateHUD = true
}
if(healEffect > 0){
healEffect --
updateHUD = true
}
if(loseHealthEffect > 0){
loseHealthEffect --
updateHUD = true
}
resolveContactsAndUpdatePosition(now)
if(p.health < 5 && tick) updateHUD = true //for hearts shaking
if (updateHUD) {
clear()
gl.clearColor(0, 0, 0, 0)
gl.clear(gl.DEPTH_BUFFER_BIT | gl.COLOR_BUFFER_BIT)
hud()
ctx.drawImage(gl.canvas, 0, 0)
updateHUD = false
freezeFrame = false
gl.clearColor(sky[0], sky[1], sky[2], 1.0)
}
defineWorld()
if(harmEffect > 0){
fill(255,0,0, harmEffect)
ctx.fillRect(0,0,width,height)
}
if(portalEffect > 0){
fill(255,0,255, portalEffect)
ctx.fillRect(0,0,width,height)
updateHUD = true
portalEffect --
}
if(mouseDown && touchScreen){
ctx.beginPath()
fill(255)
strokeWeight(2)
ellipse(pTouch.x, pTouch.y, 70,70)
ctx.stroke()
if(pTouch.digProg > 0){
ctx.beginPath()
let r = pTouch.digProg * 70
ellipse(pTouch.x, pTouch.y, r,r)
ctx.fill()
}
updateHUD=true
}
if(survival)ctx.drawImage(canvas2,0,0)
if(p.health < 1){
die()
drawScreens.dead()
Button.draw()
Slider.draw()
}
if(titleOpacity > 0){
titleOpacity --
let alpha = titleOpacity/100
ctx.font = "80px mojangles"
ctx.textAlign = "center"
ctx.fillStyle = titleColor
ctx.globalAlpha = alpha > 1 ? 1 : alpha
text(title, width/2, height/2, 80)
if(subtitle){
ctx.font = "40px mojangles"
text(subtitle, width/2, height/2+50, 40)
}
ctx.globalAlpha = 1
updateHUD = true
}
if(sideMessageTime > 0){
sideMessageTime --
var x
var w = 200
if(sideMessageTime > 540){
x = 1 - ((sideMessageTime - 540) / 60)
}else if(sideMessageTime > 60){
x = 1
}else{
x = sideMessageTime / 60
}
x = width - (x * w)
ctx.clearRect(width-w,0,w,50)
ctx.fillStyle = "#223"
ctx.fillRect(x, 0,w,50)
ctx.textBaseline = "top"
ctx.fillStyle = "white"
ctx.font = "10px mojangles"
ctx.fillText(sideMessageTitle, x+5, 5, w-10)
ctx.fillStyle = "#aaa"
ctx.fillText(sideMessageContent, x+5, 20, w-10)
ctx.textBaseline = "alphabetic"
}
if(inventory.showName > 0){
inventory.showName -= 0.02
updateHUD = true
}
if((controlMap.forward.pressed || controlMap.backward.pressed || controlMap.left.pressed || controlMap.right.pressed) && p.onGround){
let limit = 500
if(p.sprinting) limit = 250
if(now - lastStepSound > limit){
lastStepSound = now
blockSound(standingOn, "step", p.x,p.y,p.z, 1)
}
}
}
drawScreens.dead = () => {
ctx.drawImage(gl.canvas, 0, 0)
ctx.fillStyle = "rgba(255,0,0,50%)"
ctx.fillRect(0,0,width,height)
fill(0)
ctx.font = "50px Arial"
ctx.textAlign = "center"
ctx.fillText("You are dead,not big surprise", width/2, 100)
ctx.font = "20px Arial"
ctx.fillText(dieMessage, width/2, 140)
ctx.fillText("Score: "+p.level, width/2, 160)
}
drawScreens.loading = () => {
world = dimensions.overworld
// This is really stupid, but it basically works by teleporting the player around to each chunk I'd like to load.
// If chunks loaded from a save aren't generated, they're deleted from the save, so this loads them all.
let frameStart = win.performance.now()+1
let sub = maxLoad - world.loadFrom.length - 9
if (superflat === "island") {
if (win.islandGenerator.stage < 10) {
if (!win.islandGenerator.seedSet) {
win.islandGenerator.SetSeed(noiseProfile.seed)
}
win.islandGenerator.Generate(frameStart);
}   else {
let standing = true
if (world.loadFrom.length) {
let load = world.loadFrom[0]
p.x = load.x * 16
p.y = load.y * 16
p.z = load.z * 16
standing = false
} else {
p.x = p2.x
p.y = p2.y
p.z = p2.z
let cx = p.x >> 4
let cz = p.z >> 4
for (let x = cx - 1; x <= cx + 1; x++) {
for (let z = cz - 1; z <= cz + 1; z++) {
if (!world.chunks[x] || !world.chunks[x][z] || !world.chunks[x][z].buffer) {
standing = false
} else {
sub++
}
}
}
}
if (standing) {
play()
return
}
world.tick()
}
}   else {
let standing = true
if (world.loadFrom.length) {
let load = world.loadFrom[0]
p.x = load.x * 16
p.y = load.y * 16
p.z = load.z * 16
standing = false
} else {
p.x = p2.x
p.y = p2.y
p.z = p2.z
let cx = p.x >> 4
let cz = p.z >> 4
for (let x = cx - 1; x <= cx + 1; x++) {
for (let z = cz - 1; z <= cz + 1; z++) {
if (!world.chunks[x] || !world.chunks[x][z] || !world.chunks[x][z].buffer) {
standing = false
} else {
sub++
}
}
}
}
if (standing) {
play()
return
}
world.tick()
}
let progress = Math.round( (superflat==="island"?50:100) * sub / maxLoad)
if(superflat === "island")progress += Math.round((win.islandGenerator.stage/9.0+win.islandGenerator.h/win.islandGenerator.size*3/9)*50)
dirt()
fill(255)
textSize(25)
ctx.textAlign = "center"
text(`Loading... ${progress}% complete (${sub} / ${maxLoad})`, width / 2, height / 2)
}
drawScreens.netherLoading = () => {
world = dimensions.nether
let frameStart = win.performance.now()+1
let sub = maxLoad - world.loadFrom.length - 9
let standing = true
if (world.loadFrom.length) {
let load = world.loadFrom[0]
p.x = load.x * 16
p.y = load.y * 16
p.z = load.z * 16
standing = false
} else {
p.x = p2.x
p.y = p2.y
p.z = p2.z
let cx = p.x >> 4
let cz = p.z >> 4
for (let x = cx - 1; x <= cx + 1; x++) {
for (let z = cz - 1; z <= cz + 1; z++) {
if (!world.chunks[x] || !world.chunks[x][z] || !world.chunks[x][z].buffer) {
standing = false
} else {
sub++
}
}
}
}
if (standing) {
play()
return
}
world.tick()
let progress = Math.round(100 * sub / maxLoad)
nether()
fill(255)
textSize(25)
ctx.textAlign = "center"
text(`Loading... ${progress}% complete (${sub} / ${maxLoad})`, width / 2, height / 2)
}
drawScreens.inventory = drawInv
drawScreens.crafting = drawCrafting
drawScreens.furnace = drawFurnace
drawScreens.pause = () => {
strokeWeight(1)
clear()
textSize(50)
fill(0, 0, 0)
ctx.textAlign = 'center'
text("Paused", width / 2, 60)
}
drawScreens.options = () => {
clear()
}
drawScreens.help = () => {
dirt()
ctx.textAlign = 'center'
textSize(25)
fill(255)
text("Help", width / 2, 40)
}
drawScreens["creation menu"] = () => {
dirt()
ctx.textAlign = 'center'
textSize(18)
fill(255)
text("Create New World", width / 2, 20)
}
drawScreens["loadsave menu"] = () => {
dirt()
ctx.textAlign = 'center'
textSize(18)
fill(255)
text("Select World", width / 2, 20)
}
drawScreens["broken world"] = () => {
dirt()
ctx.textAlign = 'center'
fill(255)
textSize(25)
text("This world is an old world.\nIt might be broken.\nAre you sure you want to load it?", width / 2, height / 2 - 50, 25)
}
drawScreens["multiplayer menu"] = () => {
dirt()
ctx.textAlign = 'center'
textSize(18)
fill(255)
text("Select server", width / 2, 20)
}
drawScreens["multiplayer connecting"] = () => {
dirt()
ctx.textAlign = 'center'
fill(255)
textSize(25)
text("Connecting...", width / 2, height / 2)
}
drawScreens.editworld = dirt
drawScreens.marketplace = () => {
dirt()
ctx.textAlign = 'center'
textSize(18)
fill(255)
text("Marketplace", width / 2, 20)
}
})()
// Give the font time to load and redraw the homescreen
setTimeout(e => {
drawScreens[screen]()
Button.draw()
Slider.draw()
}, 100)
let debugMenu = false
function gameLoop() {
let frameStart = performance.now()
if (!gl) {
initEverything()
releasePointer()
}
if(allLoaded){
if(screen === "options"){
if(previousScreen === "main menu"){
if(analytics.frames % 2 === 0)renderMainBG()
}
}
if(screen === "main menu"){
if(analytics.frames % 2 === 0)renderMainBG()
drawScreens[screen]()
Button.draw()
Slider.draw()
}
if (screen === "play" || screen === "loading" || screen === "netherLoading") {
drawScreens[screen]()
if(touchScreen && screen === "play") Button.draw()
}
if(screen === "furnace" && furnaceData.data.smelting){
drawScreens[screen]()
}
}
if (Date.now() - analytics.lastUpdate > 500 && analytics.frames) {
analytics.displayedTickTime = (analytics.totalTickTime / analytics.frames).toFixed(1)
analytics.displayedRenderTime = (analytics.totalRenderTime / analytics.frames).toFixed(1)
analytics.displayedFrameTime = (analytics.totalFrameTime / analytics.frames).toFixed(1)
analytics.fps = round(analytics.frames * 1000 / (Date.now() - analytics.lastUpdate))
analytics.displayedwFrameTime = analytics.worstFrameTime.toFixed(1)
analytics.frames = 0
analytics.totalRenderTime = 0
analytics.totalTickTime = 0
analytics.totalFrameTime = 0
analytics.worstFrameTime = 0
analytics.lastUpdate = Date.now()
updateHUD = true
}
analytics.frames++
analytics.totalFrameTime += performance.now() - frameStart
analytics.worstFrameTime = max(performance.now() - frameStart, analytics.worstFrameTime)
win.raf = requestAnimationFrame(gameLoop)
}
return gameLoop
}
var init = MineCraft()
if (window.parent.raf) {
window.cancelAnimationFrame(window.parent.raf)
console.log("Canceled", window.parent.raf)
}
init()
function hcyl(bottom, height, radius, id) {
let radsq = radius * radius
let innerRadsq = (radius - 1.2) * (radius - 1.2)
height += bottom
for (let x = -radius; x <= radius; x++) {
for (let y = bottom; y < height; y++) {
for (let z = -radius; z <= radius; z++) {
let d = x * x + z * z
if (d < radsq && d >= innerRadsq) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function cyl(bottom, height, radius, id) {
let radsq = radius * radius
height += bottom
for (let x = -radius; x <= radius; x++) {
for (let y = bottom; y < height; y++) {
for (let z = -radius; z <= radius; z++) {
let d = x * x + z * z
if (d < radsq) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function sphereoid(w, h, d, id) {
let w2 = w * w
let h2 = h * h
let d2 = d * d
let w3 = (w - 1.5) * (w - 1.5)
let h3 = (h - 1.5) * (h - 1.5)
let d3 = (d - 1.5) * (d - 1.5)
for (let y = -h; y < h; y++) {
for (let x = -w; x <= w; x++) {
for (let z = -d; z <= d; z++) {
let n = x * x / w2 + y * y / h2 + z * z / d2
let n2 = x * x / w3 + y * y / h3 + z * z / d3
if (n < 1 && n2 >= 1) {
world.setBlock(p2.x + x, p2.y + y, p2.z + z, id)
}
}
}
}
}
function sphereoidAt(X,Y,Z,w, h, d, id) {
let w2 = w * w
let h2 = h * h
let d2 = d * d
let w3 = (w - 1.5) * (w - 1.5)
let h3 = (h - 1.5) * (h - 1.5)
let d3 = (d - 1.5) * (d - 1.5)
for (let y = -h; y < h; y++) {
for (let x = -w; x <= w; x++) {
for (let z = -d; z <= d; z++) {
let n = x * x / w2 + y * y / h2 + z * z / d2
let n2 = x * x / w3 + y * y / h3 + z * z / d3
if (n < 1 && n2 >= 1) {
world.setBlock(X + x, Y + y, Z + z, id)
}
}
}
}
}
function ball(X,Y,Z,w, h, d, id) {
let w2 = w * w
let h2 = h * h
let d2 = d * d
for (let y = -h; y < h; y++) {
for (let x = -w; x <= w; x++) {
for (let z = -d; z <= d; z++) {
let n = x * x / w2 + y * y / h2 + z * z / d2
if (n < 1) {
world.setBlock(X + x, Y + y, Z + z, id)
}
}
}
}
}
function explode(x,y,z, r, liquid){
/*world.setBlock(x,y,z,blockIds.air);
for(var i=radius; i>0; i--){
sphereoidAt(x,y,z,i,i,i, blockIds.air)
}*/
//ball(x,y,z,r,r,r,0)
if(!liquid)world.setBlock(x,y,z, 0)
let w2 = r * r
let h2 = w2
let d2 = w2
for (let Y = -r; Y < r; Y++) {
for (let X = -r; X <= r; X++) {
for (let Z = -r; Z <= r; Z++) {
let n = X * X / w2 + Y * Y / h2 + Z * Z / d2
if (n < 1) {
if(world.getBlock(X + x, Y + y, Z + z) === blockIds.tnt){
blockData[blockIds.tnt].explode(X+x,Y+y,Z+z)
}
if(Math.random() > 0.5){
var time = Math.random()*1000
if(time < 10){
world.particles.push(new ExplodeParticle(X + x, Y + y, Z + z))
}else{
setTimeout(() => world.particles.push(new ExplodeParticle(X + x, Y + y, Z + z)), time)
}
}
if(!liquid)world.setBlock(X + x, Y + y, Z + z, 0)
}
}
}
}
for(var i=0; i<world.entities.length; i++){
var ent = world.entities[i]
var dist = dist3(x,y,z, ent.x, ent.y, ent.z)
if(dist <= r){
var X = ent.x - x; ent.velx += ((Math.sign(X)*r)-X)/5
var Y = ent.y - y; ent.vely += ((Math.sign(Y)*r)-Y)/5
var Z = ent.z - z; ent.velz += ((Math.sign(Z)*r)-Z)/5
}
}
var p = player
var dist = dist3(x,y,z, p.x, p.y, p.z)
if(dist <= r){
var X = p.x - x; p.velocity.x += ((Math.sign(X)*r)-X)/5
var Y = p.y - y; p.velocity.y += ((Math.sign(Y)*r)-Y)/5
var Z = p.z - z; p.velocity.z += ((Math.sign(Z)*r)-Z)/5
}
explodeSound(x,y,z)
}
function fall(x,y,z,b){
if(world.getBlock(x,y-1,z)) return
setTimeout(() => {
world.setBlock(x,y,z, 0)
world.addEntity(new BlockEntity(b, x,y,z, true))
}, 100)
}
function blockParticles(block,x,y,z,amount){
for(var i=0; i<amount; i++) world.particles.push(new BlockParticle(blockData[block].textures[2], x,y,z))
}
if (("serviceWorker" in navigator) && location.origin === "https://16f81.codesandbox.io.repl.co") {
window.addEventListener("load", function() {
navigator.serviceWorker
.register("/sw.js")
.then(res => console.log("service worker registered"))
.catch(err => console.log("service worker not registered", err))
})
}
function scrollToEl(id){
var el = document.getElementById(id)
if(el) el.scrollIntoView()
}
name