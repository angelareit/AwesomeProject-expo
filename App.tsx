import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import ImageCarousel from './screens/Home/ImageCarousel';
import HomeScreen from './screens/Home/HomeScreen';

const App: React.FC = () => {
  return (
    <View style={{ flex: 1 }}>
     <HomeScreen/>
    </View>
  );
};

export default App;



