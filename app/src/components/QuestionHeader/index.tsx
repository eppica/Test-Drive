import React from 'react';
import { HeaderContainer, HeaderText, ExitButton, ExitText } from './styles';
import { HeaderProps } from '../../typing/navigationTypes';
import { Alert } from 'react-native';

export default function QuestionHeader({ navigation, title }: HeaderProps) {
  const handleExit = () => {
    Alert.alert(
      'Você tem certeza?',
      'Você ainda não finalizou este teste. Caso saia agora, todo o seu progresso será perdido.',
      [
        {
          text: 'Ficar',
          style: 'cancel',
          onPress: () => {},
        },
        {
          text: 'Sair',
          style: 'destructive',
          onPress: () => exit(),
        },
      ],
    );
  };

  const exit = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Conteudo' }],
    });
  };

  return (
    <HeaderContainer>
      <HeaderText>{title}</HeaderText>
      <ExitButton onPress={handleExit}>
        <ExitText>SAIR</ExitText>
      </ExitButton>
    </HeaderContainer>
  );
}
