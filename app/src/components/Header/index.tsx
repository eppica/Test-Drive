import React from 'react';
import { HeaderContainer, HeaderText } from './styles';
import { Entypo } from '@expo/vector-icons';
import { HeaderProps } from '../../typing/navigationTypes';

export default function Header({ navigation, title }: HeaderProps) {
  const openMenu = () => {
    navigation.openDrawer();
  };

  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
      <Entypo name="menu" size={32} color="black" onPress={openMenu} />
    </HeaderContainer>
  );
}
