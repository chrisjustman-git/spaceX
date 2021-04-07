import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchesFilterComponent } from './launches-filter.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [LaunchesFilterComponent],
  exports:[LaunchesFilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LaunchesFilterModule { }
