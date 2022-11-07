import React from 'react'
import javascript from '../../img/Javascript_Logo.png'
import html from '../../img/174854.png'
import css3 from '../../img/CSS3_logo.svg.png'
import reactIcon from '../../img/React-icon.svg.png'
import tailwind from '../../img/Tailwind_CSS_Logo.svg.png'
import nextJs from '../../img/Rlogical-Blog-Images-thumbnail.png'
import gitHub from '../../img/git1234.png'

const Experience = () => {
    const experienceImages =[
        {
            id:1,
            img:html,
            text:'HTML5'

        },
        {
            id:2,
            img:css3,
            text:'CSS3'
        },
        {
            id:3,
            img:javascript,
            text:'JavaScript'
        },
        {
            id:4,
            img:reactIcon,
            text:'React'
        },
        {
            id:5,
            img:tailwind,
            text:'Tailwind'
        },
        {
            id:6,
            img:nextJs,
            text:'Next JS'
        },
        {
            id:7,
            img:gitHub,
            text:'GitHub'
        },
    ]
  return (
    <div name='experience' className='p-2 sm:p-4  w-full flex justify-center items-center min-h-screen bg-gradient-to-b from-slate-700 to-slate-900'>
        <div className='container mx-auto'>
            <h2 className='text-white text-2xl pt-10 sm:text-5xl mt-4 sm:mb-10 border-b-4 border-gray-500 font-title inline-block'>Experience</h2>
            <div className='grid w-full h-full md:grid-cols-2 lg:grid-cols-3  sm:grid-cols-2 gap-4'>
                {experienceImages && experienceImages.map(({id,img,text,anim})=>
                <div key={id} className='flex flex-col justify-center hover:scale-x-360 bg-gradient-to-r from-slate-800 to-slate-600 items-center rounded-lg shadow-lg'>
                    <img className='w-1/2 h-2/3 sm:w-1/3' src={img} alt="experience-img" />
                    <span className='text-1xl text-white'>{text}</span>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Experience