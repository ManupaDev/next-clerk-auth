import { SignIn } from '@clerk/nextjs/app-beta';

export default function Page() {
  return  ( 
  <div className='flex justify-center items-center h-screen'>
    <SignIn />
  </div>);
}