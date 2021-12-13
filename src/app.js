class Vehicle {
    constructor(licenseNum) {
        this.licenseNum = licenseNum
    }
}

class Drone extends Vehicle {}

class Car extends Vehicle {
    constructor(licenseNum) {
        super(licenseNum);
    }
}


let c = new Car('License num: A123', 'Black')
console.log(c.licenseNum)