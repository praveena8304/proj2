// import React, { useState } from 'react';
// import axios from 'axios';
// import './Food.css'
// const FoodAPI = () => {
//   const [query, setQuery] = useState('');
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   const APP_ID = '87e87f2e';
//   const APP_KEY = '9870740c80e1b116bc4d7fb30f6dc2c6';

//   const getRecipes = async () => {
//     setLoading(true);
//     setError('');

//     try {
//       const response = await axios.get(
//         `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
//       );
//       setRecipes(response.data.hits);
//     } catch (error) {
//       console.error('Error fetching recipes:', error);
//       setError('Error fetching recipes. Please try again later.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleInputChange = (event) => {
//     setQuery(event.target.value);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     getRecipes();
//   };

//   return (
//     <div className="container5-fluid">
//       < div className='row'>
//       < div className="col-md-12">
//       <h2 className="foodheading">Recipes</h2>
//       <form onSubmit={handleSubmit} className="mb-4">
//         <div className="input-group">
//           <input
//             type="text"
//             value={query}
//             onChange={handleInputChange}
//             className="form-control"
//             placeholder="Enter ingredients (e.g., chicken, pasta)"
//           />
//           <a className="foodbutton" >
//             Search
//           </a>
//         </div>
       
        
//       </form>
//       </div>
//       </div>

//       {loading && <p className="text-center">Loading...</p>}
//       {error && <p>{error}</p>}

//       <div className="row">
//         {recipes.map((item, index) => (
//           <div className="col-md-4 " key={index}>
//             <div className="card food-card m-2 mb-20">
//               <img src={item.recipe.image} className="card-img-top img-fluid" alt="Recipe" />
//               <div className="card-body ">
//                 <h5 className="card-title food-title">{item.recipe.label}</h5>
//                 {/* <p>Calories: {Math.round(item.recipe.calories)}</p> */}
//                 <a className='viewrecipe'
//                   href={item.recipe.url}
//                   target="_blank"
//                   rel="noopener noreferrer">
//                   View Recipe
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default FoodAPI;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Food.css';
 
const FoodAPI = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
 
  const APP_ID = '87e87f2e';
  const APP_KEY = '9870740c80e1b116bc4d7fb30f6dc2c6';
 
  const getRecipes = async () => {
    setLoading(true);
    setError('');
 
    try {
      const response = await axios.get(
        `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error('Error fetching recipes:', error);
      setError('Error fetching recipes. Please try again later.');
    } finally {
      setLoading(false);
    }
  };
 
  useEffect(() => {
    // This useEffect will trigger the search when `query` changes
    if (query.trim() !== '') {
      getRecipes();
    }
  }, [query]);
 
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
 
  return (
    <div className="container5-fluid">
      <div className="row">
        <div className="col-md-12">
          <h2 className="foodheading">Recipes</h2>
          <div className="mb-4">
            <div className="input-group">
              <input  id='foodinput'
                type="text"
                value={query}
                onChange={handleInputChange}
                className="form-control"
                placeholder="Enter ingredients (e.g., chicken, pasta)"
              />
            </div>
          </div>
        </div>
      </div>
 
      {loading && <p className="text-center">Loading...</p>}
      {error && <p>{error}</p>}
 
      <div className="row">
        {recipes.map((item, index) => (
          <div className="col-md-4" key={index}>
            <div className="card food-card m-2 mb-20">
              <img src={item.recipe.image} className="card-img-top img-fluid" alt="Recipe" />
              <div className="card-body">
                <h5 className="card-title food-title">{item.recipe.label}</h5>
                <a className='viewrecipe'
                  href={item.recipe.url}
                  target="_blank"
                  rel="noopener noreferrer">
                  View Recipe
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default FoodAPI;
 
 
 
 
 
 
 
 
 
 
 
 
 
 
