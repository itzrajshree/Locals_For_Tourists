import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function WebApp() {
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
    justifyContent: 'center',
    padding: 5,
  },
  header: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'brown',
    textAlign: 'center',
    marginBottom: 5,
  },
  image: {
    width: '50%',
    height: '50%',
    aspectRatio: 16 / 9,
    marginBottom: 10,
  },
  body: {
    fontSize: 24,
    color: 'green',
    textAlign: 'center',
  },
});
