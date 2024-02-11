
// import { Button } from '@chakra-ui/react';
import './App.css';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ChatPage from './pages/ChatPage';


function App() {
  return (
    <div className="App">
        {/* hello adhithi 
        <Button colorScheme='teal' size='sm'>
          Button
        </Button> */}

        <Route exact path = "/"  component={HomePage}/>
        <Route  path = "/chats"  component={ChatPage}/>
    </div>
  );
}

export default App;
