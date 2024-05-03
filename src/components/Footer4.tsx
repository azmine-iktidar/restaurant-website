import { useRef } from "react";
import { IMAGES } from "../constent/theme";
import { Link } from "react-router-dom";

const Footer4 = () => {
  const heartRef = useRef<HTMLSpanElement | null>(null);
  return (
    <footer className="site-footer style-1 bg-black2 relative" id="footer">
      <div className="xl:pt-[85px] md:pt-[80px] pt-[60px] lg:pb-10 md:pb-5 pb-0 relative z-[2]">
        <div className="container">
          <div className="row">
            <div className="xl:w-1/4 lg:w-1/3 sm:w-1/2 w-full px-[15px]">
              <div className="sm:mb-[30px] mb-2.5">
                <h5 className="footer-title lg:mb-[30px] mb-5 text-white lg:text-2xl text-xl uppercase font-semibold">
                  Contact
                </h5>
                <ul>
                  <li className="relative mb-[25px] pl-10">
                    <i className="flaticon-placeholder absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]" />
                    <p className="text-[#CCCCCC] tracking-wide leading-6">
                      1247/Plot No. 39, 15th Phase, Colony, Kkatpally, Hyderabad
                    </p>
                  </li>
                  <li className="relative mb-[25px] pl-10">
                    <i className="flaticon-telephone absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]" />
                    <p className="text-[#CCCCCC] tracking-wide leading-6">
                      +91 987-654-3210 <br /> +91 123-456-7890
                    </p>
                  </li>
                  <li className="relative mb-[25px] pl-10">
                    <i className="flaticon-email-1 absolute text-3xl leading-[30px] left-0 top-[5px] text-primary w-[30px] h-[30px]" />
                    <p className="text-[#CCCCCC] tracking-wide leading-6">
                      info@example.com <br /> info@example.com
                    </p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:w-3/12 lg:w-2/12 sm:w-6/12 w-full px-[15px]">
              <div className="widget widget_services mb-[30px]">
                <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                  Our Links
                </h5>
                <ul>
                  <li>
                    <Link to="/">
                      <span>Home</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/about-us">
                      <span>About Us</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <span>Services</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/team">
                      <span>Team</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/blog-standard">
                      <span>Blog</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full px-[15px]">
              <div className="widget widget_services mb-[30px]">
                <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                  OUR SERVICES
                </h5>
                <ul>
                  <li>
                    <Link to="/blog-open-gutenberg">
                      <span>Strategy & Research</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/services">
                      <span>Fast Delivery</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <span>Seat Reservation</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-style-1">
                      <span>Pickup In Store</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/our-menu-1">
                      <span>Our Menu</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full px-[15px]	">
              <div className="widget widget_services mb-[30px]">
                <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                  Help Center
                </h5>
                <ul>
                  <li>
                    <Link to="/faq">
                      <span>FAQ</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-style-1">
                      <span>Shop</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/shop-style-2">
                      <span>Category Filter</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/testimonial">
                      <span>Testimonials</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact-us">
                      <span>Contact Us</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom relative py-5 border-t border-[#ffffff1a]">
          <div className="row">
            <div className="md:w-1/2 w-full md:text-left text-center px-[15px]">
              <p className="text-sm text-[#999999]">
                Copyright 2024 All rights reserved.
              </p>
            </div>
            <div className="md:w-1/2 w-full md:text-right text-center px-[15px] md:mt-0 mt-[15px]">
              <span className="text-sm text-[#999999]">
                Crafted With ❤️ by{" "}
                <Link
                  to="https://www.fiverr.com/azmineiktidar"
                  target="_blank"
                  className="text-primary"
                >
                  Azmine Iktidar
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        className="bg1 bottom-[10px] left-0 absolute max-2xl:hidden animate-dz"
        src={IMAGES.background_pic5}
        alt="/"
      />
      <img
        className="top-[15px] right-[10px] absolute max-2xl:hidden animate-dz"
        src={IMAGES.background_pic6}
        alt="/"
      />
    </footer>
  );
};

export default Footer4;
