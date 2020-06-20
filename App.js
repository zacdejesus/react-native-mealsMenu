import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useScreens, enableScreens } from 'react-native-screens';
 
import MealsNavigation from './navigation/MealsNavigation';

enableScreens();

export default function App() {
  return <MealsNavigation />;
}

