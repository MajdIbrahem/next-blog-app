import Image from 'next/image'
import React from 'react'
export const metadata = {
  title: "Contact page",
  description: "Generated by create next app",
};

const ContactPage = () => {
  return (
    <section className="mx-16 py-16">
      <div className="flex justify-center items-center gap-16  w-full flex-wrap flex-col md:flex-row">
        <div className="flex flex-col justify-center items-center gap-10  w-2/4">
          <form action="" className='flex flex-col item-center justify-center gap-6 w-full'>
          <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg' type="text" placeholder="Name and Surname" />
          <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg'  type="text" placeholder="Email Address" />
          <input className='w-4/5 h-[50px] bg-gray-300/60 text-black p-5 rounded-lg' type="text" placeholder="Phone Number (Optional)" />
            <textarea
              className='w-4/5 h-[200px] bg-gray-300/60 text-black p-5 rounded-lg'
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button className='w-3/5 bg-blue-400 ml-8 text-black px-5 py-2 rounded-lg font-semibold text-lg '>Send</button>
        </form>
        </div>
        <div className="">
          <Image src='/contact.png' width={500} height={500} alt='hero'></Image>
        </div>
      </div>
    </section>
  )
}

export default ContactPage