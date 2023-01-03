import { useSelector } from 'react-redux';
import Form from '../Form/Form';
import Contacts from '../Contacts/Contacts';
import Filter from '../Filter/Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contactsArr);

  return (
    <>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      {contacts.length > 0 && (
        <div>
          <Filter />
          <Contacts />
        </div>
      )}
    </>
  );
};


