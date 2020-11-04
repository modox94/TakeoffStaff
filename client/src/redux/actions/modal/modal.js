import * as ACTION_TYPES from '../../action-types';

const UPDATE_MODAL = (contact) => {
  return {
    type: ACTION_TYPES.UPDATE_MODAL,
    payload: { contact },
  };
};

export { UPDATE_MODAL };
