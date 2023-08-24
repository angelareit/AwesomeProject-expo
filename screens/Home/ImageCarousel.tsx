import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './Pagination'

import Animated, { useSharedValue } from "react-native-reanimated";


interface CarouselItem {
  title: string;
  text: string;
}

export const ImageCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const [isVertical, setIsVertical] = React.useState(false);
  const [autoPlay, setAutoPlay] = React.useState(false);
  const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
  const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
  const progressValue = useSharedValue<number>(0);


  const carouselItems: CarouselItem[] = [
    {
      title: "Item 1",
      text: "Pasta",
    },
    {
      title: "Item Two",
      text: "Carrots",
    },
    {
      title: "Item 3",
      text: "Apples",
    },
    {
      title: "Item 4",
      text: "Banana",
    },
    {
      title: "Item 5",
      text: "Pizza",
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
        data={carouselItems}
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
              {carouselItems[index].text}
            </Text>
          </View>
        )}
      />

      {carouselItems.map((backgroundColor, index) => {
        return (
          <Pagination
            animValue={progressValue}
            index={index}
            key={index}
            isRotate={isVertical}
            length={carouselItems.length}
          />
        );
      })}
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
