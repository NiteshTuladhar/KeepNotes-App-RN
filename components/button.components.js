import React,{useContext} from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import appTheme from '../constants/theme'
import { NotesContext } from '../context/notes.context'
import { HomeStackNavigator } from '../navigation/stack.navigation'

const ButtonComponent = ({ buttonText, navigation }) => {

    const { setGetStarted } = useContext(NotesContext);
    return (
        <TouchableOpacity style={styles.button} 
            onPress={()=>{
                setGetStarted(true)
            } }>
            <Text style={styles.buttonText}>{buttonText}</Text>
        </TouchableOpacity>
    )
}

export default ButtonComponent

const styles = StyleSheet.create({
    button:{
        width: 175,
        height: 45,
        backgroundColor:'#F57C00',
        borderRadius: 20,
        alignItems : 'center',
        justifyContent : 'center'
       
    },

    buttonText:{
        color: appTheme.COLORS.white,
        fontSize : appTheme.SIZES.medium,
        fontWeight: 'bold',
        textTransform : 'uppercase'
    }
})
