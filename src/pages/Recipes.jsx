import React from 'react'
import { useContext } from 'react'
import { recipeContext } from '../context/RecipeContext'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
  const { recipes } = useContext(recipeContext)

  const renderedRecipes = recipes.map((recipe) => {
    return (
      <RecipeCard key={recipe.id} recipe={recipe} />
    )
  })
  return (
    <div className='flex flex-wrap gap-2 text-amber-50'>
      {recipes.length> 0 ?renderedRecipes: <p>No recipes found</p> }</div>
  )
}

export default Recipes