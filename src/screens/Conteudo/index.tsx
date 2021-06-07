import React from 'react';
import { FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { ConteudoProps } from '../../typing/navigationTypes';
import { ListaConteudosType } from '../../typing/generalTypes';
import { ListaConteudos } from '../../utils/variables';
import { Container, Title, List } from './styles';

export default function Conteudo({ navigation }: ConteudoProps) {
  const pressHandler = (item: ListaConteudosType) => {
    navigation.navigate('Teste', item);
  };

  return (
    <Container>
      <FlatList
        keyExtractor={(item) => String(item.id)}
        data={ListaConteudos}
        renderItem={({ item }) => (
          <List onPress={() => pressHandler(item)}>
            <AntDesign name={item.icon} size={32} color="black" />
            <Title>{item.name}</Title>
          </List>
        )}
      />
    </Container>
  );
}
