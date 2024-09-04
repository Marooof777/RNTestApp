import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import PlacesListScreen from './src/screens/PlacesListScreen';
import PlaceDetailsScreen from './src/screens/PlaceDetailsScreen';
import RandomPlaceScreen from './src/screens/RandomPlaceScreen';
import store from './src/redux/store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="PlacesList">
          <Stack.Screen name="PlacesList" component={PlacesListScreen} options={{ title: 'Historical Places' }} />
          <Stack.Screen name="PlaceDetails" component={PlaceDetailsScreen} options={{ title: 'Place Details' }} />
          <Stack.Screen name="RandomPlace" component={RandomPlaceScreen} options={{ title: 'Random Place' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
