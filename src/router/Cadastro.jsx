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
  } from '@chakra-ui/react';

  import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Cadastro = () => {
    const url = "http://localhost:8080/api/users/create"
    
    const toast = useToast();
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cpf, setCpf] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [password, setPassword] = useState("");

    const addPost = async() => {
        const user = {name, email, contactNumber, cpf, password}
        
        try {
            await axios.post(url, user);
            toast({
                title: "Cadastro realizado com sucesso!",
                status: "success",
                duration: 3000,
                isClosable: true,
            });

            setName("");
            setEmail("");
            setCpf("");
            setContactNumber("");
            setPassword("");
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
        }
    };

    return (
        <>
            <Flex direction="column" width='full' justify='center' align='center' bg="gray.900" overflowY="auto" height="100vh">
                <Box color='white' fontSize='30px' mb='10px'>Cadastrar</Box>
                <Flex direction="column" gap=".5rem" bg="gray.700" p="10px 20px 0px" borderRadius='md'>
                    <FormControl color='white'>
                        <FormLabel color='white'>Name</FormLabel>
                        <Input 
                        type='text' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}/>
                    </FormControl>
                    <FormControl color='white'>
                        <FormLabel color='white'>Email</FormLabel>
                        <Input 
                        type='email' 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}/>
                    </FormControl>
                    <FormControl color='white'>
                        <FormLabel color='white'>Número de telefone</FormLabel>
                        <Input 
                        type='text' 
                        value={contactNumber} 
                        onChange={(e) => setContactNumber(e.target.value)}/>
                    </FormControl>
                    <FormControl color='white'>
                        <FormLabel color='white'>Cpf</FormLabel>
                        <Input 
                        type='text' 
                        value={cpf} 
                        onChange={(e) => setCpf(e.target.value)}/>
                    </FormControl>
                    <FormControl color='white'>
                        <FormLabel color='white'>Senha</FormLabel>
                        <Input 
                        type='password' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}/>
                    </FormControl>
                    <Box textAlign='center'  padding='1rem'>
                        <Button onClick={() => addPost()}>
                            <FontAwesomeIcon icon={faPaperPlane}/>
                        </Button>
                    </Box>
                </Flex>
            </Flex>
        </>
    )
}

export default Cadastro