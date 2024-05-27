// import {  useQuery } from "@tanstack/react-query";
// import useAxios from "./useAxios";

import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxios";


// const useCart = () => {
//    const instance = useAxios();
//    const {data: cart=[]} = useQuery({
//       queryKey:  ['cart'],
//       queryFn : async()=>{
//          const res = await instance.get('carts')
//             return res.data;
//       }
     
//    })
//    return [cart];
   

// };

// export default useCart;



const useCart = () => {
   const instance = useAxios()

   const { refetch, data : cart=[]} = useQuery({
      queryKey:  ['cart'],
      queryFn : async()=>{
         const res = await instance.get('carts')
         return res.data;
      }
   })
   return [cart, refetch];
};

export default useCart;