import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Buttom = ({icon}) => {
  return (
    <div>
        <Button colorScheme="white" variant='outline' size='lg'>
        <FontAwesomeIcon icon={icon}/>
        </Button>
    </div>
  )
}

export default Buttom