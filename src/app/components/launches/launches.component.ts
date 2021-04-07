import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { ILaunchFilter, SortOrder } from 'src/app/models/launch-filter-model';
import { ILaunch } from 'src/app/models/launch.model';
import { ILaunchesFilterService } from 'src/app/services/launches-filter-service';
import { ModalService, ModalSize } from 'src/app/services/modal-service';
import { SpaceXService } from 'src/app/services/spaceX.service';

/// Component to display launch list in a paginated table.
@Component({
  selector: 'app-launches',
  templateUrl: './launches.component.html',
  styleUrls: ['./launches.component.css']
})
export class LaunchesComponent implements OnInit {
  public isLoading: boolean = true;
  public filteredLaunches: ILaunch[] = [];
  private allLaunches: ILaunch[] = [];

  public page: number = 1;
  public pageSize: number = 10;

  constructor(private spaceXService: SpaceXService,
    private modalService: ModalService,
    private filterService: ILaunchesFilterService) {
  }

  ngOnInit() {

    this.spaceXService.getLaunches()
      .pipe(finalize(() => this.isLoading = false))
      .subscribe(
        (resp) => {
          this.allLaunches = this.sort(resp)
          this.filteredLaunches = this.allLaunches;
        },
        (message: string) => alert(message)
      );

  }

  // Using a filter service to perform any required filtering and sorting.
  public applyFilters(filterValues: ILaunchFilter): void {
    const filtered: ILaunch[] = this.filterService.filterLaunches(this.allLaunches, filterValues);
    this.filteredLaunches = this.sort(filtered);
  }

  public openDetails = (launch: ILaunch) => this.modalService.openLaunchDetailsModal(launch, ModalSize.xl);

  private sort = (list: ILaunch[], order: SortOrder = SortOrder.desc) => this.filterService.sortByDate(list, order)

  private get filteredLaunchCount(): number { return this.filteredLaunches.length; }
}

