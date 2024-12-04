// Declare a global variable called customerName
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to declare and assign a global variable bestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob'; // Declaring without `var`, `let`, or `const` makes it global
}

// Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// Declare a constant in global scope called leastFavoriteCustomer
const leastFavoriteCustomer = 'initial value';

// Function to attempt changing the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value'; // This will throw an error
}
