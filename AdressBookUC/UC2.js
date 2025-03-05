class Contact {
  constructor(firstName, lastName, address, city, state, zip, phone, email) {
    this.firstName = this.validateName(firstName, "First Name");
    this.lastName = this.validateName(lastName, "Last Name");
    this.address = this.validateAddress(address, "Address");
    this.city = this.validateAddress(city, "City");
    this.state = this.validateAddress(state, "State");
    this.zip = this.validateZip(zip);
    this.phone = this.validatePhone(phone);
    this.email = this.validateEmail(email);
  }

  validateName(name, fieldName) {
    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; // Starts with capital, min 3 chars
    if (!nameRegex.test(name)) {
      throw new Error(
        `${fieldName} must start with a capital letter and have at least 3 characters.`
      );
    }
    return name;
  }

  validateAddress(value, fieldName) {
    if (value.length < 4) {
      throw new Error(`${fieldName} must have at least 4 characters.`);
    }
    return value;
  }

  validateZip(zip) {
    const zipRegex = /^[1-9][0-9]{5}$/; // 6-digit valid PIN
    if (!zipRegex.test(zip)) {
      throw new Error("Invalid Zip Code. It should be a 6-digit number.");
    }
    return zip;
  }

  validatePhone(phone) {
    const phoneRegex = /^[6-9][0-9]{9}$/; // 10-digit valid Indian phone number
    if (!phoneRegex.test(phone)) {
      throw new Error(
        "Invalid Phone Number. It should be a 10-digit number starting with 6-9."
      );
    }
    return phone;
  }

  validateEmail(email) {
    const emailRegex =
      /^abc([_\+\-.][a-zA-Z0-9]+)?@bridgelabz\.co(\.[a-zA-Z]{2})?$/;
    if (!emailRegex.test(email)) {
      throw new Error(
        "Invalid Email. Format should match abc@bridgelabz.co or abc.xyz@bridgelabz.co.in."
      );
    }
    return email;
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
    try {
      this.contacts.push(contact);
      console.log("Contact added successfully!");
    } catch (error) {
      console.error("Error adding contact:", error.message);
    }
  }

  listContacts() {
    this.contacts.forEach((contact) => console.log(contact.display()));
  }
}

// Example Usage:
const addressBook = new AddressBook();

try {
  const contact1 = new Contact(
    "Riya",
    "Yadav",
    "123 Street",
    "Datia",
    "Madhya Pradesh",
    "475661",
    "9876543210",
    "abc.xyz@bridgelabz.co.in"
  );
  addressBook.addContact(contact1);
} catch (error) {
  console.error(error.message);
}

addressBook.listContacts();
