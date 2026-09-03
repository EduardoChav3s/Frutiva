import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './src/screens/HomeScreen';
import CarrinhoScreen from './src/screens/CarrinhoScreen';
import PedidoScreen from './src/screens/PedidoScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Frutiva' }}
        />

        <Stack.Screen
          name="Carrinho"
          component={CarrinhoScreen}
          options={{ title: 'Meu Carrinho' }}
        />

        <Stack.Screen
          name="Pedido"
          component={PedidoScreen}
          options={{ title: 'Meu Pedido' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}