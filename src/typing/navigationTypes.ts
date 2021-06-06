import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListaConteudosType } from './generalTypes';

export type RootStackParamList = {
  Conteudo: undefined;
  Teste: ListaConteudosType;
  Questao: undefined;
};

type ConteudoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Conteudo'>;

export type ConteudoProps = {
  navigation: ConteudoScreenNavigationProp;
};

export type TesteProps = StackScreenProps<RootStackParamList, 'Teste'>;
