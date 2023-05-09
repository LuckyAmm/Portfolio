import React from 'react'

const Portfolio = () => {
  return (
    <div className='w-full h-screen text-white bg-gradient-to-b from-black to-gray-800 flex  items-center' name="portfolio">
        <div className='max-w-screen-lg p-4 mx-auto'>
           <h3 className='text-4xl inline font-bold border-b-2 border-gray-500'>Portfolio</h3>
            <img src="https://tse3.mm.bing.net/th?id=OIP.lz5DLB3mDY96yXQeY2IyXQHaEh&pid=Api&P=0" alt="logo"  className='rounded-lg w-full mt-8'/>
            <button className='w-fit px-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-white py-2 rounded-md ml-5 my-5' > <a href="https://acesinnovate.com/" target='_blank' rel="noreferrer">Go To Site</a></button>
        </div>
    </div>
  )
}

export default Portfolio