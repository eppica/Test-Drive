import React from 'react';
import { RootDrawerParamList } from '../../typing/navigationTypes';
import { createStackNavigator } from '@react-navigation/stack';

import Sobre from '../../screens/Sobre';
import Header from '../../components/Header';

const SobreStack = createStackNavigator<RootDrawerParamList>();

export default function SobreStackComponent() {
  return (
    <SobreStack.Navigator
      screenOptions={({ navigation, route }) => {
        return {
          headerTitle: () => <Header navigation={navigation} title={route.name} />,
        };
      }}>
      <SobreStack.Screen name="Sobre" component={Sobre} />
    </SobreStack.Navigator>
  );
}
