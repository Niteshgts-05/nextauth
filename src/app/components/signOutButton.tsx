"use client"
import React from 'react'
import {signOut} from 'next-auth/react'

export default function SignOutButton() {
  return (
    <div>
        <button className='bg-orange-300 rounded-md p-2' onClick={()=>signOut({callbackUrl:"/", redirect:true})}>Sign out</button>
    </div>
  )
}
