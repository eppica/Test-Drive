import React from 'react';
import { RootDrawerParamList } from '../../typing/navigationTypes';
import { createStackNavigator } from '@react-navigation/stack';

import Estatisticas from '../../screens/Estatisticas';
import Header from '../../components/Header';

const EstatisticasStack = createStackNavigator<RootDrawerParamList>();

export default function EstatisticasStackComponent() {
  return (
    <EstatisticasStack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title={route.name} />,
        };
      }}>
      <EstatisticasStack.Screen name="Estatisticas" component={Estatisticas} />
    </EstatisticasStack.Navigator>
  );
}
