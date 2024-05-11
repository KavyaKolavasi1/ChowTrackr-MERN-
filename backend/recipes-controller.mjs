// Controllers for the Recipe Collection

import 'dotenv/config';
import express from 'express';
import * as recipes from './recipes-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/recipes', (req,res) => { 
    recipes.createRecipe(
        req.body.item, 
        req.body.ingredients, 
        req.body.hours, 
        req.body.created
        )
        .then(recipe => {
            res.status(201).json(recipe);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'Please try again. The Recipe Collection creation request by the client was incorrect.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/recipes', (req, res) => {
    recipes.retrieveRecipes()
        .then(recipe => { 
            if (recipe !== null) {
                res.json(recipe);
            } else {
                res.status(404).json({ Error: 'Please try again. The requested Recipe Collection resource could not be found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Please try again. The Recipe Collection retrieval request by the client was incorrect.' });
        });
});


// RETRIEVE by ID controller
app.get('/recipes/:_id', (req, res) => {
    recipes.retrieveRecipeByID(req.params._id)
    .then(recipe => { 
        if (recipe !== null) {
            res.json(recipe);
        } else {
            res.status(404).json({ Error: 'The requested ID for the Recipe Collection resource could not be found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error found. The Recipe Collection retrieval by ID was incorrect and unable to establish.' });
    });

});


// UPDATE controller ************************************
app.put('/recipes/:_id', (req, res) => {
    recipes.updateRecipe(
        req.params._id, 
        req.body.item, 
        req.body.ingredients, 
        req.body.hours, 
        req.body.created
    )
    .then(recipe => {
        res.json(recipe);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'There was a client-side error. Unable to update Recipe Collection at this time.' });
    });
});


// DELETE Controller ******************************
app.delete('/recipes/:_id', (req, res) => {
    recipes.deleteRecipeById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(200).send({ Success: 'Congratulations! The recipe deletion for the Recipe Collection was successful.' });
            } else {
                res.status(404).json({ Error: 'Please try again! The server was unable to delete the Recipe at this time.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'There was an error processing the deletion request in the Recipe Collection.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});