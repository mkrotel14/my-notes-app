import styled from 'styled-components/native';
import {Text} from '../../Text';

export const ButtonContainer = styled.TouchableOpacity`
  margin: 0 20px;
  justify-content: center;
  border-radius: 8px;
  height: 48px;
  background-color: #e62d1c;
`;

export const ButtonText = styled(Text)`
  color: #fff;
  font-size: 20px;
  text-align: center;
`;
