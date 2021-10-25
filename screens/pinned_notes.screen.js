import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { Divider } from 'react-native-paper'
import Header from '../components/header.components'
import NotesList from '../components/notes_list.components'
import SearchBar from '../components/searchBar.components'
import TitleComponent from '../components/title.components'
import Wrapper from '../components/wrapper.components'
import { appTheme } from '../constants'
import { NotesContext } from '../context/notes.context'

const PinnedNotesScreen = ({ navigation }) => {

    const { counter } = useContext(NotesContext)

    return (
        <Wrapper>
            <Header isHomeScreen navigation={navigation} settings_navigation='Settings_Pinned' />
            <TitleComponent icontype='entypo' icon='pin' title1='Pinned' title2='Notes List' counter={counter} />

            <SearchBar />
            <NotesList notes={[]} isLoading={false} navigation={navigation} caption='You have no pinned notes.' />
        </Wrapper>
    )
}

export default PinnedNotesScreen

const styles = StyleSheet.create({
    divider:{
        backgroundColor : appTheme.COLORS.dark_secondary,
        marginBottom: 11,

        width : 550,
    }, 
})
