import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function MobileApp() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Locals for Tourists</Text>
      <Image
        source={require('./assets/background-image-travel.jpg')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.body}>Explore with real locals, anywhere.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBD1A2',
    alignItems: 'center',
    padding: 50,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'brown',
    textAlign: 'center',
    marginVertical: 20,
  },
  image: {
    width: '50%',
    height: '70%',
    aspectRatio: 3 / 2,
    borderRadius: 10,
    marginVertical: 10,
  },
  body: {
    fontSize: 18,
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
  },
});