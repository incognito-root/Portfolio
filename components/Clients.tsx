import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { testimonials } from '@/data'
// import { companies } from '@/data'


const Clients = () => {
  return (
    
    <div className='py-20' id="testimonials">
        <h1 className='heading'>
            Kind Words from {' '}
            <span className='text-purple'> Satisfied Clients</span>
        </h1>
        <div  className='flex flex-col items-center max-lg:mt-20 mt-[80px]'>

           <InfiniteMovingCards 
            items={testimonials}
            direction='right'
            speed='slow'
            />
          
        </div>
        </div>
    )
}

export default Clients