"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getName = {
    name: "Neer",
    surname: "Rai",
    animal: {
        name: "Buddy",
        age: +"5",
        type: "Dog".toLowerCase(),
    },
};
const greet = `Hey ${getName.name}, hows your ${getName.animal.age} year old ${getName.animal.type} ${getName.animal.name} doing?`;
console.log(greet);
