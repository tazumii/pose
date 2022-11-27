import { createSlice } from "@reduxjs/toolkit";

const imagePickerSlice = createSlice({
  name: "imagePicker",
  initialState: {
    image: undefined,
  },
  reducers: {
    setImage: (state, action) => {
      state.image = action.payload;
    }
  },
});

export const { setImage } = imagePickerSlice.actions;

export default imagePickerSlice.reducer;
