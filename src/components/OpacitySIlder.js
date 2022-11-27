import { View } from "react-native";
import Slider from "@react-native-community/slider";
import { useDispatch } from "react-redux";
import { setOpacity } from "../reducers/imagePickerSlice";

export default function OpacitySlider(props) {
  const dispatch = useDispatch();
  return (
    <View>
      <Slider
        style={{ width: 200, height: 40 }}
        minimumValue={0.1}
        maximumValue={1}
        value={1}
        minimumTrackTintColor="white"
        maximumTrackTintColor="gray"
        onValueChange={value => {
          dispatch(setOpacity(value));
        }}
      />
    </View>
  );
}
