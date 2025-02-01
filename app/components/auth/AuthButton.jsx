// 'use server'
import { doLogout, doSocialLogin } from '@/app/actions'
import React from 'react'

export const Login = () => {
  return (
    <div>
      <form action={doSocialLogin} >
        <button type="submit" name='login' value="google" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</button>
      </form>
    </div>
  )
}

export const Logout = () => {
  return (
    <div>
      <form action={doLogout} >
        <button type="submit" name='login' value="google" className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Log Out</button>
      </form>
    </div>
  )
}
