import { Container, Input, Button} from '@chakra-ui/react'
import { useState } from 'react'

const initialValues = {
  username: "",
  password: "",
  mail: "",
  date: "",
  age: "",
};

export default function Profile() {
  const [values, setValues] = useState(initialValues)

  const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const alertClick = () => {
    alert (values.username)
    alert (values.password)
    alert (values.mail)
    alert (values.date)
    alert (values.age)
  }
  
  return (
    <>
      <Container>
        Welcome User
        <div>
          <Input onChange={handleInputChange} value={values.username} name='username' placeholder="Username" />
          <Input onChange={handleInputChange} value={values.password} name='password' placeholder="Password" />
          <Input onChange={handleInputChange} value={values.mail} name='mail' placeholder="Email" />
          <Input onChange={handleInputChange} value={values.date} name='date' placeholder="Date" type="date" />
          <Input onChange={handleInputChange} value={values.age} name='age' placeholder="Age" type="number" />
        </div>
        <div>
          <Button onClick={alertClick} colorScheme="green">Update</Button>
        </div>
        <div>
          <Button colorScheme="red">Logout</Button>
        </div>
      </Container>
    </>
  )
}