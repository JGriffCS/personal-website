import {
  INIT_ADMIN_RESOURCE_SITES,
  ADD_ADMIN_RESOURCE_SITE,
  REMOVE_ADMIN_RESOURCE_SITE,
} from '../constants/action-types';

export function initAdminResourceSites(categoryId, sites) {
  return {
    type: INIT_ADMIN_RESOURCE_SITES,
    categoryId,
    sites,
  };
}

export function addAdminResourceSite(categoryId, site) {
  return {
    type: ADD_ADMIN_RESOURCE_SITE,
    categoryId,
    site,
  };
}

export function removeAdminResourceSite(categoryId, siteId) {
  return {
    type: REMOVE_ADMIN_RESOURCE_SITE,
    categoryId,
    siteId,
  };
}

