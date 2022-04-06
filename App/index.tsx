import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Sample from './screens/Sample/SampleView';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sample" >
        <Stack.Screen name='Sample' component={Sample} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;