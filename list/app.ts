const likes = ["pizza", "dumpling"];
const person: {
  name: string;
  likes: string[];
  rating: [number, string];
} = {
  name: "Neer",
  likes: likes,
  rating: [3, "Great"],
};

console.log(
  `${person.name} likes ${person.likes.join(" and ")}. ${
    person.rating[0]
  }/5. ${person.rating[1]}!`
);
