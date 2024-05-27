import OurderCart from "../../Shared/OurderCart";


const OderTabs = ({item}) => {
   return (
      <div>
         <div className='grid md:grid-cols-3 gap-10'>
            {
               item.map(item => <OurderCart key={item._id} item={item}></OurderCart>)
            }
         </div>
      </div>
   );
};

export default OderTabs;