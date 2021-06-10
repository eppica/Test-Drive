import React from 'react';

import Drawer from './drawer';

import { NavigationContainer } from '@react-navigation/native';

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}
