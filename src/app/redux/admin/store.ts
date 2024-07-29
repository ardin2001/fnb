import { configureStore } from '@reduxjs/toolkit'
import { reducerProduct } from './productSlice'

const storeAdmin = configureStore({
  reducer: {
    products: reducerProduct,
  },
})
export default storeAdmin;