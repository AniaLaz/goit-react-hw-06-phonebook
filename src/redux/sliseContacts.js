import { createSlice } from '@reduxjs/toolkit';
  const getStartContacts = () => {
    const saveStayt = localStorage.getItem('contactsStart');
    if (saveStayt !== null) {
      return saveStayt;
    }
    return [];
  };
  const startValue = JSON.parse(getStartContacts());

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactsArr: startValue,
  },
  reducers: {
    addFromLocalStorage(state, action) {
      state.contactsArr = action.payload;
    },

    addContacts(state, action) {
      state.contactsArr.push(action.payload);
    },
    deleteContacts(state, action) {
      state.contactsArr = state.contactsArr.filter(
        ({ id }) => id !== action.payload
      );
    },
  },
});

export const { addContacts, deleteContacts, addFromLocalStorage } =
  contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;