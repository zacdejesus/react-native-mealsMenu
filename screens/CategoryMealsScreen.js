import React from 'react';
import { View, Text, StyleSheet, Button, Platform } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';
import Colors from '../constants/Colors';
import MealList from '../components/MealList';
import { FlatList } from 'react-native-gesture-handler';


const CategoryMealScreen = props => {

    const catId = props.navigation.getParam('categoryId');

    const displayMeals = MEALS.filter(
        meal => meal.categoryIds.indexOf(catId) >= 0
    );


    const selectedCategory = CATEGORIES.find(cat => cat.id === catId);

    return <MealList listData={displayMeals} navigation={props.navigation}/>;
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
