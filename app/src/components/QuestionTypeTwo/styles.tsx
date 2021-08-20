import styled from 'styled-components';
import { View, Text, ScrollView } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export const Container = styled(ScrollView)`
  flex: 1;
`;

export const Asking = styled(View)`
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

export const AskingText = styled(Text)`
  font-size: 20px;
  text-align: justify;
  margin-bottom: 20px;
`;

export const Answers = styled(View)`
  width: 90%;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  padding-left: 0px;
`;

export const Answer = styled(TouchableWithoutFeedback)`
  width: 90%;
  flex-direction: row;
  align-items: center;
  padding: 15px;
`;

export const AnswersText = styled(Text)`
  font-size: 18px;
  text-align: justify;
`;
