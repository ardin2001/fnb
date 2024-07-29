"use client"
import { useSession } from "next-auth/react"

export default function hookSession() {
    const session = useSession()
    return session
}