"use client"
import { Provider } from 'react-redux';
import storeUser from '../redux/user/store';
export default function WrapperRedux({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={storeUser}>
            {children}
        </Provider>
    )
}