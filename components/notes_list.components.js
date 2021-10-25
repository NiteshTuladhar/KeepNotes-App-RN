import React,{ useState,useContext, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import { appTheme } from '../constants'
import { Divider } from 'react-native-paper';
import Icon from 'react-native-vector-icons/AntDesign';
import { NotesContext } from '../context/notes.context';
import NoNotesFound from './no_notes.components';
import LoadingScreen from './loadingscreen.components';
import { useIsFocused } from "@react-navigation/native";
import AppModal from './modal.components';


const NotesList = ({ notes, isLoading, caption, navigation }) => {

    const isFocused = useIsFocused()
    const { visible, getData, darkMode } = useContext(NotesContext);

  
    useEffect(() => {
        if(isFocused){
            getData()
        }
        
    },[isFocused, visible])

    return (
        
        <>
             
            
            {
                !isLoading && notes.length ? 
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={notes.reverse()}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item }) => (
                        
                            <TouchableOpacity style={styles.listContainer} 
                            

                            onPress={ 
                                ()=> navigation.navigate('NoteDetails',{
                                noteId : item.id
                            })}  >
                                <AppModal isVisible={visible} />
                                <View>
                                    
                                    <Divider style={[styles.divider, {backgroundColor : darkMode ? 'black' : '#E0DADA'}]}/>
                                    <View style={{ flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                                        <View>
                                            <Text style={[styles.title,{ color: darkMode? 'white' : appTheme.COLORS.black }]}>
                                                {
                                                    ((item.body.split('\n')[0]).length > 45) ? 
                                                    (((item.body.split('\n')[0]).substring(0,45)) + '...') : 
                                                    item.body.split('\n')[0]
                                                
                                                
                                                }
                                            
                                            </Text>
                                            <View style={{ flexDirection: 'row' ,alignItems: 'center',  }}>
                                                <Icon name='calendar' size={15} style={styles.icon} color={appTheme.COLORS.light_black}  />
                                                <Text style={[styles.date, { color: darkMode? 'white' : appTheme.COLORS.black, marginLeft: 5, }]}>{item.updated.substring(0,10)}</Text>
                                            </View>
                                        </View>
                                        <View>    
                                            <Icon name='pushpin' size={15} style={styles.pin} />
                                        </View>
                                    </View>
                                </View>
                            
                            </TouchableOpacity>
                            
                            
                        
                    )}

                   
                    />
                    :
                    !isLoading && !notes.length?
                    <NoNotesFound caption={caption} />
                    :
                    <LoadingScreen />
            }
            
        </>
    )
}

export default NotesList

const styles = StyleSheet.create({
    container:{
       flexDirection : 'row',
       alignItems : 'center',
       
    },  
    listContainer:{
        flexDirection : 'row',
        alignItems:'center',
        justifyContent :'space-between',
        marginBottom: 18,
    },
    divider:{

        marginBottom: 11,
        
        width : 550,
    }, 
    title:{

        fontSize : appTheme.SIZES.medium,
        fontWeight : 'bold',
        paddingBottom : 7,
    },
    date:{
        fontSize : appTheme.SIZES.small,
    },
    pin:{
        color : appTheme.COLORS.primary,
        transform: [
            { scaleX: -1},
        ],
    }
})
