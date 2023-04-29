const fs = require("fs/promises")
const path = require("path")

const contactsPath = path.resolve("db/contacts.json")

async function listContacts() {
    const data = await fs.readFile(contactsPath, 'utf-8');
    return JSON.parse(data);
}

module.exports = {
    listContacts
}