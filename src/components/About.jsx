import React from 'react'
import GPC from '../assets/GPC.png'

const About = () => {
  return (
    <div className='w-full h-auto bg-gray-900 flex flex-col items-center pt-6'>
        <div className='w-full h-full mb-10 items-center flex flex-col'>
            <h1 name='about' id='about' className='text-4xl text-white border-y-2 border-violet-700 inline'>About</h1>
        </div>

        <div className='flex flex-col items-center bg-gray-200 border-b-[25px] border-gray-900'>
            <img src={GPC} alt='GPC logo' style={{width: '80%' }} className='mb-[-80px] sm:mb-[-300px]'/>
            
            
        </div>
        <div className='bg-gray-300 text-lg sm:text-xl text-center p-3 mx-12 my-[80px] border-2 rounded-xl shadow-xl shadow-violet-700 hover:scale-105'>
                <h1 className='text-2xl sm:text-4xl font-bold mb-2'>GPC Service</h1>
                <p>is a small veteran owned business that specializes in solar panel maintenance.</p>
                <p>We utilize a deionizing water filter as well as extra soft bristle brushes to get every solar panel clean and spot free.</p>
                <p>Cleaning your solar panels can help improve performance resulting in a more efficient system</p>

            </div>

    </div>
  )
}

export default About