const contactOperations = require("./db");

async function listContacts() {
  try {
    const contacts = await contactOperations.getAll();
    console.log(contacts);
  }
  catch (error) {
    console.log(error.message);
  }
};

async function getContactById(contactId) {
  try {
    const oneContact = await contactOperations.getContactById(contactId);
    console.log(oneContact);
  }
  catch (error) {
    console.log(error.message);
  }
};

async function updateContact(contactId, updateInfo) {
  try {
    const update = await contactOperations.update(contactId, updateInfo);
    console.log(update);
  }
  catch (error) {
    console.log(error.message);
  }
};

async function removeContact(contactId) {
  try {
    const removeContact = await contactOperations.removeContact(contactId);
    console.log(removeContact);
  }
  catch (error) {
    console.log(error.message);
  }
};

async function addContact(name, email, phone) {
  try {
    const newContact = await contactOperations.addContact(name, email, phone);
    console.log(newContact);
  }
  catch (error) {
    console.log(error.message);
  }
};

module.exports = {
    listContacts,
    getContactById,
    updateContact,
    removeContact,
    addContact
}