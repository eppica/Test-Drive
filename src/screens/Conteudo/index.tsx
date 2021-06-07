import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ConteudoProps } from '../typing/navigationTypes';
import { ListaConteudosType } from '../typing/generalTypes';
import { ListaConteudos } from '../utils/variables';

export default function Conteudo({ navigation }: ConteudoProps) {
  const pressHandler = (item: ListaConteudosType) => {
    navigation.navigate('Teste', item);
  };

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={ListaConteudos}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => pressHandler(item)} style={styles.list}>
            <AntDesign name={item.icon} size={32} color="black" />
            <Text style={styles.text}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column',
  },
  list: {
    flex: 1,
    flexDirection: 'row',
    padding: 20,
  },
  text: {
    fontSize: 18,
    marginLeft: 10,
  },
});
