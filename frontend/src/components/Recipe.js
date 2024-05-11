import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { FaRegEdit } from "react-icons/fa";
import { TiDeleteOutline } from "react-icons/ti";


function Recipe({ recipe, onEdit, onDelete }) {
    return (
        <tr>
            <td>{recipe.item}</td>
            <td >{recipe.ingredients}</td>
            <td>{recipe.hours}</td>
            <td>{recipe.created.slice(0,10)}</td>

            {/* Update these icons to something that matches your style. */}
            <td><TiDeleteOutline onClick={() => onDelete(recipe._id)} /></td>
            <td><FaRegEdit onClick={() => onEdit(recipe)} /></td>
        </tr>
    );
}

export default Recipe;