import { useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../Contacts/ContactsList';
import Filter from '../Filter/Filter';
import contactsOperations from '../../redux/contacts/contacts-operations'


function Phonebook() {
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(contactsOperations.deleteContacts(contactId));
    dispatch(contactsOperations.fetchContacts());
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList
        onRemoveContact={removeContact}
      />
    </div>
  );
}

export default Phonebook;