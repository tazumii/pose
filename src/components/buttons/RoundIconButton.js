import { StyleSheet, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RoundIconButton(props) {
  return (
    <>
      <Pressable
        style={[styles.button]}
        onPress={() => alert("You pressed a button.")}
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
