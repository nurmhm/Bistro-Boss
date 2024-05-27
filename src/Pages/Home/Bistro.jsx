import img from '../../assets/home/chef-service.jpg';

const Bistro = () => {
   return (
      <div className='my-24 relative'>
         <div className='relative bg-fixed'>
            <img src={img} alt="" />
            <div className='bg bg-white w-3/4 p-10 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
               <h3 className="text-4xl text-center mb-4 ab uppercase">Bistro Boss</h3>
               <p>That's great! Running a restaurant can be an exciting venture. Is there something specific you'd like to discuss or need assistance with regarding your restaurant? Whether it's about menu planning, marketing strategies, customer service, or any other aspect of restaurant management, feel free to share, and I'll do my best to assist you!</p>
            </div>
         </div>
      </div>
   );
};

export default Bistro;
