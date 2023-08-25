import React, { useState, useRef, useEffect } from 'react';
import { View, Text, Dimensions, Image, StyleSheet } from 'react-native';
import Carousel from 'react-native-reanimated-carousel';
import Pagination from './Pagination'
import { useSharedValue } from "react-native-reanimated";
import axios from 'axios';


interface CarouselItem {
  index: string,
  title: string,
  imageURL: string,
}

export const ImageCarousel: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;

  const [pagingEnabled, setPagingEnabled] = React.useState<boolean>(true);
  const [snapEnabled, setSnapEnabled] = React.useState<boolean>(true);
  const progressValue = useSharedValue<number>(0);

  const [dogData, setDogData] = useState<string[]>([]);

  const fetchDogData = async () => {
    try {
      const response = await axios.get(
        'https://api.thedogapi.com/v1/images/search?limit=8&has_breeds=1&api_key=live_dvuDs5mJzRl2d72HBHYxl93k1Pzdjv5qn6ubU5ZgG2VTDsreMBPhYiy4TClJffJQ'
      );
      console.log('response', response.data)
      return response.data;
    } catch (error) {
      console.error('Error fetching dog images:', error);
      return [];
    }

  };

  useEffect(() => {
    fetchDogData().then(data => setDogData(data));
  }, []);

  const carouselItems: CarouselItem[] = dogData.map((result: any, index) => ({
    index: `Item ${index + 1}`,
    title: result.breeds[0]?.name,
    imageURL: result.url,
  }));

  const styles = StyleSheet.create({
    container: {
      //      backgroundColor: 'pink',
    },
    carouselCard: {
      backgroundColor: 'rgba(224, 224, 224, 0.65)',
      shadowColor: 'rgba(0, 224, 224, 0.4)',
      borderRadius: 10,
      elevation: 10,
      shadowOffset: {
        width: 10,
        height: 10,
      },
      shadowOpacity: 0.5,
      shadowRadius: 3.84,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 15,
      flex: 1,
      padding:15,
      marginHorizontal: 25
    },
    imageContainer: {
      flex: 1,
      width: '100%',
  
      //paddingHorizontal: 20,
      backgroundColor: 'rgba(0, 0, 0, 0.2)'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    infoContainer: {
      //backgroundColor: 'rgba(108, 19, 111, 0.5)',
      justifyContent: 'center',
      marginTop:15,
      alignItems: 'center',
    },
    info: {
      textAlign: 'center',
      fontSize: 20, 
    },
    carouselContainer: {
      height: height / 2,
    },
    pagination: {
      flexDirection: "row",
      margin: 10,
      justifyContent: "center",
    }
  });

  const renderItem = ({ item, index }: { item: CarouselItem; index: number }) => (
    <View style={styles.carouselCard}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageURL }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>
          {item.title}
        </Text>
      </View>

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
