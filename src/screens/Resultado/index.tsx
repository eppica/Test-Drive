import React, { useState } from 'react';
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
import { ConteudoProps } from '../../typing/navigationTypes';
import ProgressCircle from 'react-native-progress-circle';

export default function Resultado({ navigation }: ConteudoProps) {
  const [acertos, setAcertos] = useState(16);
  const [quantidadeQuestoes, setQuantidadeQuestoes] = useState(20);
  const [tempoDemorado, setTempoDemorado] = useState(20);
  const [porcentagemAcertos, setPorcentagemAcertos] = useState(
    (acertos / quantidadeQuestoes) * 100,
  );

  const reviewQuestionsHandler = () => {};

  const continueHandler = () => {
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
          <OtherText>{tempoDemorado}s</OtherText>
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
