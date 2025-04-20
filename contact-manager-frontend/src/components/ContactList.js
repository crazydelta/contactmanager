import React, { useEffect, useState } from 'react';
import { fetchContacts, deleteContact } from '../api';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);

  const loadContacts = async () => {
    try {
      const res = await fetchContacts();
      setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  useEffect(() => {
    loadContacts();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteContact(id);
      loadContacts(); // refresh list after delete
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
              <button
                onClick={() => handleDelete(contact.id)}
                className="text-red-600 hover:text-red-800 font-semibold"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactList;
