import { createSlice } from "@reduxjs/toolkit";
import { AutoFocus, CameraType, FlashMode } from "expo-camera";

const cameraSlice = createSlice({
  name: "camera",
  initialState: {
    cameraType: CameraType.back,
    flash: FlashMode.off,
    autofocus: AutoFocus.on,
    settings: false,
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
    toggleAutoFocus: (state) => {
      state.autofocus === AutoFocus.on
        ? (state.autofocus = AutoFocus.off)
        : (state.autofocus = AutoFocus.on);
    },
    showSettings: (state, action) => {
      state.settings = action.payload;
    },
  },
});

export const { switchType, toggleFlash, toggleAutoFocus, showSettings } = cameraSlice.actions;

export default cameraSlice.reducer;
