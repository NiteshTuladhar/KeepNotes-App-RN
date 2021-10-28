import React, { useContext } from 'react'
import { Switch } from 'react-native-paper';
import { appTheme } from '../constants';
import { NotesContext } from '../context/notes.context';



const SwitchButton = () => {
    
    const {darkModeState, isSwitchOn,setIsSwitchOn} = useContext(NotesContext);
    
    const onToggleSwitch = async () => {
        try{
            
            setIsSwitchOn(!isSwitchOn)
            darkModeState()
            
        }catch(e){
            console.log(`error`, e)
        }
        
    };
    return (
        <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color={appTheme.COLORS.primary} />
    )
};

export default SwitchButton

