// functions are first class 
// pass functions reference as arguments
var greet = function () { return console.log("Greetings..."); };
var logGreet = function (fn) {
    fn();
};
logGreet(greet);
// function expression
// having function reference as variables
var greetMe = function () {
    console.log("Hi neer");
};
greetMe();
// function expression on the fly 
logGreet(function () { return console.log("Wowe"); });
