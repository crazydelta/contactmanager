import React from 'react';

const ContactItem = ({ contact, onDelete }) => {
  return (
    <div>
      <h3>{contact.name}</h3>
      <p>{contact.email}</p>
      <p>{contact.phone}</p>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </div>
  );
};

export default ContactItem;
