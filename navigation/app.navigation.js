import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React,{useContext} from 'react'
import { StyleSheet, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import  Icon  from 'react-native-vector-icons/Entypo'
import { appTheme } from '../constants';
import { NotesContext } from '../context/notes.context';
import { AddStackNavigator, HomeStackNavigator, PinnedNotesStackNavigator } from './stack.navigation';

const AppNavigator = () => {

    const { darkMode } = useContext(NotesContext);
    const Tab = createBottomTabNavigator();

    const CustomTabBarButton = ({ children, onPress }) => {
        
        return (
            <TouchableOpacity onPress={()=>onPress()} style={[{
                top: -40,
                justifyContent : 'center',
                alignItems: 'center',
          
                
            }]}>
                <View style={[{
                    width: 90,
                    height: 90,
                    borderRadius : 45,
                    backgroundColor : appTheme.COLORS.primary,
                    borderWidth : 10,

                    borderColor: 'transparent',
                   
                     
                    
                }]}>
                    {children}
                </View>
            </TouchableOpacity>
        )
    }

    return (
       <Tab.Navigator
                
                screenOptions={({ route }) => ({

                tabBarStyle: {
                    backgroundColor: darkMode ? appTheme.COLORS.black : 'white' 
                 },
                "tabBarShowLabel": false,
                "tabBarItemStyle":[
                    {
                        backgroundColor: darkMode ? appTheme.COLORS.black : 'white' 
                        
                    }
                ],
                headerShown: false,
                showLabel: false,
                
                
                tabBarIcon: ({ color, size }) => {
                    let iconName;

                    if (route.name === 'AllNotes') {
                    iconName = "text" ;
                    } else if (route.name === 'AddNotes') {
                    iconName = "plus";
                    }else if (route.name === 'PinnedNotes') {
                    iconName = "pin";
                    }

                    // You can return any component that you like here!
                    return <Icon name={iconName} size={size} color={iconName =='plus'?'white': color} />;
                },
                tabBarActiveTintColor: appTheme.COLORS.primary,
                tabBarInactiveTintColor: 'gray',
                
                
                })}
            >
                <Tab.Screen name="AllNotes" component={HomeStackNavigator} />
                <Tab.Screen name="AddNotes" component={AddStackNavigator} 
                    options ={{
                        tabBarIcon:({ focused})=>(
                            <Icon name='plus' size={54} color='white' />
                        ),
                       tabBarButton : (props) => (
                            <CustomTabBarButton {...props} />
                       )
                    }}
                />
                <Tab.Screen name="PinnedNotes" component={PinnedNotesStackNavigator} />
            </Tab.Navigator>
    )
}

export default AppNavigator

const styles = StyleSheet.create({
    customButton:{
        shadowColor: '#7F5DF0',
        shadowOffset : {
            width:0,
            height:10,
        },
        shadowOpacity : 0.25,
        shadowRadius : 3.5,
        elevation : 5,
    },
    
})
