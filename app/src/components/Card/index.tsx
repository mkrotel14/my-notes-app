import React from 'react';
import {IResponseNote} from '../../service';
import {formatDate} from '../../utils/format';

import * as S from './style';

export interface ICard {
  data: IResponseNote;
  onPress: () => void;
}

export const Card = ({data, onPress, ...props}: ICard) => {
  return (
    <S.Card {...props} key={data.id} onPress={onPress}>
      <S.CardHeader>
        <S.DateText>{formatDate(data.createdAt)}</S.DateText>
      </S.CardHeader>
      <S.CardContent>
        <S.NoteText>{data.text}</S.NoteText>
      </S.CardContent>
    </S.Card>
  );
};
