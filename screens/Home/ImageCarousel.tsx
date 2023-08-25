import React, { useState, useRef } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './Pagination'
import { useSharedValue } from "react-native-reanimated";


interface CarouselItem {
  title: string;
  text: string;
}

export const ImageCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

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

  const styles = StyleSheet.create({
    container: {
      //backgroundColor: 'pink',
    },
    carouselCard: {
      backgroundColor: 'tomato',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      flex:1,
      marginHorizontal: 25
    },
    carouselContainer: {
      height: height / 2 + 80,
    },
    pagination: {
      //backgroundColor: 'aqua',
      flexDirection: "row",
      margin: 10,
      justifyContent: "center",
    }
  });

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => (
    <View style={styles.carouselCard}>
      <Text style={{ fontSize: 20 }}>{item.title}</Text>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        {carouselItems[index].text}
      </Text>
      <Text style={{ textAlign: 'center', fontSize: 20 }}>
        {index}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.carouselContainer}>
        <Carousel
          loop
          width={width}
          data={carouselItems}
          onSnapToItem={(index) => console.log('current index:', index)}
          renderItem={renderItem}
          onProgressChange={(_, absoluteProgress) =>
            (progressValue.value = absoluteProgress)
          }
        />
      </View>
      <View style={styles.pagination}>
        {carouselItems.map((backgroundColor, index) => {
          return (
            <Pagination
              animValue={progressValue}
              index={index}
              key={index}
              isRotate={true}
              length={carouselItems.length}
            />
          );
        })}
      </View>
    </View>
  );
};


export default ImageCarousel;
