import React from 'react'
import './ImgCarouselStyles.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import BeforeAfter from '../../assets/before-after.jpg';
import DirtyPanel1 from '../../assets/dirty-panel1.jpg';
import DirtyPanel2 from '../../assets/dirty-panel2.jpg';
import SingleStory from '../../assets/single-story.jpg'
import TwoStory from '../../assets/two-story.jpg'


const ImgCarousel = () => {
  return (
    <div className='bg-gray-900 h-full p-4 md:p-12'>
        <Carousel className='carousel' autoPlay={true} infiniteLoop={true}>
            <div>
                <img className='object-contain h-[600px] w-[1200px] mb-16' src={BeforeAfter} alt='/' />
        
            </div>
            <div>
                <img className='object-contain h-[600px] w-[1200px] mb-16' src={DirtyPanel1} alt='/' />
        
            </div>
            <div>
                <img className='object-contain h-[600px] w-[1200px] mb-16' src={DirtyPanel2} alt='/' /> 
            </div>
        </Carousel>
        <div  name='services' className='items-center flex justify-center'>
        <h1 className='text-4xl text-center text-white border-y-2 border-violet-700'>Services</h1>
        </div>
        
        <div className='flex justify-around '>
          
            <div className='grid grid-cols-1 lg:grid-cols-2 w-screen text-lg text-gray-900'>
                <div className=' bg-gray-300 text-xl grid justify-items-center my-4 m-auto sm:m-[125px] border-2 rounded-xl shadow-xl shadow-violet-700 hover:scale-110'>
                    <h1>Single Story Homes</h1>
                    <img className='w-[200px] h-[110px] border-2 border-violet-700' src={SingleStory} alt='/' />
                    <ul className='p-2'>
                        <li>$85</li>
                        <li>Additional $10 per array after two arrays</li>
                        <li>Additional $10 for tile/clay roof</li>
                    </ul>
                    
                </div>

                <div className='bg-gray-300 text-xl grid justify-items-center my-4 m-auto sm:m-[125px] border-2 rounded-xl shadow-xl shadow-violet-700 hover:scale-110'>
                    <h1>Two Story Homes</h1>
                    <img className='w-[200px] h-[110px] border-2 border-violet-700' src={TwoStory} alt='/' />
                    <ul className='p-2'>
                        <li className=''>$110</li>
                        <li>Additional $10 per array after two arrays</li>
                        <li>Additional $10 for tile/clay roof</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ImgCarousel