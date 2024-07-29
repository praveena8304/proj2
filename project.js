

import React, { useState } from 'react';
export default function Food() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    const YOUR_APP_ID = "18ea9fd5";
    const YOUR_APP_KEY = "eaec06f952263681a8c3aca72bcc1972";
    const submitHandle = (e) => {
        e.preventDefault();
        fetch(`https://api.edamam.com/search?q=${search}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}`)
            .then(res => res.json())
            .then(data => setData(data.hits));
    }
    const handleChange = (e) => {
        setSearch(e.target.value);
    }
    return (
        <div className='bg-dark text-light'>
            <center>
                <h1 className='bg-dark text-light'>Select Food Recipe</h1>
                <form onSubmit={submitHandle}>
                    <input type='text' value={search} onChange={handleChange} placeholder='Search item' className='w-50 p-2 mb-2'/>
                    <input type='submit' value="Search" className='btn btn-primary p-2 mb-2'/>
                </form>
            </center>
            <div className='container-fluid'>
                <div className='row'>
                    {data.map((item) => (
                        <div className='col-md-4 bg-dark' key={item.recipe.label}>
                            <div className='card m-2 mb-2'>
                                <img src={item.recipe.image} className="card-img-top img-fluid" alt="Recipe"/>
                                <div className="card-body">
                                    <h5 className="card-title">{item.recipe.label}</h5>
                                    <p>Amount of calories:₹{Math.round(item.recipe.calories)}</p>
                                    <a href="#" className="btn btn-primary">{Math.round(item.recipe.totalWeight) - 500}</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
 
 