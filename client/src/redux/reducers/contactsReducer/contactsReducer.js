import * as ACTIONS_TYPES from '../../action-types';

const contactsReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS_TYPES.RECORD_CONTACTS:
      return action.payload.contacList;

    case ACTIONS_TYPES.ADD_CONTACT:
      return [...state, action.payload.contact];

    case ACTIONS_TYPES.EDIT_CONTACT:
      return state.map((contact) =>
        contact.id === action.payload.contact.id
          ? action.payload.contact
          : contact
      );

    case ACTIONS_TYPES.DELETE_CONTACT:
      return state.filter((contact) => contact.id !== action.payload.id);

    case ACTIONS_TYPES.CLEAR_CONTACTS:
      return [];

    default:
      return state;
  }
};
export default contactsReducer;
