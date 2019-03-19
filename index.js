// ======== OBJECTS DEFINITIONS ========
class Creature {
  constructor(name, age, hobby, legs, species, gender) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.hobby = hobby;
    this.species = species;
    this.gender = gender;
  }
}

class Human extends Creature {
  constructor(name, age, hobby, profession) {
    super(name, age, hobby);
    this.species = 'human';
    this.hands = 2;
    this.legs = 2;
    this.profession = profession;
  }
}

class Man extends Human {
  constructor(name, age, hobby, profession) {
    super(name, age, hobby, profession);
    this.gender = 'male';
    this.greeting = this.greeting.bind(this);
  }
  greeting() {
    return `Hello! My name is <strong>${this.name}</strong>. I'm ${this.age}. Little about me:
    I'm a ${this.species}, ${this.gender}. I have ${this.hands} hands and ${this.legs} legs. My hobby is ${
      this.hobby
    }.`;
  }
}

class Woman extends Human {
  constructor(name, age, hobby, profession) {
    super(name, age, hobby, profession);
    this.gender = 'female';
    this.greeting = this.greeting.bind(this);
  }
  greeting() {
    return `Hi! I am <strong>${this.name}</strong>. I'm ${this.age}. I'm a ${this.species}, ${this.gender}.
    I have ${this.hands} hands and ${this.legs} legs. I'm enjoy of ${this.hobby}.`;
  }
}

class Animal extends Creature {
  constructor(name, age, hobby, species, skinColor) {
    super(name, age, hobby, species);
    this.legs = 4;
    this.species = species;
    this.skinColor = skinColor;
    this.greeting = this.greeting.bind(this);
  }
  greeting() {
    return `This is a ${this.species}. Its name is <strong>${this.name}</strong>. Age: ${this.age}.
    It has ${this.skinColor} fur and ${this.legs} legs. It enjoy of ${this.hobby}.`;
  }
}

class Cat extends Animal {
  constructor(name, age, hobby, skinColor) {
    super(name, age, hobby, skinColor);
    this.species = 'cat';
  }
}

class Dog extends Animal {
  constructor(name, age, hobby, skinColor) {
    super(name, age, hobby, skinColor);
    this.species = 'dog';
  }
}

const john = new Man('John', 28, 'fishing', 'engeneer');
const anny = new Woman('Anny', 23, 'shoping', 'teacher');
const rex = new Dog('Rex', 3, 'diging bones', 'white with black spots');
const sida = new Cat('Sida', 1.5, 'sleeping', 'lightgrey');

// // ======== OUTPUT ========
[john, anny, rex, sida].forEach(item => print(item.greeting()));
