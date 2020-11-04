import * as ACTIONS_TYPES from '../../action-types';

const SIGN_IN = (name) => {
  return {
    type: ACTIONS_TYPES.SIGN_IN,
    payload: {
      name,
    },
  };
};

const SIGN_OUT = () => ({ type: ACTIONS_TYPES.SIGN_OUT });

export { SIGN_IN, SIGN_OUT };
