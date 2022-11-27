import { StyleSheet, Image, View } from "react-native";

export default function Layer(props) {

  return (
    <View>
      <Image
        source={{ uri: props.uri }}
        resizeMode="contain"
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {},
});
