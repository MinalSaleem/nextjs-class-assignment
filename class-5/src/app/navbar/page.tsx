'use client'
import React from 'react'
import { Button } from '../../components/ui/button'
import { useRouter } from 'next/navigation'


export default function Navbar() {
    const route = useRouter()
  return (
    <div className='bg-gradient-to-b from-[#13283f] to-[#413875] text-end h-19'>
        <Button onClick={()=>route.push('/')} className='text-xl font-b'> Home </Button>
        <Button onClick={()=>route.push('/about')} className='text-xl font-b'>About</Button>
        <Button onClick={()=>route.push('/project')} className='text-xl font-b'>Project</Button>
        <Button onClick={()=>route.push('/contact')} className='text-xl font-b'>Contact</Button>
    </div>
  )
}
