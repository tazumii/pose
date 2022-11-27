import { StyleSheet, View, Pressable } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useDispatch } from "react-redux";

export default function IconButton(props) {
  const dispatch = useDispatch();

  return (
    <>
      <Pressable
        style={[styles.button]}
        onPress={() => dispatch(props.dispatch)}
        disabled={props.disabled}
        
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
