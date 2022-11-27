import { Camera, CameraType, FlashMode } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet } from "react-native";
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
import { setImage } from "../reducers/imagePickerSlice";
import Layer from "../components/Layer";

export default function Picture({ navigation }) {
  const dispatch = useDispatch();
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });
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
  const { image } = useSelector((state) => state.imagePicker);

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <TopContainer>
        <IconButton
          icon={flash === FlashMode.off ? "flash-off" : "flash"}
          onPress={() => dispatch(toggleFlash())}
          size="24"
        />
        <IconButton
          icon="trash-bin"
          size="24"
          disabled={image !== undefined ? false : true}
          onPress={() => dispatch(setImage(undefined))}
        />
      </TopContainer>
      <BodyContainer>
        {image !== undefined ? <Layer uri={image} /> : null}
        <Camera
          style={styles.camera}
          type={cameraType}
          flashMode={flash}
        ></Camera>
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
    alignItems: "flex-end",
  },
  slider: {
    marginRight: -120,
    height: 50,
    width: 300,
    transform: [{ rotateZ: "-90deg" }],
  },
});
