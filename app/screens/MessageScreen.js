import React from 'react';
import { FlatList, StyleSheet, View, ItemSeparatorComponent } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';

const messages = [
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
        /> 
        )}
        ItemSeparatorComponent={ListItemSeparator}
        />
        </Screen>
        
    );
}

const styles = StyleSheet.create({
   
})

export default MessageScreen;