import Image from 'next/image'
import React from 'react'
export const metadata = {
  title: "About page",
  description: "Generated by create next app",
};

const AboutPage = () => {
  return (
    <section className="mx-16 py-16">
      <div className="flex justify-center items-center gap-16  w-full flex-wrap flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center gap-10  w-2/4">
          <h2 className='text-blue-400 text-2xl font-semibold items-start'>About Agency</h2>
          <h1 className="text-4xl font-bold"> We create digital ideas that are bigger, bolder, braver and better.</h1>
          <p className="text-lg font-semibold text-gray-500 text-center"> We create digital ideas that are bigger, bolder, braver and better. We
          believe in good ideas flexibility and precission We’re world’s Our
          Special Team best consulting & finance solution provider. Wide range
          of web and software development services.</p>
          <div className="flex items-center justify-center gap-16">
            <div>
              <h1 className='text-blue-400 text-center text-2xl font-semibold'>10 K+</h1>
              <p className='text-gray-300'>Year of experience</p>
            </div>
            <div>
              <h1  className='text-blue-400 text-center text-2xl font-semibold'>10 K+</h1>
              <p className='text-gray-300'>Year of experience</p>
            </div>
            <div >
              <h1  className='text-blue-400 text-center text-2xl font-semibold'>10 K+</h1>
              <p className='text-gray-300'>Year of experience</p>
            </div>
          </div>
        </div>
        <div className="">
          <Image src='/about.png' width={500} height={500} alt='hero'></Image>
        </div>
      </div>
    </section>
  )
}

export default AboutPage