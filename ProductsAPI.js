
import React, { useState, useEffect } from 'react';
import'./Product.css'
export default function ProductsAPI() {
  const [state, setState] = useState([]);
  const [search, setSearch] = useState("");

  const handler = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setState(json));
  }, []);


  return (
    <>
      <div className='container5-fluid'>
        <div className='row'>
          <div className='col-md-12'>
            <h1 className='newshead'>Explore your Favourites Products</h1>
            <input type="text" placeholder="Search" value={search} onChange={handler} id='productinput' />
          </div>
          {/* <div className='col-md-8'></div> */}
          <div className='row ' style={{ marginTop: 20 }}>
            {state.filter((item) => item.title.includes(search)).map((item) => (
              <div key={item.id} className='col-md-4'>
                <div className="card" id="product-card">
                  <img src={item.image} className="card-img-top" alt={item.title} style={{ height: 250, width: 300, display: 'block', margin: '0 auto', marginTop: 10 }} />
                  <div className="card-body">
                    <h5 className="card-title" id='product-title'>{item.title}</h5>
                    <h4 className='card-title' id='product-price'>${item.price}</h4>
                    <a href="#" className="product-button">Go somewhere</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
};












