import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LOGIN from "./Login";
import PANTALLAB from "./Pantallab";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LOGIN} />
        <Stack.Screen name="Pantalla2" component={PANTALLAB} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;