import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faUser, 
    faGear,
    faClipboardCheck,
    faCreditCard,
    faLocationCrosshairs,
    faRightFromBracket,
} from '@fortawesome/free-solid-svg-icons';

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    Flex,
} from '@chakra-ui/react';

import Cookies from 'js-cookie';
import { useNavigate } from 'react-router-dom';

const UserMenu = ({username, setName, setAuthenticationValue }) => {

    const navigate = useNavigate();

    const logout = () => {
        Cookies.remove('accessToken');
        Cookies.remove('refreshToken');
        console.log(username);
        setAuthenticationValue(false);
        setName('');
        console.log("fez logout");
    }

    return (
        <div>
            <Menu>
                <MenuButton aria-label='Options' variant='outline'>
                    <FontAwesomeIcon fontSize='30px' color='white' icon={faUser} />
                </MenuButton>

                <MenuList>
                    <MenuItem
                        fontSize='25px'
                        fontWeight='bold'
                        color='#333'
                        _hover={{ bg: 'transparent' }}
                        p='.5rem'>
                        Olá, {username}
                    </MenuItem>
                    <MenuItem
                        color='#aaa'
                        fontWeight='bold'
                        _hover={{ bg: 'transparent', color: '#764329' }}
                        p='.5rem'>
                        <Flex
                            gap='1rem'
                            align='center'>
                            <FontAwesomeIcon width='20px' fontSize='23px' icon={faGear} />
                            <div onClick={() => navigate("/dados-cadastrais")}>
                                Meus dados
                            </div>
                        </Flex>
                    </MenuItem >
                    <MenuItem
                        color='#aaa'
                        fontWeight='bold'
                        _hover={{ bg: 'transparent', color: '#764329' }}
                        p='.5rem'>
                        <Flex
                            gap='1rem'
                            align='center'>
                            <FontAwesomeIcon width='20px' fontSize='23px' icon={faLocationCrosshairs} />Endereço
                        </Flex>
                    </MenuItem>
                    <MenuItem
                        color='#aaa'
                        fontWeight='bold'
                        _hover={{ bg: 'transparent', color: '#764329' }}
                        p='.5rem'>
                        <Flex
                            gap='1rem'
                            align='center'>
                            <FontAwesomeIcon width='20px' fontSize='23px' icon={faCreditCard} />Pagamentos
                        </Flex>
                    </MenuItem>
                    <MenuItem
                        color='#aaa'
                        fontWeight='bold'
                        _hover={{ bg: 'transparent', color: '#764329' }}
                        p='.5rem'>
                        <Flex
                            gap='1rem'
                            align='center'>
                            <FontAwesomeIcon width='20px' fontSize='23px' icon={faClipboardCheck} />Pedidos
                        </Flex>
                    </MenuItem>
                    <MenuItem
                        color='#aaa'
                        fontWeight='bold'
                        _hover={{ bg: 'transparent', color: '#764329' }}
                        p='.5rem'>
                        <Flex
                            onClick={logout}
                            gap='1rem'
                            align='center'>
                            <FontAwesomeIcon width='20px' fontSize='23px' icon={faRightFromBracket} />Sair
                        </Flex>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default UserMenu;