import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarRoutingModule } from './car-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateCarComponent],
  imports: [CommonModule, ReactiveFormsModule, CarRoutingModule],
})
export class CarsModule {}
