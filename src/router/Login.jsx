import React from 'react';
import {useState} from 'react';
import {Link, useNavigate } from 'react-router-dom';

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
  } from '@chakra-ui/react'
import axios from 'axios';

const Login = () => {
    const url = "http://localhost:8080/api/auth/login";

    const toast = useToast();
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async() => {
        const infoUser = {email,password};

        try{
            await axios.post(url, infoUser);
            toast({
                title:'Login realizado com sucesso',
                status: 'success',
                duration: 3000,
                isClosable: true
            });

            setEmail("");
            setPassword("");
            navigate('/');
        }catch(error){
            console.log("Erro ao entrar", error);
            toast({
                title: "Erro ao Entrar.",
                description: "Email e/ou senha inválidos",
                status: "error",
                duration: 3000,
                isClosable: true,
            });
        }
    };

  return (
    <div>
        <Flex direction='column' width='full' justify='center' align='center' bg="gray.900" height="100vh">
            <Heading>
                <Text  color='white' fontSize='30px' mb='10px'>
                        Login
                </Text>
            </Heading>
        <Flex direction="column" gap=".5rem" bg="gray.700" p="1.5rem" borderRadius='md' overflow='hidden'>
                <FormControl color='white'>
                    <FormLabel color='white'>Email</FormLabel>
                    <Input 
                    type='text' 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)}/>
                </FormControl>
                <FormControl color='white'>
                    <FormLabel color='white'>Senha</FormLabel>
                    <Input 
                    type='password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)}/>
                </FormControl>
                
                <Box textAlign='center'  padding='1rem'>
                    <Button colorScheme='blue' onClick={() => login()}>
                        Entrar
                    </Button>
                </Box>
                <Flex direction='column' mt='10px' textAlign='center' color='white'>
                    <Link to="/register">
                        <Box cursor='pointer' _hover={{ 
                            color: 'blue.300',
                            transition:'.3s'
                            }}>Criar conta
                        </Box>
                    </Link>
                    <Link to="/register">
                        <Box cursor='pointer' _hover={{ 
                            color: 'blue.300',
                            transition:'.3s'
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