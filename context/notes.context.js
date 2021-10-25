import React, { useState, createContext , useEffect} from 'react'
import { StyleSheet } from 'react-native'
import axios from 'axios';

export const NotesContext = createContext();

const NotesContextProvider = ({ children }) => {

    const [notes, setNotes] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [darkMode, setDarkMode] = useState(false)

    const [noteDetails, setNoteDetails] = useState('')
    const [visible, setVisible] = useState(false)

    const [currentModalValue, setCurrentModalValue] = useState()
    const counter = Object.keys(notes?notes : 0).length ? Object.keys(notes).length : '0'
    //const counter = '15'

    //Switch
    const [isSwitchOn, setIsSwitchOn] = React.useState(false);

    //Search
    const [searchQuery, setSearchOuery] = useState('');

    //GetStartedScreen
    const [getStarted, setGetStarted] = useState(false)

    const getData = async () => {
        setIsLoading(true)
        try{
            await axios.get('https://notes.pandamotions.com/api/')
            .then((res)=>{  
                var result = res.data;
                setNotes(result)
                setIsLoading(false)
            }).catch((err)=>{
                setError(err)
            })
        }catch{
            console.log('Could not get the data from the server ')
        }
     }


     const addNotes = async (body) => {
      
        setIsLoading(true)
        try{
            await axios.post('https://notes.pandamotions.com/api/create',{
                body: body,
                updated: new Date()
            })
            .then((res)=>{  
                console.log(`item added`)
                setIsLoading(false)
            }).catch((err)=>{
                setError(err)
            })
        }catch{
            console.log('Could not get the data from the server ')
        }
     }




     const getNoteDetails =  async(id) => {
        setIsLoading(true);
        
        try{
             
            await axios.get(`https://notes.pandamotions.com/api/details/${id}`)

            .then((res)=>{  
                var json = res.data;
                var result = JSON.stringify(json.body)
                var transformed_result = result.replace(/\\n/g,'\n');
                setNoteDetails(transformed_result)
    
                setIsLoading(false)

                
            }).catch((err)=>{
                setError(err)
            })
        }catch{
            console.log('Could not get the data from the server ')
        }
     }



     const updateNotes = async (id,body) => {
        console.log(`updateing `, body )
        setIsLoading(true);
        try{
             console.log('stage 0')
            await axios.put(`https://notes.pandamotions.com/api/update/${id}`,{
                body: body,
                updated: new Date()
            })

            .then((res)=>{  
                setIsLoading(false)

                
            }).catch((err)=>{
                setError(err)
            })
        }catch{
            console.log('Could not get the data from the server ')
        }
     }
     

     const deleteNotes = async (id) => {
        setIsLoading(true)
        try{
            await axios.delete(`https://notes.pandamotions.com/api/delete/${id}`)
            .then((res)=>{  
                console.log(`item deleted`)
                setIsLoading(false)
            }).catch((err)=>{
                setError(err)
            })
        }catch{
            console.log('Could not get the data from the server ')
        }
     }


     const darkModeState = () => {
        setDarkMode(!darkMode);
     }

     const modalVisibleState = (id) => {
        setVisible(!visible);
        setCurrentModalValue(id)
     }

    useEffect(() => {

        setIsLoading(true)
         setTimeout(function() { 
             getData();
        
     }, 7000);

    }, [])

    return (
        <NotesContext.Provider value={{ notes,counter, getData,isLoading, error , addNotes, getNoteDetails ,
                        noteDetails,updateNotes,deleteNotes ,darkMode, searchQuery,setSearchOuery,darkModeState, modalVisibleState, visible, 
                        currentModalValue,isSwitchOn,setIsSwitchOn,setGetStarted,getStarted}}>
            {children}
        </NotesContext.Provider>
    )
}

export default NotesContextProvider

const styles = StyleSheet.create({})
