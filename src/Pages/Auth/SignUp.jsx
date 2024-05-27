import { Link, useNavigate } from "react-router-dom";
import img from '../../assets/others/authentication2.png';
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import usePublicAxios from "../../Hooks/usePublicAxios";

const SignUp = () => {
   const {createUser,updateUser} =useContext(AuthContext);
   const navigate = useNavigate();
   const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
   const publicAxios = usePublicAxios();

   const onSubmit = data => {
      
      createUser(data.email, data.password)
      .then(result =>{
         const user = result.user;
         console.log(user);
         updateUser(data.name, data.photoURL)
            const newUser = {
               name: data.name,
               email: data.email
            }

          publicAxios.post('/users',newUser)
          .then(res =>{
            console.log(res.data)
            navigate('/')
          })
            
         

      })
   };

   return (
      <div>
         <Helmet>
            <title> Sign Up</title>
         </Helmet>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
               <div className="text-center lg:text-left">
                  <img src={img} alt="" />
               </div>
               <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input
                           type="text"
                           {...register("name", { required: true })}
                           placeholder="Your Name"
                           className="input input-bordered"
                        />
                        {errors.name && <span className="text-red-600">Name field is required</span>}
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo Url</span>
                        </label>
                        <input
                           type="text"
                           {...register("photoURL", { required: true })}
                           placeholder="Your PhotoURL"
                           className="input input-bordered"
                        />
                        {errors.name && <span className="text-red-600">PhotoURL field is required</span>}
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           {...register("email", { required: true })}
                           placeholder="email"
                           className="input input-bordered"
                        />
                        {errors.email && <span className="text-red-600">Email field is required</span>}
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="password"
                           {...register("password", {
                              required: true,
                              minLength: 6,
                              maxLength: 10,
                              pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
                           })}
                           placeholder="password"
                           className="input input-bordered"
                        />
                        {errors.password?.type === "required" && <span className="text-red-600">Password field is required</span>}
                        {errors.password?.type === "minLength" && <span className="text-red-600">Password must be at least 6 characters</span>}
                        {errors.password?.type === "maxLength" && <span className="text-red-600">Password must be less than 10 characters</span>}
                        {errors.password?.type === "pattern" && (
                           <span className="text-red-600">
                              Password must have one uppercase letter, one lowercase letter, and one number
                           </span>
                        )}
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control mt-6">
                        <input
                           className="btn bg-[#D1A054] border-0"
                           type="submit"
                           value="Sign Up"
                        />
                     </div>
                  </form>
                  <div>
                     <p className="text-center">
                        Already have an account? <Link to='/login' className='text-[#D1A054]'>Login</Link>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default SignUp;
