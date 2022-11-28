import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from "../theme/global";
import { BlurView } from 'expo-blur'

export default function ModelContainer(props) {
  return (
    <BlurView style={[styles.container]} intensity={20}>
      {props.children}
    </BlurView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    position: "absolute",
    marginTop: 48,
    height: 48,
    backgroundColor: "rgba(0,0,0,0.3)",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    zIndex: 1,
  },
});
