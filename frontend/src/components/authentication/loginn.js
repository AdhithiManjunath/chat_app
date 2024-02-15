import React, { useState } from 'react'
import { FormControl,FormLabel,StackDivider,Input, InputGroup, InputRightElement, Button } from '@chakra-ui/react'
import {  VStack } from '@chakra-ui/react'

const Login = () => {
  const[show,setShow] = useState(false);

  const [email, setEmail ] = useState();
  const[password, setPassword ] = useState();
  
  const handleClick = () => setShow(!show);

  
  const submitHandler = () =>{}
  
  return (
    <VStack
  divider={<StackDivider borderColor='gray.200' />}
  spacing={4}
  align='stretch'
>
  
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

  

  <Button colorScheme = 'red' width= '100%'  onClick={submitHandler}> Login</Button>
   <Button colorScheme = 'blue' width= '100%'  onClick={()=>{setEmail("guest@example.com"); setPassword("123456")}}
   > Get user credentials</Button>
</VStack>
  )
}

export default Login

