import { Injectable } from "@angular/core";
import { LaunchFilterFormNames, ILaunchFilter, SortOrder } from "../models/launch-filter-model";
import { ILaunch } from "../models/launch.model";

/// Helpers for sorting and filtering ILaunch array data.
@Injectable({ providedIn: "root" })
export class ILaunchesFilterService {

    // Used internally as a list of all launches to filter.
    private launches: ILaunch[];

    public sortByDate(list: ILaunch[], order: SortOrder = SortOrder.desc): ILaunch[] {
        switch (order) {
            case SortOrder.asc:
                return list.sort((a, b) => b.date_utc.valueOf() - a.date_utc.valueOf())
            default:
                return list.sort((a, b) => a.date_utc.valueOf() - b.date_utc.valueOf())
        }
    }

    public filterLaunches(launches: ILaunch[], filterVals: ILaunchFilter): ILaunch[] {
        this.launches = launches;

        // Looping through all properties in the launch filter and performing any required filtering defined.
        Object.keys(LaunchFilterFormNames).forEach((x: LaunchFilterFormNames) => this.filter(x, filterVals))
        return this.launches;
    }

    // Defining property specific filtering.
    private filter(key: LaunchFilterFormNames, filterVals: ILaunchFilter): void {
        switch (key) {
            case LaunchFilterFormNames.launchpads:
                this.launches = this.launches.filter(l => !filterVals.launchpads || filterVals.launchpads.includes(l.id))
        }
    }
}
