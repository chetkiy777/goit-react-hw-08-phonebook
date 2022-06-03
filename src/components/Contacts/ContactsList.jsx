import React from 'react';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';

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

  return <div>
      <ol>
        {filterName &&
          filterName.map(({ id, name, number }) => {
            return (
              <li key={nanoid()}>
                {name}: {number}
                <div>
                  <button
                    name="delete"
                    onClick={() => onRemoveContact({ id, name })}
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        }
      </ol>
    </div>
}

export default ContactsList