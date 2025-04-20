import React, { useState, useEffect } from 'react';

const ContactForm = ({ onSubmit, contact }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    if (contact) {
      setName(contact.name);
      setEmail(contact.email);
      setPhone(contact.phone);
    } else {
      setName('');
      setEmail('');
      setPhone('');
    }
  }, [contact]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newContact = { id: contact ? contact.id : Date.now(), name, email, phone };
    onSubmit(newContact);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-50 p-4 rounded-lg shadow">
      <div className="mb-4">
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Phone</label>
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="border rounded w-full py-2 px-3"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded"
      >
        {contact ? 'Update Contact' : 'Add Contact'}
      </button>
    </form>
  );
};

export default ContactForm;