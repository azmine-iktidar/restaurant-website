import { Link } from "react-router-dom";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { MainBannerArr } from "../elements/JsonData";
import { EffectFade, Thumbs, Navigation, Pagination } from "swiper/modules";
import { IMAGES } from "../constent/theme";
import { useRef, useState } from "react";

const MainBanner = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const ref = useRef<SwiperRef | null>(null);
  const pagination = {
    clickable: true,
    el: ".main-slider-pagination",
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' +"0"+ (index + 1) + "</span>";
    },
  };
  return (
    <div className="main-bnr-one overflow-hidden relative">     
        <div className="slider-pagination 2xl:left-[50px] xl:left-0 max-xl:left-auto max-xl:right-[20px] z-[2]">
          <div className="main-button-prev lg:block hidden mx-auto">
            <i className="fa-solid fa-arrow-up" />
          </div>
          <div className="main-slider-pagination"></div>
          <div className="main-button-next lg:block hidden mx-auto">
            <i className="fa-solid fa-arrow-down" />
          </div>
        </div>
      <Swiper className="main-slider-1  overflow-hidden z-[1]" slidesPerView={1}
          loop={true}
          effect={"fade"}
          modules={[EffectFade, Thumbs, Navigation, Pagination]}
          pagination={pagination}
          navigation={{
            prevEl: ".main-button-prev",
            nextEl: ".main-button-next",
          }}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          onSwiper={(swiper) => {
            if (ref.current) ref.current.swiper = swiper;
          }}
      >
        {MainBannerArr.map(
          ({ img, subtitle, title, title2, title3, text }, ind) => (
            <SwiperSlide key={ind}>
              <div className="banner-inner lg:pt-0 md:pt-[110px] pt-[110px] overflow-hidden">
                <div className="container h-full">
                  <div className="row items-center md:justify-between justify-center h-full">
                    <div className="md:w-7/12 px-[15px]">
                      <div className="banner-content md:mb-[60px] mb-0">
                        <span className="font-medium md:text-xl text-base text-[var(--secondary-dark)] mb-[10px] block">{subtitle}</span>
                        <h1 className="font-lobster mb-2.5 text-black2">
                          {title}
                          <br />
                          {title2}{" "}
                          <span className="text-primary">{title3}</span>
                        </h1>
                        <p className="max-w-[500px] lg:text-lg sm:text-base text-sm leading-[27px]">{text}</p>
                        <div className="banner-btn flex items-center lg:mt-10 mt-[25px] gap-[30px]">
                          <Link
                            to="/contact-us"
                            className="btn btn-primary btn-md btn-hover-1"
                          >
                            <span>Book a Table</span>
                          </Link>
                          <Link
                            to="/about-us"
                            className="btn btn-outline text-primary btn-md btn-hover-1"
                          >
                            <span>View More</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="md:w-5/12 px-[15px]">
                      <div className="banner-media">
                        <img src={img} alt="/" className="xl:w-full lg:w-[450px] md:w-[100%] sm:w-[250px] w-[250px]" />
                      </div>
                    </div>
                  </div>
                </div>
                <img src={IMAGES.main_slide_img3} className="img1" alt="/" />
                <img src={IMAGES.main_slide_img1} className="img2" alt="/" />
                <img src={IMAGES.main_slide_img2} className="img3 animate-motion" alt="/" />
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
      <div className="container relative z-[1]">
        <div className="main-thumb1-area swiper-btn-lr">
          <Swiper
              className="swiper main-thumb1 w-[612px] h-auto overflow-hidden"
              slidesPerView={2}
              spaceBetween={25}
              freeMode={true}
              loop={true}
              modules={[Navigation]}            
              onSwiper={(swiper: any) => {
                  setThumbsSwiper(swiper);
              }}
              navigation={{
                prevEl: ".thumb-button-prev",
                nextEl: ".thumb-button-next",
              }}
          >
            {MainBannerArr.map(({ imgThumb }, ind) => (
              <SwiperSlide  key={ind}>
                <div className="food-card flex items-center">
                    <div className="dz-media w-[80px] min-w-[80px] rounded-md relative overflow-hidden">
                      <img src={imgThumb} alt="/" />
                    </div>
                    <div className="dz-content ml-[15px]">
                      <h5 className="mb-1">BreakFast</h5>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="thumb-button-prev btn-prev-1 top-[50%] absolute translate-y-[-50%] h-[80px] rounded-md w-[27px] leading-[80px] text-center text-[#222222] text-sm duration-500 hover:bg-primary hover:text-white bg-[#2222221a] left-0 right-auto">
            <i className="fa-solid fa-angle-left" />
          </div>
          <div className="thumb-button-next btn-next-1 top-[50%] absolute translate-y-[-50%] h-[80px] rounded-md w-[27px] leading-[80px] text-center text-[#222222] text-sm duration-500 hover:bg-primary hover:text-white bg-[#2222221a] right-0">
            <i className="fa-solid fa-angle-right" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
