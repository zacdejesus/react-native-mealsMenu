import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';


const MealItem = props => {
    return (
        <View style={styles.mealItem}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View>
                    <View style={{...styles.mealRow, ...styles.mealHeader}}>
                            <ImageBackground source={{uri: props.image}} style={styles.bgImage}>
                                <Text style={styles.title} numberOfLines={1}>{props.title}</Text>
                            </ImageBackground>
                    </View>
                    <View style={{ ...styles.mealRow, ...styles.mealDetail}}>
                        <Text>{props.duration}</Text>
                        <Text>{props.complexity.toUpperCase()}</Text>
                        <Text>{props.affordability.toUpperCase()}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    mealItem: {
        height: 200,
        width: '100%',
        backgroundColor: '#f5f5f5',
        borderRadius: 10,
        overflow: 'hidden'
    },
    mealRow: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#ccc'
    },
    mealRow: {
        flexDirection: 'row'
    },
    bgImage: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',

    },
    mealHeader: {
        height: '90%'
    },
    mealDetail: {
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    title: {
        fontSize: 20,
        color: 'white',
        backgroundColor: 'rgba(0,0,0,0.7)',
        paddingVertical: 5,
        paddingHorizontal: 12,
        textAlign: 'center'
    }
});

export default MealItem; 