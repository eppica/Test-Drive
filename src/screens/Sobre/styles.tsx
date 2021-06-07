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
  font-size: 28px;
`;

export const Subtitle = styled(Text)`
  font-size: 14px;
  font-weight: bold;
  text-align: left;
`;

export const Paragraph = styled(Text)`
  font-weight: normal;
  margin-bottom: 10px;
`;

export const Content = styled(View)`
  margin: 30px;
`;
