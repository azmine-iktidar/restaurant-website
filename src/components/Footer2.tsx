import { IMAGES } from "../constent/theme";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent, useRef, useState } from "react";
import Particls from "./Particls";

const Footer2 = () => {
  const heartRef = useRef<HTMLSpanElement | null>(null);
  const [input, setInput] = useState<string>("");
  const form = useRef<HTMLFormElement | null>(null);
  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setInput("");
    if (form.current) {
      emailjs
        .sendForm(
          "emailId",
          "template_0byuv32",
          form.current,
          "qUDIPykc776NYHv4m"
        )
        .then(
          () => {
            toast.success("Successfully send!");
          },
          (error) => {
            toast.error(error.text);
          }
        );
    }
  };
  return (
    <>
      <Toaster position="bottom-right" reverseOrder={true} />
      <footer className="site-footer style-2 relative" id="footer">
        <div
          className="footer-bg-wrapper max-2xl:mx-0 mx-[100px] max-2xl:rounded-none rounded-[30px] bg-black2 relative z-[1]"
          id="app-banner"
        >
          <div className="footer-top pt-[45px] pb-[30px] relative z-[2]">
            <div className="container">
              <div className="footer-subscribe-wrapper lg:mb-[60px] sm:mb-[40px] sm:pb-[40px] pb-[30px] mb-[30px] border-b border-[#ffffff1a]">
                <div className="wrapper-inner">
                  <div className="row justify-between">
                    <div className="lg:w-4/12 px-[15px] lg:m-0 mb-5">
                      <div className="footer-logo mb-[15px]">
                        <Link
                          to="/"
                          className="anim-logo-white pt-[5px] relative inline-block"
                        >
                          <img src={IMAGES.logo2} alt="/" />
                        </Link>
                      </div>
                      <p className="text-white mb-0 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="lg:w-6/12 w-full px-[15px]">
                      <h4 className="text-white title mb-[15px]">
                        Subscribe To Our Newsletter
                      </h4>
                      <form
                        className="dzSubscribe"
                        ref={form}
                        onSubmit={sendEmail}
                      >
                        <div className="dzSubscribeMsg text-white"></div>
                        <div className="input-group flex flex-wrap relative items-stretch w-full">
                          <input
                            name="dzEmail"
                            required
                            type="text"
                            value={input}
                            onChange={(e) => {
                              setInput(e.target.value);
                            }}
                            className="form-control outline-none lg:h-[65px] h-[55px] w-full"
                            placeholder="Enter Your Email"
                          />
                          <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                            <button
                              name="submit"
                              value="submit"
                              type="submit"
                              className="btn btn-primary btn-hover-2 sm:py-3 sm:px-6 py-[10px] px-3"
                            >
                              <span className="sm:block hidden">Subscribe</span>
                              <i className="fa-solid fa-paper-plane sm:hidden block text-xl"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="xl:w-3/12 lg:w-4/12 sm:w-6/12 px-[15px]">
                  <div className="widget widget_getintuch mb-[30px]">
                    <h5 className="footer-title mb-[30px] xl:text-2xl text-xl font-semibold text-white uppercase leading-[1.1]">
                      Contact
                    </h5>
                    <ul>
                      <li>
                        <i className="flaticon-placeholder"></i>
                        <p>
                          1247/Plot No. 39, 15th Phase, Colony, Kkatpally,
                          Hyderabad
                        </p>
                      </li>
                      <li>
                        <i className="flaticon-telephone"></i>
                        <p>
                          +91 987-654-3210
                          <br />
                          +91 123-456-7890
                        </p>
                      </li>
                      <li>
                        <i className="flaticon-email-1"></i>
                        <p>
                          info@example.com
                          <br />
                          info@example.com
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
                <div className="xl:w-3/12 lg:w-3/12 sm:w-6/12 w-full px-[15px]">
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
            <Particls />
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom py-5 border-t border-[#ffffff1a] relative z-[1]">
            <div className="lg:flex lg:justify-between">
              <div className="lg:w-1/2 px-[15px] lg:text-left text-center">
                <span className="text-sm text-[#666666]">
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
              <div className="lg:w-1/2 px-[15px]">
                <ul className="footer-link mx-[-15px] lg:text-right text-center">
                  <li className="inline-block sm:px-[15px] px-[5px] relative">
                    <Link
                      to="/blog-standard"
                      className="text-[#666666] sm:text-sm text-[13px] tracking-[0.01em] font-normal"
                    >
                      Blog Detail
                    </Link>
                  </li>
                  <li className="inline-block sm:px-[15px] px-[5px] relative">
                    <Link
                      to="/about-us"
                      className="text-[#666666] sm:text-sm text-[13px] tracking-[0.01em] font-normal"
                    >
                      About
                    </Link>
                  </li>
                  <li className="inline-block sm:px-[15px] px-[5px] relative">
                    <Link
                      to="/testimonial"
                      className="text-[#666666] sm:text-sm text-[13px] tracking-[0.01em] font-normal"
                    >
                      Testimonials
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer2;
