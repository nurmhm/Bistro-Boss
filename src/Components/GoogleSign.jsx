import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../provider/AuthProvider";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import usePublicAxios from "../Hooks/usePublicAxios";

const GoogleSign = () => {
   const {GoogleSign} = useContext(AuthContext)
   const navigete = useNavigate();
   const publicAxios = usePublicAxios();

   const handleGoogleSign=()=>{
      GoogleSign()
         .then(res=>{
            console.log(res);
            const googleUser = {
               name: res.user?.displayName,
               email: res.user?.email
            }
            publicAxios.post('/users',googleUser)
            .then(data=>{
               console.log(data.data);
               navigete('/')
            })
            

         })
   }
   return (
      <div>
         <button onClick={handleGoogleSign} className="btn"><FaGoogle></FaGoogle> Google</button>
      </div>
   );
};

export default GoogleSign;