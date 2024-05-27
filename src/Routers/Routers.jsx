import {
   createBrowserRouter,

 } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import MenuMain from "../Pages/MenuPage/MenuMain";
import OurShop from "../Pages/Home/Our_shop/OurShop";
import Login from "../Pages/Auth/Login";
import SignUp from "../Pages/Auth/SignUp";
import Secret from "../Pages/Shared/Secret";
import PriveteRoute from "./PriveteRoute";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";

 export const router = createBrowserRouter([
   {
     path: "/",
     element: <Main></Main>,
     children:  [
      {
         path: "/",
         element:<Home></Home>
      },
      {
        path: "menu",
        element: <MenuMain></MenuMain>
      },
     
      {
        path: 'our_shop/:category',
        element: <OurShop></OurShop>
      },
      {
        path:'login',
        element: <Login></Login>
      },
      {
        path:'signup',
        element: <SignUp></SignUp>
      },
      {
        path: 'secret',
        element: <PriveteRoute><Secret></Secret></PriveteRoute>
      }
     ]
   },

   {
    path: "dashboard",
    element: <Dashboard></Dashboard>,
    children:[
      {
        path: "/dashboard/my-cart",
        element: <Cart></Cart>
      },
    ]
   }
 ]);