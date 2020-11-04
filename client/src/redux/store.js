import { createStore } from 'redux';
import initialState from './initialState';
import rootReducer from './reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, initialState(), composeWithDevTools());

store.subscribe(() => {
  localStorage.setItem('user', JSON.stringify(store.getState().user));
  localStorage.setItem('contacts', JSON.stringify(store.getState().contacts));
});

export default store;
