import styled from 'styled-components';
import { View, Text } from 'react-native';

export const ViewStyled = styled(View)`
  flex: 1;
  background-color: #fff;
  flex-direction: column;
`;

export const List = styled(View)`
  flex-direction: row;
  padding: 20px;
  background-color: #fff;
  justify-content: space-between;
  border-bottom-width: 2px;
  border-color: #cccccc;
  border-style: solid;
`;

export const Title = styled(Text)`
  font-size: 22px;
  text-align: center;
  margin: 15px;
`;

export const Title2 = styled(Text)`
  font-size: 18px;
`;

export const OtherText = styled(Text)`
  font-size: 16px;
  margin-right: 15px;
`;
