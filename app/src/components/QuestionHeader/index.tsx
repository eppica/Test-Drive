import React, { useEffect } from 'react';
import { HeaderContainer, HeaderText, ExitButton, ExitText } from './styles';
import { HeaderProps } from '../../typing/navigationTypes';
import { Alert, BackHandler } from 'react-native';
import { EventArg } from '@react-navigation/core';

export default function QuestionHeader({ navigation, title }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
      <ExitButton onPress={navigation.goBack}>
        <ExitText>SAIR</ExitText>
      </ExitButton>
    </HeaderContainer>
  );
}
