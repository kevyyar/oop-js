class Drone {
  constructor(id) {
    this._id = id; // convention for a private property with underscore (_id)
  }

  get id() {
    return this._id; // we can only read and we cannot modify with the getter.
  }

  set id(newIDValue) {
    this._id = newIDValue; // we can modify the getter value with the setter
  }
}

let drone = new Drone("A123");
console.log(drone.id);
drone.id = "B456"; // this is the new value set in setter
console.log(drone.id);

// WE CAN ACCESS THE SETTER AND GETTERS AS BEING PROPERTIES AND NOT FUNCTIONS EVEN THOUGH THEY ARE CREATED SUCH AS A METHOD
