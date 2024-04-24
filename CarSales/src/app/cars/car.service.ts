import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Car } from '../types/Car';

@Injectable({
  providedIn: 'root',
})
export class CarService {

  constructor(private http: HttpClient) {}

  getAllCars() {
    return this.http.get<Car[]>('http://localhost:3000/cars/');
  }

  createCar(
    make: string,
    model: string,
    year: string,
    used: string,
    coupe: string,
    fuelType: string,
    description: string,
    price: string,
    images: string
  ) {
    console.log('posting car');

    return this.http.post<Car>('http://localhost:3000/cars/', {
      make,
      model,
      year,
      used,
      coupe,
      fuelType,
      description,
      price,
      images,
    });
  }

  getCar(carId: string | null) {
    return this.http.get<Car>(`http://localhost:3000/cars/${carId}`);
  }

  deleteCar(carId: string) {
    return this.http.delete(`http://localhost:3000/cars/${carId}`);
  }
}
