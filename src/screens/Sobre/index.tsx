import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Sobre() {
  return (
    <View style={styles.container}>
      <AntDesign name="car" color="black" size={86} />
      <Text style={styles.title}>Test Drive</Text>
      <View style={styles.content}>
        <Text style={styles.subtitle}>Desenvolvedor</Text>
        <Text style={[styles.subtitle, styles.normal]}>éppica</Text>
        <Text style={styles.subtitle}>Versão</Text>
        <Text style={[styles.subtitle, styles.normal]}>0.1.0</Text>
        <Text style={styles.subtitle}>Agradecimentos</Text>
        <Text style={[styles.subtitle, styles.normal]}>
          Ao professor Marcelo CP Santos por ministrar a disciplina
        </Text>
      </View>
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
  subtitle: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  content: {
    margin: 30,
  },
  normal: {
    fontWeight: 'normal',
    marginBottom: 10,
  },
});
