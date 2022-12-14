import { StyleSheet, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
export default function RoundIconButton(props) {
  return (
    <Pressable
      style={[styles.button, { width: props.size, height: props.size }]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Ionicons
        style={{ textAlign: "center" }}
        name={props.icon}
        size={props.iconsize}
        color={props.disabled ? "gray" : "white"}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    backgroundColor: "#313131",
  },
});
