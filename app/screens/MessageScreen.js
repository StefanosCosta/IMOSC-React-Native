import React, { useState } from 'react';
import { FlatList, StyleSheet, View, ItemSeparatorComponent } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemDeleteAction from '../components/ListItemDeleteAction';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';


const initialMessages = [
    {
        id:1,
        title: 'T1',
        description: 'D1',
        image: require('../assets/nikeshoes.jpeg')
    },
    {
        id:2,
        title: 'T2',
        description: 'D2',
        image: require('../assets/nikeshoes.jpeg')
    }
];

function MessageScreen(props) {
    const [messages,setMessages] = useState(initialMessages);
    const [refreshing,setRefreshing] = useState(false);
    // const count = array[0];
    // const setCount= array[1];
    const handleDelete = message => {
        //Delete the messsage from messages array
        setMessages(messages.filter(m=> m.id != message.id)
        );

    }
    return (
        <Screen style={styles.screen}>
        <FlatList 
        data={messages}
        keyExtractor={message => message.id.toString()}
        renderItem={({item}) => (
        <ListItem
        title={item.title}
        subtitle={item.description}
        image={item.image}
        onPress={() => console.log("message selected",item)}
        renderRightActions={() => 
        <ListItemDeleteAction onPress={() => handleDelete(item)}
        />}
        /> 
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing ={refreshing}
        onRefresh={() => {
            setMessages([
            {
                id:2,
                title: 'T2',
                description: 'D2',
                image: require('../assets/nikeshoes.jpeg'),
            }
            ])
        }}
        />
        </Screen>
        
    );
}

const styles = StyleSheet.create({
   
})

export default MessageScreen;