import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {Flex, Box, VStack, StackDivider} from '@chakra-ui/react';

const NextPage = () => {
  return (
    <Flex direction='column' align='center' justify='center' minHeight='80vh' gap='100px' >
        <Box h='40px' fontSize='40px' _hover = {{
          color: 'orange.700',
          transition: '.8s',
        }}>
          <a href="https://github.com/SuelytonThiago" target='_blank'>
            <FontAwesomeIcon icon={faGithub}/> Git Hub
          </a>
        </Box>
        <Box h='40px' fontSize='40px' _hover = {{
          color: 'blue.600',
          transition: '.8s',
        }}>
          <a href="https://www.linkedin.com/in/suelyton-souza-0baaa127a/"  target='_blank'>
            <FontAwesomeIcon icon={faLinkedin}/> Linkedin
          </a>
        </Box>
    </Flex>
  )
}

export default NextPage