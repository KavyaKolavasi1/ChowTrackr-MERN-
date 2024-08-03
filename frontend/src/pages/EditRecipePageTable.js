import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";


export const EditRecipePageTable = ({ recipe }) => {
 
    const [item, setItem]       = useState(recipe.item);
    const [ingredients, setIngredients]         = useState(recipe.ingredients);
    const [hours, setHours] = useState(recipe.hours);
    const [created, setCreated] = useState(recipe.created.slice(0,10));
    
    const redirect = useNavigate();

    const editRecipe = async () => {
        const response = await fetch(`/recipes/${recipe._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                item: item, 
                ingredients: ingredients, 
                hours: hours,
                created:created
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Congratulations in sucessfully editing the recipe!`);
        } else {
            const errMessage = await response.json();
            alert(`Error in editing the recipe ${response.status}. ${errMessage.Error}`);
        }
        redirect("/recipes");
    }

    return (
        <>
        <article>
            <h2>Edit a Recipe</h2>
            <p>Paragraph about this page.</p>
            <table id="recipes">
                <caption>Add a recipe below?</caption>
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
                            className='edit-item-col'
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
                            placeholder="Time to Make"
                            value={hours}
                            onChange={e => setHours(e.target.value)} 
                            id="hours" />
                    </td>
                    <td><label for="created">Date</label>
                        <input
                            type="date"
                            placeholder="Date Format YYYY-DD-MM"
                            value={created}
                            onChange={e => setCreated(e.target.value.slice(0,10))} 
                            // pattern='\d{4}-\d{2}-\d{2}'
                            id="created" />
                    </td>
                    <td>
                    <label for="submit"></label>
                        <button
                            type="submit"
                            onClick={editRecipe}
                            id="submit"
                        >Edit</button>
                    </td>
                </tr>
                </tbody>
            </table>
            </article>
        </>
    );
}
export default EditRecipePageTable;