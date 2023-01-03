import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
    initialState: {
        contactsArr: [

  ]},
  reducers: {
      addContacts(state, action) {
          state.contactsArr.push(action.payload);
    },
      deleteContacts(state, action) {
          state.contactsArr=state.contactsArr.filter(({ id }) => 
         id!== action.payload
        )
    },
  },
});

export const { addContacts, deleteContacts } = contactsSlice.actions;

export const contactsReducer = contactsSlice.reducer;