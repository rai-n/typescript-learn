"use strict";
const likes = ["pizza", "dumpling"];
const person = {
    name: "Neer",
    likes: likes,
    rating: [3, "Great"],
};
console.log(`${person.name} likes ${person.likes.join(" and ")}. ${person.rating[0]}/5. ${person.rating[1]}!`);
