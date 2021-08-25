const getAll = require("./getAll");
const updateContacts = require("./updateContacts");

const removeContact = async (id) => {
    try {
        const contacts = await getAll();
        const idx = contacts.findIndex(item => item.id.toString() === id);
        if (idx === -1) {
            throw new Error(`Contact with id=${id} not found`);
        }
        const newContacts = contacts.filter(item => item.id.toString() !== id);
        await updateContacts(newContacts);
        return contacts[idx];
    }
    catch(error) {
        throw error;
    }
};
module.exports = removeContact;