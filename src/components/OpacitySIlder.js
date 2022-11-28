import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { useDispatch } from "react-redux";
import { setOpacity } from "../reducers/imagePickerSlice";

export default function OpacitySlider(props) {
  const dispatch = useDispatch();
  return (
    <View>
      <Slider
        style={ {width: 250, height: 40, }}
        minimumValue={0.1}
        maximumValue={1}
        value={1}
        tapToSeek={true}
        minimumTrackTintColor="rgba(230,230,230,0.7)"
        maximumTrackTintColor="rgba(230,230,230,0.5)"
        thumbTintColor="rgba(230,230,230,1)"
        onValueChange={value => {
          dispatch(setOpacity(value));
        }}
      />
    </View>
  );
}
