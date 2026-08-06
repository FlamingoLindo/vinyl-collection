export interface SearchArtistResponse {
    pagination: Pagination;
    results: Result[];
}

export interface Pagination {
    page: number;
    pages: number;
    per_page: number;
    items: number;
    urls: Urls;
}

export interface Urls {
    last: string;
    next: string;
}

export interface Result {
    id: number;
    type: Type;
    master_id: number | null;
    master_url: string | null;
    uri: string;
    title: string;
    thumb: string;
    cover_image: string;
    resource_url: string;
}

export enum Type {
    Artist = "artist",
}