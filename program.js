var mymodule = require("./mymodule.js");

console.log("Hello world");
console.log(process.argv[1] + "\n");

mymodule.printName();
mymodule.printGreeting();
console.log(mymodule);