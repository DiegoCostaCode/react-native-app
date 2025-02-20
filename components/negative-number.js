import React from 'react';
import { Text } from 'react-native';

export default function NegativeNumber({ numero }) {

    function number(numero) {
        if (numero < 0) {
            console.log('Negativo')
            return 'Negativo'
        }
        if (numero === 0) {

            console.log('Zero')
            return 'Zero'
        }
        if (numero > 0) {

            console.log('Positivo')
            return 'Positivo'
        }
    }

    return (
        <Text>O {numero} é {number(numero)}</Text>
    );
}