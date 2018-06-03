import {
  ADD_DASHBOARD_CATEGORY,
  REMOVE_DASHBOARD_CATEGORY,
} from '../constants/action-types';

export function addDashboardCategory(category) {
  return {
    type: ADD_DASHBOARD_CATEGORY,
    category,
  };
};

export function removeDashboardCategory(categoryId) {
  return {
    type: REMOVE_DASHBOARD_CATEGORY,
    categoryId,
  };
};
