import { Swiper, SwiperSlide } from "swiper/react";
import { Home2OurMenuArr } from "../elements/JsonData";
import { Autoplay, Navigation } from "swiper/modules";
import { Link } from "react-router-dom";
import { useState } from "react";

interface PropFile {
  prev: string;
  next: string;
}
const Home2OurMenu = ({ prev, next }: PropFile) => {
  const [active, setActive] = useState<number>();
  return (
    <div className="container">
      <Swiper
        className="swiper menu-swiper2 swiper-visible swiper-item-4 overflow-visible"
        slidesPerView={4}
        spaceBetween={20}
        speed={1500}
        loop={true}
        modules={[Autoplay, Navigation]}
        autoplay={{ delay: 1500 }}
        navigation={{
          prevEl: `.${prev}`,
          nextEl: `.${next}`,
        }}
        breakpoints={{
          1200: { slidesPerView: 4 },
          991: { slidesPerView: 3 },
          575: { slidesPerView: 2 },
          240: { slidesPerView: 1 },
        }}
      >
        {Home2OurMenuArr.map(({ img, name, price }, ind) => (
          <SwiperSlide key={ind}>
            <div
              className={`dz-img-box3 box-hover group style-4 bg-white p-[18px] flex flex-col h-[160px] relative z-[1] overflow-hidden rounded-[10px] ${
                active == ind ? "active" : ""
              }`}
              onMouseEnter={() => {
                setActive(ind);
              }}
            >
              <div className="menu-detail flex items-center mb-3">
                <div className="dz-media mr-5 w-[60px] min-w-[60px] h-[60px]">
                  <img src={img} alt="/" />
                </div>
                <div className="dz-content">
                  <h6 className="title mb-[3px] duration-500"><Link to="/product-detail">{name}</Link></h6>
                  <p>Delicious and Spicy</p>
                </div>
              </div>
              <div className="menu-footer max-w-[110px] mt-auto">
                <span className="text-bodycolor text-[13px]">Regular Price</span>{" "}
                <span className="price duration-500">{price}</span>
              </div>
              <Link className="detail-btn" to="/product-detail">
                <i className="fa-solid fa-plus"/>
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Home2OurMenu;
