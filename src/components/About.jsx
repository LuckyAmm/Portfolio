import React from 'react'

function About() {
  return (
    <div className='h-screen w-full bg-gradient-to-b from-black to-gray-800 flex items-center' name="about">
        <div className=' px-10 md:ml-10 lg:max-w-screen-lg  lg:p-4 lg:mx-auto'>
            <h2 className='text-white text-4xl underline mb-3 font-bold'>About Me</h2>
            <p className='text-gray-500 mt-20 text-xl'>My name is <span className='font-bold text-white'>Balireddy John Prakash,</span>
                &nbsp;I'm an experienced software engineer who constantly seeks out innovative solutions to everyday problems. In my six months in this industry, I've honed my analytical thinking and collaboration skills, and I love working with a team. I've also had the opportunity to serve as the software engineer lead for a project with First Technology.
            </p>
        </div>
    </div>
  )
}

export default About