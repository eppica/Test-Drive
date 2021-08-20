import React, { useEffect, useRef } from 'react';
import {
  Container,
  Question,
  Buttons,
  ButtonText,
  Icon,
  ButtonRight,
  ButtonLeft,
  Header,
  HeaderText,
} from './styles';
import { Test } from '../../typing/generalTypes';
import { QuestaoProps } from '../../typing/navigationTypes';
import QuestionTypeOne from '../../components/QuestionTypeOne';
import QuestionTypeTwo from '../../components/QuestionTypeTwo';
import QuestionTypeThree from '../../components/QuestionTypeThree';
import { Alert } from 'react-native';
import { EventArg } from '@react-navigation/native';

export default function Questao({ navigation, route }: QuestaoProps) {
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
    e.preventDefault();
    Alert.alert(
      'Você tem certeza?',
      'Você ainda não finalizou este teste. Caso saia agora, todo o seu progresso será perdido.',
      [
        {
          text: 'Ficar',
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => {
            navigation.removeListener('beforeRemove', handleError);
            navigation.reset({
              index: 0,
              routes: [{ name: 'Conteudo' }],
            });
          },
        },
      ],
    );
  };

  const test: Test = {
    type: route.params.type,
    quantity: route.params.quantity,
    questions: route.params.questions,
    isReview: route.params.isReview,
    duration: route.params.duration,
    remainingTime: route.params.remainingTime,
  };

  const [currentQuestion, setCurrentQuestion] = React.useState(1);
  const [buttonPrevious, setButtonPrevious] = React.useState('Voltar');
  const [buttonNext, setButtonNext] = React.useState('Próxima');
  const [timeString, setTimeString] = React.useState('--:--');
  const [timeSeconds, setTimeSeconds] = React.useState(test.duration * 60);
  const timeSeconsRef = useRef(test.duration * 60);

  useEffect(() => {
    timeSeconsRef.current = timeSeconds;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      let minutes = Math.trunc(timeSeconsRef.current / 60);
      let seconds = timeSeconsRef.current % 60;
      setTimeString(
        minutes +
          ':' +
          (seconds.toString().length == 2
            ? timeSeconsRef.current % 60
            : '0' + (timeSeconsRef.current % 60).toString()),
      );
      if (!test.isReview) {
        setTimeSeconds(timeSeconsRef.current - 1);
      }
      if (timeSeconsRef.current == 0 && !test.isReview) {
        test.remainingTime = 0;
        navigation.removeListener('beforeRemove', handleError);
        navigation.navigate('Resultado', test);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleNext = () => {
    props.current = test.questions[currentQuestion - 1];
    if (currentQuestion == test.quantity - 1) {
      setButtonNext('Finalizar');
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion < test.quantity - 1) {
      setButtonNext('Próxima');
      setCurrentQuestion(currentQuestion + 1);
    } else if (currentQuestion == test.quantity) {
      test.remainingTime = timeSeconds;
      navigation.removeListener('beforeRemove', handleError);
      navigation.navigate('Resultado', test);
    }
  };

  const handlePrevious = () => {
    props.current = test.questions[currentQuestion - 1];
    if (currentQuestion != test.quantity - 1) {
      setButtonNext('Próxima');
    }
    if (currentQuestion > 1) setCurrentQuestion(currentQuestion - 1);
  };

  const setAnswer = (answer: number) => {
    test.questions[currentQuestion - 1].userAnswer = answer;
  };

  const props = {
    current: test.questions[currentQuestion - 1],
    isReview: test.isReview,
    functionSetAnswer: setAnswer,
  };

  return (
    <Container>
      <Header>
        <HeaderText>{currentQuestion + '/' + test.quantity}</HeaderText>
        <HeaderText>{test.isReview ? '--:--' : timeString}</HeaderText>
      </Header>
      <Question>
        {test.questions[currentQuestion - 1].type == 1 ? (
          <QuestionTypeOne {...props} />
        ) : test.questions[currentQuestion - 1].type == 2 ? (
          <QuestionTypeTwo {...props} />
        ) : test.questions[currentQuestion - 1].type == 3 ? (
          <QuestionTypeThree {...props} />
        ) : (
          ''
        )}
      </Question>
      <Buttons>
        <ButtonLeft onPress={handlePrevious}>
          <Icon name={'left'} />
          <ButtonText>{buttonPrevious}</ButtonText>
        </ButtonLeft>
        <ButtonRight onPress={handleNext}>
          <ButtonText>{buttonNext}</ButtonText>
          <Icon name={'right'} />
        </ButtonRight>
      </Buttons>
    </Container>
  );
}
