import * as ACTION_TYPES from '../../action-types';

const modalReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTION_TYPES.UPDATE_MODAL:
      return action.payload.contact;

    default:
      return state;
  }
};

export default modalReducer;
