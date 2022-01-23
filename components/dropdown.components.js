import React,{useState} from 'react';
import { Chip } from 'react-native-paper';
import { View,FlatList, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { appTheme } from '../constants';

const MenuDropDown = ({ navigation }) => {

    const [selected ,setSelected] = useState('1')

    const DATA = [
    {
        id: '1',
        title: 'My Notes',
        icon:'text-subject',
    },
    {
        id: '2',
        title: 'To Dos',
        icon:'check'
    },
    {
        id: '3',
        title: 'Pinned Notes',
        icon:'pin-outline'
    },
    {
        id: '4',
        title: 'Bugs and Errors',
        icon:'information-outline'
    },
    ];

    const renderItem=({item})=>(
         
        <Chip  onPress={() => {
            setSelected(item.id)
            navigation.navigate('Todos')

            }} style={{ marginRight:10, marginBottom:15, backgroundColor: selected === item.id ? appTheme.COLORS.primary : '#dddbdb'  , color:'white'}}>
            <View style={{ display:'flex',flexDirection:'row', justifyContent:'center', alignItems:'center' }}>
                <Icon name={item.icon} size={20} color={selected === item.id ? 'white':'black'} />
                <Text style={{ color:selected === item.id ? 'white':'black' }}>
                    {item.title}
                </Text>
            </View>
        </Chip>

    )
    return (
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={DATA}
            renderItem={renderItem}

        
            />

    );
};

export default MenuDropDown;

