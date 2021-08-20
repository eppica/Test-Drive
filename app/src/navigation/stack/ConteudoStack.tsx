import React from 'react';
import { RootStackParamList } from '../../typing/navigationTypes';
import { createStackNavigator } from '@react-navigation/stack';

import Teste from '../../screens/Teste';
import Conteudo from '../../screens/Conteudo';
import Questao from '../../screens/Questao';
import Resultado from '../../screens/Resultado';
import Header from '../../components/Header';
import QuestionHeader from '../../components/QuestionHeader';

const ConteudoStack = createStackNavigator<RootStackParamList>();

export default function ConteudoStackComponent() {
  return (
    <ConteudoStack.Navigator>
      <ConteudoStack.Screen
        name="Conteudo"
        component={Conteudo}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} title={'Conteúdo'} />,
          };
        }}
      />
      <ConteudoStack.Screen
        name="Teste"
        component={Teste}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} title={'Teste'} />,
          };
        }}
      />
      <ConteudoStack.Screen
        name="Questao"
        component={Questao}
        options={({ navigation }) => {
          return {
            cardShadowEnabled: false,
            headerTitle: () => <QuestionHeader navigation={navigation} title={'Questão'} />,
            headerLeft: () => null,
          };
        }}
      />
      <ConteudoStack.Screen
        name="Resultado"
        component={Resultado}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} title={'Resultado'} />,
            headerLeft: () => null,
          };
        }}
      />
    </ConteudoStack.Navigator>
  );
}
