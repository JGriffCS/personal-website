import {
  INIT_ADMIN_RESOURCE_SITES,
  ADD_ADMIN_RESOURCE_SITE,
  REMOVE_ADMIN_RESOURCE_SITE,
  InitResourceSitesAction,
  AddResourceSiteAction,
  RemoveResourceSiteAction,
} from '../constants/action-types';
import { ResourceSite } from '../constants/state-types';

export function initAdminResourceSites(categoryId: number, sites: Array<ResourceSite>): InitResourceSitesAction {
  return {
    type: INIT_ADMIN_RESOURCE_SITES,
    categoryId,
    sites,
  };
}

export function addAdminResourceSite(categoryId: number, site: ResourceSite): AddResourceSiteAction {
  return {
    type: ADD_ADMIN_RESOURCE_SITE,
    categoryId,
    site,
  };
}

export function removeAdminResourceSite(categoryId: number, siteId: number): RemoveResourceSiteAction {
  return {
    type: REMOVE_ADMIN_RESOURCE_SITE,
    categoryId,
    siteId,
  };
}
