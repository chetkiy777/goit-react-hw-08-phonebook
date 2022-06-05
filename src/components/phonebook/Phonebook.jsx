import { useDispatch } from 'react-redux';
import ContactForm from '../ContactForm/ContactForm';
import ContactsList from '../Contacts/ContactsList';
import Filter from '../Filter/Filter';
import contactsOperations from '../../redux/contacts/contacts-operations'
import {PhonebookWrapper} from '../../styles/Phonebook.styled'


function Phonebook() {
  const dispatch = useDispatch();

  const removeContact = contactId => {
    dispatch(contactsOperations.deleteContacts(contactId));
    dispatch(contactsOperations.fetchContacts());
  };

  return (
    <PhonebookWrapper>
      <h2>Телефонная книга</h2>
      <ContactForm />

      
      <Filter />
      <ContactsList
        onRemoveContact={removeContact}
      />
    </PhonebookWrapper>
  );
}

export default Phonebook;