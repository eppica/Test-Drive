import React from 'react';
import { Button, Text, View } from 'react-native';
import { ConteudoProps } from '../typing/navigationTypes';

export default function Conteudo({ navigation }: ConteudoProps) {
  const pressHandler = () => {
    navigation.navigate('Teste', { id: 1, icon: 'book', name: 'Livro' });
  };

  return (
    <View>
      <Text>Tela Conteudo</Text>
      <Button title="Go to Test" onPress={pressHandler} />
    </View>
  );
}
