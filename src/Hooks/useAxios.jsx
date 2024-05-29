import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export const instance = axios.create(
   {
      baseURL: "http://localhost:5000",
   }
)

const useAxios = () => {
   const navigate = useNavigate();
  const {LogOut}= useContext(AuthContext)
   instance.interceptors.request.use(function(config){
      const token = localStorage.getItem("token");
      config.headers.Authorization = `Bearer ${token}`;
      return config;
   },function(error){
      return Promise.reject(error);
   })

   // intercepters 401 and 403 status
   instance.interceptors.response.use(function(response){
      return response;
   }, async (error) =>{
      const status = error.response.status;
      console.log(status)
      if(status === 401 || status === 403){
         // localStorage.removeItem("token");
         // await LogOut()
      //   navigate("/login");


      }
      return Promise.reject(error);
   })
  return instance;
};

export default useAxios;