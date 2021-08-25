const updateContacts = require("./updateContacts");
const getAll = require("./getAll");

const update = async (id, updateInfo) => {
    try {
        const contacts = await getAll();
        const idx = contacts.findIndex(item => item.id === id);
        if (idx === -1) {
            throw new Error(`Contact with id=${id} not found`);
        }
        contacts[idx] = { ...contacts[idx], ...updateInfo };

        await updateContacts(contacts);
        return contacts[idx];
    }
    catch (error) {
        throw error;
    }
};

module.exports = update;