class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

let drone = new Drone("A123", "Flyer");

console.log("Drone: " + drone.id);
console.log("Name: " + drone.name);
