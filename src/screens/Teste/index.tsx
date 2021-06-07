import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { TesteProps } from '../typing/navigationTypes';

export default function Teste({ navigation, route }: TesteProps) {
  const pressHandler = () => {
    navigation.navigate('Questao');
  };

  return (
    <View style={styles.container}>
      <AntDesign name={route.params.icon} color="black" size={86} />
      <Text style={styles.title}>{route.params.name}</Text>
      <Text style={styles.paragraph}>
        Questionário com 20 questões aleatórias sobre o assunto {route.params.name}
      </Text>
      <Button title="Começar" onPress={pressHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
  },
  paragraph: {
    fontSize: 18,
    textAlign: 'center',
    margin: 40,
  },
});
