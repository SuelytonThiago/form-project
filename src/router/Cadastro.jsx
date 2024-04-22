import { useState } from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Progress,
  Text,
  useToast,
  VStack,
  Flex,
} from '@chakra-ui/react';

import {
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
} from '@chakra-ui/react';

const SignUpFormWithStepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const toast = useToast();

  const steps = [
    { label: 'Informações Pessoais', fields: ['nome', 'cpf'] },
    { label: 'Informações de contato', fields: ['telefone', 'email'] },
    { label: 'Credenciais de acesso', fields: ['senha', 'confirmarSenha'] }
  ];

  const nextStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep + 1);
  };

  const previousStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer a lógica de submissão do formulário
    toast({
      title: 'Formulário enviado!',
      status: 'success',
      duration: 5000,
      isClosable: true,
    });
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Flex backgroundImage="url('public/foood.webp')" bgSize="cover" height="calc(100vh - 80px)" justify='end'>
        <Flex width='450px' direction='column' justify='space-between' m='50px' bg='#6b3420' p='20px' borderRadius='md' >
          <Flex direction='column' gap='1.5rem'>
            <Stepper size='lg' colorScheme='red' index={currentStep}>
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepIndicator>
                    <StepStatus
                      complete={<StepNumber color='white'></StepNumber>}
                      incomplete={<StepNumber color='white'></StepNumber>}
                      active={<StepNumber color='white'></StepNumber>}
                    />
                  </StepIndicator>
                  {index < steps.length - 1 && <StepSeparator />}
                </Step>
              ))}
            </Stepper>

            <Text fontWeight="bold" fontSize="20px" textTransform='uppercase' textAlign='center' color='white'>{steps[currentStep].label}</Text>

            <Flex direction='column' gap='1rem'>
              {steps[currentStep].fields.map((fieldName) => (
                <FormControl key={fieldName}>
                  <FormLabel color='white'>{fieldName
                    .replace(/([A-Z])/g, ' $1')
                    .replace(/^./, (str) => str.toUpperCase())}
                  </FormLabel>
                  <Input
                    color='white'
                    type={fieldName === 'email' ? 'email' : fieldName === 'senha' || fieldName === 'confirmarSenha' ? 'password' : 'text'}
                    name={fieldName}
                    value={formData[fieldName] || ''}
                    onChange={handleInputChange}
                    focusBorderColor='white'
                  />
                </FormControl>
              ))}
            </Flex>
          </Flex>

          <Flex justify='space-around'>
            {currentStep > 0 && (
              <Button colorScheme='red' onClick={previousStep}>
                Voltar
              </Button>
            )}
            <Button  colorScheme='red' onClick={currentStep === steps.length - 1 ? handleSubmit : nextStep}>
              {currentStep === steps.length - 1 ? 'Enviar' : 'Próximo'}
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default SignUpFormWithStepper;
