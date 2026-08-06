export interface ArtistProfile {
    name: string;
    id: number;
    resource_url: string;
    uri: string;
    releases_url: string;
    images: Image[];
    profile: string;
    urls: string[];
    namevariations: string[];
    aliases: Alias[];
    members: Alias[];
    data_quality: string;
}

export interface Alias {
    id: number;
    name: string;
    resource_url: string;
    active?: boolean;
}

export interface Image {
    type: Type;
    uri: string;
    resource_url: string;
    uri150: string;
    width: number;
    height: number;
}

export enum Type {
    Primary = "primary",
    Secondary = "secondary",
}
