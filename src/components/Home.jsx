import React from 'react'
import HeroImg from './assets/hero.jpg'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name="home" className='bg-gradient-to-b from-black to-gray-800 w-full h-screen flex justify-center items-center '>
        <div className=' flex flex-col md:flex-row max-w-screen-lg mx-auto justify-center items-center'>
            <div>
                 <p className='text-4xl sm:text-7xl font-bold max-w-md px-3 text-white'>I'm Full stack Developer</p>
                 <section className='text-zinc-300 max-w-md py-5 px-3'>
                    I worked in a mobiclo tech which is present in banglore(Karnataka). The project i worked is <span className='text-white font-bold'>Aces</span> which is related to Saudhi Arabia <span className='flex justify-center items-center mt-5 hover:duration-200 hover:scale-110 '><button className='w-fit px-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-md ml-5'> <Link to="portfolio" smooth duration={500}>More about Portfolio</Link></button> </span>
                 </section>
            </div>
            <img src={HeroImg} alt="my profile" className='w-64 h-68 mx-auto md:mx-10 rounded-2xl'/>
        </div>
    </div>
  )
}

export default Home