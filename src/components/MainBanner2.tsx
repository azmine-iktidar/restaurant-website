import { Swiper, SwiperSlide } from "swiper/react";
import { MainBanner2Arr } from "../elements/JsonData";
import { Parallax, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";

const MainBanner2 = () => {
  const pagination = {
    clickable: true,
    el: ".main-swiper3-pagination",
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' +"0"+ (index + 1) + "</span>";
    },
  };
  return (
    <div className="main-bnr-2 overflow-hidden translate-y-[95px] max-xl:translate-y-[75px] mb-[90px]">
      <div className="swiper-bnr-pagination flex sm:left-0 right-0 lg:items-center flex-col justify-center w-[80px] max-xl:w-[50px] h-full absolute">
        <div className="main-button-prev block max-xl:hidden">
          <i className="fa-solid fa-arrow-up" />
        </div>
        <div className="main-swiper3-pagination"></div>
        <div className="main-button-next block max-xl:hidden">
          <i className="fa-solid fa-arrow-down" />
        </div>
      </div>
      <Swiper
        className="main-slider-3"
        direction="vertical"
        autoplay = {{
          delay: 1500,
        }}
        modules={[Parallax, Pagination, Autoplay]}
        pagination={pagination}
        parallax={true}
        speed={1500}
        // loop={true}
      >
        {MainBanner2Arr.map(
          ({ title, name, price, bgimg, img1, img2, img3, img4 }, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <div
                className="banner-inner1 bg-cover rounded-s-[30px] max-xl:rounded-none md:pt-[120px] pt-[50px] pb-[30px] overflow-hidden relative z-[1]"
                data-swiper-parallax="-10"
                data-swiper-parallax-duration="0.5"
                style={{
                  backgroundImage: `url(${bgimg})`,
                  backgroundSize: "cover",
                }}
              >
                <div className="container">
                  <div
                    className="row items-center justify-end"
                    data-swiper-parallax="-100"
                  >
                    <div className="lg:w-7/12 md:w-2/3 px-[15px]">
                      <div className="banner-content md:mb-[60px] mb-0">
                        <span className="font-medium text-xl text-primary block">
                          High Quality Test Station
                        </span>
                        <h1 className="title mb-4 font-lobster text-white 2xl:text-[80px] xl:text-[70px] lg:text-[60px] md:text-[50px] text-[36px]">
                          We believe Good Food Offer Great Smile
                        </h1>
                        <p className="lg:max-w-[580px] md:max-w-[350px] max-w-full font-light lg:text-lg sm:text-base text-sm leading-[27px] text-[#ffffffb3]">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua.
                        </p>

                        <div className="banner-btn flex items-center lg:mt-10 sm:mt-[40px] mt-5 gap-[30px] lg:mb-[80px]">
                          <Link
                            to="/contact-us"
                            className="btn btn-primary btn-md  btn-hover-1"
                          >
                            <span>Book a Table</span>
                          </Link>
                          <Link
                            to="/about-us"
                            className="btn btn-outline btn-transparent text-primary btn-hover-1 btn-md"
                          >
                            <span>View More</span>
                          </Link>
                        </div>
                        <div className="food-card border-dashed border border-[#ffffff66] rounded-[10px] w-[370px] relative block max-xl:hidden">
                          <div className="dz-head border-b border-dashed border-[#ffffff66] flex justify-between py-[15px] px-[25px]">
                            <h5 className="text-white mb-2">{title}</h5>
                            <ul className="rating flex">
                              <li><i className="fa-solid fa-star" /></li>
                              <li><i className="fa-solid fa-star" /></li>
                              <li><i className="fa-solid fa-star" /></li>
                              <li><i className="fa-solid fa-star" /></li>
                              <li><i className="fa-solid fa-star" /></li>
                            </ul>
                          </div>
                          <div className="dz-body flex justify-between py-[16px] px-[25px]">
                            <div className="dz-left">
                              <div className="profile-info flex">
                                <div className="dz-media">
                                  <img src={img1} alt="/" className="w-[45px] h-[45px] rounded-full"/>
                                </div>
                                <div className="dz-content ml-2">
                                  <h6 className="mb-[3px] text-white">{name}</h6>
                                  <p className="text-[13px] leading-5 text-[#C4C4C4] mb-4">Master Chief</p>
                                </div>
                              </div>
                              <p className="text-[#DCDCDC]">
                                Lorem ipsum dolor shit amet...
                              </p>
                            </div>
                            <div className="dz-right">
                              <h5 className="text-primary  mb-2">{price}</h5>
                              <Link
                                to="/shop-cart"
                                className="btn btn-primary btn-cart w-10 h-10 leading-[0.5rem] flex text-xl p-1"
                              >
                                <i className="flaticon-shopping-cart text-white"></i>
                              </Link>
                            </div>
                          </div>
                          <img className="target-line absolute bottom-[50px] -right-full z-[2] translate-x-[25%] min-w-[485px]" src={img2} alt="/" />
                        </div>
                      </div>
                    </div>
                    <div className="lg:w-5/12 md:w-1/3 px-[15px]">
                      <div className="banner-media relative">
                        <img
                          src={img4}
                          alt="/"
                          className="w-[40vw] min-w-[40vw] max-lg:w-[60vw] max-lg:min-w-[60vw] z-[2] relative"
                          data-swiper-parallax-scale="0.8"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <img className="leaf md:block hidden absolute top-0 left-[48.5%]" src={img3} alt="/" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default MainBanner2;
