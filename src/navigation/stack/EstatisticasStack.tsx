import React from 'react';
import { RootDrawerParamList } from '../../typing/navigationTypes';
import { createStackNavigator } from '@react-navigation/stack';

import Estatisticas from '../../screens/Estatisticas';
import Header from '../../components/Header';

const EstatisticasStack = createStackNavigator<RootDrawerParamList>();

export default function EstatisticasStackComponent() {
  return (
    <EstatisticasStack.Navigator>
      <EstatisticasStack.Screen
        name="Estatisticas"
        component={Estatisticas}
        options={({ navigation }) => {
          return {
            headerTitle: () => <Header navigation={navigation} title={'Estatísticas'} />,
          };
        }}
      />
    </EstatisticasStack.Navigator>
  );
}
