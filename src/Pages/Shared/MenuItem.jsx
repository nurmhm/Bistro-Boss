

const MenuItem = ({ item }) => {
   const { name, image, price, recipe } = item;
 
   return (
     <div className="flex space-x-4 items-center py-4">
       <div className="flex-shrink-0">
         <img
           style={{ borderRadius: '0 200px 200px 200px' }}
           className="w-[100px] h-[100px] object-cover"
           src={image}
           alt={name}
         />
       </div>
       <div className="flex-grow">
         <h1 className="uppercase text-lg font-bold">
           {name} <span className="text-gray-400">--------------------------</span>
         </h1>
         <p className="text-gray-600">{recipe}</p>
       </div>
       <div className="flex-shrink-0 text-yellow-500 text-lg font-semibold">
         ${price}
       </div>
     </div>
   );
 };
 
 export default MenuItem;
 