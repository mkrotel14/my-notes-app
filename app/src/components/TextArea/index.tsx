import React from 'react';
import {TextInputProps} from 'react-native';

import * as S from './style';

export interface ITextArea extends TextInputProps {
  value: string;
  placeholder?: string;
  height?: number;
}

export const TextArea = ({
  value,
  placeholder,
  height,
  ...props
}: ITextArea): JSX.Element => {
  return (
    <S.TextAreaContainer>
      <S.TextArea
        value={value}
        placeholder={placeholder}
        height={height}
        {...props}
      />
    </S.TextAreaContainer>
  );
};
