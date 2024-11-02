import React from 'react'
import Background from './components/Background'
import Nav from './components/Nav'
import Foreground from './components/Foreground'

const App = () => {
  return (
    <div className='relative w-full h-screen bg-slate-50'>
     <Nav/>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App