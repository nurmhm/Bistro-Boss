
import Title from "../../Components/Title";

import MenuItem from "../Shared/MenuItem";
import useMenu from "../../Hooks/uesMenu";


const Populer = () => {

  const [menu] = useMenu();
 
   const popular = menu.filter(item => item.category === 'popular');

 
   return (
      <div className="my-24">
         <Title heading='Populer' subheading='popular menu'></Title>
         <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-10 ">
            {
               popular.map(item => <MenuItem
               key= {item._id}
               item = {item}
               ></MenuItem>)
            }
         </div>
         <div className="mt-12">
         <h1 className="text-center border-x-4">VIWE ALL POPULER</h1>
         <p className="text-center">-----------------------------------------</p>
         </div>
      </div>
   );
};

export default Populer;