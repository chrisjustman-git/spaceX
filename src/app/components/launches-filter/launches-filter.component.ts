import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { takeWhile } from 'rxjs/operators';
import { LaunchFilterFormNames, ILaunchFilter } from 'src/app/models/launch-filter-model';
import { ILaunchPad } from 'src/app/models/launch.model';
import { SpaceXService } from 'src/app/services/spaceX.service';

@Component({
  selector: 'app-launches-filter',
  templateUrl: './launches-filter.component.html',
  styleUrls: ['./launches-filter.component.css']
})
export class LaunchesFilterComponent implements OnInit, OnDestroy {

  // Boolean field to use for unsubscribing observables onDestroy.
  private alive: boolean = true;

  public launchPadsObservable: Observable<ILaunchPad[]>;
  public filterForm: FormGroup;
  public launchFilterFormNames: typeof LaunchFilterFormNames = LaunchFilterFormNames;

  @Output() public filterChangedEvent: EventEmitter<ILaunchFilter> = new EventEmitter<ILaunchFilter>();

  constructor(private spaceXService: SpaceXService) {
    this.launchPadsObservable = this.spaceXService.getLaunchPads();
  }

  ngOnInit(): void {
    // Creating the filter form.
    this.filterForm = new FormGroup({
      [LaunchFilterFormNames.launchpads]: new FormControl(null)
    });

    // When filter form changes we want to emit event to allow parent how they want to deal with it.
    this.filterForm.valueChanges
      .pipe(takeWhile(() => this.alive))
      .subscribe((val: ILaunchFilter) => this.filterChangedEvent.emit(val))
  }

  ngOnDestroy(): void {
    this.alive = false;
  }
}
