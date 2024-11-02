import React, { useRef } from 'react'
import Card from './card'

const Foreground = () => {

  const ref = useRef(null)
  return (
    <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap m-5'>
      <Card reference={ref} />
    </div> 
  )
}

export default Foreground