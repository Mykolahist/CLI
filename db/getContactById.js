const getAll = require("./getAll");

const getContactById = async (id) => {
    try {
        const contacts = await getAll();
        const selectContact = contacts.find(item => item.id.toString() === id);
        if (!selectContact) {
            throw new Error(`Contact with id=${id} not found`);
        }
        return selectContact;
    }
    catch (error) {
        throw error;
    }
};

module.exports = getContactById;