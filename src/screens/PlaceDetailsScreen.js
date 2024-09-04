// src/screens/PlaceDetailsScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

const PlaceDetailsScreen = ({ route }) => {
  const { placeId } = route.params;
  const place = useSelector((state) =>
    state.places.places.find((place) => place.id === placeId)
  );

  if (!place) {
    return (
      <View style={styles.screen}>
        <Text>Place not found!</Text>
      </View>
    );
  }

  return (
    <View style={styles.screen}>
      <Text style={styles.name}>{place.name}</Text>
      <Text style={styles.description}>{place.description}</Text>
      {/* Image and other details can go here */}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
  },
});

export default PlaceDetailsScreen;
