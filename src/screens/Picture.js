import { Camera, FlashMode } from "expo-camera";
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
import * as MediaLibray from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { switchType, toggleFlash } from "../reducers/cameraSlice";
import { setHeight, setImage, setWidth } from "../reducers/imagePickerSlice";
import Layer from "../components/Layer";
import OpacitySlider from "../components/OpacitySIlder";
import { GestureHandlerRootView } from "react-native-gesture-handler";


export default function Picture({ navigation }) {
  const dispatch = useDispatch();
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
    dispatch(setHeight(result.assets[0].height));
    dispatch(setWidth(result.assets[0].width));
    dispatch(setImage(result.assets[0].uri));
  };

  const getLastImage = async () => {
    const albumName = "Recents";
    const getPhotos = await MediaLibray.getAlbumAsync(albumName);
    let getFirstPhotos = await MediaLibray.getAssetsAsync({
      first: 1,
      album: getPhotos,
      sortBy: ["creationTime"],
      mediaType: ["photo"],
    });
  };

  const { cameraType } = useSelector((state) => state.camera);
  const { flash } = useSelector((state) => state.camera);
  const { image, width, height, opacity } = useSelector(
    (state) => state.imagePicker
  );

  return (
    <SafeAreaView style={[globalStyles.container]}>
       
      <TopContainer>
        <IconButton
          icon={flash === FlashMode.off ? "flash-off" : "flash"}
          onPress={() => dispatch(toggleFlash())}
          size="24"
        />
      </TopContainer>

      <BodyContainer>
        
        <Camera style={styles.camera} type={cameraType} flashMode={flash}>
        <GestureHandlerRootView>
          {image !== undefined ? (
            <>
              <Layer style={styles.layer}
                uri={image}
                width={width}
                height={height}
                opacity={opacity}
              />
              <IconButton
                icon="trash-bin"
                size="24"
                onPress={() => dispatch(setImage(undefined))}
                style={styles.deleteBtn}
              />
              <OpacitySlider />
            </>
          ) : null}
          </GestureHandlerRootView>
        </Camera>
        
      </BodyContainer>

      <BottomContainer>
        <IconButton icon="layers" size="28" onPress={pickImageAsync} />
        <CaptureButton />
        <RoundIconButton icon="sync" onPress={() => dispatch(switchType())} />
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
});
