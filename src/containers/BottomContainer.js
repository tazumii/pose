import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from "../theme/global";

export default function BottomContainer(props) {
  return (
    <View style={[styles.container]}>
     {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
