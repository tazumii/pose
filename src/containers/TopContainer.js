import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from "../theme/global";

export default function TopContainer(props) {
  return (
    <View style={[styles.container]}>
      {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: "7%",
    backgroundColor: "#141414",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: 1,
  },
});
