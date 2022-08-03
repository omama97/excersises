// class Zoo {
//   // singletone class
//   //add & remove animals and worker
// class Animal {
//   constructor(animalName, animalType) {
//     this.name = name;
//     this.animalType = animalType;
//   }
// }

// }

// class worker {}

class LuxuryFeeder {
  getFood(animalType) {
    if (animalType == "lion") {
      return "chia seeds";
    }
    if (animalType == "elephant") {
      return "peanuts";
    }

    return "scraps";
  }
}

class CheapFeeder {
  getFood(animalType) {
    return "scraps";
  }
}

const luxuryFeeder = new LuxuryFeeder();
const cheapFeeder = new CheapFeeder();
let weArePoor = false;

let relevantFeeder;

if (weArePoor) {
  relevantFeeder = cheapFeeder;
} else {
  relevantFeeder = luxuryFeeder;
}

class Animal {
  constructor(name, type, feeder) {
    this.name = name;
    this.type = type;
    this.feeder = feeder;
  }

  _consume(food) {
    console.log("Just consumed " + food + ". Feels good.");
  }

  eat() {
    const food = relevantFeeder.getFood(this.type);
    this._consume(food);
  }
}

// Dependency Injection

const bisma = new Animal(
  "Bisma",
  "lion",
  /*injection ->*/ relevantFeeder /*<- injection*/
);
bisma.eat();
