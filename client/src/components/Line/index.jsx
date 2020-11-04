import React from 'react';
import { useDispatch } from 'react-redux';

import * as MODAL_ACTIONS from '../../redux/actions/modal/modal';

function Line({ line }) {
  const dispatch = useDispatch();

  const editContact = () => {
    dispatch(MODAL_ACTIONS.UPDATE_MODAL(line));
  };

  return (
    <tr>
      <td className='align-middle'>{line.name}</td>
      <td className='align-middle'>{line.tel}</td>
      <td className='align-middle'>
        <button
          type='button'
          className='btn btn-warning btn-sm'
          data-toggle='modal'
          data-target='#exampleModal'
          onClick={editContact}
        >
          ✏
        </button>
      </td>
    </tr>
  );
}

export default Line;
