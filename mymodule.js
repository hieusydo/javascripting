//by default, var exports = module.exports = {}

console.log('Hi');

exports.printName = function() {
	console.log("Hi, this is Hieu");
};

exports.printGreeting = function() {
	console.log("Yay my first module is working");
};

// var reassign = module.exports; ==> this reassign module.exports to a string, no longer var exports 
// Fix: reassign.printName = function() {
// 	console.log("Hi, this is Hieu");
// };
