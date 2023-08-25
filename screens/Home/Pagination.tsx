import * as React from "react";
import { View } from "react-native";
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from "react-native-reanimated";

export const Pagination: React.FC<{
  index: number
  length: number
  animValue: Animated.SharedValue<number>
  isRotate?: boolean
}> = (props) => {
  const { animValue, index, length, isRotate } = props;
  const height = 10;

  const animStyle = useAnimatedStyle(() => {
    let inputRange = [index - 1, index, index + 1];
    let outputRange = [-height, 0, height];

    if (index === 0 && animValue?.value > length - 1) {
      inputRange = [length - 1, length, length + 1];
      outputRange = [-height, 0, height];
    }

    return {
      transform: [
        {
          translateY: interpolate(
            animValue?.value,
            inputRange,
            outputRange,
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  }, [animValue, index, length]);
  
  return (
    <View
      style={{
        backgroundColor: 'rgba(53, 113, 101, 0.25)',
        width: height, 
        height,
        borderRadius: 50,
        flexDirection: "row",
        overflow: "hidden",
        margin: 3,
        transform: [
          {
            rotateZ: isRotate ? "90deg" : "0deg",
          },
        ],
      }}
    >
      <Animated.View
        style={[
          {
            borderRadius: 50,
            backgroundColor: 'rgba(66, 160, 141, 0.85)',
            flex: 1,
          },
          animStyle,
        ]}
      />
    </View>
  );
};

export default Pagination;
