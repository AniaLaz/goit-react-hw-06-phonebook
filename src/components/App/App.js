import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';
import css from '../App/App.module.css';
// import { addFromLocalStorage } from '../../redux/sliseContacts';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contactsArr);
  // const getStartContacts = () => {
  //   const saveStayt = localStorage.getItem('contactsStart');
  //   if (saveStayt !== null) {
  //     return saveStayt;
  //   }
  //   return [];
  // };

  // const startValue = JSON.parse(getStartContacts());
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(addFromLocalStorage(startValue));
  // }, []);


  //  const addStartValue =(() => {
  //     dispatch(addFromLocalStorage(startValue));
  //  });
  

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <div>
          <Filter />
          <Contacts />
        </div>
      )}
    </div>
  );
};
