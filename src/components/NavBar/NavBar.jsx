import React,{ useState } from 'react'
import { FaBars,FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const links = [
    {
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'about'
    },
    {
        id:3,
        link:'portfolio'
    },
    {
        id:4,
        link:'experience'
    },
    {
        id:5,
        link:'contact'
    },
]

const NavBar = () => {
    const [nav,setNav] = useState(false)
  return (
    <div className='flex fixed top-0 left-0 right-0 justify-between  items-center bg-gradient-to-b from-slate-900 to-slate-800 text-slate-300 min-h-[70px]'>
        <div className='m-auto container flex justify-between  items-center'>
            <div>
                <h1 className='font-logos ml-3 font-medium text-5xl text-white'>Alex</h1>
            </div>
            <ul className='hidden md:flex'>
                {links && links.map(({id,link})=>
                    <li 
                        key={id} 
                        className='text-1xl ml-5 font-title hover:scale-105 duration-200 hover:text-slate-500 hover:border-b hover:border-slate-500 cursor-pointer'>
                        <Link to={link} smooth duration={500}>{link.toUpperCase()}</Link>
                    </li>
                )}
            </ul>
            <div onClick={()=>setNav(!nav)} className='md:hidden z-10 flex cursor-pointer mr-3'>
                {!nav?<FaBars size={30} />:<FaTimes size={30} />}
            </div> 
            {nav && (
                <ul className='flex flex-col justify-center items-center w-full h-screen absolute top-0 left-0 bg-gradient-to-b from-slate-900 to-gray-600 text-slate-400 text-4xl font-bold'>
                    {links && links.map(({id,link})=>
                        <li 
                            
                            key={id} 
                            className='py-4 text-4xl ml-5 hover:scale-105 duration-200 hover:text-slate-500 cursor-pointer'>
                            <Link onClick={()=>setNav(!nav)} to={link}>{link.toUpperCase()}</Link>
                        </li>
                    )}
                </ul>
            )}
        </div>
    </div>
  )
}

export default NavBar