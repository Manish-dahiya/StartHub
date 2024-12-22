import { SignUp } from '@clerk/nextjs'
import React from 'react'

function SignUpPage() {
  return (
    <div className='flex justify-center items-center h-screen w-screen pink_container '>
      <SignUp/>
    </div>
  )
}

export default SignUpPage
