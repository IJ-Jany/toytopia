import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { app } from '../services/firebase.config';
export const AuthContext = createContext()
const auth = getAuth(app);
const AuthProvider = ({children}) => {
const [user,setUser] = useState(null)
const [loading,setLoading] = useState(true)
    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const logIn =(email,password)=>{
 setLoading ( )
  return signInWithEmailAndPassword(auth,email,password)
    }

    const logOut =()=>{
        setLoading(true)
        return signOut(auth)
    }

    const updateUser = (updateData)=>{
        return updateProfile(auth.currentUser,updateData)
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            setLoading(false)
        })
        return()=>{
        unsubscribe()
        }
    })

    const authData = {
createUser, updateUser, logIn,user,setUser,logOut,loading,setLoading,auth
    }
    return (
       <AuthContext.Provider value={authData}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;