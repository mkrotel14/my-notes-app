import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Home} from './pages/Home';
import {Note} from './pages/Notes/Note';
import {ListNotes} from './pages/Notes/ListNotes';

const Stack = createNativeStackNavigator();

export const App = () => {
  const options = {
    headerTransparent: true,
    headerBackTitle: 'My Notes',
    headerTintColor: '#090909',
    headerTitleStyle: {color: 'transparent'},
    headerShadowVisible: false,
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="MyNotes"
          component={Home}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Note" component={Note} options={options} />
        <Stack.Screen
          name="ListNotes"
          component={ListNotes}
          options={options}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
