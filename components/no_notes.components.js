import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { appTheme, images } from '../constants'

const NoNotesFound = ({ caption }) => {
    return (
        <View style={styles.container}>
            {/**<Image style={styles.image} source={images.no_notes_found} />**/}
           <Text style={styles.caption}>{caption}</Text>
        </View>
    )
}

export default NoNotesFound

const styles = StyleSheet.create({
    container:{
        
        flexDirection : 'column',
        flex: 1,
        alignItems : 'center',
        justifyContent : 'center',
        
       
    },
    image:{
        width : 450,
        height: 450,
        opacity : 0.5,
        marginLeft: 30,
        
    },
    caption:{
        fontSize : appTheme.SIZES.medium,
        fontWeight : 'bold',
        color : appTheme.COLORS.light_black,
        marginTop : -130,
        opacity : 0.8,
    }
})
