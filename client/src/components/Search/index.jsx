import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as SEARCH_ACTIONS from '../../redux/actions/search/search';

function Search() {
  const dispatch = useDispatch();
  const searchInput = useRef();

  const contacts = useSelector((state) => state.contacts);

  const resetSearch = () => {
    searchInput.current.value = '';
    dispatch(SEARCH_ACTIONS.RESET_SEARCH());
  };

  const updateSearch = (event) => {
    event.preventDefault();

    const input = searchInput.current.value.trim().toLowerCase();

    if (input) {
      const result = contacts.filter(
        (contact) =>
          contact.name.toLowerCase().includes(input) ||
          contact.tel.toLowerCase().includes(input)
      );
      dispatch(SEARCH_ACTIONS.UPDATE_SEARCH(result));
    } else {
      resetSearch();
    }
  };

  return (
    <form className='input-group mb-3 my-3' onSubmit={updateSearch}>
      <input type='text' className='form-control' ref={searchInput} />
      <div className='input-group-append'>
        <button className='btn btn-primary' type='submit'>
          Search
        </button>
        <button className='btn btn-danger' type='button' onClick={resetSearch}>
          Reset
        </button>
      </div>
    </form>
  );
}

export default Search;
