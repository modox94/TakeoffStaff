import { combineReducers } from 'redux';
import contactsReducer from './contactsReducer/contactsReducer';
import userReducer from './userReducer/userReducer';
import modalReducer from './modalReducer/modalReducer';
import searchReducer from './searchReducer/searchReducer';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  user: userReducer,
  modal: modalReducer,
  search: searchReducer,
});

export default rootReducer;
