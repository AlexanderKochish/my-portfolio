import React from 'react'
import person from '../../img/person.jpg'
import { TbArrowRightCircle } from 'react-icons/tb'
import {Link} from 'react-scroll'

const Person = () => {
  return (
    <div 
      name='home'
      className='
      w-full 
      flex 
      min-h-screen  
      bg-gradient-to-b 
      from-slate-900
      to-slate-700 
      pt-12
      md:h-screen'>
        <div className='p-2 sm:p-4 max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full md:flex-row '>
          <div className='text-slate-300 flex-col p-4 flex min-w-[50%] justify-center h-full'>
            <h2 className='text-4xl sm:text-6xl font-title font-bold text-white my-4 md:mb-4 md:mt-0 '>I'm a Front-End Developer</h2>
            <p className='md:text-2xl py-4 mb-4'>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique quis blanditiis voluptate aspernatur, fuga quae dolores odio adipisci!
              , ducimus voluptatum beatae?
            </p>
            <div>
              <Link to='portfolio' smooth duration={500} className='group font-title font-semibold flex w-fit py-2 px-6 bg-gradient-to-b from-sky-900 to-sky-700 cursor-pointer rounded-lg hover:bg-gradient-b hover:from-sky-700 hover:to-sky-900 duration-200'>
                Portfolio
                <span className='pl-2 group-hover:rotate-90 duration-300'>
                  <TbArrowRightCircle size={25} />
                </span>
              </Link>
            </div>
          </div>
          <div>
            <img className='rounded-3xl mt-4 mx-auto w-3/4 md:w-[90%]' src={person} alt="alex" />
          </div>
        </div>
      </div>
  )
}

export default Person