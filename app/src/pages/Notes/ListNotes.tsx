import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation, useRoute} from '@react-navigation/native';
import styled from 'styled-components/native';
import {BookOpen} from 'react-native-feather';

import {Header} from '../../components/Header';
import {Card} from '../../components/Card';
import {capitalize} from '../../utils/format';
import {getNotesByCategory, IResponseNote} from '../../service';
import {FlatList, View} from 'react-native';

const EmptyText = styled.Text`
  font-size: 20px;
  text-align: center;
  color: #aaaaaa;
  opacity: 0.5;
`;

export const ListNotes = (): JSX.Element => {
  const [listNotes, setListNotes] = useState<IResponseNote[] | []>([]);

  const navigation = useNavigation();
  const route = useRoute();

  const init = useCallback(async () => {
    const notes = await getNotesByCategory(route?.params?.id);
    setListNotes(notes);
  }, [route?.params?.id]);

  useEffect(() => {
    init();
  }, [init]);

  return (
    <SafeAreaView>
      <Header
        title={capitalize(route?.params?.category)}
        notesAmount={route?.params?.categoryAmount}
      />
      <FlatList
        style={{marginBottom: 140}}
        data={listNotes}
        keyExtractor={(item, index) => `list-item-${index}-${item}`}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <Card
            data={item}
            onPress={() => {
              navigation.navigate('Note', {
                editable: false,
                id: item.id,
                textNote: item.text,
                categoryNote: item.categoryId - 1,
                createdAt: item.createdAt,
              });
            }}
          />
        )}
        ListFooterComponent={
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {listNotes.length === 0 ? (
              <>
                <BookOpen
                  color={'#AAAAAA'}
                  width={100}
                  height={100}
                  opacity={0.5}
                />
                <EmptyText>
                  You have no {capitalize(route?.params?.category)} notes 🙁
                </EmptyText>
              </>
            ) : null}
          </View>
        }
      />
    </SafeAreaView>
  );
};
