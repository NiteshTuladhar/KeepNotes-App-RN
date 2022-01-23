import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

import AddNotesScreen from '../screens/add_notes.screen';
import AddTodosScreen from '../screens/add_todos.screen';
import HomeScreen from '../screens/home.screen';
import NoteDetails from '../screens/noteDetails.screen';
import PinnedNotesScreen from '../screens/pinned_notes.screen';
import SettingsScreen from '../screens/settings.screen';
import todosDetails from '../screens/todosDetails.screen';


const StackNav = createNativeStackNavigator(); 



export const HomeStackNavigator = () => {
    return (
        <StackNav.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'red' }
            }}
        >
            
            <StackNav.Screen 
                name="AllNotes"
                component = {HomeScreen}
            />

            <StackNav.Screen 
                name="NoteDetails"
                component = {NoteDetails}
            />

            <StackNav.Screen 
                name="Settings_Home"
                component = {SettingsScreen}
            />

            <StackNav.Screen 
                name="Todos"
                component = {todosDetails}
            />

            <StackNav.Screen 
                name="AddTodos"
                component = {AddTodosScreen}
            />
        </StackNav.Navigator>
    )
};


export const AddStackNavigator = () => {
    return (
        <StackNav.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'red' }
            }}
        >
            <StackNav.Screen 
                name="AddNotes"
                component = {AddNotesScreen}
            />

            <StackNav.Screen 
                name="Settings_Add"
                component = {SettingsScreen}
            />
        </StackNav.Navigator>
    )
};


export const PinnedNotesStackNavigator = () => {
    return (
        <StackNav.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: { backgroundColor: 'red' }
            }}
        >
            <StackNav.Screen 
                name="PinnedNotes"
                component = {PinnedNotesScreen}
            />

            <StackNav.Screen 
                name="Settings_Pinned"
                component = {SettingsScreen}
            />
        </StackNav.Navigator>
    )
};



