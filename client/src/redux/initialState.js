const initialState = () => {
  return {
    user: JSON.parse(localStorage.getItem('user')) || { name: '' },
    contacts: JSON.parse(localStorage.getItem('contacts')) || [],
    modal: {},
    search: '',
  };
};

export default initialState;
