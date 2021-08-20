import React, { useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Alert, Button } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Alternative, Question, Test, Response } from '../../typing/generalTypes';
import { TesteProps } from '../../typing/navigationTypes';
import { Container, Title, Paragraph } from './styles';
import { URIBase } from '../../utils/variables';
import { getAsyncValue } from '../../utils/async';

export default function Teste({ navigation, route }: TesteProps) {
  const pressHandler = () => {
    if (buttonText == 'Começar') {
      navigation.navigate('Questao', teste);
    }
  };

  const [buttonText, setButtonText] = React.useState('Aguarde...');
  const [quantity, setQuantity] = React.useState(0);
  const [duration, setDuration] = React.useState(0);
  const [questions, setQuestions] = React.useState<Question[]>([]);

  const teste: Test = {
    type: route.params.route,
    quantity: quantity,
    questions: questions,
    isReview: false,
    duration: duration,
  };

  useEffect(() => {
    const init = async () => {
      let duration = await getAsyncValue('MaxTestTime');
      setDuration(duration);

      let quantity = await getAsyncValue('QuestionsQuantity');
      setQuantity(quantity);

      doRequest(quantity)
        .then((response: { data: Response[] }) => {
          parseResponse(response.data, quantity, duration);
          setButtonText('Começar');
        })
        .catch((e) => {
          handleError(
            'Erro 😵',
            'Ocorreu um erro ao buscar as questões. \nVerifique sua conexão com a internet. ',
          );
        });
    };

    init();
  }, []);

  const doRequest = (quantity: number) => {
    console.log(URIBase + route.params.route + '/' + quantity);
    return axios.get(`${URIBase}${route.params.route}/${quantity}`);
  };

  const parseResponse = (response: Response[], quantity: number, duration: number) => {
    teste.type = route.params.route;
    let questions: Question[] = [];
    teste.duration = route.params.route == 'simulado' ? 60 : duration;

    for (let i: number = 0; i < response.length; i++) {
      let toSave: Question;
      let toSaveAlternatives: Alternative[] = [];
      let current = response[i];
      let currentAlternatives = current.alternatives;

      for (let j: number = 0; j < currentAlternatives.length; j++) {
        let toSaveAlternative: Alternative;
        toSaveAlternative = {
          id: currentAlternatives[j].id,
          text: currentAlternatives[j].text,
        };
        toSaveAlternatives.push(toSaveAlternative);
      }
      toSave = {
        index: i + 1,
        type: current.type,
        question: current.question,
        image: current.image,
        alternatives: toSaveAlternatives,
        answer: current.answer_id,
      };

      questions.push(toSave);
    }
    setQuestions(questions);
    if (questions.length == 0) handleError('Erro 😞', 'Não foram retornadas questões. ');
    setQuantity(questions.length >= quantity ? quantity : questions.length);
  };

  const handleError = (errorTitle: string, errorDescription: string) => {
    Alert.alert(errorTitle, errorDescription, [
      {
        text: 'OK',
        style: 'destructive',
        onPress: () => exit(),
      },
    ]);
  };

  const exit = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Conteudo' }],
    });
  };

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
      <Button title={buttonText} onPress={pressHandler} />
    </Container>
  );
}
