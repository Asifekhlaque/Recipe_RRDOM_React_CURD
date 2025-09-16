import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { nanoid } from 'nanoid'
import { recipeContext } from '../context/RecipeContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const Create = () => {
  const navigator = useNavigate()
  const { recipes, setRecipes } = useContext(recipeContext)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    data.id = nanoid()
    setRecipes([...recipes, data])
    toast.success('Recipe added successfully')
    reset()
    navigator('/recipes')
  }

  return (
    <form
      className="flex flex-col gap-2 w-1/2 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* Image */}
      <input
        className="border-b outline-none p-2"
        {...register('image', { required: 'Image URL is required' })}
        type="url"
        placeholder="Image URL"
      />
      {errors.image && <small className="text-red-500">{errors.image.message}</small>}

      {/* Name */}
      <input
        className="border-b outline-none p-2"
        {...register('name', { required: 'Recipe name is required' })}
        type="text"
        placeholder="Name of recipe"
      />
      {errors.name && <small className="text-red-500">{errors.name.message}</small>}

      {/* Description */}
      <textarea
        className="border-b outline-none p-2"
        {...register('desc', { required: 'Description is required' })}
        placeholder="Description"
      />
      {errors.desc && <small className="text-red-500">{errors.desc.message}</small>}

      {/* Instructions */}
      <textarea
        className="border-b outline-none p-2"
        {...register('instructions', { required: 'Instructions are required' })}
        placeholder="What you need"
      />
      {errors.instructions && (
        <small className="text-red-500">{errors.instructions.message}</small>
      )}

      {/* Steps */}
      <textarea
        className="border-b outline-none p-2"
        {...register('steps', { required: 'Steps are required' })}
        placeholder="How to make"
      />
      {errors.steps && <small className="text-red-500">{errors.steps.message}</small>}

      {/* Category */}
      <select
        className="border-b outline-none p-2"
        {...register('category', { required: 'Category is required' })}
        defaultValue=""
      >
        <option value="" disabled>
          Choose category
        </option>
        <option value="breakfast">Breakfast</option>
        <option value="lunch">Lunch</option>
        <option value="dinner">Dinner</option>
      </select>
      {errors.category && (
        <small className="text-red-500">{errors.category.message}</small>
      )}

      <button className="bg-pink-500 p-1 rounded" type="submit">
        Create Recipe
      </button>
    </form>
  )
}

export default Create
