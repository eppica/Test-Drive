import React from 'react';
import { RootDrawerParamList } from '../../typing/navigationTypes';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Configuracoes from '../../screens/Configuracoes';
import Estatisticas from '../../screens/Estatisticas';
import Sobre from '../../screens/Sobre';

import ConteudoStack from '../../navigation/stack/conteudoStack';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerComponent() {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Conteudo" component={ConteudoStack} />
      <Drawer.Screen name="Configuracoes" component={Configuracoes} />
      <Drawer.Screen name="Estatisticas" component={Estatisticas} />
      <Drawer.Screen name="Sobre" component={Sobre} />
    </Drawer.Navigator>
  );
}
