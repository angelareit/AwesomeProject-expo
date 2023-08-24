import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';


export const ImageCarousel = () => {

  const [activeIndex, setActiveIndex] = useState(0);

  const carouselItems = [
    {
      title: "Item 1",
      text: "Text 1",
    },
    {
      title: "Item 2",
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

  const carouselRef = useRef(null);

  const renderItem = ({ item, index }) => (
    <View
      style={{
        backgroundColor: 'tomato',
        borderRadius: 5,
        height: 250,
        padding: 50,
        marginLeft: 25,
        marginRight: 25,
      }}
    >
      <Text style={{ fontSize: 30 }}>{item.title}</Text>
      <Text>{item.text}</Text>
    </View>
  );

  const onSnapToItem = (index) => {
    setActiveIndex(index);
  };

  return (
    <Carousel
      layout={"default"}
      ref={carouselRef}
      data={carouselItems}
      sliderWidth={300}
      itemWidth={300}
      renderItem={renderItem}
      onSnapToItem={onSnapToItem}
    />
  );
}