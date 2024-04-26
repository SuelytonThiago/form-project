import React, { useState } from 'react';

import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Text,
    Box,
    Flex,
} from '@chakra-ui/react';

import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Input,
} from '@chakra-ui/react';

import InputMask from "react-input-mask";

const UserData = ({ name }) => {


    return (
        <>
            <Flex
                m='2rem'
                direction='column'
                align='center'
                justify='center'
                width='calc(100vh -72px)'>
                <Text
                    fontSize='30px'
                    fontWeight='500'>
                    Meus dados
                </Text>
                <Accordion
                    m='2rem'
                    width='500px'
                    defaultIndex={[0]} allowMultiple>
                    <AccordionItem border='none'>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as='span'
                                    flex='1'
                                    textAlign='left'
                                    fontSize='20px'>
                                    Informações Pessoais
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel
                            pb={4}>
                            <Flex
                                direction='column'
                                justify='center'
                                align='center'
                                gap='1rem'>
                                <FormControl
                                    width='400px'>
                                    <FormLabel>Nome Completo</FormLabel>
                                    <Input
                                        type='text'
                                        value={name}
                                    />

                                </FormControl>
                                <FormControl
                                    width='400px'>
                                    <FormLabel>CPF</FormLabel>
                                    <InputMask mask='999.999.999-99' maskChar={null}>
                                        {(inputProps) => <Input {...inputProps} />}
                                    </InputMask>
                                    <FormHelperText>Confirme se os números de seu CPF estão corretos antes de confirmar a edição</FormHelperText>
                                </FormControl>
                            </Flex>
                        </AccordionPanel>
                    </AccordionItem>

                    <AccordionItem border='none'>
                        <h2>
                            <AccordionButton>
                                <Box
                                    as='span'
                                    flex='1'
                                    textAlign='left'
                                    fontSize='20px'>
                                    Section 2 title
                                </Box>
                                <AccordionIcon />
                            </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                            commodo consequat.
                        </AccordionPanel>
                    </AccordionItem>
                </Accordion>

            </Flex>
        </>

    )
}

export default UserData