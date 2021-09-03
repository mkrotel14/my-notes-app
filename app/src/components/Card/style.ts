import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  margin: 5px 20px;
  border-radius: 8px;
  flex-direction: column;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.12);
  position: relative;
  elevation: 9;
`;

export const DateText = styled.Text`
  color: #e62d1c;
  font-size: 12px;
  font-weight: 600;
`;

export const CardHeader = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-bottom: 10px;
`;

export const CardContent = styled.View`
  flex: 1;
  justify-content: flex-start;
  padding-bottom: 10px;
`;

export const CardFooter = styled.View`
  padding: 10px;
`;

export const NoteButton = styled.TouchableOpacity`
  flex: 1
  flex-direction: column;
  justify-content: flex-end;
  background-color: gray;
  width: 30%;
`;

export const NoteButtonText = styled.Text`
  color: #e62d1c;
  font-weight: 500;
`;

export const NoteText = styled.Text.attrs(() => ({
  numberOfLines: 2,
  ellipsizeMode: 'tail',
}))``;
