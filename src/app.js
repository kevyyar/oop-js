class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  fly() {
    console.log("Fly this drone with ID: " + this.id);
  }
}

let drone = new Drone("A123", "Flyer");
let drone2 = new Drone("B456", "Twirl");

drone.fly();
drone2.fly();
