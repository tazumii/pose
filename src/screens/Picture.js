import { AutoFocus, Camera, FlashMode } from "expo-camera";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CaptureButton from "../components/buttons/CaptureButton";
import IconButton from "../components/buttons/IconButton";
import RoundIconButton from "../components/buttons/RoundIconButton";
import BodyContainer from "../containers/BodyContainer";
import BottomContainer from "../containers/BottomContainer";
import TopContainer from "../containers/TopContainer";
import { globalStyles } from "../theme/global";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";
import {
  showSettings,
  switchType,
  toggleAutoFocus,
  toggleFlash,
} from "../reducers/cameraSlice";
import { setImage, setOpacity, showLayer } from "../reducers/imagePickerSlice";
import Layer from "../components/Layer";
import OpacitySlider from "../components/OpacitySIlder";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import MediaButton from "../components/buttons/MediaButton";
import ModelContainer from "../containers/ModalContainer";

export default function Picture({ navigation }) {
  const dispatch = useDispatch();
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    dispatch(setImage(result.assets[0].uri));
    dispatch(showSettings(true));
  };

  const { cameraType, flash, autofocus, settings } = useSelector(
    (state) => state.camera
  );
  const { image, opacity, show } = useSelector((state) => state.imagePicker);

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <TopContainer>
        <IconButton
          icon={flash === FlashMode.off ? "flash-off" : "flash"}
          onPress={() => dispatch(toggleFlash())}
          size="20"
          color="white"
        />
        <RoundIconButton
          icon={settings ? "chevron-down" : "chevron-up"}
          iconsize={24}
          size={32}
          disabled={image !== undefined ? false : true}
          onPress={() => dispatch(settings ? showSettings(false) : showSettings(true))}
        />
        <IconButton
          icon="scan"
          size={24}
          onPress={() => dispatch(toggleAutoFocus())}
          color={autofocus === AutoFocus.on ? "yellow" : "white"}
        />
      </TopContainer>

      {settings ? (
        <ModelContainer>
          <OpacitySlider />
          <IconButton
            icon={show ? "eye" : "eye-off"}
            size={28}
            onPress={() => {
              dispatch(showLayer());
            }}
            color="white"
          />
          <IconButton
            icon="close"
            size={32}
            onPress={() => {
              dispatch(setImage(undefined));
              dispatch(showSettings(false));
              dispatch(setOpacity(100));
            }}
            color="white"
          />
        </ModelContainer>
      ) : null}

      <BodyContainer>
        <Camera
          style={styles.camera}
          type={cameraType}
          flashMode={flash}
          autoFocus={autofocus}
        >
          {image !== undefined ? (
            <GestureHandlerRootView style={styles.layer}>
              {image !== undefined ? (
                <Layer style={styles.layer} uri={image} opacity={opacity} />
              ) : null}
            </GestureHandlerRootView>
          ) : null}
        </Camera>
      </BodyContainer>

      <BottomContainer>
        <MediaButton
          onPress={() => {
            pickImageAsync();
          }}
        />
        <CaptureButton />
        <RoundIconButton
          icon="sync"
          iconsize={32}
          size={40}
          onPress={() => dispatch(switchType())}
        />
      </BottomContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  layer: {
    position: "absolute",
  },
});
