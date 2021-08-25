const { v4 } = require("uuid");

const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const addContact = async (name, email, phone) => {
    try {
        const newContact = { name, email, phone, id: v4() };        
        const contacts = await getAll();
        contacts.push(newContact);
        await updateContacts(contacts);

        return newContact;
    }
    catch (error) {
        throw error;
    }
};

module.exports = addContact;