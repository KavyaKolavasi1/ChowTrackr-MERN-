import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";



// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddRecipePageTable = () => {

    const [item, setItem]       = useState('');
    const [ingredients, setIngredients]  = useState('');
    const [hours, setHours] = useState('');
    const [created, setCreated] = useState('');
    
    const redirect = useNavigate();

    const addRecipe = async () => {
        const newRecipe = { item, ingredients, hours,created };
        const response = await fetch('/recipes', {
            method: 'post',
            body: JSON.stringify(newRecipe),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Recipe added successfully`);
        } else {
            alert(`There was an error adding recipe = ${response.status}`);
        }
        redirect("/recipes");
    };


    return (
        <>
        <article>
            <h2>Add a recipe</h2>
            <p>Paragraph about this page.</p>
            
            <table id="recipes">
                <caption>Add Recipe Below!</caption>
                <thead>
                    <tr>
                        <th className='item-col'>Item</th>
                        <th className='ingredients-col'>Ingredients</th>
                        <th className = 'hours-col'>Hours</th>
                        <th>Created</th>
                        <th></th>
                       
                    </tr>
                </thead>
                <tbody>
                <tr>
                <td><label for="item">Recipe title</label>
                        <input
                            type="text"
                            placeholder="Title of the recipe"
                            value={item}
                            onChange={e => setItem(e.target.value)} 
                            id="item" />
                    </td>

                    <td><label for="ingredients">Ingredients</label>
                        <input
                            type="text"
                            value={ingredients}
                            placeholder="ingredients"
                            onChange={e => setIngredients(e.target.value)} 
                            id="ingredients" />
                    </td>

                    <td><label for="hours">Cook Time</label>
                        <input
                            type="number"
                            placeholder="Time to make"
                            value={hours}
                            onChange={e => setHours(e.target.value)} 
                            id="hours" />
                    </td>
                    <td><label for="created">Date</label>
                        <input
                            type="date"
                            placeholder="Date Format MM-DD-YYYY"
                            value={created} 
                            onChange={e => setCreated(e.target.value.slice(0,10))} 
                            // pattern='\d{2}-\d{2}-\d{4}'
                            id="created" />
                    </td>

                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={addRecipe}
                            id="submit"
                        >Submit</button>
                    </td>
                </tr>
                </tbody>
            </table>
        </article>
    </>
);
}

export default AddRecipePageTable;