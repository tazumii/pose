import { Camera, CameraType } from "expo-camera";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CaptureButton from "../components/buttons/CaptureButton";
import IconButton from "../components/buttons/IconButton";
import RoundIconButton from "../components/buttons/RoundIconButton";
import BodyContainer from "../containers/BodyContainer";
import BottomContainer from "../containers/BottomContainer";
import TopContainer from "../containers/TopContainer";
import { globalStyles } from "../theme/global";
import Slider from "@react-native-community/slider";
import * as ImagePicker from "expo-image-picker";
import { useSelector } from "react-redux";
import { switchType, toggleFlash } from "../reducers/cameraSlice";

export default function Picture({ navigation }) {
  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });
  };
  const { cameraType } = useSelector((state) => state.camera);
  const { flash } = useSelector((state) => state.camera);

  return (
    <SafeAreaView style={[globalStyles.container]}>
      <TopContainer>
        <IconButton icon="flash" size="24" />
        <IconButton icon="trash-bin" size="24" disabled="true" />
      </TopContainer>
      <BodyContainer>
        <Camera style={styles.camera} type={cameraType} flashMode={flash}>
        <Slider
          style={[styles.slider]}
          tapToSeek={true}
          minimumValue={0}
          maximumValue={1}
          minimumTrackTintColor="#FFFFFF"
          maximumTrackTintColor="gray"
        />
        </Camera>
      </BodyContainer>
      <BottomContainer>
        <IconButton icon="layers" dispatch={toggleFlash()} size="28"  />
        <CaptureButton />
        <RoundIconButton icon="sync" dispatch={switchType()} />
      </BottomContainer>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
    justifyContent: "center",
    alignItems: 'flex-end',
  },
  slider: {
    marginRight: -120,
    height: 50, 
    width: 300,
    transform: [{ rotateZ: "-90deg" }],
  },
});
