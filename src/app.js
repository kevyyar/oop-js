class Drone {
  constructor(id, name) {
    //.. inside the constructor we create instance variables
    console.log(id);
    console.log(name);
    //.. we use the 'this' keyword to refer to the instance being created. With this, they're being attached to the instance Drone
    this.id = id;
    this.name = name;
  }
}

let drone = new Drone("A123", "Flyer");
console.log(drone.name);
console.log(drone.id);
