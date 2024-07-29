'use client'
import { createContext } from 'react'
import useStatus from '../hooks/useStatus';

const ThemeContext = createContext({})
function ThemeContextProvider({ children }: any) {
    const [theme, setTheme] = useStatus();
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext}
export default ThemeContextProvider