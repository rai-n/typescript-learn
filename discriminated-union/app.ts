interface Bird {
  flyingSpeed: number;
  type: "bird";
}

interface Horse {
  runningSpeed: number;
  type: "horse";
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  switch (animal.type) {
    case "bird":
      console.log("Moving with speed: " + animal.flyingSpeed);
      break;
    case "horse":
      console.log("Moving with speed: " + animal.runningSpeed);
      break;
  }
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });
moveAnimal({ type: 'horse', runningSpeed: 10 });
 