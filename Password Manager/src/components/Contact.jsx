import React from 'react'

const Contact = () => {
  return (

    <>
      <div className="contactus p-2 m-2 sm:mt-6 grid sm:grid-cols-2 bg-gray-200 rounded-lg h-auto gap-2 sm:m-2 justify-between">
        <div className="w-auto m-2 image rounded-lg sm:ml-4 sm:mt-4 md:ml-10 md:mt-12 lg:ml-20">
          <h1 className="word text-4xl text-center md:text-left sm:text-5xl md:text-7xl font-bold p-2"> Contact Us </h1>
          <p className='p-2 text-xl text-center md:text-left md:ml-4 sm:text-2xl md:4xl'> Lets Talk about Everything </p>
          <img src='/image1.svg' className='sm:w-84 md:w-96 sm:ml-4 sm:mt-4  md:ml-0 md:mt-1' ></img>
        </div>
        <div className="form w-full rounded-lg m-2 sm:mt-6 sm:mr-4 sm:m-0 md:mt-32 md:mr-7">
          <form action="#" className='p-2'>
            <div>
              <span className="text-lg font-bold m-2">Full Name</span>
              <input name="username" className="w-full text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline" type="text" placeholder="Enter Your Name" required />
            </div>
            <div className='mt-4'>
              <span className=" text-lg font-bold m-2">Enter Email</span>
              <input name='usermail' className="w-full text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline" type="email" placeholder="Enter Your Name" required />
            </div>
            <div className='mt-4'>
              <span className=" text-lg font-bold m-2">Your Query</span>
              <textarea name="message" id="" placeholder='Enter your message' className='w-full h-40 text-gray-900 mt-2 p-2 rounded-lg focus:outline-none focus:shadow-outline'/>
            </div>
            <button className='w-full bg-blue-500 p-2 h-auto rounded-full mt-4 text-white border-2 hover:border-blue-400'> Send Message </button>

          </form>
        </div>
      </div>

      <div className="blank h-20 sm:h-16"></div>
    </>
  )
}

export default Contact