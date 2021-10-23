import React from 'react'
import { StyleSheet  } from 'react-native'
import { Avatar } from 'react-native-paper';

const ImageAvatar = ({ image, size }) => {
    return (
        <Avatar.Image size={size} source={image} />
    )
}

export default ImageAvatar

const styles = StyleSheet.create({})
