import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { OurBlogArr } from "../elements/JsonData";
import { Link } from "react-router-dom";

const OurBlog = () => {
  return (
    <Swiper
      className="swiper-visible blog-swiper overflow-visible"
      slidesPerView={2}
      spaceBetween={30}
      loop={true}
      speed={1200}
      modules={[Autoplay, Navigation]}
      autoplay={{ delay: 1500 }}
      navigation={{
        prevEl: ".blog-button-prev",
        nextEl: ".blog-button-next",
      }}
      breakpoints={{
        1024: { slidesPerView: 2 },
        240: { slidesPerView: 1 },
      }}
    >
      {OurBlogArr.map(({ img, title }, ind) => (
        <SwiperSlide className="swiper-slide" key={ind}>
          <div className="slide-box">
            <div className="card rela overlay-shine rounded-lg overflow-hidden shadow-[0_15px_55px_rgba(34,34,34,0.1)] sm:flex w-full bg-white group">
              <div className="dz-media sm:min-w-[240px] sm:w-[240px] w-full sm:h-auto h-[250px] mb-0 relative overflow-hidden">
                <Link to="/blog-standard" className="block h-full">
                  <img src={img} alt="/" className="h-full object-cover w-full group-hover:scale-110 duration-500"/>
                </Link>
              </div>
              <div className="content flex-col flex py-[25px] px-[30px] relative">
                <div className="mb-2.5">
                  <ul className="flex items-center">
                    <li className="inline-block relative text-[13px] mr-3">
                      <Link to="#" className="text-inherit">
                        <i className="flaticon-calendar-date text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 31 March 2024
                      </Link>
                    </li>
                    <li className="inline-block relative text-[13px] mr-3">
                      <Link to="#" className="text-inherit">
                        <i className="flaticon-chat-bubble text-xs text-primary mr-[5px] translate-y-[1px] scale-150" /> 2.5K{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
                <h5 className="mb-2"><Link to="/blog-standard">{title}</Link></h5>
                <p>There are many variations of passages of Lorem Ipsum available, but the majority have.</p>
                <div>
                  <Link to="/blog-standard"
                    className="py-3 px-6 text-sm font-medium relative inline-flex items-center justify-center rounded-md mt-[18px]  bg-primary border-primary text-white btn-hover-2"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}

      <div className="swiper-nav">
        <div className="swiper-button-prev blog-button-prev group hover:before:animate-spin">
            <i className="fa-solid fa-arrow-left text-white group-hover:text-primary relative" />
        </div>
        <div className="swiper-button-next blog-button-next group hover:before:animate-spin">
            <i className="fa-solid fa-arrow-right text-white group-hover:text-primary relative" />
        </div>
      </div>
    </Swiper>
  );
};

export default OurBlog;
