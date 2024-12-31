import { SignUp } from '@clerk/nextjs';
import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

async function SignUpPage() {
  const user = await currentUser();

  // Redirect signed-in users to the desired page
  if (user) {
    // console.log(user)
    redirect('/create'); // Use the `redirect` function for server-side redirection
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen pink_container">
      <SignUp />
    </div>
  );
}

export default SignUpPage;