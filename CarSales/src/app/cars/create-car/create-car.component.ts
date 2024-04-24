import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CarService } from '../car.service';

@Component({
  selector: 'app-create-car',
  templateUrl: './create-car.component.html',
  styleUrls: ['./create-car.component.scss'],
})
export class CreateCarComponent {
  constructor(
    private formBuilder: FormBuilder,
    private carService: CarService
  ) {}

  form = this.formBuilder.group({
    make: ['', [Validators.required]],
    model: ['', [Validators.required]],
    year: ['', [Validators.required]],
    used: ['', [Validators.required]],
    coupe: ['', [Validators.required]],
    fuelType: ['', [Validators.required]],
    description: ['', [Validators.required]],
    price: ['', [Validators.required]],
    images: ['', [Validators.required]],
  });

  create(): void {
    if (this.form.invalid) {
      console.log('Invalid form');
      return;
    }

    const {
      make,
      model,
      year,
      used,
      coupe,
      fuelType,
      description,
      price,
      images,
    } = this.form.value;

    this.carService
      .createCar(
        make!,
        model!,
        year!,
        used!,
        coupe!,
        fuelType!,
        description!,
        price!,
        images!
      )
      .subscribe((data) => console.log(data));
  }
}
