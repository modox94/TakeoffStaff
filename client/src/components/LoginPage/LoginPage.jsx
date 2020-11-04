import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import * as USER_ACTIONS from '../../redux/actions/user/user';
import * as CONTACTS_ACTIONS from '../../redux/actions/contacts/contacts';

function LoginPage() {
  let history = useHistory();
  let location = useLocation();
  let dispatch = useDispatch();

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handlerName = (e) => setName(e.target.value);
  const handlerPassword = (e) => setPassword(e.target.value);

  let { from } = location.state || { from: { pathname: '/profile' } };

  let login = () => {
    if (name.trim() && password.trim()) {
      const myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      let data = {
        name,
        password,
      };

      data = JSON.stringify(data);

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: data,
      };

      fetch(
        (process.env.REACT_APP_SERVER_PATH || 'http://localhost:3001/') +
          'login',
        requestOptions
      )
        .then((response) => {
          if (response.ok) return response.json();
          return 'error';
        })
        .then((result) => {
          if (result === 'error') return setError(result);

          dispatch(USER_ACTIONS.SIGN_IN(result.name));
          dispatch(CONTACTS_ACTIONS.RECORD_CONTACTS(result.contactList));

          history.replace(from);
        })
        .catch((error) => console.log('error', error));
    }
  };

  const handlerSubmit = (event) => {
    event.preventDefault();
    login();
  };

  return (
    <div className='d-flex justify-content-center'>
      <form onSubmit={handlerSubmit}>
        <div className='form-group my-4'>
          <label htmlFor='inputName'>Name</label>
          <input
            type='text'
            className='form-control'
            id='inputName'
            onChange={handlerName}
            value={name}
          />
        </div>
        <div className='form-group'>
          <label htmlFor='inputPassword'>Password</label>
          <input
            type='password'
            className='form-control'
            id='inputPassword'
            onChange={handlerPassword}
            value={password}
          />
        </div>
        {error ? (
          <p className='alert alert-danger' role='alert'>
            {error}
          </p>
        ) : null}
        <button type='submit' className='btn btn-primary'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default LoginPage;
