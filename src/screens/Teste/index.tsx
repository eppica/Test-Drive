import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TesteProps } from '../../typing/navigationTypes';
import { Container, Title, Paragraph } from './styles';

export default function Teste({ navigation, route }: TesteProps) {
  const pressHandler = () => {
    navigation.navigate('Questao');
  };

  return (
    <Container>
      <AntDesign name={route.params.icon} color="black" size={86} />
      <Title>{route.params.name}</Title>
      <Paragraph>
        Questionário com 20 questões aleatórias sobre o assunto {route.params.name}
      </Paragraph>
      <Button title="Começar" onPress={pressHandler} />
    </Container>
  );
}
