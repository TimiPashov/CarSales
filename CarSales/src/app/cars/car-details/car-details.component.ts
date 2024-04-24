import { Component, OnInit } from '@angular/core';
import { CarService } from '../car.service';
import { UserService } from 'src/app/user/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Car } from 'src/app/types/Car';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.scss'],
})
export class CarDetailsComponent implements OnInit {
  car = {} as Car;

  constructor(
    private carService: CarService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  deleteCar() {
    this.carService.deleteCar(this.car._id).subscribe(() => {
      this.router.navigate(['/cars']);
    });
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.carService.getCar(params.get('carId')).subscribe((car) => {
        this.car = car;
      });
    });
  }
}
