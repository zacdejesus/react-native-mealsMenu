import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MealDetailScreen = props => {
    return (
        <View style={styles.screen }>
            <Text> the categoi scren</Text>
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

export default MealDetailScreen;