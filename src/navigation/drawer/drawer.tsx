import React from 'react';
import { RootDrawerParamList } from '../../typing/navigationTypes';
import { createDrawerNavigator } from '@react-navigation/drawer';

import ConteudoStack from '../stack/ConteudoStack';
import SobreStack from '../stack/SobreStack';
import ConfiguracoesStack from '../stack/ConfiguracoesStack';
import EstatisticasStack from '../stack/EstatisticasStack';

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function DrawerComponent() {
  return (
    <Drawer.Navigator drawerPosition="right">
      <Drawer.Screen name="Conteudo" component={ConteudoStack} />
      <Drawer.Screen name="Configuracoes" component={ConfiguracoesStack} />
      <Drawer.Screen name="Estatisticas" component={EstatisticasStack} />
      <Drawer.Screen name="Sobre" component={SobreStack} />
    </Drawer.Navigator>
  );
}
