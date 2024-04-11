import React from 'react';
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import {
    Box,
    Flex,
    FormControl,
    FormLabel,
    Input,
    Button,
    useToast,
    Heading,
    Text,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';


import axios from 'axios';

const Cadastro = () => {
    const url = "http://localhost:8080/api/users/create"

    const toast = useToast();
    const navigate = useNavigate();

    const [values, setValues] = useState({
        name: '',
        email: '',
        cpf: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
    });

    const [errors, setErrors] = useState({
        name: '',
        email: '',
        cpf: '',
        contactNumber: '',
        password: '',
        confirmPassword: '',
    });

    const calculateDigit = (numbers, multiplicator) => {
        let total = 0;
        for (let i = 0; i < numbers.length; i++) {
            total += parseInt(numbers[i]) * multiplicator;
            multiplicator--;
        }
        const rest = total % 11;
        return rest > 1 ? rest : 0;
    };

    const validateName = values.name.length < 3 || !values.name ? true : false;

    const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email) ? false : true;

    const validateContactNumber = /^\d{11}$/.test(values.contactNumber) ? false: true;

    const validatePassword = /^(?=.*[a-zA-Z])(?=.*\d).{8,}$/.test(values.password) ? false : true;

    const validateConfirmPassword = values.confirmPassword !== values.password ? true : false;

    const validateCpf = /^\d{11}$/.test(values.cpf) ? false: true;



    const handleSubmit = async (e) => {
            console.log('Formulário válido. Enviando...');
            const user = {
                name: values.name,
                email: values.email,
                contactNumber: values.contactNumber,
                cpf: values.cpf,
                password: values.password,
            };

            try {
                await axios.post(url, user);
                toast({
                    title: "Cadastro realizado com sucesso!",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                navigate("/login");
            } catch (error) {
                console.error("Erro ao cadastrar usuário:", error);
                toast({
                    title: "Erro ao cadastrar usuário.",
                    description: "Por favor, tente novamente mais tarde.",
                    status: "error",
                    duration: 3000,
                    isClosable: true,
                });
            };
    }

    return (
        <>
            <Flex direction="column" width='full' justify='center' align='center' bg="gray.900" overflowY="auto" height="100vh">
                <Flex direction="column" gap=".5rem" bg="gray.700" p="10px 20px 0px" borderRadius='md'>
                    <FormControl color='white' isRequired isInvalid={validateName}>
                        <FormLabel color='white'>Name</FormLabel>
                        <Input
                            type='text'
                            value={values.name}
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, name: e.target.value }))} />
                        {!validateName ? (
                            <FormHelperText>
                                Digite seu Nome
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>
                                O nome deve conter ao menos 3 letras
                            </FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl color='white' isRequired isInvalid={validateEmail}>
                        <FormLabel color='white'>Email</FormLabel>
                        <Input
                            type='email'
                            value={values.email}
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, email: e.target.value }))} />
                        {!validateEmail ? (
                            <FormHelperText>
                                Digite seu Email
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>
                                Insira um endereço de email válido
                            </FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl color='white' isRequired isInvalid={validateContactNumber}>
                        <FormLabel color='white'>Numero de telefone</FormLabel>
                        <Input
                            type='text'
                            value={values.contactNumber}
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, contactNumber: e.target.value }))} />
                        {!validateContactNumber? (
                            <FormHelperText>
                                Digite seu numero de telefone
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>
                                Insira um numero de telefone válido
                            </FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl color='white' isRequired isInvalid={validateCpf}>
                        <FormLabel color='white'>CPF</FormLabel>
                        <Input
                            type='text'
                            value={values.cpf}
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, cpf: e.target.value }))} />
                        {!validateCpf? (
                            <FormHelperText>
                                Digite o seu CPF
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>
                                Insira um CPF valido
                            </FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl color='white' isRequired isInvalid={validatePassword}>
                        <FormLabel color='white'>Senha</FormLabel>
                        <Input
                            type='password'
                            value={values.password}
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, password: e.target.value }))} />
                        {!validatePassword? (
                            <FormHelperText>
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>
                                 A senha deve conter no minimo 8 caracteres incluindo letras e numeros
                            </FormErrorMessage>
                        )}
                    </FormControl>

                    <FormControl color='white' isRequired isInvalid={validateConfirmPassword}>
                        <FormLabel color='white'>Confirmar senha</FormLabel>
                        <Input
                            type='password'
                            value={values.confirmPassword}
                            onChange={(e) => setValues((prevValues) => ({ ...prevValues, confirmPassword: e.target.value }))} />
                        {!validateConfirmPassword? (
                            <FormHelperText>
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>
                                 A senha não coincidem
                            </FormErrorMessage>
                        )}
                    </FormControl>

                    <Box textAlign='center' padding='1rem'>
                        <Button colorScheme='blue' onClick={handleSubmit}>
                            <FontAwesomeIcon icon={faPaperPlane} />
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Cadastro