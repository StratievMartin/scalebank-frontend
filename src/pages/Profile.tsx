import { Container, Input, Button} from '@chakra-ui/react'
import { useState } from 'react'

export default function profile() {
  const [userValue,setUserValue] = useState("")
  const [passValue,setPassValue] = useState("")
  const [mailValue,setMailValue] = useState("")
  const [dateValue,setDateValue] = useState("")
  const [ageValue,setAgeValue] = useState("")

  const alertClick = () => {
    alert (userValue)
    alert (passValue)
    alert (mailValue)
    alert (dateValue)
    alert (ageValue)
  }

  const logClick = () => {
    console.log (userValue)
    console.log (passValue)
    console.log (mailValue)
    console.log (dateValue)
    console.log (ageValue)
  }

  const deleteClick = () => {
    setUserValue("") 
    setPassValue("") 
    setMailValue("") 
    setAgeValue("") 
    setDateValue("") 
  }

  const userChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserValue(event.target.value)
  }

  const passChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassValue(event.target.value)
  }

  const mailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMailValue(event.target.value)
  }

  const dateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDateValue(event.target.value)
  }

  const ageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAgeValue(event.target.value)
  }

  return (
    <>
      <Container>
        Welcome User
        <div>
          <Input onChange={userChange} value={userValue} placeholder="Username" />
          <Input onChange={passChange} value={passValue} placeholder="Password" />
          <Input onChange={mailChange} value={mailValue} placeholder="Email" />
          <Input onChange={dateChange} value={dateValue} placeholder="Date" type="date" />
          <Input onChange={ageChange} value={ageValue} placeholder="Age" type="number" />
        </div>
        <div>
          <Button onClick={logClick} colorScheme="blue">Add</Button>
          <Button onClick={alertClick} colorScheme="green">Update</Button>
          <Button onClick={deleteClick} colorScheme="red">Delete</Button>
        </div>
        <div>
          <Button colorScheme="red">Logout</Button>
        </div>
      </Container>
    </>
  )
}
