import { ResourceCategory, ResourceSite } from './state-types';

export const INIT_ADMIN_RESOURCE_CATEGORIES = 'INIT_ADMIN_RESOURCE_CATEGORIES';
export const ADD_ADMIN_RESOURCE_CATEGORY = 'ADD_ADMIN_RESOURCE_CATEGORY';
export const REMOVE_ADMIN_RESOURCE_CATEGORY = 'REMOVE_ADMIN_RESOURCE_CATEGORY';

export interface InitResourceCategoriesAction {
  type: typeof INIT_ADMIN_RESOURCE_CATEGORIES;
  categories: Array<ResourceCategory>;
}

export interface AddResourceCategoryAction {
  type: typeof ADD_ADMIN_RESOURCE_CATEGORY;
  category: ResourceCategory;
}

export interface RemoveResourceCategoryAction {
  type: typeof REMOVE_ADMIN_RESOURCE_CATEGORY;
  categoryId: number;
}

export const INIT_ADMIN_RESOURCE_SITES = 'INIT_ADMIN_RESOURCE_SITES';
export const ADD_ADMIN_RESOURCE_SITE = 'ADD_ADMIN_RESOURCE_SITE';
export const REMOVE_ADMIN_RESOURCE_SITE = 'REMOVE_ADMIN_RESOURCE_SITE';

export interface InitResourceSitesAction {
  type: typeof INIT_ADMIN_RESOURCE_SITES;
  categoryId: number;
  sites: Array<ResourceSite>;
}

export interface AddResourceSiteAction {
  type: typeof ADD_ADMIN_RESOURCE_SITE;
  categoryId: number;
  site: ResourceSite;
}

export interface RemoveResourceSiteAction {
  type: typeof REMOVE_ADMIN_RESOURCE_SITE;
  categoryId: number;
  siteId: number;
}
