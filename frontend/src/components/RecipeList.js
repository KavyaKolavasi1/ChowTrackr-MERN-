import React from 'react';
import Recipe from './Recipe';

import { Link } from 'react-router-dom';

import { MdAddBox } from "react-icons/md";


// Change the function names and parameters 
// to fit your portfolio topic and schema.

function RecipeList({ recipes, onDelete, onEdit }) {
    return (
        <div className="table-container">
        <table id="recipes">
            <caption>
                Add Recipe Here: <Link to="/addRecipe"><MdAddBox className="add-box-icon" /></Link></caption>
            <thead>
                <tr>
                    <th>Item</th>
                    <th className='ingredients-col'>Ingredients</th>
                    <th className='hours-col'>Hours</th>
                    <th>Created</th>
                    <th className='delete-col'>Delete</th>
                    <th className='edit-col'>Edit</th>
                </tr>
            </thead>
            <tbody>
                {recipes.map((recipe, i) => 
                    <Recipe
                        recipe={recipe} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
        </div>
    );
}

export default RecipeList;
