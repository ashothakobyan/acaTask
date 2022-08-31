class UserValidation {
  constructor() {
    this.errorState = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      age: "",
      role: "",
    };
  }
  validate = (user) => {
    this.errorState = {
      firstName: "",
      lastName: "",
      email: "",
      address: "",
      phone: "",
      age: "",
      role: "",
    };
    let result = true;
    if (!this.validateStr(user.firstName)) {
      result = false;
      this.errorState.firstName = "Pls write First Name";
    }
    if (!this.validateStr(user.lastName)) {
      result = false;
      this.errorState.lastName = "Pls write Last Name";
    }
    if (!this.validateStr(user.address)) {
      result = false;
      this.errorState.address = "Incorrect Address";
    }
    if (!this.validatePhoneNumber(user.phone)) {
      result = false;
      this.errorState.phone = "Incorrect Phone Number";
    }
    if (!this.validateAge(user.age)) {
      result = false;
      this.errorState.age = "Incorrect Age";
    }
    if (!this.validateStr(user.role)) {
      result = false;
      this.errorState.role = "Incorrect Role";
    }
    if (!user.email) {
      result = false;
      this.errorState.email = "Incorrect Email ";
    }

    return {
      result: result,
      errors: this.errorState,
    };
  };

  validateStr = (str) => {
    if (str?.length) {
      return typeof str === "string" ? true : false;
    } else {
      return false;
    }
  };
  validatePhoneNumber = (phoneNumber) => {
    return Number(phoneNumber) ? true : false;
  };
  validateAge = (age) => {
    return Number(age) && Number(age) <= 100 ? true : false;
  };
}

const userValidation = new UserValidation();
export default userValidation;
