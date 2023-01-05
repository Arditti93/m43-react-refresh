import { writeCookie } from "../common"

export const createUser = async (username, email, password) => {
    try {
        const response = await fetch("http://localhost:5001/createUser", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "username" : username,
                "email" : email,
                "password": password
            })
        })
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


//Finish readUsers below
//MAKE SURE YOU REMOVE THE TOKEN CHECK MIDDLEWARE FROM THE READUSERS ENDPONT FOR NOW
export const readUsers = async () => {
    try {
        const response = await fetch("http://localhost:5001/readUsers", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json"
            }
        })
        const data = await response.json()
        //map through the reponse and creates an array containing just the usernames of the users 
        const usernames = data.users.map(users => users.username)
        return usernames
    } catch (error) {
        console.log(error)
    }
} 

export const loginUser =  async (username, email, password, setter) => {
    try {
        const response = await fetch("http://localhost:5001/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "username" : username,
                "email" : email,
                "password" : password
            })
        })
        const data = await response.json()
        console.log(data)
        setter(data.username)
        writeCookie("jwt_token", data.token, 7)
    } catch (error) {
        console.log(error)
    }
}

export const authCheck = async (jwtToken) => {
    try {
        const response = await fetch("http://localhost:5001/authCheck", {
            method: "GET",
            headers: {
                "Content-Type" : "application/json",
                "Authorization" : `Bearer ${jwtToken}`
            }
        })
        const data = await response.json()
        console.log(data)
        return data.username
    } catch (error) {
        console.log(error)
    }
}