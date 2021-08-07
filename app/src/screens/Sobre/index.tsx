import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Container, Title, Subtitle, Content, Paragraph } from './styles';

export default function Sobre() {
  return (
    <Container>
      <AntDesign name="car" color="black" size={86} />
      <Title>Test Drive</Title>
      <Content>
        <Subtitle>Desenvolvedor</Subtitle>
        <Paragraph>éppica</Paragraph>

        <Subtitle>Versão</Subtitle>
        <Paragraph>0.1.0</Paragraph>

        <Subtitle>Agradecimentos</Subtitle>
        <Paragraph>Ao professor Marcelo CP Santos por ministrar a disciplina</Paragraph>
      </Content>
    </Container>
  );
}
