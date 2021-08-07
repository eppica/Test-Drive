import styled from 'styled-components';
import { View, Text } from 'react-native';

export const HeaderContainer = styled(View)`
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderText = styled(Text)`
  font-size: 24px;
`;

export const ExitButton = styled(Text)`
  background-color: #f66;
  padding-top: 9px;
  padding-bottom: 9px;
  padding-left: 15px;
  padding-right: 15px;
  border-radius: 5px;
`;

export const ExitText = styled(Text)`
  color: #fff;
`;
