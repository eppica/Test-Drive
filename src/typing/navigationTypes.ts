import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListaConteudosType } from './generalTypes';

export type RootStackParamList = {
  Conteudo: undefined;
  Teste: ListaConteudosType;
  Questao: undefined;
};

export type RootDrawerParamList = {
  Conteudo: undefined;
  Estatisticas: undefined;
  Configuracoes: undefined;
  Sobre: undefined;
};

type ConteudoScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Conteudo'>;

export type ConteudoProps = {
  navigation: ConteudoScreenNavigationProp;
};

export type TesteProps = StackScreenProps<RootStackParamList, 'Teste'>;

export type HeaderProps = {
  navigation: DrawerNavigationProp<RootStackParamList, 'Conteudo'>;
  title: string;
};
