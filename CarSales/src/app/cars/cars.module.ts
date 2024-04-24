import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarRoutingModule } from './car-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AllCarsComponent } from './all-cars/all-cars.component';

@NgModule({
  declarations: [CreateCarComponent, CarDetailsComponent, AllCarsComponent],
  imports: [CommonModule, ReactiveFormsModule, CarRoutingModule],
})
export class CarsModule {}
