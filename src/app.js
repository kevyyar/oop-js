class Drone {}

console.log(typeof Drone); // function

let drone = new Drone();
console.log(typeof drone); // object

console.log(drone instanceof Drone); // true
