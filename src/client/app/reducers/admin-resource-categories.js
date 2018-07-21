import {
  INIT_ADMIN_RESOURCE_CATEGORIES,
  ADD_ADMIN_RESOURCE_CATEGORY,
  REMOVE_ADMIN_RESOURCE_CATEGORY,
} from '../constants/action-types';

export default (state = [], action) => {
  switch (action.type) {
    // Can only init the categories if they haven't been so already
    case INIT_ADMIN_RESOURCE_CATEGORIES:
      if (state.length === 0) {
        return [...action.categories];
      }

      return state;

    case ADD_ADMIN_RESOURCE_CATEGORY:
      if (action.category) {
        return [...state, action.category];
      }

      return state;

    case REMOVE_ADMIN_RESOURCE_CATEGORY: {
      const categoryIdx = state.findIndex(category => category.id === action.categoryId);
      if (categoryIdx !== -1) {
        return [
          ...state.slice(0, categoryIdx),
          ...state.slice(categoryIdx + 1),
        ];
      }

      return state;
    }

    default:
      return state;
  }
};
