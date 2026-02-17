import React, { createContext, useContext, useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localstorage';

export const AuthContext = createContext()


const AuthProvider = ({children})=>{

    const [userData, setUserData] = useState(null);
   
    useEffect(()=> {
        const {employees,admin} = getLocalStorage()
        setUserData({employees,admin})
    },[])

    console.log("user data",userData);
    return (
        <div className="text-black">
            <AuthContext.Provider value={userData}>
                   {children}
            </AuthContext.Provider>
         
        </div>
    )
}

export default AuthProvider
