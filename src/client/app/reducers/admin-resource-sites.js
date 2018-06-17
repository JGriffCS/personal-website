import {
  INIT_ADMIN_RESOURCE_SITES,
  ADD_ADMIN_RESOURCE_SITE,
  REMOVE_ADMIN_RESOURCE_SITE,
} from '../constants/action-types';

export const adminResourceSites = (state = {}, action) => {
  switch(action.type) {
    // Can only init the sites for a category if they haven't been so already
    case INIT_ADMIN_RESOURCE_SITES:
      if (action.categoryId && !state[action.categoryId]) {
        return Object.assign(
          {},
          ...state,
          {
            [action.categoryId]: action.sites,
          },
        );
      }

      return state;

    case ADD_ADMIN_RESOURCE_SITE:
      if (action.categoryId) {
        return Object.assign(
          {},
          ...state,
          {
            [action.categoryId]: [...state[action.categoryId], action.site],
          },
        );
      }

      return state;

    case REMOVE_ADMIN_RESOURCE_SITE:
      if (action.categoryId) {
        return Object.assign(
          {},
          ...state,
          {
            [action.categoryId]: [
              ...state.slice(0, action.siteId),
              ...state.slice(action.siteId + 1),
            ],
          },
        );
      }
  }
};