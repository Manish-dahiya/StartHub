import { SignIn } from '@clerk/nextjs'
import React from 'react'

function SignInPage() {
  return (
    <div className='flex justify-center items-center h-screen w-screen pink_container '>
      <SignIn   />
    </div>
  )
}

export default SignInPage
