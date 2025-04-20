import React from 'react';
import { deleteContact } from '../api'; 

const ContactList = ({ contacts, onEdit, setContacts }) => {
  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      setContacts(prevContacts => prevContacts.filter(contact => contact.id !== id));
    } catch (error) {
      console.error('Error deleting contact:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4 text-gray-700">📋 Contact List</h2>
      {contacts.length === 0 ? (
        <p className="text-gray-500">No contacts available.</p>
      ) : (
        <ul className="space-y-4">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              className="bg-white border rounded-xl shadow p-4 flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-gray-800">{contact.name}</p>
                <p className="text-gray-600">{contact.email}</p>
                <p className="text-gray-600">{contact.phone}</p>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => onEdit(contact)}  className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-1 px-3 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(contact.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-semibold py-1 px-3 rounded"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;