
const Title = ({ heading, subheading }) => {
   return (
     <div className="max-w-lg text-center mx-auto my-16">
       <p className="text-lg text-yellow-600 mb-2">--- {subheading} ---</p>
       <h1 className="text-4xl font-bold uppercase py-4 border-y-4 border-yellow-600">{heading}</h1>
     </div>
   );
 };
 
 export default Title;
 