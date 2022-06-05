import React from 'react';
import { useSelector } from 'react-redux';
import { ContactsListItem, ContactsListBlock } from 'styles/ContactsList.styled';

const ContactsList = ({ onRemoveContact }) => {

  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filterName = contacts.filter(contact => {
    if (contact.name === undefined) {
      // eslint-disable-next-line array-callback-return
      return;
    }
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  })

  return <ContactsListBlock>
        {filterName &&
          filterName.map(({ id, name, number }) => {
            return (
                <ContactsListItem key={id}>
                  <span>{name}</span>
                  <span>{number}</span>
                  <div>
                    <button
                      name="delete"
                      onClick={() => onRemoveContact(id)}
                      type="button"
                    >
                      X
                    </button>
                  </div>
                </ContactsListItem>
               
            );

            
          })
        }
    </ContactsListBlock>
}

export default ContactsList