import React from 'react';
import { RootStackParamList } from '../../typing/navigationTypes';
import { createStackNavigator } from '@react-navigation/stack';

import Teste from '../../screens/Teste';
import Conteudo from '../../screens/Conteudo';
import Questao from '../../screens/Questao';
import Header from '../../components/Header';

const ConteudoStack = createStackNavigator<RootStackParamList>();

export default function ConteudoStackComponent() {
  return (
    <ConteudoStack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title={route.name} />,
        };
      }}>
      <ConteudoStack.Screen name="Conteudo" component={Conteudo} />
      <ConteudoStack.Screen name="Teste" component={Teste} />
      <ConteudoStack.Screen name="Questao" component={Questao} />
    </ConteudoStack.Navigator>
  );
}
