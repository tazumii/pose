import { StyleSheet, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";

export default function RoundIconButton(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Pressable
        style={[styles.button]}
        onPress={props.onPress}
      >
        <Ionicons
          name={props.icon}
          size={32}
          color="white"
        />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 52,
    height: 52,
    borderRadius: 40,
    backgroundColor: "#313131",
  },
});
