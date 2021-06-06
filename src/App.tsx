import React from 'react';

import { ConteudoStack } from './navigation/conteudoStack';
import { Drawer } from './navigation/drawer';

import { NavigationContainer } from '@react-navigation/native';

import Teste from './screens/Teste';
import ConteudoScreen from './screens/Conteudo';
import Questao from './screens/Questao';
import Configuracoes from './screens/Configuracoes';
import Estatisticas from './screens/Estatisticas';
import Sobre from './screens/Sobre';

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Conteudo" component={Conteudo} />
        <Drawer.Screen name="Configuracoes" component={Configuracoes} />
        <Drawer.Screen name="Estatisticas" component={Estatisticas} />
        <Drawer.Screen name="Sobre" component={Sobre} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

const Conteudo = () => {
  return (
    <ConteudoStack.Navigator>
      <ConteudoStack.Screen name="Conteudo" component={ConteudoScreen} />
      <ConteudoStack.Screen name="Teste" component={Teste} />
      <ConteudoStack.Screen name="Questao" component={Questao} />
    </ConteudoStack.Navigator>
  );
};
