class Vehicle {}

class Drone extends Vehicle {}

class Car extends Vehicle {}


let c = new Car()
console.log(c instanceof Car) // true
console.log(c instanceof Vehicle) // true
console.log(c instanceof Object) // true