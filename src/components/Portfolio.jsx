import React from 'react'
import store from '../assets/portfolio/store.png'
import movie from '../assets/portfolio/movie_search.png'
import pet from '../assets/portfolio/pet_adobe.png'

function Portfolio() {
    const portfolios = [
        {
            id:1,
            src: pet,
            heading: 'Pet Adoption',
            description:'A React-based pet adoption platform that connects users with adoptable pets through an intuitive and interactive UI',
            demo:'https://pet-adopi.netlify.app/',
            fcode:'https://github.com/vijays-fsd/PetPals-Backend.git',
            bcode:"https://github.com/vijays-fsd/Pet-Adoption-Frontend.git",
        },
        
        {
            id:2,
            src: movie,
            heading: 'Movie Search App',
            description:'A Movie Search App that allows users to find and explore movies with real-time search and detailed information.',
            demo:'https://movie-app-guvi.netlify.app/',
            bcode:"https://github.com/vijays-fsd/movie-app.git",
            // fcode:'',
            
        },
        
        {
            id:3,
            src: store,
            heading: 'Stores',
            description:'A Store Application that enables users to browse, search, and purchase products with a seamless shopping experience',
            demo:'https://addtocartguvi.netlify.app/',
            // fcode:'https://github.com/kvijayakrishnan/day37-password-reset-server',
            bcode:"https://github.com/vijays-fsd/movie-app.git",
        },
        
        
    ]



  return (
    <div 
        name='projects'
        className='bg-gradient-to-b  from-black to-gray-900 w-full text-white md:h-screen'
    >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500 '>Projects</p>
                <p className='py-4 text-xl font-thin'>Take a look at some of my work right here.</p>
            </div>

            <div className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:px-0 '>
                {portfolios.map(({id, src,heading, description, demo, bcode, fcode})=>(
                    <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                        <img src={src}
                            alt=''
                            className='rounded-md duration-300 hover:scale-105 '
                        />
                        <div key={description} >
                            <h1 className=' text-xl pl-2 pt-1 text-center pt-2 text-gray-500'>{heading}</h1>
                            <p className=' text-sm font-thin p-1 pl-2'>{description}</p>
                            
                        </div>
                    
                    <div className='flex items-center justify-center'>
                        <a href={demo} target='_blank'>
                            <button className={`font-thin text-base w-1 px-4 py-1 m-2 duration-200 target:_blank hover:scale-105`} to={demo}>Live</button>
                        </a>
                        <a href={bcode} target='_blank'>
                            <button className={`font-thin text-base w-1/2 px-10 py-1 m-2 duration-200 target:_blank hover:scale-105`} to={fcode}>Frontend</button>
                        </a>
                        <a href={fcode} target='_blank'>
                            <button className={`font-thin text-base w-1/2 px-0 py-1 m-2 duration-200 target:_blank hover:scale-105`} to={bcode}>Backend</button>
                        </a>
                        
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    </div>
  )
}

// 1.23


export default Portfolio