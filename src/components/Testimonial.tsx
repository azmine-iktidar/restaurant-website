import { useState, useRef } from "react";
import { TestimonialData } from "../elements/JsonData";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { Grid, Thumbs, Navigation } from "swiper/modules";

const Testymonial = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState();
  const ref = useRef<SwiperRef | null>(null);
  return (
    <div className="row mx-0">
      <div className="lg:w-7/12 w-full">
        <Swiper
          className="swiper testimonial-one-thumb w-full"
          slidesPerView={3}
          grid={{ rows: 2 }}
          modules={[Grid]}
          speed={1500}
          freeMode={true}          
          onSwiper={(swiper: any) => {
            setThumbsSwiper(swiper);
          }}
        >
          {TestimonialData.map(({ img }, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <img src={img} alt="/" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lg:w-5/12 w-full">
        <Swiper
          className="swiper testimonial-one-swiper h-100"
          modules={[Thumbs, Navigation]}
          thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
          onSwiper={(swiper) => {
            if (ref.current) ref.current.swiper = swiper;
          }}
        >
          {TestimonialData.map(({ name, skill }, ind) => (
            <SwiperSlide className="swiper-slide" key={ind}>
              <div className="testimonial-1 bg-primary relative lg:py-[35px] lg:px-10 py-[25px] px-[15px] h-full lg:rounded-se-[10px] rounded-ee-[10px] rounded-se-none lg:rounded-es-none rounded-es-[10px] flex flex-col">
                <div className="testimonial-text relative mb-[10px]">
                  <p className="lg:text-[18px] max-2lg:text-[16px] text-base text-white leading-[1.8]">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don't
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn't
                    anything embarrassing hidden in the middle of text.
                  </p>
                </div>
                <div className="testimonial-info pl-[15px] lg:mt-[60px] max-2lg:mt-[40px] relative z-[1] after:content-[''] after:bg-[var(--secondary)] after:rounded after:h-[5px] after:w-[50px] after:absolute after:top-[25px] after:left-[-22px] after:rotate-90">
                  <h5 className="testimonial-name font-bold leading-[32px] text-white">{name}</h5>
                  <span className="testimonial-position text-white leading-[21px] text-sm block">{skill}</span>
                </div>
                <i className="flaticon-right-quote quote absolute lg:right-[35px] right-5 bottom-[5px] lg:text-[140px] text-[85px] text-[var(--secondary)] inline-flex items-center"></i>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testymonial;
