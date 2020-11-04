import * as ACTIONS_TYPES from '../../action-types';

const userReducer = (state = { name: '' }, action) => {
  switch (action.type) {
    case ACTIONS_TYPES.SIGN_IN:
      return { name: action.payload.name };

    case ACTIONS_TYPES.SIGN_OUT:
      return { name: '' };

    default:
      return state;
  }
};

export default userReducer;
