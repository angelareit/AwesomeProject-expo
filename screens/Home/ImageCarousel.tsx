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
  /*
  temperment: string,
  height: string,
  weight: string,   */
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
      //backgroundColor: 'pink',
    },
    carouselCard: {
      backgroundColor: 'rgba(224, 224, 224, 0.5)',
      shadowColor: 'rgba(0, 224, 224, 0.5)',
      borderRadius: 10,
      elevation: 10,
      shadowOffset: {
        width: 15,
        height: 10,
      },
      shadowOpacity: 0.8,
      shadowRadius: 3.84,
      justifyContent: 'center',
      alignItems: 'center',
      margin:50,
      flex: 1,
      marginHorizontal: 25
    },
    imageContainer: {
      flex: 4,
      width: '100%',
      borderTopLeftRadius: 5,
      borderTopRightRadius:5,
      paddingVertical:20,
      //backgroundColor: 'rgba(140, 167, 239, 0.5)'
    },
    image: {
      width: '100%',
      height: '100%',
      resizeMode: 'contain',
    },
    infoContainer: {
      flex: 1,
      backgroundColor: 'rgba(108, 19, 111, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    info: {

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
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.imageURL }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={{ textAlign: 'center', fontSize: 20 }}>
          {item.title}
        </Text>
        <Text style={{ textAlign: 'center', fontSize: 5 }}>
          {index}
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
