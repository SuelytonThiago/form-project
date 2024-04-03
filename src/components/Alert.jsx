import React from 'react';
import {
    Alert, 
    AlertIcon,
  } from '@chakra-ui/react'
import React, { useState } from 'react';

const Alert = () => {
    const [showNotification, setShowNotification] = useState(false);

    const showNotificationWithCreateNewCount = () => {
        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 5000);
    }
    
    return (
        <div>
            {mostrarNotificacao && (
            <Alert status="success">
                <AlertIcon />Conta criada com sucesso!
            </Alert>
            )}
            <button onClick={mostrarNotificacaoDeContaCriada}>
                Criar Conta</button>
        </div>
    )
}

export default Alert