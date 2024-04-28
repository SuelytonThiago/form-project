import React, { useState, useEffect } from 'react'
import { Flex, Box, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserMenu from './UserMenu';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

import axios from 'axios';
import Cookies from 'js-cookie';

const Navbar = () => {

    const url = "http://localhost:8080/api/users"
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState('');

    const handleGetName = async () => {
        const token = Cookies.get('accessToken');
        console.log('navbar-' + token);
        if (token) {
            try {
                console.log('Fazendo requisição GET...');
                const response = await axios.get(url, {
                    headers: {
                        'content-type': 'application/json',
                        'authorization': `Bearer ${token}`
                    }
                });
                console.log('Fez a requisição GET...');
                console.log('resposta:' + response.data);
                const { name } = response.data;
                setIsAuthenticated(true);
                setUserName(name);
            } catch (error) {
                console.error('Erro ao obter o nome do usuário:', error);
            }
        }
    }

    useEffect(() => {
        handleGetName();
    }, []);

    return (
        <Flex justify='space-between' p='1rem 0.5rem' bg="#6b3420">
            <Box textAlign='center' ml='10px'>
                <Link to="/home">
                    <FontAwesomeIcon fontSize='30px' color='white' icon={faBurger} />
                </Link>
            </Box>
            {!isAuthenticated ? (
                <Flex gap='.5rem'>
                    <Link to="/login">
                        <Button opacity='.7' variant='ghost' _hover={{
                            opacity: 1,
                            color:'red.500'
                        }} color='white'>
                            Entrar
                        </Button>
                    </Link>
                    <Link to="/register">
                        <Button opacity='.7' colorScheme='red' _hover={{
                            opacity: 1,
                        }} color='white'>
                            Criar conta
                        </Button>
                    </Link>
                </Flex>
                
            ) : (
                <UserMenu
                username={userName} 
                setName={setUserName} 
                setAuthenticationValue={setIsAuthenticated} />
            )}
        </Flex>
    )
}

export default Navbar