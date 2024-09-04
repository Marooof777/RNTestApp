import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const PlaceItem = ({ place, onToggleVisited, onSelect }) => {
  return (
    <View style={[styles.placeItem, place.visited ? styles.visited : styles.unvisited]}>
      <Image source={{ uri: place.image }} style={styles.image} />
      <Text style={[styles.name, place.visited ? styles.visitedText : styles.unvisitedText]}>{place.name}</Text>
      <Text style={[styles.description, place.visited ? styles.visitedText : styles.unvisitedText]}>
        {place.description}
      </Text>
      <Button title={place.visited ? 'Unmark as Visited' : 'Mark as Visited'} onPress={onToggleVisited} />
      <Button title="View Details" onPress={onSelect} />
    </View>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  visited: {
    backgroundColor: '#d4edda',
  },
  unvisited: {
    backgroundColor: '#f8d7da',
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
  },
  visitedText: {
    color: '#155724',
  },
  unvisitedText: {
    color: '#721c24',
  },
});

export default PlaceItem;
