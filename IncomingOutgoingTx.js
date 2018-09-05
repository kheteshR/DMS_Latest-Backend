var nem = require("nem-sdk").default;

// Create an NIS endpoint object
var endpoint = nem.model.objects.create("endpoint")("http://b1.nem.foundation", nem.model.nodes.mijinPort);

// Get incoming transactions
// nem.com.requests.account.transactions.outgoing(endpoint, "MDP35Y52MYNOHRGFGRYJW4YNKGRZHZLR3G3WQKDC").then(function(res) {
// 	console.log("\nIncoming transactions:");
// 	console.log(res.data);
// }, function(err) {
// 	console.error(err);
// });
// Get all supernodes
// nem.com.requests.supernodes.all().then(function(res) {
// 	console.log("\nSupernodes:");
// 	console.log(res);
// }, function(err) {
// 	console.error(err);
// });
// Get 100 firsts namespaces 
nem.com.requests.namespace.roots(endpoint).then(function(res) {
	console.log("\nNamespaces:");
	console.log(res);
}, function(err) {
	console.error(err);
});
// Get account data
nem.com.requests.account.data(endpoint, "MDP35Y52MYNOHRGFGRYJW4YNKGRZHZLR3G3WQKDC").then(function(res) {
	console.log("\nAccount data:");
	console.log(res);
}, function(err) {
	console.error(err);
});
//get incoming transaction
nem.com.requests.account.transactions.incoming(endpoint, "MAT4QUUKC2SJMOZ35UQKL4YS6RAOCRWW7VFDY4MP").then(function(res) {
	console.log("\nIncoming transactions:");
    console.log(res.data[0].transaction.message);
    var fmt = nem.utils.format.hexToUtf8(res.data[0].transaction.message.payload);
    console.log(fmt)
}, function(err) {
	console.error(err);
});

// Get unconfirmed transactions
// nem.com.requests.account.transactions.unconfirmed(endpoint, address).then(function(res) {
// 	console.log("\nUnconfirmed transactions:");
// 	console.log(res);
// }, function(err) {
// 	console.error(err);
// });