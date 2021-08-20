import React, { useEffect, useState } from 'react';
import {
  ViewStyled,
  Title,
  OtherText,
  List,
  ChartContainer,
  Percentage,
  Icon,
  Button,
  TextButton,
} from './styles';
import { View } from 'react-native';
import { ResultadoProps } from '../../typing/navigationTypes';
import ProgressCircle from 'react-native-progress-circle';
import { Statistic, Test } from '../../typing/generalTypes';
import { saveStatistic } from '../../utils/async';
import { EventArg } from '@react-navigation/native';

export default function Resultado({ navigation, route }: ResultadoProps) {
  let isGoBackButton: boolean = true;

  useEffect(() => navigation.addListener('beforeRemove', (e) => handleError(e)), [navigation]);

  const handleError = (
    e: EventArg<
      'beforeRemove',
      true,
      {
        action: Readonly<{
          type: string;
          payload?: object | undefined;
          source?: string | undefined;
          target?: string | undefined;
        }>;
      }
    >,
  ) => {
    if (isGoBackButton) {
      e.preventDefault();
      continueHandler();
    } else {
      if (test.isReview) {
        navigation.removeListener('beforeRemove', handleError);
        reviewQuestionsHandler();
      } else {
        navigation.dispatch(e.data.action);
      }
    }
  };

  const test: Test = {
    type: route.params.type,
    quantity: route.params.quantity,
    questions: route.params.questions,
    isReview: route.params.isReview,
    duration: route.params.duration,
    remainingTime: route.params.remainingTime,
  };

  const [acertos, setAcertos] = useState(() => {
    let acertos = 0;
    test.questions.forEach((question) => {
      if (question.answer == question.userAnswer) {
        acertos++;
      }
    });
    return acertos;
  });
  const [quantidadeQuestoes, setQuantidadeQuestoes] = useState(test.quantity);
  const [tempoDemorado, setTempoDemorado] = useState(() => {
    let time = '0';
    if (test.remainingTime != undefined) {
      let remainingTime = test.duration * 60 - test.remainingTime;
      let minutes = Math.trunc(remainingTime / 60);
      let seconds = remainingTime % 60;
      time =
        minutes +
        ':' +
        (seconds.toString().length == 2
          ? remainingTime % 60
          : '0' + (remainingTime % 60).toString());
    } else {
      time = '--:--';
    }
    return time;
  });
  const [porcentagemAcertos, setPorcentagemAcertos] = useState(
    Math.trunc((acertos / quantidadeQuestoes) * 100),
  );

  useEffect(() => {
    const stat: Statistic = {
      date: new Date(),
      type: route.params.type,
      percentage: porcentagemAcertos,
    };
    if (!test.isReview) {
      saveStatistic(stat);
    }
  }, []);

  const reviewQuestionsHandler = () => {
    isGoBackButton = false;
    test.isReview = true;
    navigation.replace('Questao', test);
  };

  const continueHandler = () => {
    isGoBackButton = false;
    navigation.reset({
      index: 0,
      routes: [{ name: 'Conteudo' }],
    });
  };

  return (
    <ViewStyled>
      <ChartContainer>
        <ProgressCircle
          percent={porcentagemAcertos}
          radius={130}
          borderWidth={15}
          color="#474747"
          shadowColor="#fff"
          bgColor="#fff">
          <Percentage>{porcentagemAcertos}%</Percentage>
        </ProgressCircle>
      </ChartContainer>

      <List>
        <Icon name={'check'} size={60} color="#474747" />
        <View>
          <Title>Respostas Corretas</Title>
          <OtherText>
            {acertos}/{quantidadeQuestoes}
          </OtherText>
        </View>
      </List>
      <List>
        <Icon name={'time-slot'} size={55} color="#474747" />
        <View>
          <Title>Tempo demorado</Title>
          <OtherText>{tempoDemorado}</OtherText>
        </View>
      </List>

      <Button onPress={reviewQuestionsHandler}>
        <TextButton>Rever Questões</TextButton>
      </Button>
      <Button onPress={continueHandler}>
        <TextButton>Finalizar</TextButton>
      </Button>
    </ViewStyled>
  );
}
