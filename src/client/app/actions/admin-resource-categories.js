import {
  INIT_ADMIN_RESOURCE_CATEGORIES,
  ADD_ADMIN_RESOURCE_CATEGORY,
  REMOVE_ADMIN_RESOURCE_CATEGORY,
} from '../constants/action-types';

export function initAdminResourceCategories(categories) {
  return {
    type: INIT_ADMIN_RESOURCE_CATEGORIES,
    categories,
  };
}

export function addAdminResourceCategory(category) {
  return {
    type: ADD_ADMIN_RESOURCE_CATEGORY,
    category,
  };
}

export function removeAdminResourceCategory(categoryId) {
  return {
    type: REMOVE_ADMIN_RESOURCE_CATEGORY,
    categoryId,
  };
}
