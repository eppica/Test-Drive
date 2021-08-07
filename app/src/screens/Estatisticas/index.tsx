import React, { useEffect, useState } from 'react';
import { ViewStyled, Title, OtherText, List, Title2 } from './styles';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions, ScrollView } from 'react-native';
import { getAsyncValue } from '../../utils/async';
import { Statistic } from '../../typing/generalTypes';

export default function Estatisticas() {
  let datePerDay: number[] = [];
  let datesLabel: string[] = [];

  const [datePerDayState, setDatePerDayState] = useState([0]);
  const [datesLabelState, setDatesLabelState] = useState(['']);

  const [pontosLegislacao, setPontosLegislacao] = useState(0);
  const [pontosSinalizacao, setPontosSinalizacao] = useState(0);
  const [pontosDirecaoDefensiva, setPontosDirecaoDefensiva] = useState(0);
  const [pontosMeioAmbiente, setPontosMeioAmbiente] = useState(0);
  const [pontosMecanicaBasica, setPontosMecanicaBasica] = useState(0);
  const [pontosPrimeirosSocorros, setPontosPrimeirosSocorros] = useState(0);
  const [pontosSimulado, setPontosSimulado] = useState(0);

  useEffect(() => {
    getAsyncValue('Statistics').then((result) => {
      let stats: Statistic[] = JSON.parse(result);

      let one = 0;
      let two = 0;
      let three = 0;
      let four = 0;
      let five = 0;

      let validStats: Statistic[] = [];

      stats.forEach((stat) => {
        let date = new Date();
        let dateString = '';

        date.setDate(date.getDate() - 4);
        dateString = date.getDate() + '/' + (date.getMonth() + 1);
        datesLabel.indexOf(dateString) == -1 ? datesLabel.push(dateString) : null;

        if (stat.date.toString().substr(0, 10) == date.toISOString().substr(0, 10)) {
          five++;
          validStats.push(stat);
        }

        date.setDate(date.getDate() + 1);
        dateString = date.getDate() + '/' + (date.getMonth() + 1);
        datesLabel.indexOf(dateString) == -1 ? datesLabel.push(dateString) : null;

        if (stat.date.toString().substr(0, 10) == date.toISOString().substr(0, 10)) {
          four++;
          validStats.push(stat);
        }

        date.setDate(date.getDate() + 1);
        dateString = date.getDate() + '/' + (date.getMonth() + 1);
        datesLabel.indexOf(dateString) == -1 ? datesLabel.push(dateString) : null;

        if (stat.date.toString().substr(0, 10) == date.toISOString().substr(0, 10)) {
          three++;
          validStats.push(stat);
        }

        date.setDate(date.getDate() + 1);
        dateString = date.getDate() + '/' + (date.getMonth() + 1);
        datesLabel.indexOf(dateString) == -1 ? datesLabel.push(dateString) : null;

        if (stat.date.toString().substr(0, 10) == date.toISOString().substr(0, 10)) {
          two++;
          validStats.push(stat);
        }

        date.setDate(date.getDate() + 1);
        dateString = date.getDate() + '/' + (date.getMonth() + 1);
        datesLabel.indexOf(dateString) == -1 ? datesLabel.push(dateString) : null;

        if (stat.date.toString().substr(0, 10) == date.toISOString().substr(0, 10)) {
          one++;
          validStats.push(stat);
        }
      });

      datePerDay.push(five);
      datePerDay.push(four);
      datePerDay.push(three);
      datePerDay.push(two);
      datePerDay.push(one);

      setDatePerDayState(datePerDay);
      setDatesLabelState(datesLabel);

      let conteudos = [
        'legislacao',
        'sinalizacao',
        'direcaodefensiva',
        'meioambiente',
        'mecanicabasica',
        'primeirossocorros',
        'simulado',
      ];

      conteudos.forEach((conteudo) => {
        let actual = validStats.filter((stat) => stat.type == conteudo);

        let total = 0;
        actual.forEach((a) => (total += a.percentage));

        let media = total / actual.length;

        media = isNaN(media) ? 0 : media;

        if (conteudo == 'legislacao') {
          setPontosLegislacao(media);
        } else if (conteudo == 'sinalizacao') {
          setPontosSinalizacao(media);
        } else if (conteudo == 'direcaodefensiva') {
          setPontosDirecaoDefensiva(media);
        } else if (conteudo == 'meioambiente') {
          setPontosMeioAmbiente(media);
        } else if (conteudo == 'mecanicabasica') {
          setPontosMecanicaBasica(media);
        } else if (conteudo == 'primeirossocorros') {
          setPontosPrimeirosSocorros(media);
        } else if (conteudo == 'simulado') {
          setPontosSimulado(media);
        }
      });
    });
  }, []);

  const data = {
    labels: datesLabelState,
    datasets: [
      {
        data: datePerDayState,
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
        <List>
          <Title2>Simulado</Title2>
          <OtherText>{pontosSimulado}%</OtherText>
        </List>
      </ScrollView>
    </ViewStyled>
  );
}
