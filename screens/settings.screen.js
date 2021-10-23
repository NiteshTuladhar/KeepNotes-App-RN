import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Divider } from 'react-native-paper'
import Header from '../components/header.components'
import ImageAvatar from '../components/imageAvatar.components'
import SwitchButton from '../components/switch_button.components'

import Wrapper from '../components/wrapper.components'
import { appTheme, images } from '../constants'
import { NotesContext } from '../context/notes.context'

const SettingsScreen = ({ navigation }) => {
    const { darkMode } = useContext(NotesContext);

    return (
        <Wrapper>
            <Header navigation= {navigation} />
            <View style={styles.header}>
                <ImageAvatar size={120} image={images.profile_image} />
                <Text style={[styles.text,{ color: darkMode? appTheme.COLORS.white : appTheme.COLORS.black}]}>admin@gmail.com</Text>
            </View>
                
            <Divider style={styles.divider}/>
            
            <View style={styles.body}>
                <Text style={[styles.bodyText, { color: darkMode? appTheme.COLORS.white : appTheme.COLORS.black}]}>Dark Mode</Text>
                <SwitchButton />
            </View>
        </Wrapper>
    )
}

export default SettingsScreen

const styles = StyleSheet.create({
    header:{
        alignItems: 'center',
        
    },
    text:{
        fontSize : appTheme.SIZES.medium,
        fontWeight : 'bold',
        marginTop: 18,
    },
    divider:{
        marginTop : 18,
    },
    body:{
        marginTop : 18,
        flexDirection : 'row',
        alignItems : 'center',
        justifyContent : 'space-between'    
    },
    bodyText:{
        fontSize : appTheme.SIZES.medium,
        fontWeight : 'bold'
    },

})
