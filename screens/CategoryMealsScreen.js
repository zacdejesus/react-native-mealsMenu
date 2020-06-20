import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';

import { CATEGORIES } from '../data/dummy-data';
import  Colors  from '../constants/Colors';


const CategoryMealScreen = props => {
    const catId =  props.navigation.getParam('categoryId');
     
    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return (
        <View style={styles.screen }>
            <Text> the categoies Screen!</Text>
            <Text>{selectedCategory.title}</Text>
            <Button  title="Go to Details" onPress={() => {
                props.navigation.navigate({
                    routeName: 'MealDetail'
                });
            }} />
            <Button title="Go back" onPress= {() => {
                props.navigation.pop();
            }} />
        </View>
    );
};

CategoryMealScreen.navigationOptions = navigationData => {

    const catId = navigationData.navigation.getParam('categoryId');

    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
    console.log(selectedCategory.title)
    return { 
        headerTitle: selectedCategory.title,
        headerStyle: {
            backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : 'white' 
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : 'black'
    };
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
});

export default CategoryMealScreen;
