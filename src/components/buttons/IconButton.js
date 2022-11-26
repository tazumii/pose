import { StyleSheet, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function IconButton(props) {
  return (
    <>
      <Pressable
        style={[styles.button]}
        disabled={props.disabled}
        onPress={() => alert("You pressed a button.")}
      >
        <Ionicons
          name={props.icon}
          size={props.size}
          color={props.disabled ? "gray" : "white"}
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
  },
});
