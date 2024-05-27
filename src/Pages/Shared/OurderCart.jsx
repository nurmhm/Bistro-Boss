import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxios from "../../Hooks/useAxios";
import useCart from "../../Hooks/useCart";



const OurderCart = ({ item }) => {
   const { name, image, price, recipe,_id } = item;
   const navigate = useNavigate();
   const location = useLocation();
   const instance = useAxios();
   const [, refetch]  = useCart();
   const {user} = useContext(AuthContext);

   const handleAddCart = ()=>{
         if(user && user.email){
            // TODO : send data to database
           
            const cartItem = {
               menuId:_id,
               email: user.email,
               name,
               image,
               price,
               recipe,
            }
            instance.post('/carts' , cartItem)
               .then(res =>{
                  console.log(res.data)
                  if(res.data.insertedId){
                     Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: `${name} added this on database`,
                        showConfirmButton: false,
                        timer: 1500
                      });

                      refetch();

                      
                      
                  }
               })
         }else{
            Swal.fire({
               title: "Your are not a Login User",
               text: "Please Login to add to cart",
               icon: "warning",
               showCancelButton: true,
               confirmButtonColor: "#3085d6",
               cancelButtonColor: "#d33",
               confirmButtonText: "Please Login"
             }).then((result) => {
               if (result.isConfirmed) {
                 navigate('/login' ,{state:{from: location }})
               }
             });
         }
   }
   return (
      <div>
         <div className="card w-[320PX] bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <p className="bg bg-slate-800 text-white absolute right-0 px-8 rounded-md mt-4 mr-4">${price}</p>
            <div className="card-body text-center">
               <h2 className=" font-extrabold">{name}</h2>
               <p>{recipe}</p>
               <div className="card-actions justify-center">
                  <button
                     onClick={()=>handleAddCart()}
                     className="btn mt-5 btn-outline border-0 border-b-4 border-black text text-green-800 ">
                     ADD TO CRAT</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OurderCart;