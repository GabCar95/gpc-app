import React from 'react'
import SolarHome from '../assets/solar-home.jpg'


const Home = () => {
  return (
    <div name='home' id='home' className='bg-gray-900 w-full h-screen relative flex'>
      <img src={SolarHome} className='w-screen h-full object-cover'/>
    </div>

    
  )
}

export default Home