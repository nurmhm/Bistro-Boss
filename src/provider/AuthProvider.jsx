import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";

const auth = getAuth(app);
export const AuthContext = createContext();
const AuthProvider = ({children}) => {
   
   const [user,setUser] = useState(null);
   const [isLoading,setIsLoading] = useState(true);

   const createUser = (email,password)=>{
      setIsLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const SignIn = (email, password) =>{
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   }

   const LogOut = ()=>{
      setIsLoading(true);
      return auth.signOut()
   }

   useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser);
         setIsLoading(false);
         console.log('current user' , currentUser)
      });
      return ()=>{
         return unSubscribe();
      }
   },[])

   const updateUser = (name, photo) =>{
      updateProfile(auth.currentUser, {
         displayName: name, photoURL:photo
       }).then(() => {
         // Profile updated!
         // ...
         console.log('Profile Update')
       })
   }


   const authInfo = {
      user,
      isLoading,
      createUser,
      SignIn,
      LogOut,updateUser

   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;