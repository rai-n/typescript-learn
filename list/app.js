var likes = ["pizza", "dumpling"];
var person = {
    name: "Neer",
    likes: likes,
    rating: [3, "Great"],
};
console.log("".concat(person.name, " likes ").concat(person.likes.join(" and "), ". ").concat(person.rating[0], "/5. ").concat(person.rating[1], "!"));
