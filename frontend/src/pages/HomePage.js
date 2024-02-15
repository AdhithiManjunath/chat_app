import React from 'react'
import {Container,Box,Text, TabList,Tabs,Tab,TabPanel, TabPanels} from '@chakra-ui/react';
// import { withTheme } from '@emotion/react
 import Signup from '../components/authentication/signup';
 import Login from '../components/authentication/loginn';
const HomePage = () => {
  return (
    <Container maxW='md' centerContent>
      <Box 
      d = 'flex' justifyContent='center'
       p={3} bg={'white'} w= "100%" m="40px 0 15px 0" borderRadius="lg" borderWidth={"1px"}  >
        <Text display= 'flex' justifyContent = 'center' alignItems='center' > Talk a tive </Text>
      </Box>

      <Box bg="white" w="100%" p = {4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='red'>
  <TabList mb="1rem">
    <Tab width="50%" borderRadius="10px">Login</Tab>
    <Tab width="50%" borderRadius="10px"> Signup</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      {<Login/>}
    </TabPanel>
    <TabPanel>
      {<Signup/>}
    </TabPanel>
  </TabPanels>
</Tabs>
        
      </Box>


    </Container>
  )
}

export default HomePage
