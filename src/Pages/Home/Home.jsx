import Title from "../../Components/Title";
import Banner from "../Banner/Banner";
import Bistro from "./Bistro";
import Category from "./Category";
import Featured from "./Featured";
import Populer from "./Populer";
import Reviwe from "./Reviwe";
import { Helmet } from 'react-helmet-async';


const Home = () => {
   return (
      <div>
        <Helmet>
        <title>Bistro-Boss | Home</title>
       
      </Helmet>

         <Banner></Banner>

         <Title
            heading="ORDER ONLINE"
            subheading="From 11:00am to 10:00pm"
         ></Title>

         <Category></Category>
         <Bistro></Bistro>
         <Populer></Populer>
         <Featured></Featured>
         <Reviwe></Reviwe>





      </div>
   );
};

export default Home;