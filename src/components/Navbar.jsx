import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import { Link} from 'react-scroll'

function Navbar() {
  const [mobileNav,setMobileNav] = useState(false);
  const link = [
    {
      id:1,
      link:'home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'portfolio'
    },
    {
      id:4,
      link:'experience'
    },
    {
      id:5,
      link:'contact'
    },
  ]

  return (
    <div className='fixed w-full h-20 z-10'>
      <nav className='bg-gradient-to-b from-black to-gray-800 text-white py-3 hidden md:flex w-full'>
      <h2 className='w-1/2 mx-4 text-3xl'>Balireddy John Prakash </h2>
        <ul className='flex justify-between mx-5 w-1/2 items-center'>
       
          {
            link.map(({id,link}) => (
              <li key={id} className='text-xl text-gray-500 hover:cursor-pointer hover:scale-105 duration-150 capitalize hover:border-b-2 inline hover:border-gray-500'>
                <Link to={link} smooth duration={500}>{link}</Link>
              </li>
            ))
          }
         
          
        </ul>
      </nav>

<div className=''>
<nav className='bg-gradient-to-b from-black to-gray-800 text-white py-3
        md:hidden flex justify-between px-3'>
          <p className='font-bold mt-2'>Balireddy John Prakash</p>
          <span className='duration-300 scale-105 z-10' onClick={()=>setMobileNav(!mobileNav)}>
           {
              mobileNav ? <FaTimes size={30} className='hover:cursor-pointer '/> : <FaBars size={30} className='hover:cursor-pointer'/>
           }
            
          </span>
          {
            mobileNav && 
            <ul className='flex gap-8  flex-col absolute top-0  left-0 justify-center items-center h-screen w-full bg-cyan-500 duration-300'>
            <h2 className='absolute z-10 top-2 text-3xl text-black'>Welcome</h2>
           {
            link.map(({id,link}) => (
              <li key={id} className='text-2xl border-b-2 capitalize'>
                 <Link to={link} smooth duration={500}  onClick={()=> setMobileNav(!mobileNav)}>{link}</Link>
              </li>
            ))
          }
          </ul>
          }
          
      </nav>
</div>
     
    </div>
  )
}

export default Navbar