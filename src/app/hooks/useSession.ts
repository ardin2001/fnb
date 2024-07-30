"use client"
import { useSession } from "next-auth/react"

export default function useWrapperSession() {
    const session = useSession()
    return session
}