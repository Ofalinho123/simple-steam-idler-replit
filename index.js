const steamUser = require('steam-user');
const steamTotp = require('steam-totp');
const keep_alive = require('./keep_alive.js')

var username7 = process.env.username7;
var password7 = process.env.password7;
var shared_secret7 = process.env.shared7;

var games7 = [730, 440, 570];  // Enter here AppIDs of the needed games
var status7 = 7;  // 1 - online, 7 - invisible


user7 = new steamUser();
user7.logOn({"accountName": username7, "password": password7, "twoFactorCode": steamTotp.generateAuthCode(shared_secret7)});
user7.on('loggedOn', () => {
	if (user.steamID != null) console.log(user7.steamID + ' - Successfully logged on');
	user.setPersona(status7);               
	user.gamesPlayed(games7);
});


// var username2 = process.env.username2;
// var password2 = process.env.password2;
// var shared_secret2 = process.env.shared2;

// var games2 = [730, 440, 570, 304930];  // Enter here AppIDs of the needed games
// var status2 = 1;  // 1 - online, 7 - invisible


// user2 = new steamUser();
// user2.logOn({"accountName": username2, "password": password2, "twoFactorCode": steamTotp.generateAuthCode(shared_secret2)});
// user2.on('loggedOn', () => {
// 	if (user2.steamID != null) console.log(user2.steamID + ' - Successfully logged on');
// 	user2.setPersona(status2);               
// 	user2.gamesPlayed(games2);
// });
