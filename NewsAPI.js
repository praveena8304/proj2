import React, { useState, useEffect } from 'react';
import './News.css';

const NewsAPI = () => {
  const [articles, setArticles] = useState([]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('business'); // Default category

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${encodeURIComponent(category)}&apiKey=18ed2d1832924313ae196aabf8fb6d24`);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [category]);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <h1 className="newshead">Welcome to the World Latest News</h1>
          {/* <input
            type="text"
            placeholder="Search articles"
            value={search}
            onChange={handleSearch}
            className="form-control"
            id="newsinput"
          /> */}
          <select
            className="form-select mt-2 newsdrop"
            aria-label="Select news category"
            value={category}
            onChange={handleCategoryChange}
          >
            <option value="business">Business</option>
            <option value="entertainment">Entertainment</option>
            <option value="health">Health</option>
            <option value="science">Science</option>
            <option value="sports">Sports</option>
            <option value="technology">Technology</option>
          </select>
        </div>
      </div>

      <div className="row mt-4">
        {articles
          .filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
          .map((item, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="card" id="newscard">
                {item.urlToImage && (
                  <img
                    src={item.urlToImage}
                    className="card-img-top"
                    alt={item.title}
                    style={{ height: '200px', borderRadius: '20px', objectFit: 'cover' }}
                  />
                )}
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{item.title}</h5>
                  {/* Uncomment the line below to include a description */}
                  {/* <p className="card-text flex-grow-1">{item.description}</p> */}
                  <a href={item.url} target="_blank" rel="noopener noreferrer" className='newsa'>Read More</a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default NewsAPI;



