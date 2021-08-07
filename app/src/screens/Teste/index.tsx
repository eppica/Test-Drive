import React, { useEffect } from 'react';
import axios from 'axios';
import { Alert, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Test } from '../../typing/generalTypes';
import { TesteProps } from '../../typing/navigationTypes';
import { Container, Title, Paragraph } from './styles';
import { URIBase } from '../../utils/variables';
import { getAsyncValue } from '../../utils/async';

export default function Teste({ navigation, route }: TesteProps) {
  const pressHandler = () => {
    if (title != 'Carregando...') {
      navigation.navigate('Questao', teste);
    }
  };

  const [quantity, setQuantity] = React.useState(0);
  const [duration, setDuration] = React.useState(0);

  useEffect(() => {
    getAsyncValue('MaxTestTime').then((result) => {
      setDuration(result);
    });
    getAsyncValue('QuestionsQuantity').then((result) => {
      setQuantity(result);
    });
  }, []);

  const [title, setTitle] = React.useState('Carregando...');

  const teste: Test = {
    type: '',
    quantity: quantity,
    questions: [],
    isReview: false,
    duration: duration,
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
          : 'Questionário com ' +
            quantity +
            ' questões aleatórias sobre o assunto ' +
            route.params.name}
      </Paragraph>
      <Button title="Começar" onPress={pressHandler} />
    </Container>
  );
}
