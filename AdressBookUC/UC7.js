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
}

// Sample Address Book array
let addressBook = [
  new Contact(
    "John",
    "Doe",
    "123 Street",
    "CityA",
    "StateA",
    "123456",
    "9876543210",
    "john@example.com"
  ),
  new Contact(
    "Jane",
    "Smith",
    "456 Avenue",
    "CityB",
    "StateB",
    "654321",
    "8765432109",
    "jane@example.com"
  ),
];

// Function to check for duplicate entry before adding a new contact
function addContact(newContact) {
  let isDuplicate = addressBook.some(
    (contact) =>
      contact.firstName === newContact.firstName &&
      contact.lastName === newContact.lastName
  );

  if (isDuplicate) {
    console.log(
      `Error: Contact ${newContact.firstName} ${newContact.lastName} already exists.`
    );
  } else {
    addressBook.push(newContact);
    console.log(
      `Contact ${newContact.firstName} ${newContact.lastName} added successfully!`
    );
  }
}

addContact(
  new Contact(
    "John",
    "Doe",
    "789 Road",
    "CityC",
    "StateC",
    "789123",
    "7654321098",
    "john.doe@example.com"
  )
);

addContact(
  new Contact(
    "Alice",
    "Johnson",
    "101 Lane",
    "CityD",
    "StateD",
    "987654",
    "6543210987",
    "alice@example.com"
  )
);

console.log("Updated Address Book:", addressBook);
