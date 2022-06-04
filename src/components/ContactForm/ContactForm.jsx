import React, { useEffect, useState } from 'react';
import { ContactFormSubmitButton, AddContactForm } from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import contactsOperations from '../../redux/contacts/contacts-operations' 

const ContactForm = () => {

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isDisabled, toggleDisbled] = useState(true);

  useEffect(() => {
    if (name.length > 0 && phone.length > 0) {
      toggleDisbled(false)
    } else {
      toggleDisbled(true)
    }
  }, [name, phone])

  useEffect(() => {
    dispatch(contactsOperations.fetchContacts());
  }, [dispatch]);

  const resetForm = () => {
    setName('');
    setPhone('');
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(contactsOperations.addContacts({ name: name, number: phone }));
    dispatch(contactsOperations.fetchContacts());
    resetForm();
  };

  return (
    <AddContactForm onSubmit={handleSubmit}>
      
      <label htmlFor="name">Имя:</label>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.currentTarget.value)}
      />
      
      <label htmlFor="phone">Телефон</label>
      <input
        type="number"
        name="phone"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={phone}
        onChange={e => setPhone(e.currentTarget.value)}
      />
     

      <ContactFormSubmitButton
        type="submit"
        disabled={isDisabled}
      >
        добавить
      </ContactFormSubmitButton>
    </AddContactForm>
  );
};

export default ContactForm