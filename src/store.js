import { configureStore } from '@reduxjs/toolkit'
import cameraSlice from './reducers/cameraSlice'

const store = configureStore({
  reducer: {
    camera: cameraSlice,
  }
})

export default store