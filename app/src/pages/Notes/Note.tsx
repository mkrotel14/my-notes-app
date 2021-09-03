import React, {useCallback, useEffect, useState} from 'react';
import {Alert} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import styled from 'styled-components/native';

import {ActionButton} from '../../components/Button/Action';
import {Header} from '../../components/Header';
import {Text} from '../../components/Text';
import {TextArea} from '../../components/TextArea';

import {formatDate} from '../../utils/format';
import {addNewNote, updateNote, deleteNote} from '../../service';

const Content = styled.View`
  margin-horizontal: 16px;
`;

export const Note = (): JSX.Element => {
  const [textNote, setTextNote] = useState('');
  const [categoryNote, setCategoryNote] = useState(0);
  const [editable, setEditable] = useState(true);
  const [title, setTitle] = useState('Add Note');
  const [noteId, setNoteId] = useState<number | undefined>();

  const navigation = useNavigation();
  const {params} = useRoute();

  useEffect(() => {
    if (params) {
      setTitle('Note');
      setNoteId(params.id);
      setEditable(params.editable);
      setTextNote(params.textNote);
      setCategoryNote(params.categoryNote);
    }
  }, [params]);

  const handleCategoryChange = useCallback(event => {
    setCategoryNote(event.nativeEvent.selectedSegmentIndex);
  }, []);

  const handleAddNote = useCallback(async () => {
    const categoryId = categoryNote + 1;

    if (!noteId) {
      await addNewNote({text: textNote, categoryId});
    } else {
      await updateNote(noteId, {text: textNote, categoryId});
    }

    navigation.navigate('MyNotes');
  }, [categoryNote, navigation, noteId, textNote]);

  const handleDeleteNote = useCallback(async () => {
    await deleteNote(noteId);

    navigation.navigate('MyNotes');
  }, [navigation, noteId]);

  return (
    <>
      <SafeAreaView>
        <Header
          title={title}
          deleteButton={noteId}
          onPress={() =>
            Alert.alert('Delete Note?', '', [
              {text: 'Cancel', onPress: () => {}, style: 'cancel'},
              {text: 'Confirm', onPress: handleDeleteNote},
            ])
          }
        />
        <Content>
          {params && (
            <Text
              size="16"
              color="#e62d1c"
              weight="600"
              style={{paddingBottom: 5}}>
              {formatDate(params?.createdAt)}
            </Text>
          )}
          <TextArea
            editable={editable}
            value={textNote}
            placeholder="Take a note..."
            onChangeText={value => setTextNote(value)}
          />
          <SegmentedControl
            enabled={editable}
            values={['Personal', 'Work', 'Ideas', 'Lists']}
            onChange={event => handleCategoryChange(event)}
            selectedIndex={categoryNote}
            fontStyle={{fontSize: 16}}
            activeFontStyle={{fontSize: 18}}
            style={{marginBottom: 20}}
            appearance="light"
          />
        </Content>
      </SafeAreaView>
      {editable ? (
        <ActionButton title="Save Note" onPress={handleAddNote} />
      ) : (
        <ActionButton
          title="Edit Note"
          onPress={() => setEditable(true)}
          buttonStyle={{backgroundColor: '#373871'}}
        />
      )}
    </>
  );
};
