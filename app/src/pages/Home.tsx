import React, {useCallback, useState} from 'react';
import {useFocusEffect, useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import styled from 'styled-components/native';

import {TouchableButton} from '../components/Button/Touchable';
import {ActionButton} from '../components/Button/Action';
import {Header} from '../components/Header';

import {getCategories, IResponseCategory} from '../service';
import {capitalize} from '../utils/format';

const Content = styled.View`
  margin: 0 0 70px 0;
`;

export const Home = (): JSX.Element => {
  const [categoryList, setCategoryList] = useState<IResponseCategory[] | []>(
    [],
  );
  const navigation = useNavigation();

  useFocusEffect(
    useCallback(() => {
      async function fetch() {
        const categories = await getCategories();
        setCategoryList(categories);
      }

      fetch();
    }, []),
  );

  return (
    <SafeAreaView>
      <Header title="My Notes" />
      <Content>
        {categoryList &&
          categoryList.map(({id, category, categoryAmount}) => (
            <TouchableButton
              key={id}
              title={capitalize(category)}
              categoryAmount={categoryAmount.toString()}
              onPress={() =>
                navigation.navigate('ListNotes', {id, category, categoryAmount})
              }
            />
          ))}
      </Content>
      <ActionButton
        title="New Note"
        onPress={() => navigation.navigate('Note')}
      />
    </SafeAreaView>
  );
};
