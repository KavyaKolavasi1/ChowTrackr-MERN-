// Models for the Recipe Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: 'There was an error. Recipes were not able to load at this time on the MongoDB server.' });
    } else  {
        console.log('Welcome to the series of recipes in MongoDB! The request is successful..');
    }
});

// SCHEMA: Define the collection's schema.
const recipeSchema = mongoose.Schema({
	item:    { type: String, required: true },
    ingredients: {type: String, required: true},
	hours:     { type: Number, required: true,
                default: 0,
                min:[0,'Hours start at 0'] },
    
	created: { type: Date, required: true}
});

// Compile the model from the schema 
// by defining the collection name "recipes".
const recipes = mongoose.model('Recipe', recipeSchema);


// CREATE model *****************************************
const createRecipe = async (item, ingredients, hours,created) => {
    const recipe = new recipes({ 
        item: item, 
        ingredients: ingredients, 
        hours: hours, 
        created:created
    });
    return recipe.save();
}


// RETRIEVE model *****************************************
// Retrieve based on a filter and return a promise.
const retrieveRecipes = async () => {
    const query = recipes.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRecipeByID = async (_id) => {
    const query = recipes.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRecipeById = async (_id) => {
    const result = await recipes.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRecipe = async (_id,item, ingredients, hours,created) => {
    const result = await recipes.replaceOne({_id: _id }, {
        item: item, 
        ingredients: ingredients, 
        hours: hours,
        created:created,
    });
    return { 
        _id: _id,
        item: item, 
        ingredients: ingredients, 
        hours: hours,
        created:created,
    }
}

// EXPORT the variables for use in the controller file.
export { createRecipe, retrieveRecipes, retrieveRecipeByID, updateRecipe, deleteRecipeById }