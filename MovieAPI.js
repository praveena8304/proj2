import axios from 'axios'
import { useState } from 'react'
import './Movie.css'
export default function Movies() {
    const [movies, setMovies] = useState([])
    const [name, setName] = useState("");

    const Movie = () => {
        axios.get(`https://www.omdbapi.com/?apikey=18eaeb4f&s=${name}&type=movie&page=1`)
            .then((res) => setMovies(res.data.Search))
    };

    const handler = (e) => {
        e.preventDefault();
        Movie();
    };
    return (
        <>
            <div className='container-fluid ' id='moviecontainer'>
                {/* <h1 className='heading'>Store Point</h1> */}
                <h2 className='heading2'> Where Quality & Clarity Matters</h2>
                <p className='paragraph'> Watch All Movies in HD</p>
                <div className='row'>
                    
                     <div className='col-md-12'>
                     <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => setName(e.target.value)}   id='movieinput'/>
          <button className='moviebutton' onClick={(e) => handler(e)} type="submit">Search</button >
        </form>
        </div>
                {movies ?
                    <div className='row '>
                        {movies.map((x) =>
                            <div className='col-md-4'>
                                <div className="card  movie-card">
                                    <img src={x.Poster} class="card-img-top imgmovie" alt="" width={300} height={350} />
                                    <div class="card-body ">
                                        <h2 class="card-title">{x.Title}</h2>
                                        {/* <button>Details</button> */}
                                    </div>
                                </div>
                            </div>)}
                    </div>
                    : null}
            </div>
            </div>
        </>
    );
};