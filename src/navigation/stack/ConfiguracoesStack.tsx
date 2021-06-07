import React from 'react';
import { RootDrawerParamList } from '../../typing/navigationTypes';
import { createStackNavigator } from '@react-navigation/stack';

import Configuracoes from '../../screens/Configuracoes';
import Header from '../../components/Header';

const ConfiguracoesStack = createStackNavigator<RootDrawerParamList>();

export default function ConfiguracoesStackComponent() {
  return (
    <ConfiguracoesStack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title={route.name} />,
        };
      }}>
      <ConfiguracoesStack.Screen name="Configuracoes" component={Configuracoes} />
    </ConfiguracoesStack.Navigator>
  );
}
