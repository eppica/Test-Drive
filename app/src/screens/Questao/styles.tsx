import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
`;

export const Question = styled(View)`
  flex: 18;
`;

export const Buttons = styled(View)`
  flex: 1;
  flex-direction: row;
  background-color: #fafafa;
  min-height: 40px;
`;

export const ButtonLeft = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  background-color: #fff;
  border-color: #000;
  border-style: solid;
  border-top-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 2px;
  border-right-width: 2px;
`;

export const ButtonRight = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  background-color: #fff;
  border-color: #000;
  border-style: solid;
  border-top-width: 4px;
  border-bottom-width: 4px;
  border-left-width: 2px;
  border-right-width: 2px;
`;

export const ButtonText = styled(Text)`
  font-size: 20px;
`;

export const Icon = styled(AntDesign)`
  margin: 20px;
  width: 50px;
  color: #000;
  font-size: 45px;
`;

export const Header = styled(View)`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  border-bottom-width: 2px;
  border-color: #000;
  border-style: solid;
  background-color: #d7d7d7;
`;

export const HeaderText = styled(Text)`
  font-size: 24px;
`;
