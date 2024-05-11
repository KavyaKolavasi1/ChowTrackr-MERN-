import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import RecipeList from '../components/RecipeList';
// import { Link } from 'react-router-dom';

// import { MdAddBox } from "react-icons/md";

function RecipesPage({ setRecipe }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [recipes, setRecipes] = useState([]);

    // RETRIEVE the entire list of recipes
    const loadRecipes = async () => {
        const response = await fetch('/recipes');
        const recipes = await response.json();
        setRecipes(recipes);
    } 
    

    // UPDATE a single recipe
    const onEditRecipe = async recipe => {
        setRecipe(recipe);
        redirect("/editRecipe");
    }


    // DELETE a single recipe  
    const onDeleteRecipe = async _id => {
        const response = await fetch(`/recipes/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/recipes');
            const recipes = await getResponse.json();
            setRecipes(recipes);
        } else {
            console.error(`Unable to delete recipe at this time! = ${_id}, status code = ${response.status}`)
        }
    }

    // LOAD all the recipes
    useEffect(() => {
        loadRecipes();
    }, []);

    // DISPLAY the recipes
    return (
        <>
            <h2>Recipes Collection</h2>
            <p>Welcome to ChowTrackr! Below you will be able to log your wonderful creations and be able to share the all the joy. Or you may choose to share your skills with family and friends alike. Simply choose the add button to log your recipes below.</p>
            <p>Make sure to add a space after the comma when entering the ingredients!</p>
            {/* <Link to="/addRecipe"><MdAddBox /></Link> */}
            <RecipeList 
                recipes={recipes} 
                onEdit={onEditRecipe} 
                onDelete={onDeleteRecipe} 
            />
        </>
    );
}

export default RecipesPage;