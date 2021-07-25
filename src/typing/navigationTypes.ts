import { DrawerNavigationProp } from '@react-navigation/drawer';
import { StackScreenProps } from '@react-navigation/stack';
import { StackNavigationProp } from '@react-navigation/stack';
import { ListaConteudosType, Test, Question } from './generalTypes';

export type RootStackParamList = {
  Conteudo: undefined;
  Teste: ListaConteudosType;
  Resultado: undefined;
  Questao: Test;
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

export type QuestaoProps = StackScreenProps<RootStackParamList, 'Questao'>;

export type HeaderProps = {
  navigation: DrawerNavigationProp<RootStackParamList, 'Conteudo'>;
  title: string;
};

export type QuestionProps = {
  actual: Question;
  isReview: boolean;
  functionSetAnswer: Function;
};
