import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import resume from '../assets/my-cv.pdf'

const Contact = () => {
  const social =[
    {
      id:1,
      child:(
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href:"https://www.linkedin.com/in/vijay-s-6993a9319/",
      style:'rounded-tr-md',
    },
    {
      id:2,
      child:(
        <>
          <FaGithub size={30} />
        </>
      ),
      href:"https://github.com/vijays-fsd",
    },
    {
      id:3,
      child:(
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href:"mailto:vijay2003sankar@gmail.com",
    },
    {
      id:4,
      child:(
        <>
          <BsFillPersonLinesFill size={30} />
        </>
      ),
      href:"https://drive.google.com/file/d/143mYDVP_9AYUb4HNad4QqlhHcqe9Uc-e/view?usp=drive_link",
      style:'rounded-br-md',
      download:true,
    },
    
  ]


  return (
    <div
      name="contact"
      className='w-full h-full bg-gradient-to-b  from-black to-gray-900 text-white p-4'
    >
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
            <p className='py-6 font-thin text-xl'>Feel free to send me a message by filling out the form below. I'd love to hear from you!</p>
          </div>

          <div className='flex justify-center items-center'>
            <form 
              action="https://api.web3forms.com/submit"
              // form submission using herotofu.com
              method='POST'
              className='flex flex-col w-full md:w-1/2'
              >
                  {/* Web3Forms Access Token */}
            <input type="hidden" name="access_key" value="0e9a6f8e-d9b6-4b72-9635-73298000806a" />
              <input 
                type='text'
                name='name'
                placeholder='Enter Your name'
                className=' text-sm font-light p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              />
              <input 
                type='text'
                name='email'
                placeholder='Enter Your Email'
                className='text-sm font-light my-4 p-2 bg-transparent border-2 rounded-md text-white focus-:outline-none'
              />
              <textarea 
                name='message'
                placeholder='Enter Your message'
                rows="8"
                className='text-sm font-light p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              />
              <button className='font-light text-xl text-white px-6 py-3 my-2  rounded-md bg-red-600  cursor-pointer hover:scale-110 duration-500'>Let's Connect</button>
            </form>
          </div>
          
          <div>
            <ul >
              <li className='flex flex-row  justify-center gap-8 py-1'>
                {social.map(({id,child,href,style, download}) =>(
                  <li 
                    className='hover:scale-150 duration-500 py-3' 
                  key={id}
                    
                  >
                    <a
                      href={href}
                      className='https://drive.google.com/file/d/143mYDVP_9AYUb4HNad4QqlhHcqe9Uc-e/view?usp=sharing'
                      download={download}
                      target='_blank'
                      rel='noreferrer'
                    >
                      {child}
                    </a>
                  </li>
                ))}
              </li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Contact