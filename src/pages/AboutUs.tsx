import { IMAGES } from "../constent/theme";
import CommonBanner from "../elements/CommonBanner";
import ModalVideoBox from "../elements/ModalVideoBox";
import { AboutServiceArr } from "../elements/JsonData";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="page-content bg-white">
      <CommonBanner
        img={IMAGES.banner_bnr1}
        title={"About Us"}
        subtitle={"About Us"}
      />
      <ModalVideoBox />
      <section className="lg:pt-[100px] sm:pt-[70px] pt-[50px] overflow-hidden lg:pb-[70px] sm:pb-10 pb-5">
        <div className="container">
          <div className="2xl:mb-[50px] mb-[35px] relative mx-auto text-center">
            <h2 className="font-lobster max-xl:leading-[50px]">What We Do</h2>
          </div>
          <div className="row">
            {AboutServiceArr.map(({ icon, title }, ind) => (
              <div className="lg:w-1/4 sm:w-1/2 w-full mb-[30px] px-[15px]" key={ind}>
                <div className="icon-bx-wraper style-3 rounded-[10px] bg-[#2222220d] text-center h-full py-[30px] px-3 border-[2px] border-transparent flex flex-col duration-500 hover:bg-white hover:border-primary hover:shadow-[0px_15px_55px_rgba(34,34,34,0.15)] hover:translate-y-[-10px]">
                  <div className="icon-bx w-[95px] h-[95px] rounded-full bg-primary mx-auto mb-5 flex items-center justify-center">
                    <div className="icon-cell">
                      <i className={`text-[50px] text-white leading-[50px] ${icon}`}></i>
                    </div>
                  </div>
                  <div className="icon-content">
                    <h5 className="mb-2"><Link to="/service-detail">{title}</Link></h5>
                    <p>Lorem Ipsum is simply dummy text of the printing and </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
