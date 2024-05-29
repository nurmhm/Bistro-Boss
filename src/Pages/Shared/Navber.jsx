import { FaCartPlus } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { user, LogOut } = useContext(AuthContext);
  const [cart] = useCart();

  const hendleLogout = () => {
    return LogOut();
  }
  const submenu = (
    <>
      <li><Link to='/'>HOME</Link></li>
      <li><a href="#">CONTACT US</a></li>
      <li><a href="#">DASHBOARD</a></li>
      <li><Link to='/menu'>OUR MENU</Link> </li>
      <li><Link to='/our_shop/salad'>OUR SHOP</Link></li>
      <li><Link to='/secret'>secret</Link></li>
    </>
  );

  return (
    <div className=" navbar fixed z-10 max-w-screen-lg mx-auto opacity-55 bg-black text-white">
      <div className="navbar max-w-screen-lg mx-auto py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </button>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-black">
              {submenu}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl" href="#">BISTRO BOSS</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal font-extrabold font-serif px-1">
            {submenu}
          </ul>
        </div>
        <div className="navbar-end hidden lg:flex items-center space-x-4">
          <NavLink to='/dashboard/my-cart'>

          <button className="flex items-center gap-4">
            <FaCartPlus size={24} />
            {user ? <div className="badge badge-secondary">+{cart.length}</div> :  <div className="badge badge-secondary">0</div>}
            
          </button>
          </NavLink>


          {
            user ? < button onClick={hendleLogout} > <a className="btn btn-ghost">SIGN OUT</a></button> :
              <Link to='/login'> <a className="btn btn-ghost">SIGN IN</a></Link>

          }
          {
            user ? <img src={user?.photoURL} alt="" className="w-10 h-10 rounded-full" />
              : <CgProfile size={24} />
          }


        </div>
      </div>
    </div>
  );
};

export default Navbar;

