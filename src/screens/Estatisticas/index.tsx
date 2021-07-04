import React, { useState } from 'react';
import { ViewStyled, Title, OtherText, List, Title2 } from './styles';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, ScrollView } from 'react-native';

export default function Estatisticas() {
  const data = {
    labels: ['01/07', '02/07', '03/07', '04/07', '05/07', '06/07'],
    datasets: [
      {
        data: [20, 20, 30, 20, 10, 15],
        strokeWidth: 5,
      },
    ],
  };

  const screenWidth = Dimensions.get('window').width;

  const height = 220;

  const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    propsForDots: {
      r: '5',
      stroke: '#000',
    },
  };

  const style = {
    marginVertical: 20,
  };

  const [pontosLegislacao, setPontosLegislacao] = useState(90);
  const [pontosSinalizacao, setPontosSinalizacao] = useState(95);
  const [pontosDirecaoDefensiva, setPontosDirecaoDefensiva] = useState(80);
  const [pontosMeioAmbiente, setPontosMeioAmbiente] = useState(77);
  const [pontosMecanicaBasica, setPontosMecanicaBasica] = useState(60);
  const [pontosPrimeirosSocorros, setPontosPrimeirosSocorros] = useState(40);

  return (
    <ViewStyled>
      <Title>Frequência de Estudos</Title>
      <LineChart
        data={data}
        yLabelsOffset={30}
        width={screenWidth}
        height={height}
        chartConfig={chartConfig}
        bezier
        style={style}
      />
      <Title>Porcentagem de Acertos</Title>
      <ScrollView>
        <List>
          <Title2>Legislação</Title2>
          <OtherText>{pontosLegislacao}%</OtherText>
        </List>
        <List>
          <Title2>Sinalização</Title2>
          <OtherText>{pontosSinalizacao}%</OtherText>
        </List>
        <List>
          <Title2>Direção Defensiva</Title2>
          <OtherText>{pontosDirecaoDefensiva}%</OtherText>
        </List>
        <List>
          <Title2>Meio Ambiente</Title2>
          <OtherText>{pontosMeioAmbiente}%</OtherText>
        </List>
        <List>
          <Title2>Mecânica Básica</Title2>
          <OtherText>{pontosMecanicaBasica}%</OtherText>
        </List>
        <List>
          <Title2>Primeiros Socorros</Title2>
          <OtherText>{pontosPrimeirosSocorros}%</OtherText>
        </List>
      </ScrollView>
    </ViewStyled>
  );
}
