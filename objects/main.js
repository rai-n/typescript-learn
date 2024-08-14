"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getName = {
    name: "Neer",
    surname: "Rai",
    animal: {
        name: "Buddy",
        age: +"5",
        type: "Dog".toLowerCase(),
    },
};
var greet = "Hey ".concat(getName.name, ", hows your ").concat(getName.animal.age, " year old ").concat(getName.animal.type, " ").concat(getName.animal.name, " doing?");
console.log(greet);
