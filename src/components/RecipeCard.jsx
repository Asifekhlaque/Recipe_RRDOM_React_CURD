import React from 'react'
import { Link } from 'react-router-dom'

const RecipeCard = (props) => {
    const { id, image, name, instructions } = props.recipe
    return (
        <Link 
        to={`/recipes/details/${id}`}
        className='block w-[23vw] rounded overflow-hidden shadow-lg p-2'>
            <img className='w-full h-[20vh] object-cover rounded' src={image} alt="" />
            <h2 className='text-xl font-bold'>{name}</h2>
            <p>
                {instructions.slice(0, 20)}...{" "}
                <small className='text-blue-500'>Read More</small>
            </p>
        </Link>
    )
}

export default RecipeCard