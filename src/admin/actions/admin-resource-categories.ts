import {
  INIT_ADMIN_RESOURCE_CATEGORIES,
  ADD_ADMIN_RESOURCE_CATEGORY,
  REMOVE_ADMIN_RESOURCE_CATEGORY,
  InitResourceCategories,
  AddResourceCategory,
  RemoveResourceCategory,
} from '../constants/action-types';
import { ResourceCategory } from '../constants/state-types';

export function initAdminResourceCategories(categories: Array<ResourceCategory>): InitResourceCategories {
  return {
    type: INIT_ADMIN_RESOURCE_CATEGORIES,
    categories,
  };
}

export function addAdminResourceCategory(category: ResourceCategory): AddResourceCategory {
  return {
    type: ADD_ADMIN_RESOURCE_CATEGORY,
    category,
  };
}

export function removeAdminResourceCategory(categoryId: number): RemoveResourceCategory {
  return {
    type: REMOVE_ADMIN_RESOURCE_CATEGORY,
    categoryId,
  };
}
