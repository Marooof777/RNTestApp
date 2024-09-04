// src/screens/RandomPlaceScreen.js
import React from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { suggestRandomPlace } from '../redux/placesSlice';

const RandomPlaceScreen = () => {
  const dispatch = useDispatch();
  const randomPlace = useSelector((state) => state.places.randomPlace);

  const suggestPlace = () => {
    dispatch(suggestRandomPlace());
  };

  return (
    <View style={styles.screen}>
      <Button title="Suggest a Random Place" onPress={suggestPlace} />
      {randomPlace && (
        <View style={styles.suggestion}>
          <Text style={styles.name}>{randomPlace.name}</Text>
          <Text style={styles.description}>{randomPlace.description}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
  },
  suggestion: {
    marginTop: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
    marginTop: 10,
  },
});

export default RandomPlaceScreen;
