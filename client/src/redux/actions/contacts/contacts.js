import * as ACTIONS_TYPES from '../../action-types';

const RECORD_CONTACTS = (contacList) => {
  return {
    type: ACTIONS_TYPES.RECORD_CONTACTS,
    payload: { contacList },
  };
};

const ADD_CONTACT = (contact) => {
  return {
    type: ACTIONS_TYPES.ADD_CONTACT,
    payload: { contact },
  };
};

const EDIT_CONTACT = (contact) => {
  return {
    type: ACTIONS_TYPES.EDIT_CONTACT,
    payload: { contact },
  };
};

const DELETE_CONTACT = (id) => {
  return {
    type: ACTIONS_TYPES.DELETE_CONTACT,
    payload: { id },
  };
};

const CLEAR_CONTACTS = () => {
  return { type: ACTIONS_TYPES.CLEAR_CONTACTS };
};

export {
  RECORD_CONTACTS,
  ADD_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
  CLEAR_CONTACTS,
};
