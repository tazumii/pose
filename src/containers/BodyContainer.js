import { Text, StyleSheet, View } from "react-native";
import { globalStyles } from "../theme/global";

export default function BodyContainer(props) {
  return (
    <View style={[styles.container]}>
        {props.children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    borderRadius: 40,
    justifyContent: "center",
  },
});