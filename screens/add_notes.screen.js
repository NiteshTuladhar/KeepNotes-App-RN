import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider, TextInput } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/AntDesign'
import  EIcon  from 'react-native-vector-icons/Entypo'
import Header from '../components/header.components'
import TitleComponent from '../components/title.components'
import Wrapper from '../components/wrapper.components'
import { appTheme } from '../constants'
import { NotesContext } from '../context/notes.context'

const AddNotesScreen = ({ navigation }) => {
    const [text, setText] = useState('');
    const [notesAdded, setNotesAdded] = useState(false);
    const { addNotes, darkMode } = useContext(NotesContext);

    useEffect(() => {
        console.log(`useeffect notes added`)
        setNotesAdded(false)
        navigation.navigate('AllNotes')
    }, [notesAdded])
    
    return (
        <Wrapper>
            <Header navigation={navigation} settings_navigation='Settings_Add'/>
            <View style={styles.container}>
                <TitleComponent icon='note-plus-outline' title1='Add' title2='Notes' />
                <View style={styles.icons}>
                    <TouchableOpacity onPress={()=>{
                        
                        addNotes(text)
                        setNotesAdded(true)
                        setText('')
                        
                        }}>
                        <Icon name='checkcircle' size={25} style={styles.icon} />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={()=> navigation.goBack()}>
                        <EIcon name='circle-with-cross' size={30} style={styles.icon2 } />
                    </TouchableOpacity>
                </View>
            </View>
            <Divider style={styles.divider}/>
            <TextInput
                style={[styles.textArea, { backgroundColor: darkMode? appTheme.COLORS.dark_primary : 'white' }]}
                multiline={true}
                placeholder='Write your notes....'
                numberOfLines={30}
                onChangeText={(val) => setText(val)}
                value={text}

                theme={{
                    
                colors: {
                        
                            placeholder: `${darkMode ? appTheme.COLORS.dark_secondary : appTheme.COLORS.black}`, 
                            text: `${darkMode ? appTheme.COLORS.white : appTheme.COLORS.black}`, 
                            
                            
                    }
      }}
                
            />
        </Wrapper>
    )
}

export default AddNotesScreen

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-between'
    }, 
    icons:{
        flexDirection : 'row',
        alignItems : 'center',
        
    },
    icon:{
        color: appTheme.COLORS.primary,
        
    }, 

    icon2:{
        color: appTheme.COLORS.primary,
        
        marginLeft : 20,
    }, 
    divider:{
        marginTop : 18,
    },
    textArea:{
        
    },
})
