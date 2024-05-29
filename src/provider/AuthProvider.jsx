import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { app } from "../Firebase/Firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import useAxios from "../Hooks/useAxios";
const auth = getAuth(app);
export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

   const [user, setUser] = useState(null);
   const [isLoading, setIsLoading] = useState(true);
   const publicAxios = useAxios();


   const provider = new GoogleAuthProvider();

   const createUser = (email, password) => {
      setIsLoading(true)
      return createUserWithEmailAndPassword(auth, email, password)
   }

   const SignIn = (email, password) => {
      setIsLoading(true);
      return signInWithEmailAndPassword(auth, email, password)
   }

   const GoogleSign = () => {
      setIsLoading(true);
      return signInWithPopup(auth, provider);
   }

   const LogOut = () => {
      setIsLoading(true);
      return auth.signOut()
   }

   useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
         setUser(currentUser);
         if(currentUser){
            // get token on client side
            const userInfo = {email: currentUser.email}
            publicAxios.post('/jwt', userInfo)
               .then(res =>{
                  if(res.data.token){
                     localStorage.setItem('access-token', res.data.token);
                  }
               })

         }else{
            //todo
            localStorage.removeItem('access-token')
         }
         setIsLoading(false);
         console.log('current user', currentUser)
      });
      return () => {
         return unSubscribe();
      }
   }, [publicAxios])

   const updateUser = (name, photo) => {
      updateProfile(auth.currentUser, {
         displayName: name, photoURL: photo
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
      LogOut, updateUser,
      GoogleSign

   }
   return (
      <AuthContext.Provider value={authInfo}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthProvider;