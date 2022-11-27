import { createSlice } from "@reduxjs/toolkit";
import { CameraType, FlashMode } from "expo-camera";

const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    cameraType: CameraType.back,
    flash: FlashMode.off, 
  },
  reducers: {
    switchType: (state) => {
      state.cameraType === CameraType.back
        ? (state.cameraType = CameraType.front)
        : (state.cameraType = CameraType.back);
    },
    toggleFlash: (state) => {
      state.flash === FlashMode.off
        ? (state.flash = FlashMode.on)
        : (state.flash = FlashMode.off);
    },
  },
});

export const { switchType, toggleFlash } = cameraSlice.actions;

export default cameraSlice.reducer;
