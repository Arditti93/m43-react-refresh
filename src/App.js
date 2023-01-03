import React from 'react'
import { useEffect, useState } from 'react'
// import MovieCard from './componets/MovieCard'
import CreateUser from './componets/CreateUser'

const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7d2e5ef7"

const App = () => {
  // const [searchTerm, setSearchTerm] = useState("")
  // const [movies, setMovies] = useState([])

  // useEffect(()=>{
  //   searchFilms('Batman')
  // }, [])

  // const searchFilms = async (title) => {
  //   const request = await fetch(`${API_URL}&s=${title}`)
  //   const response = await request.json()
  //   setMovies(response.Search)
  //   // console.log(response.Search)
  // }

  return (
    // <div className="app">
    //   <h1>My Movie App</h1>
    //   <br></br>
    //   <br></br>

    //   <div className='searchInput'>
    //     <input 
    //       placeholder='Search for a film'
    //       value={searchTerm}
    //       onChange={(e) => setSearchTerm(e.target.value)}
    //     />
    //     <button 
    //     onClick={() => searchFilms(searchTerm)}>
    //     Search for a film
    //     </button>
    //   </div>

    //   {movies?.length > 0
    //   //if the movies array is greater than zero
    //     ? (
    //       <div className="container">
    //         {/* map over movies array and display each movie in the movies array in our moiveCard componet */}
    //         {movies.map((oneMovie) =>(
    //           <MovieCard movie={oneMovie} />
    //         ))}
    //       </div>
    //       //else the movies array is less than zero display no movies found
    //     ) : (
    //       <div className='empty'>
    //         <h2>No movies found</h2>
    //       </div>
    //     )
    //   }      
    // </div>

    <div className='app'>
      <CreateUser />

    </div>
  )

}

export default App
