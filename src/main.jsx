import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import NextPage from './router/NextPage.jsx'
import Cadastro from './router/Cadastro.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './router/Home.jsx';

import {createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:"next",
        element: <NextPage />,
      },
      {
        path:"register",
        element: <Cadastro/>,
      }, 
      {
        path:"home",
        element: <Home/>,
      },   
    ]
  }, 
])

ReactDOM.createRoot(document.getElementById('root')).render(  
  <React.StrictMode>
    <ChakraProvider>
        <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
)
