// spot check 1

class Animal {
  constructor(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
    this.children = [];
  }
  giveBirth(name) {
    this.children.push(name);
  }
}
const cat = new Animal("Puss", 4);
console.log(cat.name + " has " + cat.numLegs + " legs");

const dog = new Animal("Bo", 3);
console.log(dog.name);
//Spot Check 2

class Human {
  constructor(name, age, isFriendly) {
    this.name = name;
    this.age = age;
    this.isFriendly = isFriendly;
  }
}

const person = new Human("omama", 24, true);

console.log(
  `name:${person.name}, age: ${person.age}, isFriedly: ${
    person.isFriedly ? "Friedly" : "not Friedly"
  }`
);

// //methods

const cat1 = new Animal("Puss", 4);
cat1.giveBirth("Dolly");
//Spot Check 3

const catm = new Animal("Puss", 4);
catm.giveBirth("Dolly");
console.log(catm.children);
//Spot Check 4

class Vehicle {
  constructor(x, y, speed, fuel) {
    this.x = x;
    this.y = y;
    this._speed = speed;
    this._fuel = fuel;
    Vehicle.carsSold++;
  }
  get fuel() {
    console.log("getter");
    return this._fuel;
  }

  set fuel(amount) {
    if (amount > 150) {
      return console.log("Too much");
    }
    if (amount < 0) {
      return console.log("Not reasonable");
    }
    this._fuel = amount;
  }

  getInfo() {
    console.log(this.x, this.y, this.speed);
  }
  static getInfo2() {
    console.log(`"${Vehicle.carsSold}Cars are great"`);
  }
  static calculateMoney() {
    console.log(`${Vehicle.carsSold * 30000}`);
  }

  set speed(speed) {
    if (speed < 0) {
      return console.log("Speed must be positive");
    }
    this._speed = speed;
  }
}
Vehicle.carsSold = 0;

//Static Methods and Getters & Setters
const car = new Vehicle(30, 40, 200);
const car2 = new Vehicle(30, 40, 200);
car.getInfo();
//Prototype & Static Methods
Vehicle.getInfo2();
//pot Check 5
Vehicle.calculateMoney();
//GETTER & SETTER (NOT MANDATORY)
const car3 = new Vehicle();
car3.x = 3;
car3.y = 1;
car3.speed = 5;

console.log(car3.x);
console.log(car3.y);
console.log(car3.speed);

const c = new Vehicle();
c.x = 3;
c.y = 1;
c.speed = -2; // at this point, we'll get the console log saying speed needs to be positive
console.log(c.speed); // prints undefined

// //Spot Check 6

const car6 = new Vehicle(10, 20, 30, 100);
car6.fuel = 140;
console.log(car6.fuel);

//UMLs

//OOP
class Zoo {
  constructor() {
    this.animals = [];
  }

  addAnimal(animal) {
    this.animals.push(animal);
    console.log("Added " + animal.name + " to the zoo");
  }

  showAnimals() {
    this.animals.forEach((a) => console.log(a.name));
  }
}

const catoop = new Animal("Puss", 4);
const zoo = new Zoo();

zoo.addAnimal(catoop); // prints "Added Puss to the zoo"
zoo.showAnimals(); // prints "Puss"
