import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer";
import Navber from "../Pages/Shared/Navber";


const Main = () => {
   const loaction = useLocation();
   const { pathname } = loaction;
   console.log(pathname)
   const isLogin = pathname.includes('login') || pathname.includes('signup')
   return (
      <div>
    
         { isLogin || <Navber></Navber>}
         <Outlet></Outlet>
         {isLogin || <Footer></Footer>}
        
      </div>
   );
};

export default Main;