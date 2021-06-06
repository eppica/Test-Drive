import React from 'react';
import { Text, View } from 'react-native';
import { TesteProps } from '../typing/navigationTypes';

export default function Teste({ route }: TesteProps) {
  return (
    <View>
      <Text>{route.params.name}</Text>
    </View>
  );
}
