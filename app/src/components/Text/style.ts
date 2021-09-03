import styled from 'styled-components/native';

export const Text = styled.Text`
  color: ${({color}) => color || '#000'};
  font-size: ${({size}) => size || 12}px;
  font-weight: ${({weight}) => weight || 'normal'};
`;
