import React from 'react'


const MapRadius = () => {
  return (
    <div className='bg-gray-900 h-full p-4 flex flex-col items-center'>
         
        <iframe title='Oceanside, CA' className='w-[100%] h-[200px] px-4 mb-20 md:w-[800px] sm:h-[400px]' width="500" height="500" id="gmap_canvas" src="https://maps.google.com/maps?q=oceanside&t=&z=11&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
        
        <div className='flex flex-col justify-center w-[100%] h-[200px] my-[50px] sm:w-[800px] sm:h-[400px]'>
          
            
            <div className=' bg-gray-300 flex flex-col mx-auto px-10 border-2 rounded-xl shadow-xl shadow-violet-700'>
                <h1 className='text-2xl font-bold inline-flex mx-auto border-b-2 border-violet-700'>Hours</h1>
                <div className='grid grid-cols-2 my-4 mx-auto p-1'>       
                    <ul className='text-2lg font-bold p-2'>
                        <li>Monday:</li>
                        <li>Tuesday:</li>
                        <li>Wednesday:</li>
                        <li>Thrusday:</li>
                        <li>Friday:</li>
                        <li>Saturday:</li>
                        <li>Sunday:</li>
                    </ul>
                    <ul className='text-2lg font-bold p-2'>
                        <li>7am-5pm</li>
                        <li>7am-5pm</li>
                        <li>7am-5pm</li>
                        <li>7am-5pm</li>
                        <li>7am-5pm</li>
                        <li>Closed</li>
                        <li>Closed</li>
                    </ul>
                </div>
                    
            </div>
        </div>        
                 
    </div>
  )
}

export default MapRadius