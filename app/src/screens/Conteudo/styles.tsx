import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
`;

export const Title = styled(Text)`
  font-size: 18px;
  margin-left: 10px;
`;

export const List = styled(TouchableOpacity)`
  flex: 1;
  flex-direction: row;
  padding: 20px;
`;
