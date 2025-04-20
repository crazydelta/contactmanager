import axios from 'axios';

const API_URL = 'http://localhost:5000/contacts';

const api = axios.create({
  baseURL: API_URL,
});

export const fetchContacts = async () => {
  return await api.get('/');
};

export const fetchContactById = async (id) => {
  return await api.get(`/${id}`);
};

export const addContact = async (contact) => {
  return await api.post('/', contact);
};

export const updateContact = async (id, contact) => {
  return await api.put(`/${id}`, contact);
};

export const deleteContact = async (id) => {
  return await api.delete(`/${id}`);
};
