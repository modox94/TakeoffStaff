import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import * as CONTACTS_ACTIONS from '../../redux/actions/contacts/contacts';

function Modal() {
  const dispatch = useDispatch();
  const inputName = useRef();
  const inputTel = useRef();
  const closeButton = useRef();

  const modal = useSelector((state) => state.modal);

  useEffect(() => {
    inputName.current.value = modal.name;
    inputTel.current.value = modal.tel;
  }, [modal]);

  const editContact = (event) => {
    event.preventDefault();

    const contact = {
      id: modal.id,
      name: inputName.current.value.trim(),
      tel: inputTel.current.value.trim(),
    };

    if (contact.id && contact.name && contact.tel) {
      dispatch(CONTACTS_ACTIONS.EDIT_CONTACT(contact));
      closeButton.current.click();
    }
  };

  const deleteContact = () => {
    dispatch(CONTACTS_ACTIONS.DELETE_CONTACT(modal.id));
    closeButton.current.click();
  };

  return (
    <div
      className='modal fade'
      id='exampleModal'
      tabIndex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div className='modal-dialog'>
        <div className='modal-content'>
          <div className='modal-header'>
            <h5 className='modal-title' id='exampleModalLabel'>
              Change record "{modal.name}"
            </h5>
            <button
              type='button'
              className='close'
              data-dismiss='modal'
              aria-label='Close'
              ref={closeButton}
            >
              <span aria-hidden='true'>&times;</span>
            </button>
          </div>
          <div className='modal-body d-flex flex-column align-items-center'>
            <form
              className='d-inline-flex flex-column flex-nowrap justify-content-center align-items-center'
              onSubmit={editContact}
            >
              <input
                type='text'
                className='form-control my-1'
                ref={inputName}
              />

              <input type='text' className='form-control my-1' ref={inputTel} />

              <button type='submit' className='d-none'></button>
            </form>
          </div>
          <div className='modal-footer'>
            <button
              type='submit'
              className='btn btn-success'
              onClick={editContact}
            >
              Save
            </button>
            <button
              type='button'
              className='btn btn-danger'
              onClick={deleteContact}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
