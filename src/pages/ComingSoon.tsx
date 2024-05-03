import { IMAGES } from "../constent/theme";
import Lottie from "react-lottie-player";
import lottieJson from "../assets/json/coming-soon.json";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent, useRef, useState } from "react";

const ComingSoon = () => {
  const year = new Date().getFullYear();
  const [input, setInput] = useState<string>("");
  const form = useRef<HTMLFormElement | null>(null);
  const heartRef = useRef<HTMLSpanElement | null>(null);
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
      <div className="page-content bg-white">
        <div className="coming-wrapper overflow-hidden xl:px-[25px] py-[25px] relative z-[1]">
          <div className="container">
            <img
              className="bg-img dz-move absolute top-5 z-[-1] animate-dz lg:block hidden"
              src={IMAGES.background_pic17}
              alt="/"
            />
            <div className="row">
              <div className="lg:w-4/6 w-full px-[15px] mx-auto">
                <div className="inner-content text-center w-full 2xl:min-h-[650px] lg:min-h-[500px] md:min-h-[600px] sm:min-h-[500px] min-h-[400px] overflow-hidden">
                  <div className="logo-header mx-auto mb-[10px] h-[65px] w-[160px] align-middle logo-header items-center relative flex">
                    <Link to="/" className="anim-logo">
                      <img src={IMAGES.logo} alt="/" />
                    </Link>
                  </div>
                  <h3 className="coming-head md:text-[32px] text-[25px] leading-[1.3] text-[#323232]">
                    WE ARE COMING SOON!
                  </h3>
                  <p className="coming-para text-[#828282] sm:text-base text-[15px] tracking-[0.01em] mb-4">
                    Stay tuned for something amazing
                  </p>
                  <Lottie
                    className="coming-media relative z-[-1] scale-[2.5]"
                    loop
                    animationData={lottieJson}
                    play
                  />
                </div>
                <div className="middle-content 2xl:mb-[60px] mb-[35px]">
                  <h5 className="font-normal mb-[20px] text-[#222222]">
                    Subscribe to our mailing list to get latest updates
                  </h5>
                  <form
                    className="dzSubscribe mb-[15px]"
                    ref={form}
                    onSubmit={sendEmail}
                  >
                    <div className="input-group flex flex-wrap relative items-stretch w-full">
                      <input
                        name="dzEmail"
                        required
                        value={input}
                        onChange={(e) => {
                          setInput(e.target.value);
                        }}
                        type="text"
                        className="form-control outline-none lg:h-[65px] h-[55px] w-full sm:pr-[150px] pr-20 bg-grey-border"
                        placeholder="Enter Your Email"
                      />
                      <div className="input-group-addon absolute top-[50%] right-[12px] translate-y-[-50%] z-[9]">
                        <button
                          name="submit"
                          value="submit"
                          type="submit"
                          className="rounded-md btn-primary btn-hover-2 lg:py-3 xl:px-6 sm:py-[10px] py-[6px] px-3 text-sm"
                        >
                          <span className="sm:block hidden">Send Request</span>
                          <i className="fa-solid fa-paper-plane sm:hidden block text-xl"></i>
                        </button>
                      </div>
                    </div>
                  </form>
                  <div className="social-icon text-center">
                    <ul className="mr-[-20px] ml-[-5px]">
                      <li className="inline-block px-[5px] mr-5">
                        <Link
                          target="_blank"
                          className="text-xl"
                          to="https://www.facebook.com/"
                        >
                          <i className="text-[#000000] text-lg fab fa-facebook-f" />
                        </Link>
                      </li>
                      <li className="inline-block px-[5px] mr-5">
                        <Link
                          target="_blank"
                          className="text-xl"
                          to="https://twitter.com/"
                        >
                          <i className="text-[#000000] text-lg fab fa-twitter" />
                        </Link>
                      </li>
                      <li className="inline-block px-[5px] mr-5">
                        <Link
                          target="_blank"
                          className="text-xl"
                          to="https://www.youtube.com/"
                        >
                          <i className="text-[#000000] text-lg fa-brands fa-youtube" />
                        </Link>
                      </li>
                      <li className="inline-block px-[5px] mr-5">
                        <Link
                          target="_blank"
                          className="text-xl"
                          to="https://www.instagram.com/"
                        >
                          <i className="text-[#000000] text-lg fab fa-instagram" />
                        </Link>
                      </li>
                      <li className="inline-block px-[5px] mr-5">
                        <Link
                          target="_blank"
                          className="text-xl"
                          to="https://www.linkedin.com/"
                        >
                          <i className="text-[#000000] text-lg fa-brands fa-linkedin-in" />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="coming-footer text-center">
                  <p className="lg:text-base text-[15px] text-[#828282] tracking-[0.01em]">
                    © Copyrights{" "}
                    <span
                      className="bg-heart w-[60px] h-[60px] inline-block my-[-25px] mx-[-18px] heart cursor-pointer"
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
                    </Link>{" "}
                    | {year} All Rights Reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
