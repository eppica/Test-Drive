import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';

export const ViewStyled = styled(ScrollView)`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
`;

export const List = styled(View)`
  flex-direction: row;
  padding: 20px;
  background-color: #fff;
`;

export const Title = styled(Text)`
  flex: 1;
  margin-left: 15px;
  font-size: 25px;
`;

export const OtherText = styled(Text)`
  font-size: 20px;
  margin-left: 15px;
`;

export const Percentage = styled(Text)`
  font-size: 60px;
  text-align: center;
  color: #474747;
`;

export const ChartContainer = styled(View)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-end;
`;

export const Icon = styled(Entypo)`
  margin-left: 20px;
`;

export const Button = styled(TouchableOpacity)`
  background-color: #474747;
  font-size: 20px;
  width: 60%;
  padding: 15px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
`;

export const TextButton = styled(Text)`
  font-size: 20px;
  color: #fff;
  text-align: center;
`;
