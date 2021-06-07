import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { HeaderProps } from '../typing/navigationTypes';

export default function Header({ navigation, title }: HeaderProps) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
      <Entypo name="menu" size={32} color="black" onPress={openMenu} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 24,
  },
});
