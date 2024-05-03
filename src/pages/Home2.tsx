import { Link } from "react-router-dom";
import MainBanner2 from "../components/MainBanner2";
import { Home2IconWrapper } from "../elements/JsonData";
import Home2OurMenu from "../components/Home2OurMenu";
import Home2SpacialMenu from "../components/Home2SpacialMenu";
import { IMAGES } from "../constent/theme";
import Home2AreMenu from "../components/Home2AreMenu";
import TeamCarosel from "../components/TeamCarosel";
import Home2Testimonial from "../components/Home2Testimonial";
import Home2OurBlog from "../components/Home2OurBlog";
import { useEffect } from "react";

const Home2 = () => {
  useEffect(() => {
    document.body.setAttribute("data-color", "color_2");
  }, []);
  return (
    <>
      <MainBanner2 />
      <section className="content-inner sm:pt-[100px] sm:pb-[70px] pt-[50px] pb-5">
        <div className="container">
          <div className="row justify-center relative icon-wrapper2 md:mx-[-30px]">
            {Home2IconWrapper.map(({ icon, title }, ind) => (
              <div className="lg:w-2/6 w-full md:w-6/12 px-[30px] max-2lg:px-6 mb-[30px]" key={ind}>
                <div className="icon-bx-wraper bg-white overflow-hidden flex items-center duration-500">
                  <div className="icon-bx duration-500 bg-[var(--rgba-primary-1)] xl:w-[100px] xl:h-[100px] xl:min-w-[100px] w-[80px] h-[80px] min-w-[80px] rounded-full text-center mr-5 xl:leading-[110px] leading-[80px]">
                    <span className="icon-cell text-primary duration-500">
                      <i className={`xl:text-[45px] text-[35px] ${icon}`}></i>
                    </span>
                  </div>
                  <div className="con-content overflow-hidden">
                    <h5 className="dz-title mb-2 xl:text-xl text-lg">
                      <Link to="/services">{title}</Link>
                    </h5>
                    <p className="text-[15px]">lorem ipsum dolor shit amet lorem ipsum</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="content-inner-1 pb-[100px] overflow-hidden pt-0">
        <div className="container">
          <div className="section-head font-lobster mb-[50px] max-xl:mb-[30px] mx-auto relative flex items-center justify-between">
            <h2 className="title mb-0 text-black2">Browse Our Menu</h2>
            <div className="pagination-align flex">
              <div className="menu-button-prev1 btn-prev btn-hover-2">
                <i className="fa-solid fa-arrow-left sm:text-xl text-[15px]" />
              </div>
              <div className="menu-button-next1 btn-next btn-hover-2">
                <i className="fa-solid fa-arrow-right sm:text-xl text-[15px]" />
              </div>
            </div>
          </div>
        </div>
        <Home2OurMenu prev={"menu-button-prev1"} next={"menu-button-next1"} />
      </section>
      <section
        className="bg-fixed sm:pt-[100px] pt-[50px] lg:pb-[70px] sm:pb-10 pb-5 relative z-[1] after:content-[''] after:absolute after:z-[-1] after:bg-black-blur after:opacity-100 after:w-full after:h-full after:top-0 after:left-0 after:backdrop-blur-[6px] 2xl:mx-[100px] 2xl:rounded-[30px] overflow-hidden"
        style={{
          backgroundImage: `url(${IMAGES.background_pic1})`,
          backgroundAttachment: "fixed",
        }}
      >
        <div className="container">
          <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
            <h2 className="font-lobster text-white">Today's Special</h2>
          </div>
          <Home2SpacialMenu />
        </div>
      </section>
      <section className="content-inner-1 lg:py-[100px] py-[50px] relative ">
        <div className="container">
          <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
            <h2 className="title font-lobster text-black2">Our Menu</h2>
          </div>
          <Home2AreMenu />
        </div>
      </section>
      <section
        className="bg-light sm:content-inner lg:pt-[100px] pt-[70px] lg:pb-[70px] pb-[40px] relative overflow-hidden max-2xl:mx-0 mx-[100px] max-2xl:rounded-none rounded-[30px] bg-fixed"
        style={{ backgroundImage: `url(${IMAGES.background_pic10})` }}
      >
        <div className="container">
          <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
            <h2 className="font-lobster">Meet The Chef's</h2>
          </div>
          <TeamCarosel />
        </div>
      </section>
      <section className="content-inner-2 overflow-hidden lg:pt-[100px] sm:pt-[70px] pt-[50px]">
        <div className="container">
          <div className="mb-[50px] max-xl:mb-[30px] relative mx-auto text-center">
            <h2 className="font-lobster">Customer's Comment</h2>
          </div>
          <Home2Testimonial />
        </div>
      </section>
      <Home2OurBlog />
    </>
  );
};

export default Home2;
