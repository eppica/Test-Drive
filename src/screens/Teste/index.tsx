import React from 'react';
import axios from 'axios';
import { Alert, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Test } from '../../typing/generalTypes';
import { TesteProps } from '../../typing/navigationTypes';
import { Container, Title, Paragraph } from './styles';
import { URIBase } from '../../utils/variables';

export default function Teste({ navigation, route }: TesteProps) {
  const pressHandler = () => {
    if (title != 'Carregando...') {
      navigation.navigate('Questao', teste);
    }
  };

  const [title, setTitle] = React.useState('Carregando...');

  const teste: Test = {
    type: '',
    quantity: 0,
    questions: [],
    isReview: false,
    duration: 4,
  };

  const handleError = () => {
    Alert.alert(
      'Erro',
      'Ocorreu um erro ao buscar as questões. Verifique sua conexão com a internet.',
      [
        {
          text: 'OK',
          style: 'destructive',
          onPress: () => exit(),
        },
      ],
    );
  };

  const exit = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Conteudo' }],
    });
  };

  axios
    .get(URIBase + route.params.name.trim)
    .then(function (response: any) {
      setTitle('Começar');
      teste.type = response.data.type;
      teste.quantity = response.data.quantity;
      teste.questions = response.data.questions;
    })
    .catch(function (error: any) {
      handleError();
    });

  return (
    <Container>
      <AntDesign name={route.params.icon} color="black" size={86} />
      <Title>{route.params.name}</Title>
      <Paragraph>
        {route.params.id == 7
          ? 'Questionário com 30 questões no padrão DETRAN'
          : 'Questionário com 20 questões aleatórias sobre o assunto ' + route.params.name}
      </Paragraph>
      <Button title="Começar" onPress={pressHandler} />
    </Container>
  );
}
