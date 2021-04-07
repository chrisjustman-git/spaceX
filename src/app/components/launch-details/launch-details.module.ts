import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchDetailsComponent } from './launch-details.component';



@NgModule({
  declarations: [LaunchDetailsComponent],
  exports: [LaunchDetailsComponent],
  imports: [
    CommonModule
  ]
})
export class LaunchDetailsModule { }
