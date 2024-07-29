"use client"
import { useSession, signIn, signOut } from "next-auth/react"
import Session from "../../hooks/useSession"

export default function Component() {
  const session:any = Session()
  console.log(session)
  if (session) {
    return (
      <>
       <p> Signed in as</p> {session?.data?.user?.email} <br />
        <button onClick={() => signOut()}>Sign out</button>
      </>
    )
  }
  return (
    <>
      <p>Not signed in</p> <br />
      <button onClick={() => signIn()}>Sign in</button>
    </>
  )
}