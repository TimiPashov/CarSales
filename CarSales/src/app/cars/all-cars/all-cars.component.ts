import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { Car } from 'src/app/types/Car';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss'],
})
export class AllCarsComponent implements OnInit {
  cars = [] as Car[];

  constructor(private carService: CarService, private router: Router) {}

  ngOnInit(): void {
    this.carService.getAllCars().subscribe((cars) => (this.cars = cars));
  }
}
