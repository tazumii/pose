import React, { useState } from "react";
import { Camera, CameraType } from "expo-camera";
import { Button, Text, StyleSheet, View  } from "react-native";

export default function PoseCamera(props) {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (<Camera style={styles.camera} type={type}>
    {props.children}
  </Camera>);
}

const styles = StyleSheet.create({
  camera: {
    flex: 1,
  },
});


