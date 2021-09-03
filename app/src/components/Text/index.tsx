import React from 'react';
import {TextProps} from 'react-native';

import * as S from './style';

export interface ITextProps extends TextProps {
  children: React.ReactNode;
  color?: string;
  size?: string;
  weight?: string;
}

export const Text = ({
  color,
  size,
  weight,
  children,
  ...props
}: ITextProps): JSX.Element => {
  return (
    <S.Text color={color} size={size} weight={weight} {...props}>
      {children}
    </S.Text>
  );
};
