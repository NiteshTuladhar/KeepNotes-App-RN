import React, {useContext} from 'react'
import { StyleSheet, View, Image, TouchableOpacity, Text } from 'react-native'
import { appTheme, images } from '../constants'
import ImageAvatar from './imageAvatar.components'
import Icon from 'react-native-vector-icons/Feather';
import { NotesContext } from '../context/notes.context';

const Header = ({ text,setText,noteId,isHomeScreen, navigation, settings_navigation }) => {

    const { darkMode, updateNotes } = useContext(NotesContext);

    return (
        <View style={styles.Headercontainer}>
            <View>
                {
                    isHomeScreen ?
                    <TouchableOpacity style={styles.wrapper}>

                        <ImageAvatar image={images.logo} size={35} />
                        <Text style={styles.title1}>My</Text>
                        <Text style={[styles.title2,{ color: darkMode? 'white' : appTheme.COLORS.black }]}>Notes</Text>
                    </TouchableOpacity>
                        :
                        <TouchableOpacity onPress={()=> {
                            navigation.goBack()
                            updateNotes(noteId,text)
                            setText?
                            setText(''):''
                        }}>

                            <Icon name='arrow-left' size={20} color={darkMode? 'gray' : appTheme.COLORS.black} />
                        </TouchableOpacity>
                }
            </View>
            {
                navigation &&
                    <TouchableOpacity onPress={()=> navigation.navigate(settings_navigation)}>
                        <Icon name='settings' size={20} color={darkMode? 'gray' : appTheme.COLORS.black} />
                    </TouchableOpacity>
            }
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    Headercontainer:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 25,
        marginTop: 15,
    },
    wrapper:{
        flexDirection: 'row',

    },
    title1:{
        marginLeft:10,
        fontSize : appTheme.SIZES.large,
        fontWeight : 'bold',
        marginRight: 5,
        color : appTheme.COLORS.primary,
    },

    title2:{
        fontSize : appTheme.SIZES.large,
        fontWeight : 'bold'
    },
})
