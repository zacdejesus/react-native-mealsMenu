import React from 'react';
import MealList from '../components/MealList';
import { StyleSheet } from 'react-native';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = props => {
    const favMeals = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2")
    return <MealList listData={favMeals} navigation={props.navigation}/>;
};


FavoritesScreen.navigationOptions = navigationData => {

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

export default FavoritesScreen;
