import React from 'react'
import Mainroutes from './routes/Mainroutes'
import Nav from './components/Nav'

const App = () => {
  return (
    <div className='bg-slate-800 w-screen h-screen text-amber-50 pl-6'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App