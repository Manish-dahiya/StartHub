import { SignedIn, SignedOut, SignInButton, UserButton, useUser } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { auth } from "@clerk/nextjs/server";

async function Navbar() {
  const {userId}= await auth()
  return (
    <header className='px-5 py-3 bg-white shadow-sm font-work-sans'>
      <nav className='flex justify-between items-center'>
        <Link href={"/"}>
            ❤️StartHub
        </Link>
        <div className='flex justify-center gap-10 items-center'>
            <Link href={"/create-startup"}>Create</Link>
            <button >Logout</button>
            {/* <Link href={"/sign-up"}>Sign-up</Link> */}
            <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
