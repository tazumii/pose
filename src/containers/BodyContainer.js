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
    justifyContent: "center",
  },
});