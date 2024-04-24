import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  constructor(private http: HttpClient) {}

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
    
    return this.http.post('http://localhost:3000/cars/', {
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
}
