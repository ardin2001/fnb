"use client"

import { createContext } from 'react'
import UseStatus from '../hooks/UseStatus'

const SidebarContext = createContext({})
export function SidebarContextProvider({ children }: any) {
    const [open, setOpen] = UseStatus();
    return (
        <SidebarContext.Provider value={{ open, setOpen }}>
            {children}
        </SidebarContext.Provider>
    )
}

export {SidebarContext}
export default SidebarContextProvider