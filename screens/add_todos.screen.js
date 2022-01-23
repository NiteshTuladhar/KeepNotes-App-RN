import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Divider, TextInput,Checkbox } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/AntDesign'
import  EIcon  from 'react-native-vector-icons/Entypo'
import Header from '../components/header.components'
import TitleComponent from '../components/title.components'
import Wrapper from '../components/wrapper.components'
import { appTheme } from '../constants'
import { NotesContext } from '../context/notes.context'
import  FIcon  from 'react-native-vector-icons/Feather'

const AddTodosScreen = ({ navigation }) => {
   
    const [checked, setChecked] = useState(false);

    return (
        <Wrapper>
            <Header navigation={navigation} settings_navigation='Settings_Add'/>
            
               <View style={{ display:'flex', flexDirection:'row', justifyContent:'space-between'}}>
                    <TextInput
                        style={[styles.textArea, { backgroundColor:'white' }]}
                        multiline={true}
                        placeholder='Enter your todo title'
                        numberOfLines={1}
                    
                    
                    />
                    <TouchableOpacity onPress={()=>navigation.navigate('AddTodos')} >
                        
                            <FIcon name='plus' size={30} style={styles.icon2 } color={appTheme.COLORS.white} />
                        
                    </TouchableOpacity>
            
                </View>
                <TextInput
                    style={[styles.textArea, { backgroundColor:'white' }]}
                    multiline={true}
                    placeholder='Enter your todos'
                    numberOfLines={1}
                    
                    
                />

                
            

            <View style={{ display:'flex', flexDirection:'row', marginRight:50, marginTop: 20 }} >
                <Checkbox
                    color={appTheme.COLORS.primary}
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    />
                <Text onPress={() => {
                        setChecked(!checked);
                    }} style={{ fontSize:16, textAlign:'justify', color:checked?'#9a9a9a':'black', textDecorationLine: checked?'line-through':'none' }}>When a user changes his/her user name then it should also change in the sidebar.</Text>
            </View>
        </Wrapper>
    )
}

export default AddTodosScreen

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
