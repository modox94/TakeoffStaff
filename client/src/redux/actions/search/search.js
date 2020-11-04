import * as ACTION_TYPES from '../../action-types';

const UPDATE_SEARCH = (search) => {
  return {
    type: ACTION_TYPES.UPDATE_SEARCH,
    payload: { search },
  };
};

const RESET_SEARCH = () => {
  return { type: ACTION_TYPES.RESET_SEARCH };
};

export { UPDATE_SEARCH, RESET_SEARCH };
