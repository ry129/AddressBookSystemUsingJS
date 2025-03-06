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
  new Contact(
    "Alice",
    "Johnson",
    "789 Road",
    "CityC",
    "StateC",
    "789123",
    "7654321098",
    "alice@example.com"
  ),
];

// Using reduce function to get the count of contacts
let contactCount = addressBook.reduce((count) => count + 1, 0);

console.log("Number of contacts in Address Book:", contactCount);
