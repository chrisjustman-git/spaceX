import { Injectable } from "@angular/core";
import { LaunchFilterFormNames, ILaunchFilter, SortOrder } from "../models/launch-filter-model";
import { ILaunch } from "../models/launch.model";

/// Helpers for sorting and filtering ILaunch array data.
@Injectable({providedIn: "root"})
export class ILaunchesFilterService {
    private launches: ILaunch[];

    public sortByDate(list: ILaunch[], order: SortOrder = SortOrder.desc): ILaunch[] {
        switch (order) {
            case SortOrder.asc:
                return list.sort((a, b) => b.date_utc.valueOf() - a.date_utc.valueOf())
            default:
                return list.sort((a, b) => a.date_utc.valueOf() - b.date_utc.valueOf())
        }
    }

    public filterLaunches(launches: ILaunch[], filterForm: ILaunchFilter): ILaunch[] {
        this.launches = launches;
        Object.keys(LaunchFilterFormNames).forEach((x: LaunchFilterFormNames) => this.filter(x, filterForm))
        return this.launches;
    }

    private filter(key: LaunchFilterFormNames, filterVals: ILaunchFilter): void {
        switch (key) {
            case LaunchFilterFormNames.launchpads:
                this.launches = this.launches.filter(l => !filterVals.launchpads || filterVals.launchpads.includes(l.id))
        }
    }
}
