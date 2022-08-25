
import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import AboutScreen from './components/AboutScreen';
import ContactScreen from './components/ContactScreen';

export default function App() {
  return (
    <NavigationContainer>
     <HomeScreenStack.Navigator>
      <HomeScreenStack.Group>
       <HomeScreenStack.Screen name="Home" component={HomeScreen}/>
       <HomeScreenStack.Screen name="Contact" component={ContactScreen}/>
      </HomeScreenStack.Group>
      <HomeScreenStack.Group screenOptions={{presentation: 'modal'}}>
          <HomeScreenStack.Screen name="About" component={AboutScreen}/>
        </HomeScreenStack.Group>
      </HomeScreenStack.Navigator>
      </NavigationContainer>
  );
}

const HomeScreenStack = createStackNavigator();




