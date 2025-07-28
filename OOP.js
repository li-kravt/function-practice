class Animal {
  constructor(animal, sound) {
  this.name = animal
  this.sound = sound
  this.speak()
}

speak() {
  console.log(`${this.name} say ${this.sound}!`)
}
}

const dog = new Animal("Dog", "gav")

console.log(dog)