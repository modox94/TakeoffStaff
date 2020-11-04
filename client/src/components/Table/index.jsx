import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import Line from '../Line';
import Modal from '../Modal';

import * as CONTACTS_ACTIONS from '../../redux/actions/contacts/contacts';

function Table() {
  const dispatch = useDispatch();
  const inputName = useRef();
  const inputTel = useRef();

  const contacts = useSelector((state) => state.contacts);
  const search = useSelector((state) => state.search);

  const addContact = (event) => {
    event.preventDefault();

    const name = inputName.current.value.trim();
    const tel = inputTel.current.value.trim();

    if (name && tel) {
      const contact = {
        id: uuidv4(),
        name,
        tel,
      };

      dispatch(CONTACTS_ACTIONS.ADD_CONTACT(contact));
      inputName.current.value = '';
      inputTel.current.value = '';
    }
  };
  return (
    <>
      <table className='table table-bordered my-3'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Tel</th>
            <th scope='col'></th>
          </tr>
        </thead>
        <tbody>
          {search
            ? search.map((line) => {
                return <Line key={line.id} line={line} />;
              })
            : contacts.length
            ? contacts.map((line) => {
                return <Line key={line.id} line={line} />;
              })
            : null}
        </tbody>
      </table>

      <form className='input-group mb-3 my-2' onSubmit={addContact}>
        <input
          type='text'
          className='form-control'
          placeholder='Name'
          ref={inputName}
        />

        <input
          type='text'
          className='form-control'
          placeholder='Tel'
          ref={inputTel}
        />

        <div className='input-group-append'>
          <button type='submit' className='btn btn-success'>
            Add
          </button>
        </div>
      </form>
      <Modal />
    </>
  );
}

export default Table;
