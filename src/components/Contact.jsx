import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-gray-900 flex justify-center items-center p-4 py-[80px]'>
        <form method='POST' action='https://getform.io/f/e5bfc141-2278-4dc5-bf60-9106d037dcf7' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 text-center '>
                <p className='text-4xl text-white inline border-y-4 border-violet-700'>Contact</p>
                <p className='text-white py-4'>Submit a form below to get started!</p>
            </div>
            <input className='bg-gray-300' type="text" placeholder='Name' name='name' />
            <input className='my-4 bg-gray-300' type="email" placeholder='Email' name='email' />
            <textarea className='bg-gray-300' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-violet-700 text-xl bg-white border-2 shadow-lg shadow-violet-700 hover:shadow-gray-300 hover:bg-violet-700 hover:border-violet-700 hover:text-white rounded-lg px-4 py-2 my-6 mx-auto flex items-center'>Send</button>
        </form>

    </div>
  )
}

export default Contact