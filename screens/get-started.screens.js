import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import ButtonComponent from '../components/button.components'
import { appTheme, images } from '../constants'



const GetStartedScreen = () => {
    return (
        <View style={styles.container}>
            
                <Image style={styles.image} source={images.gettingStartedImage} />
            
            
                <Text style={styles.header}>Capture Ideas</Text>
            

                <View style={styles.bodyContainer}>

                    <Text style={styles.body}>Remember everything and tackle any project with your notes, tasks, and schedule all in one place.</Text>
                </View>
                <View style={styles.buttonContainer}>

                    <ButtonComponent buttonText="Get Started" />
                </View>
        </View>
    )
}

export default GetStartedScreen

const styles = StyleSheet.create({
    container:{
        marginBottom: 110,
        flex :1 ,
        alignItems: 'center',
        justifyContent : 'center',
    },  
    image:{
        width: 327,
        height: 327
    },
    header:{
        fontSize: appTheme.SIZES.large,
        fontWeight : 'bold',
   
    },
    bodyContainer:{
        marginTop : 17,
        marginHorizontal:50,
        
    },  
    body:{
        fontSize: appTheme.SIZES.medium,
        textAlign : 'center',
        color: appTheme.COLORS.light_black

    },
    buttonContainer:{
        marginTop: 72
    }
})
