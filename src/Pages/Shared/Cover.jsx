import { Parallax } from 'react-parallax';

const Cover = ({ img, title, text }) => {
   return (
      <div>
         <Parallax
            blur={{ min: -15, max: 15 }}
            bgImage={img}
            bgImageAlt="the dog"
            strength={-200}
         >
            <div className="hero h-[500px]" >
               <div className="hero-overlay h-1/2 w-2/3 bg-opacity-60"></div>
               <div className="hero-content text-center text-neutral-content">
                  <div className="max-w-md">
                     <h1 className="mb-5 text-5xl font-bold uppercase font-serif">{title}</h1>
                     <p className="mb-5">{text}</p>

                  </div>
               </div>
            </div>

         </Parallax>


      </div>
   );
};

export default Cover;