"use strict";
const hobbies = ['Sports', 'Cooking'];
const otherHobbies = ['Reading', 'Eating', 'Shopping'];
const toPrint = () => {
    console.log("All hobbies: " + hobbies.push(...otherHobbies));
};
// assign the values in hobbies to copyHobby object instead of reassigning the reference
const copyHobby = Object.assign({}, hobbies);
