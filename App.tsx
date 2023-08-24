/* import { StatusBar } from 'expo-status-bar';
import HomeScreen from './screens/Home/HomeScreen';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (<>
    <HomeScreen />
    <StatusBar style="auto" />
  </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ImageCarousel from './screens/Home/ImageCarousel';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
     <ImageCarousel/>
    </View>
  );
};

export default App;



