class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static maxMiles = 1000;
}

Drone.maxHeight = 2000;

let drone = new Drone("A123", "Flyer");
let drone2 = new Drone("B456", "Twirl");

console.log(drone.id);
console.log(drone2.id);
console.log(drone.maxHeight); // undefined because it only exists as a class property and not an instance property
console.log(Drone.maxHeight); // this is a class property and not an instance property so it cannot be accessed by the instance of the class
console.log(Drone.maxMiles);
