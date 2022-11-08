import React from 'react'

const About = () => {
  return (
    <div name='about' className='p-2 sm:p-4 flex items-center justify-center bg-gradient-to-b from-slate-700 to-slate-900 text-white py-10 w-full min-h-screen'>
        <div className='container mx-auto'>
        <h2 className='font-title text-2xl sm:mb-10 sm:text-5xl font-medium mb-4 border-b-4 border-gray-500 inline-block'>About</h2>
        <p className='mb-10 text-slate-300 text-lg md:text-2xl'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, dolor vitae? Iusto, debitis assumenda. Dolorem sapiente natus placeat similique provident culpa sint asperiores doloremque aperiam? Quod impedit ratione aut dolorum.
            Sit in quis perferendis molestiae impedit laborum rerum repellendus a id, ex earum voluptas ullam! Tempora ab velit vero!
        </p>

        <p className='mb-2  sm:mb-10 text-slate-300 text-lg md:text-2xl '>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non mollitia accusamus consequuntur incidunt delectus aperiam, dolorum eius, nihil a ut deleniti! Doloribus ab consequatur corrupti sed, quisquam repellat autem adipisci!
            Aliquam voluptatibus, voluptatem modi quae inventore facere sit quaerat eligendi molestiae unde vel suscipit dignissimos expedita obcaecati illum consequuntur?
        </p>
        </div>
    </div>
  )
}

export default About