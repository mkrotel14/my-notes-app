import styled from 'styled-components/native';
import {Text} from '../../Text';

export const ButtonContainer = styled.TouchableOpacity.attrs({})`
  padding: 30px 50px;
`;

export const TextContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const ButtonText = styled(Text)`
  font-weight: 500;
  font-size: 28px;
  color: #373871;
`;
