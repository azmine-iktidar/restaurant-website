import { Link } from "react-router-dom";
import { TeamCaroselArr } from "../elements/JsonData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const TeamCarosel = () => {
  return (
    <div className="container">
      <Swiper
        className="swiper team-swiper overflow-visible swiper-visible"
        slidesPerView={4}
        watchSlidesProgress={true}
        spaceBetween={30}
        loop={true}
        speed={1200}
        modules={[Autoplay, Navigation]}
        navigation={{
          prevEl: ".team-button-prev",
          nextEl: ".team-button-next",
        }}
        autoplay={{
          delay: 1500,
        }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {TeamCaroselArr.map(({ img, name, position }, ind) => (
          <SwiperSlide className="swiper-slide" key={ind}>
            <div className="slide-box">
                <div className="shadow-[0_15px_55px_rgba(35,35,35,0.15)] rounded-[10px] bg-white overflow-hidden group">
                  <div className="relative  overflow-hidden z-[1] before:content-[''] before:absolute before:w-[200px] before:h-[200px] before:bg-black2 before:top-[-100px] before:left-[-100px] before:opacity-30 before:z-[1] before:duration-500 before:rounded-full before:scale-50 before:translate-x-[-50%] group-hover:before:scale-[7]">                    
                      <img src={img} alt="/" className="group-hover:scale-110 duration-500 block w-full" />                    
                  </div>
                  <div className="content bg-white flex justify-between items-center py-[15px] px-5">
                    <div className="clearfix">
                      <h6><Link to="/team-detail">{name}</Link></h6>
                      <span className="font-normal text-sm leading-5 text-primary">{position}</span>
                    </div>
                    <ul className="team-social">
                      <li>
                          <Link className="text-xl inline-block h-10 w-10 leading-10 text-center rounded-lg bg-primary text-white pt-[2px] cursor-pointer" to="#"><i className="flaticon-share" /></Link>
                          <ul className="sub-team-social absolute bottom-[20px] z-[1] w-10 rounded-lg opacity-0 duration-500 	hover:opacity-100 hover:pb-[80px] cursor-pointer">
                            <li className="mb-2 relative">
                              <Link className="text-white duration-500 text-center text-lg bg-[#4867AA] h-10 w-10 flex items-center justify-center rounded-lg" to="https://www.facebook.com/" target="_blank">
                                <i className="fab fa-facebook-f" />
                              </Link>
                            </li>
                            <li className="mb-2 relative">
                              <Link className="text-white duration-500 text-center text-lg bg-[#81B2DF] h-10 w-10 flex items-center justify-center rounded-lg" to="https://twitter.com/" target="_blank">
                                <i className="fab fa-twitter" />
                              </Link>
                            </li>
                            <li className="mb-2 relative">
                              <Link className="text-white duration-500 text-center text-lg bg-[#D74141] h-10 w-10 flex items-center justify-center rounded-lg" to="https://www.instagram.com/" target="_blank">
                                <i className="fab fa-instagram"/>
                              </Link>
                            </li>
                            <li className="mb-2 relative">
                              <Link className="text-white duration-500 text-center text-lg bg-[#3A9DF9] h-10 w-10 flex items-center justify-center rounded-lg" to="https://www.linkedin.com/" target="_blank">
                                <i className="fa-brands fa-linkedin-in" />
                              </Link>
                            </li>
                          </ul>
                      </li>
                    </ul>
                  </div>
                </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="swiper-nav">
          <div className="swiper-button-prev team-button-prev group hover:before:animate-spin">
            <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative" />
          </div>
          <div className="swiper-button-next team-button-next group hover:before:animate-spin">
            <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative" />
          </div>
        </div>
      </Swiper>
    </div>
  );
};

export default TeamCarosel;
