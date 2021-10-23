import React,{ useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Constants from 'expo-constants';
import AppNavigator from './app.navigation';
import { appTheme } from '../constants';
import { NotesContext } from '../context/notes.context';
import GetStartedScreen from '../screens/get-started.screens';

const SafeAreaNavigation = () => {
    const { darkMode, getStarted } = useContext(NotesContext)
    return (
        <View style={[styles.safeArea,]}>
            {
                getStarted ?
                    <AppNavigator /> :

                    <GetStartedScreen />
            }
        </View>
    )
}

export default SafeAreaNavigation

const styles = StyleSheet.create({
    safeArea : {
      flex: 1,
      paddingTop: Constants.statusBarHeight * 1.1,
     
      
    }
})
