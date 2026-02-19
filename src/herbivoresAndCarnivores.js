'use strict';

class Animal {
  static alive = [];

  constructor(name, health = 100) {
    this.name = name;
    this.health = health;

    Animal.alive.push(this);
  }

  static checkDeath(animal) {
    if (animal.health <= 0) {
      animal.health = 0;

      const removedIndex = Animal.alive.indexOf(animal);

      Animal.alive.splice(removedIndex, 1);
    }
  }
}

class Herbivore extends Animal {
  hidden = false;

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  bite(target) {
    if (target.hidden || target instanceof Carnivore) {
      return;
    }

    target.health -= 50;

    Animal.checkDeath(target);
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
