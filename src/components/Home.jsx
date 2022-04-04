import { useState, useEffect } from 'react';
import '../App.css';
import SearchIcon from '../search.svg';
import MovieCard from './MovieCard';

// 1b202833
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=1b202833';

const Home = () => {

    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('Sherlock');
    }, []);

    return (
        
        <div className='home'>
            <div className='search'>
                <input 
                    placeholder='Search for movies' 
                    value={searchTerm} 
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <img 
                    src={SearchIcon} alt='search' 
                    onClick={() => searchMovies(searchTerm)} />
            </div>
            
            {
                movies?.length > 0
                ? (
                    <div className='container'>
                        {movies.map((movie) => (
                            <MovieCard movie={movie} />
                        ))}
                    </div>
                ) : (
                    <div className='empty'>
                        <h2>No movies found</h2>
                    </div>
                )
            }

        </div>
    );
}

export default Home;