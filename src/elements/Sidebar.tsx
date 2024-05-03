import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import { useContext } from "react";
import { Context } from "../context/AppContext";

const Sidebar = () => {
  const { showSidebar, setShowSidebar } = useContext(Context);
  return (
    <>
      <div className={`contact-sidebar p-[30px] fixed h-full w-[300px] z-[999999] bg-white top-0 overflow-y-auto duration-500 ${showSidebar ? "open" : ""}`}>
        <div className="contact-box1">
          <div className="logo-contact mb-[30px] h-[65px]">
            <Link to="/" className="anim-logo"><img src={IMAGES.logo} alt="/" className="inline"/></Link>
          </div>
          <div className="mb-[50px] contact-text">
            <div className="dz-title text-black2 mb-[12px]">
              <h4 className="text-2xl">About us</h4>
            </div>
            <p className="mb-4 text-lg">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <Link to="/about-us" className="btn btn-primary btn-hover-2"><span>READ MORE</span></Link>
          </div>
          <div className="title  text-black2">
            <h4 className="mb-5">Contact Info</h4>
          </div>
          
          <div className="icon-bx-wraper relative mb-5">
              <div className="icon-md">
                <span className="icon-cell"><i className="las la-phone-volume text-2xl" /></span> 
              </div>
              <div className="icon-content">
                <h6 className="tilte mb-[5px]">Location</h6>
                <p>15/B Miranda House, New York, US</p>
              </div>
          </div>
          <div className="icon-bx-wraper relative mb-5">
              <div className="icon-md">
                <span className="icon-cell"><i className="las la-envelope-open text-2xl" /></span> 
              </div>
              <div className="icon-content">
                <h6 className="tilte mb-[5px]">Email Now</h6>
                <p>info@gmail.com, services@gmail.com</p>
              </div>
          </div>
          <div className="icon-bx-wraper relative mb-5">
              <div className="icon-md">
                <span className="icon-cell"><i className="las la-map-marker text-2xl"></i></span>  
              </div>
              <div className="icon-content">
                <h6 className="tilte mb-[5px]">Call Now</h6>
                <p>+91 123 456 7890,<br/> +91 987 654 3210</p>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-close" onClick={() => { setShowSidebar(false);}}></div>
    </>
  );
};

export default Sidebar;
