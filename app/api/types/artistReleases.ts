export interface Pagination {
    page: number;
    pages: number;
    per_page: number;
    items: number;
    urls: Urls;
}

export interface Urls {
    last?: string;
    next?: string;
}

export interface Stats {
    community: Community;
}

export interface Community {
    in_wantlist: number;
    in_collection: number;
}

export enum Status {
    Accepted = "Accepted",
}

export interface ArtistReleases {
    pagination: Pagination;
    releases: Release[];
}

export interface Release {
    id: number;
    status?: Status;
    type: ReleaseType;
    format?: string;
    label?: string;
    title: string;
    resource_url: string;
    role: Role;
    artist: string;
    year: number;
    thumb: string;
    stats: Stats;
    main_release?: number;
}

export enum Role {
    Main = "Main",
}

export enum ReleaseType {
    Master = "master",
    Release = "release",
}

export interface VinylData {
    pagination: Pagination;
    filters: Filters;
    filter_facets: FilterFacet[];
    versions: IVersion[];
}

export interface FilterFacet {
    title: string;
    id: string;
    values: Value[];
    allows_multiple_values: boolean;
}

export interface Value {
    title: string;
    value: string;
    count: number;
}

export interface Filters {
    applied: Applied;
    available: Available;
}

export interface Applied {
    format: string[];
}

export interface Available {
    label: { [key: string]: number };
    country: { [key: string]: number };
    released: { [key: string]: number };
}

export interface IVersion {
    id: number;
    label: string;
    country: string;
    title: string;
    major_formats: string[];
    format: string;
    catno: string;
    released: string;
    status: Status;
    resource_url: string;
    thumb: string;
    stats: Stats;
}