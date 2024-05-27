import { useState } from 'react';
import img from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/uesMenu';
import OurderCart from '../../Shared/OurderCart';
import OderTabs from './OderTabs';
import { useParams } from 'react-router-dom';

const OurShop = () => {
   const categorys = ['salad', 'pizza', 'soup','dessert', 'drink'];
   const {category} =useParams();
   const initialIndex =  categorys.indexOf(category)

   const [tabIndex, setTabIndex] = useState(initialIndex);
   const [menu] = useMenu();
   
   console.log(category)
   const salad = menu.filter(item => item.category === 'salad');
   const offered = menu.filter(item => item.category === 'drinks');
   const dessert = menu.filter(item => item.category === 'dessert');
   const soup = menu.filter(item => item.category === 'soup');
   const pizza = menu.filter(item => item.category === 'pizza');
   return (
      <div>
         <Cover img={img} title='OUR SHOP' text={'Would you like to try a dish?'}></Cover>
         <div className='mt-24 text-center'>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
               <TabList>
                  <Tab>SALAD</Tab>
                  <Tab>PIZZA</Tab>
                  <Tab>SOUPS</Tab>
                  <Tab>DESSERTS</Tab>
                  <Tab>DRINKS</Tab>
               </TabList>
               <TabPanel>
                  <OderTabs item={salad}></OderTabs>
               </TabPanel>
               <TabPanel>
                  <OderTabs item={pizza}></OderTabs>
               </TabPanel>
               <TabPanel>
                  <OderTabs item={soup}></OderTabs>
               </TabPanel>
               <TabPanel>
                  <OderTabs item={dessert}></OderTabs>
               </TabPanel>
               <TabPanel>
                  <OderTabs item={offered}></OderTabs>
               </TabPanel>
            </Tabs>
         </div>

      </div>
   );
};

export default OurShop;