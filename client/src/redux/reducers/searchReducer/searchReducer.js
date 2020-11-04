import * as ACTION_TYPES from '../../action-types';

const searchReducer = (state = '', action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_SEARCH:
      return action.payload.search;

    case ACTION_TYPES.RESET_SEARCH:
      return '';

    default:
      return state;
  }
};

export default searchReducer;
