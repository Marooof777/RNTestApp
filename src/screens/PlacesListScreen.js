// src/screens/PlacesListScreen.js
import React from 'react';
import { View, FlatList, StyleSheet, Button } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import PlaceItem from '../components/PlaceItem';
import { toggleVisited } from '../redux/placesSlice';

const PlacesListScreen = ({ navigation }) => {
  const places = useSelector((state) => state.places.places);
  const dispatch = useDispatch();

  return (
    <View style={styles.screen}>
      <Button
        title="Suggest a Random Place"
        onPress={() => navigation.navigate('RandomPlace')}
        color="#841584"
      />
      <FlatList
        data={places}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <PlaceItem
            place={item}
            onToggleVisited={() => dispatch(toggleVisited(item.id))}
            onSelect={() => navigation.navigate('PlaceDetails', { placeId: item.id })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
  },
});

export default PlacesListScreen;
