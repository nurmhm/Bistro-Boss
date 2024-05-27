import { FaInstagramSquare, FaFacebook, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="flex flex-col lg:flex-row w-full items-center gap-0 text-neutral-content">
        <div className="bg-[#1F2937] w-full lg:w-1/2 h-full p-8 lg:p-12">
          <div className="text-center lg:text-left lg:ml-36">
            <h1 className="text-xl mb-4">CONTACT US</h1>
            <p>123 ABS Street, Uni 21, Bangladesh</p>
            <p>+88 123456789</p>
            <p>Mon - Fri: 08:00 - 22:00</p>
            <p>Sat - Sun: 10:00 - 23:00</p>
          </div>
        </div>
        <div className="bg-[#111827] w-full lg:w-1/2 h-full text-center py-12 lg:py-[44px]">
          <div className="lg:pl-0">
            <h1 className="text-xl text-center mb-5">Follow US</h1>
            <p className="mb-4" >Join us on social media</p>
            <div className="flex gap-5 items-center justify-center">
              <FaInstagramSquare size={24} />
              <FaFacebook size={24} />
              <FaTwitter size={24} />
            </div>
          </div>
        </div>
      </footer>
      <div className="text-black w-full py-4 text-center ">
        <p>© 2023 CultureyCod. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
