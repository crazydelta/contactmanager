import React, { useState } from 'react';
import ContactForm from '../components/ContactForm';
import ContactList from '../components/ContactList';
import { fetchContacts } from '../api'; // Assuming you have a fetchContacts function

const Home = () => {
  const [isFormVisible, setFormVisible] = useState(false);
  const [contacts, setContacts] = useState([]); // State to hold contacts

  const handleAddNewContact = () => {
    setFormVisible(true);
  };

  const handleFormSubmit = (newContact) => {
    setContacts(prevContacts => [...prevContacts, newContact]); // Add new contact to the list
    setFormVisible(false);
  };

  const loadContacts = async () => {
    try {
      const res = await fetchContacts();
      setContacts(res.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

  // Load contacts when the component mounts
  React.useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">📇 Contact Manager</h1>
        <div className="flex justify-end mb-4">
          <button
            onClick={handleAddNewContact}
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300"
          >
            + Add New Contact
          </button>
        </div>
        {isFormVisible && (
          <div className="mb-6">
            <ContactForm onSubmit={handleFormSubmit} />
          </div>
        )}
        <ContactList contacts={contacts} setContacts={setContacts} /> {/* Pass contacts to ContactList */}
      </div>
    </div>
  );
};

export default Home;