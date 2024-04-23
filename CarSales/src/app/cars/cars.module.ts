import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarRoutingModule } from './car-routing.module';

@NgModule({
  declarations: [CreateCarComponent],
  imports: [CommonModule, CarRoutingModule],
})
export class CarsModule {}
