import styled from 'styled-components/native';
import {Text} from '../Text';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 50px;
`;

export const Title = styled(Text)`
  font-weight: 500;
  font-size: 40px;
  color: #e62d1c;
`;

export const AmountContainer = styled.View`
  width: 50px;
  height: 50px;
  align-self: center;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #fad5d2;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  background-color: #fad5d2;
`;
