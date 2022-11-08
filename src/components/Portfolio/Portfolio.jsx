import React from 'react'
import react from '../../img/react.jpg'
import node from '../../img/node-js.png'
import next from '../../img/next.jpeg'
import vue from '../../img/vueart.png'
import evolution from '../../img/evolution.png'
import images from '../../img/images.jpg'

const Portfolio = () => {
    const portfolioImages =[
        {
            id:1,
            src:react
        },
        {
            id:2,
            src:node
        },
        {
            id:3,
            src:next
        },
        {
            id:4,
            src:vue
        },
        {
            id:5,
            src:evolution
        },
        {
            id:6,
            src:images
        },
    ]
  return (
    <div name='portfolio' className='p-2 sm:p-4 w-full flex justify-center items-center min-h-screen bg-gradient-to-b from-slate-900 to-slate-700'>
        <div className='container mx-auto'>
        <h2 className='inline-block font-title font-medium border-b-4 border-gray-500 mb-4 sm:mb-10 text-2xl sm:text-5xl text-white'>Portfolio</h2>
        <div className='grid md:grid-cols-3 gap-4 sm:grid-cols-2'>
        {portfolioImages && portfolioImages.map(({id,src})=>
            <div key={id} className='shadow-lg flex flex-col justify-center rounded-lg items-center md:hover:scale-105 duration-200 bg-gradient-to-r from-slate-900 to-slate-800'>
                <img className=' w-2/3 h-3/4 ' src={src} alt='img' />
                <div className='text-white grid grid-cols-2'>
                    <button className='py-2 px-5 m-2 rounded-lg hover:bg-sky-700 duration-200 bg-sky-900'>Demo</button>
                    <button className='py-2 px-5 m-2 rounded-lg hover:bg-sky-700  duration-200 bg-sky-900'>Code</button>
                </div>
            </div>)}
        </div>
        </div>
    </div>
  )
}

export default Portfolio