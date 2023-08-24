import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageCarousel } from './ImageCarousel';

export default HomeScreen = () => {

  return (
    <View style={styles.container}>
      <Text>This is a home screen</Text>

      <ImageCarousel/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
