
import { Text } from 'react-native';
import React from 'react'

export default function BiggestNumber({ numero1, numero2, numero3 }) {

  console.log(numero1, numero2, numero3)

  return (
    <Text>Maior numero entre {numero1}, {numero2}, {numero3} é {Math.max(numero1, numero2, numero3)}</Text>
  );
}
