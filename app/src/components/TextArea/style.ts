import styled from 'styled-components/native';

export const TextAreaContainer = styled.View`
  border-color: rgba(0, 0, 0, 0.2);
  border-width: 1px;
  border-radius: 8px;
  padding: 10px;
  margin-bottom: 20px;
`;

export const TextArea = styled.TextInput.attrs(() => ({
  underlineColorAndroid: 'transparent',
  placeholderTextColor: 'rgba(0, 0, 0, 0.2)',
  numberOfLines: 10,
  multiline: true,
  textAlignVertical: 'top',
}))`
  color: #000;
  height: ${({height}) => height || 150}px;
  justify-content: flex-start;
`;
