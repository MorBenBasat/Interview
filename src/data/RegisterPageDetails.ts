class TestRegisterUsers {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirm_password: string;

  constructor(
    firstname: string,
    lastname: string,
    email: string,
    password: string,
    confirm_password: string
  ) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.confirm_password = confirm_password;
  }
}

// Example usage:
const ValidRegistrationUser = new TestRegisterUsers(
  "first name",
  "lastname",
  "validemail@gmail.com",
  "123456test",
  "123456test"
);

const InvalidRegistrationUser = new TestRegisterUsers(
  "first",
  "last",
  "Invalidate",
  "123436test",
  "123456"
);

// Add other test cases similarly

export {
  ValidRegistrationUser,
  InvalidRegistrationUser
  // Export other instances as needed
};
