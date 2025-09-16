import React, { createContext, useState } from "react";

// Create context
export const recipeContext = createContext()

// Provider
export const RecipeProvider = ({ children }) => {
  // Recipe list (initialize as array, never undefined!)
  const [recipes, setRecipes] = useState([
    {
      id: "1",
      name: "Pasta",
      image: "https://picsum.photos/300/200",
      desc: "Delicious pasta with tomato sauce",
      instructions: "Boil water, add pasta",
      steps: "Cook for 10 min, then serve",
      category: "lunch"
    },
    {
      id: "2",
      name: "Salad",
      image: "https://picsum.photos/300/201",
      desc: "Fresh green salad",
      instructions: "Chop veggies, mix well",
      steps: "Add dressing and serve",
      category: "dinner"
    }
  ])

  // Keep adata as the editable list (copy of recipes)
  const [adata, setAdata] = useState(recipes)

  return (
    <recipeContext.Provider value={{ recipes, setRecipes, adata, setAdata }}>
      {children}
    </recipeContext.Provider>
  )
}
