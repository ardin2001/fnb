import { configureStore } from '@reduxjs/toolkit'
import { reducerProduct } from './productSlice'

const storeUser = configureStore({
  reducer: {
    products: reducerProduct,
  },
})
export default storeUser;