import React from 'react'
import { Link } from 'react-router-dom';
import Buttom from '../components/Buttom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import {Flex, Box, VStack, StackDivider} from '@chakra-ui/react';

const NextPage = () => {
  return (
    <Flex direction='column' align='center' justify='center' minHeight='100vh' gap='10px' bg="gray.500">
      <VStack
        spacing={4}
        align='stretch'>
        <Box h='40px'>
          <a href="https://github.com/SuelytonThiago" target='_blank'>GITHUB</a>
        </Box>
        <Box h='40px'>
          <a href="https://www.linkedin.com/in/suelyton-souza-0baaa127a/"  target='_blank'>LINKEDIN</a>
        </Box>
      </VStack>
      <Link to="/">
          <Buttom icon={faHome}></Buttom>
      </Link>
    </Flex>
  )
}

export default NextPage