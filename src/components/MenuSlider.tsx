import { Link } from "react-router-dom";
import { MenuSliderArr } from "../elements/JsonData";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const MenuSlider = () => {
  return (
    <div className="slider-frame relative">
      <Swiper
        className="swiper menu-swiper"
        slidesPerView={4}
        spaceBetween={30}
        loop={true}
        autoplay ={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        speed={1500}
        navigation={{
          prevEl: ".img-button-prev",
          nextEl: ".img-button-next",
        }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {MenuSliderArr.map(({ img, name, price }, ind) => (
          <SwiperSlide  key={ind}>
            <div className="slide-box">
                <div className="dz-img-box2 group">
                  <div className="w-full min-w-full h-full">
                      <img src={img} alt="/" className="block w-full" />
                  </div>
                  <span className="absolute bg-[var(--secondary-dark)] left-0 text-white rounded-ee-[10px] uppercase py-[4px] px-1.5 font-semibold text-xs leading-[18px] z-[2] group-hover:top-0 top-[-40px] duration-500">TOP SELLER</span>
                  <div className="hover-content flex justify-between py-5 px-[30px] absolute bottom-0 opacity-0 z-[2] w-full items-center  duration-500 mb-[-100px] group-hover:mb-0 group-hover:opacity-100">
                    <div className="info relative">
                        <h5 className="mb-0">
                          <Link className="text-white" to="/our-menu-1">{name}</Link>
                        </h5>
                      <span className="text-xl text-yellow font-bold leading-[30px]">{price}</span>
                    </div>
                    <Link to="/shop-cart">
                      <i className="flaticon-shopping-cart items-center bg-white rounded-md min-w-[45px] h-[45px] min-h-[45px] leading-[45px] flex align-center relative justify-center text-2xl text-center"></i>
                    </Link>
                  </div>
                </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-nav">
        <div className="swiper-button-prev prev1 group hover:before:animate-spin">
          <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative" />
        </div>
        <div className="swiper-button-next next1 group hover:before:animate-spin">
          <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative" />
        </div>
      </div>
    </div>
  );
};

export default MenuSlider;
