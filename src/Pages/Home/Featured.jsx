import Title from "../../Components/Title";
import img from '../../assets/home/featured.jpg'


const Featured = () => {
   return (
      <div className="hero min-h-screen mb-24 text-white bg-fixed" style={{backgroundImage: `url(${img})`}}>
         <div className="hero-overlay">
            <Title heading='FROM OUR MENU' subheading='---Check it out---'></Title>
         </div>
         <div className="md:flex  hero-overlay justify-center items-center py-20 px-36">
            <div>
               <img src={img} alt="" />
            </div>
            <div className="ml-24">
               <p>Aug 20 2027</p>
               <p className="u uppercase">where can i get some?</p>
               <p>At Bistro Boss, we pride ourselves on offering more than just a meal; we provide an experience. One of our standout features is the Chef's Special Experience. This exclusive dining option allows guests to enjoy a personalized, multi-course meal crafted by our head chef.

               </p>
               <button className="btn mt-5 btn-outline border-0 border-b-4 text-white">ORDER NEW</button>
            </div>
         </div>
      </div>
   );
};

export default Featured;