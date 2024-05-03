import { IMAGES } from "../constent/theme";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent, useRef, useState } from "react";

const Footer3 = () => {
  const year = new Date().getFullYear();
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
      <footer
        className="site-footer style-3 bg-[#2222220d] relative"
        id="footer"
      >
        <div className="footer-bg-wrapper">
          <div className="container">
            <div className="footer-top lg:pt-[40px] pt-5 sm:pb-5 pb-[50px] relative z-[0]">
              <div className="footer-subscribe-wrapper lg:mb-[60px] sm:mb-[40px] sm:pb-[40px] pb-[30px] mb-[30px] border-b border-[#2222221a]">
                <div className="wrapper-inner">
                  <div className="row justify-between">
                    <div className="lg:w-4/12 px-[15px] lg:m-0 mb-5">
                      <div className="footer-logo mb-[15px]">
                        <Link
                          to="/"
                          className="anim-logo pt-[5px] relative inline-block"
                        >
                          <img src={IMAGES.logo} alt="swigo logo" />
                        </Link>
                      </div>
                      <p className="mb-0 text-sm">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry.
                      </p>
                    </div>
                    <div className="lg:w-6/12 w-full px-[15px]">
                      <h5 className="title mb-[15px] text-black2 lg:text-2xl text-[22px]">
                        Subscribe To Our Newsletter
                      </h5>
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
                            className="form-control outline-none lg:h-[65px] h-[55px] w-full border-none placeholder:text-black2 sm:pr-[150px] pr-20"
                            placeholder="Enter Your Email"
                          />
                          <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                            <button
                              name="submit"
                              value="submit"
                              type="submit"
                              className="btn btn-primary btn-hover-2 lg:py-3 xl:px-6 sm:py-[10px] py-[6px] px-3"
                            >
                              <span className="sm:block hidden">Subscribe</span>
                              <i className="fa-solid fa-paper-plane sm:hidden block text-xl" />
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="lg:w-5/12 w-1/2 md:text-left px-[15px]">
                  <h5 className="footer-title lg:mb-5 mb-[15px] lg:text-2xl text-xl uppercase">
                    OUR LINKS
                  </h5>
                  <div className="footer-menu md:mb-[35px] mb-[22px]">
                    <ul className="xl:mx-[-15px] sm:mx-[-8px] m-0">
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/"
                        >
                          Home
                        </Link>
                      </li>
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/about-us"
                        >
                          About Us
                        </Link>
                      </li>
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/services"
                        >
                          Services
                        </Link>
                      </li>
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/team"
                        >
                          Team
                        </Link>
                      </li>
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/blog-standard"
                        >
                          Blog
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="lg:w-7/12 w-1/2 md:text-right px-[15px]">
                  <h5 className="footer-title lg:mb-5 mb-[15px] lg:text-2xl text-xl uppercase">
                    Help Center
                  </h5>
                  <div className="footer-menu md:mb-[35px] mb-[22px]">
                    <ul className="xl:mx-[-15px] sm:mx-[-8px] m-0">
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/faq"
                        >
                          FAQ
                        </Link>
                      </li>
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/shop-style-1"
                        >
                          Shop
                        </Link>
                      </li>
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/shop-style-2"
                        >
                          Category Filter
                        </Link>
                      </li>
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/testimonial"
                        >
                          Testimonials
                        </Link>
                      </li>
                      <li className="sm:inline-block block 2xl:mx-[15px] sm:mx-2 m-0 sm:py-0 py-[5px]">
                        <Link
                          className="text-sm text-[#666666] tracking-[0.01em]"
                          to="/contact-us"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="footer-bottom relative py-5 border-t border-[#2222221a]">
              <div className="row">
                <div className="sm:w-1/2 w-full sm:text-left text-center pl-[15px] pr-[15px]">
                  <p className="xl:text-[15px] text-sm text-[#666666]">
                    Copyright {year} All rights reserved.
                  </p>
                </div>
                <div className="sm:w-1/2 w-full sm:text-right text-center pl-[15px] pr-[15px]">
                  <span className="text-sm text-[#666666]">
                    Crafted With{" "}
                    <span
                      className="bg-heart w-[60px] h-[60px] inline-block my-[-25px] mx-[-18px] cursor-pointer"
                      ref={heartRef}
                      onClick={() => {
                        heartRef.current?.classList.toggle("heart-blast");
                      }}
                    ></span>{" "}
                    by{" "}
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
        </div>
        <img
          className="bg1 bottom-[10px] left-0 absolute block max-2xl:hidden animate-dz"
          src={IMAGES.background_pic5}
          alt="/"
        />
        <img
          className="bg2 top-[15px] right-[10px] absolute block max-2xl:hidden animate-dz"
          src={IMAGES.background_pic6}
          alt="/"
        />
      </footer>
    </>
  );
};

export default Footer3;
