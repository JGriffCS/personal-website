export interface State {
    adminResourceCategories: Array<ResourceCategory>;
    adminResourceSites: Array<ResourceSite>;
}
export interface ResourceCategory {
    icon: string;
    name: string;
    path: string;
}

export interface ResourceSite {
    id: number;
    image_url: string;
    link: string;
    name: string;
    site_category_id: number;
}
