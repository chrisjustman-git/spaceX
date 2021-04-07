import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchDetailsModule } from '../launch-details/launch-details.module';
import { LaunchesComponent } from './launches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';
import { LaunchesFilterModule } from '../launches-filter/launches-filter.module';



@NgModule({
  declarations: [LaunchesComponent],
  exports:[LaunchesComponent],
  providers:[],
  entryComponents:[LaunchDetailsComponent],
  imports: [
    CommonModule,
    LaunchesFilterModule,
    LaunchDetailsModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ]
})
export class LaunchesModule { }
