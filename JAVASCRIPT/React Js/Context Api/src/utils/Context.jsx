import React from 'react'
import { createContext, useState } from 'react'   // createContext ko import kiya react me se taaki hum createContext ko use kr sake

export const UserContext = createContext();    // UserContext variable me createContext(); func rakh diya

function Context(props) {

    const [ users, setUsers] = useState([
        {id : 1, username : "rosh", city : "gurugram"},
        {id : 2, username : "noni", city : "bengaluru"},
        {id : 3, username : "khalnayak", city  : "kolkata"}
    ]);

    // console.log(props);   // ye pura app hai jo render ho rha hai


  return <UserContext.Provider value={{users, setUsers}} > {props.children} </UserContext.Provider>     // value={{users, setUsers}}          agar value iss tarah object ke form me hai to receive bhi     const {users, setUsers} = useContext(UserContext);   iss tarah karna hoga 
}                                                                                                       // value={[products, setProducts]}    agar value iss tarah array  ke form me hai to receive bhi     const [products, setProducts] = useContext(UserContext);   iss tarah karna hoga

export default Context