import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState(['movie 1', 'movie2']);
  useEffect(()=>{
      fetch("http://127.0.0.1:8000/", {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Token 53b4958afea9ce7af89755cfa8cfc4e401f2aa13'
        }
      })
      .then(resp => resp.json)
      .then(resp => setMovies(resp))
      .catch(error => console.log(error))
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <h1>Movie Rater</h1>
      
       
      </header>
      <div className="layout">
          <div>
            {movies.map(movie =>{
              return <h2>{movie}</h2>
            })}
          </div>
          <div>Movie Detail</div>
        </div>
    </div>
    
  );
}

export default App;
