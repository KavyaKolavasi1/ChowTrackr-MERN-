// Import dependencies
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import Components, styles, media
import Navigation from './components/Navigation';
import './App.css';

// Import pages you have completed:
// Home, Topics, Gallery, Contact, and Staff Pages 

import AboutPage from './pages/AboutPage.js';
import HomePage from './pages/HomePage.js';
import OrderPage from './pages/OrderPage.js';
import PaymentPage from './pages/PaymentPage.js';
import RecipesPage from './pages/RecipesPage.js';
import AddRecipes from './pages/AddRecipePageTable.js';
import EditRecipes from './pages/EditRecipePageTable.js';

// Define the function that renders the content in Routes, using State.
function App() {

  const [recipe, setRecipe] = useState([]);
  

  return (
    <>
      <BrowserRouter>

          <header>
            <h1>ChowTrackr
              <i>
                <img
                 src="./android-chrome-192x192.png" 
                 alt="favicon initials"
                 >
                </img>
              </i>
            </h1>
            <p>Describe this website.</p>
          </header>

          <Navigation />

          <main>
            <section>
                <Routes> 
                    {/* Add Routes for Home, Topics, Gallery, Contact, and Staff Pages.  */}
                    <Route path="/recipes" element={<RecipesPage setRecipe={setRecipe}/>} />
                    <Route path="/addRecipe" element={<AddRecipes/>} />
                    <Route path="/editRecipe" element={<EditRecipes recipe={recipe}/>} />
                    
                    <Route path="/aboutpage" element={<AboutPage />} />
                    <Route path="/orderpage" element={<OrderPage />} />
                    <Route path="/payment" element={<PaymentPage />} />

                    <Route path="/" element={<HomePage />} />

                </Routes>
              </section>
          </main>

          <footer>
            <p>&copy; 2023 Kavya Kolavasi</p>
          </footer>

      </BrowserRouter>
    </>
  );
}

export default App;