// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
//   apiKey: "AIzaSyAGYNMN35JiUxYqWNQuB_OrXh62EQO4xMc",
//   authDomain: "bistro-boss-1b9b6.firebaseapp.com",
//   projectId: "bistro-boss-1b9b6",
//   storageBucket: "bistro-boss-1b9b6.appspot.com",
//   messagingSenderId: "597629357871",
//   appId: "1:597629357871:web:0cab800854d872a44b5bda"

  apiKey:import.meta.env.VITE_apiKey,
  authDomain:import.meta.env.VITE_authDomain,
  projectId:import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket,
  messagingSenderId:import.meta.env.VITE_messagingSenderId,
  appId:import.meta.env.VITE_appId
};

// Initialize Firebase
export const  app = initializeApp(firebaseConfig);