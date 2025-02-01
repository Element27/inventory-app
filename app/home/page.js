import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation';
import Image from 'next/image';
import { Logout } from '../components/auth/AuthButton';

export default async function HomePage() {

  const session = await auth();

  if (!session) {
    redirect('/');
  }

  return (
    <div className='flex flex-col items-center justify-center min-h-screen py-2'>

      <h1>{session?.user?.name}</h1>
      <Image
        src={session?.user?.image}
        alt={session?.user?.name}
        width={100}
        height={100}
        className='rounded-full'
      />

      <Logout />


    </div>
  )
}
