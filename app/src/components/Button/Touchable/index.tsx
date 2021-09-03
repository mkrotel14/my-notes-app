import React from 'react';
import {TextStyle} from 'react-native';
import {ButtonProps} from 'react-native';

import * as S from './style';

export interface IButton extends ButtonProps {
  title: string;
  categoryAmount?: string | undefined;
  titleStyle?: TextStyle;
  onPress: () => void;
}

export const TouchableButton = ({
  title,
  onPress,
  categoryAmount,
  titleStyle,
  ...props
}: IButton) => {
  return (
    <S.ButtonContainer onPress={onPress} {...props}>
      <S.TextContainer>
        <S.ButtonText {...titleStyle}>{title}</S.ButtonText>
        {categoryAmount && <S.ButtonText>{categoryAmount}</S.ButtonText>}
      </S.TextContainer>
    </S.ButtonContainer>
  );
};
