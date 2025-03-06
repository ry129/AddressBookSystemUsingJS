class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phone = phone;
    this.email = email;
  }
  display() {
    return `${this.firstName} ${this.lastName}, ${this.address}, ${this.city}, ${this.state} - ${this.zip}, Phone: ${this.phone}, Email: ${this.email}`;
  }
}
class AddressBook {
  constructor() {
    this.contacts = [];
  }
  addContact(contact) {
    this.contacts.push(contact);
  }
  listContacts() {
    this.contacts.forEach((contact) => console.log(contact.display()));
  }
  searchContacts(value) {
    let data = this.contacts.filter((c) => c.city === value);
    return data;
  }
}

const addressBook = new AddressBook();
const contact1 = new Contact(
  "Riya",
  "Yadav",
  "123 Street",
  "Datia",
  "MP",
  "475661",
  "9876543210",
  "riya@example.com"
);
addressBook.addContact(contact1);
console.log(addressBook.searchContacts("Datia"));
