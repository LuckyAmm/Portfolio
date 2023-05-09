import React from 'react'

const Contact = () => {
  return (
    <div className='w-full h-screen bg-gradient-to-b from-black to-gray-500 text-white flex items-center' name="contact">
        <div className='p-4 max-w-screen-lg mx-auto '>
            <h1 className='text-4xl inline  border-b-2 border-gray-500'>Contact</h1>
            <form action="https://getform.io/f/61b05478-ed6e-4b16-b6b8-c3f6b65624fa" method='POST' className='w-full flex flex-col md:block'>
                <input type="email" name="email" id="" placeholder='Enter your E-Mail' className='p-2 rounded-md focus:outline-none text-black my-5 md:w-full'/>
                <textarea name="email" id="" placeholder='Enter Subject' className='p-2 rounded-md focus:outline-none text-black my-2 md:w-full ' rows={10}></textarea>
                <button className='w-fit px-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-md ml-5'> Lets Talk</button> 
            </form>
        </div>
    </div>
  )
}

export default Contact