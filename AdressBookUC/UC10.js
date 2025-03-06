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
    "New York",
    "New York",
    "123456",
    "9876543210",
    "john@example.com"
  ),
  new Contact(
    "Jane",
    "Smith",
    "456 Avenue",
    "Los Angeles",
    "California",
    "654321",
    "8765432109",
    "jane@example.com"
  ),
  new Contact(
    "Alice",
    "Johnson",
    "789 Road",
    "New York",
    "New York",
    "789123",
    "7654321098",
    "alice@example.com"
  ),
  new Contact(
    "Bob",
    "Brown",
    "101 Blvd",
    "San Francisco",
    "California",
    "567890",
    "6543219870",
    "bob@example.com"
  ),
  new Contact(
    "Charlie",
    "Davis",
    "303 Street",
    "Los Angeles",
    "California",
    "908765",
    "7890123456",
    "charlie@example.com"
  ),
];

// Function to count contacts by City
function countByCity() {
  return addressBook.reduce((cityCount, contact) => {
    cityCount[contact.city] = (cityCount[contact.city] || 0) + 1;
    return cityCount;
  }, {});
}

// Function to count contacts by State
function countByState() {
  return addressBook.reduce((stateCount, contact) => {
    stateCount[contact.state] = (stateCount[contact.state] || 0) + 1;
    return stateCount;
  }, {});
}

// Get count by City and State
let cityCount = countByCity();
let stateCount = countByState();

console.log("Contact Count by City:", cityCount);
console.log("Contact Count by State:", stateCount);
