import { CameraType } from "expo-camera";

export default function toggleCamera(state) {
  if (typeof state === "undefined") {
    return CameraType.front;
  }

  return state === CameraType.back ? CameraType.front : CameraType.back;
}
