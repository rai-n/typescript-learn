var user1;
user1 = {
    name: "Neer",
    age: 24,
    greet: function (message) {
        console.log("hello ".concat(this.name));
    },
    set setAge(age) {
        this.age = age;
    }
};
user1.greet("Hello");
var Neer = /** @class */ (function () {
    function Neer(name, age) {
        this.name = name;
        this.age = age;
        if (name) {
            this.name = name;
        }
        this.age = age;
    }
    Neer.prototype.greet = function (message) {
        console.log("Neer says " + message);
    };
    Object.defineProperty(Neer.prototype, "setAge", {
        set: function (age) {
            this.age = age;
        },
        enumerable: false,
        configurable: true
    });
    return Neer;
}());
var func = function (a) {
    return a + "hello ";
};
var neer = new Neer("Neer", 24);
neer.greet("wassup");
var noAge = new Neer("NoAge");
console.log(noAge.age);
noAge.setAge = 24;
console.log(noAge.age);
