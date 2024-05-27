import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover";
import img from '../../assets/menu/banner3.jpg'
import dessertimg from '../../assets/menu/dessert-bg.jpeg'
import saladimg from '../../assets/menu/salad-bg.jpg'
import soupimg from '../../assets/menu/soup-bg.jpg'
import drinkimg from '../../assets/menu/pizza-bg.jpg'

import Title from "../../Components/Title";
import useMenu from "../../Hooks/uesMenu";
import MenuCategory from "../Shared/MenuCategory";
import { Link } from "react-router-dom";


const MenuMain = () => {
   const [menu] = useMenu();

   const salad = menu.filter(item => item.category === 'salad');
   const offered = menu.filter(item => item.category === 'offered');
   const dessert = menu.filter(item => item.category === 'dessert');
   const soup = menu.filter(item => item.category === 'soup');
   const pizza = menu.filter(item => item.category === 'pizza');
   return (
      <div>

         <Helmet>
            <title>Bistro-Boss | Menu</title>
         </Helmet>
         <Cover img={img} title='our menu' text='This is our fevourite menu' ></Cover>
         
         <Title subheading="Don't miss" heading="TODAY'S OFFER"></Title>
         <MenuCategory items={offered} title={''} ></MenuCategory>
         {/* offered */}
         {/* dessert */}
         <MenuCategory items={dessert} img={dessertimg} title={'dessert'} text='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
         <MenuCategory items={salad} img={saladimg} title={'salad'} text='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
         <MenuCategory items={soup} img={soupimg} title={'soup'} text='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
         <MenuCategory items={pizza} img={drinkimg} title={'drink'} text='Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'></MenuCategory>
         




      </div>
   );
};

export default MenuMain;