import React from 'react';
import { View,StyleSheet } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import NotesContextProvider from './context/notes.context';
import { appTheme } from './constants';
import LoadingScreen from './components/loadingscreen.components';
import SafeAreaNavigation from './navigation/safe-area-navigation';
import { GetStartedNavigator } from './navigation/stack.navigation';


export default function App() {

  return (
   

     <NotesContextProvider>
        <NavigationContainer>
            <SafeAreaNavigation />
        </NavigationContainer>
      </NotesContextProvider>

  

 

  );
}

const styles = StyleSheet.create({
  
});
