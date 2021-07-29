import React from 'react';
import { Image, View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';
import ListItem from '../components/ListItem';
import colors from '../config/colors';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image source={require('../assets/nikeshoes.jpeg')} 
            style={styles.image}/>
            <View style={styles.detailsContainer}>
            <AppText style={styles.title}>Red-Black nike shoes</AppText>
            <AppText style={styles.price}>£100</AppText>
            <View style={styles.userContainer}>
            <ListItem
            image={require("../assets/nikeshoes.jpeg")}
            title="Nike"
            subtitle="5 Listings"
            />
            </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: 300,
        
    },
    detailsContainer:{
        padding: 20,

    },
    title:{
        fontSize:24,
        fontWeight: "500",
        color: colors.black,
    },
    price:{
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    userContainer: {
        marginVertical: 40,
    }

})

export default ListingDetailsScreen;