import React from 'react';
import {View, StyleSheet, Image, ImageComponent, Touchable, TouchableOpacity, TouchableWithoutFeedback, TouchableHighlight} from 'react-native';
import colors from '../config/colors';
import AppText from './AppText';
import Swipable from "react-native-gesture-handler/Swipeable";

function ListItem({title,subtitle,image,IconComponent, onPress, renderRightActions}) {
    return (
        <Swipable renderRightActions={renderRightActions}>
        <TouchableHighlight 
        underlayColor={colors.light}
        onPress={ onPress }>      
            <View style={styles.container}>
                {IconComponent}
                {image && <Image style={styles.image} source={image} />}
                <View style= {styles.detailsContainer}>
                    <AppText style={styles.title}>{title}</AppText>
                    {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
                </View>
            </View>
        </TouchableHighlight>
        </Swipable>
  
    );
}

const styles = StyleSheet.create({
    container:{
        flexDirection: "row",
        padding: 10,
        backgroundColor: colors.white,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius:35,
    },
    title: {
        fontWeight: "500",
    },
    subtitle:{
        color: colors.medium
    },
    detailsContainer: {
        marginLeft: 10,
        justifyContent: "center",
    }
})


export default ListItem;