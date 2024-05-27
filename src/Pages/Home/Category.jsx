import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import img1 from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
import img5 from '../../assets/home/slide5.jpg'


const Category = () => {
   return (




      <>
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
         >
            <SwiperSlide>
               <img src={img1} alt="" />
               <h1 className='text-4xl font-semibold absolute  text-white z-20 b bottom-8 left-28'>Salad</h1>
            </SwiperSlide>
            <SwiperSlide>               <img src={img2} alt="" className='re relative' />
               <h1 className='text-4xl font-semibold absolute  text-white z-20 b bottom-8 left-28'>pizzas</h1>
            </SwiperSlide>
            <SwiperSlide>               <img src={img3} alt="" />
            <h1 className='text-4xl font-semibold absolute  text-white z-20 b bottom-8 left-28'>Soups</h1>
            </SwiperSlide>
            <SwiperSlide>               <img src={img4} alt="" />
            <h1 className='text-4xl font-semibold absolute  text-white z-20 b bottom-8 left-28'>desserts</h1>
            </SwiperSlide>
            <SwiperSlide>               <img src={img5} alt="" />
            <h1 className='text-4xl font-semibold absolute  text-white z-20 b bottom-8 left-28'>Salad</h1>
            </SwiperSlide>


         </Swiper>

         
      </>
   );


};

export default Category;