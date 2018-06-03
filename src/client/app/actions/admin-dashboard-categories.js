import {
  INIT_ADMIN_DASHBOARD_CATEGORIES,
  ADD_ADMIN_DASHBOARD_CATEGORY,
  REMOVE_ADMIN_DASHBOARD_CATEGORY,
} from '../constants/action-types';

export function initAdminDashboardCategories(categories) {
  return {
    type: INIT_ADMIN_DASHBOARD_CATEGORIES,
    categories,
  };
}

export function addAdminDashboardCategory(category) {
  return {
    type: ADD_ADMIN_DASHBOARD_CATEGORY,
    category,
  };
}

export function removeAdminDashboardCategory(categoryId) {
  return {
    type: REMOVE_ADMIN_DASHBOARD_CATEGORY,
    categoryId,
  };
}
