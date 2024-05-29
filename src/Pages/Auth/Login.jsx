import { useContext, useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from '../../provider/AuthProvider';
import img from '../../assets/others/authentication1.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import GoogleSign from '../../Components/GoogleSign';


const Login = () => {
   const captchaRef = useRef(null);
   const [disable, setDisable] = useState(true);
   const {SignIn} = useContext(AuthContext)
   const navigate = useNavigate();
   const location = useLocation();
   const from = location.state?.from?.pathname || "/";


   useEffect(() => {
      loadCaptchaEnginge(6);
   }, []);

   const handleLogin = (event) => {
      event.preventDefault();
      const form = event.target;
      const email = form.email.value;
      const password = form.password.value;
      console.log(email, password);
      SignIn(email, password) 
      .then((user) => {
         console.log(user.user);
         form.reset();
         Swal.fire({
            title: "LOGIN SUCCESS",
            showClass: {
              popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `
            },
            hideClass: {
              popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `
            }
          });
          navigate(from, { replace: true });
      })

   };

   const handleCaptchaBlur = () => {
      const user_captcha_value = captchaRef.current.value;
      const result = validateCaptcha(user_captcha_value);
      setDisable(!result);
   };

   return (
      <div>
         <div className="hero min-h-screen bg-base-200">
            <div className="hero-content w-1/2 flex-col lg:flex-row">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold">Login now!</h1>
                  <img src={img} alt="" />
               </div>
               <div className="card w-1/2 max-w-sm shadow-2xl bg-base-100">
                  <form  onSubmit={handleLogin} className="card-body">
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                           <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                     </div>
                     <div className="form-control">
                        <LoadCanvasTemplate />
                        <label className="label"></label>
                        <input
                           name="captcha"
                           ref={captchaRef}
                           type="text"
                           placeholder="captcha"
                           className="input input-bordered"
                           onBlur={handleCaptchaBlur}
                           required
                        />
                     </div>
                     <div className="form-control mt-6">
                        <input
                           disabled={disable}
                           className="btn bg-[#D1A054] border-0 "
                           type="submit"
                           value="Login"
                        />
                     </div>
                  </form>

                  <div>
                     <p className='text-center'>New to Ema-John? <Link to='/signup' className='text-[#D1A054]'>Create a new account</Link></p>
                  </div>
                  <GoogleSign></GoogleSign>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
