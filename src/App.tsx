import React from 'react';
import { ConteudoStack } from './navigation/conteudoStack';
import { NavigationContainer } from '@react-navigation/native';

import Conteudo from './screens/Conteudo';
import Teste from './screens/Teste';
import Questao from './screens/Questao';

export default function App() {
  return (
    <NavigationContainer>
      <ConteudoStack.Navigator initialRouteName="Conteudo">
        <ConteudoStack.Screen name="Conteudo" component={Conteudo} />
        <ConteudoStack.Screen name="Teste" component={Teste} />
        <ConteudoStack.Screen name="Questao" component={Questao} />
      </ConteudoStack.Navigator>
    </NavigationContainer>
  );
}
