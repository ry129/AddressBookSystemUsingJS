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
  sortContacts() {
    this.contacts.sort((a, b) =>
      a.firstName > b.firstName ? 1 : b.firstName > a.firstName ? -1 : 0
    );
  }

  sortedContacts(value) {
    console.log(`sorted according to ${value}`);
    this.contacts.sort((a, b) =>
      a[value] > b[value] ? 1 : b[value] > a[value] ? -1 : 0
    );
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
const contact2 = new Contact(
  "Amit",
  "Sharma",
  "456 Avenue",
  "Bhopal",
  "MP",
  "462001",
  "8765432109",
  "amit@example.com"
);

const contact3 = new Contact(
  "Neha",
  "Singh",
  "789 Road",
  "Indore",
  "MP",
  "452001",
  "7654321098",
  "neha@example.com"
);

const contact4 = new Contact(
  "Rahul",
  "Verma",
  "101 Blvd",
  "Gwalior",
  "MP",
  "474001",
  "6543219870",
  "rahul@example.com"
);

const contact5 = new Contact(
  "Priya",
  "Mishra",
  "303 Street",
  "Jabalpur",
  "MP",
  "482001",
  "7890123456",
  "priya@example.com"
);

const contact6 = new Contact(
  "Vikas",
  "Patel",
  "505 Lane",
  "Sagar",
  "MP",
  "470001",
  "8901234567",
  "vikas@example.com"
);

const contact7 = new Contact(
  "Sonia",
  "Gupta",
  "707 Colony",
  "Rewa",
  "MP",
  "486001",
  "9012345678",
  "sonia@example.com"
);

addressBook.addContact(contact1);
addressBook.addContact(contact2);
addressBook.addContact(contact3);
addressBook.addContact(contact4);
addressBook.addContact(contact5);
addressBook.addContact(contact6);
addressBook.addContact(contact7);
addressBook.sortContacts();
addressBook.sortedContacts("city");
addressBook.listContacts();
