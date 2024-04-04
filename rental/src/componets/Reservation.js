import { useState } from "react";
import { useHistory } from 'react-router-dom';

const NewCustomerForm = ({ scooter_id }) => {
  const initialCustomer= [
    {
      id: 1,
      name: "Ada",
      email: "ada@dev.org",
    },
    {
      id: 2,
      name: "bell",
      email: "bell@dev.org",
    },
    {
      id: 3,
      name: "Cici",
      email: "cici@dev.org",
    },
  ];
  const initialRental = [
  {
    "customer_id": 1,
    "id": 1,
    "is_returned": false,
    "scooter_id": 2
},
{
  "customer_id": 2,
  "id": 2,
  "is_returned": false,
  "scooter_id": 3
},
{
  "customer_id": 3,
  "id": 3,
  "is_returned": false,
  "scooter_id": 5
}]
  const [customer, setCustomer] = useState(initialCustomer)
  const [rental, setRental] = useState(initialRental)
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
  });
  const newCustomer = formFields;

  const addCustomer = () => {
    const newCustomerList = [...customer];

    const nextId =
      Math.max(...newCustomerList.map((customer) => customer.id)) + 1;
    newCustomerList.push({
      id: nextId,
      name: newCustomer.name,
      email: newCustomer.email,
    });
    const customer_id = nextId
    console.log(customer_id)
    setCustomer(newCustomerList);
    // addRental(customer_id)
    alert(`The new order is : Customer ${customer_id } rent ${scooter_id} `);
  };
  // console.log(addCustomer());

  const addRental = ({customer_id}) => {
    const newRentalList = [...rental];

    const nextId =
      Math.max(...newRentalList.map((rental) => rental.id)) + 1;
      newRentalList.push({
      id: nextId,
      customer_id: customer_id,
      scooter_id: scooter_id,
      is_returned: false,
    });
    setRental(newRentalList);
  };
  console.log(rental)
  const onFormSubmit = (event) => {
    event.preventDefault();

    addCustomer();
    addRental()
    setFormFields({
      name: "",
      email: "",
    });
  };

  const onNameChange = (event) => {
    setFormFields({
      ...formFields,
      name: event.target.value,
    });
  };

  const onEmailChange = (event) => {
    setFormFields({
      ...formFields,
      email: event.target.value,
    });
  };

  return (
    <form>
      <div>
        <label htmlFor="fullName">Name:</label>
        <input
          name="fullName"
          value={formFields.name}
          onChange={onNameChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input name="email" value={formFields.email} onChange={onEmailChange} />
      </div>
      <input value="Add Student" type="submit" onClick={onFormSubmit} />
    </form>
  );
};

export default NewCustomerForm;
