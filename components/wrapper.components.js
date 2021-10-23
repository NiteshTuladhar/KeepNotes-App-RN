import React, { useContext } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { appTheme } from '../constants'
import { NotesContext } from '../context/notes.context'

const Wrapper = ({ children }) => {

    const { darkMode } = useContext(NotesContext);

    return (
        <View style={darkMode? styles.wrapperDarkMode : styles.wrapperLightMode}>
           { children } 
        </View>
    )
}

export default Wrapper

const styles = StyleSheet.create({
    wrapperLightMode:{
        flex:1,
        paddingHorizontal :25,
        backgroundColor : 'white',
    },
    wrapperDarkMode:{
        flex:1,
        paddingHorizontal :25,
        backgroundColor : appTheme.COLORS.dark_primary,
    }
})
