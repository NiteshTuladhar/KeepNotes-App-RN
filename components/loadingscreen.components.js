import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import LottieView from 'lottie-react-native';



const LoadingScreen = () => {    


    return (
       
            <LottieView 
                style={styles.loading}
                key="animation"
                autoPlay
                loopresizeMode="cover"
                source={require("../assets/loading.json")}
            />          
        
    )
}

export default LoadingScreen

const styles = StyleSheet.create({
    loading:{
        height: 190,
        width: 190,
        marginLeft : 25,
        marginTop: 60,
        
    }
})
