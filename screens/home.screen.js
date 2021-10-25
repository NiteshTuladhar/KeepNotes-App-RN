import React, { useContext } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import Header from '../components/header.components'
import NotesList from '../components/notes_list.components'
import SearchBar from '../components/searchBar.components'
import TitleComponent from '../components/title.components'
import Wrapper from '../components/wrapper.components'
import { appTheme } from '../constants'
import { NotesContext } from '../context/notes.context'



const HomeScreen = ({ navigation }) => {

    const { notes, isLoading, counter, searchQuery,darkMode } = useContext(NotesContext);

    
    const my_notes = notes.filter(note=>
            note.body.toLowerCase().includes(searchQuery.toLowerCase())
        );

    return (
        <Wrapper>
            <View style={darkMode ? styles.topSectionDarkMode : styles.topSectionLightMode}>
                <Header isHomeScreen navigation={navigation} settings_navigation='Settings_Home' />
                <TitleComponent icontype='entypo' icon='text' title1='Notes' title2='List' counter={counter} />
            </View>
                <SearchBar />
            <NotesList notes={my_notes} isLoading={isLoading} caption='You have no notes.' navigation={navigation} />
        </Wrapper>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    topSectionDarkMode:{
        backgroundColor: appTheme.COLORS.dark_primary,
        
    },
    topSectionLightMode:{
        backgroundColor: appTheme.COLORS.white,
    }
})
