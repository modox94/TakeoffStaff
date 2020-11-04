import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import * as USER_ACTIONS from '../../redux/actions/user/user';
import * as CONTACTS_ACTIONS from '../../redux/actions/contacts/contacts';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const logOut = () => {
    dispatch(USER_ACTIONS.SIGN_OUT());
    dispatch(CONTACTS_ACTIONS.CLEAR_CONTACTS());
  };

  return (
    <header>
      <ul className='nav justify-content-center'>
        {user.name ? (
          <li className='nav-item'>
            <Link className='nav-link' to='/login' onClick={logOut}>
              Log out
            </Link>
          </li>
        ) : (
          <li className='nav-item'>
            <Link className='nav-link' to='/login'>
              Log in
            </Link>
          </li>
        )}
      </ul>
    </header>
  );
}

export default Header;
