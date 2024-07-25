import { Provider } from 'react-redux';
import storeUser from '../store/user/store';
export default function WrapperRedux({ children }: { children: React.ReactNode }) {
    return (
        <Provider store={storeUser}>
            {children}
        </Provider>
    )
}