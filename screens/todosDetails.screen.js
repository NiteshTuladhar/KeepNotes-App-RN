import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import { Divider, TextInput, Checkbox } from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/AntDesign'
import  EIcon  from 'react-native-vector-icons/Entypo'
import  FIcon  from 'react-native-vector-icons/Feather'
import Header from '../components/header.components'
import TitleComponent from '../components/title.components'
import Wrapper from '../components/wrapper.components'
import { appTheme } from '../constants'
import { NotesContext } from '../context/notes.context'

const todosDetails = ({ route,navigation }) => {

    const [checked, setChecked] = useState(false);

    return (
        <Wrapper>
            <Header navigation={navigation} settings_navigation='Settings_Home'/>
            <View style={styles.container}>
                <View style={{ display:'flex', flexDirection:'column'}}>
                    <Text style={styles.todoTitle}>Epasha Error Report</Text>
                    
                </View>
                <View style={styles.icons}>
                    
                    <TouchableOpacity onPress={()=>navigation.navigate('AddTodos')}>
                        <FIcon name='trash' size={30} style={styles.icon2 } />
                    </TouchableOpacity>
                </View>
            </View>
            <Divider style={styles.divider}/>
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
             <View style={{ display:'flex', flexDirection:'row', marginRight:50, marginTop: 20 }}>
                <Checkbox
                    color={appTheme.COLORS.primary}
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    />
                <Text style={{ fontSize:16, textAlign:'justify' }}>The data on the profile page does not load when the page is refreshed.</Text>
            </View>

            <View style={{ display:'flex', flexDirection:'row', marginRight:50, marginTop: 20 }}>
                <Checkbox
                    color={appTheme.COLORS.primary}
                    status={checked ? 'checked' : 'unchecked'}
                    onPress={() => {
                        setChecked(!checked);
                    }}
                    />
                <Text style={{ fontSize:16, textAlign:'justify' }}>When an item is added to the cart by a customer and the admin deletes the item from the DB then the cart item also needs to be deleted.</Text>
            </View>
        </Wrapper>
    )
}

export default todosDetails

const styles = StyleSheet.create({

    container:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent : 'space-between'
    }, 
    todoTitle:{
        fontSize:20,
        fontWeight:'500',
    },
    todoSubTitle:{
        fontSize:12,
        color:'#dddbdb',
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
        color: 'white'
    },
})
