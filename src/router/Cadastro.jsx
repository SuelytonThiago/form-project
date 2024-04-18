import React, { useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import {
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from '@chakra-ui/react';

const Step1 = () => {
  return (
    <Box>
      <p>Step 1 Content</p>
    </Box>
  );
};

const Step2 = () => {
  return (
    <Box>
      <p>Step 2 Content</p>
    </Box>
  );
};

const Step3 = () => {
  return (
    <Box>
      <p>Step 3 Content</p>
    </Box>
  );
};

const Cadastro = () => {
  const [activeStep, setActiveStep] = useState(0);
  const steps = [<Step1 />, <Step2 />, <Step3 />];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
  };
  
  const handlePrevious = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <Box>
      <Stepper index={activeStep}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepNumber />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink="0">
              {index === activeStep && step}
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Flex justify='space-around'>
        {activeStep < steps.length - 1 && <Button onClick={handleNext}>Next Step</Button>}
        {activeStep > 0 && <Button onClick={handlePrevious}>Previous Step</Button>}
      </Flex>
    </Box>
  );
};

export default Cadastro;
