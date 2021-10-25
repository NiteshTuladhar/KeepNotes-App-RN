import React, { useState, useContext } from 'react'
import { Searchbar } from 'react-native-paper';
import { StyleSheet, Text, View } from 'react-native'
import { NotesContext } from '../context/notes.context';
import { appTheme } from '../constants';

const SearchBar = () => {

    const {setSearchOuery,searchQuery,darkMode} = useContext(NotesContext)

    const onChangeSearch = (query) => {
        setSearchOuery(query);
    };
    return (
        <View>
            <Searchbar
                style={[styles.searchbar,{backgroundColor: darkMode ? appTheme.COLORS.dark_secondary : '#F6F7FB'}]}
                placeholder="Search"
                onChangeText={onChangeSearch}
                placeholderTextColor = {darkMode ? appTheme.COLORS.light_dark : appTheme.COLORS.black}
                value={searchQuery}
                theme ={{
                    colors: { text: darkMode?appTheme.COLORS.white:appTheme.COLORS.black  } 
                }}
            />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({
    searchbar:{
        marginBottom : 20,
        backgroundColor: '#F6F7FB',
        borderRadius : 50,
    }
})
