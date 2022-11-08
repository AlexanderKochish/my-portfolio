import React from 'react'

const Contacts = () => {
  
  return (
    <div name='contact' className='text-white p-4 flex justify-center items-center bg-gradient-to-b from-slate-900 to-slate-700 w-full min-h-screen'>
        <div className='container mx-auto'>
            <h2 className='text-white text-2xl sm:text-5xl mb-4 sm:mb-10 border-b-4 border-gray-500 font-title inline-block'>Contact</h2>
            <p className='mb-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id consectetur ipsum temporibus aliquid aut, dignissimos asperiores minima architecto a debitis, nesciunt est magnam ex atque dolores nemo quidem error saepe.</p>
            <div className='flex justify-center items-center'>
                <form action='https://getform.io/f/ad3ad283-f052-40fa-8653-9197d594c3a9' method='POST' className='flex flex-col w-full md:w-1/2 text-white'>
                    <input type="text" name='name' placeholder='Enter your name' className='border bg-transparent py-2 px-4 mb-4 rounded-lg'/>
                    <input type="email" name='email' placeholder='Enter your email' className='border bg-transparent py-2 px-4 mb-4 rounded-lg'/>
                    <textarea name='message' className='border bg-transparent rounded-lg py-2 px-4 mb-4' rows="10" placeholder='Messenger'></textarea>
                    <button className='py-3 px-5 bg-sky-900 rounded-lg flex items-center mx-auto'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contacts