import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ImageCarousel } from './ImageCarousel';

export default HomeScreen = () => {

  return (
    <View style={styles.container}>
      <ImageCarousel/>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
