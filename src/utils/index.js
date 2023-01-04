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
export const readUsers = async () =>{
    try {
        const response = await fetch(, {
            //
        })
        const data = await response.json()
        //map through the reponse and creates an array containing just the usernames of the users 
        const usernames = data.users.map(users => users.username)
        return usernames
    } catch (error) {
        console.log(error)
    }
} 

