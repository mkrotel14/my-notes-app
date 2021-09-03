import React from 'react';
import {ButtonProps, ViewStyle} from 'react-native';

import * as S from './style';

export interface IActionButton extends ButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: ViewStyle;
}

export const ActionButton = ({
  title,
  onPress,
  buttonStyle,
  ...props
}: IActionButton) => {
  return (
    <S.ButtonContainer onPress={onPress} {...props} style={{...buttonStyle}}>
      <S.ButtonText>{title}</S.ButtonText>
    </S.ButtonContainer>
  );
};
