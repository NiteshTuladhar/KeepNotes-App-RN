import React, {useContext} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from "react-native-vector-icons/Entypo";
import MIcon from "react-native-vector-icons/MaterialCommunityIcons";
import AIcon from "react-native-vector-icons/AntDesign";

import { appTheme } from '../constants';
import { NotesContext } from '../context/notes.context';

const TitleComponent = ({ icon, icontype ,title1, title2, counter }) => {
    
    const { darkMode } = useContext(NotesContext);

    return (
        <View style={{ overflow: 'hidden' }}>
            <View style={styles.titleComponent}>
            <View style={styles.leftContent}>
                {
                    icontype == 'entypo' ?

                        <Icon name={icon} size={30} style={styles.icon} color={darkMode? 'white' : appTheme.COLORS.black} />:
                        
                        <MIcon name={icon} size={30} style={styles.icon} color={darkMode? 'white' : appTheme.COLORS.black} />

                }
                <Text style={styles.title1}>{title1}</Text>
                <Text style={[styles.title2,{ color: darkMode? 'white' : appTheme.COLORS.black }]}>{title2}</Text>
            </View>
            
            <Text style={styles.counter}>{counter}</Text>
            
        </View>
        </View>
        
    )
}

export default TitleComponent

const styles = StyleSheet.create({
    titleComponent:{
        flexDirection :'row',
        marginTop: 5,
        alignItems: 'center',
        justifyContent : 'space-between',
        paddingBottom : 20,
        shadowColor: 'red',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.5,
        shadowRadius: 5,
        elevation: 15,
    },
    leftContent:{
        flexDirection : 'row',
        alignItems : 'center',
    },
    icon:{
        marginRight :  9,
        
    },
    title1:{
        fontSize : appTheme.SIZES.large,
        fontWeight : 'bold',
        marginRight: 5,
        color : appTheme.COLORS.primary,
    },

    title2:{
        fontSize : appTheme.SIZES.large,
        fontWeight : 'bold'
    },
    counter:{
        fontSize : 16,
        fontWeight : 'bold',
        color : appTheme.COLORS.primary,
    }
})
