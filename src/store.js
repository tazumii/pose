import { configureStore } from '@reduxjs/toolkit'
import cameraSlice from './reducers/cameraSlice'
import imagePickerSlice from './reducers/imagePickerSlice'

const store = configureStore({
  reducer: {
    camera: cameraSlice,
    imagePicker: imagePickerSlice,
  }
})

export default store