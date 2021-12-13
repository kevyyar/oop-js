class Vehicle {
    start() {
        console.log('starting vehicle')
    }

    static getCompanyName() {
        console.log('Vehicle Class: My Company')
    }
}

class Car extends Vehicle {
    start() {
        super.start();
        console.log('starting Car')
    }

    static getCompanyName() {
        super.getCompanyName()
        console.log('Car Class: My Other Company')
    }
}


let c = new Car()
c.start()

Car.getCompanyName()