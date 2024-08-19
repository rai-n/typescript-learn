"use strict";
const sportHobbies = ['swimming', 'running', 'cycling', 'eating'];
const [hobbie1, hobbie2, ...remainingHobbies] = sportHobbies;
console.log(hobbie1);
console.log(hobbie2);
console.log(remainingHobbies);
const personBob = {
    name: 'bob',
    age: 30,
    hobbies: ['sports', 'cooking']
};
const { name: userName, age, hobbies: userHobbies } = personBob;
console.log(userName);
console.log(age);
console.log(userHobbies);
const printName = (p1) => {
    console.log(p1.name);
};
printName(personBob);
