import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCarComponent } from './create-car/create-car.component';
import { CarDetailsComponent } from './car-details/car-details.component';
import { AllCarsComponent } from './all-cars/all-cars.component';

const routes: Routes = [
  { path: '', component: AllCarsComponent },
  { path: 'create-car', component: CreateCarComponent },
  { path: ':carId', component: CarDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CarRoutingModule {}
