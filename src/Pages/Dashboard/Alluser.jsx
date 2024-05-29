import { useQuery } from "@tanstack/react-query";
import useAxios from "../../Hooks/useAxios";
import { FaUsers } from "react-icons/fa";
import { MdOutlineDeleteForever } from "react-icons/md";
import Swal from "sweetalert2";


const Alluser = () => {
   const instance = useAxios();

   const { data: user = [],refetch } = useQuery({
      queryKey: ["user"],
      queryFn: async () => {
         const result = await instance.get('/users',
            {
               headers: {
                  authorization: `Bearer ${localStorage.getItem('access-token')}`
               }
            }
         )
         return result.data;
      }
   })

   const handleMakeuser =user =>{
      instance.patch(`/user/admin/${user._id}`)
          .then(res =>{
            if(res.data.modifiedCount > 0){
               Swal.fire({
                  icon: 'success',
                  title: 'User Make Admin',
                  text: 'User Make Admin Successfully'

               })
            }
          })

   }

   const handleDeleteUser = user =>{
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


            instance.delete(`/users/${user._id}`)
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
      <div >
         <div className="flex justify-evenly">
            <h1 className="text-3xl">All Users</h1>
            <h1 className="text-3xl">Total Users : {user.length}</h1>
         </div>

         <div className="">
            <div className="overflow-x-auto mt-8 ">
               <table className="table table-zebra ">
                  {/* head */}
                  <thead className="bg bg-slate-100">
                     <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Rule</th>
                        <th>Action</th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        user.map((user, id) => (
                           <tr key={user._id}>
                              <th>{id+1}</th>
                              <td>{user.name}</td>
                              <td>{user.email}</td>
                                 { user?.role === 'admin'? <td>Admin</td> : <td onClick={()=>handleMakeuser(user)} className="btn btn-lg bg-orange-500 items-center mt-4 ">
                                    <FaUsers className="text text-white text-2xl"></FaUsers></td>
                                    }
                              <td> <button onClick={()=> handleDeleteUser(user)} className="btn btn-lg bg-red-500 "><MdOutlineDeleteForever className="text text-white text-2xl"></MdOutlineDeleteForever></button></td>

                           </tr>
                        ))
                     }
                     {/* row 1 */}


                  </tbody>
               </table>
            </div>
         </div>
      </div>
   );
};

export default Alluser;