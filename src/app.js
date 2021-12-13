class Drone {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  static getCompany() {
    console.log("in getCompany method");
  }

  static getCompany2() {
    console.log(this.id);
  }

  fly() {
    console.log("Fly this drone with ID: " + this.id);
  }
}

let drone = new Drone("A123", "Flyer");
let drone2 = new Drone("B456", "Twirl");

Drone.getCompany(); // 'in getCompany method'
drone.getCompany(); // TypeError: drone.getCompany is not a function (it only exists on the class and not on the instance)
drone.getCompany2(); // this.id only exists on the instance and on the class itself
