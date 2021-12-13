class Vehicle {
    constructor() {
        this.gpsEnabled = true;
    }
}

class Drone extends Vehicle {}

class Car extends Vehicle {
    constructor() {
        super();
        this.gpsEnabled = false
    }
}


let c = new Car()
console.log(c.gpsEnabled) // true (does not exist on Car class, but it exists on base class, so we can use it)
console.log(c.gpsEnabled) // false (it has been overwritten in the child class Car)