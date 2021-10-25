import React, {useContext} from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
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
                    <TouchableOpacity>

                        <ImageAvatar image={images.profile_image} size={55} />
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
    }
})
