import React from 'react'
import { useEffect, useState } from 'react'
// import MovieCard from './componets/MovieCard'
import CreateUser from './componets/CreateUser'
import ReadUsers from './componets/ReadUsers'
import Login from './componets/Login'
import UpdateUser from './componets/UpdateUser'
import DeleteUser from './componets/DeleteUser'
import MovieCard from './componets/MovieCard'

import { getCookie } from './common'
import { authCheck } from './utils'


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7d2e5ef7"

const App = () => {
  // const [searchTerm, setSearchTerm] = useState("")
  const [movies, setMovies] = useState([])

  const [user, setUser] = useState()
  const [cookie, setCookie] = useState()

  useEffect(()=>{
    searchFilms('Batman')
    let cookie = getCookie('jwt_token')
    if (cookie !== false) {
      loginWithToken(cookie)
    }
  }, [])

  const loginWithToken = async (cookie) => {
    const user = await authCheck(cookie)
    setUser(user)
    setCookie(cookie)
  }

  const searchFilms = async (title) => {
    const request = await fetch(`${API_URL}&s=${title}`)
    const response = await request.json()
    setMovies(response.Search)
    // console.log(response.Search)
  }

  return (

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
      {/* TODO: call read users componet here */}

      <Login setter={setUser} cookie={setCookie} />

      {user ?
        <>
            <h2> Hello welcome {user} you have logged in</h2>
            <ReadUsers cookie={cookie} />
            <UpdateUser user={user} />
            <DeleteUser user={user} />

            {movies?.length > 0
            //if the movies array is greater than zero
              ? (
                <div className="container">
                  {/* map over movies array and display each movie in the movies array in our moiveCard componet */}
                  {movies.map((oneMovie) =>(
                    <MovieCard movie={oneMovie} />
                  ))}
                </div>
                //else the movies array is less than zero display no movies found
              ) : (
                <div className='empty'>
                  <h2>No movies found</h2>
                </div>
              )
            }      

        </>
          :
          <h2>Please login</h2>
      }
    </div>
  )

}

export default App
