let contact = 
{
    // name:"sandeep",
    // email: "sandeep@gmail.com"
    phone: "1223-456-432"
}

function validateUserObject(contact) {
    if (!contact.name || !contact.email) {
        throw new Error("Object must have 'name' and 'email' keys");
    }
    return true;
}
validateUserObject(contact)