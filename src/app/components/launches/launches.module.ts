import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LaunchDetailsModule } from '../launch-details/launch-details.module';
import { ILaunchesFilterService } from 'src/app/services/launches-filter-service';
import { SpaceXService } from 'src/app/services/spaceX.service';
import { LaunchesComponent } from './launches.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LaunchDetailsComponent } from '../launch-details/launch-details.component';
import { ModalService } from 'src/app/services/modal-service';
import { LaunchesFilterModule } from '../launches-filter/launches-filter.module';



@NgModule({
  declarations: [LaunchesComponent],
  exports:[LaunchesComponent],
  providers:[SpaceXService, ILaunchesFilterService, ModalService],
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
