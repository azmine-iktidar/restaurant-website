import { useState } from "react";
import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import { ContactUsArr } from "../elements/JsonData";

const ContactUs = () => {
  const [active, setActive] = useState<number>(1);
  return (
    <>
      <CommonBanner img={IMAGES.banner_bnr1} title="Contact Us" subtitle="Contact Us"/>
      <section className="section-wrapper-8 sm:pt-[100px] pt-[50px] lg:pb-[100px] sm:pb-10 pb-5 md:px-[30px] px-[15px] 2xl:mx-[100px] lg:mx-[50px] bg-[#2222220a] rounded-[30px] 2xl:mb-[100px] lg:mb-[70px] 2xl:mt-[270px] lg:mt-[190px]">
        <div className="container">
          <div className="row inner-section-wrapper items-center 2xl:mb-[80px] lg:mb-[60px] md:mb-[30px] mb-[45px] 2xl:mt-[-215px] lg:mt-[-170px] mt-0">
            {ContactUsArr.map(({ icon, text, title }, ind) => (
              <div className="lg:w-1/4 sm:w-1/2 w-full px-[15px]" key={ind}>
                <div
                  className={`icon-bx-wraper relative mb-[30px] xl:pb-[60px] lg:pb-[45px] lg:pt-0 lg:px-0 py-[30px] px-5 lg:rounded-none rounded-[10px] lg:shadow-none shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:z-auto z-[1] text-center duration-500 style-5 hover-aware box-hover lg:overflow-visible overflow-hidden group ${
                    active === ind ? "active" : ""
                  }`}
                  onMouseEnter={() => {
                    setActive(ind);
                  }}
                >
                  <div className="icon-bx xl:w-[115px] lg:w-[90px] w-[60px] xl:h-[115px] lg:h-[90px] h-[60px] xl:leading-[115px] lg:leading-[90px] leading-[60px] lg:absolute mx-auto lg:mb-0 mb-[15px] lg:translate-x-[-50%] lg:translate-y-[-50%] left-[50%] z-[2] text-center group-hover:bg-transparent">
                    <div className="icon-cell lg:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:bg-white rounded-full">
                      <i className={`lg:text-[50px] lg:leading-[50px] text-[45px] leading-[45px] text-primary lg:group-hover:text-primary group-hover:text-white ${icon}`}></i>
                    </div>
                  </div>
                  <div className="icon-content xl:pt-[90px] lg:pt-[65px] xl:px-10 lg:px-5 lg:pb-[30px] lg:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] lg:rounded-[10px] lg:bg-white lg:relative lg:overflow-hidden z-[1] group-hover:text-white">
                    <h5 className="mb-[10px]">{title}</h5>
                    {text}
                    <div className="effect absolute block rounded-[50%] z-[-1] translate-x-[-50%] translate-y-[-50%] bg-primary w-0 h-0 duration-500 group-hover:w-[300%] group-hover:h-[300%]"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
            <h2 className="font-lobster">Reservation</h2>
          </div>
          <form className="dzForm dezPlaceAni" method="POST">
            <div className="dzFormMsg"></div>
            <input type="hidden" className="form-control" name="dzToDo" value="Contact"/>
            <div className="row">
              <div className="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
                <label className="form-label text-sm font-medium mb-[10px] text-primary">Your Name</label>
                <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                  <input
                    name="dzName"
                    required
                    type="text"
                    className="form-control bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
                <label className="form-label text-sm font-medium mb-[10px] text-primary">Your Email</label>
                <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                  <input
                    name="dzEmail"
                    required
                    type="text"
                    className="form-control bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none"
                    placeholder="info@example.com"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
                <label className="form-label text-sm font-medium mb-[10px] text-primary">Your Number</label>
                <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                  <input
                    name="dzPhoneNumber"
                    required
                    type="text"
                    className="form-control bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none dz-number"
                    placeholder="9876543210"
                  />
                </div>
              </div>
              <div className="md:w-1/2 w-full mb-[30px] sm:mb-[50px] px-[15px]">
                <label className="form-label text-sm font-medium mb-[10px] text-primary">Members</label>
                <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                  <input
                    name="dzOther[Person]"
                    required
                    type="text"
                    className="form-control bg-transparent h-[48px] leading-6 p-0 pb-[10px] border-0 placeholder:text-black2 outline-none"
                    placeholder="1 Person"
                  />
                </div>
              </div>
              <div className="w-full px-[15px] mb-[40px]">
                <label className="form-label text-primary">Message</label>
                <div className="input-group m-0 relative flex flex-wrap items-center border-b border-white input-line input-black">
                  <textarea
                    name="dzMessage"
                    required
                    className="form-control bg-transparent resize-none h-[105px] w-full leading-6 p-0 pb-[10px] border-0 placeholder:text-black2"
                    placeholder="Hi, do you Have a moment to talk About !"
                  ></textarea>
                </div>
              </div>              
              <div className="w-full px-[15px] text-center">
                <button name="submit" value="submit" type="reset" className="btn btn-primary btn-hover-1">
                  <span>Book A Table</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
