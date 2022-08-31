export const inputInfo = [
  {
    name: "firstName",
    element: "input",
    type: "text",
    placeholder: "First Name...",
  },
  {
    name: "lastName",
    element: "input",
    type: "text",
    placeholder: "Last Name...",
  },
  {
    name: "email",
    element: "input",
    type: "email",
    placeholder: "Email...",
  },
  {
    name: "address",
    element: "input",
    type: "text",
    placeholder: "Address...",
  },
  {
    name: "phone",
    element: "input",
    type: "text",
    placeholder: "Phone...",
  },
  {
    name: "age",
    element: "input",
    type: "text",
    placeholder: "Age...",
  },
  {
    name: "role",
    element: "select",
    childe: [
      {
        value: "default",
        text: "Select your option",
        disabled: true,
      },
      {
        value: "admin",
        text: "Role Admin",
        disabled: false,
      },
      {
        disabled: false,
        value: "moderator",
        text: "Role Moderator",
      },
      {
        disabled: false,
        value: "guest",
        text: "Role Guest",
      },
    ],
  },
];

export const initialValueState = {
  firstName: "",
  lastName: "",
  email: "",
  address: "",
  phone: "",
  age: "",
};
