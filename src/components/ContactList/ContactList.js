import React from 'react';
import { Contacts, ContactsItem, Name, Number, Btn } from './ContactList.styled';

const ContactList = ({ contacts, handleDelete }) => (
  <Contacts>
    {contacts.map(contact => (
      <ContactsItem key={contact.id}>
        <div>
          <Name>• {contact.name}</Name><Number>{contact.number}</Number>
        </div>
        <Btn onClick={() => handleDelete(contact.id)}>Delete</Btn>
      </ContactsItem>
    ))}
  </Contacts>
);

export default ContactList;