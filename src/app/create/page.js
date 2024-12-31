import StartupForm from '@/components/StartupForm';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

async function page() {
    const user= await currentUser()

    if(!user){
        redirect("/signup");
    }

  return (
    <>
      <section className='pink_container !min-h-[230px]'>
            <h1 className='heading'>Submit Your Startup Pitch</h1>
      </section>
     <section className='flex justify-center'>
        <StartupForm/>
     </section>
    </>
  )
}

export default page
