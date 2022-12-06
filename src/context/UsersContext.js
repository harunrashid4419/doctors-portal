import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
   createUserWithEmailAndPassword,
   getAuth,
   onAuthStateChanged,
   signInWithEmailAndPassword,
   signOut,
   updateProfile,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const UsersContext = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(null);

   const createUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
   };

   const logIn = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
   };

   const logOut = () => {
      return signOut(auth);
   };

   const updateUser = (userInfo) => {
      return updateProfile(auth.currentUser, userInfo);
   };

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
         console.log("user observing");
         setUser(currentUser);
         setLoading(false);
      });
      return () => unSubscribe();
   }, []);

   const authInfo = { createUser, logIn, user, logOut, updateUser, loading };

   return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
   );
};

export default UsersContext;
