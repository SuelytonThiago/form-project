import React from 'react'
import {Flex, Box, Button} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <Flex justify='space-between' p='1rem' bg="#6b3420">  
        <Box fontSize='25px' textAlign='center'ml='10px'>
            <Link to="/home">
                <FontAwesomeIcon color='white' icon={faHome}/>
            </Link>
        </Box>
        <Flex gap='1.5rem'>
            <Link to="/login">
                <Button opacity='.7' colorScheme='black' variant='ghost' _hover= { {
                    opacity: 1,
                } } color='white'>
                    Entrar
                </Button>
            </Link>
            <Link to="/register">
                <Button opacity='.7' colorScheme='black' variant='ghost' _hover= { {
                    opacity: 1,
                } } color='white'>
                    Criar conta
                </Button>
            </Link>
            
            <Link to="/contacts">
                <Button opacity='.7' colorScheme='black' variant='ghost' _hover= { {
                    opacity: 1,
                } } color='white'>
                    Contatos
                </Button>
            </Link>
        </Flex>
    </Flex>
  )
}

export default Navbar