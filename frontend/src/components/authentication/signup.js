import React, { useState } from 'react'
import { FormControl,FormLabel,StackDivider,Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import {  VStack } from '@chakra-ui/react'

const Signup = () => {
  const[show,setShow] = useState(false);
  const [name, setName ] = useState();
  const [email, setEmail ] = useState();
  const[password, setPassword ] = useState();
  const[pic, setPic ] = useState();
  const handleClick = () => setShow(!show);

  const postDetails = (pics) =>{}
  const submitHandler = () =>{}
  
  return (
    <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  <FormControl id='first-name' isRequired>
    <FormLabel>
      Name
      </FormLabel>
      <Input placeholder = "Enter your name" onchange ={(e)=>
      setName(e.target.value)}/>
  </FormControl>
   <FormControl isRequired>
    <FormLabel>
      Email
      </FormLabel>
      <Input placeholder = "Enter your email" onchange ={(e)=>
      setEmail(e.target.value)}/>
  </FormControl>


   <FormControl>
    <FormLabel>
      Password
      </FormLabel>
      <InputGroup>
      <Input type = {show?"text":'password'} placeholder = "confirm your password" onchange ={(e)=>
      setPassword(e.target.value)}/>
      <InputRightElement width="4.5rem">
        <Button h="1.75rem" size="sm" bg="none" onClick={handleClick}>
          {show ? "Hide":"Show"}

        </Button>
      </InputRightElement>

      </InputGroup>
  </FormControl>

  
  <FormControl>
    <FormLabel>Upload your picture
      </FormLabel>
      <Input type='file' p={1.5} accept ="image/*"  onchange ={(e)=>
      postDetails(e.target.files[0])}/>
  </FormControl>

  <Button colorScheme = 'red' width= '100%' onClick={submitHandler}> Login</Button>
</VStack>
  )
}

export default Signup
