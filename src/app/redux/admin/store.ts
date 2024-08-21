import { configureStore } from '@reduxjs/toolkit'
import { reducerProduct } from './productSlice'
import logger from 'redux-logger'

const storeAdmin = configureStore({
  reducer: {
    products: reducerProduct,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,),
})
export default storeAdmin;