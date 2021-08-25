const { program } = require("commander");

const contactOperations = require('./contacts');

program
    .option('-a, --action <type>', 'choose action')
    .option('-i, --id <type>', 'user id')
    .option('-n, --name <type>', 'user name')
    .option('-e, --email <type>', 'user email')
    .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      contactOperations.listContacts();
      break;

    case "get":
      id
        ? contactOperations.getContactById(id)
        : console.log('ID is not specified');
      break;

    case "add":
       name && email && phone
        ? contactOperations.addContact(name, email, phone)
        : console.log('Please, entry full data (name, email, phone)');
      break;

    case "remove":
      id
        ? contactOperations.removeContact(id)
        : console.log('ID is not specified');
      break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);