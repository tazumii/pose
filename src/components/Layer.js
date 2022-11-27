import { Image, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";
import {
  GestureDetector,
  Gesture,
} from "react-native-gesture-handler";

export default function Layer(props) {
  const aspectRatio = props.width / props.height;

  const scale = useSharedValue(1);
  const savedScale = useSharedValue(1);
  const pinchGesture = Gesture.Pinch()
    .onUpdate((e) => {
      scale.value = savedScale.value * e.scale;
    })
    .onEnd(() => {
      savedScale.value = scale.value;
    });

  const positionX = useSharedValue(0);
  const positionY = useSharedValue(0);
  const savedX = useSharedValue(0);
  const savedY = useSharedValue(0);
  const panGesture = Gesture.Pan()
    .onUpdate((e) => {
      positionX.value = savedX.value + e.translationX;
      positionY.value = savedY.value + e.translationY;
    })
    .onEnd(() => {
      savedX.value = positionX.value;
      savedY.value = positionY.value;
    });

    const rotation = useSharedValue(0);
    const savedRotation = useSharedValue(0);
    const rotationGesture = Gesture.Rotation()
  .onUpdate((e) => {
    rotation.value = savedRotation.value + e.rotation;
  })
  .onEnd(() => {
    savedRotation.value = rotation.value;
  });

  const composed = Gesture.Simultaneous(panGesture, pinchGesture, rotationGesture);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: positionX.value },
      { translateY: positionY.value },
      { rotateZ: `${(rotation.value / Math.PI) * 180}deg` },
      { scale: scale.value },
    ],
  }));

  return (
    <GestureDetector gesture={composed}>
      <Animated.View style={[animatedStyle]}>
        <Image
          source={{ uri: props.uri }}
          resizeMode="contain"
          style={{
            width: aspectRatio * 500,
            height: aspectRatio * 500,
            opacity: props.opacity,
          }}
        />
      </Animated.View>
    </GestureDetector>
  );
}
