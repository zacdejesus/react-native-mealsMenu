import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import React from 'react';

const CategoryGridTile = props => {
    return (
        <TouchableOpacity style={styles.gridItem} onPress={props.onSelect}>
            <View style={{...styles.container, ...{backgroundColor: props.color}}}>
                <Text>{props.title}</Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 1,
        height: 150,
        padding: 10
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 3,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }
})

export default CategoryGridTile;