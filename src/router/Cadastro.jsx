import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import Buttom from '../components/Buttom';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
    Heading,
    Text
  } from '@chakra-ui/react'

const Cadastro = () => {
  return (
    <Flex direction="column" minHeight='100vh' width='full' justify='center' align='center' bg="gray.900">
        <Box bg="gray.500" p="10px 20px 0px" borderRadius='md'>
            <FormControl >
                <FormLabel>Name</FormLabel>
                <Input type='text' color='black'/>
            </FormControl>
            <FormControl>
                <FormLabel>Email</FormLabel>
                <Input type='email' />
            </FormControl>
            <FormControl>
                <FormLabel>Password</FormLabel>
                <Input type='password' />
            </FormControl>
            <Flex justify='space-around' margin='50px'>
                <Link to ="/">
                    <Buttom icon={faPaperPlane}></Buttom>
                </Link>
            </Flex>
        </Box>
    </Flex>
  )
}

export default Cadastro