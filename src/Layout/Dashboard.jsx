import { FaCalendarDay, FaCartPlus, FaHome, FaPaypal, FaStar, FaUtensils, FaCommentAlt, FaBook } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
   return (
      <div className="flex">
         <div className="cinzel-regular bg-[#D1A054] w-80 min-h-screen">
            <div className="text-3xl font-bold text-center uppercase mt-5">
               Bistro Boss  
               <span className="text-sm block">Restaurant</span>
            </div>

            <div className="mt-20 w-full flex flex-col justify-center gap-9">
               <NavLink 
                  to="/dashboard/home" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 rounded-md py-4 text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaHome size={24} />
                  <h1 className="text-2xl">User Home</h1>
               </NavLink>
               <NavLink 
                  to="/dashboard/reservation" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaCalendarDay size={24} />
                  <h1 className="text-2xl">Reservation</h1>
               </NavLink>
               <NavLink 
                  to="/dashboard/payment-history"  
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaPaypal size={24} />
                  <h1 className="text-2xl">Payment History</h1>
               </NavLink>
               <NavLink 
                  to="/dashboard/my-cart" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaCartPlus size={24} />
                  <h1 className="text-2xl">My Cart</h1>
               </NavLink>
               <NavLink 
                  to="/dashboard/add-review" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaStar size={24} />
                  <h1 className="text-2xl">Add Review</h1>
               </NavLink>
               <NavLink 
                  to="/dashboard/my-booking" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaBook size={24} />
                  <h1 className="text-2xl">My Booking</h1>
               </NavLink>

               <hr className="my-4 mx-4" />

               <NavLink 
                  to="/" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaHome size={24} />
                  <h1 className="text-2xl">Home</h1>
               </NavLink>
               <NavLink 
                  to="/menu" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4  py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaUtensils size={24} />
                  <h1 className="text-2xl">Menu</h1>
               </NavLink>
               <NavLink 
                  to="/shop" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaCartPlus size={24} />
                  <h1 className="text-2xl">Shop</h1>
               </NavLink>
               <NavLink 
                  to="/contact" 
                  className={({ isActive }) => isActive ? "flex items-center gap-4 px-4 py-4 rounded-md text-white bg-[#A87B00]" : "flex items-center gap-4 px-4"}
               >
                  <FaCommentAlt size={24} />
                  <h1 className="text-2xl">Contact</h1>
               </NavLink>
            </div>
         </div>

         <div className="flex-1 p-8">
            <Outlet />
         </div>
      </div>
   );
};

export default Dashboard;
