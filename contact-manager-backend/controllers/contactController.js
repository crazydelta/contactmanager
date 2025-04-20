const db = require('../db/knex');

exports.getAllContacts = async (req, res) => {
  const contacts = await db('contacts');
  res.json(contacts);
};

exports.getContactById = async (req, res) => {
  const contact = await db('contacts').where({ id: req.params.id }).first();
  contact ? res.json(contact) : res.status(404).json({ error: 'Not found' });
};

exports.addContact = async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) return res.status(400).json({ error: 'All fields required' });
  try {
    const [id] = await db('contacts').insert({ name, email, phone });
    const newContact = await db('contacts').where({ id }).first();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(500).json({ error: 'Email must be unique' });
  }
};

exports.updateContact = async (req, res) => {
  const { name, email, phone } = req.body;
  await db('contacts').where({ id: req.params.id }).update({ name, email, phone });
  const updated = await db('contacts').where({ id: req.params.id }).first();
  res.json(updated);
};

exports.deleteContact = async (req, res) => {
  await db('contacts').where({ id: req.params.id }).del();
  res.json({ message: 'Contact deleted' });
};
