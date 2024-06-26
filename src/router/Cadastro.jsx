import React, { useState } from 'react';
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
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';

import {
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
} from '@chakra-ui/react';

import { FaEye, FaEyeSlash } from 'react-icons/fa';
import InputMask from "react-input-mask";

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Cadastro = () => {
  const url = "http://localhost:8080/api/users/create"

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const toast = useToast();

  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  const steps = [
    { label: 'Informações Pessoais', fields: ['nome', 'cpf'] },
    { label: 'Informações de contato', fields: ['contactNumber', 'email'] },
    { label: 'Credenciais de acesso', fields: ['senha', 'confirmarSenha'] }
  ];

  const nextStep = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  const previousStep = (e) => {
    e.preventDefault();
    setCurrentStep((prevStep) => prevStep - 1);
  };

  const validateForm = () => {
    let formIsValid = true;
    let newErrors = {};

    // Validação do campo nome
    if (steps[currentStep].fields.includes('nome')) {
      if (!formData['nome']) {
        formIsValid = false;
        newErrors['nome'] = 'Por favor, insira seu nome';
      } else {
        const nameRegex = /^.{3,}$/;
        if (!nameRegex.test(formData['nome'])) {
          formIsValid = false;
          newErrors['nome'] = 'Insira um nome com ao menos 3 letras';
        }
      }
    }

    // Validação do campo email
    if (steps[currentStep].fields.includes('email')) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData['email'])) {
        formIsValid = false;
        newErrors['email'] = 'Digite um email válido';
      }
    }

    // Validação do campo CPF
    if (steps[currentStep].fields.includes('cpf')) {
      let cpf = formData['cpf'].replace(/[^\d]/g, '');

      if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
        formIsValid = false;
        newErrors['cpf'] = 'Insira um cpf válido';
        return;
      }

      // Calcula o primeiro dígito verificador
      let sum = 0;
      for (let i = 0; i < 9; i++) {
        sum += parseInt(cpf.charAt(i)) * (10 - i);
      }

      let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

      if (parseInt(cpf.charAt(9)) !== digit) {
        formIsValid = false;
        newErrors['cpf'] = 'Insira um cpf válido';
        return;
      }

      // Calcula o segundo dígito verificador
      sum = 0;
      for (let i = 0; i < 10; i++) {
        sum += parseInt(cpf.charAt(i)) * (11 - i);
      }

      digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);

      if (parseInt(cpf.charAt(10)) !== digit) {
        formIsValid = false;
        newErrors['cpf'] = 'Insira um cpf válido';
        return;
      }
    }

    // Validação do campo número de contato
    if (steps[currentStep].fields.includes('contactNumber')) {
      let contactNumber = formData['contactNumber'].replace(/[^\d]/g, '');
      const phoneRegex = /^\d{11}$/
      if (!phoneRegex.test(contactNumber)) {
        formIsValid = false;
        newErrors['contactNumber'] = 'Digite um número de contato válido';
      }
    }

    // Validação do campo senha
    if (steps[currentStep].fields.includes('senha')) {
      const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      if (!passwordRegex.test(formData['senha'])) {
        formIsValid = false;
        newErrors['senha'] = 'A senha deve conter pelo menos 8 caracteres, incluindo letras e números';
      }
    }

    // Validação do campo confirmar senha
    if (steps[currentStep].fields.includes('confirmarSenha')) {
      if (formData['senha'] !== formData['confirmarSenha']) {
        formIsValid = false;
        newErrors['confirmarSenha'] = 'As senhas não coincidem';
      }
    }

    setErrors(newErrors);
    return formIsValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = {
      name: formData['nome'],
      email: formData['email'],
      contactNumber: formData['contactNumber'],
      cpf: formData['cpf'],
      password: formData['senha'],
    };

    if (validateForm()) {
      try {
        await axios.post(url, user);
        toast({
          title: "Cadastro realizado com sucesso!",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        navigate("/login");
      }
      catch (error) {
        let errorMessage = "Algo deu errado com sua requisição. Tente novamente mais tarde.";
        if (error.response && error.response.data && error.response.data.Message) {
          errorMessage = error.response.data.Message;
        }
        toast({
          title: errorMessage,
          status: "error",
          duration: 3000,
          isClosable: true,
        });
      }
    }
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  return (
    <>
      <Flex backgroundImage="url('public/foood.webp')" bgSize="cover" height="calc(100vh - 72px)" justify='center'>
        <Flex
          maxH='400px'
          direction='column'
          justify='space-between'
          m='50px' p='20px'
          borderRadius='md'
          bg='#6b3420'>
          <Flex direction='column' gap='1.5rem'>
            <Stepper size={{ base: 'md', md: 'lg' }} colorScheme='red' index={currentStep}>
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

            <Text fontWeight="bold" fontSize={{ base: '14px', md: "18px" }} textTransform='uppercase' textAlign='center' color='white'>{steps[currentStep].label}</Text>

            <Flex direction='column' gap='1rem'>
              {steps[currentStep].fields.map((fieldName) => (
                <FormControl key={fieldName} isRequired isInvalid={!!errors[fieldName]}>
                  <FormLabel
                    fontSize={{ base: '10px',sm:'13px', md: "15px" }}
                    color='white'>{fieldName
                      .replace(/([A-Z])/g, ' $1')
                      .replace(/^./, (str) => str.toUpperCase())}
                  </FormLabel>
                  {fieldName === 'senha' || fieldName === 'confirmarSenha' ? (
                    <InputGroup>
                      <Input
                        color='white'
                        type={show ? 'text' : 'password'}
                        name={fieldName}
                        value={formData[fieldName] || ''}
                        onChange={handleInputChange}
                        focusBorderColor='white'
                      />
                      <InputRightElement width='4.5rem'>
                        <Button h='1.75rem' size='sm' onClick={handleClick}>
                          {show ? <FaEyeSlash /> : <FaEye />}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  ) : (
                    fieldName === 'cpf' || fieldName === 'contactNumber' ? (
                      <InputMask
                        mask={fieldName === 'cpf' ? '999.999.999-99' : '(99)99999-9999'}
                        maskChar={null}
                        value={formData[fieldName] || ''}
                        onChange={handleInputChange}>
                        {(inputProps) => (
                          <Input
                            {...inputProps}
                            color='white'
                            type='text'
                            name={fieldName}
                            focusBorderColor='white'
                          />
                        )}
                      </InputMask>
                    ) : (
                      <Input
                        color='white'
                        type={fieldName === 'email' ? 'email' : fieldName === 'senha' || fieldName === 'confirmarSenha' ? 'password' : 'text'}
                        name={fieldName}
                        value={formData[fieldName] || ''}
                        onChange={handleInputChange}
                        focusBorderColor='white'
                      />
                    )
                  )}
                  {errors[fieldName] && (
                    <Text color='red.500' fontSize='sm'>{errors[fieldName]}</Text>
                  )}
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
            {currentStep === steps.length - 1 ? (
              <Button colorScheme='red' onClick={handleSubmit}>
                Enviar
              </Button>
            ) : (
              <Button colorScheme='red' onClick={nextStep}>
                Próximo
              </Button>
            )}
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default Cadastro;
