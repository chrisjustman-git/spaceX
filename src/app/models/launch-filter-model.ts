/// Model of the launches filter.
export interface ILaunchFilter {
    launchpads: string[]
}

/// Form names of the launches filter form.
export enum LaunchFilterFormNames {
    launchpads = 'launchpads'
}

/// Enum values for sorting.
export enum SortOrder {
    asc = 'asc',
    desc = 'desc'
}