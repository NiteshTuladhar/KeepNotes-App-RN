import React, { useContext } from "react";
import { Modal, StyleSheet, Text, Pressable, View,TouchableOpacity } from "react-native";

import { Divider } from "react-native-paper";
import Icon from 'react-native-vector-icons/AntDesign';
import FIcon from 'react-native-vector-icons/Feather';
import { appTheme } from "../constants";
import { NotesContext } from "../context/notes.context";

const AppModal = ({ isVisible, noteid }) => {
  
    const {modalVisibleState, visible, currentModalValue , deleteNotes} = useContext(NotesContext);

    console.log(`currentModalValue`, currentModalValue)
    
  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="fade"
    
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          
          modalVisibleState()
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>

            <Pressable
              style={[styles.button]}
              onPress={() => {
                    modalVisibleState()
              }}
            >
                <Icon name='close' size={20}  color='white' />
            </Pressable>

            <View style={{ marginBottom : 15}}>
                <TouchableOpacity onPress={()=>console.log('pinned')} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center',marginBottom: 15 }}>
                    <Icon name='pushpin' size={20} style={styles.pin} />
                    <Text style={{ fontSize: 20 , fontWeight: 'normal', marginLeft: 10,}}>Pin</Text>
                </TouchableOpacity>
                <Divider />
                <TouchableOpacity onPress={()=>{
                    deleteNotes(currentModalValue)
                }} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' ,marginTop: 15}}>
                    <FIcon name='trash' size={20} style={styles.pin} />
                    <Text style={{ fontSize: 20 , fontWeight: 'normal' ,marginLeft: 10,}}>Delete</Text>
                </TouchableOpacity>
            </View>
            
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    
  },
  modalView: {
    margin: 30,
    height: 200,
    width :300,
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical : 30,
    paddingHorizontal: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    position: 'relative',
    marginTop:-15,
    marginBottom: 15,
    marginLeft : 200
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default AppModal;