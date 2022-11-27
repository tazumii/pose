import { createSlice } from "@reduxjs/toolkit";

const imagePickerSlice = createSlice({
  name: "imagePicker",
  initialState: {
    image: undefined,
    height: undefined,
    width: undefined,
    opacity: 1,
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setHeight: (state, action) => {
      state.height = action.payload;
    },
    setWidth: (state, action) => {
      state.width = action.payload;
    },
    setOpacity: (state, action) => {
      state.opacity = action.payload;
    },
  },
});

export const { setImage, setHeight, setWidth, setOpacity } = imagePickerSlice.actions;

export default imagePickerSlice.reducer;
