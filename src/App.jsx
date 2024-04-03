import { useState } from 'react'
import './App.css'
import { Link, Outlet } from 'react-router-dom'
import Cadastro from './router/Cadastro.jsx'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import {Flex} from'@chakra-ui/react';
import Navbar from './components/Navbar.jsx'

function App() {

  return (
    <>
      <Navbar/>
      <Outlet/>
    </>
  )
}

export default App
