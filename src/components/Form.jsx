import React from 'react';
import { FormControl as ChakraFormControl, FormLabel, Input } from '@chakra-ui/react';

const CustomFormControl = ({ fieldName, handleInput, value, inputType, validation }) => {
  return (
    <ChakraFormControl isRequired isInvalid={validation}>
      <FormLabel>{fieldName}</FormLabel>
      <Input
        type={inputType}
        name={fieldName}
        value={value}
        onChange={handleInput}
      />
    </ChakraFormControl>
  );
};

export default CustomFormControl;
