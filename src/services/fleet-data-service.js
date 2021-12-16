import { Car } from "../classes/car.js";
import { Drone } from "../classes/drone.js";
import { DataError } from "./data-error.js";

export class FleetDataService {
  constructor() {
    this.cars = [];
    this.drones = [];
    this.errors = [];
  }

  getCarByLicense(license) {
    return this.cars.find((car) => car.license === license);
  }

  getCarsSortedByLicense() {
    return this.cars.sort((car1, car2) => {
      if (car1.license < car2.license) {
        return -1;
      }

      if (car1.license > car2.license) {
        return 1;
      }

      return 0;
    });
  }

  filterCarsByMake(filter) {
    return this.cars.filter((car) => car.make.indexOf(filter) >= 0);
  }

  loadData(fleet) {
    for (let data of fleet) {
      switch (data.type) {
        case "car":
          if (this.validateCarData(data)) {
            let car = this.loadCar(data);
            if (car) this.cars.push(car);
          } else {
            let e = new DataError("invalid car data", data);
            this.errors.push(e);
          }
          break;
        case "drone":
          this.drones.push(data);
          break;
        default:
          let e = new DataError("Invalid vehicle type", data);
          this.errors.push(e);
          break;
      }
    }
  }

  loadCar(carData) {
    try {
      let c = new Car(carData.license, carData.model, carData.latLong);
      c.make = carData.make;
      c.miles = carData.miles;
      return c;
    } catch (e) {
      this.errors.push(new DataError("error loading car", carData));
    }

    return null;
  }

  validateCarData(carData) {
    let requiredProps = "license model latLong miles make".split(" ");
    let hasErrors = false;
    for (let field of requiredProps) {
      if (!carData[field]) {
        this.errors.push(new DataError(`invalid field ${field}`, carData));
        hasErrors = true;
      }
    }

    if (isNaN(parseFloat(carData.miles))) {
      this.errors.push(new DataError("invalid milage", carData));
      hasErrors = true;
    }

    return !hasErrors;
  }
}
