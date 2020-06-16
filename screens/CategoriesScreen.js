import React from 'react';
import { View, Text, StyleSheet, Button    } from 'react-native';

const CategoriesScreen = props => {
    console.log(props); 
    return (
        <View style={styles.screen}>
            <Text> the categoi scren</Text>
            <Button title='go to meals' onPress={ () => {
                 props.navigation.navigate({routeName: 'CategoryMeals'})
            } }/>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center' 
    }
}); 

export default CategoriesScreen;
