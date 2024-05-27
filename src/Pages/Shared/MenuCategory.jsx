import { Link } from "react-router-dom";
import Cover from "./Cover";
import MenuItem from "./MenuItem";


const MenuCategory = ({items , img, title,text}) => {
   return (
      <div className="my-12">
        {title && <Cover img = {img} title = {title} text={text} ></Cover>}
         <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 ">
            {
               items?.map(item => <MenuItem
               key= {item._id}
               item = {item}
               ></MenuItem>)
            }
         </div>
        {title && <Link to={`/our_shop/${title}`}><button className="btn mt-5 btn-outline border-0 border-b-4 border-black text text-green-800 ">ORDER YOUR FEVORITE FOOD</button></Link>}

      </div>
   );
};

export default MenuCategory;