import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className='flex justify-center gap-4 text-cyan-50 p-4'>
        <NavLink className={({isActive}) => isActive ? 'text-red-700' : ''} to='/'>Home</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-blue-700' : ''} to='/about'>About</NavLink>
        <NavLink className={({isActive}) => isActive ? 'text-green-700' : ''} to='/recipes'>Recipes</NavLink>
        <NavLink className={`bg-gray-500 p-1 rounded ({isActive}) => isActive ? 'text-pink-700' : ''`} to='/create'>Create Recipe</NavLink>
    </div>
  )
}

export default Nav