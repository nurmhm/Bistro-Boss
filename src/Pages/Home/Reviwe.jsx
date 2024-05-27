import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { Navigation } from 'swiper/modules';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';
import Title from "../../Components/Title";

const Reviwe = () => {
   const [reviews, setReviews] = useState([]);

   useEffect(() => {
      fetch('reviwe.json')
         .then(res => res.json())
         .then(data => setReviews(data))
   }, [])

   return (
      <div className="bg-gray-100 py-12">
         <Title heading={'TESTIMONIALS'} subheading={'---What Our Clients Say---'} />

         <div className="mb-24 max-w-5xl mx-auto px-4">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
               {reviews.map(review => (
                  <SwiperSlide key={review._id}>
                     <div className="flex flex-col items-center py-16 px-8 bg-white shadow-lg rounded-lg">
                        <Rating 
                           style={{ maxWidth: 180 }}
                           value={review.rating}
                           readOnly
                        />
                        <FontAwesomeIcon icon={faQuoteLeft} className="text-4xl text-gray-900 my-4" />
                        <p className="text-gray-700 text-lg italic mx-24 my-6">"{review.details}"</p>
                        <h3 className="text-2xl font-bold text-orange-600">{review.name}</h3>
                     </div>
                  </SwiperSlide>
               ))}
            </Swiper>
         </div>
      </div>
   );
};

export default Reviwe;
