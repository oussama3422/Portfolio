import React from 'react'
import { BallCanvas } from './canvas'
import { technologies } from '../constant'
import { SectionWrapper } from '../hoc'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10 '
    >
      {technologies.map((teck,index)=>(
        <div className='w-28 h-28' key={teck.name}>
         <BallCanvas icon={teck.icon} />
        </div>
      ))}
    
    </div>
  )
}

export default SectionWrapper(Tech,'teck')