import { Link } from "react-router-dom";
import { IMAGES } from "../constent/theme";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { FormEvent, useRef, useState } from "react";
import Particls from "../components/Particls";

const UnderMaintenance = () => {
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
      <div className="page-content bg-white">
        <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 relative overflow-hidden min-h-[750px] max-lg:min-h-[600px] h-[100vh] under-construction" id="app-banner">
          <div className="container">
            <div className="row">
              <div className="md:w-5/12 w-full px-[15px]">
                <div className="inner-construction z-[2] relative">
                  <h3 className="dz-head lg:text-[40px] text-[34px] font-bold leading-[1.3] mb-[15px]">We are digging<br /> deep down</h3>
                  <p className="const-p xl:text-lg lg:text-base text-sm mb-[25px]">
                    We are currently facing some issues with our system and our
                    team is working hard to resolve it. You can subscribe to our
                    mailing list if you want to get notified
                  </p>
                  <div className="space-right mb-[25px] lg:max-w-[350px] md:max-w-[270px] max-w-full">
                    <form className="dzSubscribe"  method="post" ref={form} onSubmit={sendEmail}>
                      <div className="dzSubscribeMsg text-white fixed xl:right-[5%] md:right-[9%]right-[5%] xl:bottom-[20px] md:bottom-[17px] sm:bottom-[17px] bottom-[10%]"></div>
                      <div className="input-group relative flex flex-wrap items-stretch w-full">
                        <input name="dzEmail" required type="text" value={input}
                          onChange={(e) => {setInput(e.target.value);}} placeholder="Enter Your Email:"
                          className="form-control block leading-[1.6] w-full mb-[15px]"
                        />
                        <button name="submit" value="submit" type="submit" className="btn btn-primary btn-hover-3 w-full">
                          <span className="btn-text" data-text="Subscribe">Subscribe</span>
                        </button>
                      </div>
                    </form>
                  </div>
                  <p className="mb-4">You can also follow us on</p>
                  <div className="social-icon">
                    <ul className="mx-[-5px]">
                      <li className="inline-block px-[5px]"><Link target="_blank" className="text-base h-10 w-10 min-w-10 leading-10 block text-center text-black2" to="https://www.facebook.com/"><i className="fab fa-facebook-f"/></Link></li>
                      <li className="inline-block px-[5px]"><Link target="_blank" className="text-base h-10 w-10 min-w-10 leading-10 block text-center text-black2" to="https://twitter.com/"><i className="fab fa-twitter"/></Link></li>
                      <li className="inline-block px-[5px]"><Link target="_blank" className="text-base h-10 w-10 min-w-10 leading-10 block text-center text-black2" to="https://www.youtube.com/"><i className="fa-brands fa-youtube"/></Link></li>
                      <li className="inline-block px-[5px]"><Link target="_blank" className="text-base h-10 w-10 min-w-10 leading-10 block text-center text-black2" to="https://www.instagram.com/"><i className="fab fa-instagram"/></Link></li>
                      <li className="inline-block px-[5px]"><Link target="_blank" className="text-base h-10 w-10 min-w-10 leading-10 block text-center text-black2" to="https://www.linkedin.com/"><i className="fa-brands fa-linkedin-in"/></Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="md:w-7/12 w-full px-[15px]">
                <div className="construction-media relative z-[1]">
                  <img  src={IMAGES.background_pic18} alt="/"
                    className="animate-motion md:absolute 2xl:left-[120px] left-0 top-0 w-full 2xl:min-w-[35vw] xl:min-w-[830px] lg:min-w-[730px] md:min-w-[550px] min-w-full"
                  />
                </div>
              </div>
            </div>
          </div>          
        </section>
      </div>
      <Particls />
    </>
  );
};

export default UnderMaintenance;
