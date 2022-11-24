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

export default function Picture({ navigation }) {
  return (
    <SafeAreaView style={[globalStyles.container]}>
      <TopContainer>
        <IconButton icon="flash" size="24" />
        <IconButton icon="trash-bin" size="24" disabled="true" />
      </TopContainer>
      <BodyContainer>
        <Camera style={styles.camera} type={CameraType.back}></Camera>
      </BodyContainer>
      <BottomContainer>
        <IconButton icon="layers" size="28" />
        <CaptureButton />
        <RoundIconButton icon="sync" />
      </BottomContainer>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});
