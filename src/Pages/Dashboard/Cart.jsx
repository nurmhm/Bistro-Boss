import { MdOutlineDeleteForever } from "react-icons/md";
import useCart from "../../Hooks/useCart";
import Swal from "sweetalert2";
import useAxios from "../../Hooks/useAxios";

const Cart = () => {
   const [cart, refetch] = useCart();
   const totalprice = cart.reduce((total, item) => total + item.price, 0);
   const instance = useAxios();


   const HandleDelete = (id) => {
      Swal.fire({
         title: "Are you sure?",
         text: "You won't be able to revert this!",
         icon: "warning",
         showCancelButton: true,
         confirmButtonColor: "#3085d6",
         cancelButtonColor: "#d33",
         confirmButtonText: "Yes, delete it!"
      }).then((result) => {
         if (result.isConfirmed) {


            instance.delete(`/carts/${id}`)
               .then(res => {
                  console.log(res)

                  if (res.data.deletedCount > 0) {
                     refetch()
                     Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                     });
                  }
               })

         }
      });
   }

   return (
      <div>
         <div className="flex justify-evenly">
            <h1 className="text-4xl uppercase">Total Orders: {cart.length}</h1>
            <h1 className="text-4xl uppercase">Total Price: {totalprice} $</h1>
            <button className="bg-[#D1A054] btn btn-primary border-0">Pay</button>
         </div>

         <div className="w-full mx-auto pl-24 mt-24">
            <div className="overflow-x-auto ">
               <table className="table">
                  {/* head */}
                  <thead>
                     <tr>
                        <th>
                           #
                        </th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Action</th>
                        <th></th>
                     </tr>
                  </thead>
                  <tbody>
                     {cart.map((item, index) => (
                        <tr key={item._id}>
                           <th>
                              {index + 1}
                           </th>
                           <td>
                              <div className="flex items-center gap-3">
                                 <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                       <img src={item.image} alt={item.name} />
                                    </div>
                                 </div>

                              </div>
                           </td>
                           <td>  <div>
                              <div className="font-bold">{item.name}</div>

                           </div></td>
                           <td>{item.price} $</td>
                           <td> <button onClick={() => { HandleDelete(item._id) }} className="btn bg-red-600 "><MdOutlineDeleteForever className="text text-white"></MdOutlineDeleteForever></button></td>

                        </tr>
                     ))}
                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Cart;
