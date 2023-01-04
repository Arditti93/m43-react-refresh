import React from 'react'
import { useEffect, useState } from 'react'

//TODO import readUsers fetch function here

const ReadUsers = () => {
    const [usernames, setUsernames] = useState()

    useEffect(()=> {
        loadUsers()
    }, [])

    const loadUsers = async () => {
        // // TODO: Call readUsers fetch function here
        // setUsernames()
    }

    return (
        <div className='container'>
            {usernames?.length > 0

                ?(
                    <div className='usernames'>
                        {usernames.map((user)=>(
                            <h3>{user}</h3>
                        ))}
                    </div>
                ) : (
                    <h3>No users found</h3>
                )
            }
        </div>
    )

}

export default ReadUsers