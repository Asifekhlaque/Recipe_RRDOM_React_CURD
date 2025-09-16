# 🍴 Recipe Manager App

A simple **Recipe Manager** built with **React.js**, **React Router**, **React Hook Form**, and **Context API**.  
This project allows you to **create, view, update, and delete (CRUD)** recipes with ease.

---

## 🚀 Features

- 📜 **List all recipes** (Home/Recipes page)  
- ➕ **Add new recipes** using a form  
- 🔍 **View single recipe details**  
- ✏️ **Update/edit recipes**  
- ❌ **Delete recipes**  
- 🍞 **Toast notifications** for user feedback  
- 🌐 **Routing** with `react-router-dom`  
- 🧩 **Context API** for global state management  

---

## 📂 Project Structure

```

src/
│── components/
│   └── SingleRecipes.jsx   # View & edit single recipe
│
│── context/
│   └── RecipeContext.jsx   # Context API for managing recipes
│
│── pages/
│   ├── Home.jsx
│   ├── Recipes.jsx
│   ├── About.jsx
│   └── Create.jsx
│
│── routes/
│   └── Mainroutes.jsx      # All application routes
│
│── App.jsx                 # Main app layout
│── index.jsx               # Entry point (ReactDOM)

````

---

## ⚛️ Key React Concepts Used

### 1. **ReactDOM & Entry Point**
```jsx
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecipeProvider } from "./context/RecipeContext";

createRoot(document.getElementById("root")).render(
  <RecipeProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </RecipeProvider>
);
````

* Uses **React 18 `createRoot` API**.
* Wraps the app with `BrowserRouter` and `RecipeProvider`.

---

### 2. **React Router (Routing & Navigation)**

```jsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/recipes" element={<Recipes />} />
  <Route path="/recipes/details/:id" element={<SingleRecipes />} />
  <Route path="/create" element={<Create />} />
</Routes>
```

* `/recipes/details/:id` → Dynamic route for single recipe.
* Uses `useParams` & `useNavigate` hooks.

---

### 3. **Context API (Global State)**

```jsx
export const recipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([
    { id: "1", name: "Pasta", ... },
    { id: "2", name: "Salad", ... }
  ]);

  return (
    <recipeContext.Provider value={{ recipes, setRecipes }}>
      {children}
    </recipeContext.Provider>
  );
};
```

* Provides `recipes` state globally.
* Any component can **read/update recipes** using `useContext(recipeContext)`.

---

### 4. **Forms with React Hook Form**

```jsx
const { register, handleSubmit, reset } = useForm();

<form onSubmit={handleSubmit(onSubmit)}>
  <input {...register("name", { required: "Name is required" })} />
  <textarea {...register("desc")} />
  <button type="submit">Create Recipe</button>
</form>
```

* Validation with error messages.
* Reset form after submit.

---

### 5. **CRUD Operations**

* **Create:** Add new recipe (`Create.jsx`)
* **Read:** View recipes (`Recipes.jsx`, `SingleRecipes.jsx`)
* **Update:** Edit recipe (`SingleRecipes.jsx` form)
* **Delete:** Remove recipe (`SingleRecipes.jsx` → `handleDelete`)

---

### 6. **Toast Notifications**

```jsx
import { toast } from "react-toastify";

toast.success("Recipe added successfully");
toast.error("Something went wrong");
```

* User feedback for every action.

---

## 📸 Screenshots (Add Yours Here)

👉 Replace the placeholders below with actual screenshots of your app.

* 🏠 **Home Page**
  ![Home Screenshot](./screenshots/home.png)

* 📋 **Recipes List**
  ![Recipes Screenshot](./screenshots/recipes.png)

* 📝 **Create Recipe Form**
  ![Create Screenshot](./screenshots/create.png)

* 🔍 **Single Recipe (Details + Edit)**
  ![Single Screenshot](./screenshots/single.png)

---

## ⚡ Quick Start

1. Clone this repo:

   ```bash
   git clone https://github.com/your-username/recipe-manager.git
   ```
2. Install dependencies:

   ```bash
   npm install
   ```
3. Run the app:

   ```bash
   npm run dev
   ```

---

## 📖 Revision Checklist

* ✅ ReactDOM (`createRoot`)
* ✅ React Router (`Routes`, `Route`, `useParams`, `useNavigate`)
* ✅ Context API (`createContext`, `useContext`, `useState`)
* ✅ React Hook Form (`register`, `handleSubmit`, `reset`)
* ✅ CRUD operations (Create, Read, Update, Delete)
* ✅ Toast notifications (`react-toastify`)

---

## 🎯 Learning Outcome

By building this project, you revise:

* How to **set up a React app** with routing.
* How to **manage global state** with Context API.
* How to **work with forms & validations** using React Hook Form.
* How to **implement CRUD** in React apps.
* How to **show feedback** using toast notifications.

