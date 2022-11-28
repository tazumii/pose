import { StyleSheet, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";

export default function IconButton(props) {
  return (
    <Pressable
      style={[styles.button]}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Ionicons
        name={props.icon}
        size={props.size}
        style={{textAlign: "center"}}
        color={props.disabled ? "gray" : props.color}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
