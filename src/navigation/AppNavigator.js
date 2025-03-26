import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DashboardScreen } from '../screens/DashboardScreen';
import { WorkoutScreen } from '../screens/WorkoutScreen';
import { ProgressScreen } from '../screens/ProgressScreen';
import { CustomRoutinesScreen } from '../screens/CustomRoutinesScreen';

const Stack = createNativeStackNavigator();

export const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen name="Workout" component={WorkoutScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="CustomRoutines" component={CustomRoutinesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
