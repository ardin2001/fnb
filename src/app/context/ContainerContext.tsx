"use client"
import { createContext } from 'react'

const ContentContext = createContext({})
export function ContentContextProvider({ children, contentRef }: any) {
    return (
        <ContentContext.Provider value={contentRef}>
            {children}
        </ContentContext.Provider>
    )
}

export {ContentContext}
export default ContentContextProvider