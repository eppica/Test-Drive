import styled from 'styled-components';
import { View, Text, TouchableOpacity } from 'react-native';

export const Container = styled(View)`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled(Text)`
  font-size: 20px;
`;

export const Paragraph = styled(Text)`
  font-size: 18px;
  text-align: center;
  margin: 40px;
`;
