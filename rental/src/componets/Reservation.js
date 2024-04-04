import { useEffect,useState } from "react";
import MyRental from "./MyRental";

const NewCustomerForm= ({ scooter }) => {
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
  const [showMyRental, setShowMyRental] = useState(true)
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
  });
  const [newRental, setNewRental] = useState([])
  const [newCustomer,setNewCustomer ] = useState([])

  const addCustomer = () => {
    const newCustomerList = [...customer];
    const nextId =
      Math.max(...newCustomerList.map((customer) => customer.id)) + 1;
    const cu = {
      id: nextId,
      name: formFields.name,
      email: formFields.email,
    }
    setNewCustomer(cu);
    
    
    newCustomerList.push({
      id: nextId,
      name: formFields.name,
      email: formFields.name,
    });
    const customer_id = nextId
    setCustomer(newCustomerList);
    addRental({customer_id})
  };
  // console.log(customer)
  // console.log(newCustomer)

  const addRental = ({customer_id}) => {
    const newRentalList = [...rental];

    const nextId =
      Math.max(...newRentalList.map((rental) => rental.id)) + 1;
      newRentalList.push({
      id: nextId,
      customer_id: customer_id,
      scooter_id: scooter.id,
      is_returned: "false",
    });
    const rt = {
      id: nextId,
      customer_id: customer_id,
      scooter_id: scooter.id,
      is_returned: "false",
    }
    setRental(newRentalList);
    setNewRental(rt)
  };
  const onFormSubmit = (event) => {
    event.preventDefault();

    addCustomer();
    setShowMyRental(false)
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

  useEffect(() => {
    console.log(newCustomer);
}, [newCustomer, scooter, customer]);
  return (
    <>
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
        <input value="Add Customer" type="submit" onClick={onFormSubmit} />
      </form>
      <div>
        {!showMyRental &&
          <MyRental 
            rental = {newRental}
          />
        }
      </div>
  </>
  );
};

export default NewCustomerForm;
