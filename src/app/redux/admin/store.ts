import { configureStore } from '@reduxjs/toolkit'
import { reducerProduct } from './productSlice'
import { reducerUser } from './userSlice'
import logger from 'redux-logger'

const storeAdmin = configureStore({
  reducer: {
    products: reducerProduct,
    users : reducerUser
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger,),
})
export default storeAdmin;