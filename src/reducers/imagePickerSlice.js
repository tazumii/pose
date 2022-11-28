import { createSlice } from "@reduxjs/toolkit";

const imagePickerSlice = createSlice({
  name: "imagePicker",
  initialState: {
    image: undefined,
    previewimage: undefined,
    opacity: 100,
    show: false,
  },
  reducers: {
    setPreviewImage: (state, action) => {
      state.previewimage = action.payload;
    },
    setImage: (state, action) => {
      state.image = action.payload;
    },
    setOpacity: (state, action) => {
      state.opacity = action.payload;
    },
    showLayer: (state) => {
      state.show ? (state.show = false) : (state.show = true);
    },
  },
});

export const { setPreviewImage, setImage, setOpacity, showLayer } =
  imagePickerSlice.actions;

export default imagePickerSlice.reducer;
