import React, { useContext } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { recipeContext } from "../context/RecipeContext"
import { useForm } from "react-hook-form"
import { toast } from "react-toastify"

const SingleRecipes = () => {
  const { recipes, setRecipes } = useContext(recipeContext)
  const { register, handleSubmit, reset } = useForm()
  const params = useParams()
  const navigate = useNavigate()

  // Find the recipe by ID
  const recipe = recipes?.find((r) => r.id == params.id)

  // Update recipe
  const onSubmit = (updatedFields) => {
    if (!Array.isArray(recipes)) return
    const index = recipes.findIndex((r) => r.id == params.id)
    if (index === -1) return

    const copy = [...recipes]
    copy[index] = { ...copy[index], ...updatedFields }
    setRecipes(copy)

    toast.success("Recipe updated successfully")
    reset()
  }

  // Delete recipe
  const handleDelete = () => {
    const filtered = recipes.filter((r) => r.id != params.id)
    setRecipes(filtered)
    toast.success("Recipe deleted successfully")
    navigate("/recipes")
  }

  if (!recipe) {
    return <p>No recipe found</p>
  }

  // Render
  return (
    <div className="flex gap-2">
      {/* Recipe Details */}
      <div className="w-[50vw]">
        <img
          className="w-full h-[50vh] object-cover rounded"
          src={recipe.image}
          alt={recipe.name}
        />

        <h1 className="text-3xl font-bold">{recipe.name}</h1>
        <b className="text-gray-400 text-xl">Description:</b>
        <p>{recipe.desc}</p>
        <b className="text-gray-400 text-xl">Instructions:</b>
        <p>{recipe.instructions}</p>
        <b className="text-gray-400 text-xl">Steps:</b>
        <p>{recipe.steps}</p>
        <p><b className="text-gray-400 text-xl">Category:</b> {recipe.category}</p>

      </div>

      {/* Edit Form */}
      <div className="w-[50vw]">
        
        <form
          className="flex flex-col gap-2 w-1/2 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h1 className="text-2xl font-bold text-blue-400">Recipes Details</h1>
          <label htmlFor="image" className="text-gray-400">Image URL:</label>
          <input
            className="border-b outline-none p-2"
            {...register("image")}
            defaultValue={recipe.image}
            type="url"
            placeholder="Image URL"
          />

          <label htmlFor="name" className="text-gray-400">Recipes Name:</label>

          <input
            className="border-b outline-none p-2"
            {...register("name")}
            defaultValue={recipe.name}
            type="text"
            placeholder="Name of recipe"
          />

          <label htmlFor="desc" className="text-gray-400">Description:</label>

          <textarea
            className="border-b outline-none p-2"
            {...register("desc")}
            defaultValue={recipe.desc}
            placeholder="Description"
          />

          <label htmlFor="instructions" className="text-gray-400">Instructions:</label>

          <textarea
            className="border-b outline-none p-2"
            {...register("instructions")}
            defaultValue={recipe.instructions}
            placeholder="What you need"
          />

          <label htmlFor="steps" className="text-gray-400">Steps:</label>

          <textarea
            className="border-b outline-none p-2"
            {...register("steps")}
            defaultValue={recipe.steps}
            placeholder="How to make"
          />

          <label htmlFor="category" className="text-gray-400">Category:</label>

          <select
            className="border-b outline-none p-2"
            {...register("category")}
            defaultValue={recipe.category}
          >
            <option value="breakfast">Breakfast</option>
            <option value="lunch">Lunch</option>
            <option value="dinner">Dinner</option>
          </select>

          <button className="bg-green-500 p-1 rounded" type="submit">
            Update Recipe
          </button>

          <button
            className="bg-red-500 p-1 rounded"
            type="button"
            onClick={handleDelete}
          >
            Delete Recipe
          </button>
        </form>
      </div>
    </div>
  )
}

export default SingleRecipes
