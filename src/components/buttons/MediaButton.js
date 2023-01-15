import { useEffect } from "react";
import { StyleSheet, Image, View, Pressable, ImageBackground } from "react-native";
import * as MediaLibray from "expo-media-library";
import { useDispatch, useSelector } from "react-redux";
import { setPreviewImage } from "../../reducers/imagePickerSlice";
import { showSettings } from "../../reducers/cameraSlice";

export default function MediaButton(props) {
  const dispatch = useDispatch();
  const { previewimage } = useSelector((state) => state.imagePicker);
  const getLastImage = async () => {
    MediaLibray.requestPermissionsAsync()
    const albumName = "Recents";
    const getPhotos = await MediaLibray.getAlbumAsync(albumName);
    let getFirstPhotos = await MediaLibray.getAssetsAsync({
      first: 1,
      album: getPhotos,
      sortBy: ["creationTime"],
      mediaType: ["photo"],
    });
    
    dispatch(setPreviewImage(getFirstPhotos.assets[0].uri));
    
  };

  useEffect(() => {
    getLastImage();
  }, []);
  return (
    <Pressable style={[styles.button]} onPress={props.onPress}>
      <ImageBackground
          source={{ uri: previewimage }}
          resizeMode='cover'
          style={{height: 40, width: 40}}
          imageStyle={[styles.circle]}
        />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  circle: {

    height: 37,
    width: 37,
    borderRadius: 10,
    borderWidth: 3,
    borderColor: "white",
  },

  button: {
    alignItems: "center",
    justifyContent: "center",
  },
});
