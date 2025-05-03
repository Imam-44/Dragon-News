import React, { createContext, useEffect, useState } from 'react';
export const AuthContext = createContext();
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import app from '../Firebase/firebase.init';



const auth = getAuth(app)
const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true);

//  console.log(user, loading);
   const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password)
   }

   const login = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   }

  const updateUser = (updatedData) => {
  return updateProfile(auth.currentUser, updatedData)
  }


   const logOut = () => {
    return signOut(auth);
   }

   useEffect(()=> {
   const unSubscribed = onAuthStateChanged(auth,(currentUser) => {
      setUser(currentUser);
      setLoading(false)
    })
    return () => {
      unSubscribed()
    }
   },[])


  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    login,
    loading,
    setLoading,
    updateUser
  }
  return <AuthContext value={authData}>
    {children}
  </AuthContext>
};

export default AuthProvider;