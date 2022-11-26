import { StyleSheet, View, Pressable } from "react-native";

export default function CaptureButton() {
  return (
    <>
      <Pressable style={[styles.button]}  onPress={() => alert('You pressed a button.')}>
        <View style={[styles.circle]} />
      </Pressable>
    </>
  );
}

const styles = StyleSheet.create({

  circle: {
    position: "relative",
    height: 52,
    width: 52,
    borderRadius: 40,
    backgroundColor: "#fff",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 64,
    height: 64,
    borderRadius: 40,
    borderWidth: 3,
    borderColor: "#fff",
  },
});
