import { useState } from 'react'
import './App.css'
import { Link } from 'react-router-dom'
import Buttom from './components/Buttom.jsx'
import Cadastro from './router/Cadastro.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Flex} from'@chakra-ui/react';

function App() {

  return (
    <>
      <Flex minHeight='100vh' width='full' justify='center' align='center' gap='10px' bg="gray.500">
        <Link to="/register">
          <Buttom icon={faUser}></Buttom>
        </Link>
        <Link to="/next">
          <Buttom icon={faEnvelope}></Buttom>
        </Link>
      </Flex>
    </>
  )
}

export default App
