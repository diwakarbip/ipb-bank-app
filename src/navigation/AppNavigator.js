import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoanStatusScreen from '../screens/LoanStatusScreen';
import LoanSubmittedScreen from '../screens/LoanSubmittedScreen';
import LoanCombinedScreen from '../screens/LoanCombinedScreen';
import ActiveLoansScreen from '../screens/ActiveLoansScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="LoanStatus"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="LoanStatus" component={LoanStatusScreen} />
        <Stack.Screen name="LoanSubmitted" component={LoanSubmittedScreen} />
        <Stack.Screen name="LoanCombined" component={LoanCombinedScreen} />
        <Stack.Screen name="ActiveLoans" component={ActiveLoansScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
