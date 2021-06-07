import React from 'react';

import Drawer from './drawer/drawer';

import { NavigationContainer } from '@react-navigation/native';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
