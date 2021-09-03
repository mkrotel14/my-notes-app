import React from 'react';
import {Trash2} from 'react-native-feather';

import * as S from './style';

export interface IHeader {
  title: string;
  notesAmount?: string;
  deleteButton?: number;
  onPress?: () => void;
}

export const Header = ({
  title,
  onPress,
  notesAmount,
  deleteButton,
}: IHeader): JSX.Element => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>
      {deleteButton ? (
        <S.DeleteButton onPress={onPress}>
          <Trash2 stroke="#e62d1c" />
        </S.DeleteButton>
      ) : null}
      {notesAmount ? (
        <S.AmountContainer>
          <S.Title>{notesAmount}</S.Title>
        </S.AmountContainer>
      ) : null}
    </S.Container>
  );
};
