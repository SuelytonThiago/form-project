import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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
    InputGroup,
    InputRightElement,
} from '@chakra-ui/react'
import axios from 'axios';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import Cookies from 'js-cookie';

const Login = () => {
    const url = "http://localhost:8080/api/auth/login";

    const toast = useToast();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [show, setShow] = React.useState(false);
    const handleClick = () => setShow(!show);

    const login = async () => {
        const infoUser = { email, password };

        try {
            const response = await axios.post(url, infoUser);
            const { access_token, refresh_token } = response.data;

            Cookies.set('accessToken', access_token);
            Cookies.set('refreshToken', refresh_token);

            toast({
                title: 'Login realizado com sucesso',
                status: 'success',
                duration: 3000,
                isClosable: true
            });

            setEmail("");
            setPassword("");
            navigate('/');
            window.location.reload();
        } catch (error) {
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
    };

    return (
        <div>
            <Flex direction='column' width='full' justify='center' align='center' bg="white" height="calc(100vh - 72px)" backgroundImage="url('public/foood.webp')" bgSize="cover">
                <Flex direction="column" gap=".5rem" bg="#6b3420" p="1.5rem" borderRadius='md' overflow='hidden'>
                    <FormControl >
                        <FormLabel color='white'
                            fontSize={{ base: '10px', sm: '13px', md: "15px" }}>
                            Email
                        </FormLabel>
                        <Input
                            color='white'
                            type='text'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            focusBorderColor='white'
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel
                            color='white'
                            fontSize={{ base: '10px', sm: '13px', md: "15px" }}>
                            Senha
                        </FormLabel>
                        <InputGroup>
                            <Input
                                color='white'
                                type={show ? 'text' : 'password'}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                focusBorderColor='white'
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? <FaEyeSlash /> : <FaEye />}
                                </Button>
                            </InputRightElement>

                        </InputGroup>
                    </FormControl>

                    <Box textAlign='center' padding='1rem'>
                        <Button colorScheme='red' onClick={() => login()}>
                            Entrar
                        </Button>
                    </Box>
                    <Flex direction='column' mt='10px' textAlign='center'>
                        <Link to="/register">
                            <Box color='white'
                                cursor='pointer' _hover={{
                                    color: 'red.500',
                                    transition: '.3s'
                                }}>Criar conta
                            </Box>
                        </Link>
                        <Link to="/register">
                            <Box color='white'
                                cursor='pointer' _hover={{
                                    color: 'red.500',
                                    transition: '.3s'
                                }}>Esqueceu sua senha?
                            </Box>
                        </Link>
                    </Flex>
                </Flex>
            </Flex>
        </div>
    )
}

export default Login