import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';

interface CarouselItem {
  title: string;
  text: string;
}

export const ImageCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const width = Dimensions.get('window').width;

  const carouselItems: CarouselItem[] = [
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item Two",
      text: "Text 2",
    },
    {
      title: "Item 3",
      text: "Text 3",
    },
    {
      title: "Item 4",
      text: "Text 4",
    },
    {
      title: "Item 5",
      text: "Text 5",
    },
  ];


  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => (
    <View style={styles.carouselCard}>
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
      <Text>Hello There</Text>

      <Text>{item.text}</Text>
    </View>
  );

  const onSnapToItem = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <View style={styles.container}>
       <Carousel
        loop
        width={width}
        height={width / 2}
        data={[...new Array(6).keys()]}
        onSnapToItem={(index) => console.log('current index:', index)}
        renderItem={({ index }) => (
          <View
            style={{
              flex: 1,
              borderWidth: 1,
              backgroundColor: 'pink',
              justifyContent: 'center',
            }}
          >
            <Text style={{ textAlign: 'center', fontSize: 30 }}>
              {index}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  carouselCard: {
    backgroundColor: 'tomato',
    borderRadius: 5,
    height: 250,
    padding: 50,
    marginLeft: 25,
    marginRight: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ImageCarousel;
